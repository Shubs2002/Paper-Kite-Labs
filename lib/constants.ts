/**
 * lib/constants.ts
 * Single source of truth for all site content.
 * All text, links, and data are exported from here.
 * Components MUST import from this file — never hardcode strings in JSX.
 */

import type {
  NavLink,
  ServiceItem,
  WorkItem,
  ProofItem,
  HeroContent,
  ContactInfo,
  MicroStat,
} from "@/lib/types";

// ---------------------------------------------------------------------------
// SITE METADATA
// ---------------------------------------------------------------------------

export const SITE_NAME = "Paperkite Labs";
export const SITE_TAGLINE = "Ideas · Systems · Growth";

// ---------------------------------------------------------------------------
// CONTACT INFO
// ---------------------------------------------------------------------------

export const CONTACT_INFO: ContactInfo = {
  website: "paperkitelabs.com",
  email: "omkar@paperkitelabs.com",
  phone: "9867353449",
};

// ---------------------------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------------------------

export const NAV_LINKS: NavLink[] = [
  {
    label: "Work",
    href: "/work",
    children: [
      { label: "Tech Work", href: "/work/tech" },
      { label: "Creative Work", href: "/work/creative" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const NAV_CTA: NavLink = {
  label: "Talk to Us",
  href: "/contact",
};

// ---------------------------------------------------------------------------
// HERO SECTION
// ---------------------------------------------------------------------------

export const HERO_CONTENT: HeroContent = {
  headline: "We Build Intelligent Systems for Modern Businesses",
  subheadline:
    "From messy manual workflows to smart, scalable software — Paperkite Labs turns your operational challenges into competitive advantages.",
  cta1: "See Our Work",
  cta2: "Talk to Us",
};

export const HERO_MICRO_STATS: MicroStat[] = [
  { label: "2 Industries Served" },
  { label: "4 Core Services" },
  { label: "100% Custom Built" },
];

// ---------------------------------------------------------------------------
// PROOF STRIP
// ---------------------------------------------------------------------------

export const PROOF_HEADING = "Trusted by";

export const PROOF_ITEMS: ProofItem[] = [
  {
    achievement:
      "JSW Steel — Automated CAD drawing review, cutting engineering hours significantly",
  },
  {
    achievement:
      "Financial Investigation Platform — Days of manual bank analysis reduced to minutes",
  },
  {
    achievement:
      "paperkitelabs.com · omkar@paperkitelabs.com · 9867353449",
  },
];

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------

export const SERVICES_SECTION = {
  label: "What We Do",
  headline: "Four Ways We Create Impact",
};

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "AI Solutions & Automation",
    description:
      "AI Agents, Document Intelligence, Computer Vision, Workflow Automation, Process Optimization",
    icon: "ai",
  },
  {
    number: "02",
    title: "Custom Software Development",
    description:
      "Enterprise Applications, Web Platforms, Dashboards, Internal Systems, Business Applications",
    icon: "code",
  },
  {
    number: "03",
    title: "Data Intelligence & Digital Transformation",
    description:
      "Business Analytics, MIS Dashboards, Data Reporting, Process Digitization, Operational Visibility",
    icon: "data",
  },
  {
    number: "04",
    title: "AI Videos & Content",
    description:
      "AI Video Generation, Corporate Videos, Explainer Videos, Training Content, Marketing Assets",
    icon: "video",
  },
];

// ---------------------------------------------------------------------------
// WORK — TECH
// ---------------------------------------------------------------------------

export const TECH_WORK_HEADING = {
  title: "Technology Projects",
  description:
    "AI systems, automation platforms, and custom software built for real-world operational challenges.",
};

export const TECH_WORK_ITEMS: WorkItem[] = [
  {
    title: "CAD Review Automation",
    tag: "AI / Computer Vision",
    oneLiner:
      "Automated engineering drawing review for JSW Steel, reducing manual review hours significantly.",
  },
  {
    title: "Financial Investigation Platform",
    tag: "Data Intelligence",
    oneLiner:
      "Transformed days of manual bank statement analysis into a minutes-long automated pipeline.",
  },
  {
    title: "Enterprise MIS Dashboard",
    tag: "Business Analytics",
    oneLiner:
      "Real-time operational visibility dashboard integrating multiple data sources for C-suite reporting.",
  },
  {
    title: "Workflow Automation Suite",
    tag: "Process Automation",
    oneLiner:
      "End-to-end automation of repetitive internal workflows, eliminating manual data entry.",
  },
];

// ---------------------------------------------------------------------------
// WORK — CREATIVE
// ---------------------------------------------------------------------------

export const CREATIVE_WORK_HEADING = {
  title: "Creative Projects",
  description:
    "AI-generated video, corporate content, and marketing assets that tell your brand's story.",
};

export const CREATIVE_WORK_ITEMS: WorkItem[] = [
  {
    title: "AI Product Explainer Series",
    tag: "AI Video",
    oneLiner:
      "Series of AI-generated explainer videos breaking down complex SaaS features for end users.",
  },
  {
    title: "Corporate Brand Film",
    tag: "Corporate Video",
    oneLiner:
      "High-quality brand narrative video produced for a manufacturing conglomerate's investor deck.",
  },
  {
    title: "Training Content Library",
    tag: "Training Content",
    oneLiner:
      "Modular video training library for onboarding 500+ employees across multiple office locations.",
  },
  {
    title: "Marketing Asset Campaign",
    tag: "Marketing Assets",
    oneLiner:
      "Full suite of social and digital marketing assets for a B2B software product launch.",
  },
];

// ---------------------------------------------------------------------------
// CONTACT CTA SECTION
// ---------------------------------------------------------------------------

export const CONTACT_CTA = {
  headline: "Working on something?",
  subtext:
    "Tell us about your challenge and we'll show you how Paperkite Labs can solve it.",
  cta: "Start a Conversation",
};

// ---------------------------------------------------------------------------
// SERVICES PAGE FULL CONTENT
// ---------------------------------------------------------------------------

export const SERVICES_PAGE = {
  headline: "What We Do",
  subheadline:
    "We deliver end-to-end technology solutions that automate operations, surface insights, and create competitive advantages for modern businesses.",
};

// ---------------------------------------------------------------------------
// CONTACT PAGE
// ---------------------------------------------------------------------------

export const CONTACT_PAGE = {
  headline: "Let's Work Together",
  subheadline:
    "Reach out and a member of our team will get back to you within 24 hours.",
  formLabels: {
    name: "Full Name",
    email: "Email Address",
    company: "Company Name",
    message: "Tell us about your project",
    submit: "Send Message",
  },
};

// ---------------------------------------------------------------------------
// FOOTER
// ---------------------------------------------------------------------------

export const FOOTER_NAV: NavLink[] = [
  { label: "Tech Work", href: "/work/tech" },
  { label: "Creative Work", href: "/work/creative" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
