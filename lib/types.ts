/**
 * lib/types.ts
 * Shared TypeScript interfaces for Paperkite Labs website.
 * All component props and data structures reference these types.
 */

/** A single navigation link, optionally with dropdown children */
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

/** A service offered by Paperkite Labs */
export interface ServiceItem {
  /** Display number e.g. "01", "02" */
  number: string;
  title: string;
  /** Comma-separated list of sub-services or short description */
  description: string;
  /** Icon identifier — maps to inline SVG in ServiceCard */
  icon: "ai" | "code" | "data" | "video";
}

/** A work/project entry for the portfolio grid */
export interface WorkItem {
  title: string;
  /** Category label shown as a tag */
  tag: string;
  /** Short one-line summary of the project */
  oneLiner: string;
}

/** An achievement shown in the ProofStrip section */
export interface ProofItem {
  achievement: string;
}

/** Content for the Hero section */
export interface HeroContent {
  headline: string;
  subheadline: string;
  cta1: string;
  cta2: string;
}

/** Contact info for footer and proof strip */
export interface ContactInfo {
  website: string;
  email: string;
  phone: string;
}

/** A single micro-stat displayed below the hero CTA buttons */
export interface MicroStat {
  label: string;
}

/** Props for the reusable Button component */
export interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

/** Props for ServiceCard */
export interface ServiceCardProps {
  item: ServiceItem;
  index?: number;
}

/** Props for WorkCard */
export interface WorkCardProps {
  item: WorkItem;
  index?: number;
}
