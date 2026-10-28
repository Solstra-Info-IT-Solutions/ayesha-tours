import { Bus, ChevronRight } from "lucide-react";

export default function TransportQuoteHero() {
  return (
    <section className="relative overflow-hidden bg-[#3f1152]">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full border border-[#ff058f]/20" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ff058f]/40 bg-[#ff058f]/10">
              <Bus size={21} className="text-[#ff058f]" />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#ff058f]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ff058f]">
                Transport & Ziyarat
              </span>
            </div>
          </div>

          <h1 className="mt-7 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Request Your
            <span className="block italic font-medium text-[#ff058f]">
              Transport Quote.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-base">
            Tell us about your transfers in Saudi Arabia and our team will
            suggest the right vehicle for your group – airport, intercity or
            ziyarat.
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm text-white/50">
            <span>Home</span>

            <ChevronRight size={15} />

            <span>Transport</span>

            <ChevronRight size={15} />

            <span className="text-[#ff058f]">Request Quote</span>
          </div>
        </div>
      </div>
    </section>
  );
}