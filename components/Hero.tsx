import { SITE, whatsappLink } from "@/lib/site";
import {
  ArrowRight,
  MessageSquare,
  BadgeCheck,
  Car,
  Map,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative isolate min-h-[760px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] hover:scale-105"
          style={{
            backgroundImage: "url('/images/demo/kaaba-tawaf.jpg')",
          }}
        />

        {/* PREMIUM OVERLAYS */}
        <div className="absolute inset-0 bg-[#1d0727]/60" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#1d0727]/45 to-[#1d0727]/80" />

        {/* DECORATIVE GRADIENT */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#4e1368]/70 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[760px] items-center justify-center px-5 py-24 sm:px-6">
          <div className="mx-auto w-full max-w-5xl text-center text-white">
            
            {/* EXPERIENCE BADGE */}
            <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 shadow-2xl backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff38a5] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff38a5]" />
              </span>

              <Sparkles size={15} className="text-[#ff38a5]" />

              <span className="font-serif text-[11px] font-bold tracking-[2.5px] text-white sm:text-xs">
                UMRAH & HAJ PACKAGES
              </span>
            </div>

            {/* HEADING */}
            <h1 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              A Sacred Journey,
              <br />

              <span className="relative inline-block italic text-[#fb1895]">
                Thoughtfully Planned.
                <span className="absolute -bottom-2 left-1/2 h-px w-3/4 -translate-x-1/2 bg-[#fb1895]/60" />
              </span>
            </h1>

            {/* PREMIUM DIVIDER */}
            <div className="mx-auto mt-10 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#ff36a4]" />
              <span className="h-2 w-2 rotate-45 border border-[#ff36a4]" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#ff36a4]" />
            </div>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-7 text-white/80 sm:text-base md:text-[17px] md:leading-8">
              Answer the call to Makkah and Madinah with clarity and calm. At{" "}
              <span className="font-medium text-white">
                {SITE.name}
              </span>
              , we help you choose the right Umrah or Haj package and organise
              flights, hotels near the Haramain, transfers and ziyarat – so you
              can focus on your worship.
            </p>

            {/* BUTTONS */}
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              
              {/* PLAN YOUR TRIP */}
              <a
                href="/enquiry"
                className="group relative flex h-[60px] min-w-[220px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[#c1124c] px-8 font-serif text-[12px] font-bold tracking-[1.5px] text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="absolute inset-0 translate-y-full bg-[#9d0a3b] transition-transform duration-300 group-hover:translate-y-0" />

                <span className="relative z-10">
                  PLAN YOUR UMRAH
                </span>

                <ArrowRight
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappLink("Assalamu alaikum, I would like to know about your Umrah packages.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-[60px] min-w-[220px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 font-serif text-[12px] font-bold tracking-[1.5px] text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white hover:text-[#3f1152]"
              >
                <MessageSquare
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                WHATSAPP US
              </a>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
          <span className="text-[9px] font-medium tracking-[3px] text-white/60">
            EXPLORE MORE
          </span>

          <div className="flex h-10 w-6 justify-center rounded-full border border-white/30 p-1">
            <span className="h-2 w-1 animate-bounce rounded-full bg-[#ff36a4]" />
          </div>
        </div>
      </section>

      {/* ================= FEATURE BAR ================= */}
      <section className="relative overflow-hidden bg-[#4e1368]">
        {/* SUBTLE BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white" />
          <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border-[50px] border-white" />
        </div>

        <div className="relative mx-auto max-w-[1170px] px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3">

            {/* FEATURE 1 */}
            <div className="group flex items-center gap-5 border-b border-white/15 py-8 transition md:border-b-0 md:border-r md:pr-8">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#5e2775] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <BadgeCheck
                  size={31}
                  strokeWidth={1.7}
                  className="text-[#ff36a4]"
                />
              </div>

              <div>
                <p className="font-serif text-[17px] font-bold text-[#ff36a4]">
                  Umrah & Haj
                </p>

                <p className="mt-1.5 text-[11px] font-medium tracking-[1.5px] text-white/70">
                  PACKAGE GUIDANCE
                </p>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="group flex items-center gap-5 border-b border-white/15 py-8 transition md:border-b-0 md:border-r md:px-8">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#5e2775] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <Car
                  size={31}
                  strokeWidth={1.7}
                  className="text-[#ff36a4]"
                />
              </div>

              <div>
                <p className="font-serif text-[17px] font-bold text-[#ff36a4]">
                  Hotels Near Haram
                </p>

                <p className="mt-1.5 text-[11px] font-medium tracking-[1.5px] text-white/70">
                  MAKKAH & MADINAH
                </p>
              </div>
            </div>

            {/* FEATURE 3 */}
            <div className="group flex items-center gap-5 py-8 transition md:pl-8">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#5e2775] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                <Map
                  size={31}
                  strokeWidth={1.7}
                  className="text-[#ff36a4]"
                />
              </div>

              <div>
                <p className="font-serif text-[17px] font-bold text-[#ff36a4]">
                  Ziyarat & Transfers
                </p>

                <p className="mt-1.5 text-[11px] font-medium tracking-[1.5px] text-white/70">
                  ON-GROUND SUPPORT
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}