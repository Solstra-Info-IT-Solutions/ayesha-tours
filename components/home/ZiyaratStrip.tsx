"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TiltCard from "@/components/motion/TiltCard";

const D = "/images/demo/";

const sites = [
  { name: "Jabal al-Nour", city: "Makkah", image: `${D}jabal-nour.jpg`, alt: "Jabal al-Nour, the Mountain of Light, above Makkah", text: "The Mountain of Light, where the Cave of Hira received the first revelation." },
  { name: "Arafat", city: "Makkah", image: `${D}arafat.jpg`, alt: "Pilgrims at Jabal al-Rahmah on the plain of Arafat", text: "The plain where pilgrims stand in prayer on the 9th of Dhul Hijjah." },
  { name: "Mina", city: "Makkah", image: `${D}mina-tents.jpg`, alt: "The white tent city of Mina", text: "The tent city where pilgrims stay during the days of Haj." },
  { name: "Masjid Quba", city: "Madinah", image: `${D}quba-2.jpg`, alt: "Masjid Quba in Madinah under a blue sky", text: "The first mosque built in Islam, a cherished stop on every Madinah ziyarat." },
  { name: "Mount Uhud", city: "Madinah", image: `${D}uhud.jpg`, alt: "Mount Uhud on the northern edge of Madinah", text: "Site of the Battle of Uhud and resting place of its martyrs." },
];

export default function ZiyaratStrip() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="pb-24 pt-12 sm:pb-32">
      <ul
        ref={trackRef}
        aria-label="Ziyarat sites"
        className="scroll-strip flex gap-6 overflow-x-auto scroll-px-5 px-5 pb-2 sm:scroll-px-8 sm:px-8 lg:scroll-px-[max(3rem,calc((100vw_-_1600px)/2_+_3rem))] lg:px-[max(3rem,calc((100vw_-_1600px)/2_+_3rem))]"
      >
        {sites.map((site, index) => (
          <li
            key={site.name}
            className="w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[min(30vw,440px)]"
          >
            <figure>
              <div className="relative">
                <TiltCard className="relative aspect-[4/5] overflow-hidden rounded-[18px]">
                  <Image
                    src={site.image}
                    alt={site.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 44vw, 78vw"
                    className="object-cover"
                  />
                </TiltCard>
                <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-night/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ivory backdrop-blur">
                  {site.city}
                </span>
              </div>
              <figcaption className="mt-5 flex gap-5">
                <span className="pt-1 text-[12px] tabular-nums text-gold">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-serif text-[28px] leading-none text-ivory">{site.name}</span>
                  <span className="mt-2 block text-[14px] leading-6 text-sage">{site.text}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-8 flex max-w-[1600px] justify-end gap-3 px-5 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Previous ziyarat sites"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-ivory hover:border-gold hover:text-gold"
        >
          <ArrowLeft size={18} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Next ziyarat sites"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-ivory hover:border-gold hover:text-gold"
        >
          <ArrowRight size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}
