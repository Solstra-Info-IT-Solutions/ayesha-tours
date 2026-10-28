"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
} from "lucide-react";

export default function DestinationCTA() {
  return (
    <section className="relative min-h-[580px] overflow-hidden">
      <Image
        src="/images/demo/clock-tower.jpg"
        alt="Abraj Al Bait clock tower above Masjid al-Haram in Makkah"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#3e0e52]/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#3e0e52]/90 via-[#3e0e52]/55 to-transparent" />

      <div className="relative mx-auto flex min-h-[580px] max-w-[1440px] items-center px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <Compass size={15} className="text-[#ff058f]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ff058f]">
              The Call Of The Haramain
            </span>
          </div>

          <h2 className="mt-7 font-serif text-[46px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-[76px]">
            Makkah & Madinah
            <span className="block italic font-medium text-[#ff058f]">
              Are Calling You.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-[15px] leading-8 text-white/70">
            Learn about the holy cities, the rites of Umrah and Haj and the
            ziyarat sites you can visit – so you arrive prepared and at peace.
          </p>

          <Link
            href="/destinations"
            className="group relative mt-9 inline-flex items-center gap-4 overflow-hidden border border-[#ff058f] px-7 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff058f]"
          >
            <span className="absolute inset-0 translate-y-full bg-[#ff058f] transition-transform duration-500 group-hover:translate-y-0" />

            <span className="relative z-10 transition-colors group-hover:text-white">
              Explore The Holy Cities
            </span>

            <ArrowUpRight
              size={17}
              className="relative z-10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}