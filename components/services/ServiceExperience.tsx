import {
  ShieldCheck,
  HeartHandshake,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Dependable Arrangements",
    description:
      "Flights, hotels and transfers planned with attention to timing, prayer times and rest.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized Planning",
    description:
      "Packages adjusted around your family, health needs and preferred hotel distance.",
    icon: HeartHandshake,
  },
  {
    title: "Support While Travelling",
    description:
      "A contact to reach while you are in Saudi Arabia, for questions and changes on the way.",
    icon: Clock3,
  },
  {
    title: "Honest Guidance",
    description:
      "Straightforward answers about costs, timings and what to expect during your pilgrimage.",
    icon: BadgeCheck,
  },
];

export default function ServiceExperience() {
  return (
    <section className="relative overflow-hidden bg-[#3f1152] py-24 sm:py-28 lg:py-32">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e40e83]/[0.06] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-12">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Left */}
          <div>

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e40e83]">
              The Ayesha Tours Experience
            </span>

            <h2 className="mt-6 font-serif text-[42px] font-bold leading-[1.1] text-white sm:text-5xl lg:text-[60px]">
              More Than Just
              <span className="block italic font-medium text-[#e40e83]">
                A Travel Booking.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#c9b9d0]">
              A meaningful pilgrimage starts long before you reach Makkah. Our
            focus is on making every stage of the journey clear, organised
            and as comfortable as possible.
            </p>

          </div>


          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-[28px] border border-white/[0.10] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#e40e83]/40 hover:bg-white/[0.07]"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e40e83]/25 bg-[#e40e83]/10 text-[#e40e83] transition-transform duration-500 group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 font-serif text-[22px] font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-7 text-[#bda9c5]">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}