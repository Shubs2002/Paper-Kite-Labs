/**
 * app/contact/page.tsx
 * /contact — Contact page with:
 *   - Large left-aligned header
 *   - Clean form (name, email, company, message)
 *   - Contact info sidebar
 *   - Server component — form action stubbed for Phase 3
 */

import type { Metadata } from "next";
import { CONTACT_PAGE, CONTACT_INFO, SITE_NAME } from "@/lib/constants";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Paperkite Labs to discuss your project. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white">

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-12 border-b border-stroke">
        <h1 className="text-heading-sm sm:text-heading lg:text-display-sm font-bold tracking-[-0.03em] text-ink mb-4">
          {CONTACT_PAGE.headline}
        </h1>
        <p className="text-body text-ink-secondary font-light max-w-xl">
          {CONTACT_PAGE.subheadline}
        </p>
      </div>

      {/* Content: form + sidebar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-section-sm lg:py-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">

          {/* Contact form — 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <form
              className="flex flex-col gap-7"
              aria-label="Contact form"
              action="#"
              method="POST"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="label-text text-ink-secondary"
                >
                  {CONTACT_PAGE.formLabels.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  className="w-full border-b border-stroke bg-transparent px-0 py-3 text-[16px] font-light text-ink placeholder-ink-muted/50 focus:outline-none focus:border-ink transition-colors duration-200"
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="label-text text-ink-secondary"
                >
                  {CONTACT_PAGE.formLabels.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  className="w-full border-b border-stroke bg-transparent px-0 py-3 text-[16px] font-light text-ink placeholder-ink-muted/50 focus:outline-none focus:border-ink transition-colors duration-200"
                  autoComplete="email"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-company"
                  className="label-text text-ink-secondary"
                >
                  {CONTACT_PAGE.formLabels.company}
                </label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  placeholder="Acme Corp"
                  className="w-full border-b border-stroke bg-transparent px-0 py-3 text-[16px] font-light text-ink placeholder-ink-muted/50 focus:outline-none focus:border-ink transition-colors duration-200"
                  autoComplete="organization"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="label-text text-ink-secondary"
                >
                  {CONTACT_PAGE.formLabels.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about the problem you're trying to solve..."
                  className="w-full border-b border-stroke bg-transparent px-0 py-3 text-[16px] font-light text-ink placeholder-ink-muted/50 focus:outline-none focus:border-ink transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button
                  label={CONTACT_PAGE.formLabels.submit}
                  variant="primary"
                  size="lg"
                  type="submit"
                />
              </div>
            </form>
          </div>

          {/* Sidebar — contact info */}
          <div className="flex flex-col gap-10">
            <div>
              <span className="label-text text-ink-muted mb-5 block">
                Contact Details
              </span>

              <ul className="flex flex-col gap-5">
                <li className="flex flex-col gap-1">
                  <span className="label-text text-ink-muted">
                    Email
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-[15px] font-light text-ink hover:text-ink-secondary transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>

                <li className="flex flex-col gap-1">
                  <span className="label-text text-ink-muted">
                    Phone
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-[15px] font-light text-ink hover:text-ink-secondary transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </li>

                <li className="flex flex-col gap-1">
                  <span className="label-text text-ink-muted">
                    Website
                  </span>
                  <a
                    href={`https://${CONTACT_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-light text-ink hover:text-ink-secondary transition-colors"
                  >
                    {CONTACT_INFO.website}
                  </a>
                </li>
              </ul>
            </div>

            {/* Company name block */}
            <div className="border-t border-stroke pt-8">
              <p className="text-[14px] font-medium text-ink">{SITE_NAME}</p>
              <p className="text-[14px] font-light text-ink-muted mt-1.5">
                We respond to all enquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
