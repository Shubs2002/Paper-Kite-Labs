/**
 * app/services/page.tsx
 * /services — Full services overview with:
 *   - Large page header
 *   - 2×2 services grid (same ServiceCards as homepage but larger layout)
 *   - Process section with numbered steps
 *   - Contact CTA band at bottom
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  SERVICES,
  SERVICES_PAGE,
  SERVICES_SECTION,
  CONTACT_CTA,
  CONTACT_INFO,
} from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import MotionWrapper from "@/components/animations/MotionWrapper";
import WordStagger from "@/components/animations/WordStagger";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We listen. We dig into your workflows, pain points, and goals to define a tight scope that delivers real impact.",
  },
  {
    number: "02",
    title: "Build & Iterate",
    description:
      "We build in sprints, ship working software early, and iterate based on your feedback — not assumptions.",
  },
  {
    number: "03",
    title: "Deploy & Support",
    description:
      "We deploy to production, train your team, and stay on for ongoing support and optimization.",
  },
];

export default function ServicesPage() {
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
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="w-full bg-white">

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-12 border-b border-stroke">
        <MotionWrapper trigger="mount" y={20}>
          <p className="label-text text-ink-muted mb-5">
            {SERVICES_SECTION.label}
          </p>
          <h1 className="text-heading-sm sm:text-heading lg:text-display-sm font-bold tracking-[-0.03em] text-ink mb-4">
            {SERVICES_PAGE.headline}
          </h1>
          <p className="text-body sm:text-[18px] text-ink-secondary font-light max-w-2xl leading-relaxed">
            {SERVICES_PAGE.subheadline}
          </p>
        </MotionWrapper>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-section-sm lg:py-section">
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

      {/* How We Work section */}
      <div className="bg-surface-alt py-section-sm lg:py-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <MotionWrapper className="mb-14 lg:mb-20" y={20}>
            <p className="label-text text-ink-muted mb-5">Our Process</p>
            <h2 className="text-heading-sm sm:text-heading font-bold tracking-[-0.02em] text-ink">
              How We Work
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
            {PROCESS_STEPS.map((step, i) => (
              <MotionWrapper key={i} delay={i * 0.12} y={30}>
                <div className="flex flex-col gap-4 p-7 bg-white border border-stroke rounded-card">
                  <span className="label-text text-ink-muted">
                    {step.number}
                  </span>
                  <h3 className="text-card-title text-ink font-medium">
                    {step.title}
                  </h3>
                  <p className="text-body-sm text-ink-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-surface-dark py-section-sm lg:py-section">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <WordStagger
            text={CONTACT_CTA.headline}
            className="text-[36px] sm:text-display-sm font-bold tracking-[-0.03em] leading-[1.1] text-white"
            trigger="scroll"
            stagger={0.1}
          />
          <MotionWrapper y={15} delay={0.3}>
            <p className="text-body text-ink-muted font-light max-w-lg leading-relaxed">
              {CONTACT_CTA.subtext}
            </p>
          </MotionWrapper>
          <MotionWrapper y={15} delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button label={CONTACT_CTA.cta} href="/contact" variant="secondary" size="lg" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-[14px] font-light text-white/70 hover:text-white underline-offset-4 hover:underline transition-all duration-200"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}
