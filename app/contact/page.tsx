import type { Metadata } from "next";
import Link from "next/link";
import { generateContactPointSchema, generateBreadcrumbSchema } from "@/lib/schemas";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const CONTACT_EMAIL = "smallbusinessmarketing844@gmail.com";

export const metadata: Metadata = {
  title: "Contact | Get Your Free SEO Audit Today",
  description:
    "Email us at smallbusinessmarketing844@gmail.com. Free SEO audit worth £299 — no obligation, no hard sell. We help UK service businesses rank on page 1 of Google.",
  keywords: ["contact SBMP", "free SEO audit", "UK digital marketing", "local SEO help"],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact | Get Your Free SEO Audit Today",
    description:
      "Email us at smallbusinessmarketing844@gmail.com. Free SEO audit worth £299, no obligation.",
    url: `${BASE_URL}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact | Get Your Free SEO Audit Today",
    description: "Email us for a free SEO audit. No obligation, no hard sell.",
  },
};

export default function ContactPage() {
  const contactPointSchema = generateContactPointSchema(
    "Customer Service",
    undefined,
    CONTACT_EMAIL
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Contact" },
  ]);

  return (
    <div style={{ backgroundColor: "#080D1A" }} className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([contactPointSchema, breadcrumbSchema]) }}
      />

      {/* Hero */}
      <div
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.18) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-14 md:py-20"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-5"
            style={{
              backgroundColor: "rgba(79,142,247,0.15)",
              border: "1px solid rgba(79,142,247,0.3)",
            }}
          >
            ⚡ Usually responds within 2 hours
          </div>
          <h1
            className="gradient-text text-4xl sm:text-5xl font-extrabold"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Get in Touch
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            No hard sell, no jargon — just an honest conversation about growing your business.
          </p>
        </div>
      </div>

      {/* Email contact section */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Email card */}
        <div
          className="rounded-2xl p-8 flex gap-6"
          style={{
            backgroundColor: "#111E33",
            border: "1px solid rgba(79,142,247,0.25)",
            borderLeft: "4px solid #4F8EF7",
            boxShadow: "0 4px 32px rgba(0,0,0,0.35)",
          }}
        >
          <div className="text-4xl flex-shrink-0">✉️</div>
          <div className="flex-1">
            <h2
              className="text-xl font-extrabold mb-2"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Email Us Directly
            </h2>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "#8B9CB8" }}>
              Send us a message and we&apos;ll get back to you within 2 hours during business hours.
              Tell us about your business and what you&apos;d like to achieve.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              {CONTACT_EMAIL} →
            </a>
          </div>
        </div>

        {/* Response time */}
        <div
          className="mt-6 rounded-2xl p-6 flex gap-5"
          style={{
            backgroundColor: "#111E33",
            border: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "4px solid #FBBF24",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          <div className="text-3xl flex-shrink-0">⚡</div>
          <div className="flex-1">
            <h3
              className="text-base font-bold mb-3"
              style={{ color: "#E2E8F0" }}
            >
              What to Expect
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: "#8B9CB8" }}>
              <li className="flex items-start gap-2">
                <span style={{ color: "#22C55E" }}>✓</span>
                <span>
                  <strong style={{ color: "#E2E8F0" }}>Response time:</strong> Within 2 hours Mon–Fri, same day Sat
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#22C55E" }}>✓</span>
                <span>
                  <strong style={{ color: "#E2E8F0" }}>Free audit:</strong> We&apos;ll review your online presence and send a personalised report
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: "#22C55E" }}>✓</span>
                <span>
                  <strong style={{ color: "#E2E8F0" }}>No obligation:</strong> Honest advice on what your business needs — no pressure to sign up
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Privacy note */}
        <div
          className="mt-6 flex items-center gap-3 px-5 py-3.5 rounded-xl"
          style={{
            backgroundColor: "rgba(79,142,247,0.08)",
            border: "1px solid rgba(79,142,247,0.20)",
          }}
        >
          <span className="text-lg">🔒</span>
          <p className="text-sm font-medium" style={{ color: "#4F8EF7" }}>
            Your details are safe. We never share or spam.
          </p>
        </div>

        {/* Free audit CTA */}
        <div
          className="mt-10 rounded-2xl p-7 text-center"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(79,142,247,0.10) 0%, transparent 70%)",
            border: "1px solid rgba(79,142,247,0.20)",
          }}
        >
          <h3
            className="text-xl font-extrabold mb-3"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Want a Free Audit First?
          </h3>
          <p className="text-sm mb-5" style={{ color: "#8B9CB8" }}>
            Fill out our free audit form and we&apos;ll send a personalised review of your Google
            Business Profile, rankings, and competitor analysis — worth £299, completely free.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center px-7 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: "#4F8EF7" }}
          >
            Get My FREE Audit →
          </Link>
        </div>
      </div>
    </div>
  );
}
