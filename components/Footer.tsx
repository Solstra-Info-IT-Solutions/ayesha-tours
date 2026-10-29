import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { DEMO_MODE, SITE, mailLink, phoneLink, whatsappLink } from "@/lib/site";

const columns = [
  {
    title: "Journeys",
    links: [
      { label: "Umrah & Haj Journeys", href: "/tour-packages" },
      { label: "Pilgrimage Styles", href: "/tours" },
      { label: "Makkah & Madinah", href: "/destinations" },
      { label: "Transport & Ziyarat", href: "/transport" },
      { label: "Request a Quote", href: "/request-quote" },
    ],
  },
  {
    title: "Ayesha Tours",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Questions", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Booking Policy", href: "/booking-policy" },
      { label: "Cancellation & Refund", href: "/cancellation-refund-policy" },
      { label: "Payment Policy", href: "/payment-policy" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Statement */}
        <div className="grid gap-10 border-b border-emerald-line/70 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p lang="ar" dir="rtl" className="inline-block font-arabic text-[28px] leading-none text-gold sm:text-[34px]">
              لبيك اللهم لبيك
            </p>
            <p className="mt-6 font-serif text-[44px] leading-[0.95] text-ivory sm:text-[64px] lg:text-[84px]">
              Here I am,
              <br />
              <span className="italic text-ivory/80">O Allah, here I am.</span>
            </p>
          </div>
          <div className="lg:justify-self-end lg:text-right">
            <p className="max-w-md text-[15px] leading-7 text-sage lg:ml-auto">
              Umrah and Haj journeys planned with care – clear package details,
              honest guidance and support from your first question to your
              return home.
            </p>
            <Link
              href="/enquiry"
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-ivory px-6 text-[14px] font-semibold text-night transition-colors hover:bg-gold"
            >
              Plan My Pilgrimage <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="Ayesha Tours, home"
              className="inline-flex rounded-[14px] bg-ivory px-4 py-2.5"
            >
              <img
                src="/logo.png"
                alt="Ayesha Tours – Haj & Umrah Packages"
                width={1099}
                height={684}
                loading="lazy"
                className="h-[64px] w-auto"
              />
            </Link>

            <ul className="mt-8 space-y-4 text-[14px] text-sage">
              <li>
                <a href={phoneLink()} className="inline-flex items-center gap-3 hover:text-ivory">
                  <Phone size={16} className="text-gold" aria-hidden /> {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink("Assalamu alaikum Ayesha Tours, I would like to know about your Umrah packages.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 hover:text-ivory"
                >
                  <MessageCircle size={16} className="text-gold" aria-hidden /> WhatsApp
                </a>
              </li>
              <li>
                <a href={mailLink()} className="inline-flex items-center gap-3 break-all hover:text-ivory">
                  <Mail size={16} className="text-gold" aria-hidden /> {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0 text-gold" aria-hidden />
                <span>
                  {SITE.address.street}
                  {SITE.address.region ? `, ${SITE.address.locality}, ${SITE.address.region}` : ""}
                </span>
              </li>
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-[12px] uppercase tracking-[0.28em] text-gold">{column.title}</p>
              <ul className="mt-6 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-ivory/80 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-emerald-line/70 py-6 text-[13px] text-sage md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name} · Haj &amp; Umrah Packages
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {DEMO_MODE && <span>Demo website – details are illustrative</span>}
            <Link href="/image-credits" className="hover:text-ivory">
              Image credits
            </Link>
            <Link href="/privacy-policy" className="hover:text-ivory">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
