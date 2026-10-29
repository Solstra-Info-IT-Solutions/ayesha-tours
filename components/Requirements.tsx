"use client";

import {
  MapPin,
  Car,
  Plane,
  Bed,
  Utensils,
  Infinity,
} from "lucide-react";

export default function Requirements() {
  const services = [
    {
      title: "Sightseeing",
      text: "Curated tours of iconic landmarks and hidden gems with expert local insights.",
      icon: MapPin,
    },
    {
      title: "Private Transport",
      text: "Dedicated luxury vehicles for seamless and comfortable travel throughout your stay.",
      icon: Car,
    },
    {
      title: "Airport Transfers",
      text: "Hassle-free pick-up and drop-off services ensuring a smooth start and end to your trip.",
      icon: Plane,
    },
    {
      title: "Accommodation",
      text: "Comfortable stays throughout your trip with carefully selected accommodations.",
      icon: Bed,
    },
    {
      title: "Dining",
      text: "Food and dining experiences selected to complement your journey.",
      icon: Utensils,
    },
    {
      title: "Full Package",
      text: "Complete travel experience with all essential services included.",
      icon: Infinity,
    },
  ];

  return (
    <div className="w-full">
      {/* HEADING */}
      <h1 className="font-serif text-xl font-bold text-gray-800">
        Create Your Experience.
      </h1>

      <p className="mt-3 max-w-[850px] text-[16px] leading-7 text-gray-600">
        Select the services you require for your journey. Choose individual
        components for a tailored experience, or opt for our comprehensive
        full package.
      </p>

      {/* SERVICES */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isFullPackage = index === 5;

          return (
            <button
              key={service.title}
              type="button"
              className={`group relative min-h-[310px] rounded-xl border p-8 text-left transition hover:-translate-y-1 hover:shadow-md ${
                isFullPackage
                  ? "border-[#193830] bg-[#fcfaf6]"
                  : "border-gray-100 bg-white"
              }`}
            >
              {/* RADIO */}
              <div
                className={`absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                  isFullPackage
                    ? "border-[#193830]"
                    : "border-[#c7cecb]"
                }`}
              >
                {isFullPackage && (
                  <div className="h-3 w-3 rounded-full bg-[#193830]" />
                )}
              </div>

              {/* ICON */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-xl ${
                  isFullPackage
                    ? "bg-[#f3ede0]"
                    : "bg-[#f0eee9]"
                }`}
              >
                <Icon
                  size={29}
                  strokeWidth={2}
                  className={
                    isFullPackage
                      ? "text-[#193830]"
                      : "text-[#0f2922]"
                  }
                />
              </div>

              {/* TITLE */}
              <h2 className="mt-7 max-w-[190px] font-serif text-[27px] font-bold leading-tight text-[#202020]">
                {service.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-[210px] text-[16px] leading-6 text-gray-600">
                {service.text}
              </p>

              {/* DECORATIVE WATERMARK */}
              <div className="pointer-events-none absolute bottom-0 right-0 overflow-hidden opacity-[0.035]">
                <Icon size={110} strokeWidth={1} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}