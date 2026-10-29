"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronDown, Minus, Plus } from "lucide-react";
import { whatsappLink } from "@/lib/site";

type Pilgrimage = "Umrah" | "Haj";

const months = [
  "Flexible / not sure yet",
  "Ramadan",
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const needs = [
  { id: "elderly", label: "Elderly parents travelling" },
  { id: "wheelchair", label: "Wheelchair assistance" },
  { id: "first", label: "First pilgrimage" },
  { id: "children", label: "Young children" },
] as const;

type NeedId = (typeof needs)[number]["id"];

/** Event the curated journeys section listens to. */
export const JOURNEY_FILTER_EVENT = "ayesha:journey-filter";

export default function JourneyComposer() {
  const [type, setType] = useState<Pilgrimage>("Umrah");
  const [month, setMonth] = useState(months[0]);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedNeeds, setSelectedNeeds] = useState<NeedId[]>([]);

  const toggleNeed = (id: NeedId) =>
    setSelectedNeeds((current) =>
      current.includes(id) ? current.filter((n) => n !== id) : [...current, id]
    );

  const summary = useMemo(() => {
    const when =
      type === "Haj"
        ? "for the coming Haj season"
        : month === months[0]
          ? "with flexible dates"
          : month === "Ramadan"
            ? "during Ramadan"
            : `in ${month}`;
    const party = [
      `${adults} adult${adults === 1 ? "" : "s"}`,
      children > 0 ? `${children} child${children === 1 ? "" : "ren"}` : "",
    ]
      .filter(Boolean)
      .join(" and ");
    const notes = needs
      .filter((n) => selectedNeeds.includes(n.id))
      .map((n) => n.label.toLowerCase());
    return `I'm planning ${type} ${when} for ${party}${notes.length ? `, with ${notes.join(", ")}` : ""}.`;
  }, [type, month, adults, children, selectedNeeds]);

  const whatsappMessage = `Assalamu alaikum Ayesha Tours,\n\n${summary}\n\nPlease share suitable options. (Sent from the website journey planner)`;

  const matchingCategory =
    type === "Haj"
      ? "haj"
      : month === "Ramadan"
        ? "ramadan"
        : children > 0 || selectedNeeds.includes("elderly") || selectedNeeds.includes("children")
          ? "family"
          : "umrah";

  const showJourneys = () => {
    window.dispatchEvent(new CustomEvent(JOURNEY_FILTER_EVENT, { detail: matchingCategory }));
    document.getElementById("journeys")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="planner" aria-labelledby="planner-title" className="relative z-10 bg-ivory px-4 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pt-28">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-ivory shadow-[0_40px_120px_-40px_rgba(14,31,27,0.35)] ring-1 ring-stone">
        <div className="grid lg:grid-cols-[1.45fr_1fr]">
          {/* Composer */}
          <div className="p-6 sm:p-10 lg:p-14">
            <p className="flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-gold-ink">
              <span className="h-px w-8 bg-gold-ink" aria-hidden /> Compose your journey
            </p>
            <h2 id="planner-title" className="mt-4 font-serif text-[length:var(--text-title)] font-medium leading-[1.05] text-night">
              Tell us a little. <span className="italic text-mist">We&apos;ll take it from there.</span>
            </h2>

            <div className="mt-10 space-y-8">
              {/* Pilgrimage type */}
              <fieldset>
                <legend className="text-[13px] font-semibold text-charcoal">I&apos;m planning</legend>
                <div className="mt-3 inline-flex rounded-full bg-ivory-deep p-1">
                  {(["Umrah", "Haj"] as Pilgrimage[]).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setType(option)}
                      aria-pressed={type === option}
                      className={`h-11 min-w-[104px] rounded-full px-6 font-serif text-[22px] transition-colors ${
                        type === option ? "bg-night text-ivory" : "text-charcoal hover:text-night"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* When */}
              <div>
                {type === "Umrah" ? (
                  <>
                    <label htmlFor="planner-month" className="text-[13px] font-semibold text-charcoal">
                      Preferred time
                    </label>
                    <div className="relative mt-3 max-w-sm">
                      <select
                        id="planner-month"
                        value={month}
                        onChange={(event) => setMonth(event.target.value)}
                        className="block h-12 w-full cursor-pointer appearance-none rounded-xl border border-stone bg-white px-4 pr-10 text-[15px] text-charcoal focus:border-night"
                      >
                        {months.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-charcoal" />
                    </div>
                  </>
                ) : (
                  <div className="max-w-xl rounded-xl border border-stone bg-ivory-deep/60 p-4 text-[14px] leading-6 text-mist">
                    <p className="font-semibold text-charcoal">Haj season (Dhul Hijjah)</p>
                    <p className="mt-1">
                      Haj places for Indian pilgrims follow official quotas and
                      registration each year. We&apos;ll explain the options that
                      apply to you.
                    </p>
                  </div>
                )}
              </div>

              {/* Party */}
              <div className="grid max-w-xl gap-4 sm:grid-cols-2">
                <Stepper label="Adults" hint="12 years and above" value={adults} min={1} max={40} onChange={setAdults} />
                <Stepper label="Children" hint="Under 12" value={children} min={0} max={20} onChange={setChildren} />
              </div>

              {/* Needs */}
              <fieldset>
                <legend className="text-[13px] font-semibold text-charcoal">Anything we should plan around? <span className="font-normal text-mist">(optional)</span></legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {needs.map((need) => {
                    const on = selectedNeeds.includes(need.id);
                    return (
                      <button
                        key={need.id}
                        type="button"
                        onClick={() => toggleNeed(need.id)}
                        aria-pressed={on}
                        className={`min-h-11 rounded-full border px-4 text-[14px] transition-colors ${
                          on ? "border-night bg-night text-ivory" : "border-stone bg-white text-charcoal hover:border-night"
                        }`}
                      >
                        {need.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            </div>
          </div>

          {/* Summary */}
          <div className="relative flex flex-col justify-between gap-10 bg-night p-6 text-ivory sm:p-10 lg:p-14">
            <div>
              <p className="text-[12px] uppercase tracking-[0.28em] text-gold">Your journey, in a sentence</p>
              <p aria-live="polite" className="mt-6 font-serif text-[30px] leading-[1.2] text-ivory sm:text-[36px]">
                “{summary}”
              </p>
            </div>

            <div className="space-y-5">
              <a
                href={whatsappLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-14 items-center justify-between rounded-full bg-ivory pl-7 pr-2 text-[15px] font-semibold text-night transition-colors hover:bg-gold"
              >
                Send this on WhatsApp
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-night text-ivory transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight size={18} aria-hidden />
                </span>
              </a>
              <div className="flex flex-wrap gap-x-7 gap-y-3 text-[14px]">
                <button type="button" onClick={showJourneys} className="border-b border-ivory/35 pb-1 text-ivory hover:border-gold hover:text-gold">
                  See matching journeys
                </button>
                <Link href="/enquiry" className="border-b border-ivory/35 pb-1 text-ivory hover:border-gold hover:text-gold">
                  Detailed enquiry form
                </Link>
              </div>
              <p className="text-[12px] leading-5 text-sage">
                This is not a booking. WhatsApp opens with your message ready –
                nothing is sent until you press send.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stepper({
  label,
  hint,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  const id = `planner-${label.toLowerCase()}`;
  return (
    <div className="flex items-center justify-between rounded-xl border border-stone bg-white px-4 py-3">
      <div>
        <p id={id} className="text-[14px] font-semibold text-charcoal">{label}</p>
        <p className="text-[12px] text-mist">{hint}</p>
      </div>
      <div className="flex items-center gap-1" role="group" aria-labelledby={id}>
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Fewer ${label.toLowerCase()}`}
          className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal hover:bg-ivory-deep disabled:opacity-30"
        >
          <Minus size={16} aria-hidden />
        </button>
        <output aria-live="polite" className="w-8 text-center font-serif text-[26px] tabular-nums text-night">{value}</output>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`More ${label.toLowerCase()}`}
          className="flex h-11 w-11 items-center justify-center rounded-full text-charcoal hover:bg-ivory-deep disabled:opacity-30"
        >
          <Plus size={16} aria-hidden />
        </button>
      </div>
    </div>
  );
}
