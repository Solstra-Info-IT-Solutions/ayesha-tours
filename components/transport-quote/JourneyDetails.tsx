"use client";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Route,
} from "lucide-react";

import type { TransportFormData } from "./TransportQuoteForm";

type Props = {
  formData: TransportFormData;

  updateField: (
    field: keyof TransportFormData,
    value: string
  ) => void;
};

export default function JourneyDetails({
  formData,
  updateField,
}: Props) {
  return (
    <section>
      <SectionHeading
        number="01"
        title="Journey Details"
        description="Tell us your pickup, drop-off and timings in Saudi Arabia."
      />

      <div className="mt-7 space-y-6">
        {/* Journey Type */}

        <div>
          <label className="mb-3 block text-sm font-semibold text-[#3f1152]">
            Journey Type
          </label>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { value: "one-way", label: "One Way" },
              { value: "round-trip", label: "Round Trip" },
              { value: "ziyarat", label: "Ziyarat Tour" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  updateField("journeyType", option.value)
                }
                className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                  formData.journeyType === option.value
                    ? "border-[#3f1152] bg-[#3f1152] text-white shadow-md"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#3f1152]/40"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pickup / Drop */}

        <div className="grid gap-5 md:grid-cols-2">
          <InputField
            label="Pickup Location"
            placeholder="E.g. Jeddah Airport (KAIA)"
            icon={<MapPin size={18} />}
            value={formData.pickupLocation}
            onChange={(value) =>
              updateField("pickupLocation", value)
            }
            required
          />

          <InputField
            label="Drop Location"
            placeholder="E.g. hotel in Makkah"
            icon={<Route size={18} />}
            value={formData.dropLocation}
            onChange={(value) =>
              updateField("dropLocation", value)
            }
            required
          />
        </div>

        {/* Departure */}

        <div className="grid gap-5 md:grid-cols-2">
          <InputField
            label="Departure Date"
            type="date"
            icon={<CalendarDays size={18} />}
            value={formData.departureDate}
            onChange={(value) =>
              updateField("departureDate", value)
            }
            required
          />

          <InputField
            label="Departure Time"
            type="time"
            icon={<Clock3 size={18} />}
            value={formData.departureTime}
            onChange={(value) =>
              updateField("departureTime", value)
            }
          />
        </div>

        {/* Return Details */}

        {formData.journeyType === "round-trip" && (
          <div className="rounded-2xl border border-[#db1481]/20 bg-[#fcf3f8] p-5">
            <p className="mb-5 text-sm font-semibold text-[#3f1152]">
              Return Journey Details
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label="Return Date"
                type="date"
                icon={<CalendarDays size={18} />}
                value={formData.returnDate}
                onChange={(value) =>
                  updateField("returnDate", value)
                }
                required
              />

              <InputField
                label="Return Time"
                type="time"
                icon={<Clock3 size={18} />}
                value={formData.returnTime}
                onChange={(value) =>
                  updateField("returnTime", value)
                }
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3f1152] text-xs font-bold text-[#ff058f]">
        {number}
      </span>

      <div>
        <h3 className="font-serif text-xl font-bold text-[#3f1152]">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  icon,
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#3f1152]/50">
          {icon}
        </div>

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(event) => onChange(event.target.value)}
          className="h-[52px] w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#3f1152] focus:ring-4 focus:ring-[#3f1152]/5"
        />
      </div>
    </div>
  );
}