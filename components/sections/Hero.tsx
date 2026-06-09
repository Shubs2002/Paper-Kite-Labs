/**
 * components/sections/Hero.tsx
 * Full-viewport hero section:
 *   - Centered headline with word-by-word stagger animation
 *   - Sub-headline fades in after headline
 *   - Two CTA buttons slide in
 *   - Watermark kite logo at 0.04 opacity (top-right)
 *   - Horizontal rule + micro-stats row
 *   - 100vh height
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO_CONTENT, HERO_MICRO_STATS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import WordStagger from "@/components/animations/WordStagger";

/** Large watermark kite — positioned top-right at 0.04 opacity */
function HeroWatermark() {
  return (
    <div className="absolute top-8 right-0 lg:right-8 pointer-events-none select-none" aria-hidden="true">
      <svg
        width={400}
        height={520}
        viewBox="0 0 24 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-ink opacity-[0.04]"
      >
        <path d="M12 1 L22 13 L12 30 Z" fill="currentColor" opacity="0.85" />
        <path d="M12 1 L3 14 L12 30 Z" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      className="relative w-full bg-white min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Watermark */}
      <HeroWatermark />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-section-sm w-full">
        <div className="max-w-3xl mx-auto text-center lg:text-center flex flex-col items-center gap-8">

          {/* Headline — word-by-word stagger */}
          <WordStagger
            text={HERO_CONTENT.headline}
            className="text-[40px] sm:text-[56px] lg:text-display font-bold tracking-[-0.03em] leading-[1.1] text-ink"
            trigger="mount"
            stagger={0.08}
          />

          {/* Sub-headline — fades in after headline */}
          <motion.p
            className="text-body sm:text-[18px] text-ink-secondary font-light leading-relaxed max-w-2xl"
            initial={shouldReduce ? {} : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          {/* CTA buttons — slide in */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 pt-2"
            initial={shouldReduce ? {} : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.85 }}
          >
            <Button
              label={HERO_CONTENT.cta1}
              href="/work"
              variant="primary"
              size="lg"
            />
            <Button
              label={HERO_CONTENT.cta2}
              href="/contact"
              variant="outline"
              size="lg"
            />
          </motion.div>

          {/* Horizontal rule + micro-stats */}
          <motion.div
            className="w-full max-w-md pt-6"
            initial={shouldReduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
          >
            <hr className="border-stroke mb-6" />
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {HERO_MICRO_STATS.map((stat, i) => (
                <span key={i} className="flex items-center gap-4">
                  <span className="label-text text-ink-muted whitespace-nowrap">
                    {stat.label}
                  </span>
                  {i < HERO_MICRO_STATS.length - 1 && (
                    <span className="text-stroke-hover text-[8px]">·</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
