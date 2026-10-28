import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[380px] overflow-hidden md:min-h-[460px]">
      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="/images/demo/haram-aerial.jpg"
        alt="Aerial view of Masjid al-Haram in Makkah at night"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />

      {/* ================= PREMIUM OVERLAYS ================= */}

      {/* Main Dark Overlay */}
      <div className="absolute inset-0 bg-[#36064b]/70" />

      {/* Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#270435]/80 via-[#36064b]/55 to-[#36064b]/30" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#36064b]/70 to-transparent" />

      {/* Decorative Lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-white/10" />

      <div className="absolute right-[10%] top-0 h-full w-px bg-white/[0.06]" />

      {/* Decorative Circle */}
      <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-[#ff0a91]/20" />

      <div className="absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border border-white/10" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-[380px] max-w-[1200px] flex-col justify-center px-6 py-20 md:min-h-[460px] md:px-10 lg:px-6">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-xs font-medium tracking-[0.12em] text-white/70">
          <Link
            href="/"
            className="transition hover:text-[#ff0a91]"
          >
            HOME
          </Link>

          <ChevronRight size={14} className="text-[#ff0a91]" />

          <span className="text-[#ff0a91]">ABOUT US</span>
        </div>

        {/* Premium Label */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#ff0a91]" />

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ff0a91]">
            ABOUT AYESHA TOURS
          </p>
        </div>

        {/* Heading */}
        <h1 className="max-w-[800px] font-serif text-4xl font-bold leading-[1.12] text-white md:text-5xl lg:text-[62px]">
          Your Pilgrimage,
          <span className="block italic text-[#ff0a91]">
            Supported With Care.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-[600px] text-[15px] leading-7 text-white/75 md:text-[17px]">
          We are a travel company dedicated to Umrah and Haj. Our work is to
          make the practical side of your pilgrimage clear and organised, so
          your heart can stay with your worship.
        </p>

        {/* Bottom Accent */}
        <div className="mt-10 flex items-center gap-4">
          <span className="h-10 w-px bg-[#ff0a91]" />

          <div>
            <p className="text-sm font-medium text-white">
              Prepare. Travel. Worship.
            </p>

            <p className="mt-1 text-xs tracking-[0.15em] text-white/50">
              AYESHA TOURS · HAJ & UMRAH PACKAGES
            </p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM GOLD ACCENT ================= */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#ff0a91] via-[#ff4daf] to-transparent" />
    </section>
  );
}