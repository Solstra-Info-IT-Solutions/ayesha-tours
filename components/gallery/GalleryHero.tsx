import { Camera, Sparkles } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-[#3e0e52] py-24 sm:py-28 lg:py-32">

      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full border border-[#ff058f]/15" />

      <div className="absolute -right-40 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#ff058f]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">

        <div className="flex items-center justify-center gap-3">
          <Sparkles size={14} className="text-[#ff058f]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff058f]">
            Pilgrimage Gallery
          </span>
        </div>

        <h1 className="mt-7 font-serif text-[44px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-[72px]">
          Moments Of

          <span className="block italic font-medium text-[#ff058f]">
            Devotion.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-[#c9b7d0] sm:text-[17px]">
          The Haramain, the Haj sites and the journey in between – a glimpse of
            what awaits you.
        </p>

        <div className="mt-9 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ff058f]/30 bg-[#ff058f]/10 text-[#ff058f]">
            <Camera size={23} />
          </div>
        </div>

      </div>
    </section>
  );
}