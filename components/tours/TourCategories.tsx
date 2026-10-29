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
    <section className="relative border-b border-[#e6e1d8] bg-[#f7f5f1] py-8">
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
                    ? "border-[#b79b66] bg-[#b79b66] text-[#0e1f1b]"
                    : "border-[#ced2d0] bg-white text-[#616c66] hover:border-[#b79b66]/60 hover:text-[#143129]"
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