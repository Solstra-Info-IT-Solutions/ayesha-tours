import {
  Car,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Umrah Packages",
    category: "ALL YEAR",
    description:
      "Economy, standard and premium Umrah packages with flights, hotels in Makkah and Madinah, transfers and ziyarat explained clearly.",
    image: "/images/demo/kaaba-tawaf.jpg",
    icon: Car,
    type: "image",
    className: "md:col-span-2",
  },
  {
    title: "Haj Guidance",
    category: "ONCE IN A LIFETIME",
    description:
      "Guidance on Haj options, documentation and preparation, so you know what to expect in Mina, Arafat and Muzdalifah.",
    icon: BriefcaseBusiness,
    type: "dark",
    className: "",
  },
  {
    title: "Visa & Flights",
    category: "PAPERWORK",
    description:
      "Assistance with Umrah visa applications, flight options and document checklists before you travel.",
    icon: Building2,
    type: "light",
    className: "",
  },
  {
    title: "Hotels & Transfers",
    category: "ON THE GROUND",
    description:
      "Hotel options near the Haramain plus airport, intercity and ziyarat transfers arranged around your group.",
    image: "/images/demo/clock-tower.jpg",
    icon: CalendarDays,
    type: "image",
    className: "md:col-span-2",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] px-6 py-20 md:px-10 lg:px-20 lg:py-28">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-[-100px] top-[20%] h-[350px] w-[350px] rounded-full bg-[#1a3e34]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#b79b66]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mb-14 max-w-[700px]">

          {/* Premium Eyebrow */}
          <div className="flex items-center gap-4">

            <span className="h-px w-10 bg-[#b79b66]" />

            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#7b6337]">
              Comprehensive Expertise
            </p>

          </div>

          {/* Heading */}
          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#1a3e34] md:text-[44px]">
            What We Do
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[600px] text-[15px] leading-7 text-[#69716d]">
            From your first question to your return flight, we help with the
            practical parts of Umrah and Haj so nothing important is left to
            chance.
          </p>

        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            /* ================= IMAGE CARD ================= */
            if (service.type === "image") {
              return (
                <article
                  key={service.title}
                  className={`group relative min-h-[330px] overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(26,62,52,0.12)] ${service.className}`}
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102a23]/95 via-[#133128]/45 to-[#133128]/15" />

                  {/* Top Icon */}
                  <div className="absolute left-7 top-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">

                    <Icon
                      size={25}
                      strokeWidth={1.7}
                      className="text-[#b79b66]"
                    />

                  </div>

                  {/* Number */}
                  <span className="absolute right-7 top-7 font-serif text-[16px] tracking-[3px] text-white/60">
                    0{index + 1}
                  </span>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">

                    {/* Category */}
                    <div className="mb-4 flex items-center gap-3">

                      <span className="h-[2px] w-8 bg-[#b79b66]" />

                      <span className="text-[10px] font-semibold tracking-[2.5px] text-[#b79b66]">
                        {service.category}
                      </span>

                    </div>

                    <div className="flex items-end justify-between gap-5">

                      <div>
                        <h3 className="font-serif text-2xl font-bold text-white">
                          {service.title}
                        </h3>

                        <p className="mt-3 max-w-[520px] text-[14px] leading-6 text-white/80">
                          {service.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all duration-300 group-hover:bg-[#b79b66] group-hover:text-[#0e1f1b] md:flex">

                        <ArrowUpRight size={19} />

                      </div>

                    </div>

                  </div>

                </article>
              );
            }

            /* ================= DARK CARD ================= */
            if (service.type === "dark") {
              return (
                <article
                  key={service.title}
                  className="group relative min-h-[330px] overflow-hidden rounded-2xl bg-[#1a3e34] p-8 text-white shadow-[0_15px_40px_rgba(26,62,52,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(26,62,52,0.22)]"
                >

                  {/* Decorative Number */}
                  <span className="absolute -right-4 -top-7 font-serif text-[110px] font-bold text-white/[0.04]">
                    0{index + 1}
                  </span>

                  {/* Gold Accent */}
                  <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#b79b66] transition-all duration-500 group-hover:w-full" />

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b79b66] shadow-[0_10px_25px_rgba(0,0,0,0.15)]">

                    <Icon
                      size={25}
                      strokeWidth={1.8}
                      className="text-[#1a3e34]"
                    />

                  </div>

                  {/* Content */}
                  <div className="relative mt-12">

                    <p className="text-[10px] font-semibold tracking-[2.5px] text-[#b79b66]">
                      {service.category}
                    </p>

                    <h3 className="mt-4 font-serif text-[25px] font-bold">
                      {service.title}
                    </h3>

                    <div className="mt-5 h-px w-12 bg-white/20 transition-all duration-500 group-hover:w-20 group-hover:bg-[#b79b66]" />

                    <p className="mt-5 text-[14px] leading-7 text-white/70">
                      {service.description}
                    </p>

                  </div>

                  {/* Bottom Arrow */}
                  <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#b79b66] group-hover:bg-[#b79b66] group-hover:text-[#0e1f1b]">

                    <ArrowUpRight size={18} />

                  </div>

                </article>
              );
            }

            /* ================= LIGHT CARD ================= */
            return (
              <article
                key={service.title}
                className="group relative min-h-[330px] overflow-hidden rounded-2xl border border-[#1a3e34]/10 bg-white p-8 shadow-[0_12px_35px_rgba(26,62,52,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#b79b66]/60 hover:shadow-[0_25px_55px_rgba(26,62,52,0.12)]"
              >

                {/* Decorative Number */}
                <span className="absolute -right-4 -top-7 font-serif text-[110px] font-bold text-[#1a3e34]/[0.035]">
                  0{index + 1}
                </span>

                {/* Accent Line */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#b79b66] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1a3e34] shadow-[0_10px_25px_rgba(26,62,52,0.18)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#b79b66]">

                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="text-white transition-colors duration-500 group-hover:text-white"
                  />

                </div>

                {/* Content */}
                <div className="relative mt-12">

                  <p className="text-[10px] font-semibold tracking-[2.5px] text-[#7b6337]">
                    {service.category}
                  </p>

                  <h3 className="mt-4 font-serif text-[25px] font-bold text-[#1a3e34]">
                    {service.title}
                  </h3>

                  <div className="mt-5 h-px w-12 bg-[#b79b66] transition-all duration-500 group-hover:w-20" />

                  <p className="mt-5 text-[14px] leading-7 text-[#69716d]">
                    {service.description}
                  </p>

                </div>

                {/* Bottom Arrow */}
                <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-[#1a3e34]/15 text-[#1a3e34] transition-all duration-300 group-hover:border-[#b79b66] group-hover:bg-[#b79b66]">

                  <ArrowUpRight size={18} />

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}