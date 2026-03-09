import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

interface ServiceData {
  title: string;
  icon: string;
  tagline: string;
  description: string;
  benefits: string[];
  results: string;
  price: string;
}

const services: Record<string, ServiceData> = {
  "local-seo": {
    title: "Local SEO & Google Rankings",
    icon: "📍",
    tagline:
      "Get your business to page 1 of Google when local customers search for your services.",
    description:
      "Local SEO is the single most powerful long-term strategy for UK service businesses. When someone in your area searches for 'plumber near me' or 'best dentist in Manchester', you want to be at the top. I use proven local SEO methods developed over 20 years to get you there — and keep you there.",
    benefits: [
      "Google Business Profile full optimisation",
      "Maps 3-pack ranking strategy",
      "Local citation building & cleanup",
      "Geo-targeted keyword content",
      "Competitor analysis & gap strategy",
      "Monthly ranking reports",
    ],
    results:
      "Most clients see ranking movement within 30–60 days, with strong page-1 positions by month 3.",
    price: "From £199/month",
  },
  "google-ads": {
    title: "Google Ads & PPC Management",
    icon: "🎯",
    tagline:
      "Instant page-1 visibility with ROI-tracked campaigns that bring in ready-to-buy customers.",
    description:
      "Google Ads done right can deliver immediate results while your SEO builds. Done wrong, it's an expensive lesson. I've managed Google Ads campaigns for UK service businesses since 2004 — I know how to eliminate wasted spend and maximise your return on every pound.",
    benefits: [
      "Instant page-1 Google visibility",
      "Zero wasted ad spend",
      "Negative keyword management",
      "Ad copy split testing",
      "Conversion tracking setup",
      "Weekly performance reports",
    ],
    results: "Most clients see leads within the first week of campaigns going live.",
    price: "From £299/month + ad spend",
  },
  "web-design": {
    title: "High-Converting Website Design",
    icon: "💻",
    tagline:
      "Professional websites built to turn visitors into paying customers — fast, mobile-first, SEO-ready.",
    description:
      "Your website is your 24/7 salesperson. It needs to load fast, look professional on every device, and be built with SEO baked in from the ground up. I build websites for UK service businesses that generate real enquiries — not just pretty pages that nobody finds.",
    benefits: [
      "Mobile-first responsive design",
      "Sub-2 second load speed",
      "SEO architecture built-in",
      "Lead capture & contact forms",
      "Google Analytics setup",
      "Hosted on your own domain",
    ],
    results:
      "New websites typically see a 40–80% improvement in enquiry rates within the first month.",
    price: "From £799 one-time or included in Pro plan",
  },
  "social-media": {
    title: "Social Media Marketing",
    icon: "📱",
    tagline:
      "Build a loyal local following that brings you consistent new customers every month.",
    description:
      "Social media for service businesses isn't about going viral. It's about building trust with your local community, showcasing your work, and staying top of mind when someone needs your services. I manage Facebook and Instagram for UK service businesses — consistently, professionally, and with results you can measure.",
    benefits: [
      "Facebook & Instagram management",
      "3+ posts per week minimum",
      "Local audience targeting",
      "Review & reputation content",
      "Story and reel creation",
      "Monthly engagement reports",
    ],
    results:
      "Consistent social media management typically leads to 20–40% more local brand recognition within 90 days.",
    price: "From £249/month",
  },
  reputation: {
    title: "Reputation Management",
    icon: "⭐",
    tagline:
      "Build, protect, and grow your online reputation to win more trust and more customers.",
    description:
      "In today's world, your online reviews are your most powerful sales tool. A business with 50 five-star reviews will win over a business with 5 — every single time. I help UK service businesses build a strong review profile ethically, respond to all feedback professionally, and amplify their trust signals across the web.",
    benefits: [
      "Google review generation campaigns",
      "Review response management",
      "Brand monitoring & alerts",
      "Trust signal amplification",
      "Negative review strategy",
      "Trustpilot & industry review sites",
    ],
    results: "Most clients double their Google review count within 60 days.",
    price: "From £149/month or included in Growth/Pro plans",
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: `${service.title} for UK Service Businesses`,
    description: `${service.tagline} Expert UK local digital marketing since 2004. ${service.price}.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

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
            {/* Icon */}
            <div className="text-6xl mb-6">{service.icon}</div>

            {/* Price badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.3)" }}
            >
              💰 {service.price}
            </div>

            {/* Title */}
            <h1
              className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              {service.title}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: "#8B9CB8" }}>
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT: Description + Benefits */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-extrabold mb-5"
                style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
              >
                How It Works
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#8B9CB8" }}>
                {service.description}
              </p>

              <h3
                className="text-xl font-bold mb-5"
                style={{ color: "#E2E8F0" }}
              >
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-0.5"
                      style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22C55E" }}
                    >
                      ✓
                    </span>
                    <span className="text-base" style={{ color: "#E2E8F0" }}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Results card */}
            <div>
              <div
                className="rounded-2xl p-8 sticky top-8"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                {/* Typical results */}
                <div
                  className="flex items-center gap-3 mb-6 p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.20)" }}
                >
                  <span className="text-2xl">📈</span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#22C55E" }}>
                      Typical Results
                    </div>
                    <p className="text-sm font-medium" style={{ color: "#E2E8F0" }}>
                      {service.results}
                    </p>
                  </div>
                </div>

                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
                >
                  Expected Timeline
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-16 text-xs font-semibold" style={{ color: "#4F8EF7" }}>Week 1–2</div>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                      <div className="h-full rounded-full w-1/4" style={{ backgroundColor: "#4F8EF7" }} />
                    </div>
                    <div className="text-xs" style={{ color: "#8B9CB8" }}>Setup & audit</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-16 text-xs font-semibold" style={{ color: "#4F8EF7" }}>Month 1</div>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                      <div className="h-full rounded-full w-2/4" style={{ backgroundColor: "#4F8EF7" }} />
                    </div>
                    <div className="text-xs" style={{ color: "#8B9CB8" }}>Early movement</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-16 text-xs font-semibold" style={{ color: "#22C55E" }}>Month 3</div>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                      <div className="h-full rounded-full w-4/5" style={{ backgroundColor: "#22C55E" }} />
                    </div>
                    <div className="text-xs" style={{ color: "#8B9CB8" }}>Strong results</div>
                  </div>
                </div>

                {/* Price */}
                <div
                  className="text-center py-4 px-6 rounded-xl mb-6"
                  style={{ backgroundColor: "rgba(79,142,247,0.10)", border: "1px solid rgba(79,142,247,0.20)" }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#4F8EF7" }}>
                    Investment
                  </div>
                  <div
                    className="text-2xl font-extrabold"
                    style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
                  >
                    {service.price}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#8B9CB8" }}>
                    No long-term contracts. Cancel anytime.
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="space-y-3">
                  <Link
                    href="/free-audit"
                    className="w-full flex justify-center items-center py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: "#4F8EF7" }}
                  >
                    Get Free Audit →
                  </Link>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center gap-2 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ backgroundColor: "#22C55E" }}
                  >
                    💬 WhatsApp Me
                  </a>
                </div>

                <p className="text-center text-xs mt-4" style={{ color: "#4A5A6E" }}>
                  🔒 No obligation · Free audit worth £299
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
            Ready to dominate Google for {service.title}?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Start with a completely free audit — no obligation, no hard sell.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get My FREE Audit →
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#22C55E" }}
            >
              💬 WhatsApp Me Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
