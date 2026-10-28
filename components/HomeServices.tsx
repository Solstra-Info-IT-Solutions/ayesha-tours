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
    <section className="relative overflow-hidden bg-[#f6f2f4] py-20 sm:py-24 lg:py-28 xl:py-32">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e40e83]/15 to-transparent" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#4e1367]/10 to-transparent" />

        <div className="absolute -left-52 top-1/3 h-[500px] w-[500px] rounded-full border border-[#e40e83]/10" />

        <div className="absolute -right-52 bottom-[-180px] h-[600px] w-[600px] rounded-full border border-[#4e1367]/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADER */}

        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#e40e83] sm:w-12" />

            <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#4e1367] sm:text-[10px]">
              What We Offer
            </span>

            <span className="h-px w-8 bg-[#e40e83] sm:w-12" />
          </div>

          <h2 className="mt-6 font-serif text-[38px] font-bold leading-[1.1] tracking-[-0.02em] text-[#3f1152] sm:text-5xl lg:text-[58px]">
            Every Pilgrim.
            <span className="italic font-medium text-[#e40e83]">
              {" "}
              Carefully Guided.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-[#6e6572] sm:text-[15px] sm:leading-8">
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
                className="group relative flex min-h-[390px] flex-col overflow-hidden border border-[#d6cdd2] bg-[#faf9fa] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#e40e83]/50 hover:bg-white hover:shadow-[0_24px_60px_rgba(63,17,82,0.10)] sm:p-7"
              >
                <span className="pointer-events-none absolute right-5 top-2 font-serif text-[82px] font-bold leading-none tracking-[-0.06em] text-[#3f1152]/[0.035]">
                  {service.number}
                </span>

                <div
                  className={`relative flex h-[60px] w-[60px] items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 ${
                    isGold
                      ? "border-[#e40e83]/30 bg-[#f6e8ef] text-[#c50e72]"
                      : "border-[#4e1367]/20 bg-[#f1eaf4] text-[#4e1367]"
                  }`}
                >
                  <Icon size={23} strokeWidth={1.6} />
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <span
                    className={`h-px w-8 ${
                      isGold ? "bg-[#e40e83]" : "bg-[#4e1367]"
                    }`}
                  />

                  <span
                    className={`text-[8px] font-bold uppercase tracking-[0.24em] ${
                      isGold ? "text-[#b3146b]" : "text-[#4e1367]"
                    }`}
                  >
                    {service.eyebrow}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-[28px] font-bold leading-[1.1] text-[#3f1152]">
                  {service.title}
                </h3>

                <p className="mt-5 text-[13px] leading-7 text-[#6e6572]">
                  {service.description}
                </p>

                <div className="flex-grow" />

                <div className="mt-8 flex items-center justify-between border-t border-[#d6cdd2]/80 pt-5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#3f1152]">
                    Explore Service
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={`transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                      isGold ? "text-[#e40e83]" : "text-[#4e1367]"
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
            className="group inline-flex items-center gap-3 border border-[#3f1152]/20 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#3f1152] transition-all duration-300 hover:border-[#e40e83] hover:bg-[#e40e83] hover:text-white"
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