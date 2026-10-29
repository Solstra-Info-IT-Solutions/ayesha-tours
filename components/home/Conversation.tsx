"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { SITE, mailLink, phoneLink, whatsappLink } from "@/lib/site";
import { trackLead } from "@/lib/analytics";
import { emailLead } from "@/lib/lead-client";

type Fields = { name: string; phone: string; email: string; interest: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const interests = ["Umrah", "Ramadan Umrah", "Family Umrah", "Haj", "Not sure yet"];

const validate = (f: Fields): Errors => {
  const errors: Errors = {};
  if (f.name.trim().length < 2) errors.name = "Please enter your name.";
  if (f.phone.replace(/[^\d]/g, "").length < 8) errors.phone = "Please enter a phone or WhatsApp number we can reach you on.";
  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) errors.email = "Please check the email address, or leave it blank.";
  return errors;
};

export default function Conversation() {
  const [errors, setErrors] = useState<Errors>({});
  const [sentLink, setSentLink] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as unknown as Fields;
    const found = validate(data);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const message = [
      "🕋 *NEW ENQUIRY – AYESHA TOURS WEBSITE*",
      "",
      `Name: ${data.name.trim()}`,
      `Phone: ${data.phone.trim()}`,
      data.email.trim() ? `Email: ${data.email.trim()}` : "",
      `Interested in: ${data.interest}`,
      "",
      data.message.trim() ? `Message: ${data.message.trim()}` : "",
    ]
      .filter((line, i, all) => line !== "" || (all[i - 1] ?? "") !== "")
      .join("\n")
      .trim();

    const link = whatsappLink(message);
    trackLead("contact_form", { interest: data.interest });
    emailLead("contact_form", data);
    window.open(link, "_blank", "noopener,noreferrer");
    setSentLink(link);
    formRef.current?.reset();
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const fieldClass = (name: keyof Fields) =>
    `mt-2 block w-full rounded-xl border bg-white px-4 text-[15px] text-charcoal placeholder:text-mist/70 focus:border-night ${
      errors[name] ? "border-error" : "border-stone"
    }`;

  const describedBy = (name: keyof Fields) => (errors[name] ? `${name}-error` : undefined);

  return (
    <section id="conversation" aria-labelledby="conversation-title" className="relative overflow-hidden bg-night text-ivory">
      <Image
        src="/images/demo/clock-tower.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/55" />

      <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_minmax(0,560px)] lg:gap-20 lg:px-12">
        <div className="flex flex-col justify-between gap-12">
          <div data-reveal="up">
            <p className="flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" aria-hidden /> Begin here
            </p>
            <h2 id="conversation-title" className="mt-6 font-serif text-[length:var(--text-headline)] font-medium leading-[0.95]">
              Your journey begins
              <br />
              <span className="italic text-ivory/75">with a conversation.</span>
            </h2>
            <p className="mt-8 max-w-md text-[16px] leading-7 text-sage">
              Share a few details and we&apos;ll reply with suitable options. Or
              simply message us – whichever feels easier.
            </p>
          </div>

          <ul className="space-y-5 text-[15px]">
            <li>
              <a
                href={whatsappLink("Assalamu alaikum Ayesha Tours, I would like to plan my pilgrimage.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-ivory hover:text-gold"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 group-hover:border-gold">
                  <MessageCircle size={18} aria-hidden />
                </span>
                Message us on WhatsApp
              </a>
            </li>
            <li>
              <a href={phoneLink()} className="group inline-flex items-center gap-4 text-ivory hover:text-gold">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 group-hover:border-gold">
                  <Phone size={18} aria-hidden />
                </span>
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={mailLink("Umrah / Haj enquiry")} className="group inline-flex items-center gap-4 break-all text-ivory hover:text-gold">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ivory/25 group-hover:border-gold">
                  <Mail size={18} aria-hidden />
                </span>
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-[26px] bg-ivory p-6 text-charcoal shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)] sm:p-10">
          {sentLink ? (
            <div ref={statusRef} tabIndex={-1} role="status" className="outline-none">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-ink">Almost done</p>
              <p className="mt-4 font-serif text-[34px] leading-tight text-night">Your message is ready in WhatsApp.</p>
              <p className="mt-4 text-[15px] leading-7 text-mist">
                Please press <strong className="text-charcoal">send</strong> in WhatsApp to deliver it to
                our team – nothing has been sent until you do.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={sentLink} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-night px-6 text-[14px] font-semibold text-ivory hover:bg-emerald-soft">
                  Open WhatsApp again <ArrowUpRight size={16} aria-hidden />
                </a>
                <button type="button" onClick={() => setSentLink(null)} className="inline-flex h-12 items-center rounded-full border border-night/20 px-6 text-[14px] text-night hover:border-night">
                  Write another message
                </button>
              </div>
            </div>
          ) : (
            <form ref={formRef} method="post" noValidate onSubmit={handleSubmit} aria-describedby="form-note">
              <p className="font-serif text-[30px] leading-tight text-night">Tell us about your journey</p>
              <p id="form-note" className="mt-2 text-[14px] text-mist">Fields marked * are required.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="c-name" className="text-[13px] font-semibold">Full name *</label>
                  <input id="c-name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={describedBy("name")} className={`${fieldClass("name")} h-12`} />
                  {errors.name && <p id="name-error" className="mt-2 text-[13px] text-error">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="c-phone" className="text-[13px] font-semibold">Phone / WhatsApp *</label>
                  <input id="c-phone" name="phone" type="tel" autoComplete="tel" required aria-invalid={!!errors.phone} aria-describedby={describedBy("phone")} placeholder="+91" className={`${fieldClass("phone")} h-12`} />
                  {errors.phone && <p id="phone-error" className="mt-2 text-[13px] text-error">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="text-[13px] font-semibold">Email <span className="font-normal text-mist">(optional)</span></label>
                  <input id="c-email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={describedBy("email")} className={`${fieldClass("email")} h-12`} />
                  {errors.email && <p id="email-error" className="mt-2 text-[13px] text-error">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-interest" className="text-[13px] font-semibold">I&apos;m interested in</label>
                  <select id="c-interest" name="interest" defaultValue="Umrah" className={`${fieldClass("interest")} h-12 cursor-pointer`}>
                    {interests.map((i) => (
                      <option key={i}>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className="text-[13px] font-semibold">Anything else? <span className="font-normal text-mist">(optional)</span></label>
                  <textarea id="c-message" name="message" rows={4} placeholder="Preferred month, number of pilgrims, hotel preferences…" className={`${fieldClass("message")} py-3`} />
                </div>
              </div>

              {Object.keys(errors).length > 0 && (
                <p role="alert" className="mt-6 text-[14px] text-error">
                  Please check the highlighted fields.
                </p>
              )}

              <button type="submit" className="group mt-8 flex h-14 w-full items-center justify-between rounded-full bg-night pl-7 pr-2 text-[15px] font-semibold text-ivory transition-colors hover:bg-emerald-soft">
                Continue on WhatsApp
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-night transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={18} aria-hidden />
                </span>
              </button>
              <p className="mt-4 text-[12px] leading-5 text-mist">
                Your details are only used to answer your enquiry. See our{" "}
                <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-night">Privacy Policy</Link>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
