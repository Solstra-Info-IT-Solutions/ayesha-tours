"use client";

import Link from "next/link";
import {
  Compass,
  MapPinned,
  Car,
  Plane,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Umrah Packages",
    eyebrow: "Economy To Premium",
    description:
      "Umrah packages with clear inclusions – flights, hotels in Makkah and Madinah, transfers and ziyarat – matched to your budget.",
    icon: Compass,
    href: "/tour-packages",
    accent: "gold",
  },
  {
    number: "02",
    title: "Haj Guidance",
    eyebrow: "The Journey Of A Lifetime",
    description:
      "Help understanding Haj options, documentation and preparation, so you know what to expect at every stage of the pilgrimage.",
    icon: MapPinned,
    href: "/enquiry",
    accent: "teal",
  },
  {
    number: "03",
    title: "Transport & Ziyarat",
    eyebrow: "On The Ground",
    description:
      "Airport pickups, Makkah–Madinah transfers and guided ziyarat of the historic sites, arranged for families and groups.",
    icon: Car,
    href: "/transport",
    accent: "teal",
  },
  {
    number: "04",
    title: "Visa & Flights",
    eyebrow: "Paperwork Made Simple",
    description:
      "Assistance with Umrah visa paperwork, flight options and travel documents, with clear checklists before you depart.",
    icon: Plane,
    href: "/services",
    accent: "gold",
  },
];

export default function HomeServices() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-20 sm:py-24 lg:py-28 xl:py-32">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#7b6337]/15 to-transparent" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#1a3e34]/10 to-transparent" />

        <div className="absolute -left-52 top-1/3 h-[500px] w-[500px] rounded-full border border-[#7b6337]/10" />

        <div className="absolute -right-52 bottom-[-180px] h-[600px] w-[600px] rounded-full border border-[#1a3e34]/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADER */}

        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#7b6337] sm:w-12" />

            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#1a3e34] sm:text-[10px]">
              What We Offer
            </span>

            <span className="h-px w-8 bg-[#7b6337] sm:w-12" />
          </div>

          <h2 className="mt-6 font-serif text-[38px] font-bold leading-[1.1] tracking-[-0.02em] text-[#16322a] sm:text-5xl lg:text-[58px]">
            Every Pilgrim.
            <span className="italic font-medium text-[#7b6337]">
              {" "}
              Carefully Guided.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-[#686f6c] sm:text-[15px] sm:leading-8">
            From your first question to your return home, our services cover
            the practical side of Umrah and Haj so your journey is calmer,
            better organised and focused on what matters.
          </p>
        </div>

        {/* GRID */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isGold = service.accent === "gold";

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex min-h-[390px] flex-col overflow-hidden border border-[#dbd5c8] bg-[#fbfaf8] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#7b6337]/50 hover:bg-white hover:shadow-[0_24px_60px_rgba(22,50,42,0.10)] sm:p-7"
              >
                <span className="pointer-events-none absolute right-5 top-2 font-serif text-[82px] font-bold leading-none tracking-[-0.06em] text-[#16322a]/[0.035]">
                  {service.number}
                </span>

                <div
                  className={`relative flex h-[60px] w-[60px] items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 ${
                    isGold
                      ? "border-[#7b6337]/30 bg-[#f6f1e8] text-[#7b6337]"
                      : "border-[#1a3e34]/20 bg-[#f5f1e9] text-[#1a3e34]"
                  }`}
                >
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <span
                    className={`h-px w-8 ${
                      isGold ? "bg-[#7b6337]" : "bg-[#1a3e34]"
                    }`}
                  />

                  <span
                    className={`text-[8px] font-bold uppercase tracking-[0.24em] ${
                      isGold ? "text-[#7b6337]" : "text-[#1a3e34]"
                    }`}
                  >
                    {service.eyebrow}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-[28px] font-bold leading-[1.1] text-[#16322a]">
                  {service.title}
                </h3>

                <p className="mt-5 text-[13px] leading-7 text-[#686f6c]">
                  {service.description}
                </p>

                <div className="flex-grow" />

                <div className="mt-8 flex items-center justify-between border-t border-[#dbd5c8]/80 pt-5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#16322a]">
                    Explore Service
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={`transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                      isGold ? "text-[#7b6337]" : "text-[#1a3e34]"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 border border-[#16322a]/20 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#16322a] transition-all duration-300 hover:border-[#7b6337] hover:bg-[#7b6337] hover:text-white"
          >
            Explore All Services

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}