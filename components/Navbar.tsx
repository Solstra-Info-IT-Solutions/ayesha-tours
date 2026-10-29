"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Phone, X } from "lucide-react";
import { SITE, mailLink, phoneLink, whatsappLink } from "@/lib/site";
import Magnetic from "@/components/motion/Magnetic";

const primaryLinks = [
  { name: "Journeys", href: "/tour-packages" },
  { name: "Makkah & Madinah", href: "/destinations" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

const menuLinks = [
  { name: "Home", href: "/" },
  { name: "Umrah & Haj Journeys", href: "/tour-packages" },
  { name: "Makkah & Madinah", href: "/destinations" },
  { name: "Pilgrimage Styles", href: "/tours" },
  { name: "Services", href: "/services" },
  { name: "Transport & Ziyarat", href: "/transport" },
  { name: "About Ayesha Tours", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Questions", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

type NavbarProps = {
  /** Transparent over a full-bleed hero until the page is scrolled. */
  variant?: "solid" | "overlay";
  /** Hides the primary CTA (used on the enquiry page itself). */
  hideCta?: boolean;
};

export default function Navbar({ variant = "solid", hideCta = false }: NavbarProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when the route changes (adjusting state during render).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      menuButtonRef.current?.focus();
    };
  }, [isOpen]);

  const transparent = variant === "overlay" && !scrolled && !isOpen;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-[140] w-full">
      <div
        className={`relative transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          transparent
            ? "bg-gradient-to-b from-night/70 via-night/25 to-transparent"
            : "bg-night/95 shadow-[0_1px_0_rgba(184,154,98,0.18)] backdrop-blur-xl"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between gap-6 px-4 sm:h-[84px] sm:px-8 lg:px-12"
        >
          <Link
            href="/"
            aria-label="Ayesha Tours – Haj & Umrah Packages, home"
            className="group flex shrink-0 items-center rounded-[14px] bg-ivory px-3 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:-translate-y-0.5"
          >
            <img
              src="/logo.png"
              alt="Ayesha Tours – Haj & Umrah Packages"
              width={1099}
              height={684}
              className="h-[40px] w-auto sm:h-[48px]"
            />
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="group relative py-2 text-[13px] font-medium tracking-[0.04em] text-ivory/85 transition-colors hover:text-ivory"
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            {!hideCta && (
              <Magnetic strength={0.22} className="hidden sm:inline-flex">
              <Link
                href="/enquiry"
                className="hidden h-11 items-center gap-2 rounded-full bg-ivory px-5 text-[13px] font-semibold text-night transition-all duration-300 hover:bg-gold hover:text-night sm:inline-flex"
              >
                Plan My Pilgrimage
                <ArrowUpRight size={16} aria-hidden />
              </Link>
              </Magnetic>
            )}

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="site-menu"
              className="flex h-11 items-center gap-3 rounded-full border border-ivory/25 px-4 text-[13px] font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              <span>{isOpen ? "Close" : "Menu"}</span>
              <span aria-hidden className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${
                    isOpen ? "top-1.5 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${
                    isOpen ? "top-1.5 -rotate-45" : "top-2.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] overflow-y-auto overscroll-contain bg-night text-ivory"
          >
            {/* The menu carries its own bar so Close is always visible,
                whatever sits above the header (e.g. the demo notice). */}
            <div className="sticky top-0 z-10 border-b border-emerald-line/70 bg-night/95 backdrop-blur-xl">
              <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between gap-4 px-4 sm:h-[84px] sm:px-8 lg:px-12">
                <Link
                  href="/"
                  aria-label="Ayesha Tours – Haj & Umrah Packages, home"
                  className="flex shrink-0 items-center rounded-[14px] bg-ivory px-3 py-1.5"
                >
                  <img src="/logo.png" alt="Ayesha Tours – Haj & Umrah Packages" width={1099} height={684} className="h-[40px] w-auto sm:h-[48px]" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-11 items-center gap-3 rounded-full border border-ivory/30 px-4 text-[13px] font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  Close <X size={18} aria-hidden />
                </button>
              </div>
            </div>

            <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:px-12 lg:py-16">
              <ol className="space-y-1">
                {menuLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, y: 40, rotate: 1.5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { delay: 0.12 + index * 0.045, type: "spring", stiffness: 140, damping: 16, mass: 0.7 }
                    }
                  >
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className="group flex items-baseline gap-5 border-b border-emerald-line/70 py-3 sm:py-4"
                    >
                      <span className="w-8 shrink-0 text-[12px] tabular-nums text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-serif text-[30px] leading-none transition-colors duration-300 sm:text-[44px] ${
                          isActive(link.href) ? "text-gold" : "text-ivory group-hover:text-gold"
                        }`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ol>

              <div className="flex flex-col justify-between gap-10 lg:pl-12">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.28em] text-gold">
                    Speak with us
                  </p>
                  <p className="mt-5 max-w-sm font-serif text-[28px] leading-tight text-ivory">
                    Every journey begins with a conversation.
                  </p>
                  <ul className="mt-8 space-y-4 text-[15px] text-sage">
                    <li>
                      <a href={whatsappLink("Assalamu alaikum Ayesha Tours, I would like to plan my pilgrimage.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-ivory">
                        <MessageCircle size={17} className="text-gold" aria-hidden /> WhatsApp
                      </a>
                    </li>
                    <li>
                      <a href={phoneLink()} className="inline-flex items-center gap-3 hover:text-ivory">
                        <Phone size={17} className="text-gold" aria-hidden /> {SITE.phone}
                      </a>
                    </li>
                    <li>
                      <a href={mailLink("Umrah / Haj enquiry")} className="inline-flex items-center gap-3 break-all hover:text-ivory">
                        <Mail size={17} className="text-gold" aria-hidden /> {SITE.email}
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/enquiry"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-ivory px-6 text-[14px] font-semibold text-night transition-colors hover:bg-gold"
                  >
                    Plan My Pilgrimage <ArrowUpRight size={16} aria-hidden />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-ivory/25 px-6 text-[14px] text-ivory hover:border-gold hover:text-gold"
                  >
                    <X size={16} aria-hidden /> Close menu
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
