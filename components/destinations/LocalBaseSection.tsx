"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function LocalBaseSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-20 lg:py-28">
      
      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#b79b66]/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#1a3e34]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative lg:col-span-5">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[1px] w-10 bg-[#7b6337]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7b6337]">
                THE HEART OF YOUR PILGRIMAGE
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[38px] font-bold leading-[1.15] tracking-tight text-[#16322a] sm:text-5xl lg:text-[56px]">
              Makkah
              <br />

              al-Mukarramah

              <span className="mt-3 block font-serif text-[24px] font-normal tracking-normal text-[#8b8f8f] sm:text-[28px]">
                (The Honoured City)
              </span>
            </h2>

            {/* Gold Divider */}
            <div className="mt-7 flex items-center gap-3">
              <span className="h-[2px] w-14 bg-[#b79b66]" />
              <span className="h-2 w-2 rounded-full bg-[#b79b66]" />
            </div>

            {/* Description */}
            <p className="mt-7 max-w-[560px] text-[16px] leading-8 text-[#656e6a] lg:text-[17px]">
              Home to Masjid al-Haram and the Kaaba, Makkah is where every
              pilgrim performs the rites of Umrah – ihram, tawaf, sa&apos;i
              and halq or taqsir – and where the days of Haj unfold in Mina,
              Arafat and Muzdalifah.
            </p>

            <p className="mt-5 max-w-[540px] text-[15px] leading-7 text-[#5c6660]">
              Choosing the right hotel distance from the Haram makes a real
              difference, especially for elderly pilgrims. We help you weigh
              comfort, walking time and budget.
            </p>

            {/* Premium Location Detail */}
            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b79b66] bg-[#fdfcfa]">
                <MapPin
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#7b6337]"
                />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5c6660]">
                  Located In
                </p>

                <p className="mt-1 font-serif text-[16px] font-semibold text-[#16322a]">
                  Saudi Arabia
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/tour-packages"
                className="group inline-flex items-center gap-4 bg-[#16322a] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#102620] hover:shadow-[0_15px_35px_rgba(22,50,42,0.25)]"
              >
                View Umrah Packages

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b79b66] text-[#16322a] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} strokeWidth={2.2} />
                </span>
              </Link>
            </div>

          </div>


          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative lg:col-span-7">

            {/* Decorative Gold Border */}
            <div className="absolute -right-4 -top-4 hidden h-[180px] w-[180px] border border-[#b79b66]/50 lg:block" />

            {/* Image Frame */}
            <div className="relative rounded-[32px] bg-gradient-to-br from-[#eee7d9] via-[#fdfcfa] to-[#b79b66] p-[10px] shadow-[0_30px_70px_rgba(22,50,42,0.15)]">

              <div className="relative overflow-hidden rounded-[25px]">

                {/* Image */}
                <img
                    src="/images/demo/kaaba-cloudy.jpg"
                  alt="The Kaaba in Masjid al-Haram, Makkah"
                  className="h-[360px] w-full object-cover transition duration-[1200ms] ease-out hover:scale-105 sm:h-[460px] lg:h-[540px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c211b]/55 via-transparent to-transparent" />

                {/* Image Label */}
                <div className="absolute bottom-7 left-7 hidden items-center gap-3 text-white sm:flex">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                    <Sparkles
                      size={17}
                      className="text-[#b79b66]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b79b66]">
                      Masjid al-Haram
                    </p>

                    <p className="mt-1 font-serif text-[18px] font-semibold">
                      Makkah, Saudi Arabia
                    </p>
                  </div>

                </div>

              </div>
            </div>


            {/* ================= FLOATING CARD ================= */}
            <div className="relative z-20 mt-5 sm:absolute sm:bottom-8 sm:left-8 sm:mt-0">

              <div className="group max-w-[330px] rounded-2xl border border-white/70 bg-white/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]">

                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#16322a] shadow-lg">

                    <MapPin
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#b79b66]"
                    />

                  </div>


                  {/* Content */}
                  <div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b6337]">
                      Your First Steps
                    </p>

                    <h3 className="mt-2 font-serif text-[21px] font-bold text-[#16322a]">
                      Umrah Begins Here
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-[#6b706e]">
                      Pilgrims enter ihram at the miqat and travel to Makkah to
                      perform tawaf around the Kaaba.
                    </p>

                  </div>

                </div>

                {/* Bottom Accent */}
                <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-[#b79b66] via-[#b79b66]/30 to-transparent" />

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}