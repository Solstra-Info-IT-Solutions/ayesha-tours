"use client";

import {
  Route,
  Plane,
  TrainFront,
  MapPinned,
} from "lucide-react";

const services = [
  {
    title: "Intercity Transfers",
    number: "01",
    eyebrow: "Makkah ⇄ Madinah",
    description:
      "Road transfers between Makkah and Madinah, timed around check-in, check-out and prayer times for your group.",
    icon: Route,
    accent: "teal",
  },
  {
    title: "Airport Transfers",
    number: "02",
    eyebrow: "Jeddah & Madinah",
    description:
      "Pickups from Jeddah or Madinah airport straight to your hotel, and drop-offs in good time for your return flight.",
    icon: Plane,
    accent: "gold",
  },
  {
    title: "Haramain Train",
    number: "03",
    eyebrow: "High-Speed Rail",
    description:
      "Guidance on Haramain high-speed rail tickets plus transfers between the stations and your hotels.",
    icon: TrainFront,
    accent: "teal",
  },
  {
    title: "Ziyarat Tours",
    number: "04",
    eyebrow: "Historic Sites",
    description:
      "Guided visits to Jabal al-Nour, Jabal Thawr, Mina and Arafat in Makkah, and Uhud, Quba and Qiblatayn in Madinah.",
    icon: MapPinned,
    accent: "gold",
  },
];

export default function TransportServices() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f1] py-24 sm:py-28 lg:py-32 xl:py-36">

      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      {/* Soft Luxury Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#7b6337]/[0.025] blur-[150px]" />

      {/* Decorative Rings */}
      <div className="pointer-events-none absolute -left-[280px] top-[20%] h-[700px] w-[700px] rounded-full border border-[#7b6337]/10" />

      <div className="pointer-events-none absolute -right-[300px] bottom-[-200px] h-[750px] w-[750px] rounded-full border border-[#1a3e34]/10" />

      {/* Vertical Architecture Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#7b6337]/15 to-transparent" />

        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1a3e34]/10 to-transparent" />

        <div className="absolute right-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#7b6337]/15 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-16 max-w-4xl text-center sm:mb-20 lg:mb-24">

          {/* Eyebrow */}

          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#7b6337]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.34em] text-[#1a3e34] sm:text-[10px]">
              Our Transport Services
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#7b6337]" />

          </div>


          {/* Heading */}

          <h2 className="mt-7 font-serif text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[#16322a] sm:text-[52px] lg:text-[64px]">

            Getting Around

            <span className="block italic font-medium text-[#7b6337]">
              The Holy Cities.
            </span>

          </h2>


          {/* Description */}

          <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-7 text-[#686f6c] sm:text-[15px] sm:leading-8">

            From the airport to your hotel, between the two holy cities and on
            ziyarat, transfers can be arranged so your group never has to
            worry about getting around.

          </p>

        </div>


        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7 xl:grid-cols-4">

          {services.map((service) => {

            const Icon = service.icon;
            const isGold = service.accent === "gold";

            return (

              <article
                key={service.title}
                className="group relative min-h-[440px] overflow-hidden rounded-[30px] border border-[#dfd9cc] bg-[#fbfaf8] p-7 transition-all duration-500 sm:p-8 hover:-translate-y-2 hover:border-[#7b6337]/50 hover:bg-white hover:shadow-[0_30px_80px_rgba(22,50,42,0.13)]"
              >

                {/* =========================================
                    CARD GLOW
                ========================================== */}

                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-[230px] w-[230px] rounded-full blur-[70px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                    isGold
                      ? "bg-[#7b6337]/10"
                      : "bg-[#1a3e34]/10"
                  }`}
                />


                {/* =========================================
                    BACKGROUND NUMBER
                ========================================== */}

                <div className="pointer-events-none absolute right-[-10px] top-[-10px] select-none">

                  <span
                    className={`font-serif text-[125px] font-bold leading-none tracking-[-0.08em] transition-all duration-500 ${
                      isGold
                        ? "text-[#7b6337]/[0.045] group-hover:text-[#7b6337]/[0.08]"
                        : "text-[#16322a]/[0.035] group-hover:text-[#1a3e34]/[0.07]"
                    }`}
                  >
                    {service.number}
                  </span>

                </div>


                {/* =========================================
                    TOP ICON AREA
                ========================================== */}

                <div className="relative z-10 flex items-center justify-between">

                  {/* Premium Icon */}

                  <div
                    className={`relative flex h-[66px] w-[66px] items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      isGold
                        ? "border-[#7b6337]/35 bg-gradient-to-br from-[#fbf9f4] to-[#f0e9db] text-[#7b6337]"
                        : "border-[#1a3e34]/25 bg-gradient-to-br from-[#fbf9f5] to-[#f4efe4] text-[#1a3e34]"
                    }`}
                  >

                    {/* Double Ring */}

                    <div
                      className={`absolute inset-[5px] rounded-full border ${
                        isGold
                          ? "border-[#7b6337]/20"
                          : "border-[#1a3e34]/15"
                      }`}
                    />

                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="relative z-10"
                    />

                  </div>


                  {/* Number */}

                  <span
                    className={`rounded-full border px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] ${
                      isGold
                        ? "border-[#7b6337]/20 text-[#7b6337]"
                        : "border-[#1a3e34]/15 text-[#1a3e34]"
                    }`}
                  >
                    {service.number}
                  </span>

                </div>


                {/* =========================================
                    EYEBROW
                ========================================== */}

                <div className="relative z-10 mt-10 flex items-center gap-3">

                  <span
                    className={`h-px w-9 transition-all duration-500 group-hover:w-14 ${
                      isGold
                        ? "bg-[#7b6337]"
                        : "bg-[#1a3e34]"
                    }`}
                  />

                  <span
                    className={`text-[8px] font-bold uppercase tracking-[0.25em] ${
                      isGold
                        ? "text-[#7b6337]"
                        : "text-[#1a3e34]"
                    }`}
                  >
                    {service.eyebrow}
                  </span>

                </div>


                {/* =========================================
                    TITLE
                ========================================== */}

                <h3 className="relative z-10 mt-7 min-h-[65px] font-serif text-[29px] font-bold leading-[1.08] tracking-[-0.02em] text-[#16322a]">

                  {service.title}

                </h3>


                {/* =========================================
                    DESCRIPTION
                ========================================== */}

                <p className="relative z-10 mt-5 text-[14px] leading-7 text-[#686f6c]">

                  {service.description}

                </p>


                {/* =========================================
                    BOTTOM AREA
                ========================================== */}

                <div className="absolute bottom-0 left-7 right-7 sm:left-8 sm:right-8">

                  {/* Divider */}

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#cbd2cf] to-transparent" />


                  <div className="flex items-center justify-between py-6">

                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#5c6660]">

                      Ayesha Tours

                    </span>


                    {/* Premium Dot */}

                    <div className="flex items-center gap-2">

                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-500 group-hover:scale-[1.8] ${
                          isGold
                            ? "bg-[#7b6337]"
                            : "bg-[#1a3e34]"
                        }`}
                      />

                      <span
                        className={`h-[5px] w-[5px] rounded-full opacity-40 ${
                          isGold
                            ? "bg-[#7b6337]"
                            : "bg-[#1a3e34]"
                        }`}
                      />

                    </div>

                  </div>

                </div>


                {/* =========================================
                    BOTTOM ACCENT
                ========================================== */}

                <div
                  className={`absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full transition-all duration-500 group-hover:w-[65%] ${
                    isGold
                      ? "bg-[#7b6337]"
                      : "bg-[#1a3e34]"
                  }`}
                />

              </article>

            );

          })}

        </div>


        {/* =====================================================
            PREMIUM SIGNATURE
        ====================================================== */}

        <div className="mt-16 flex justify-center sm:mt-20">

          <div className="flex items-center gap-4">

            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#7b6337]/70" />

            <p className="text-center text-[8px] font-bold uppercase tracking-[0.32em] text-[#5c6660] sm:text-[9px]">

              Airport • Intercity • Ziyarat

            </p>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#7b6337]/70" />

          </div>

        </div>

      </div>
    </section>
  );
}