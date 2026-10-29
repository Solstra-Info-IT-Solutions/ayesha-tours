"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

const stages = [
  {
    title: "A first conversation",
    text: "By call or WhatsApp, we listen to your intention, dates, who is travelling and your budget. No long forms required.",
  },
  {
    title: "Package & travel planning",
    text: "We suggest suitable options and set out hotels, room sharing, the split of nights and flights in writing – including what is not included.",
  },
  {
    title: "Documentation guidance",
    text: "A clear checklist for the Umrah visa and your documents, following the requirements set by the authorities at the time you travel.",
  },
  {
    title: "Travel preparation",
    text: "Your itinerary, packing and ihram guidance, and a simple walkthrough of the rites – especially helpful for first-time pilgrims.",
  },
  {
    title: "On-ground assistance",
    text: "Where included in your package: airport and intercity transfers, ziyarat, and a contact to reach while you are in Saudi Arabia.",
  },
];

export default function JourneyArranged() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.4 });

  return (
    <section aria-labelledby="arranged-title" className="bg-emerald py-24 text-ivory sm:py-32">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:px-12">
        <div className="lg:sticky lg:top-32 lg:self-start" data-reveal="up">
          <p className="flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" aria-hidden /> How we work
          </p>
          <h2 id="arranged-title" className="mt-6 font-serif text-[length:var(--text-headline)] font-medium leading-[0.95]">
            The journey,
            <br />
            <span className="italic text-ivory/75">thoughtfully arranged.</span>
          </h2>
          <p className="mt-8 max-w-md text-[16px] leading-7 text-sage">
            Five steps from your first question to the day you fly. Exactly what
            is arranged for you depends on your confirmed package.
          </p>
        </div>

        <ol ref={listRef} className="relative">
          {/* Track and drawn line */}
          <span aria-hidden className="absolute bottom-6 left-[27px] top-6 w-px bg-emerald-line sm:left-[35px]" />
          <motion.span
            aria-hidden
            className="absolute bottom-6 left-[27px] top-6 w-px origin-top bg-gold sm:left-[35px]"
            style={{ scaleY: reduceMotion ? 1 : progress }}
          />

          {stages.map((stage, index) => (
            <li key={stage.title} data-reveal="up" className="relative grid grid-cols-[56px_1fr] gap-6 pb-14 last:pb-0 sm:grid-cols-[72px_1fr] sm:gap-10">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-emerald font-serif text-[24px] text-gold sm:h-[72px] sm:w-[72px] sm:text-[30px]">
                {index + 1}
              </span>
              <div className="pt-2 sm:pt-4">
                <h3 className="font-serif text-[30px] leading-tight text-ivory sm:text-[38px]">{stage.title}</h3>
                <p className="mt-3 max-w-xl text-[16px] leading-7 text-sage">{stage.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
