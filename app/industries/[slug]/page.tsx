import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, industriesSlugs, pricingPlans, getSingularName } from "@/lib/data";
import { industriesRich } from "@/data/industries-rich";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateAggregateRatingSchema,
  generateFAQSchema,
  generateProfessionalServiceSchema,
} from "@/lib/schemas";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

const plans = pricingPlans;

export async function generateStaticParams() {
  return industriesSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) return {};

  const rich = industriesRich[slug];
  const description = rich
    ? `${rich.tagline} Expert UK digital marketing for ${industry.plural}. Free audit worth £299.`
    : `Expert local digital marketing for UK ${industry.plural}. Get more customers searching '${industry.searchTerm}'. Page 1 results in 30–90 days. Free audit.`;

  return {
    title: `Local SEO & Digital Marketing for ${industry.name} | UK Expert`,
    description,
    keywords: [
      `${industry.name.toLowerCase()} SEO`,
      `${industry.name.toLowerCase()} digital marketing`,
      `local SEO for ${industry.plural.toLowerCase()}`,
      industry.searchTerm,
      `UK ${industry.plural.toLowerCase()}`,
    ],
    alternates: {
      canonical: `${BASE_URL}/industries/${slug}`,
    },
    openGraph: {
      title: `Local SEO & Digital Marketing for ${industry.name} | UK Expert`,
      description,
      url: `${BASE_URL}/industries/${slug}`,
      type: "website",
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) notFound();

  const rich = industriesRich[slug];
  const singularName = getSingularName(industry.name);

  const pageUrl = `${BASE_URL}/industries/${slug}`;
  const serviceTitle = `Local SEO & Digital Marketing for ${industry.name}`;
  const serviceDescription = rich
    ? rich.tagline
    : `Expert local digital marketing for UK ${industry.plural}. Get more customers searching '${industry.searchTerm}'. Page 1 results in 30–90 days.`;

  const faqItems = rich?.faqs ?? [
    {
      question: `How can local SEO help my ${singularName.toLowerCase()} business?`,
      answer: `Local SEO gets your ${singularName.toLowerCase()} business ranking at the top of Google when local customers search '${industry.searchTerm}'. More visibility means more calls, bookings, and revenue — typically within 30–90 days.`,
    },
    {
      question: `How long does it take to rank my ${singularName.toLowerCase()} business on Google?`,
      answer: `Most ${industry.plural} see ranking movement within 30–60 days. Strong page-1 positions typically take 90–120 days depending on local competition.`,
    },
    {
      question: `How much does digital marketing for ${industry.plural} cost?`,
      answer: `Our plans start from £199/month (Starter) through to £599/month (Pro). Most ${industry.plural} invest £349/month for full local SEO and reputation management.`,
    },
    {
      question: `Do you work with small and independent ${industry.plural}?`,
      answer: `Yes. We specialise in helping independent ${industry.plural} compete with larger businesses. Local SEO levels the playing field and we've done it for 150+ UK businesses.`,
    },
    {
      question: `Can you rank my ${singularName.toLowerCase()} on Google Maps?`,
      answer: `Absolutely. Google Maps (3-pack) rankings are our core strength. We optimise your Google Business Profile, build local citations, and manage reviews to push you into the top 3 positions.`,
    },
  ];

  const serviceSchema = generateServiceSchema(serviceTitle, serviceDescription, "£199");
  const professionalServiceSchema = generateProfessionalServiceSchema(
    serviceTitle,
    serviceDescription,
    pageUrl,
    "From £199/month",
    `${industry.name} Digital Marketing`
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Industries", url: `${BASE_URL}/industries` },
    { name: industry.name },
  ]);
  const webPageSchema = generateWebPageSchema(serviceTitle, serviceDescription, pageUrl);
  const ratingSchema = generateAggregateRatingSchema(serviceTitle, 4.9, 150);
  const faqSchema = generateFAQSchema(
    faqItems.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema,
            professionalServiceSchema,
            breadcrumbSchema,
            webPageSchema,
            ratingSchema,
            faqSchema,
          ]),
        }}
      />

      {/* Breadcrumb */}
      <nav
        className="py-3 px-4"
        style={{ backgroundColor: "#0D1627", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm" style={{ color: "#8B9CB8" }}>
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li style={{ color: "#4A5A6E" }}>›</li>
            <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
            <li style={{ color: "#4A5A6E" }}>›</li>
            <li style={{ color: "#E2E8F0" }}>{industry.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.18) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-5">{industry.icon}</div>
          <h1
            className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Local SEO for UK {industry.name}
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#8B9CB8" }}>
            {rich?.tagline ??
              `I help ${industry.plural} across the UK rank #1 on Google, get more calls, and grow revenue.`}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get Free Audit →
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

      {/* Key Facts Bar */}
      {rich?.keyFacts && (
        <section style={{ backgroundColor: "#0D1627", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {rich.keyFacts.map((fact) => (
                <div key={fact.label} className="text-center">
                  <div
                    className="text-2xl sm:text-3xl font-extrabold mb-1"
                    style={{ fontFamily: "var(--font-display, sans-serif)", color: "#4F8EF7" }}
                  >
                    {fact.value}
                  </div>
                  <div className="text-xs sm:text-sm leading-snug" style={{ color: "#8B9CB8" }}>
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Description */}
      {rich?.description && (
        <section className="py-16 md:py-20" style={{ backgroundColor: "#050A14" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl font-extrabold mb-6"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Local SEO for {industry.name}: How It Works
            </h2>
            {rich.description.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed mb-5"
                style={{ color: "#8B9CB8" }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Top Services */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              What We Do for {industry.name}
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              Targeted local SEO built specifically for {industry.plural.toLowerCase()} — not a generic package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(
              rich?.topServices ?? [
                {
                  icon: "🔍",
                  title: "Page 1 Rankings",
                  desc: `When someone searches '${industry.searchTerm}', your business appears at the top.`,
                },
                {
                  icon: "📞",
                  title: "More Local Calls",
                  desc: `Every day off page 1, customers call competitors. We change that within 30–90 days.`,
                },
                {
                  icon: "⭐",
                  title: "Trust & Reviews",
                  desc: `Customers choosing a ${singularName.toLowerCase()} need to trust you. We build that reputation.`,
                },
                {
                  icon: "📍",
                  title: "Google Maps 3-Pack",
                  desc: `We get your business into the top 3 Maps positions for your target area.`,
                },
              ]
            ).map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-7 transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-base font-bold mb-3" style={{ color: "#E2E8F0" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry expertise + stats */}
      <section style={{ backgroundColor: "#050A14" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-5"
                style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
              >
                {industry.name} Knowledge = Better Results
              </h2>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "#8B9CB8" }}>
                I&apos;ve worked with {industry.plural.toLowerCase()} across the UK for years of focused expertise. I
                understand your customer&apos;s search behaviour, your local competition, and exactly
                what it takes to win top Google rankings in your area.
              </p>
              <ul className="space-y-4">
                {[
                  `I know the exact search terms ${industry.plural.toLowerCase()} need to rank for`,
                  `I understand the seasonal demand patterns in your industry`,
                  `I know what your competitors are doing — and how to beat them`,
                  `I've refined strategies specifically for ${industry.plural.toLowerCase()} through focused results`,
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-0.5"
                      style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22C55E" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm" style={{ color: "#8B9CB8" }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{industry.icon}</div>
                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{
                    fontFamily: "var(--font-display, sans-serif)",
                    color: "#4F8EF7",
                    textShadow: "0 0 30px rgba(79,142,247,0.5)",
                  }}
                >
                  150+
                </div>
                <div style={{ color: "#8B9CB8" }}>UK businesses ranked</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "Page 1", label: "In 30–90 days" },
                  { value: "4.9★", label: "Client satisfaction" },
                  { value: "No contract", label: "Cancel anytime" },
                  { value: "Free audit", label: "Worth £299" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div
                      className="text-xl font-extrabold mb-1"
                      style={{
                        fontFamily: "var(--font-display, sans-serif)",
                        color: "#4F8EF7",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs" style={{ color: "#8B9CB8" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Simple, Transparent Pricing
            </h2>
            <p style={{ color: "#8B9CB8" }}>No contracts. No surprises. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-7 flex flex-col transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: "#111E33",
                  border: plan.badge
                    ? "2px solid rgba(34,197,94,0.40)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: plan.badge
                    ? "0 0 40px rgba(34,197,94,0.08)"
                    : "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                {plan.badge && (
                  <div
                    className="text-xs font-semibold px-3 py-1 rounded-full text-center mb-4 w-fit mx-auto"
                    style={{
                      backgroundColor: "rgba(34,197,94,0.12)",
                      color: "#22C55E",
                      border: "1px solid rgba(34,197,94,0.30)",
                    }}
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
                    style={{
                      fontFamily: "var(--font-display, sans-serif)",
                      color: plan.color,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "#8B9CB8" }}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "#8B9CB8" }}
                    >
                      <span style={{ color: "#22C55E" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="w-full flex justify-center py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: plan.badge
                      ? "rgba(34,197,94,0.15)"
                      : "rgba(79,142,247,0.10)",
                    color: plan.badge ? "#22C55E" : "#4F8EF7",
                    border: plan.badge
                      ? "1px solid rgba(34,197,94,0.30)"
                      : "1px solid rgba(79,142,247,0.20)",
                  }}
                >
                  View Full Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-12 text-center"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Questions About SEO for {industry.name}
          </h2>

          <div className="space-y-3">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl overflow-hidden"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <summary
                  className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-semibold text-base select-none"
                  style={{ color: "#E2E8F0" }}
                >
                  <span>{faq.question}</span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform group-open:rotate-45"
                    style={{ backgroundColor: "rgba(79,142,247,0.15)", color: "#4F8EF7" }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#050A14" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm mb-3" style={{ color: "#8B9CB8" }}>
            Combine multiple strategies for maximum results
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/services/local-seo"
              className="text-base font-semibold transition-colors hover:underline"
              style={{ color: "#4F8EF7" }}
            >
              Local SEO Services →
            </Link>
            <Link
              href="/digital-marketing-for-small-business"
              className="text-base font-semibold transition-colors hover:underline"
              style={{ color: "#4F8EF7" }}
            >
              Full Digital Marketing Guide →
            </Link>
            <Link
              href="/pricing"
              className="text-base font-semibold transition-colors hover:underline"
              style={{ color: "#4F8EF7" }}
            >
              View Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,142,247,0.10) 0%, #080D1A 70%)",
          borderTop: "1px solid rgba(79,142,247,0.20)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="gradient-text text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Ready to grow your {singularName.toLowerCase()} business?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Start with a free audit — no obligation, no hard sell. Find out exactly where you stand
            and what it takes to rank in your area.
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
          <p className="text-xs mt-6" style={{ color: "#4A5A6E" }}>
            🔒 Free audit worth £299 · No obligation · No contracts
          </p>
        </div>
      </section>
    </div>
  );
}
