import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getLocationTestimonial, getIndustryPluralDisplayList, capitalize, servicesSlugs } from "@/lib/data";
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateWebPageSchema, generateAggregateRatingSchema, generateFAQSchema } from "@/lib/schemas";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

const industries = getIndustryPluralDisplayList();

export async function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  if (!cities.includes(city)) return {};
  const cityName = capitalize(city);

  return {
    title: `Local Digital Marketing in ${cityName} | Expert SEO & Google Ads`,
    description: `Get your ${cityName} service business to page 1 of Google. Expert local SEO, Google Ads & web design for ${cityName} businesses. From £199/month. Free audit.`,
    keywords: [
      `local SEO ${cityName}`,
      `digital marketing ${cityName}`,
      `Google Business Profile ${cityName}`,
      `SEO agency ${cityName}`,
      `${cityName} local marketing`,
    ],
    alternates: {
      canonical: `${BASE_URL}/locations/${city}`,
    },
    openGraph: {
      title: `Local Digital Marketing in ${cityName} | Expert SEO & Google Ads`,
      description: `Get your ${cityName} service business to page 1 of Google. Expert local SEO, Google Ads & web design.`,
      url: `${BASE_URL}/locations/${city}`,
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  if (!cities.includes(city)) notFound();

  const cityName = capitalize(city);
  const testimonial = getLocationTestimonial(city);

  const pageUrl = `${BASE_URL}/locations/${city}`;
  const pageTitle = `Local Digital Marketing in ${cityName}`;
  const pageDesc = `Get your ${cityName} service business to page 1 of Google. Expert local SEO, Google Ads & web design for ${cityName} businesses. From £199/month. Free audit.`;

  const localBusinessSchema = generateLocalBusinessSchema(cityName);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Locations", url: `${BASE_URL}/locations` },
    { name: cityName },
  ]);
  const webPageSchema = generateWebPageSchema(pageTitle, pageDesc, pageUrl);
  const ratingSchema = generateAggregateRatingSchema(`Local Digital Marketing ${cityName}`, 4.9, 150);
  const faqSchema = generateFAQSchema([
    {
      question: `How can local SEO help my business in ${cityName}?`,
      answer: `Local SEO gets your ${cityName} business ranking at the top of Google when nearby customers search for your services. More visibility means more calls, bookings, and consistent revenue — typically within 30–90 days.`,
    },
    {
      question: `How long does it take to rank on page 1 in ${cityName}?`,
      answer: `Most ${cityName} businesses see early ranking movement within 30–60 days. Strong page-1 positions for competitive keywords typically take 90–120 days.`,
    },
    {
      question: `Do you offer local SEO services specifically for ${cityName} businesses?`,
      answer: `Yes. We provide specialist local SEO, Google Business Profile optimisation, and digital marketing tailored to the ${cityName} market. We understand local competition and search behaviour in your area.`,
    },
    {
      question: `How much does local digital marketing in ${cityName} cost?`,
      answer: `Plans start from £199/month with no long-term contracts. Most ${cityName} businesses invest £349/month for full local SEO, Google Ads management, and reputation management.`,
    },
  ]);

  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, breadcrumbSchema, webPageSchema, ratingSchema, faqSchema]) }}
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "#4A5A6E" }}>
            <Link href="/" className="transition-colors hover:text-white" style={{ color: "#4A5A6E" }}>Home</Link>
            <span>→</span>
            <span>Locations</span>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>{cityName}</span>
          </div>

          <div className="max-w-3xl">
            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6"
              style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}
            >
              🏆 Helping {cityName} businesses rank with 5 years of expertise
            </div>

            <h1
              className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Local Digital Marketing in {cityName}
            </h1>

            <p className="text-lg sm:text-xl mb-10" style={{ color: "#8B9CB8" }}>
              Get your {cityName} service business ranking #1 on Google. I've helped businesses across {cityName} with 5 years of focused expertise — generating real calls, real enquiries, real revenue.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-audit"
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get Free Audit →
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#22C55E" }}
              >
                💬 WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📍", label: `${cityName} Businesses Ranked`, value: "12+" },
              { icon: "⭐", label: "Average Results", value: "Page 1 in 60 days" },
              { icon: "💰", label: "Revenue Generated", value: "£100k+" },
              { icon: "🏆", label: `Years Active in ${cityName}`, value: "5+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 text-center"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div
                  className="text-xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-display, sans-serif)", color: "#4F8EF7" }}
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
      </section>

      {/* Why Local SEO matters */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-5"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Why Local SEO Matters in {cityName}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#8B9CB8" }}>
              With {cityName}&apos;s competitive local market, standing out on Google isn&apos;t optional — it&apos;s essential.
              Whether you&apos;re a plumber, dentist, solicitor, or cleaner in {cityName}, I can get you to the top of local
              search results and keep you there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🗺️",
                title: "Google Maps Domination",
                desc: `Appear in the Google Maps 3-pack when ${cityName} customers search for your services. That's where the clicks and calls come from.`,
              },
              {
                icon: "🔍",
                title: "Page 1 Organic Rankings",
                desc: `Own the top organic positions on Google for your most valuable ${cityName} keywords — long-term, sustainable visibility.`,
              },
              {
                icon: "📞",
                title: "More Local Calls",
                desc: `More visibility means more calls. I track every lead so you know exactly what your investment is delivering every month.`,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl p-8 transition-all hover:-translate-y-1 card-hover-blue"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#E2E8F0" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold mb-3 text-center"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Industries Served in {cityName}
          </h2>
          <p className="text-center mb-10" style={{ color: "#8B9CB8" }}>
            I help all types of local service businesses rank higher on Google.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.slice(0, 6).map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "#111E33",
                  color: "#4F8EF7",
                  border: "1px solid rgba(79,142,247,0.30)",
                }}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="glass-card rounded-2xl p-10"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>
            <blockquote
              className="text-xl font-semibold italic mb-6 leading-relaxed"
              style={{ color: "#E2E8F0" }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <div className="font-bold" style={{ color: "#E2E8F0" }}>
                {testimonial.name}
              </div>
              <div className="text-sm" style={{ color: "#8B9CB8" }}>
                {testimonial.business}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in This Location - Internal Linking */}
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
            Services for {cityName} Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {servicesSlugs.map((serviceSlug) => {
              const serviceIcons: Record<string, string> = {
                "local-seo": "📍",
                "google-ads": "🎯",
                "web-design": "💻",
                "social-media": "📱",
                reputation: "⭐",
              };
              return (
                <Link
                  key={serviceSlug}
                  href={`/services/${serviceSlug}`}
                  className="p-6 rounded-xl transition-all hover:border-blue-400 hover:bg-blue/5"
                  style={{
                    backgroundColor: "rgba(79,142,247,0.08)",
                    border: "1px solid rgba(79,142,247,0.20)",
                  }}
                >
                  <div className="text-3xl mb-3">
                    {serviceIcons[serviceSlug] || "🚀"}
                  </div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: "#E2E8F0" }}
                  >
                    {serviceSlug
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </div>
                  <div
                    className="text-xs mt-2"
                    style={{ color: "#8B9CB8" }}
                  >
                    for {cityName}
                  </div>
                </Link>
              );
            })}
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
            Ready to dominate {cityName}&apos;s local search results?
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
