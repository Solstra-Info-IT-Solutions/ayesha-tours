import { Award, ArrowUpRight } from "lucide-react";

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      {/* ================= DECORATIVE BACKGROUND ================= */}
      <div className="pointer-events-none absolute -left-32 top-20 h-[320px] w-[320px] rounded-full border border-[#1a3e34]/5" />

      <div className="pointer-events-none absolute right-0 top-0 h-px w-[30%] bg-gradient-to-l from-[#b79b66]/40 to-transparent" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        {/* ================= LEFT CONTENT ================= */}
        <div>
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#b79b66]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7b6337]">
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[600px] font-serif text-4xl font-bold leading-[1.12] text-[#1a3e34] md:text-5xl">
            Serving Pilgrims
            <span className="block italic text-[#7b6337]">
              With Sincerity & Care.
            </span>
          </h2>

          {/* Gold Divider */}
          <div className="mt-7 flex items-center gap-3">
            <span className="h-[2px] w-16 bg-[#b79b66]" />
            <span className="h-[2px] w-3 bg-[#b79b66]/40" />
          </div>

          {/* Description */}
          <div className="mt-8 max-w-[600px] space-y-5 text-[15px] leading-7 text-[#616865]">
            <p>
              Ayesha Tours is a travel company specialising in Haj and Umrah
            packages for individuals, families and groups travelling to
            Makkah and Madinah.
            </p>

            <p>
              We understand that many pilgrims are travelling for the first
            time, often with elderly parents or young children, and that
            clear information matters as much as a good price.
            </p>

            <p>
              Our aim is simple: honest advice, transparent packages and
            dependable arrangements for flights, hotels, transfers and
            ziyarat.
            </p>

            <p>
              [Demo copy – the client&apos;s own story, founding year and
            credentials will be added here once confirmed.]
            </p>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-10 grid max-w-[520px] grid-cols-2 border-y border-[#1a3e34]/10 py-7">
            {/* Stat 1 */}
            <div className="border-r border-[#1a3e34]/10 pr-6">
              <p className="font-serif text-4xl font-bold text-[#7b6337]">
                Haj
              </p>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#726c75]">
                & Umrah Focused
              </p>
            </div>

            {/* Stat 2 */}
            <div className="pl-7">
              <p className="font-serif text-4xl font-bold text-[#7b6337]">
                Family
              </p>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#726c75]">
                & Group Planning
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative mx-auto w-full max-w-[490px]">
          {/* Decorative Gold Border */}
          <div className="absolute -right-5 -top-5 h-full w-full border border-[#b79b66]/40" />

          {/* Image Frame */}
          <div className="relative overflow-hidden rounded-[3px] bg-[#f1eee7] p-3 shadow-[0_25px_70px_rgba(26,62,52,0.12)]">
            <div className="group relative overflow-hidden">
              <img
                src="/images/demo/nabawi-portrait.jpg"
                alt="Masjid an-Nabawi in Madinah"
                className="h-[460px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102a23]/35 via-transparent to-transparent" />
            </div>
          </div>

          {/* ================= AWARD CARD ================= */}
          <div className="absolute -bottom-8 -left-6 z-10 w-[230px] border border-[#b79b66]/30 bg-[#1a3e34] p-6 text-white shadow-[0_20px_45px_rgba(0,0,0,0.22)]">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b79b66]/40 bg-[#b79b66]/10">
                <Award
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#b79b66]"
                />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d4c19a]">
                  Our Focus
                </p>

                <p className="mt-2 font-serif text-lg font-bold leading-tight text-white">
                  Pilgrimage
                  <br />
                  Travel Only
                </p>
              </div>
            </div>
          </div>

          {/* Small Experience Card */}
          <div className="absolute -right-8 bottom-12 hidden border border-[#1a3e34]/10 bg-white px-5 py-4 shadow-lg md:block">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#b79b66]" />

              <div>
                <p className="text-xs font-semibold text-[#1a3e34]">
                  Ayesha Tours
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
                  Haj & Umrah Packages
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="ml-2 text-[#7b6337]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}