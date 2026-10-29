"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * A fill image that travels more slowly than the page inside its frame,
 * smoothed by a spring so it feels weighty. Place inside a relatively
 * positioned, overflow-hidden parent.
 */
export default function ParallaxImage({
  src,
  alt,
  sizes,
  strength = 70,
  className = "object-cover",
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  strength?: number;
  className?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  const y = useSpring(raw, { stiffness: 110, damping: 26, mass: 0.35 });

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0"
        style={{ top: -strength, bottom: -strength, y: reduce ? 0 : y }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} />
      </motion.div>
    </div>
  );
}
