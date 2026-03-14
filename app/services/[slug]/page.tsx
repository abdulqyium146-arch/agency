import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, servicesSlugs, industriesSlugs } from "@/lib/data";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema, generateAggregateRatingSchema, generateProfessionalServiceSchema } from "@/lib/schemas";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

export async function generateStaticParams() {
  return servicesSlugs.map((slug) => ({ slug }));
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
    description: `${service.tagline} Expert UK local digital marketing. ${service.price}.`,
    keywords: [
      service.title.toLowerCase(),
      "UK service business",
      "digital marketing",
      "local marketing",
      service.price,
    ],
    alternates: {
      canonical: `${BASE_URL}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} for UK Service Businesses`,
      description: `${service.tagline} Expert UK digital marketing.`,
      url: `${BASE_URL}/services/${slug}`,
      type: "website",
    },
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

  const pageUrl = `${BASE_URL}/services/${slug}`;

  const serviceSchema = generateServiceSchema(service.title, service.description, service.price);
  const professionalServiceSchema = generateProfessionalServiceSchema(
    service.title,
    service.description,
    pageUrl,
    service.price,
    service.title
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Services", url: `${BASE_URL}/services` },
    { name: service.title },
  ]);
  const webPageSchema = generateWebPageSchema(service.title, service.tagline, pageUrl);
  const ratingSchema = generateAggregateRatingSchema(service.title, 4.9, 150);

  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, professionalServiceSchema, breadcrumbSchema, webPageSchema, ratingSchema]) }}
      />
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

      {/* Related Industries Section - Internal Linking */}
      <section
        className="py-16 md:py-24"
        style={{
          backgroundColor: "#0D1627",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-12 text-center"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industriesSlugs.slice(0, 10).map((industrySlug) => (
              <Link
                key={industrySlug}
                href={`/industries/${industrySlug}`}
                className="p-4 rounded-lg transition-all hover:bg-white/10"
                style={{
                  backgroundColor: "rgba(79,142,247,0.08)",
                  border: "1px solid rgba(79,142,247,0.20)",
                }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">
                    {industrySlug === "plumbers"
                      ? "🔧"
                      : industrySlug === "dentists"
                      ? "🦷"
                      : industrySlug === "electricians"
                      ? "⚡"
                      : industrySlug === "solicitors"
                      ? "⚖️"
                      : industrySlug === "estate-agents"
                      ? "🏠"
                      : industrySlug === "cleaners"
                      ? "🧹"
                      : industrySlug === "builders"
                      ? "🏗️"
                      : industrySlug === "accountants"
                      ? "💼"
                      : "📍"}
                  </div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "#E2E8F0" }}
                  >
                    {industrySlug
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Overview Link */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: "#0D1627" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm mb-3" style={{ color: "#8B9CB8" }}>
            Combine multiple strategies for maximum results
          </p>
          <Link
            href="/digital-marketing-for-small-business"
            className="inline-block text-lg font-semibold transition-colors hover:underline"
            style={{ color: "#4F8EF7" }}
          >
            See Our Complete Digital Marketing Approach →
          </Link>
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
