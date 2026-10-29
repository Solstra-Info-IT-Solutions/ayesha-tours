"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tours = [
  {
    number: "01",
    title: "Family Umrah",
    category: "Together In Worship",
    description:
      "Perform Umrah together with parents, children and grandparents. We plan hotels close to the Haram, connecting rooms where possible and unhurried transfer timings, so every generation can complete their rites comfortably.",
    image: "/images/demo/kaaba-tawaf.jpg",
    reverse: false,
  },
  {
    number: "02",
    title: "Short Umrah",
    category: "7 – 10 Days",
    description:
      "For pilgrims with limited leave, a shorter Umrah focuses on the essentials – your Umrah in Makkah, prayers at Masjid an-Nabawi and key ziyarat – without feeling rushed.",
    image: "/images/demo/nabawi-umbrellas.jpg",
    reverse: true,
  },
  {
    number: "03",
    title: "Group Umrah",
    category: "Community Journeys",
    description:
      "Travelling with your masjid, community or extended family? We coordinate group flights, rooming, transfers and ziyarat so the whole group stays together and informed.",
    image: "/images/demo/pilgrims-jeddah.jpg",
    reverse: false,
  },
  {
    number: "04",
    title: "Ramadan Umrah",
    category: "The Blessed Month",
    description:
      "Spend part of Ramadan – or the last ten nights – in the Haramain. Demand and prices peak in this season, so we help you plan early and understand the options available.",
    image: "/images/demo/haram-aerial.jpg",
    reverse: true,
  },
  {
    number: "05",
    title: "Haj Guidance",
    category: "The Fifth Pillar",
    description:
      "Haj is a journey of a lifetime with its own rules, quotas and preparation. We help you understand the process, documents and what to expect in Mina, Arafat and Muzdalifah.",
    image: "/images/demo/mina-tents.jpg",
    reverse: false,
  },
];

export default function ToursPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#faf8f5]">

        {/* =====================================================
            PREMIUM HERO
        ====================================================== */}

        <section className="relative isolate min-h-[480px] overflow-hidden sm:min-h-[540px] lg:min-h-[620px]">

          {/* Background Image */}
          <Image
            src="/images/demo/clock-tower.jpg"
            alt="Makkah clock tower and Masjid al-Haram"
            fill
            priority
            className="object-cover"
          />

          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-[#0d211b]/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0d211b]/95 via-[#0d211b]/65 to-[#0d211b]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#091713]/70 via-transparent to-transparent" />

          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-20 top-32 h-[400px] w-[400px] rounded-full border border-[#b79b66]/20" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex min-h-[480px] w-full max-w-[1500px] items-center px-6 py-24 sm:px-10 lg:min-h-[620px] lg:px-16 xl:px-24">

            <div className="max-w-3xl">

              {/* Eyebrow */}
              <div className="flex items-center gap-4">

                <span className="h-[2px] w-12 bg-[#b79b66]" />

                <div className="flex items-center gap-2">

                  <Compass
                    size={16}
                    className="text-[#b79b66]"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#b79b66] sm:text-[11px]">
                    Pilgrimage Journeys
                  </span>

                </div>

              </div>

              {/* Heading */}
              <h1 className="mt-7 font-serif text-[46px] font-bold leading-[1.05] text-white sm:text-[60px] md:text-[72px] lg:text-[86px]">

                Journeys Made

                <span className="block italic text-[#b79b66]">
                  With Devotion.
                </span>

              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">

                Explore the ways you can travel to the Haramain with us –
                family and group Umrah, shorter trips, Ramadan Umrah and
                guidance for Haj.

              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/enquiry"
                  className="group inline-flex items-center justify-center gap-3 bg-[#7b6337] px-8 py-4 text-[11px] font-bold uppercase tracking-[1.8px] text-white transition duration-300 hover:bg-[#b79b66] hover:text-[#0e1f1b]"
                >
                  Plan Your Umrah

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>

                {/*<Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center border border-white/30 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[1.8px] text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-[#16322a]"
                >
                  Plan Your Umrah
                </Link>*/}

              </div>

            </div>

          </div>

          {/* Bottom Detail */}
          <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-4 text-white/50 md:flex">

            <span className="h-px w-16 bg-[#b79b66]/50" />

            <span className="text-[9px] uppercase tracking-[3px]">
              Labbaik Allahumma Labbaik
            </span>

            <span className="h-px w-16 bg-[#b79b66]/50" />

          </div>

        </section>


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="relative bg-[#faf8f5] py-20 lg:py-28">

          <div className="pointer-events-none absolute -left-52 top-10 h-[500px] w-[500px] rounded-full border border-[#7b6337]/10" />

          <div className="relative mx-auto w-full max-w-[1200px] px-6 text-center sm:px-10 lg:px-16">

            <div className="flex items-center justify-center gap-4">

              <span className="h-px w-10 bg-[#7b6337]" />

              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#1a3e34]">
                Travel Your Way
              </span>

              <span className="h-px w-10 bg-[#7b6337]" />

            </div>

            <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-[#16322a] sm:text-5xl">

              Every Pilgrimage Has

              <span className="italic text-[#7b6337]">
                {" "}Its Own Story.
              </span>

            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-[15px] leading-7 text-[#686f6c] sm:text-[16px]">

              Every pilgrimage can be adjusted to your preferred dates, group
              size, number of nights in Makkah and Madinah, hotel category,
              transport and ziyarat.

            </p>

          </div>

        </section>


        {/* =====================================================
            PILGRIMAGE OPTIONS
        ====================================================== */}

        <section
          id="experiences"
          className="relative bg-[#f4f2ed] py-20 sm:py-24 lg:py-32"
        >

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute left-0 top-[15%] h-[300px] w-[2px] bg-[#7b6337]/40" />

          <div className="pointer-events-none absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-[#1a3e34]/[0.025] blur-3xl" />


          <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-24">

            <div className="space-y-24 md:space-y-32 lg:space-y-40">

              {tours.map((tour) => (

                <article
                  key={tour.title}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-28 ${
                    tour.reverse
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  {/* ================= IMAGE ================= */}

                  <div className="relative">

                    {/* Decorative Frame */}
                    <div
                      className={`absolute -inset-3 rounded-[30px] border border-[#7b6337]/20 ${
                        tour.reverse
                          ? "-rotate-2"
                          : "rotate-2"
                      }`}
                    />

                    <div className="group relative overflow-hidden rounded-[22px] bg-[#16322a] shadow-[0_25px_70px_rgba(26,62,52,0.18)]">

                      <Image
                        src={tour.image}
                        alt={tour.title}
                        width={1000}
                        height={700}
                        priority={tour.number === "01"}
                        className="h-[330px] w-full object-cover transition duration-700 ease-out group-hover:scale-110 sm:h-[430px] lg:h-[520px]"
                      />

                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d211b]/70 via-transparent to-transparent opacity-80" />

                      {/* Category Badge */}
                      <div className="absolute left-6 top-6">

                        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#16322a]/75 px-4 py-2 text-[9px] font-bold uppercase tracking-[1.5px] text-white backdrop-blur-md">

                          <Sparkles
                            size={12}
                            className="text-[#b79b66]"
                          />

                          {tour.category}

                        </div>

                      </div>

                      {/* Number */}
                      <div className="absolute bottom-6 left-6">

                        <span className="font-serif text-[52px] font-bold leading-none text-white/90">
                          {tour.number}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* ================= CONTENT ================= */}

                  <div
                    className={`relative ${
                      tour.reverse
                        ? "lg:pr-10"
                        : "lg:pl-10"
                    }`}
                  >

                    {/* Large Background Number */}
                    <span className="pointer-events-none absolute -top-14 left-0 font-serif text-[150px] font-bold leading-none text-[#1a3e34]/[0.035]">
                      {tour.number}
                    </span>

                    <div className="relative">

                      {/* Label */}
                      <div className="flex items-center gap-4">

                        <span className="h-[2px] w-10 bg-[#7b6337]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#1a3e34]">
                          {tour.category}
                        </span>

                      </div>


                      {/* Title */}
                      <h2 className="mt-6 font-serif text-[38px] font-bold leading-[1.1] text-[#16322a] sm:text-[48px] lg:text-[56px]">

                        {tour.title}

                      </h2>


                      {/* Gold Divider */}
                      <div className="mt-7 h-[2px] w-14 bg-[#7b6337]" />


                      {/* Description */}
                      <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#686f6c] sm:text-[16px]">

                        {tour.description}

                      </p>


                      {/* CTA */}
                      {/*<div className="mt-9">

                        <Link
                          href="/contact"
                          className="group inline-flex items-center gap-4 border border-[#1a3e34] px-7 py-4 text-[10px] font-bold uppercase tracking-[1.8px] text-[#1a3e34] transition-all duration-300 hover:bg-[#1a3e34] hover:text-white hover:shadow-[0_15px_35px_rgba(26,62,52,0.2)]"
                        >

                          Enquire Now

                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:translate-x-1">

                            <ArrowUpRight size={14} />

                          </span>

                        </Link>

                      </div>*/}

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            PREMIUM BOTTOM CTA
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#16322a] py-20 sm:py-24 lg:py-28">

          {/* Decorative Circles */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full border border-[#b79b66]/20" />

          <div className="relative mx-auto max-w-4xl px-6 text-center">

            <div className="flex items-center justify-center gap-4">

              <span className="h-px w-10 bg-[#b79b66]" />

              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#b79b66]">
                Your Next Step
              </span>

              <span className="h-px w-10 bg-[#b79b66]" />

            </div>

            <h2 className="mt-7 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[58px]">

              Let&apos;s Create Your

              <span className="block italic text-[#b79b66]">
                Pilgrimage Plan.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/65 sm:text-[16px]">

              Tell us when you would like to travel and who is coming with you,
              and we will help turn your intention into a clear plan.

            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/enquiry"
                className="group inline-flex items-center justify-center gap-3 bg-[#7b6337] px-8 py-4 text-[11px] font-bold uppercase tracking-[1.8px] text-white transition duration-300 hover:bg-[#b79b66] hover:text-[#0e1f1b]"
              >

                Start Planning

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[1.8px] text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#16322a]"
              >

                Explore Our Services

                <ChevronRight size={15} />

              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}