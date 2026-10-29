"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";

/**
 * Tilts toward the mouse in 3D on a spring and shifts its content the
 * other way for depth. Mouse only; flat on touch and with reduced motion.
 */
export default function TiltCard({
  children,
  max = 7,
  className = "",
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const spring = { stiffness: 170, damping: 18, mass: 0.6 };
  const px = useSpring(0, spring);
  const py = useSpring(0, spring);
  const rotateY = useTransform(px, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(py, [-0.5, 0.5], [max, -max]);
  const shiftX = useTransform(px, [-0.5, 0.5], [10, -10]);
  const shiftY = useTransform(py, [-0.5, 0.5], [10, -10]);

  const onMove = (event: React.PointerEvent) => {
    if (reduce || event.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((event.clientX - r.left) / r.width - 0.5);
    py.set((event.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={`will-change-transform ${className}`}
    >
      <motion.div style={{ x: shiftX, y: shiftY, scale: 1.06 }} className="absolute inset-0">
        {children}
      </motion.div>
    </motion.div>
  );
}
