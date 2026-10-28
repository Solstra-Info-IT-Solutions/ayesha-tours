import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function FAQCTA() {
  return (
    <section className="bg-[#f6f2f4] pb-20 sm:pb-24">

      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">

        <div className="rounded-[32px] bg-[#3f1152] px-6 py-14 text-center sm:px-10 sm:py-16">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ff058f]/10 text-[#ff058f]">
            <MessageCircle size={24} />
          </div>

          <h2 className="mt-6 font-serif text-[34px] font-bold text-white sm:text-5xl">
            Still Have A{" "}

            <span className="italic font-medium text-[#ff058f]">
              Question?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#c9b7d0]">
            Our team is happy to answer your questions about Umrah, Haj and
            preparing for your journey.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#ff058f] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-1"
          >
            Contact Our Team

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}