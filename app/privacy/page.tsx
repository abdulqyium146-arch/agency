import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SBMP Local Digital Marketing",
  description:
    "Our privacy policy — how we collect, use, and protect your personal data.",
};

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

export default function PrivacyPage() {
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
            <span style={{ color: "#8B9CB8" }}>Privacy Policy</span>
          </div>
          <h1
            className="gradient-text text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Privacy Policy
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
            At Small Business Marketing Professional (SBMP), we are committed to protecting your personal data and respecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>

          {/* Section 1 */}
          <section className="mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "2.5rem" }}>
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              1. Information We Collect
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
              We collect information you voluntarily provide to us, including:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "Full name — to personalise our communication with you",
                "Email address — to send you audit results and relevant updates",
                "Phone number — to call or WhatsApp you with your audit findings",
                "Business name and type — to research and tailor your free audit",
                "City and location data — to assess your local competition",
                "Any additional information you include in contact forms",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                  <span style={{ color: "#4F8EF7" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "2.5rem" }}>
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              2. How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
              We use your personal information solely to provide the services you request:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "To contact you with your requested free SEO audit",
                "To provide digital marketing services you have engaged us for",
                "To send relevant updates about your campaigns or rankings",
                "To answer your enquiries and provide customer support",
                "To improve our services based on feedback and interactions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                  <span style={{ color: "#4F8EF7" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm mt-4" style={{ color: "#8B9CB8" }}>
              We will never sell your information to third parties, use it for unrelated marketing, or share it with anyone outside of our business without your explicit consent.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "2.5rem" }}>
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              3. Data Protection
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
              We are committed to GDPR compliance and take data protection seriously:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "Your data is stored securely using industry-standard encryption",
                "We never sell, rent, or trade your personal information",
                "Data is retained only as long as necessary to provide our services",
                "You have the right to access, correct, or delete your personal data at any time",
                "You can withdraw consent for marketing communications at any time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                  <span style={{ color: "#22C55E" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "2.5rem" }}>
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              4. Cookies
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
              Our website uses cookies to improve your browsing experience:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "Essential cookies — required for the website to function correctly",
                "Analytics cookies — help us understand how visitors use our site (Google Analytics)",
                "Preference cookies — remember your settings and preferences",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                  <span style={{ color: "#4F8EF7" }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm mt-4" style={{ color: "#8B9CB8" }}>
              You can control cookies through your browser settings. Disabling cookies may affect some website functionality.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2
              className="text-2xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              5. Contact Us
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
              For any data protection queries, to exercise your rights, or to request deletion of your data:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:03474825228"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "rgba(79,142,247,0.10)", color: "#4F8EF7", border: "1px solid rgba(79,142,247,0.25)" }}
              >
                📞 03474825228
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#22C55E" }}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </section>

          {/* Back link */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} className="pt-8 mt-4">
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
