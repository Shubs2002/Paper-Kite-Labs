/**
 * components/layout/Navbar.tsx
 * Sticky navigation bar:
 *   - Logo: inline SVG kite icon + "Paperkite Labs" wordmark (weight 500)
 *   - Nav links with slide-up underline on hover
 *   - "Work" dropdown with AnimatePresence slide-down
 *   - "Talk to Us" pill CTA button
 *   - Scroll-aware bottom border (appears after scroll)
 *   - Mobile hamburger + slide-down menu
 */

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NAV_LINKS, NAV_CTA, SITE_NAME } from "@/lib/constants";
import type { NavLink } from "@/lib/types";
import Button from "@/components/ui/Button";

/** Minimal geometric paper-fold kite SVG — monochrome */
function KiteLogo({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Right fold — darker panel */}
      <path
        d="M12 1 L22 13 L12 30 Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Left fold — lighter panel (depth illusion) */}
      <path
        d="M12 1 L3 14 L12 30 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduce = useReducedMotion();

  // Scroll-aware bottom border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change (link click)
  const closeMobile = () => {
    setMobileMenuOpen(false);
    setWorkDropdownOpen(false);
  };

  return (
    <header
      className={[
        "w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-stroke shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo — SVG kite + wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-ink hover:opacity-80 transition-opacity"
          >
            <KiteLogo size={20} />
            <span className="text-[15px] font-medium tracking-[-0.01em]">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link: NavLink) => {
              if (link.children && link.children.length > 0) {
                return (
                  <div key={link.label} className="relative group">
                    {/* Work trigger — hover on desktop */}
                    <button
                      className="relative flex items-center gap-1.5 py-2 text-[14px] font-normal text-ink-secondary hover:text-ink transition-colors"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {link.label}
                      <svg
                        className="w-3 h-3 mt-px transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>

                      {/* Hover underline */}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-stroke-hover transition-all duration-300 group-hover:w-full" />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="w-52 bg-white border border-stroke rounded-card shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center justify-between px-5 py-3.5 text-[14px] text-ink-secondary hover:text-ink hover:bg-surface-alt transition-colors"
                          >
                            <span>{child.label}</span>
                            <svg className="w-3.5 h-3.5 opacity-40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="4" y1="8" x2="12" y2="8" />
                              <polyline points="9,5 12,8 9,11" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative py-2 text-[14px] font-normal text-ink-secondary hover:text-ink transition-colors group"
                >
                  {link.label}
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-stroke-hover transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button label={NAV_CTA.label} href={NAV_CTA.href} variant="primary" size="sm" />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-ink hover:bg-surface-alt transition-colors"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden border-t border-stroke bg-white overflow-hidden"
            initial={shouldReduce ? { height: "auto" } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduce ? { height: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link: NavLink) => {
                if (link.children && link.children.length > 0) {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setWorkDropdownOpen((prev) => !prev)}
                        className="flex items-center justify-between w-full py-3 text-[15px] font-normal text-ink-secondary hover:text-ink transition-colors"
                        aria-expanded={workDropdownOpen}
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            workDropdownOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {workDropdownOpen && (
                          <motion.div
                            className="pl-4 flex flex-col gap-0.5 overflow-hidden"
                            initial={shouldReduce ? {} : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={shouldReduce ? {} : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="py-2.5 text-[14px] text-ink-secondary hover:text-ink transition-colors"
                                onClick={closeMobile}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="py-3 text-[15px] font-normal text-ink-secondary hover:text-ink transition-colors"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-4 mt-3 border-t border-stroke">
                <Button label={NAV_CTA.label} href={NAV_CTA.href} variant="primary" className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
