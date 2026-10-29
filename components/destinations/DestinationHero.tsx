"use client";

import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Sparkles,
} from "lucide-react";

export default function DestinationHero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#faf8f5] py-20 lg:min-h-[720px] lg:py-28">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        <img
            src="/images/demo/nabawi-umbrellas.jpg"
          alt="Umbrellas shading the courtyard of Masjid an-Nabawi in Madinah"
          className="h-full w-full object-cover object-center"
        />

        {/* Premium Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/90 via-45% to-[#faf8f5]/10" />

        {/* Bottom Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-[#faf8f5]/10" />

        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-[#faf8f5]/25 lg:hidden" />

      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full border border-[#b79b66]/20" />

      <div className="pointer-events-none absolute right-[8%] top-[15%] hidden h-[120px] w-[120px] rounded-full border border-white/30 lg:block" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 lg:min-h-[720px] lg:px-12">

        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">

            <span className="h-[2px] w-10 bg-[#7b6337]" />

            <div className="flex items-center gap-2">

              <Compass
                size={15}
                strokeWidth={1.8}
                className="text-[#1a3e34]"
              />

              <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#1a3e34]">
                The Holy Cities
              </span>

            </div>

          </div>

          {/* Heading */}
          <h1 className="font-serif text-[42px] font-bold leading-[1.08] tracking-tight text-[#16322a] sm:text-[56px] lg:text-[70px]">

            Makkah &

            <span className="block italic text-[#7b6337]">
              Madinah
            </span>

          </h1>

          {/* Premium Divider */}
          <div className="mt-7 h-px w-[180px] bg-gradient-to-r from-[#7b6337] to-transparent" />

          {/* Description */}
          <p className="mt-7 max-w-[580px] text-[16px] leading-8 text-[#5a645f] sm:text-[17px]">

            Learn about the two holy cities at the heart of your pilgrimage and
            the historic sites you can visit on ziyarat, so you arrive informed
            and spiritually prepared.

          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            {/* Primary CTA */}
            <Link
              href="/tour-packages"
              className="group inline-flex h-[56px] min-w-[205px] items-center justify-center gap-3 rounded-xl bg-[#193830] px-8 text-[12px] font-bold tracking-[1.3px] text-white shadow-[0_14px_30px_rgba(25,56,48,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#193830] hover:shadow-[0_20px_40px_rgba(25,56,48,0.35)]"
            >
              VIEW PACKAGES

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

            {/* Secondary CTA */}
            <Link
              href="/enquiry"
              className="group inline-flex h-[56px] min-w-[220px] items-center justify-center gap-3 rounded-xl border border-[#1a3e34]/25 bg-white/80 px-8 text-[12px] font-bold tracking-[1.1px] text-[#1a3e34] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#1a3e34]/50 hover:bg-white hover:shadow-[0_15px_30px_rgba(26,62,52,0.10)]"
            >

              <Sparkles
                size={16}
                className="text-[#7b6337] transition-transform duration-300 group-hover:rotate-12"
              />

              PLAN MY UMRAH

            </Link>

          </div>

          {/* Premium Trust Points */}
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#1a3e34]/10 pt-7">

            <div className="flex items-center gap-2 text-[12px] text-[#626d68]">

              <span className="h-2 w-2 rounded-full bg-[#7b6337]" />

              Pilgrim Guidance

            </div>

            <div className="flex items-center gap-2 text-[12px] text-[#626d68]">

              <span className="h-2 w-2 rounded-full bg-[#7b6337]" />

              Ziyarat Tours

            </div>

            <div className="flex items-center gap-2 text-[12px] text-[#626d68]">

              <span className="h-2 w-2 rounded-full bg-[#7b6337]" />

              Family Friendly

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}