import type { Metadata } from "next";
import Link from "next/link";
import { pricingPlans } from "@/lib/data";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

export const metadata: Metadata = {
  title: "Pricing | Affordable Digital Marketing for UK Service Businesses",
  description:
    "Transparent, affordable pricing starting from £149/month. No hidden fees, no long-term contracts. Choose the plan that fits your business.",
  keywords: [
    "pricing",
    "digital marketing cost",
    "affordable marketing",
    "service business pricing",
    "SEO pricing",
    "marketing packages",
  ],
  alternates: {
    canonical: `${BASE_URL}/pricing`,
  },
  openGraph: {
    title: "Pricing | SBMP Digital Marketing",
    description: "Affordable digital marketing plans starting from £149/month. No contracts.",
    url: `${BASE_URL}/pricing`,
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      {/* Hero */}
      <section
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.18) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: "#8B9CB8" }}>
              No hidden fees. No long-term contracts. Cancel anytime. Choose the plan that fits your business.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-7 flex flex-col transition-all hover:-translate-y-1 card-hover-blue"
                style={{
                  backgroundColor: "#111E33",
                  border: plan.badge
                    ? `2px solid rgba(34,197,94,0.40)`
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: plan.badge
                    ? "0 0 40px rgba(34,197,94,0.08)"
                    : "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                {plan.badge && (
                  <div
                    className="text-xs font-semibold px-3 py-1 rounded-full text-center mb-4 w-fit mx-auto"
                    style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.30)" }}
                  >
                    {plan.badge}
                  </div>
                )}
                <div className="text-lg font-bold mb-2" style={{ color: "#E2E8F0" }}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-5">
                  <span
                    className="text-3xl font-extrabold"
                    style={{ fontFamily: "var(--font-display, sans-serif)", color: plan.color }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "#8B9CB8" }}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                      <span style={{ color: "#22C55E" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-audit"
                  className="w-full flex justify-center py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: plan.badge ? "rgba(34,197,94,0.15)" : "rgba(79,142,247,0.10)",
                    color: plan.badge ? "#22C55E" : "#4F8EF7",
                    border: plan.badge ? "1px solid rgba(34,197,94,0.30)" : "1px solid rgba(79,142,247,0.20)",
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Additional Info */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold text-center mb-12"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            What's Included?
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#E2E8F0" }}>
                ✅ No Long-Term Contracts
              </h3>
              <p style={{ color: "#8B9CB8" }}>
                Month-to-month billing. Cancel anytime if you're not happy with results.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#E2E8F0" }}>
                ✅ Full Transparency
              </h3>
              <p style={{ color: "#8B9CB8" }}>
                No hidden fees. No surprise charges. You know exactly what you're paying for.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#E2E8F0" }}>
                ✅ Proven Results
              </h3>
              <p style={{ color: "#8B9CB8" }}>
                Results in 30–90 days guaranteed. I've ranked 150+ UK businesses on page 1 of Google.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#E2E8F0" }}>
                ✅ Direct Support
              </h3>
              <p style={{ color: "#8B9CB8" }}>
                You work directly with me, not a junior team member. Your success is my priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24"
        style={{
          background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,142,247,0.10) 0%, #080D1A 70%)",
          borderTop: "1px solid rgba(79,142,247,0.20)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="gradient-text text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Get a free audit worth £299 to see which plan is right for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get FREE Audit →
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#22C55E" }}
            >
              💬 WhatsApp Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
