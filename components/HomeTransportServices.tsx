"use client";

import Link from "next/link";
import {
  Car,
  Plane,
  TrainFront,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Airport Pickups",
    icon: Car,
    description: "Meet-and-greet transfers from Jeddah and Madinah airports.",
  },
  {
    title: "Intercity Transfers",
    icon: Plane,
    description: "Comfortable Makkah – Madinah road transfers for your group.",
  },
  {
    title: "Haramain Train",
    icon: TrainFront,
    description: "Guidance on high-speed rail tickets and station transfers.",
  },
  {
    title: "Ziyarat Tours",
    icon: BriefcaseBusiness,
    description: "Guided visits to the historic sites of Makkah and Madinah.",
  },
];

export default function HomeTransportServices() {
  return (
    <section className="bg-[#f6f2f4] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#e40e83]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#4e1367]">
                Getting Around
              </span>
            </div>

            <h2 className="mt-6 font-serif text-[42px] font-bold leading-[1.1] text-[#3f1152] sm:text-5xl">
              Transfers & Ziyarat
              <span className="block italic font-medium text-[#e40e83]">
                Arranged For You.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-[14px] leading-7 text-[#6e6572]">
              From the moment you land to your final ziyarat, transfers can be
              arranged for families and groups so you never have to worry about
              getting between the airport, your hotel and the holy sites.
            </p>

            <Link
              href="/transport"
              className="group mt-8 inline-flex items-center gap-3 bg-[#3f1152] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#e40e83]"
            >
              Explore Transfers

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* RIGHT */}

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  href="/transport"
                  key={service.title}
                  className="group border border-[#dad2d6] bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#e40e83]/50 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1eaf4] text-[#4e1367] transition-all group-hover:bg-[#3f1152] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-6 font-serif text-[22px] font-bold text-[#3f1152]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-[#6e6572]">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}