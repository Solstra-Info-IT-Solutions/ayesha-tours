import { whatsappLink } from "@/lib/site";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  Compass,
} from "lucide-react";

export default function PlanJourney() {
  return (
    <section className="relative overflow-hidden bg-[#f9f7f8] px-6 py-20 md:px-10 lg:px-20 lg:py-28">

      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full border border-[#fb1895]/20" />

      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-[380px] w-[380px] rounded-full border border-[#4e1367]/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fb1895]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1100px]">

        {/* Premium CTA Card */}
        <div className="relative overflow-hidden rounded-[30px] border border-[#e2d7dc] bg-white px-6 py-14 text-center shadow-[0_25px_80px_rgba(78,19,103,0.10)] sm:px-10 md:px-16 md:py-20">

          {/* Top Decorative Line */}
          <div className="mx-auto flex items-center justify-center gap-4">

            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#fb1895]" />

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#fb1895]/40 bg-[#fb1895]/10 text-[#e40e83]">
              <Sparkles size={18} strokeWidth={1.8} />
            </div>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#fb1895]" />

          </div>

          {/* Small Heading */}
          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[2.5px] text-[#e40e83]">
            Your Pilgrimage Awaits
          </p>

          {/* Heading */}
          <h2 className="mt-5 font-serif text-[36px] font-bold leading-[1.15] text-[#4e1367] sm:text-[44px] md:text-[52px]">
            Let&apos;s Plan Your
            <span className="block italic text-[#e40e83]">
              Pilgrimage Together
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 text-[#6e6572]">
            Speak with our team today about Umrah or Haj and we will help you
          find a package that suits your dates, budget and family.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* Primary Button */}
            <a
              href="/enquiry"
              className="group inline-flex h-[56px] min-w-[210px] items-center justify-center gap-3 rounded-xl bg-[#e73570] px-8 text-[13px] font-semibold tracking-[0.8px] text-white shadow-[0_12px_25px_rgba(231,53,112,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#cc265d] hover:shadow-[0_18px_35px_rgba(231,53,112,0.35)]"
            >
              START PLANNING

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink("Assalamu alaikum Ayesha Tours, I would like to plan my Umrah.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[56px] min-w-[210px] items-center justify-center gap-3 rounded-xl border border-[#4e1367]/20 bg-[#f9f7f8] px-8 text-[13px] font-semibold tracking-[0.5px] text-[#4e1367] transition duration-300 hover:-translate-y-1 hover:border-[#4e1367]/40 hover:bg-white hover:shadow-[0_15px_30px_rgba(78,19,103,0.10)]"
            >
              <MessageCircle
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              WHATSAPP US
            </a>

          </div>

          {/* Trust Indicators */}
          <div className="mx-auto mt-12 grid max-w-[650px] grid-cols-1 gap-4 border-t border-[#e7dee3] pt-8 sm:grid-cols-3">

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#6e6572]">
              <Compass size={15} className="text-[#e40e83]" />
              Personalised Planning
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#6e6572]">
              <Sparkles size={15} className="text-[#e40e83]" />
              Clear Packages
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#6e6572]">
              <MessageCircle size={15} className="text-[#e40e83]" />
              Dedicated Support
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}