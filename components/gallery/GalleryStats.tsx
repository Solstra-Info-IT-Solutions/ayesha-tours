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
    <section className="relative border-b border-[#e2d9de] bg-[#f6f2f4] py-14">

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-[22px] border border-[#dfd8dc] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f3edf5] text-[#4e1367]">
                  <Icon size={20} />
                </div>

                <p className="mt-4 font-serif text-[30px] font-bold text-[#3f1152]">
                  {stat.value}
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#847b88]">
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