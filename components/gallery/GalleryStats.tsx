import {
  MapPinned,
  Camera,
  Heart,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "2",
    label: "Holy Cities",
    icon: MapPinned,
  },
  {
    value: "Umrah",
    label: "All Year Round",
    icon: Camera,
  },
  {
    value: "Haj",
    label: "Once A Year",
    icon: Heart,
  },
  {
    value: "∞",
    label: "Moments Of Devotion",
    icon: Sparkles,
  },
];

export default function GalleryStats() {
  return (
    <section className="relative border-b border-[#e6e0d5] bg-[#f7f5f1] py-14">

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-[22px] border border-[#e3ded4] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f6f3ec] text-[#1a3e34]">
                  <Icon size={20} />
                </div>

                <p className="mt-4 font-serif text-[30px] font-bold text-[#16322a]">
                  {stat.value}
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#5c6660]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}