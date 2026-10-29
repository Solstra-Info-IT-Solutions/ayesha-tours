"use client";

import {
  MessageCircle,
  Map,
  ClipboardCheck,
  Plane,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us",
    description:
      "Share whether you plan Umrah or Haj, your preferred month, group size, budget and any special needs.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "We Advise",
    description:
      "We suggest suitable packages, hotels and flight options and explain exactly what is and isn't included.",
    icon: Map,
  },
  {
    number: "03",
    title: "We Confirm",
    description:
      "Once you are happy, we guide you through documents, visa paperwork and confirmation of your bookings.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "You Travel",
    description:
      "Set out with a clear itinerary, checklists and a contact to reach while you are in Makkah and Madinah.",
    icon: Plane,
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#16322a] py-20 text-white sm:py-24 lg:py-28 xl:py-32">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-full w-px bg-white/[0.05]" />

        <div className="absolute right-[10%] top-0 h-full w-px bg-white/[0.05]" />

        <div className="absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full border border-[#7b6337]/10" />

        <div className="absolute -left-52 bottom-[-250px] h-[550px] w-[550px] rounded-full border border-white/[0.05]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* HEADER */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#7b6337]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#b79b66]">
              Our Simple Process
            </span>

            <span className="h-px w-10 bg-[#7b6337]" />
          </div>

          <h2 className="mt-6 font-serif text-[40px] font-bold leading-[1.1] sm:text-5xl lg:text-[58px]">
            How We Plan
            <span className="italic font-medium text-[#b79b66]">
              {" "}
              Your Pilgrimage.
            </span>
          </h2>

          <p className="mt-6 text-[14px] leading-7 text-white/65 sm:text-[15px]">
            A clear, step-by-step process so you always know what happens
            next – from your first message to the day you fly.
          </p>
        </div>

        {/* STEPS */}

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                {/* CONNECTOR */}

                {index !== steps.length - 1 && (
                  <div className="absolute left-[65%] top-[34px] hidden h-px w-[70%] bg-gradient-to-r from-[#7b6337]/50 to-transparent xl:block" />
                )}

                <div className="relative border border-white/[0.10] bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#7b6337]/40 hover:bg-white/[0.06]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#7b6337]/30 bg-[#7b6337]/10 text-[#b79b66]">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>

                    <span className="font-serif text-[42px] font-bold text-white/[0.08]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-[27px] font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-7 text-white/60">
                    {step.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7b6337]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#b79b66]">
                      Step {step.number}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}