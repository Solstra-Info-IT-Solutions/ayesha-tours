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
    <section className="bg-[#f6f2f4] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <Sparkles size={13} className="text-[#ff058f]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#4e1367]">
              Umrah & Haj Packages
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[38px] font-bold text-[#3f1152] sm:text-5xl">
            Packages For{" "}

            <span className="italic font-medium text-[#e40e83]">
              Every Pilgrim.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#6e6572]">
            Compare our package styles below. Every package can be adjusted, and
            final hotels, dates and inclusions are confirmed in your quote.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((tour, index) => (
            <article
              key={tour.title}
              className="group overflow-hidden rounded-[28px] border border-[#dfd8dc] bg-white shadow-[0_15px_45px_rgba(63,17,82,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#ff058f]/50 hover:shadow-[0_30px_70px_rgba(63,17,82,0.14)]"
            >
              {/* Image */}

              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3e0e52]/70 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#3e0e52]/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  0{index + 1}
                </span>

                <span className="absolute bottom-5 left-5 rounded-full bg-[#ff058f] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                  {tour.category}
                </span>
              </div>

              {/* Content */}

              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-[27px] font-bold leading-tight text-[#3f1152]">
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
                  <p className="mt-4 rounded-lg bg-[#f6eef3] px-3 py-2 text-[11px] leading-5 text-[#7a4a68]">
                    Demo package – details are illustrative and subject to confirmation.
                  </p>
                )}

                <Link
                  href="/request-quote"
                  className="group/link mt-7 flex items-center justify-between border-t border-[#e2dbdf] pt-5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4e1367]">
                    Request A Quote
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3edf5] text-[#4e1367] transition-all duration-300 group-hover/link:bg-[#4e1367] group-hover/link:text-white">
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
    <div className="flex items-center gap-3 text-[13px] text-[#736a76]">
      <span className="text-[#e40e83]">
        {icon}
      </span>

      {text}
    </div>
  );
}