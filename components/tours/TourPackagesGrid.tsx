import Link from "next/link";
import { DEMO_MODE } from "@/lib/site";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";

/**
 * DEMO PACKAGES – illustrative only. Durations, hotels and inclusions are
 * placeholders until Ayesha Tours confirms its real packages. No prices are
 * shown; quotes are given on enquiry.
 */
export const packages = [
  {
    title: "Economy Umrah Package",
    location: "Makkah (8 nights) & Madinah (6 nights)",
    duration: "15 Days / 14 Nights",
    category: "umrah",
    travelers: "Budget-conscious pilgrims",
    image: "/images/demo/haram-supplication.jpg",
  },
  {
    title: "Standard Umrah Package",
    location: "Makkah & Madinah",
    duration: "12 Days / 11 Nights",
    category: "umrah",
    travelers: "Couples & small groups",
    image: "/images/demo/kaaba-cloudy.jpg",
  },
  {
    title: "Premium Umrah – Hotels Near Haram",
    location: "Makkah & Madinah",
    duration: "10 Days / 9 Nights",
    category: "umrah",
    travelers: "Pilgrims who prefer shorter walks",
    image: "/images/demo/clock-tower-portrait.jpg",
  },
  {
    title: "Family Umrah Package",
    location: "Makkah & Madinah",
    duration: "14 Days / 13 Nights",
    category: "family",
    travelers: "Families with children & elders",
    image: "/images/demo/kaaba-tawaf.jpg",
  },
  {
    title: "Ramadan Umrah – Last 10 Nights",
    location: "Makkah & Madinah",
    duration: "Dates subject to moon sighting",
    category: "ramadan",
    travelers: "Ramadan pilgrims",
    image: "/images/demo/haram-aerial.jpg",
  },
  {
    title: "Umrah With Extended Ziyarat",
    location: "Makkah, Madinah & Taif",
    duration: "16 Days / 15 Nights",
    category: "umrah",
    travelers: "Pilgrims wanting more ziyarat",
    image: "/images/demo/quba.jpg",
  },
  {
    title: "Haj Package Guidance",
    location: "Makkah, Mina, Arafat & Madinah",
    duration: "As per the official Haj schedule",
    category: "haj",
    travelers: "Haj applicants",
    image: "/images/demo/mina-tents.jpg",
  },
];

export default function TourPackagesGrid({
  category = "all",
}: {
  category?: string;
}) {
  const visible =
    category === "all"
      ? packages
      : packages.filter((tour) => tour.category === category);

  return (
    <section className="bg-[#f7f5f1] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <Sparkles size={13} className="text-[#b79b66]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#1a3e34]">
              Umrah & Haj Packages
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[38px] font-bold text-[#16322a] sm:text-5xl">
            Packages For{" "}

            <span className="italic font-medium text-[#7b6337]">
              Every Pilgrim.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#686f6c]">
            Compare our package styles below. Every package can be adjusted, and
            final hotels, dates and inclusions are confirmed in your quote.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((tour, index) => (
            <article
              key={tour.title}
              className="group overflow-hidden rounded-[28px] border border-[#e3ded4] bg-white shadow-[0_15px_45px_rgba(22,50,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#b79b66]/50 hover:shadow-[0_30px_70px_rgba(22,50,42,0.14)]"
            >
              {/* Image */}

              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#143129]/70 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#143129]/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  0{index + 1}
                </span>

                <span className="absolute bottom-5 left-5 rounded-full bg-[#b79b66] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#0e1f1b]">
                  {tour.category}
                </span>
              </div>

              {/* Content */}

              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-[27px] font-bold leading-tight text-[#16322a]">
                  {tour.title}
                </h3>

                <div className="mt-5 space-y-3">
                  <InfoRow
                    icon={<MapPin size={15} />}
                    text={tour.location}
                  />

                  <InfoRow
                    icon={<Clock3 size={15} />}
                    text={tour.duration}
                  />

                  <InfoRow
                    icon={<Users size={15} />}
                    text={tour.travelers}
                  />
                </div>

                {DEMO_MODE && (
                  <p className="mt-4 rounded-lg bg-[#f7f4ed] px-3 py-2 text-[11px] leading-5 text-[#7b6337]">
                    Demo package – details are illustrative and subject to confirmation.
                  </p>
                )}

                <Link
                  href="/request-quote"
                  className="group/link mt-7 flex items-center justify-between border-t border-[#e6e1d7] pt-5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a3e34]">
                    Request A Quote
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6f3ec] text-[#1a3e34] transition-all duration-300 group-hover/link:bg-[#1a3e34] group-hover/link:text-white">
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 text-[13px] text-[#6d7370]">
      <span className="text-[#7b6337]">
        {icon}
      </span>

      {text}
    </div>
  );
}