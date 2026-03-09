import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

const plans = [
  {
    name: "Starter",
    price: "£199",
    period: "/month",
    badge: "Best for New Businesses",
    badgeColor: "#FBBF24",
    badgeBg: "rgba(251,191,36,0.10)",
    popular: false,
    features: [
      "Google Business Profile Setup & Optimisation",
      "Local SEO Fundamentals (10 keywords)",
      "Monthly Ranking Report",
      "1x Citation Building Campaign",
      "WhatsApp Support",
    ],
    ctaText: "Get Started →",
    ctaStyle: "outline",
    href: "/free-audit",
  },
  {
    name: "Growth",
    price: "£399",
    period: "/month",
    badge: "Most Popular",
    badgeColor: "#FB923C",
    badgeBg: "rgba(251,146,60,0.10)",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced Local SEO (25 keywords)",
      "Google Ads Management (up to £500 ad spend)",
      "Social Media Management (Facebook + Instagram — 3 posts/week)",
      "Conversion-Optimised Landing Page",
      "Weekly Ranking Reports",
      "Priority WhatsApp Support",
    ],
    ctaText: "Get Started →",
    ctaStyle: "solid",
    href: "/free-audit",
  },
  {
    name: "Pro",
    price: "£699",
    period: "/month",
    badge: "Best Results",
    badgeColor: "#4F8EF7",
    badgeBg: "rgba(79,142,247,0.10)",
    popular: false,
    features: [
      "Everything in Growth",
      "New Website OR Full Redesign",
      "Monthly Strategy Call (1 hour)",
      "Reputation Management",
      "50 Keywords Targeted",
      "Video content creation (1/month)",
      "Dedicated Account Dashboard",
    ],
    ctaText: "Let's Talk →",
    ctaStyle: "outline",
    href: "/free-audit",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" style={{ backgroundColor: "#080D1A" }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            Simple, Honest Pricing — No Hidden Fees
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8B9CB8" }}>
            Affordable plans built for small businesses, not big corporations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl p-8 flex flex-col relative overflow-hidden"
              style={{
                backgroundColor: "#111E33",
                border: plan.popular
                  ? "1px solid rgba(79,142,247,0.40)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: plan.popular
                  ? "0 0 40px rgba(79,142,247,0.12)"
                  : "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              {/* Badge */}
              <div className="mb-4">
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: plan.badgeBg,
                    color: plan.badgeColor,
                    border: `1px solid ${plan.badgeColor}40`,
                  }}
                >
                  {plan.badge}
                </span>
              </div>

              {/* Plan name */}
              <h3
                className="text-xl font-bold mb-1"
                style={{ color: "#E2E8F0" }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span
                  className="text-5xl font-extrabold"
                  style={{
                    fontFamily: "var(--font-display, sans-serif)",
                    color: "#FFFFFF",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#8B9CB8" }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="text-sm mt-0.5" style={{ color: "#22C55E" }}>✅</span>
                    <span
                      className="text-sm leading-snug"
                      style={{ color: "#8B9CB8" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className="w-full flex items-center justify-center py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={
                  plan.ctaStyle === "solid"
                    ? { backgroundColor: "#4F8EF7", color: "#FFFFFF" }
                    : {
                        border: "2px solid #4F8EF7",
                        color: "#4F8EF7",
                        backgroundColor: "transparent",
                      }
                }
              >
                {plan.ctaText}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center p-8 rounded-2xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p className="text-base font-medium mb-4" style={{ color: "#8B9CB8" }}>
            💬 Not sure which plan is right for you? WhatsApp me and I&apos;ll tell you honestly what your business needs.
          </p>
          <WhatsAppButton variant="inline" />
        </div>
      </div>
    </section>
  );
}
