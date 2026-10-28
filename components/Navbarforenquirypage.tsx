"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowUpRight,
  Map,
  Plane,
  Car,
  Images,
  CircleHelp,
  Sparkles,
} from "lucide-react";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Destinations", href: "/destinations" },
];

const exploreLinks = [
  {
    name: "Umrah & Haj Packages",
    description: "Economy, standard & premium options",
    href: "/tour-packages",
    icon: Map,
  },
  {
    name: "Pilgrimage Journeys",
    description: "Family, group & Ramadan Umrah",
    href: "/tours",
    icon: Plane,
  },
  {
    name: "Transport & Ziyarat",
    description: "Airport, intercity & ziyarat transfers",
    href: "/transport",
    icon: Car,
  },
  {
    name: "Gallery",
    description: "Makkah, Madinah & the journey",
    href: "/gallery",
    icon: Images,
  },
  {
    name: "FAQ",
    description: "Answers for first-time pilgrims",
    href: "/faq",
    icon: CircleHelp,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const pathname = usePathname();
  const exploreRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href;
  };

  const isExploreActive = exploreLinks.some(
    (link) => pathname === link.href
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target as Node)
      ) {
        setIsExploreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsExploreOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[100] w-full">
      <nav className="relative border-b border-[#3f1152]/10 bg-[#f9f6f8]/95 backdrop-blur-xl">
        {/* PREMIUM GOLD LINE */}

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e40e83]/70 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-12">
          {/* =====================================================
              DESKTOP / MAIN NAVBAR
          ====================================================== */}

          <div className="flex h-[74px] items-center justify-between sm:h-[82px] lg:grid lg:h-[88px] lg:grid-cols-[minmax(120px,1fr)_auto_minmax(180px,1fr)] lg:gap-5">
            {/* =====================================================
                LOGO
            ====================================================== */}

            <Link
              href="/"
              aria-label="Ayesha Tours – Haj & Umrah Packages, home"
              className="group flex min-w-0 items-center"
            >
              <img
                src="/logo.png"
                alt="Ayesha Tours – Haj & Umrah Packages"
                width={1099}
                height={684}
                className="h-[52px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-[60px] lg:h-[66px]"
              />
            </Link>

            {/* =====================================================
                DESKTOP NAVIGATION
            ====================================================== */}

            <div className="hidden items-center justify-center lg:flex">
              <div className="flex items-center rounded-full border border-[#3f1152]/10 bg-[#f2eff1] p-1 shadow-[0_6px_25px_rgba(63,17,82,0.03)]">
                {/* HOME */}

                <DesktopNavLink
                  href="/"
                  active={isActive("/")}
                >
                  Home
                </DesktopNavLink>

                {/* ABOUT */}

                <DesktopNavLink
                  href="/about"
                  active={isActive("/about")}
                >
                  About Us
                </DesktopNavLink>

                {/* SERVICES */}

                <DesktopNavLink
                  href="/services"
                  active={isActive("/services")}
                >
                  Services
                </DesktopNavLink>

                {/* DESTINATIONS */}

                <DesktopNavLink
                  href="/destinations"
                  active={isActive("/destinations")}
                >
                  Destinations
                </DesktopNavLink>

                {/* EXPLORE */}

                <div
                  ref={exploreRef}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setIsExploreOpen((prev) => !prev)
                    }
                    className={`group relative flex h-[44px] items-center gap-1.5 rounded-full px-4 text-[12px] font-medium transition-all duration-300 xl:px-5 xl:text-[13px] ${
                      isExploreActive
                        ? "bg-white text-[#3f1152] shadow-[0_5px_18px_rgba(63,17,82,0.10)]"
                        : "text-[#6e6272] hover:bg-white/70 hover:text-[#3f1152]"
                    }`}
                    aria-expanded={isExploreOpen}
                  >
                    <span className="relative z-10 whitespace-nowrap">
                      Explore
                    </span>

                    <ChevronDown
                      size={14}
                      className={`relative z-10 transition-transform duration-300 ${
                        isExploreOpen ? "rotate-180" : ""
                      }`}
                    />

                    <span
                      className={`absolute bottom-[7px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#e40e83] transition-all duration-300 ${
                        isExploreActive
                          ? "w-5"
                          : "w-0 group-hover:w-5"
                      }`}
                    />
                  </button>

                  {/* DROPDOWN */}

                  <div
                    className={`absolute left-1/2 top-[58px] w-[310px] -translate-x-1/2 overflow-hidden rounded-[22px] border border-[#e1d7dc] bg-[#fffdfe] p-2 shadow-[0_25px_70px_rgba(63,17,82,0.16)] transition-all duration-300 ${
                      isExploreOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    {/* HEADER */}

                    <div className="px-4 pb-3 pt-3">
                      <div className="flex items-center gap-2.5">
                        <Sparkles
                          size={13}
                          className="text-[#e40e83]"
                        />

                        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#4e1367]">
                          Explore Ayesha Tours
                        </span>
                      </div>
                    </div>

                    {/* LINKS */}

                    <div className="space-y-1">
                      {exploreLinks.map((link) => {
                        const Icon = link.icon;
                        const active = isActive(link.href);

                        return (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() =>
                              setIsExploreOpen(false)
                            }
                            className={`group/item flex items-center gap-3 rounded-[16px] px-3 py-3 transition-all duration-300 ${
                              active
                                ? "bg-[#3f1152] text-white"
                                : "hover:bg-[#f4eff2]"
                            }`}
                          >
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                                active
                                  ? "bg-white/10 text-[#ff058f]"
                                  : "bg-[#4e1367]/7 text-[#4e1367]"
                              }`}
                            >
                              <Icon
                                size={17}
                                strokeWidth={1.7}
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <p
                                className={`text-[12px] font-semibold ${
                                  active
                                    ? "text-white"
                                    : "text-[#3f1152]"
                                }`}
                              >
                                {link.name}
                              </p>

                              <p
                                className={`mt-0.5 text-[10px] ${
                                  active
                                    ? "text-white/60"
                                    : "text-[#857d89]"
                                }`}
                              >
                                {link.description}
                              </p>
                            </div>

                            <ChevronRight
                              size={16}
                              className={
                                active
                                  ? "text-[#ff058f]"
                                  : "text-[#b0aab2] transition-all group-hover/item:translate-x-1"
                              }
                            />
                          </Link>
                        );
                      })}
                    </div>

                    {/* FOOTER */}

                    <div className="mt-2 flex items-center justify-center gap-2 border-t border-[#e3dbdf] px-3 pb-2 pt-3">
                      <span className="h-px w-6 bg-[#e40e83]/50" />

                      <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#a19ba3]">
                        Haj & Umrah Packages
                      </span>

                      <span className="h-px w-6 bg-[#e40e83]/50" />
                    </div>
                  </div>
                </div>

                {/* CONTACT */}

                <DesktopNavLink
                  href="/contact"
                  active={isActive("/contact")}
                >
                  Contact Us
                </DesktopNavLink>
              </div>
            </div>

            {/* =====================================================
                DESKTOP CTA
            ====================================================== */}

            {/*<div className="hidden items-center justify-end lg:flex">
              <Link
                href="/enquiry"
                className="group relative inline-flex h-[46px] items-center justify-center overflow-hidden whitespace-nowrap rounded-full bg-[#3f1152] px-5 text-[9px] font-bold uppercase tracking-[1.3px] text-white shadow-[0_10px_28px_rgba(63,17,82,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(63,17,82,0.25)] xl:px-6"
              >
                <span className="absolute inset-0 translate-x-[-105%] bg-[#e40e83] transition-transform duration-500 group-hover:translate-x-0" />

                <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover:text-white">
                  Plan Your Journey

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </div>*/}

            {/* =====================================================
                MOBILE BUTTON
            ====================================================== */}

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
                isOpen
                  ? "border-[#3f1152] bg-[#3f1152] text-white"
                  : "border-[#3f1152]/15 bg-white text-[#3f1152] shadow-sm"
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={21} />}
            </button>
          </div>

          {/* =====================================================
              MOBILE MENU
          ====================================================== */}

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
              isOpen
                ? "max-h-[900px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="pb-6 pt-2">
              <div className="relative overflow-hidden rounded-[24px] border border-[#e1d7dc] bg-[#fffdfe] p-3 shadow-[0_20px_60px_rgba(63,17,82,0.12)]">
                <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#3f1152] via-[#e40e83] to-[#3f1152]" />

                {/* HEADER */}

                <div className="flex items-center gap-3 px-4 pb-3 pt-4">
                  <span className="h-[2px] w-8 bg-[#e40e83]" />

                  <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#4e1367]">
                    Your Pilgrimage, Planned
                  </span>
                </div>

                {/* MAIN LINKS */}

                <div className="space-y-1">
                  {mainLinks.map((link, index) => (
                    <MobileNavLink
                      key={link.name}
                      href={link.href}
                      label={link.name}
                      index={index + 1}
                      active={isActive(link.href)}
                      onClick={() => setIsOpen(false)}
                    />
                  ))}
                </div>

                {/* EXPLORE */}

                <div className="mx-4 my-4 h-px bg-gradient-to-r from-transparent via-[#e40e83]/30 to-transparent" />

                <div className="px-4 pb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles
                      size={12}
                      className="text-[#e40e83]"
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#4e1367]">
                      More To Explore
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  {exploreLinks.map((link, index) => {
                    const Icon = link.icon;
                    const active = isActive(link.href);

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center justify-between rounded-[14px] px-4 py-3 transition-all duration-300 ${
                          active
                            ? "bg-[#3f1152] text-white"
                            : "text-[#5d5163] hover:bg-[#f5f1f3]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              active
                                ? "bg-white/10 text-[#ff058f]"
                                : "bg-[#4e1367]/7 text-[#4e1367]"
                            }`}
                          >
                            <Icon size={15} />
                          </div>

                          <span className="text-[13px] font-semibold">
                            {link.name}
                          </span>
                        </div>

                        <span
                          className={`text-[9px] font-bold ${
                            active
                              ? "text-[#ff058f]"
                              : "text-[#a39da6]"
                          }`}
                        >
                          {String(index + 6).padStart(2, "0")}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* DIVIDER */}

                <div className="mx-4 my-4 h-px bg-gradient-to-r from-transparent via-[#e40e83]/30 to-transparent" />

                {/* CTA */}

                {/*<Link
                  href="/enquiry"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex h-[56px] items-center justify-center overflow-hidden rounded-[16px] bg-[#3f1152] text-[10px] font-bold uppercase tracking-[1.7px] text-white shadow-[0_10px_25px_rgba(63,17,82,0.18)]"
                >
                  <span className="absolute inset-0 translate-y-full bg-[#e40e83] transition-transform duration-500 group-hover:translate-y-0" />

                  <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white">
                    Plan Your Journey

                    <ArrowUpRight size={16} />
                  </span>
                </Link>*/}

                {/* FOOTER */}

                <div className="flex items-center justify-center gap-3 pb-2 pt-5">
                  <span className="h-px w-7 bg-[#e40e83]/40" />

                  <span className="text-[8px] font-semibold uppercase tracking-[2px] text-[#a7a0aa]">
                    Labbaik Allahumma Labbaik
                  </span>

                  <span className="h-px w-7 bg-[#e40e83]/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* =====================================================
   DESKTOP NAV LINK
===================================================== */

function DesktopNavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex h-[44px] items-center justify-center rounded-full px-4 text-[12px] font-medium transition-all duration-300 xl:px-5 xl:text-[13px] ${
        active
          ? "bg-white text-[#3f1152] shadow-[0_5px_18px_rgba(63,17,82,0.10)]"
          : "text-[#6e6272] hover:bg-white/70 hover:text-[#3f1152]"
      }`}
    >
      <span className="relative z-10 whitespace-nowrap">
        {children}
      </span>

      <span
        className={`absolute bottom-[7px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#e40e83] transition-all duration-300 ${
          active ? "w-5" : "w-0 group-hover:w-5"
        }`}
      />
    </Link>
  );
}

/* =====================================================
   MOBILE NAV LINK
===================================================== */

function MobileNavLink({
  href,
  label,
  index,
  active,
  onClick,
}: {
  href: string;
  label: string;
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex items-center justify-between rounded-[14px] px-4 py-3.5 transition-all duration-300 ${
        active
          ? "bg-[#3f1152] text-white shadow-[0_8px_20px_rgba(63,17,82,0.15)]"
          : "text-[#5d5163] hover:bg-[#f5f1f3] hover:text-[#3f1152]"
      }`}
    >
      <div className="flex items-center gap-3.5">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold ${
            active
              ? "bg-white/10 text-[#fb1895]"
              : "bg-[#4e1367]/7 text-[#4e1367]/60"
          }`}
        >
          {String(index).padStart(2, "0")}
        </span>

        <span className="text-[14px] font-semibold">
          {label}
        </span>
      </div>

      <ChevronRight
        size={17}
        className={`transition-all duration-300 ${
          active
            ? "text-[#fb1895]"
            : "text-[#b0aab2] group-hover:translate-x-1 group-hover:text-[#4e1367]"
        }`}
      />
    </Link>
  );
}
