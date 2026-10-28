"use client";

import {
  MessageCircleMore,
  ClipboardPenLine,
  BadgeCheck,
  PlaneTakeoff,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us",
    shortTitle: "Tell Us Your Plan",
    description:
      "Share whether it is Umrah or Haj, your preferred month, number of pilgrims and your budget.",
    icon: MessageCircleMore,
  },
  {
    number: "02",
    title: "We Plan",
    shortTitle: "We Suggest Options",
    description:
      "We recommend suitable packages, hotels and flights and explain the inclusions and exclusions clearly.",
    icon: ClipboardPenLine,
  },
  {
    number: "03",
    title: "We Confirm",
    shortTitle: "Everything Gets Confirmed",
    description:
      "Once you decide, we guide you through documents, visa paperwork and confirmation of each booking.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "You Travel",
    shortTitle: "Focus On Your Worship",
    description:
      "Travel with your itinerary and checklists in hand, knowing who to contact if anything changes.",
    icon: PlaneTakeoff,
  },
];

export default function JourneyProcess() {
  return (
    <section className="relative overflow-hidden bg-[#fbf9fa] py-24 sm:py-28 lg:py-32">
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      {/* Top subtle line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e40e83]/40 to-transparent" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[#e40e83]/10" />

      <div className="pointer-events-none absolute -right-52 bottom-[-220px] h-[650px] w-[650px] rounded-full border border-[#4e1367]/10" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#e40e83]/[0.025] blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#e40e83] sm:w-12" />

            <div className="flex items-center gap-2">
              <Sparkles
                size={13}
                className="text-[#e40e83]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#4e1367] sm:text-[10px]">
                Our Simple Process
              </span>
            </div>

            <span className="h-px w-8 bg-[#e40e83] sm:w-12" />
          </div>

          <h2 className="mt-7 font-serif text-[40px] font-bold leading-[1.08] tracking-[-0.025em] text-[#3f1152] sm:text-5xl lg:text-[62px]">
            How We Plan Your
            <span className="block italic font-medium text-[#e40e83]">
              Pilgrimage.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-8 text-[#6e6572] sm:text-[15px]">
            From your first enquiry to the day you fly, we keep the
            planning simple, organised and transparent.
          </p>
        </div>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <div className="relative mt-16 lg:mt-20">
          {/* DESKTOP CONNECTING LINE */}

          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[42px] hidden h-px lg:block">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-[#e40e83]/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative"
                >
                  {/* MOBILE CONNECTOR */}

                  {index !== steps.length - 1 && (
                    <div className="absolute bottom-[-20px] left-1/2 top-full hidden h-5 w-px -translate-x-1/2 bg-[#e40e83]/20 sm:hidden" />
                  )}

                  {/* CARD */}

                  <article className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[#dfd7db] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#e40e83]/50 hover:shadow-[0_25px_60px_rgba(63,17,82,0.10)] sm:p-8">
                    {/* Background Number */}

                    <span className="pointer-events-none absolute right-5 top-2 select-none font-serif text-[82px] font-bold leading-none tracking-[-0.07em] text-[#3f1152]/[0.035] transition-all duration-500 group-hover:text-[#e40e83]/[0.08]">
                      {step.number}
                    </span>

                    {/* ICON */}

                    <div className="relative z-10 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#e40e83]/30 bg-[#f7ecf2] text-[#c50e72] shadow-[0_10px_30px_rgba(228,14,131,0.10)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#e40e83] group-hover:text-white">
                      <div className="absolute inset-[6px] rounded-full border border-[#e40e83]/20 transition-colors duration-500 group-hover:border-white/30" />

                      <Icon
                        size={26}
                        strokeWidth={1.6}
                        className="relative z-10"
                      />
                    </div>

                    {/* STEP LABEL */}

                    <div className="mt-8 flex items-center gap-3">
                      <span className="h-px w-8 bg-[#e40e83] transition-all duration-500 group-hover:w-12" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#b3146b]">
                        Step {step.number}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-5 font-serif text-[27px] font-bold leading-tight text-[#3f1152]">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-4 text-[13px] leading-7 text-[#6e6572]">
                      {step.description}
                    </p>

                    {/* BOTTOM */}

                    <div className="mt-8 flex items-center justify-between border-t border-[#e5dde1] pt-5">
                      <span className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#928a96]">
                        {step.shortTitle}
                      </span>

                      {index !== steps.length - 1 ? (
                        <ArrowRight
                          size={17}
                          className="text-[#e40e83] transition-transform duration-500 group-hover:translate-x-1"
                        />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-[#e40e83] transition-transform duration-500 group-hover:scale-150" />
                      )}
                    </div>

                    {/* Bottom accent */}

                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#e40e83] transition-all duration-500 group-hover:w-full" />
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM SIGNATURE
        ====================================================== */}

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-full border border-[#e40e83]/20 bg-[#fdfafc] px-5 py-3 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e40e83]" />

            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#6e6572]">
              Clear Planning • Organised Travel • Peaceful Worship
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-[#4e1367]" />
          </div>
        </div>
      </div>
    </section>
  );
}