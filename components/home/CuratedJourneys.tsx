"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { packages } from "@/components/tours/TourPackagesGrid";
import { JOURNEY_FILTER_EVENT } from "@/components/home/JourneyComposer";
import { DEMO_MODE } from "@/lib/site";

const filters = [
  { id: "all", label: "All" },
  { id: "umrah", label: "Umrah" },
  { id: "family", label: "Family" },
  { id: "ramadan", label: "Ramadan" },
  { id: "haj", label: "Haj" },
];

export default function CuratedJourneys() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(0);

  // The journey composer can pre-select a category.
  useEffect(() => {
    const onFilter = (event: Event) => {
      const category = (event as CustomEvent<string>).detail;
      if (filters.some((f) => f.id === category)) {
        setFilter(category);
        setActive(0);
      }
    };
    window.addEventListener(JOURNEY_FILTER_EVENT, onFilter);
    return () => window.removeEventListener(JOURNEY_FILTER_EVENT, onFilter);
  }, []);

  const visible = filter === "all" ? packages : packages.filter((p) => p.category === filter);
  const preview = visible[Math.min(active, visible.length - 1)] ?? packages[0];

  return (
    <section id="journeys" aria-labelledby="journeys-title" className="scroll-mt-24 bg-ivory py-24 text-charcoal sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div data-reveal="up">
            <p className="flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-gold-ink">
              <span className="h-px w-8 bg-gold-ink" aria-hidden /> Curated journeys
            </p>
            <h2 id="journeys-title" className="mt-5 font-serif text-[length:var(--text-headline)] font-medium leading-[0.95] text-night">
              A journey for
              <br />
              <span className="italic text-mist">every kind of pilgrim.</span>
            </h2>
          </div>

          <div role="group" aria-label="Filter journeys" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setFilter(f.id);
                  setActive(0);
                }}
                aria-pressed={filter === f.id}
                className={`h-11 rounded-full border px-5 text-[14px] font-medium transition-colors ${
                  filter === f.id ? "border-night bg-night text-ivory" : "border-stone text-charcoal hover:border-night"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {DEMO_MODE && (
          <p className="mt-6 max-w-2xl text-[13px] leading-6 text-mist">
            Illustrative journey styles for this demo. Hotels, dates, inclusions and
            prices are confirmed only in your written quote.
          </p>
        )}

        <div className="mt-14 grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Sticky preview (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-stone">
                {visible.map((item, index) => (
                  <Image
                    key={item.title}
                    src={item.image}
                    alt=""
                    fill
                    sizes="40vw"
                    className={`object-cover transition-opacity duration-700 ${item === preview || (index === 0 && !preview) ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-ivory">
                  <p className="text-[12px] uppercase tracking-[0.24em] text-gold">{preview.category}</p>
                  <p className="mt-2 font-serif text-[30px] leading-tight">{preview.title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Index */}
          <ol className="border-t border-stone">
            {visible.map((item, index) => (
              <li
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className="group border-b border-stone"
              >
                <div className="grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-4 py-7 sm:grid-cols-[48px_1fr_auto] sm:items-center sm:gap-x-8 sm:py-9">
                  <span className="row-span-2 pt-2 text-[12px] tabular-nums text-gold-ink sm:row-span-1 sm:pt-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-start gap-4">
                      <div className="relative aspect-square w-16 shrink-0 overflow-hidden rounded-xl lg:hidden">
                        <Image src={item.image} alt="" fill sizes="64px" className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h3 className={`font-serif text-[26px] leading-tight transition-colors sm:text-[34px] ${index === active ? "text-night" : "text-charcoal/80"}`}>
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-6 text-mist">
                          {item.duration} · {item.location}
                        </p>
                        <p className="text-[14px] leading-6 text-mist">For {item.travelers.toLowerCase()}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/request-quote"
                    aria-label={`Request a quote for ${item.title}`}
                    className="col-start-2 inline-flex h-11 items-center gap-2 justify-self-start rounded-full border border-night/20 px-5 text-[14px] font-medium text-night transition-colors hover:border-night hover:bg-night hover:text-ivory sm:col-start-3"
                  >
                    Request a quote <ArrowUpRight size={15} aria-hidden />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex justify-end">
          <Link href="/tour-packages" className="inline-flex items-center gap-2 border-b border-night/30 pb-1 text-[15px] font-medium text-night hover:border-gold-ink hover:text-gold-ink">
            See all journey details <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
