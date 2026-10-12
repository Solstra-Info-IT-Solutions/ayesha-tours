/**
 * Sends a copy of a form submission to /api/lead (emailed to the business).
 * Fire-and-forget: it must never delay or block opening WhatsApp, and a
 * failure here must never show an error to the visitor.
 */
export type LeadFormType =
  | "contact_form"
  | "travel_quote"
  | "transport_quote"
  | "enquiry_form";

export function emailLead(type: LeadFormType, data: unknown) {
  try {
    void fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, data }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* ignore */
  }
}
