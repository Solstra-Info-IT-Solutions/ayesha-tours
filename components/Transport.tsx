"use client";

import { useState } from "react";
import { Car, Users, Luggage } from "lucide-react";

export default function Transport() {
  const [selected, setSelected] = useState("Premium Sedan");

  const vehicles = [
    {
      title: "Premium Sedan",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      tag: "COUPLES / SOLOS",
      passengers: "Up to 3 Passengers",
      bags: "2 Large, 2 Small Bags",
      description:
        "Ideal for couples or small families seeking comfort and smooth city navigation.",
    },
    {
      title: "Luxury SUV",
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
      tag: "FAMILIES",
      passengers: "Up to 5 Passengers",
      bags: "4 Large, 3 Small Bags",
      description:
        "Extra legroom, elevated viewing angles, and superior suspension for longer journeys.",
      popular: true,
    },
    {
      title: "Luxury Van",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      tag: "GROUPS",
      passengers: "9 to 12 Passengers",
      bags: "Ample Storage",
      description:
        "Reclining captain seats and spacious interiors, perfect for group or extended family travel.",
    },
  ];

  return (
    <div className="w-full">
      {/* HEADING */}
      <h1 className="font-serif text-xl font-bold text-gray-800">
        Prefer Mode of Transport ?
      </h1>

      <p className="mt-3 max-w-[850px] text-[16px] leading-7 text-gray-600">
        Select the class of vehicle that best suits your travel party&apos;s
        size and style. All our vehicles are driven by experienced,
        English-speaking chauffeurs.
      </p>

      {/* VEHICLES */}
      <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle) => {
          const isSelected = selected === vehicle.title;

          return (
            <button
              key={vehicle.title}
              type="button"
              onClick={() => setSelected(vehicle.title)}
              className={`overflow-hidden rounded-lg border text-left transition ${
                isSelected
                  ? "border-[#3d0057] shadow-md"
                  : "border-gray-200 hover:border-[#3d0057]"
              }`}
            >
              {/* IMAGE */}
              <div className="relative h-[160px] w-full overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="h-full w-full object-cover"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/20" />

                {/* POPULAR */}
                {vehicle.popular && (
                  <span className="absolute right-3 top-3 rounded-full bg-[#3d0057] px-4 py-2 text-xs font-medium text-white">
                    POPULAR
                  </span>
                )}

                {/* TAG */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium tracking-wide text-white">
                  <Car size={17} />
                  {vehicle.tag}
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative bg-white p-5">
                {/* RADIO */}
                <div
                  className={`absolute right-5 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    isSelected
                      ? "border-[#3d0057]"
                      : "border-[#cdc5d0]"
                  }`}
                >
                  {isSelected && (
                    <div className="h-3 w-3 rounded-full bg-[#3d0057]" />
                  )}
                </div>

                {/* TITLE */}
                <h2 className="pr-8 text-[23px] font-semibold leading-tight text-[#202020]">
                  {vehicle.title}
                </h2>

                {/* PASSENGERS */}
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} className="text-[#3d0057]" />
                  {vehicle.passengers}
                </div>

                {/* BAGS */}
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <Luggage size={16} className="text-[#3d0057]" />
                  {vehicle.bags}
                </div>

                {/* DESCRIPTION */}
                <p className="mt-5 text-sm leading-6 text-gray-600">
                  {vehicle.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* SELECTED VALUE */}
      <p className="mt-4 text-sm text-gray-500">
        Selected:{" "}
        <span className="font-medium text-[#3d0057]">{selected}</span>
      </p>
    </div>
  );
}