import {
  MessageCircleMore,
  MapPinned,
  SlidersHorizontal,
  CircleCheck,
  Headphones,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We listen to your plans, budget, dates and any special needs of your family.",
    icon: MessageCircleMore,
  },
  {
    number: "02",
    title: "Plan",
    text: "We suggest packages and hotels with a sensible balance between Makkah and Madinah.",
    icon: MapPinned,
  },
  {
    number: "03",
    title: "Customize",
    text: "We adjust room types, hotel distance and ziyarat to suit your group.",
    icon: SlidersHorizontal,
  },
  {
    number: "04",
    title: "Confirm",
    text: "We confirm bookings and share your itinerary, documents and checklists.",
    icon: CircleCheck,
  },
  {
    number: "05",
    title: "Support",
    text: "A contact to reach while you travel, for questions and changes on the way.",
    icon: Headphones,
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-[#4e1367] px-6 py-20 text-white md:px-10 lg:px-20 lg:py-28">

      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[420px] w-[420px] rounded-full border border-[#ff0890]/10" />

      <div className="pointer-events-none absolute left-[10%] top-[50%] h-[250px] w-[250px] rounded-full bg-[#ff0890]/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-16 max-w-[650px] text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-[#ff0890]" />

            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#ff0890]">
              The Journey Method
            </p>

            <span className="h-px w-10 bg-[#ff0890]" />

          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold md:text-[44px]">
            Our Approach
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-white/65">
            Every pilgrimage begins with understanding your needs and ends with
            you returning home safely, with your rites fulfilled.
          </p>

        </div>

        {/* ================= JOURNEY TIMELINE ================= */}
        <div className="relative">

          {/* Desktop Connecting Line */}
          <div className="absolute left-[10%] right-[10%] top-[35px] hidden h-px bg-gradient-to-r from-transparent via-[#ff0890]/60 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative text-center"
                >

                  {/* ================= STEP ICON ================= */}
                  <div className="relative mx-auto">

                    {/* Outer Glow */}
                    <div className="absolute inset-0 scale-125 rounded-full bg-[#ff0890]/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

                    {/* Icon Container */}
                    <div className="relative mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-2xl border border-[#ff0890]/60 bg-[#4e1367] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#ff0890] group-hover:bg-[#ff0890]">

                      <Icon
                        size={27}
                        strokeWidth={1.7}
                        className="text-[#ff0890] transition-colors duration-500 group-hover:text-white"
                      />

                    </div>

                    {/* Step Number */}
                    <span className="absolute -right-1 top-[-8px] flex h-7 min-w-7 items-center justify-center rounded-full border border-[#ff0890] bg-[#4e1367] px-1 text-[9px] font-bold tracking-wide text-[#ff0890]">
                      {step.number}
                    </span>

                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="mt-7">

                    <h3 className="font-serif text-[21px] font-bold text-white">
                      {step.title}
                    </h3>

                    {/* Gold Divider */}
                    <div className="mx-auto mt-4 h-[2px] w-8 bg-[#ff0890] transition-all duration-500 group-hover:w-14" />

                    <p className="mx-auto mt-5 max-w-[190px] text-[13px] leading-6 text-white/60">
                      {step.text}
                    </p>

                  </div>

                </article>
              );
            })}

          </div>
        </div>

        {/* ================= BOTTOM PREMIUM LINE ================= */}
        <div className="mx-auto mt-16 flex max-w-[850px] items-center justify-center gap-4">

          <span className="h-px flex-1 bg-white/10" />

          <span className="font-serif text-[13px] italic tracking-wide text-[#ff0890]">
            From the first conversation to your safe return
          </span>

          <span className="h-px flex-1 bg-white/10" />

        </div>

      </div>
    </section>
  );
}