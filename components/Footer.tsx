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
  { label: "Birmingham", href: "/locations/birmingham" },
  { label: "Manchester", href: "/locations/manchester" },
  { label: "Leeds", href: "/locations/leeds" },
  { label: "Bristol", href: "/locations/bristol" },
  { label: "Sheffield", href: "/locations/sheffield" },
  { label: "Leicester", href: "/locations/leicester" },
];

const industries = [
  { label: "Plumbers", href: "/industries/plumbers" },
  { label: "Dentists", href: "/industries/dentists" },
  { label: "Solicitors", href: "/industries/solicitors" },
  { label: "Electricians", href: "/industries/electricians" },
  { label: "Estate Agents", href: "/industries/estate-agents" },
  { label: "Cleaners", href: "/industries/cleaners" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div
              className="text-3xl font-extrabold mb-1"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              SBMP
            </div>
            <div className="text-sm mb-4" style={{ color: "#8B9CB8" }}>
              Local Digital Marketing
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#8B9CB8" }}>
              Expert local digital marketing for UK service businesses. Get more customers, more calls, more revenue.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

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

          {/* Industries + Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#E2E8F0" }}>
              Industries
            </h3>
            <ul className="space-y-2 mb-6">
              {industries.map((i) => (
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

            <h3 className="font-semibold text-sm uppercase tracking-wider mb-3" style={{ color: "#E2E8F0" }}>
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href="tel:03474825228"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "#8B9CB8" }}
              >
                📞 03474825228
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                style={{ color: "#8B9CB8" }}
              >
                💬 WhatsApp Me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "rgba(255,255,255,0.00)",
            color: "#4A5A6E",
          }}
        >
          <div>
            © {new Date().getFullYear()} Small Business Marketing Professional. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span
              className="text-xs px-2 py-1 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#4A5A6E" }}
            >
              Trusted by 150+ UK Businesses
            </span>
            <Link
              href="/privacy"
              className="transition-colors hover:text-muted"
              style={{ color: "#4A5A6E" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#8B9CB8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#4A5A6E"; }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors"
              style={{ color: "#4A5A6E" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#8B9CB8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#4A5A6E"; }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
