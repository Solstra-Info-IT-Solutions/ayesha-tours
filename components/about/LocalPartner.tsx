import {
  Check,
  Globe2,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    text: "Pre-departure Umrah guidance",
    icon: Globe2,
  },
  {
    text: "Visa & documentation assistance",
    icon: ShieldCheck,
  },
  {
    text: "A contact to reach during travel",
    icon: Headphones,
  },
  {
    text: "Ihram, rites & packing checklists",
    icon: Globe2,
  },
  {
    text: "Arranged airport & intercity transfers",
    icon: ShieldCheck,
  },
  {
    text: "Planning for elderly & wheelchair users",
    icon: Check,
  },
];

export default function LocalPartner() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] px-6 py-20 md:px-10 lg:px-20 lg:py-28">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#b79b66]/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1230px]">

        {/* Premium Main Card */}
        <div className="overflow-hidden rounded-[28px] border border-[#e6e1d7] bg-white shadow-[0_25px_70px_rgba(26,62,52,0.10)]">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* ================= IMAGE ================= */}
            <div className="relative min-h-[380px] overflow-hidden md:min-h-[600px]">

              <img
                src="/images/demo/pilgrims-jeddah.jpg"
                alt="Pilgrims arriving at Jeddah for the pilgrimage"
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 hover:scale-105"
              />

              {/* Luxury Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102a23]/70 via-transparent to-transparent" />

              {/* Experience Badge */}
              <div className="absolute bottom-7 left-7 right-7">

                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#1a3e34]/85 px-5 py-3 text-white shadow-xl backdrop-blur-md">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b79b66] text-[#0e1f1b]">
                    <Globe2 size={16} />
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-[1.5px] text-white/60">
                      First-Time Pilgrims
                    </p>

                    <p className="mt-1 text-[13px] font-medium">
                      Clear Guidance. Gentle Care.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* ================= CONTENT ================= */}
            <div className="flex flex-col justify-center px-7 py-12 sm:px-10 md:px-12 lg:px-16 lg:py-16">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">

                <span className="h-[2px] w-9 bg-[#b79b66]" />

                <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#7b6337]">
                  First-Time Pilgrims
                </p>

              </div>

              {/* Heading */}
              <h2 className="mt-6 max-w-[520px] font-serif text-[34px] font-bold leading-[1.15] text-[#1a3e34] sm:text-[40px] lg:text-[46px]">

                Your Guide For
                <br />

                <span className="text-[#7b6337]">
                  The Holy Journey
                </span>

              </h2>

              {/* Divider */}
              <div className="mt-7 h-px w-full bg-gradient-to-r from-[#b79b66]/60 to-transparent" />

              {/* Description */}
              <p className="mt-7 max-w-[540px] text-[15px] leading-7 text-[#686f6c]">

                Performing Umrah or Haj for the first time can feel
                overwhelming. We explain each step – from visas and ihram to
                tawaf and sa&apos;i – so you arrive prepared and confident.

              </p>

              <p className="mt-4 max-w-[540px] text-[15px] leading-7 text-[#686f6c]">

                From the moment you land in Jeddah or Madinah until your return
                flight, we help ensure your arrangements are in place and
                someone is available to answer your questions.

              </p>

              {/* ================= BENEFITS ================= */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.text}
                      className="group flex items-center gap-4 rounded-xl border border-[#ece7dd] bg-[#fbfbf9] px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#b79b66]/60 hover:bg-white hover:shadow-[0_12px_30px_rgba(26,62,52,0.08)]"
                    >

                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a3e34]/10 text-[#1a3e34] transition duration-300 group-hover:bg-[#b79b66] group-hover:text-[#0e1f1b]">

                        <Icon size={17} strokeWidth={1.8} />

                      </div>

                      <p className="text-[13px] font-medium leading-5 text-[#505955]">

                        {benefit.text}

                      </p>

                    </div>
                  );
                })}

              </div>

              {/* Bottom Trust Message */}
              <div className="mt-10 flex items-center gap-4 border-t border-[#ebe6dc] pt-7">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1a3e34] text-[#b79b66]">

                  <ShieldCheck size={21} />

                </div>

                <div>

                  <p className="text-[13px] font-semibold text-[#1a3e34]">
                    Travel With Peace Of Mind
                  </p>

                  <p className="mt-1 text-[12px] text-gray-500">
                    Support throughout your journey to the Haramain.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}