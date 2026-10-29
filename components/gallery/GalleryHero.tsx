import { Camera, Sparkles } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-[#143129] py-24 sm:py-28 lg:py-32">

      <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full border border-[#b79b66]/15" />

      <div className="absolute -right-40 bottom-[-180px] h-[500px] w-[500px] rounded-full bg-[#b79b66]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">

        <div className="flex items-center justify-center gap-3">
          <Sparkles size={14} className="text-[#b79b66]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b79b66]">
            Pilgrimage Gallery
          </span>
        </div>

        <h1 className="mt-7 font-serif text-[44px] font-bold leading-[1.05] text-white sm:text-6xl lg:text-[72px]">
          Moments Of

          <span className="block italic font-medium text-[#b79b66]">
            Devotion.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-[#bccbc7] sm:text-[17px]">
          The Haramain, the Haj sites and the journey in between – a glimpse of
            what awaits you.
        </p>

        <div className="mt-9 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#b79b66]/30 bg-[#b79b66]/10 text-[#b79b66]">
            <Camera size={23} />
          </div>
        </div>

      </div>
    </section>
  );
}