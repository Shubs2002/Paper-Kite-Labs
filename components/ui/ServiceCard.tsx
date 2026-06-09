/**
 * components/ui/ServiceCard.tsx
 * Service card with:
 *   - Number label (01–04)
 *   - Inline SVG icon (mapped by icon prop)
 *   - Title and description
 *   - Hover-reveal "Learn more →" CTA (CSS group-hover)
 *   - Border changes from stroke to ink on hover
 */

"use client";

import type { ServiceCardProps } from "@/lib/types";

/** Minimal monochrome SVG icons — one per service type */
function ServiceIcon({ type }: { type: string }) {
  const iconClass = "w-8 h-8 text-ink";

  switch (type) {
    case "ai":
      return (
        <svg className={iconClass} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Brain/circuit: circle with internal connections */}
          <circle cx="16" cy="16" r="10" />
          <circle cx="13" cy="13" r="2" />
          <circle cx="20" cy="12" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
          <line x1="14.8" y1="12.2" x2="18.5" y2="11.8" />
          <line x1="14" y1="14.8" x2="17" y2="19" />
          <line x1="20" y1="13.5" x2="19" y2="18.5" />
        </svg>
      );
    case "code":
      return (
        <svg className={iconClass} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Code brackets */}
          <polyline points="10,10 5,16 10,22" />
          <polyline points="22,10 27,16 22,22" />
          <line x1="18" y1="8" x2="14" y2="24" />
        </svg>
      );
    case "data":
      return (
        <svg className={iconClass} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Bar chart */}
          <line x1="8" y1="24" x2="8" y2="14" />
          <line x1="14" y1="24" x2="14" y2="8" />
          <line x1="20" y1="24" x2="20" y2="16" />
          <line x1="26" y1="24" x2="26" y2="11" />
          <line x1="4" y1="24" x2="28" y2="24" />
        </svg>
      );
    case "video":
      return (
        <svg className={iconClass} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Play triangle in rounded rect */}
          <rect x="4" y="6" width="24" height="20" rx="3" />
          <polygon points="13,11 22,16 13,21" fill="currentColor" opacity="0.2" stroke="currentColor" />
        </svg>
      );
    default:
      return <div className="w-8 h-8 bg-gray-200 rounded" />;
  }
}

export default function ServiceCard({ item }: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col gap-5 p-7 bg-white border border-stroke rounded-card transition-all duration-250 ease-out hover:border-ink hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] cursor-default">
      {/* Number label */}
      <span className="label-text text-ink-muted">
        {item.number}
      </span>

      {/* Icon */}
      <div className="flex items-center">
        <ServiceIcon type={item.icon} />
      </div>

      {/* Title */}
      <h3 className="text-card-title text-ink font-medium">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-body-sm text-ink-secondary leading-relaxed">
        {item.description}
      </p>

      {/* Hover-reveal CTA — slides up via CSS group-hover */}
      <div className="mt-auto pt-2 overflow-hidden">
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink opacity-0 translate-y-3 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          Learn more
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="8" x2="13" y2="8" />
            <polyline points="9,4 13,8 9,12" />
          </svg>
        </span>
      </div>
    </div>
  );
}
