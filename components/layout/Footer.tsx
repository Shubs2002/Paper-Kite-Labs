/**
 * components/layout/Footer.tsx
 * Clean three-column footer:
 *   - Logo + tagline
 *   - Nav links
 *   - Contact info
 *   - Bottom row: copyright + tagline
 */

import Link from "next/link";
import {
  SITE_NAME,
  SITE_TAGLINE,
  FOOTER_NAV,
  CONTACT_INFO,
} from "@/lib/constants";

/** Minimal kite logo — matches navbar but smaller */
function KiteLogoSmall() {
  return (
    <svg
      width={16}
      height={21}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="text-ink"
    >
      <path d="M12 1 L22 13 L12 30 Z" fill="currentColor" opacity="0.85" />
      <path d="M12 1 L3 14 L12 30 Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-stroke bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <KiteLogoSmall />
              <span className="text-[14px] font-medium text-ink tracking-[-0.01em]">
                {SITE_NAME}
              </span>
            </div>
            <p className="text-body-sm text-ink-secondary max-w-[260px]">
              We build intelligent systems for modern businesses.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <span className="label-text text-ink-muted">
              Navigation
            </span>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {FOOTER_NAV.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] font-light text-ink-secondary hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <span className="label-text text-ink-muted">
              Contact
            </span>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[14px] font-light text-ink-secondary hover:text-ink transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-[14px] font-light text-ink-secondary hover:text-ink transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://${CONTACT_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-light text-ink-secondary hover:text-ink transition-colors"
                >
                  {CONTACT_INFO.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-stroke flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-ink-muted">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-[12px] text-ink-muted">
            {SITE_TAGLINE}
          </p>
        </div>
      </div>
    </footer>
  );
}
