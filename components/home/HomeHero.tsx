"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { chapters } from "@/components/home/chapters";

const CHAPTER_MS = 8000;

export default function HomeHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoplay, setAutoplay] = useState(false);

  // Auto-advance only with JS, without reduced motion, while visible.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAutoplay(!reduce.matches);
    update();
    reduce.addEventListener("change", update);
    return () => reduce.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!autoplay || paused) return;
    const timer = window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        setActive((index) => (index + 1) % chapters.length);
      }
    }, CHAPTER_MS);
    return () => window.clearTimeout(timer);
  }, [active, autoplay, paused]);

  const chapter = chapters[active];

  return (
    <section
      aria-label="Ayesha Tours – introduction"
      className="relative -mt-[72px] h-[100svh] min-h-[620px] overflow-hidden bg-night text-ivory sm:-mt-[84px] sm:min-h-[700px]"
    >
      {/* Photographic chapters */}
      <div className="veil-open absolute inset-0">
        {chapters.map((item, index) => (
          <div
            key={item.id}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              index === active
                ? "scale-100 opacity-100 duration-[1800ms,9000ms]"
                : "scale-[1.06] opacity-0 duration-[1800ms,1800ms]"
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: item.position }}
            />
          </div>
        ))}

        {/* Readability veils: left for the headline, bottom for the rail */}
        <div className="absolute inset-0 bg-gradient-to-r from-night/75 via-night/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/45 to-night/35 sm:from-night/90 sm:via-transparent" />
      </div>

      {/* Architectural frame lines */}
      <div aria-hidden className="pointer-events-none absolute inset-x-5 bottom-28 top-24 hidden border-x border-ivory/10 sm:inset-x-8 lg:inset-x-12 lg:block" />

      <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-28 pt-28 sm:px-8 sm:pb-32 lg:px-12 lg:pb-36">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_300px]">
          <div className="max-w-[980px]">
            <p className="veil-fade flex items-center gap-4 text-[12px] font-medium uppercase tracking-[0.32em] text-gold" style={{ ["--line-delay" as string]: "300ms" }}>
              <span className="h-px w-10 bg-gold" aria-hidden />
              Haj &amp; Umrah<span className="hidden sm:inline"> · Ayesha Tours</span>
            </p>

            <h1 className="mt-6 font-serif text-[length:var(--text-display)] font-medium leading-[0.9] tracking-[-0.015em]">
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="veil-line" style={{ ["--line-delay" as string]: "450ms" }}>Some journeys</span>{" "}
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="veil-line italic text-ivory/80" style={{ ["--line-delay" as string]: "600ms" }}>change</span>{" "}
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="veil-line" style={{ ["--line-delay" as string]: "750ms" }}>everything.</span>
              </span>
            </h1>

            <div className="veil-fade mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between lg:justify-start lg:gap-14" style={{ ["--line-delay" as string]: "1000ms" }}>
              <p className="max-w-[420px] text-[16px] leading-7 text-ivory/80 sm:text-[17px]">
                Your sacred journey to Makkah and Madinah, thoughtfully
                planned – from the first question to your safe return home.
              </p>

              <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  href="/enquiry"
                  className="group inline-flex h-14 items-center gap-3 rounded-full bg-ivory pl-7 pr-2 text-[15px] font-semibold text-night transition-colors hover:bg-gold"
                >
                  Plan My Pilgrimage
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-night text-ivory transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={18} aria-hidden />
                  </span>
                </Link>
                <Link
                  href="#journeys"
                  className="group inline-flex items-center gap-2 border-b border-ivory/40 pb-1 text-[15px] font-medium text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  Explore Journeys
                </Link>
              </div>
            </div>
          </div>

          {/* Chapter rail */}
          <div
            role="group"
            aria-label="Choose a photograph"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="veil-fade hidden lg:block"
            style={{ ["--line-delay" as string]: "1200ms" }}
          >
            <ol className="space-y-1">
              {chapters.map((item, index) => {
                const isActive = index === active;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      aria-pressed={isActive}
                      className="group w-full py-3 text-left"
                    >
                      <span className="flex items-baseline justify-between gap-4">
                        <span className={`font-serif text-[26px] leading-none transition-colors ${isActive ? "text-ivory" : "text-ivory/45 group-hover:text-ivory/80"}`}>
                          {item.label}
                        </span>
                        <span lang="ar" dir="rtl" className={`font-arabic text-[18px] transition-colors ${isActive ? "text-gold" : "text-ivory/60"}`}>
                          {item.arabic}
                        </span>
                      </span>
                      <span className="mt-3 block h-px w-full overflow-hidden bg-ivory/15">
                        {isActive && (
                          <span
                            key={`${item.id}-${paused}`}
                            className={`block h-full bg-gold ${autoplay && !paused ? "chapter-progress" : "w-full"}`}
                            style={{ ["--chapter-duration" as string]: `${CHAPTER_MS}ms` }}
                          />
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      {/* Bottom strip: caption, mobile chapter dots, scroll cue */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 border-t border-ivory/10 px-5 py-5 text-[12px] text-ivory/70 sm:px-8 lg:px-12">
          <p aria-live="polite" className="min-w-0 truncate">
            <span className="text-gold">{chapter.coords}</span>
            <span className="hidden sm:inline"> · {chapter.caption}</span>
          </p>

          <div className="flex items-center gap-2 lg:hidden" role="group" aria-label="Choose a photograph">
            {chapters.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={index === active}
                aria-label={item.title}
                className="flex h-11 w-9 items-center justify-center"
              >
                <span className={`block h-[3px] rounded-full transition-all duration-500 ${index === active ? "w-7 bg-gold" : "w-3 bg-ivory/40"}`} />
              </button>
            ))}
          </div>

          <a href="#planner" className="hidden items-center gap-2 uppercase tracking-[0.24em] hover:text-gold sm:inline-flex">
            Begin <ArrowDown size={14} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
