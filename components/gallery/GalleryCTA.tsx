import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function GalleryCTA() {
  return (
    <section className="bg-[#f6f2f4] pb-20 sm:pb-24">

      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">

        <div className="relative overflow-hidden rounded-[32px] bg-[#3f1152] px-6 py-16 text-center sm:px-10 sm:py-20">

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff058f]/5 blur-3xl" />

          <div className="relative">
            <Sparkles
              size={16}
              className="mx-auto text-[#ff058f]"
            />

            <h2 className="mt-5 font-serif text-[36px] font-bold text-white sm:text-5xl">
              Your Journey Could Be{" "}

              <span className="italic font-medium text-[#ff058f]">
                Next.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#c9b7d0]">
              Start planning your Umrah or Haj with Ayesha Tours.
            </p>

            <Link
              href="/request-quote"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#ff058f] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Request A Quote

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}