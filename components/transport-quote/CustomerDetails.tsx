"use client";

import {
  User,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

import type { TransportFormData } from "./TransportQuoteForm";

type Props = {
  formData: TransportFormData;

  updateField: (
    field: keyof TransportFormData,
    value: string
  ) => void;
};

export default function CustomerDetails({
  formData,
  updateField,
}: Props) {
  return (
    <section>
      <SectionHeading
        number="03"
        title="Your Contact Details"
        description="So our team can prepare and send your quotation."
      />

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        <InputField
          label="Full Name"
          icon={<User size={18} />}
          value={formData.fullName}
          onChange={(value) => updateField("fullName", value)}
          placeholder="Enter your full name"
          required
        />

        <InputField
          label="Phone Number"
          type="tel"
          icon={<Phone size={18} />}
          value={formData.phone}
          onChange={(value) => updateField("phone", value)}
          placeholder="+91 XXXXX XXXXX"
          required
        />

        <InputField
          label="Email Address"
          type="email"
          icon={<Mail size={18} />}
          value={formData.email}
          onChange={(value) => updateField("email", value)}
          placeholder="your@email.com"
          required
        />
      </div>

      {/* Message */}

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Additional Requirements
          <span className="ml-1 text-gray-400">(Optional)</span>
        </label>

        <div className="relative">
          <MessageSquare
            size={18}
            className="pointer-events-none absolute left-4 top-4 text-[#3f1152]/50"
          />

          <textarea
            rows={5}
            value={formData.requirements}
            onChange={(event) =>
              updateField("requirements", event.target.value)
            }
            placeholder="E.g. flight number, wheelchair user, child seats, extra luggage, ziyarat sites you'd like to visit..."
            className="w-full resize-none rounded-xl border border-gray-200 bg-white pb-4 pl-11 pr-4 pt-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#3f1152] focus:ring-4 focus:ring-[#3f1152]/5"
          />
        </div>
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
          className="h-[52px] w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:border-[#3f1152] focus:ring-4 focus:ring-[#3f1152]/5"
        />
      </div>
    </div>
  );
}