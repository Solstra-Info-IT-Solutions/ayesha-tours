"use client";

import Link from "next/link";
import { ArrowDownRight, CarFront } from "lucide-react";

export default function TransportHero() {
  return (
    <section className="relative isolate flex min-h-[520px] items-center overflow-hidden sm:min-h-[580px] lg:min-h-[680px]">

      {/* ================= BACKGROUND IMAGE ================= */}

      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
        style={{
          backgroundImage: "url('/images/demo/haramain-train.jpg')",
        }}
      />

      {/* ================= PREMIUM OVERLAYS ================= */}

      {/* Main cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#290837]/85 via-[#290837]/55 to-[#290837]/20" />

      {/* Bottom depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c0626]/65 via-transparent to-transparent" />

      {/* Soft warm accent */}
      <div className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#e40e83]/10 blur-3xl" />

      {/* ================= DECORATIVE ELEMENTS ================= */}

      <div className="pointer-events-none absolute left-10 top-10 hidden h-[180px] w-[180px] rounded-full border border-white/10 lg:block" />

      <div className="pointer-events-none absolute bottom-10 right-10 hidden h-[220px] w-[220px] rounded-full border border-[#e40e83]/20 lg:block" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20">

        <div className="max-w-[850px]">

          {/* ================= EYEBROW ================= */}

          <div className="flex items-center gap-4">

            <span className="h-[2px] w-10 bg-[#e40e83]" />

            <div className="flex items-center gap-2">

              <CarFront
                size={16}
                className="text-[#e40e83]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-white/80 sm:text-[11px]">
                Transport & Ziyarat
              </span>

            </div>

          </div>

          {/* ================= HEADING ================= */}

          <h1 className="mt-7 font-serif text-[44px] font-bold leading-[1.08] text-white sm:text-[58px] md:text-[68px] lg:text-[78px] xl:text-[86px]">

            Arrive

            <span className="block">
              Calmly.
            </span>

            <span className="mt-1 block italic text-[#fb1895]">
              Travel With Ease.
            </span>

          </h1>

          {/* ================= DESCRIPTION ================= */}

          <p className="mt-7 max-w-[680px] text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">

            Airport pickups, Makkah–Madinah transfers and ziyarat tours arranged
            around your group, your hotel and your prayer times.

          </p>

          {/* ================= CTA ================= */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#fleet"
              className="group inline-flex h-[54px] items-center justify-center gap-3 bg-[#c0154e] px-8 text-[11px] font-bold uppercase tracking-[1.5px] text-white shadow-[0_15px_35px_rgba(192,21,78,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#a51444] hover:shadow-[0_20px_45px_rgba(192,21,78,0.35)]"
            >

              View Vehicle Options

              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
              />

            </Link>

            <Link
              href="/transport-request-quote"
              className="inline-flex h-[54px] items-center justify-center border border-white/30 bg-white/10 px-8 text-[11px] font-bold uppercase tracking-[1.5px] text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#4e1367]"
            >
              Request a Quote
            </Link>

          </div>

          {/* ================= TRUST POINTS ================= */}

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7">

            <div className="flex items-center gap-3">

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e40e83]/40 text-[11px] text-[#fb1895]">
                01
              </span>

              <span className="text-[11px] uppercase tracking-[1.2px] text-white/70">
                Airport Pickups
              </span>

            </div>

            <div className="flex items-center gap-3">

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e40e83]/40 text-[11px] text-[#fb1895]">
                02
              </span>

              <span className="text-[11px] uppercase tracking-[1.2px] text-white/70">
                Intercity Transfers
              </span>

            </div>

            <div className="flex items-center gap-3">

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e40e83]/40 text-[11px] text-[#fb1895]">
                03
              </span>

              <span className="text-[11px] uppercase tracking-[1.2px] text-white/70">
                Guided Ziyarat
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <div className="absolute bottom-8 right-5 hidden items-center gap-4 text-white/60 lg:right-14 lg:flex xl:right-16 2xl:right-20">

        <span className="text-[10px] uppercase tracking-[2px]">
          Vehicle Options
        </span>

        <span className="h-px w-14 bg-[#e40e83]" />

      </div>

    </section>
  );
}