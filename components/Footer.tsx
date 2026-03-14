"use client";

import Link from "next/link";

const services = [
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Web Design", href: "/services/web-design" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "Reputation Management", href: "/services/reputation" },
];

const locations = [
  { label: "London", href: "/locations/london" },
  { label: "Birmingham", href: "/locations/birmingham" },
  { label: "Manchester", href: "/locations/manchester" },
  { label: "Leeds", href: "/locations/leeds" },
  { label: "Sheffield", href: "/locations/sheffield" },
  { label: "Bristol", href: "/locations/bristol" },
  { label: "Leicester", href: "/locations/leicester" },
  { label: "Nottingham", href: "/locations/nottingham" },
  { label: "Liverpool", href: "/locations/liverpool" },
  { label: "Newcastle", href: "/locations/newcastle" },
  { label: "Cardiff", href: "/locations/cardiff" },
  { label: "Edinburgh", href: "/locations/edinburgh" },
  { label: "Glasgow", href: "/locations/glasgow" },
  { label: "Brighton", href: "/locations/brighton" },
  { label: "Southampton", href: "/locations/southampton" },
  { label: "Coventry", href: "/locations/coventry" },
  { label: "Hull", href: "/locations/hull" },
  { label: "Derby", href: "/locations/derby" },
  { label: "Stoke", href: "/locations/stoke" },
  { label: "Preston", href: "/locations/preston" },
  { label: "Oxford", href: "/locations/oxford" },
];

const industries = [
  { label: "Plumbers", href: "/industries/plumbers" },
  { label: "Dentists", href: "/industries/dentists" },
  { label: "Electricians", href: "/industries/electricians" },
  { label: "Solicitors", href: "/industries/solicitors" },
  { label: "Estate Agents", href: "/industries/estate-agents" },
  { label: "Cleaners", href: "/industries/cleaners" },
  { label: "Builders", href: "/industries/builders" },
  { label: "Landscapers", href: "/industries/landscapers" },
  { label: "Driving Schools", href: "/industries/driving-schools" },
  { label: "Physiotherapists", href: "/industries/physiotherapists" },
  { label: "Locksmiths", href: "/industries/locksmiths" },
  { label: "Accountants", href: "/industries/accountants" },
  { label: "Car Detailing", href: "/industries/car-detailing" },
  { label: "Car Valeting", href: "/industries/car-valeting" },
  { label: "Auto Locksmiths", href: "/industries/auto-locksmiths" },
  { label: "Car Locksmiths", href: "/industries/car-locksmiths" },
  { label: "Home Locksmiths", href: "/industries/home-locksmiths" },
  { label: "Gutter Cleaning", href: "/industries/gutter-cleaning" },
  { label: "Jet Washing", href: "/industries/jet-washing" },
  { label: "Automotive", href: "/industries/automotive" },
];

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "#050A14",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#E2E8F0" }}>
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#8B9CB8" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#E2E8F0" }}>
              Locations
            </h3>
            <ul className="space-y-2">
              {locations.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#8B9CB8" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries - Column 3 */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#E2E8F0" }}>
              Industries (pt1)
            </h3>
            <ul className="space-y-2">
              {industries.slice(0, 10).map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#8B9CB8" }}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries - Column 4 */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#E2E8F0" }}>
              Industries (pt2)
            </h3>
            <ul className="space-y-2">
              {industries.slice(10).map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#8B9CB8" }}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#E2E8F0" }}>
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#8B9CB8" }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#8B9CB8" }}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/free-audit"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#8B9CB8" }}
                >
                  Free Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/local-seo"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#8B9CB8" }}
                >
                  US Local SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#E2E8F0" }}>
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#8B9CB8" }}
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <a
                  href="tel:03474825228"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  style={{ color: "#8B9CB8" }}
                >
                  📞 Call
                </a>
              </li>
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                  style={{ color: "#8B9CB8" }}
                >
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-6">
            {/* Brand Info */}
            <div>
              <div
                className="text-2xl font-extrabold mb-2"
                style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
              >
                SBMP
              </div>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#8B9CB8" }}>
                Expert local digital marketing for UK service businesses. Get more customers, more calls, more revenue.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-white/15"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#E2E8F0" }}>
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-white/15"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#E2E8F0" }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors hover:bg-white/15"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#E2E8F0" }}>
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Partners */}
          <div
            className="py-6"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#E2E8F0" }}>
              Partners
            </h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://anymedia.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-white"
                style={{ color: "#8B9CB8" }}
              >
                anymedia.agency
              </a>
              <a
                href="https://zwmarketing.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-white"
                style={{ color: "#8B9CB8" }}
              >
                zwmarketing.uk
              </a>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm"
            style={{
              paddingTop: "1.5rem",
              color: "#4A5A6E",
            }}
          >
            <div>
              © {new Date().getFullYear()} Small Business Marketing Professional. All rights reserved.
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <span
                className="text-xs px-2 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#4A5A6E" }}
              >
                Trusted by 150+ UK Businesses
              </span>
              <Link
                href="/privacy"
                className="transition-colors hover:text-white"
                style={{ color: "#4A5A6E" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors hover:text-white"
                style={{ color: "#4A5A6E" }}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
