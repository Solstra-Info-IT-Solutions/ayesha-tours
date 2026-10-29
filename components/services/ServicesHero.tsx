import { Sparkles, Compass } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#16322a] pb-24 pt-32 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-40">
      
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b79b66]/10 blur-[140px]" />

        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

        <div className="absolute -right-40 bottom-[-150px] h-[600px] w-[600px] rounded-full border border-[#b79b66]/15" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b79b66]/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-8 lg:px-12">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#b79b66]" />

          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-[#b79b66]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#b79b66]">
              Ayesha Tours Services
            </span>
          </div>

          <span className="h-px w-10 bg-[#b79b66]" />
        </div>

        {/* Heading */}
        <h1 className="mx-auto mt-7 max-w-4xl font-serif text-[44px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-6xl lg:text-[72px]">
          Every Pilgrimage.
          <span className="block italic font-medium text-[#b79b66]">
            Carefully Supported.
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-8 text-[#becbc4] sm:text-[17px]">
          From Umrah and Haj packages to visas, hotels, transfers and
          ziyarat, Ayesha Tours brings together the practical help you need
          for a calm and well-organised pilgrimage.
        </p>

        {/* Bottom Feature */}
        <div className="mx-auto mt-12 flex w-fit items-center gap-4 rounded-full border border-white/[0.10] bg-white/[0.04] px-6 py-3 backdrop-blur-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b79b66]/15 text-[#b79b66]">
            <Compass size={17} />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e6e0d5]">
            Umrah • Haj • Ziyarat
          </span>
        </div>

      </div>
    </section>
  );
}