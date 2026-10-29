"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { DEMO_MODE } from "@/lib/site";

/** Slim notice above the header. Shown only while the site is a demo. */
export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!DEMO_MODE || !isVisible) return null;

  return (
    <div className="relative z-[110] bg-gold text-night">
      <div className="mx-auto flex min-h-9 max-w-[1600px] items-center justify-center px-12 py-1.5 text-center text-[12px] font-medium leading-5">
        <p>
          Demo website for Ayesha Tours – packages, dates and contact details
          are illustrative until confirmed.
        </p>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss demo notice"
          className="absolute right-3 flex h-7 w-7 items-center justify-center rounded-full hover:bg-night/10 sm:right-6"
        >
          <X size={14} aria-hidden />
        </button>
      </div>
    </div>
  );
}
