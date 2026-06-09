/**
 * components/animations/MotionWrapper.tsx
 * Generic scroll-reveal wrapper using Framer Motion.
 * Animates children into view: y: 30 → 0, opacity 0 → 1.
 * Respects prefers-reduced-motion.
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Y offset to animate from (default: 30) */
  y?: number;
  /** Whether to use whileInView (scroll-triggered) or animate (on mount) */
  trigger?: "scroll" | "mount";
}

export default function MotionWrapper({
  children,
  className,
  delay = 0,
  y = 30,
  trigger = "scroll",
}: MotionWrapperProps) {
  const shouldReduce = useReducedMotion();

  const initial = shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const animate = shouldReduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };
  const transition = {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1] as const,
    delay,
  };

  if (trigger === "mount") {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
