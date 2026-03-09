import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | SBMP Local Digital Marketing",
  description:
    "Terms of service for Small Business Marketing Professional — your local digital marketing expert.",
};

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }} className="min-h-screen">
      {/* Header strip */}
      <div
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.15) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-14 md:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "#4A5A6E" }}>
            <Link href="/" className="transition-colors hover:text-white" style={{ color: "#4A5A6E" }}>Home</Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Terms of Service</span>
          </div>
          <h1
            className="gradient-text text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Terms of Service
          </h1>
          <p style={{ color: "#4A5A6E" }}>Last updated: March 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="rounded-2xl p-8 md:p-12"
          style={{
            backgroundColor: "#111E33",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
          }}
        >
          {/* Intro */}
          <p className="text-base leading-relaxed mb-10" style={{ color: "#8B9CB8" }}>
            These Terms of Service govern your use of services provided by Small Business Marketing Professional (SBMP). By engaging our services, you agree to these terms. Please read them carefully.
          </p>

          {/* Section 1 */}
          <section className="mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "2.5rem" }}>
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              1. Services
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
              SBMP provides local digital marketing services to UK businesses, including but not limited to:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "Local SEO — Google Business Profile optimisation, citation building, and ranking campaigns",
                "Google Ads & PPC — campaign setup, management, and ongoing optimisation",
                "Website design and development — building professional, conversion-focused websites",
                "Social media management — Facebook and Instagram content and community management",
                "Reputation management — Google review generation and online reputation monitoring",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                  <span style={{ color: "#4F8EF7" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm mt-4" style={{ color: "#8B9CB8" }}>
              Services are provided as described in the agreed service package at time of engagement. SBMP reserves the right to update service offerings; clients will be notified of material changes.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "2.5rem" }}>
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              2. Payment Terms
            </h2>
            <ul className="space-y-3 ml-4">
              {[
                "Monthly retainer services are billed in advance at the start of each month",
                "Payment is due within 7 days of invoice date",
                "Late payments may result in a temporary pause of services",
                "To cancel a monthly retainer, 30 days written notice is required (via WhatsApp or email)",
                "One-time project fees (e.g. website design) are 50% upfront, 50% on completion",
                "All prices are quoted in GBP and are exclusive of VAT unless stated otherwise",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                  <span style={{ color: "#4F8EF7" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "2.5rem" }}>
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              3. Results & the 90-Day Guarantee
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
              SBMP uses proven, ethical digital marketing strategies and works diligently to achieve the best possible results for every client. However:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              {[
                "SEO and digital marketing results are provided on a best-efforts basis",
                "Google search rankings are influenced by many factors outside our direct control",
                "No guarantees of specific ranking positions can be made except as stated below",
                "Results timelines are estimates based on typical client outcomes and may vary",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                  <span style={{ color: "#8B9CB8" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div
              className="p-5 rounded-xl"
              style={{ backgroundColor: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.20)" }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: "#22C55E" }}>
                🏆 90-Day Results Guarantee
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                Where a 90-day guarantee is explicitly stated in your service agreement, if you do not see measurable improvement in your local search visibility within 90 days of campaign launch, you will receive a full refund of your first month&apos;s fee. Specific terms of any guarantee will be detailed in your individual service agreement.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "2.5rem" }}>
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              4. Intellectual Property
            </h2>
            <ul className="space-y-2 ml-4">
              {[
                "All content, copy, and media you provide remains your intellectual property",
                "Websites, content, and assets created by SBMP for your business become your property upon final payment",
                "SBMP retains the right to showcase work completed for clients as portfolio examples and case studies, unless you explicitly opt out in writing",
                "SBMP's own branding, methodology documents, and proprietary processes remain the property of SBMP",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                  <span style={{ color: "#4F8EF7" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "2.5rem" }}>
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              5. Limitation of Liability
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
              To the maximum extent permitted by law:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "SBMP's total liability to any client shall not exceed the total fees paid in the preceding 3 months",
                "SBMP is not liable for indirect, consequential, or incidental losses arising from service use",
                "SBMP is not responsible for changes to Google's algorithm, policies, or ranking systems that affect results",
                "SBMP is not liable for any third-party platform downtime, policy changes, or account suspensions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                  <span style={{ color: "#8B9CB8" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              6. Governing Law
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#8B9CB8" }}>
              These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          {/* Questions */}
          <div
            className="p-6 rounded-xl mb-8"
            style={{ backgroundColor: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.20)" }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: "#E2E8F0" }}>
              Questions about these terms?
            </p>
            <p className="text-sm mb-4" style={{ color: "#8B9CB8" }}>
              Get in touch and we&apos;ll be happy to clarify anything.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:03474825228"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm"
                style={{ backgroundColor: "rgba(79,142,247,0.10)", color: "#4F8EF7", border: "1px solid rgba(79,142,247,0.25)" }}
              >
                📞 03474825228
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-white text-sm"
                style={{ backgroundColor: "#22C55E" }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Back link */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
              style={{ color: "#4F8EF7" }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
