import { CircleHelp, Sparkles } from "lucide-react";

export default function FAQHero() {
  return (
    <section className="relative overflow-hidden bg-[#3e0e52] py-24 sm:py-28 lg:py-32">

      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full border border-[#ff058f]/15" />

      <div className="absolute -right-32 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#ff058f]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">

        <div className="flex items-center justify-center gap-3">
          <Sparkles size={14} className="text-[#ff058f]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff058f]">
            Help Centre
          </span>
        </div>

        <h1 className="mt-7 font-serif text-[44px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-[72px]">
          Frequently Asked

          <span className="block italic font-medium text-[#ff058f]">
            Questions.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-[#c9b7d0] sm:text-[17px]">
          Answers for first-time and returning pilgrims about packages, visas,
          Haj and travelling with Ayesha Tours.
        </p>

        <div className="mt-9 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ff058f]/30 bg-[#ff058f]/10 text-[#ff058f]">
            <CircleHelp size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}