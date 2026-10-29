"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const wrap = (min: number, max: number, value: number) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

/**
 * A line of text that drifts continuously. Scrolling adds momentum (and
 * flips direction when you scroll up); a spring on scroll velocity also
 * leans the text, so it reacts like a physical ribbon. Static under
 * reduced motion.
 */
export default function VelocityMarquee({
  items,
  baseVelocity = -2,
  className = "",
  itemClassName = "",
}: {
  items: string[];
  baseVelocity?: number;
  className?: string;
  itemClassName?: string;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const skew = useTransform(smoothVelocity, [-2500, 0, 2500], [7, 0, -7]);
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  const line = items.map((item) => (
    <span key={item} className={`flex items-center ${itemClassName}`}>
      {item}
      <span aria-hidden className="mx-[0.45em] inline-block h-[0.14em] w-[0.14em] rotate-45 bg-current opacity-60" />
    </span>
  ));

  return (
    <div aria-hidden className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex w-max flex-nowrap" style={{ x, skewX: reduce ? 0 : skew }}>
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} className="flex shrink-0 flex-nowrap">
            {line}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
