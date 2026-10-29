"use client";

import {
  User,
  Heart,
  Users,
  UserRoundPlus,
  Minus,
  Plus,
} from "lucide-react";

export default function Traveler() {
  const travelerTypes = [
    {
      title: "SOLO",
      icon: User,
    },
    {
      title: "COUPLE",
      icon: Heart,
    },
    {
      title: "FAMILY",
      icon: Users,
    },
    {
      title: "GROUP",
      icon: UserRoundPlus,
    },
  ];

  const travelerCount = [
    {
      title: "Adults",
      subtitle: "Ages 12 or above",
      number: "1",
    },
    {
      title: "Children",
      subtitle: "Ages 2 to 12",
      number: "0",
    },
    {
      title: "Infants",
      subtitle: "Under 2 years",
      number: "0",
    },
  ];

  return (
    <div className="w-full">
      {/* HEADING */}
      <h1 className="font-serif text-xl font-bold text-[#222]">
        Who is traveling ?
      </h1>

      <p className="mt-3 max-w-[800px] text-[16px] leading-7 text-gray-600">
        Tell us about your group so we can customise accommodations and
        experiences perfectly suited for everyone.
      </p>

      {/* TRAVELER TYPE */}
      <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
        {travelerTypes.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              type="button"
              className={`flex h-[102px] flex-col items-center justify-center rounded-lg border transition ${
                index === 0
                  ? "border-[#112d25] bg-[#112d25] text-white shadow-md"
                  : "border-gray-100 bg-white text-gray-700 shadow-sm hover:border-[#112d25]"
              }`}
            >
              <Icon
                size={28}
                strokeWidth={2}
                className={
                  index === 0 ? "text-[#193830]" : "text-[#193830]"
                }
              />

              <span className="mt-3 text-sm font-medium tracking-wide">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* TRAVELER COUNTS */}
      <div className="mt-8">
        {travelerCount.map((item) => (
          <div
            key={item.title}
            className="flex min-h-[107px] items-center justify-between border-b border-gray-100"
          >
            {/* LEFT */}
            <div>
              <h2 className="text-xl font-semibold text-[#112d25]">
                {item.title}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {item.subtitle}
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-6">
              {/* MINUS */}
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#efece7] text-gray-800 transition hover:bg-gray-200"
              >
                <Minus size={20} />
              </button>

              {/* NUMBER */}
              <span className="w-5 text-center font-serif text-xl font-bold text-[#0f2922]">
                {item.number}
              </span>

              {/* PLUS */}
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#efece7] text-gray-800 transition hover:bg-gray-200"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}