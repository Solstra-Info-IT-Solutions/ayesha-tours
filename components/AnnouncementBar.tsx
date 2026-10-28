"use client";

import { useState } from "react";
import Link from "next/link";
import {
  X,
  Sparkles,
  Phone,
  ArrowUpRight,
  Info,
} from "lucide-react";
import { DEMO_MODE } from "@/lib/site";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-[60] overflow-hidden bg-[#350b48] text-white">
      {/* Premium Gold Top Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff058f] to-transparent" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff058f]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[42px] max-w-[1440px] items-center justify-center px-12 py-2 sm:px-16 lg:px-20">
        
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-center">

          {/* Premium Message */}
          <div className="flex items-center gap-2">
            <Sparkles
              size={13}
              className="shrink-0 text-[#ff058f]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e6dceb] sm:text-[10px]">
              Haj &amp; Umrah Packages
            </span>
          </div>

          {/* Divider */}
          <span className="hidden h-4 w-px bg-white/15 sm:block" />

          {/* 24/7 */}
          <div className="flex items-center gap-2">
            <Phone
              size={12}
              className="text-[#ff058f]"
            />

            <span className="text-[9px] font-semibold tracking-[0.12em] text-[#cbb9d2] sm:text-[10px]">
              Guidance From Enquiry To Return
            </span>
          </div>

          {DEMO_MODE && (
            <>
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2">
                <Info size={12} className="shrink-0 text-[#ff36a4]" />
                <span className="text-[9px] font-semibold tracking-[0.08em] text-white sm:text-[10px]">
                  Demo website – packages, prices &amp; dates are illustrative
                </span>
              </div>
            </>
          )}

          {/* Divider */}
          <span className="hidden h-4 w-px bg-white/15 md:block" />

          {/* CTA */}
          <Link
            href="/request-quote"
            className="group hidden items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#ff058f] transition-colors hover:text-white md:flex"
          >
            Request A Quote

            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Close announcement"
          className="absolute right-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-[#cbb9d2] transition-all duration-300 hover:border-[#ff058f]/60 hover:bg-white/5 hover:text-[#ff058f] sm:right-5"
        >
          <X size={14} />
        </button>

      </div>
    </div>
  );
}