import {
  HeartHandshake,
  Armchair,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Trust",
    text: "A pilgrimage begins with trust. We keep communication clear and only promise what is confirmed in writing.",
  },
  {
    icon: Armchair,
    title: "Ease",
    text: "We plan hotels, transfers and timings so pilgrims – especially the elderly – can perform their rites with less strain.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Your wellbeing matters. We share practical health, heat and crowd guidance and plan responsibly around it.",
  },
  {
    icon: BadgeCheck,
    title: "Sincerity",
    text: "From the first enquiry to your return home, we aim to serve every guest of Allah with respect and patience.",
  },
];

export default function OurValues() {
  return (
    <section className="relative overflow-hidden bg-[#f9f6f8] px-6 py-20 md:px-10 lg:px-20 lg:py-28">

      {/* Decorative Background Elements */}
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#4e1367]/[0.03] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ff0f93]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-14 max-w-[650px] text-center">

          {/* Premium Small Heading */}
          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-[#fa078d]" />

            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-[#ed0c88]">
              The Pillars of Our Service
            </p>

            <span className="h-px w-10 bg-[#fa078d]" />

          </div>

          <h2 className="mt-5 font-serif text-3xl font-bold text-[#4e1367] md:text-[42px]">
            Our Core Values
          </h2>

          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-[#706575]">
            The principles that guide how we serve every pilgrim who travels
            with us.
          </p>

        </div>

        {/* ================= VALUE CARDS ================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group relative overflow-hidden rounded-2xl border border-[#4e1367]/10 bg-white p-7 shadow-[0_10px_35px_rgba(78,19,103,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#ff0f93]/50 hover:shadow-[0_22px_55px_rgba(78,19,103,0.14)]"
              >

                {/* Top Accent Line */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#ff0f93] transition-all duration-500 group-hover:w-full" />

                {/* Background Number */}
                <span className="absolute -right-2 -top-7 font-serif text-[90px] font-bold leading-none text-[#4e1367]/[0.035] transition duration-500 group-hover:text-[#ff0f93]/[0.08]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4e1367] shadow-[0_10px_25px_rgba(78,19,103,0.22)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#ff0f93]">

                  <Icon
                    size={25}
                    strokeWidth={1.8}
                    className="text-white transition-colors duration-500 group-hover:text-white"
                  />

                </div>

                {/* Title */}
                <h3 className="relative font-serif text-[21px] font-bold text-[#4e1367]">
                  {value.title}
                </h3>

                {/* Small Gold Divider */}
                <div className="mt-4 h-[2px] w-9 bg-[#ff0f93] transition-all duration-500 group-hover:w-16" />

                {/* Description */}
                <p className="relative mt-5 text-[14px] leading-7 text-[#716874]">
                  {value.text}
                </p>

                {/* Bottom Decorative Element */}
                <div className="mt-7 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff0f93]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#4e1367]/50">
                    Ayesha Tours
                  </span>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}