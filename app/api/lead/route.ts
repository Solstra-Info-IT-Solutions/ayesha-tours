import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

/**
 * Email fallback for every website form.
 * The forms still open WhatsApp, but each submission is also emailed here so
 * no lead is lost if the visitor never presses "send" in WhatsApp.
 *
 * Env vars: SMTP_USER, SMTP_PASS (Gmail app password), optional SMTP_HOST,
 * SMTP_PORT, LEAD_TO_EMAIL (defaults to SMTP_USER).
 */

const FORM_LABELS: Record<string, string> = {
  contact_form: "Contact Message",
  travel_quote: "Travel Quote Request",
  transport_quote: "Transport Quote Request",
  enquiry_form: "Travel Enquiry",
};

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT = 5; // submissions
const RATE_WINDOW_MS = 10 * 60 * 1000; // per 10 minutes per IP
const hits = new Map<string, number[]>();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const humanize = (key: string) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]+/g, " ")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();

function flatten(
  value: unknown,
  prefix = "",
  out: [string, string][] = []
): [string, string][] {
  if (value === null || value === undefined || value === "") return out;

  if (Array.isArray(value)) {
    if (value.length) out.push([prefix, value.map(String).join(", ")]);
  } else if (typeof value === "object") {
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      flatten(v, prefix ? `${prefix} – ${humanize(k)}` : humanize(k), out);
    }
  } else {
    out.push([prefix, String(value)]);
  }
  return out;
}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ success: false }, { status: 413 });
    }

    const body = JSON.parse(raw) as {
      type?: string;
      data?: Record<string, unknown>;
      website?: string; // honeypot, real visitors never fill it
    };

    // Bots fill hidden fields; pretend success so they go away quietly.
    if (body.website) return NextResponse.json({ success: true });

    const type = String(body.type || "");
    if (!FORM_LABELS[type] || !body.data || typeof body.data !== "object") {
      return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json({ success: false, message: "Too many requests" }, { status: 429 });
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!user || !pass) {
      console.error("Lead email not sent: SMTP_USER / SMTP_PASS are not configured.");
      return NextResponse.json({ success: false, message: "Email not configured" }, { status: 503 });
    }

    const rows = flatten(body.data);
    const find = (...keys: string[]) =>
      rows.find(([label]) => keys.some((k) => label.toLowerCase().includes(k)))?.[1] || "";

    const name = find("full name", "name");
    const phone = find("phone", "mobile");
    const email = find("email");
    const label = FORM_LABELS[type];

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px">
        <h2 style="color:#0e4655;margin:0 0 4px">New ${escapeHtml(label)}</h2>
        <p style="color:#666;margin:0 0 16px">Received from the website</p>
        <table style="border-collapse:collapse;width:100%">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px 10px;border:1px solid #e6dfd3;background:#faf9f5;font-weight:bold;vertical-align:top;width:35%">${escapeHtml(k)}</td><td style="padding:8px 10px;border:1px solid #e6dfd3;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`
            )
            .join("")}
        </table>
        <p style="margin-top:16px;color:#666">Reply to this email to answer the customer${phone ? `, or call/WhatsApp ${escapeHtml(phone)}` : ""}.</p>
      </div>`;

    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

    const port = Number(process.env.SMTP_PORT || 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const emailOk = /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email);

    await transporter.sendMail({
      from: `"Global Horizons Website" <${user}>`,
      to: process.env.LEAD_TO_EMAIL || user,
      replyTo: emailOk ? email : undefined,
      subject: `New ${label}${name ? ` – ${name.slice(0, 60).replace(/[\r\n]/g, " ")}` : ""}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead email error:", error);
    return NextResponse.json({ success: false, message: "Could not send" }, { status: 500 });
  }
}
