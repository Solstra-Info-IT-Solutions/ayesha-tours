"use client";

import {
  Bus,
  Car,
  Users,
  Hash,
} from "lucide-react";

import type { TransportFormData } from "./TransportQuoteForm";

type Props = {
  formData: TransportFormData;

  updateField: (
    field: keyof TransportFormData,
    value: string
  ) => void;
};

export default function VehicleDetails({
  formData,
  updateField,
}: Props) {
  return (
    <section>
      <SectionHeading
        number="02"
        title="Vehicle Requirements"
        description="Choose the vehicle that suits your group."
      />

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {/* Vehicle */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Preferred Vehicle
          </label>

          <div className="relative">
            <Car
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#3f1152]/50"
            />

            <select
              value={formData.vehicleType}
              required
              onChange={(event) =>
                updateField("vehicleType", event.target.value)
              }
              className="h-13 w-full appearance-none rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-[#3f1152] focus:ring-4 focus:ring-[#3f1152]/5"
            >
              <option value="">Select vehicle</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="GMC / Family SUV">
                GMC / Family SUV
              </option>
              <option value="Van (Hiace)">Van (Hiace)</option>
              <option value="Coach / Bus">
                Coach / Bus
              </option>
            </select>
          </div>
        </div>

        {/* Passengers */}

        <InputField
          label="Number of Passengers"
          type="number"
          icon={<Users size={18} />}
          value={formData.passengers}
          onChange={(value) =>
            updateField("passengers", value)
          }
          placeholder="e.g. 12"
          required
        />

        {/* Vehicles */}

        <InputField
          label="Number of Vehicles"
          type="number"
          icon={<Hash size={18} />}
          value={formData.vehicles}
          onChange={(value) =>
            updateField("vehicles", value)
          }
          placeholder="1"
        />
      </div>

      {/* Information */}

      <div className="mt-6 flex gap-4 rounded-2xl border border-[#db1481]/20 bg-[#fcf3f8] p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#db1481]/10 text-[#db1481]">
          <Bus size={19} />
        </div>

        <p className="text-sm leading-6 text-[#65565e]">
          Not sure which vehicle is suitable? Enter the number of pilgrims and
            your luggage needs and we will recommend the best option.
        </p>
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
          min={type === "number" ? 1 : undefined}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={(event) => onChange(event.target.value)}
          className="h-[52px] w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:border-[#3f1152] focus:ring-4 focus:ring-[#3f1152]/5"
        />
      </div>
    </div>
  );
}