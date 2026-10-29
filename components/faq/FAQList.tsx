"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/faqs";


export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f7f5f1] pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">

        <div className="mb-12 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7b6337]">
            Common Questions
          </span>

          <h2 className="mt-4 font-serif text-[36px] font-bold text-[#16322a] sm:text-5xl">
            Everything You Need To{" "}

            <span className="italic font-medium text-[#7b6337]">
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
                    ? "border-[#b79b66]/60 bg-white shadow-[0_15px_35px_rgba(22,50,42,0.08)]"
                    : "border-[#e3ded4] bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                >
                  <span className="font-serif text-[19px] font-bold text-[#16322a] sm:text-[21px]">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f6f3ec] text-[#1a3e34]">
                    {isOpen ? (
                      <Minus size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7">
                    <div className="h-px bg-[#e8e4db]" />

                    <p className="pt-5 text-[14px] leading-7 text-[#686f6c]">
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