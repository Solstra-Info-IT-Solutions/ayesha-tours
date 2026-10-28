import { Compass, Sparkles } from "lucide-react";

export default function ToursHero() {
  return (
    <section className="relative overflow-hidden bg-[#3e0e52] py-24 sm:py-28 lg:py-36">
      {/* Decorative elements */}

      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full border border-[#ff058f]/20" />

      <div className="absolute -right-40 bottom-[-150px] h-[500px] w-[500px] rounded-full bg-[#ff058f]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#ff058f]" />

            <Sparkles size={14} className="text-[#ff058f]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff058f]">
              Umrah & Haj Packages
            </span>

            <span className="h-px w-10 bg-[#ff058f]" />
          </div>

          <h1 className="mt-7 font-serif text-[44px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-[76px]">
            Answer The Call

            <span className="block italic font-medium text-[#ff058f]">
              With Confidence.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-[#c9b7d0] sm:text-[17px]">
            Package styles for every pilgrim – from economy to premium Umrah,
            family and Ramadan journeys, and guidance for Haj.
          </p>

          <div className="mt-9 flex justify-center">
            <div className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-5 py-3">
              <Compass size={16} className="text-[#ff058f]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6dceb]">
                Every Package Can Be Adjusted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}