import {
  Gem,
  Map,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Personalised Planning",
    description:
      "Packages adjusted around your dates, budget, family and preferred hotel distance.",
  },
  {
    icon: Map,
    title: "Pilgrim Guidance",
    description:
      "Practical guidance on visas, ihram, the rites of Umrah and what to expect on arrival.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Help before you travel and a contact to reach while you are in Saudi Arabia.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Quotes",
    description:
      "Itemised quotations so you know exactly what is included before you confirm.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#3f1152] py-20 sm:py-24 lg:py-28">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full border border-[#fb1895]/15" />

      <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-24">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-[#fb1895]" />

            <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#fb1895]">
              Why Pilgrims Choose Us
            </span>

            <span className="h-px w-10 bg-[#fb1895]" />

          </div>

          <h2 className="mt-6 font-serif text-4xl font-bold text-white sm:text-5xl">

            Designed Around

            <span className="italic text-[#fb1895]">
              {" "}You.
            </span>

          </h2>

          <p className="mt-6 text-[15px] leading-7 text-white/65">

            From the first conversation to your return flight, we focus on
            making your pilgrimage clear, organised and peaceful.

          </p>

        </div>


        {/* Features */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[18px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-[#fb1895]/40 hover:bg-white/[0.07]"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fb1895]/15 text-[#fb1895] transition duration-300 group-hover:bg-[#fb1895] group-hover:text-white">

                  <Icon size={21} />

                </div>

                <h3 className="mt-6 font-serif text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-white/55">
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