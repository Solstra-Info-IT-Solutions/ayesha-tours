"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
} from "lucide-react";

const galleryImages = [
  {
    image: "/images/demo/kaaba-tawaf.jpg",
    alt: "Pilgrims performing tawaf around the Kaaba",
  },
  {
    image: "/images/demo/nabawi-portrait.jpg",
    alt: "Masjid an-Nabawi in Madinah",
  },
  {
    image: "/images/demo/quba-2.jpg",
    alt: "Masjid Quba on the outskirts of Madinah",
  },
  {
    image: "/images/demo/mina-tents.jpg",
    alt: "The tent city of Mina during Haj",
  },
];

export default function GalleryPreview() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-20 sm:py-24 lg:py-28 xl:py-32">

      {/* ===================================================== */}
      {/* ================= BACKGROUND ======================== */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#1a3e34]/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 right-[-120px] h-[450px] w-[450px] rounded-full bg-[#7b6337]/[0.035] blur-3xl" />

      {/* ===================================================== */}
      {/* ================= MAIN CONTAINER ==================== */}
      {/* ===================================================== */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 xl:gap-20">

          {/* ================================================= */}
          {/* ================= LEFT CONTENT ================== */}
          {/* ================================================= */}

          <div className="relative z-10">

            {/* Eyebrow */}

            <div className="flex items-center gap-3">

              <span className="h-[2px] w-9 bg-[#7b6337]" />

              <Camera
                size={16}
                strokeWidth={1.7}
                className="text-[#7b6337]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#1a3e34]">
                Glimpses Of The Journey
              </span>

            </div>

            {/* Heading */}

            <h2 className="mt-6 max-w-[560px] font-serif text-[42px] font-bold leading-[1.05] text-[#16322a] sm:text-5xl lg:text-[54px] xl:text-[58px]">

              Moments Of

              <span className="block italic font-medium text-[#7b6337]">
                Devotion.
              </span>

            </h2>

            {/* Description */}

            <p className="mt-7 max-w-[510px] text-[15px] leading-7 text-[#606764] sm:text-[16px]">
              From the white marble of the Haram to the green dome of Madinah,
              explore the places pilgrims carry in their hearts.
            </p>

            <p className="mt-5 max-w-[510px] text-[15px] leading-7 text-[#606764] sm:text-[16px]">
              Demo photographs from Wikimedia Commons – your own pilgrim group
              photos can replace these once available.
            </p>

            {/* CTA */}

            <Link
              href="/gallery"
              className="group mt-9 inline-flex items-center gap-4 border-b-2 border-[#7b6337] pb-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#16322a] transition-colors duration-300 hover:text-[#193830]"
            >
              View Gallery

              <ArrowUpRight
                size={19}
                strokeWidth={1.7}
                className="text-[#7b6337] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </div>

          {/* ================================================= */}
          {/* ================= IMAGE MATRIX ================== */}
          {/* ================================================= */}

          <div className="relative">

            {/* ================================================= */}
            {/* DECORATIVE GOLD CORNER                           */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute -left-5 -top-5 z-0 h-24 w-24 border-l-2 border-t-2 border-[#7b6337]" />

            {/* ================================================= */}
            {/* MATRIX                                           */}
            {/* ================================================= */}

            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* ================= IMAGE 1 ================= */}

              <GalleryImage
                src={galleryImages[0].image}
                alt={galleryImages[0].alt}
                position="top-left"
              />

              {/* ================= IMAGE 2 ================= */}

              <GalleryImage
                src={galleryImages[1].image}
                alt={galleryImages[1].alt}
                position="top-right"
              />

              {/* ================= IMAGE 3 ================= */}

              <GalleryImage
                src={galleryImages[2].image}
                alt={galleryImages[2].alt}
                position="bottom-left"
              />

              {/* ================= IMAGE 4 ================= */}

              <GalleryImage
                src={galleryImages[3].image}
                alt={galleryImages[3].alt}
                position="bottom-right"
              />

            </div>

            {/* ================================================= */}
            {/* DECORATIVE BOTTOM CORNER                        */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute -bottom-5 -right-5 z-0 h-24 w-24 border-b-2 border-r-2 border-[#1a3e34]/30" />

          </div>

        </div>

      </div>
    </section>
  );
}


/* ============================================================= */
/* ================= GALLERY IMAGE ============================== */
/* ============================================================= */

function GalleryImage({
  src,
  alt,
  position,
}: {
  src: string;
  alt: string;
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
}) {
  const radiusStyles = {
    "top-left": "rounded-tl-[70px] rounded-br-[8px]",
    "top-right": "rounded-tr-[70px] rounded-bl-[8px]",
    "bottom-left": "rounded-bl-[70px] rounded-tr-[8px]",
    "bottom-right": "rounded-br-[70px] rounded-tl-[8px]",
  };

  return (
    <div
      className={`group relative h-[245px] overflow-hidden bg-transparent sm:h-[230px] lg:h-[255px] xl:h-[270px] ${radiusStyles[position]}`}
    >

      {/* ================================================= */}
      {/* IMAGE                                             */}
      {/* ================================================= */}

      <Image
        src={src}
        alt={alt}
        fill
        priority={position === "top-left"}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
        className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />

    </div>
  );
}