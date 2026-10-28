import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f6f2f4] py-24 sm:py-28">

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e40e83]/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">

        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-[#e40e83]" />

          <Sparkles
            size={14}
            className="text-[#e40e83]"
          />

          <span className="h-px w-8 bg-[#e40e83]" />
        </div>

        <h2 className="mt-7 font-serif text-[42px] font-bold leading-tight text-[#3f1152] sm:text-5xl lg:text-[60px]">
          Ready To Begin Your
          <span className="block italic font-medium text-[#e40e83]">
            Umrah Or Haj?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-8 text-[#6e6572]">
          Tell us your plans and let Ayesha Tours help you prepare for the
            journey ahead.
        </p>

        <div className="mt-10">
          <Link
            href="/request-quote"
            className="group inline-flex items-center gap-4 rounded-full bg-[#4e1367] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_18px_40px_rgba(78,19,103,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3f1152]"
          >
            Request A Quote

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}