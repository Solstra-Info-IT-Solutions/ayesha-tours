import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#16322a] py-20">

      <div className="pointer-events-none absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full border border-white/[0.08]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full border border-[#b79b66]/20" />

      <div className="relative mx-auto max-w-[900px] px-5 text-center">

        <div className="flex justify-center">
          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-[#b79b66]" />

            <Sparkles
              size={14}
              className="text-[#b79b66]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b79b66]">
              Your Pilgrimage Awaits
            </span>

            <span className="h-px w-8 bg-[#b79b66]" />

          </div>
        </div>


        <h2 className="mt-7 font-serif text-[38px] font-bold text-white sm:text-[50px]">
          Ready To Plan Your

          <span className="block italic font-medium text-[#b79b66]">
            Umrah Or Haj?
          </span>
        </h2>


        <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-7 text-[#bdcbc7]">
          Share your plans with us and we will prepare a clear quote for your
          group.
        </p>


        <Link
          href="/request-quote"
          className="group relative mt-9 inline-flex min-h-[56px] items-center gap-4 overflow-hidden border border-[#b79b66] px-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#b79b66] transition-all duration-500 hover:-translate-y-1 hover:text-white"
        >

          <span className="absolute inset-0 translate-y-full bg-[#b79b66] transition-transform duration-500 group-hover:translate-y-0" />

          <span className="relative z-10">
            Request A Quote
          </span>

          <ArrowUpRight
            size={17}
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />

        </Link>

      </div>
    </section>
  );
}