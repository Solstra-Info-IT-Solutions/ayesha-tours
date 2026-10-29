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
    <section className="relative overflow-hidden bg-[#f7f5f1] py-20 sm:py-24 lg:py-28">
      {/* DECORATION */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7b6337]/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7b6337]/[0.025] blur-[100px]" />

      <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">
        <div className="flex items-center justify-center gap-3">
          <Sparkles size={14} className="text-[#7b6337]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1a3e34]">
            Your Pilgrimage. Your Needs.
          </span>

          <Sparkles size={14} className="text-[#7b6337]" />
        </div>

        <h2 className="mt-7 font-serif text-[42px] font-bold leading-[1.08] text-[#16322a] sm:text-6xl lg:text-[68px]">
          Every Pilgrim's Journey
          <span className="block italic font-medium text-[#7b6337]">
            Deserves Personal Attention.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-8 text-[#686f6c] sm:text-[15px]">
          Travelling with elderly parents, young children or a large family
          group? Tell us your dates, budget and needs, and we'll suggest an
          Umrah or Haj plan that suits you.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/enquiry"
            className="group relative inline-flex min-h-[58px] items-center justify-center gap-3 overflow-hidden bg-[#16322a] px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(22,50,42,0.22)]"
          >
            <span className="absolute inset-0 translate-y-full bg-[#7b6337] transition-transform duration-500 group-hover:translate-y-0" />

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
            className="group inline-flex min-h-[58px] items-center justify-center gap-3 border border-[#16322a]/20 px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[#16322a] transition-all hover:border-[#7b6337] hover:text-[#7b6337]"
          >
            <MessageCircle
              size={17}
              className="text-[#7b6337]"
            />

            Talk To Our Team
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#7b6337]/50" />

          <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#8d9491]">
            Guided • Organised • Peaceful
          </span>

          <span className="h-px w-8 bg-[#7b6337]/50" />
        </div>
      </div>
    </section>
  );
}