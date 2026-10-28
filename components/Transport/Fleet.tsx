"use client";

import Link from "next/link";
import {
  Users,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  CarFront,
} from "lucide-react";

const vehicles = [
  {
    image: "/images/demo/vehicle-suv.jpg",
    title: "Family SUV / GMC",
    capacity: "6–7 Pilgrims",
    bags: "4–5 Bags",
    badge: "Popular With Families",
    description:
      "A spacious choice for families travelling between the airport, Makkah and Madinah.",
    features: [
      "Room for elders, children & luggage",
      "Air-conditioned for the Saudi heat",
      "Ideal for family Umrah & ziyarat",
    ],
  },
  {
    image: "/images/demo/vehicle-sedan.jpg",
    title: "Private Sedan",
    capacity: "3–4 Pilgrims",
    bags: "3 Bags",
    description:
      "A comfortable option for couples and small families on airport and hotel transfers.",
    features: [
      "Private transfer for your party",
      "Boot space for Umrah luggage",
      "Suited to couples & solo pilgrims",
    ],
  },
  {
    image: "/images/demo/vehicle-coach.jpg",
    title: "Group Van / Coach",
    capacity: "12–45 Pilgrims",
    bags: "Large Capacity",
    description:
      "For community and family groups who want to travel and perform ziyarat together.",
    features: [
      "Keeps the whole group together",
      "Space for group luggage",
      "Ideal for Makkah–Madinah & ziyarat days",
    ],
  },
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-[#f9f6f8] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-[#fb1895]/15" />

      <div className="pointer-events-none absolute right-[-180px] bottom-10 h-[450px] w-[450px] rounded-full bg-[#4e1367]/[0.025] blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 2xl:px-20">

        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">

            <span className="h-[2px] w-10 bg-[#e40e83]" />

            <div className="flex items-center gap-2">

              <CarFront
                size={15}
                className="text-[#4e1367]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#4e1367] sm:text-[11px] sm:tracking-[2.5px]">
                Vehicle Options
              </span>

            </div>

            <span className="h-[2px] w-10 bg-[#e40e83]" />

          </div>

          {/* Heading */}

          <h2 className="mt-6 font-serif text-[36px] font-bold leading-[1.12] text-[#3f1152] sm:text-[46px] lg:text-[52px]">

            Travel In

            <span className="italic text-[#e40e83]">
              {" "}Comfort
            </span>

          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#6e6272] sm:text-[16px]">
            Typical vehicle types for pilgrim transfers in Saudi Arabia. Exact
            vehicles depend on availability and group size, and are confirmed
            in your quote (demo images shown).
          </p>

        </div>

        {/* ================= FLEET CARDS ================= */}

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">

          {vehicles.map((vehicle, index) => (

            <article
              key={vehicle.title}
              className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#e3dbdf] bg-white shadow-[0_12px_30px_rgba(78,19,103,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(78,19,103,0.15)]"
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-[250px] overflow-hidden sm:h-[280px] lg:h-[300px]">

                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Cinematic Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#290837]/70 via-transparent to-transparent opacity-80" />

                {/* Number */}

                <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-[11px] font-semibold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Popular Badge */}

                {vehicle.badge && (

                  <div className="absolute right-5 top-5">

                    <span className="rounded-full border border-white/20 bg-[#4e1367]/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[1.5px] text-white shadow-lg backdrop-blur-md">

                      {vehicle.badge}

                    </span>

                  </div>

                )}

              </div>

              {/* ================= CONTENT ================= */}

              <div className="flex flex-1 flex-col px-6 pb-6 pt-7">

                {/* Title */}

                <h3 className="font-serif text-[26px] font-bold text-[#3f1152] transition duration-300 group-hover:text-[#4e1367]">
                  {vehicle.title}
                </h3>

                {/* Gold Divider */}

                <div className="mt-4 h-px w-12 bg-[#fb1895] transition-all duration-500 group-hover:w-20" />

                {/* Description */}

                <p className="mt-5 text-[14px] leading-6 text-[#6e6572]">
                  {vehicle.description}
                </p>

                {/* ================= VEHICLE DETAILS ================= */}

                <div className="mt-6 grid grid-cols-2 gap-3 border-y border-[#e6dfe3] py-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f2f5] text-[#4e1367]">

                      <Users size={17} />

                    </div>

                    <div>

                      <p className="text-[9px] font-semibold uppercase tracking-[1px] text-[#a09aa3]">
                        Capacity
                      </p>

                      <p className="mt-1 text-[13px] font-medium text-[#3f1152]">
                        {vehicle.capacity}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4eaef] text-[#e40e83]">

                      <Briefcase size={16} />

                    </div>

                    <div>

                      <p className="text-[9px] font-semibold uppercase tracking-[1px] text-[#a09aa3]">
                        Luggage
                      </p>

                      <p className="mt-1 text-[13px] font-medium text-[#3f1152]">
                        {vehicle.bags}
                      </p>

                    </div>

                  </div>

                </div>

                {/* ================= FEATURES ================= */}

                <div className="mt-6 space-y-4 flex-1">

                  {vehicle.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >

                      <CheckCircle2
                        size={18}
                        strokeWidth={1.8}
                        className="mt-[2px] shrink-0 text-[#e40e83]"
                      />

                      <span className="text-[13px] leading-6 text-[#6e6572]">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                {/* ================= CTA ================= */}

                <Link
                  href="/transport-request-quote"
                  className="group/button mt-8 flex h-[52px] items-center justify-center gap-3 border border-[#4e1367] text-[11px] font-bold uppercase tracking-[1.5px] text-[#4e1367] transition duration-300 hover:bg-[#4e1367] hover:text-white"
                >

                  Request a Quote

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                  />

                </Link>

              </div>

            </article>

          ))}

        </div>

        {/* ================= BOTTOM TEXT ================= */}

        <div className="mt-14 flex items-center justify-center gap-3 text-center text-[10px] uppercase tracking-[2px] text-[#948b98] sm:text-[11px]">

          <span className="h-px w-10 bg-[#e40e83]/60" />

          Comfort Between The Haramain

          <span className="h-px w-10 bg-[#e40e83]/60" />

        </div>

      </div>
    </section>
  );
}