/**
 * app/page.tsx
 * Homepage (/) — composes all homepage sections in order:
 *  1. Hero (100vh, word stagger, watermark)
 *  2. ProofStrip (warm bg, logo placeholders)
 *  3. Services (2×2 grid, stagger in)
 *  4. ContactCTA (dark band)
 */

import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProofStrip from "@/components/sections/ProofStrip";
import Services from "@/components/sections/Services";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Paperkite Labs — Intelligent Systems for Modern Businesses",
  description:
    "From messy manual workflows to smart, scalable software — Paperkite Labs turns your operational challenges into competitive advantages.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Services />
      <ContactCTA />
    </>
  );
}
