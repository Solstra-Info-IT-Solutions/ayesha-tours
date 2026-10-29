import { phoneLink, mailLink, SITE } from "@/lib/site";
import {
  Clock3,
  ShieldCheck,
  Headphones,
  Mail,
  Phone,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Quick Response",
    description:
      "Our team reviews your request and replies during office hours.",
  },
  {
    icon: ShieldCheck,
    title: "Tailored For You",
    description:
      "Each quotation is prepared around your dates, group and hotel preferences.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Guidance before you travel and support while you are in Makkah and Madinah.",
  },
];

export default function QuoteContactInfo() {
  return (
    <div>

      {/* Eyebrow */}
      <div className="flex items-center gap-3">

        <span className="h-[2px] w-9 bg-[#7b6337]" />

        <span className="text-[10px] font-semibold uppercase tracking-[2.5px] text-[#1a3e34]">
          Travel With Peace Of Mind
        </span>

      </div>

      {/* Heading */}
      <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.15] text-[#16322a]">

        Your Pilgrimage

        <span className="block italic text-[#7b6337]">
          Starts Here.
        </span>

      </h2>

      <p className="mt-6 max-w-md text-[15px] leading-7 text-[#686f6c]">

        Whether you're planning a family Umrah, a group journey, Ramadan
          Umrah or Haj, we're here to help you plan every detail.

      </p>

      {/* Benefits */}
      <div className="mt-10 space-y-7">

        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="flex gap-4"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eee6d7] text-[#1a3e34]">

                <Icon size={19} />

              </div>

              <div>

                <h3 className="font-serif text-lg font-bold text-[#16322a]">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-[13px] leading-6 text-[#5c6660]">
                  {benefit.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

      {/* Contact Card */}
      <div className="mt-12 rounded-[20px] bg-[#16322a] p-7 text-white shadow-[0_20px_50px_rgba(22,50,42,0.18)]">

        <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#b79b66]">
          Prefer To Speak Directly?
        </p>

        <h3 className="mt-4 font-serif text-2xl font-bold">
          Our Team Is Here.
        </h3>

        <div className="mt-6 space-y-4">

          <a
            href={phoneLink()}
            className="flex items-center gap-3 text-sm text-white/75 transition hover:text-white"
          >

            <Phone size={16} className="text-[#b79b66]" />

            {SITE.phone}
          </a>

          <a
            href={mailLink()}
            className="flex items-center gap-3 text-sm text-white/75 transition hover:text-white"
          >

            <Mail size={16} className="text-[#b79b66]" />

            {SITE.email}
          </a>

        </div>

      </div>

    </div>
  );
}