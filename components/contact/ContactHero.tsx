import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#16322a]">
      {/* Decorative Elements */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.08]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full border border-[#b79b66]/20" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b79b66]/70 to-transparent" />

      <div className="relative mx-auto max-w-[1320px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-6">
        {/* Eyebrow */}

        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-[#b79b66]" />

          <div className="flex items-center gap-2">
            <Sparkles
              size={13}
              className="text-[#b79b66]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b79b66]">
              Get In Touch
            </span>
          </div>
        </div>

        {/* Heading */}

        <h1 className="mt-7 max-w-[800px] font-serif text-[42px] font-bold leading-[1.1] text-white sm:text-[56px] lg:text-[72px]">
          Let&apos;s Start Planning

          <span className="block italic font-medium text-[#b79b66]">
            Your Pilgrimage.
          </span>
        </h1>

        <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#bdcbc7] sm:text-[16px]">
          Whether you are planning your first Umrah, travelling with family or
          preparing for Haj, our team is here to answer your questions every
          step of the way.
        </p>

        {/* Breadcrumb */}

        <div className="mt-9 flex items-center gap-2 text-[12px] text-[#afbcb5]">
          <Link
            href="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <ChevronRight
            size={14}
            className="text-[#b79b66]"
          />

          <span className="text-[#b79b66]">
            Contact Us
          </span>
        </div>
      </div>
    </section>
  );
}