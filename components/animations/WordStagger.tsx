/**
 * components/animations/WordStagger.tsx
 * Splits text into words and animates each word independently.
 * Used for hero headlines and section titles.
 * Respects prefers-reduced-motion.
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";

interface WordStaggerProps {
  text: string;
  className?: string;
  /** Delay before the first word starts animating (seconds) */
  delay?: number;
  /** Time between each word (seconds) */
  stagger?: number;
  /** Whether to trigger on scroll or on mount */
  trigger?: "scroll" | "mount";
  /** HTML tag to render as */
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function WordStagger({
  text,
  className = "",
  delay = 0,
  stagger = 0.08,
  trigger = "mount",
  as: Tag = "span",
}: WordStaggerProps) {
  const shouldReduce = useReducedMotion();
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduce ? 0 : stagger,
        delayChildren: shouldReduce ? 0 : delay,
      },
    },
  };

  const child = {
    hidden: shouldReduce
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 20 },
    visible: shouldReduce
      ? { opacity: 1, y: 0 }
      : {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
  };

  const motionProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "visible" }
      : {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
        };

  return (
    <motion.span
      className={`${className} block`}
      variants={container}
      {...motionProps}
      aria-label={text}
      role="heading"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
