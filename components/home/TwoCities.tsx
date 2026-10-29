import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ZiyaratStrip from "@/components/home/ZiyaratStrip";

const D = "/images/demo/";

const cities = [
  {
    id: "makkah",
    name: "Makkah",
    arabic: "مكة المكرمة",
    epithet: "al-Mukarramah · the Honoured City",
    image: `${D}kaaba-tawaf.jpg`,
    alt: "Pilgrims performing tawaf around the Kaaba in Masjid al-Haram",
    intro:
      "Every Umrah is performed in Makkah. Pilgrims arrive in ihram and make their way to Masjid al-Haram, where the Kaaba stands at the heart of the Sacred Mosque.",
    rites: [
      ["Ihram", "Entered at or before the miqat, with the intention for Umrah."],
      ["Tawaf", "Seven circuits around the Kaaba."],
      ["Sa'i", "Seven walks between the hills of Safa and Marwah."],
      ["Halq or taqsir", "Shaving or trimming the hair to complete the Umrah."],
    ],
    note: "We help you choose a hotel by honest walking distance, not by promise.",
  },
  {
    id: "madinah",
    name: "Madinah",
    arabic: "المدينة المنورة",
    epithet: "al-Munawwarah · the Radiant City",
    image: `${D}nabawi-portrait.jpg`,
    alt: "The minarets and green dome of Masjid an-Nabawi rising above palm trees in Madinah",
    intro:
      "Visiting Madinah is not a rite of Umrah, yet most pilgrims spend several days here – praying in Masjid an-Nabawi and sending salam upon the Prophet ﷺ.",
    rites: [
      ["Masjid an-Nabawi", "Prayer in the Prophet's ﷺ mosque and time in the Rawdah, subject to permit."],
      ["Masjid Quba", "The first mosque built in Islam, on the edge of the city."],
      ["Mount Uhud", "The site of the battle and the resting place of its martyrs."],
      ["Unhurried days", "A calmer rhythm that many families value after Makkah."],
    ],
    note: "Most itineraries balance nights between the two cities – we'll suggest a split that suits you.",
  },
] as const;

export default function TwoCities() {
  return (
    <section aria-labelledby="cities-title" className="relative overflow-hidden bg-night text-ivory">
      <div className="mx-auto max-w-[1600px] px-5 pt-24 sm:px-8 sm:pt-32 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div data-reveal="up">
            <p className="flex items-center gap-4 text-[12px] uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" aria-hidden /> The two holy cities
            </p>
            <h2 id="cities-title" className="mt-6 font-serif text-[length:var(--text-headline)] font-medium leading-[0.95]">
              Two cities.
              <br />
              <span className="italic text-ivory/75">One journey of the heart.</span>
            </h2>
          </div>
          <p data-reveal="up" style={{ ["--reveal-delay" as string]: "150ms" }} className="max-w-md text-[16px] leading-7 text-sage lg:justify-self-end">
            Knowing what each city holds helps you arrive prepared. Here is what
            pilgrims experience in Makkah and Madinah, simply explained.
          </p>
        </div>
      </div>

      {cities.map((city, index) => {
        const flip = index % 2 === 1;
        return (
          <article
            key={city.id}
            aria-labelledby={`city-${city.id}`}
            className="mx-auto mt-20 grid max-w-[1600px] gap-10 px-5 sm:mt-28 sm:px-8 lg:grid-cols-12 lg:gap-0 lg:px-12"
          >
            <div className={`relative lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
              <div data-reveal="mask" className="relative aspect-[4/5] overflow-hidden rounded-[22px] sm:aspect-[16/11] lg:aspect-auto lg:h-[min(86vh,820px)]">
                <Image
                  src={city.image}
                  alt={city.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
              </div>
              <p
                lang="ar"
                dir="rtl"
                aria-hidden
                className={`pointer-events-none absolute -bottom-6 font-arabic text-[56px] leading-none text-gold/90 sm:text-[84px] ${flip ? "left-4 sm:left-8" : "right-4 sm:right-8"}`}
              >
                {city.arabic}
              </p>
            </div>

            <div className={`flex flex-col justify-center lg:col-span-5 ${flip ? "lg:order-1 lg:pr-16" : "lg:pl-16"}`}>
              <p data-reveal="fade" className="text-[12px] uppercase tracking-[0.3em] text-gold">
                {String(index + 1).padStart(2, "0")} · {city.epithet}
              </p>
              <h3
                id={`city-${city.id}`}
                data-reveal="up"
                className="mt-4 font-serif text-[length:var(--text-display)] font-medium leading-[0.85]"
              >
                {city.name}
                <span className="sr-only"> ({city.arabic})</span>
              </h3>
              <p data-reveal="up" className="mt-8 max-w-lg text-[16px] leading-7 text-ivory/80">
                {city.intro}
              </p>

              <dl className="mt-10 max-w-lg divide-y divide-emerald-line/70 border-y border-emerald-line/70">
                {city.rites.map(([term, detail], i) => (
                  <div
                    key={term}
                    data-reveal="up"
                    style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                    className="grid gap-1 py-4 sm:grid-cols-[150px_1fr] sm:gap-6"
                  >
                    <dt className="font-serif text-[22px] leading-tight text-ivory">{term}</dt>
                    <dd className="text-[14px] leading-6 text-sage">{detail}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 max-w-lg text-[14px] italic leading-6 text-gold">{city.note}</p>
            </div>
          </article>
        );
      })}

      <div className="mx-auto mt-28 max-w-[1600px] px-5 sm:mt-36 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-t border-emerald-line/70 pt-10 sm:flex-row sm:items-end">
          <div data-reveal="up">
            <p className="text-[12px] uppercase tracking-[0.3em] text-gold">Ziyarat</p>
            <h3 className="mt-4 font-serif text-[length:var(--text-title)] font-medium leading-tight">
              Places of remembrance
            </h3>
          </div>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 self-start border-b border-ivory/35 pb-1 text-[14px] hover:border-gold hover:text-gold sm:self-auto"
          >
            About Makkah &amp; Madinah <ArrowUpRight size={15} aria-hidden />
          </Link>
        </div>
      </div>

      <ZiyaratStrip />
    </section>
  );
}
