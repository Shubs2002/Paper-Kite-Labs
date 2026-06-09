/**
 * components/sections/ContactCTA.tsx
 * Dark call-to-action band (the ONLY dark section on the page):
 *   - Background: #0D0D0D
 *   - Word-by-word stagger headline in white
 *   - Sub-text in muted gray
 *   - "Start a Conversation" button + email text link
 */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CONTACT_CTA, CONTACT_INFO } from "@/lib/constants";
import Button from "@/components/ui/Button";
import WordStagger from "@/components/animations/WordStagger";

export default function ContactCTA() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      className="w-full bg-surface-dark py-section-sm lg:py-section"
      aria-label="Contact call to action"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">

        {/* Headline — word-by-word stagger in white */}
        <WordStagger
          text={CONTACT_CTA.headline}
          className="text-[36px] sm:text-display-sm lg:text-display font-bold tracking-[-0.03em] leading-[1.1] text-white"
          trigger="scroll"
          stagger={0.1}
        />

        {/* Sub-text */}
        <motion.p
          className="text-body text-ink-muted font-light max-w-lg leading-relaxed"
          initial={shouldReduce ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          {CONTACT_CTA.subtext}
        </motion.p>

        {/* Actions: button + email link */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          initial={shouldReduce ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <Button
            label={CONTACT_CTA.cta}
            href="/contact"
            variant="secondary"
            size="lg"
          />
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-[14px] font-light text-white/70 hover:text-white underline-offset-4 hover:underline transition-all duration-200"
          >
            {CONTACT_INFO.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
