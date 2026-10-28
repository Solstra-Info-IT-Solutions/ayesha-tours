"use client";

import { FileText, ArrowDown } from "lucide-react";

export default function QuoteHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#3f1152] py-24 sm:py-28 lg:py-36">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full border border-[#e40e83]/20" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4e1367] via-[#3f1152] to-[#290837]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-6 text-center sm:px-10 lg:px-16 xl:px-24">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">

          <span className="h-[2px] w-10 bg-[#e40e83]" />

          <div className="flex items-center gap-2">

            <FileText
              size={15}
              className="text-[#fb1895]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#fb1895]">
              Umrah & Haj Quotes
            </span>

          </div>

          <span className="h-[2px] w-10 bg-[#e40e83]" />

        </div>

        {/* Heading */}
        <h1 className="mt-7 font-serif text-[46px] font-bold leading-[1.08] text-white sm:text-[60px] lg:text-[76px]">

          Request Your

          <span className="block italic text-[#fb1895]">
            Package Quote.
          </span>

        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">

          Tell us a little about your pilgrimage and our team will prepare a
          quotation with clear inclusions, hotel options and timings for your
          group.

        </p>

        {/* Bottom Detail */}
        <div className="mt-10 flex items-center justify-center gap-4 text-white/45">

          <span className="h-px w-12 bg-[#e40e83]/50" />

          <span className="text-[9px] uppercase tracking-[2.5px]">
            Clear Inclusions • No Hidden Surprises
          </span>

          <span className="h-px w-12 bg-[#e40e83]/50" />

        </div>

        <div className="mt-12 flex justify-center">
          <ArrowDown
            size={18}
            className="animate-bounce text-[#fb1895]/70"
          />
        </div>

      </div>
    </section>
  );
}