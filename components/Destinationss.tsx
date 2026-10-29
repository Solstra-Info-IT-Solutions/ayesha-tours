import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const destinations = [
  {
    title: "Masjid al-Haram",
    tag: "Makkah",
    description:
      "The Sacred Mosque surrounding the Kaaba – the heart of every Umrah and Haj, where pilgrims perform tawaf and sa'i.",
    image: "/images/demo/kaaba-cloudy.jpg",
    tagColor: "gold",
  },
  {
    title: "Masjid an-Nabawi",
    tag: "Madinah",
    description:
      "The Prophet's Mosque in Madinah, a place of peace, prayer and reflection that most pilgrims visit on their journey.",
    image: "/images/demo/nabawi-umbrellas.jpg",
    tagColor: "blue",
  },
  {
    title: "Masjid Quba",
    tag: "Ziyarat",
    description:
      "The first mosque built in Islam, on the edge of Madinah – a cherished stop on the Madinah ziyarat itinerary.",
    image: "/images/demo/quba.jpg",
    tagColor: "gold",
  },
];

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-[#faf8f5] px-6 py-24 md:px-10 lg:px-20"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#183c32]/[0.03] blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#b79b66]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">

        {/* ================= HEADER ================= */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          {/* Left Content */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#b79b66]" />

              <p className="text-xs font-semibold tracking-[3px] text-[#183c32]">
                THE SACRED CITIES
              </p>
            </div>

            {/* Title */}
            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-[#16322a] md:text-4xl">
              Makkah &{" "}
              <span className="italic text-[#193830]">
                Madinah
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-[16px] leading-7 text-gray-600">
              The places at the centre of your pilgrimage – and the ziyarat
              sites pilgrims most often visit along the way.
            </p>
          </div>

          {/* View All */}
          <Link
            href="/destinations"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#183c32]/30 pb-2 text-sm font-semibold tracking-wide text-[#183c32] transition hover:border-[#193830] hover:text-[#193830]"
          >
            EXPLORE MAKKAH & MADINAH

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#183c32]/20 transition duration-300 group-hover:border-[#193830] group-hover:bg-[#193830] group-hover:text-white">
              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {destinations.map((destination, index) => (
            <article
              key={destination.title}
              className="group relative overflow-hidden rounded-2xl border border-[#183c32]/[0.08] bg-white transition duration-500 hover:-translate-y-2 hover:border-[#183c32]/20 hover:shadow-[0_25px_60px_rgba(22,50,42,0.15)]"
            >

              {/* Image */}
              <div className="relative h-[330px] overflow-hidden">

                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* Premium Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c211b]/70 via-transparent to-black/10" />

                {/* Number */}
                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-sm font-serif font-bold text-white backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* Tag */}
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-[#183c32] shadow-lg backdrop-blur-md">

                    <span
                      className={`h-2 w-2 rounded-full ${
                        destination.tagColor === "gold"
                          ? "bg-[#b79b66]"
                          : "bg-[#183c32]"
                      }`}
                    />

                    {destination.tag}
                  </span>
                </div>

                {/* Bottom Location Label */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm text-white">
                  <MapPin
                    size={16}
                    className="text-[#b79b66]"
                  />

                  <span className="font-medium">
                    Saudi Arabia
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative px-7 py-7">

                {/* Decorative Line */}
                <div className="mb-5 h-[2px] w-10 bg-[#b79b66] transition-all duration-500 group-hover:w-16" />

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-[#16322a] transition group-hover:text-[#193830]">
                  {destination.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-7 text-gray-600">
                  {destination.description}
                </p>

                {/* Explore */}
                <Link
                  href="/destinations"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[1.5px] text-[#183c32] transition hover:text-[#193830]"
                >
                  LEARN MORE

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#193830] to-[#b79b66] transition-all duration-500 group-hover:w-full" />

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}