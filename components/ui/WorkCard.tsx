/**
 * components/ui/WorkCard.tsx
 * Portfolio work card with:
 *   - Image placeholder (top section)
 *   - Dark overlay on hover with "View Project →" text
 *   - Tag, title, and one-liner below
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { WorkCardProps } from "@/lib/types";

export default function WorkCard({ item }: WorkCardProps) {
  const [hovered, setHovered] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <div
      className="group flex flex-col bg-white border border-stroke rounded-card overflow-hidden transition-all duration-200 ease-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image placeholder + hover overlay */}
      <div className="relative w-full aspect-[16/10] bg-surface-alt overflow-hidden">
        {/* Placeholder */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"
          aria-label="[IMAGE_PLACEHOLDER] project thumbnail"
        />

        {/* Dark overlay on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 bg-surface-dark/70 flex items-center justify-center"
              initial={shouldReduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduce ? { opacity: 0 } : { opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <span className="flex items-center gap-2 text-sm font-medium text-white">
                View Project
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="8" x2="13" y2="8" />
                  <polyline points="9,4 13,8 9,12" />
                </svg>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2.5 p-6">
        {/* Category tag */}
        <span className="label-text text-ink/40 w-fit">
          {item.tag}
        </span>

        {/* Project title */}
        <h3 className="text-card-title text-ink font-medium">
          {item.title}
        </h3>

        {/* One-liner */}
        <p className="text-body-sm text-ink-secondary leading-relaxed">
          {item.oneLiner}
        </p>
      </div>
    </div>
  );
}
