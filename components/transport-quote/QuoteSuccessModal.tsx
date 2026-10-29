"use client";

import { CheckCircle2, X } from "lucide-react";

export default function QuoteSuccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#16322a]/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-[28px] bg-white p-7 text-center shadow-2xl sm:p-9">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 size={34} className="text-green-600" />
        </div>

        <h3 className="mt-6 font-serif text-3xl font-bold text-[#16322a]">
          Request Ready
        </h3>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
          Your transport details are ready to send. Please make sure you
            pressed send in WhatsApp so our team receives them.
        </p>

        <button
          onClick={onClose}
          className="mt-7 w-full rounded-xl bg-[#16322a] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#173c31]"
        >
          Continue Exploring
        </button>
      </div>
    </div>
  );
}