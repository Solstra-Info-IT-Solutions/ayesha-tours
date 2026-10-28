"use client";

import { whatsappLink } from "@/lib/site";
import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function PersonalizedJourneyCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f6f2f4] py-20 sm:py-24 lg:py-28">
      {/* DECORATION */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e40e83]/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e40e83]/[0.025] blur-[100px]" />

      <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">
        <div className="flex items-center justify-center gap-3">
          <Sparkles size={14} className="text-[#e40e83]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#4e1367]">
            Your Pilgrimage. Your Needs.
          </span>

          <Sparkles size={14} className="text-[#e40e83]" />
        </div>

        <h2 className="mt-7 font-serif text-[42px] font-bold leading-[1.08] text-[#3f1152] sm:text-6xl lg:text-[68px]">
          Every Pilgrim's Journey
          <span className="block italic font-medium text-[#e40e83]">
            Deserves Personal Attention.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-8 text-[#6e6572] sm:text-[15px]">
          Travelling with elderly parents, young children or a large family
          group? Tell us your dates, budget and needs, and we'll suggest an
          Umrah or Haj plan that suits you.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/enquiry"
            className="group relative inline-flex min-h-[58px] items-center justify-center gap-3 overflow-hidden bg-[#3f1152] px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(63,17,82,0.22)]"
          >
            <span className="absolute inset-0 translate-y-full bg-[#e40e83] transition-transform duration-500 group-hover:translate-y-0" />

            <span className="relative z-10 flex items-center gap-3 transition-colors group-hover:text-white">
              Plan My Umrah

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </span>
          </Link>

          <a
            href={whatsappLink("Assalamu alaikum Ayesha Tours, I would like to plan my Umrah.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[58px] items-center justify-center gap-3 border border-[#3f1152]/20 px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[#3f1152] transition-all hover:border-[#e40e83] hover:text-[#e40e83]"
          >
            <MessageCircle
              size={17}
              className="text-[#e40e83]"
            />

            Talk To Our Team
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#e40e83]/50" />

          <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#938b96]">
            Guided • Organised • Peaceful
          </span>

          <span className="h-px w-8 bg-[#e40e83]/50" />
        </div>
      </div>
    </section>
  );
}