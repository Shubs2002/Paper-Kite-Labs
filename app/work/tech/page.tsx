/**
 * app/work/tech/page.tsx
 * /work/tech — Tech portfolio grid.
 * Large headline, tab navigation, WorkCard grid with stagger animation.
 */

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { TECH_WORK_ITEMS, TECH_WORK_HEADING } from "@/lib/constants";
import WorkCard from "@/components/ui/WorkCard";
import MotionWrapper from "@/components/animations/MotionWrapper";

export default function TechWorkPage() {
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
    hidden: shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="w-full bg-white">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-12">

        {/* Work type tabs */}
        <MotionWrapper className="flex items-center gap-6 mb-10" trigger="mount" y={10}>
          <Link
            href="/work/tech"
            className="text-[13px] font-medium text-ink border-b-[1.5px] border-ink pb-1"
            aria-current="page"
          >
            Tech Work
          </Link>
          <Link
            href="/work/creative"
            className="text-[13px] font-normal text-ink-muted hover:text-ink-secondary pb-1 border-b-[1.5px] border-transparent transition-colors"
          >
            Creative Work
          </Link>
        </MotionWrapper>

        <MotionWrapper trigger="mount" y={20} delay={0.1}>
          <h1 className="text-heading-sm sm:text-heading lg:text-display-sm font-bold tracking-[-0.03em] text-ink mb-4">
            {TECH_WORK_HEADING.title}
          </h1>
          <p className="text-body text-ink-secondary font-light max-w-xl">
            {TECH_WORK_HEADING.description}
          </p>
        </MotionWrapper>
      </div>

      {/* Work cards grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-section-sm lg:pb-section">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {TECH_WORK_ITEMS.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <WorkCard item={item} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
