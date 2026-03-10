import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { generateContactPointSchema, generateBreadcrumbSchema } from "@/lib/schemas";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

export const metadata: Metadata = {
  title: "Contact | Get Your Free SEO Audit Today",
  description:
    "Get a free SEO audit worth £299. No obligation, no hard sell. Chat with us via WhatsApp or fill out the contact form. We're here to help UK service businesses grow.",
  keywords: ["contact SBMP", "free SEO audit", "UK digital marketing", "local SEO help"],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact | Get Your Free SEO Audit Today",
    description:
      "Get a free SEO audit worth £299. No obligation, no hard sell. Chat with us via WhatsApp or fill out the contact form.",
    url: `${BASE_URL}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact | Get Your Free SEO Audit Today",
    description: "Get a free SEO audit. No obligation, no hard sell.",
  },
};

export default function ContactPage() {
  const contactPointSchema = generateContactPointSchema();
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
      {/* Hero strip */}
      <div
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.18) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-14 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-5"
            style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}
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

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: Contact info */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Let&apos;s Talk About Growing Your Business
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#8B9CB8" }}>
              No hard sell, no jargon. Just an honest conversation about what your business needs and what&apos;s realistic.
            </p>

            <div className="space-y-5">
              {/* WhatsApp card */}
              <div
                className="rounded-2xl p-6 flex gap-5"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "4px solid #22C55E",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div className="text-3xl flex-shrink-0">💬</div>
                <div className="flex-1">
                  <h3
                    className="text-base font-bold mb-1"
                    style={{ color: "#E2E8F0" }}
                  >
                    WhatsApp Me Directly
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "#8B9CB8" }}>
                    Most popular — I usually reply within minutes during business hours.
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ backgroundColor: "#22C55E" }}
                  >
                    Open WhatsApp →
                  </a>
                </div>
              </div>

              {/* Phone card */}
              <div
                className="rounded-2xl p-6 flex gap-5"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "4px solid #4F8EF7",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div className="text-3xl flex-shrink-0">📞</div>
                <div className="flex-1">
                  <h3
                    className="text-base font-bold mb-1"
                    style={{ color: "#E2E8F0" }}
                  >
                    Call Me
                  </h3>
                  <p className="text-lg font-semibold mb-1" style={{ color: "#E2E8F0" }}>
                    03474825228
                  </p>
                  <p className="text-sm mb-4" style={{ color: "#8B9CB8" }}>
                    Mon–Fri: 9am–6pm &nbsp;|&nbsp; Sat: 10am–2pm
                  </p>
                  <a
                    href="tel:03474825228"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ backgroundColor: "#4F8EF7" }}
                  >
                    Call Now →
                  </a>
                </div>
              </div>

              {/* Response time card */}
              <div
                className="rounded-2xl p-6 flex gap-5"
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
                    Response Time
                  </h3>
                  <ul className="space-y-1.5 text-sm" style={{ color: "#8B9CB8" }}>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#22C55E" }}>✓</span>
                      <span><strong style={{ color: "#E2E8F0" }}>WhatsApp:</strong> Usually within minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#22C55E" }}>✓</span>
                      <span><strong style={{ color: "#E2E8F0" }}>Form submissions:</strong> Within 2 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#22C55E" }}>✓</span>
                      <span><strong style={{ color: "#E2E8F0" }}>Phone:</strong> Mon–Sat during business hours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Trust row */}
            <div
              className="mt-8 flex items-center gap-3 px-5 py-3.5 rounded-xl"
              style={{ backgroundColor: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.20)" }}
            >
              <span className="text-lg">🔒</span>
              <p className="text-sm font-medium" style={{ color: "#4F8EF7" }}>
                Your details are safe. We never share or spam.
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
