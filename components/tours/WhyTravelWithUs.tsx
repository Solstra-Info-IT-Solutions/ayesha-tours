import {
  HeartHandshake,
  ShieldCheck,
  Headphones,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Personalized Planning",
    description:
      "Packages adjusted around your dates, budget, family needs and preferred hotel distance.",
    icon: HeartHandshake,
  },
  {
    title: "Clear Inclusions",
    description:
      "Written details of flights, hotels, transfers, ziyarat and anything not included – before you pay.",
    icon: ShieldCheck,
  },
  {
    title: "Support While You Travel",
    description:
      "A contact to reach while you are in Makkah and Madinah, for questions or changes on the way.",
    icon: Headphones,
  },
];

export default function WhyTravelWithUs() {
  return (
    <section className="relative overflow-hidden bg-[#3e0e52] py-20 sm:py-24 lg:py-28">
      <div className="absolute right-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full border border-white/[0.06]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <Sparkles size={13} className="text-[#ff058f]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff058f]">
              The Ayesha Tours Difference
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[38px] font-bold text-white sm:text-5xl">
            Travel With{" "}

            <span className="italic font-medium text-[#ff058f]">
              Confidence.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[24px] border border-white/[0.10] bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#ff058f]/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ff058f]/30 bg-[#ff058f]/10 text-[#ff058f]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 font-serif text-[24px] font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-[#c1afc8]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}