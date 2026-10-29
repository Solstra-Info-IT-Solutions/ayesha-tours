"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Site-wide scroll reveal. Any element with a data-reveal attribute gets
 * .is-revealed once it enters the viewport (see the motion system in
 * globals.css). Elements are only hidden while html.motion-ok is present,
 * so content stays visible without JavaScript or with reduced motion.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion-ok")) return;

    const reveal = (el: Element) => el.classList.add("is-revealed");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    const scan = () =>
      document
        .querySelectorAll("[data-reveal]:not(.is-revealed)")
        .forEach((el) => observer.observe(el));

    scan();

    // Client-rendered sections (filters, tabs) can add new elements later.
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
}
