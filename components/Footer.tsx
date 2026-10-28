import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Star,
  Sparkles,
  ShieldCheck,
  FileText,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { SITE, phoneLink, mailLink, whatsappLink } from "@/lib/site";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Umrah & Haj Packages", href: "/tour-packages" },
    { label: "Services", href: "/services" },
    { label: "Makkah & Madinah", href: "/destinations" },
    { label: "Transport & Ziyarat", href: "/transport" },
    { label: "Pilgrimage Journeys", href: "/tours" },
  ];

  const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    label: "Booking Policy",
    href: "/booking-policy",
  },
  {
    label: "Cancellation & Refund",
    href: "/cancellation-refund-policy",
  },
  {
    label: "Payment Policy",
    href: "/payment-policy",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
];

  return (
    <footer className="relative overflow-hidden bg-[#3e0e52] text-white">
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      {/* Top Gold Accent */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff058f]/80 to-transparent" />

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[480px] w-[480px] rounded-full border border-[#ff058f]/[0.05]" />

      <div className="pointer-events-none absolute right-[10%] top-[20%] h-[220px] w-[220px] rounded-full bg-[#ff058f]/[0.025] blur-[90px]" />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10 xl:px-6">

        {/* =====================================================
            TOP CTA
        ====================================================== */}

        <section className="grid gap-8 border-b border-white/[0.10] py-12 sm:py-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:gap-12">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff058f]" />

              <div className="flex items-center gap-2">
                <Sparkles
                  size={12}
                  className="text-[#ff058f]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ff058f]">
                  Ayesha Tours
                </span>
              </div>
            </div>

            <h2 className="mt-5 max-w-[700px] font-serif text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[48px]">
              Your Journey To The Haramain

              <span className="block italic font-medium text-[#ff058f]">
                Begins With One Conversation.
              </span>
            </h2>

            <p className="mt-4 max-w-[600px] text-[14px] leading-6 text-[#c9b8d0] sm:text-[15px]">
              From choosing the right Umrah or Haj package to flights, hotels
              and ziyarat, we help you prepare calmly so you can focus on
              your worship.
            </p>
          </div>

          <div className="lg:flex lg:justify-end">
            <Link
              href="/request-quote"
              className="group relative inline-flex min-h-[52px] items-center justify-center gap-4 overflow-hidden border border-[#ff058f]/60 px-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff058f] transition-all duration-500 hover:-translate-y-1 hover:border-[#ff058f] hover:text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#ff058f] transition-transform duration-500 group-hover:translate-y-0" />

              <span className="relative z-10">
                Request A Quote
              </span>

              <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <section className="grid gap-12 py-12 sm:py-14 md:grid-cols-2 xl:grid-cols-[1.15fr_0.8fr_0.9fr_1.1fr_0.8fr] xl:gap-10">

          {/* =====================================================
              BRAND
          ====================================================== */}

          <div>
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-3"
            >
              {/* LOGO IMAGE */}

              <div className="relative flex shrink-0 items-center justify-center rounded-2xl bg-white px-4 py-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:scale-[1.03]">

                <img
                  src="/logo.png"
                  alt="Ayesha Tours – Haj & Umrah Packages"
                  width={1099}
                  height={684}
                  loading="lazy"
                  className="h-[64px] w-auto object-contain sm:h-[72px]"
                />

              </div>


              {/* BRAND TEXT */}



            </Link>

            <p className="mt-6 max-w-[310px] text-[13px] leading-6 text-[#c1afc8]">
              Umrah and Haj journeys planned with care – clear package
              details, honest guidance and support from your first enquiry
              to your safe return home.
            </p>

            {/* Trust Badge */}

            <div className="mt-6 inline-flex items-center gap-3 border border-white/[0.09] bg-white/[0.035] px-3.5 py-3 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff058f]/10 text-[#ff058f]">
                <ShieldCheck size={16} />
              </div>

              <div>
                <p className="text-[11px] font-semibold text-white">
                  Pilgrimage Travel Support
                </p>

                <p className="mt-0.5 text-[9px] uppercase tracking-[0.1em] text-[#a78eb2]">
                  Guidance • Care • Clarity
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ====================================================== */}

          <div>
            <FooterHeading
              eyebrow="Navigate"
              title="Explore"
            />

            <div className="mt-6 flex flex-col">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between border-b border-white/[0.06] py-2.5 text-[13px] text-[#c1afc8] transition-all duration-300 hover:border-[#ff058f]/30 hover:text-white"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {link.label}
                  </span>

                  <ChevronRight
                    size={15}
                    className="text-[#ff058f] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>
              ))}

              <Link
                href="/request-quote"
                className="group flex items-center justify-between border-b border-white/[0.06] py-2.5 text-[13px] text-[#c1afc8] transition-all duration-300 hover:border-[#ff058f]/30 hover:text-white"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  Request A Quote
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-[#ff058f] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              LEGAL
          ====================================================== */}

          <div>
  <FooterHeading
    eyebrow="Legal"
    title="Policies"
  />

  <div className="mt-6 flex flex-col">
    {legalLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className="group flex items-center justify-between border-b border-white/[0.06] py-2.5 text-[13px] text-[#c1afc8] transition-all duration-300 hover:border-[#ff058f]/30 hover:text-white"
      >
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {link.label}
        </span>

        <ChevronRight
          size={14}
          className="text-[#ff058f] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        />
      </Link>
    ))}
  </div>
</div>

          {/* =====================================================
              CONTACT
          ====================================================== */}

          <div>
            <FooterHeading
              eyebrow="Contact"
              title="Get In Touch"
            />

            <div className="mt-6 space-y-5">

              {/* Location */}

              <div className="group flex gap-3">
                <ContactIcon>
                  <MapPin size={16} />
                </ContactIcon>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#ff058f]">
                    Visit Us
                  </p>

                  <p className="mt-1.5 max-w-[270px] text-[13px] leading-5 text-[#c1afc8]">
                    {SITE.address.street}
                    {SITE.address.region ? `, ${SITE.address.locality}, ${SITE.address.region}` : ""}
                  </p>
                </div>
              </div>

              {/* Phone */}

              <a
                href={phoneLink()}
                className="group flex gap-3"
              >
                <ContactIcon>
                  <Phone size={15} />
                </ContactIcon>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#ff058f]">
                    Call Us
                  </p>

                  <p className="mt-1.5 text-[13px] text-[#c1afc8] transition-colors duration-300 group-hover:text-white">
                    {SITE.phone}
                  </p>
                </div>
              </a>

              {/* Email */}

              <a
                href={mailLink()}
                className="group flex gap-3"
              >
                <ContactIcon>
                  <Mail size={15} />
                </ContactIcon>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#ff058f]">
                    Email Us
                  </p>

                  <p className="mt-1.5 break-all text-[13px] text-[#c1afc8] transition-colors duration-300 group-hover:text-white">
                    {SITE.email}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* =====================================================
              SOCIAL
          ====================================================== */}

          <div>
            <FooterHeading
              eyebrow="Follow"
              title="Stay Connected"
            />

            <p className="mt-6 max-w-[240px] text-[13px] leading-6 text-[#c1afc8]">
              Package updates, departure news and pilgrim guidance – social
              channels will be linked once confirmed.
            </p>

            {/* Social Icons */}

            <div className="mt-5 flex gap-2.5">
              {/* Instagram / Facebook links are added here once the client confirms them */}
              <SocialButton
                href="/contact"
                label="Instagram (link coming soon)"
              >
                <FaInstagram size={17} />
              </SocialButton>

              <SocialButton
                href="/contact"
                label="Facebook (link coming soon)"
              >
                <FaFacebookF size={16} />
              </SocialButton>

              <SocialButton
                href={whatsappLink("Assalamu alaikum, I would like to know about your Umrah packages.")}
                label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </SocialButton>
            </div>

            {/* Premium Card */}

            <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#ff058f]/20 bg-gradient-to-br from-[#ff058f]/10 via-transparent to-transparent p-4">
              <div className="absolute right-[-15px] top-[-18px] text-[#ff058f]/10">
                <Star
                  size={70}
                  fill="currentColor"
                />
              </div>

              <div className="relative">
                <div className="flex items-center gap-2">
                  <Star
                    size={12}
                    className="fill-[#ff058f] text-[#ff058f]"
                  />

                  <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#ff058f]">
                    Pilgrim Care
                  </span>
                </div>

                <p className="mt-3 font-serif text-[16px] font-semibold leading-5 text-white">
                  A journey of the heart.

                  <span className="block italic text-[#ff058f]">
                    Planned with care.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent" />

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <section className="flex flex-col gap-4 py-5 text-[11px] text-[#a68eb0] md:flex-row md:items-center md:justify-between">

          <p className="leading-5">
            © {new Date().getFullYear()} {SITE.name}. Haj & Umrah Packages.
            <span className="hidden sm:inline">
              {" "}All rights reserved.
            </span>
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/cancellation-refund-policy"
              className="transition-colors duration-300 hover:text-white"
            >
              Refund Policy
            </Link>

            <Link
              href="/image-credits"
              className="transition-colors duration-300 hover:text-white"
            >
              Image Credits
            </Link>

            <span className="hidden h-1 w-1 rounded-full bg-[#ff058f] lg:block" />

            <span className="text-[#db1481]">
              Labbaik Allahumma Labbaik
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
}


/* =====================================================
   FOOTER HEADING
===================================================== */

function FooterHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-5 bg-[#ff058f]" />

        <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#ff058f]">
          {eyebrow}
        </span>
      </div>

      <h3 className="mt-3 font-serif text-[19px] font-bold text-white">
        {title}
      </h3>
    </div>
  );
}


/* =====================================================
   CONTACT ICON
===================================================== */

function ContactIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.035] text-[#ff058f] transition-all duration-300 group-hover:border-[#ff058f]/50 group-hover:bg-[#ff058f]/10">
      {children}
    </div>
  );
}


/* =====================================================
   SOCIAL BUTTON
===================================================== */

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.035] text-[#c9b9d0] transition-all duration-300 hover:-translate-y-1 hover:border-[#ff058f] hover:text-white"
    >
      <span className="absolute inset-0 translate-y-full bg-[#ff058f] transition-transform duration-300 group-hover:translate-y-0" />

      <span className="relative z-10">
        {children}
      </span>
    </a>
  );
}