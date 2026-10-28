"use client";

import { Globe2, Moon, Users, Landmark, Tent } from "lucide-react";

export const categories = [
  { id: "all", label: "All Packages", icon: Globe2 },
  { id: "umrah", label: "Umrah", icon: Landmark },
  { id: "family", label: "Family", icon: Users },
  { id: "ramadan", label: "Ramadan", icon: Moon },
  { id: "haj", label: "Haj", icon: Tent },
];

export default function TourCategories({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <section className="relative border-b border-[#e3dbdf] bg-[#f6f2f4] py-8">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon;

            const isActive = active === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onChange(category.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                  isActive
                    ? "border-[#ff058f] bg-[#ff058f] text-white"
                    : "border-[#d4ccd0] bg-white text-[#6a5c70] hover:border-[#ff058f]/60 hover:text-[#3e0e52]"
                }`}
              >
                <Icon size={14} />

                {category.label}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}