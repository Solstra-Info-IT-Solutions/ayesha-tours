"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/faqs";


export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f6f2f4] pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">

        <div className="mb-12 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#e40e83]">
            Common Questions
          </span>

          <h2 className="mt-4 font-serif text-[36px] font-bold text-[#3f1152] sm:text-5xl">
            Everything You Need To{" "}

            <span className="italic font-medium text-[#e40e83]">
              Know.
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${
                  isOpen
                    ? "border-[#ff058f]/60 bg-white shadow-[0_15px_35px_rgba(63,17,82,0.08)]"
                    : "border-[#dfd8dc] bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                >
                  <span className="font-serif text-[19px] font-bold text-[#3f1152] sm:text-[21px]">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3edf5] text-[#4e1367]">
                    {isOpen ? (
                      <Minus size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7">
                    <div className="h-px bg-[#e5dee2]" />

                    <p className="pt-5 text-[14px] leading-7 text-[#6e6572]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}