/**
 * components/sections/ProofStrip.tsx
 * Social proof section:
 *   - Warm off-white background (#F8F8F7)
 *   - "Trusted by" label heading
 *   - 3 client logo placeholders (hover: scale + opacity)
 *   - Achievement text below each logo
 *   - Entire strip animates in on scroll
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROOF_ITEMS, PROOF_HEADING } from "@/lib/constants";
import MotionWrapper from "@/components/animations/MotionWrapper";

export default function ProofStrip() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      className="w-full bg-surface-alt py-section-sm lg:py-section"
      aria-label="Client proof and achievements"
    >
      <MotionWrapper className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" y={20}>
        {/* Section label */}
        <p className="label-text text-ink-muted text-center mb-12 lg:mb-16">
          {PROOF_HEADING}
        </p>

        {/* Logo + achievement grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
          {PROOF_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-5 text-center"
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: shouldReduce ? 0 : index * 0.1,
              }}
            >
              {/* Logo placeholder — hover: scale + opacity */}
              <div
                className="bg-gray-200/60 w-36 h-14 rounded-lg opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-200 ease-out cursor-default"
                aria-label="[IMAGE_PLACEHOLDER] client logo"
              />

              {/* Achievement text */}
              <p className="text-[14px] font-light text-ink-secondary leading-relaxed max-w-[280px]">
                {item.achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
}
