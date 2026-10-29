import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

interface LegalHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function LegalHero({
  eyebrow,
  title,
  description,
}: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#16322a] py-20 sm:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

      <div className="pointer-events-none absolute -left-32 bottom-[-220px] h-[450px] w-[450px] rounded-full border border-[#7b6337]/20" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7b6337] to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        {/* Breadcrumb */}

        <div className="flex items-center gap-2 text-[11px] font-medium text-white/55">
          <Link
            href="/"
            className="transition hover:text-[#7b6337]"
          >
            Home
          </Link>

          <ChevronRight size={14} />

          <span className="text-[#7b6337]">{title}</span>
        </div>

        <div className="mt-10 max-w-4xl">
          {/* Eyebrow */}

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#7b6337]" />

            <div className="flex items-center gap-2">
              <ShieldCheck
                size={14}
                className="text-[#7b6337]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#7b6337]">
                {eyebrow}
              </span>
            </div>
          </div>

          {/* Title */}

          <h1 className="mt-7 font-serif text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[54px] lg:text-[68px]">
            {title}
          </h1>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#c8d2cd] sm:text-[16px] sm:leading-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}