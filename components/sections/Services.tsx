/**
 * components/sections/Services.tsx
 * Services section:
 *   - "What We Do" label (11px uppercase)
 *   - "Four Ways We Create Impact" headline (48px)
 *   - 2×2 grid of ServiceCards (desktop) → 1-col (mobile)
 *   - Cards stagger in on scroll
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SERVICES, SERVICES_SECTION } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import MotionWrapper from "@/components/animations/MotionWrapper";

export default function Services() {
  const shouldReduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: shouldReduce
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      className="w-full bg-white py-section-sm lg:py-section"
      aria-label="Our services"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section header */}
        <MotionWrapper className="text-center mb-14 lg:mb-20" y={20}>
          <p className="label-text text-ink-muted mb-5">
            {SERVICES_SECTION.label}
          </p>
          <h2 className="text-heading-sm sm:text-heading font-bold tracking-[-0.02em] text-ink">
            {SERVICES_SECTION.headline}
          </h2>
        </MotionWrapper>

        {/* Services grid — 2×2 desktop, 1-col mobile */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service, index) => (
            <motion.div key={service.number} variants={cardVariants}>
              <ServiceCard item={service} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
