import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";
import { services } from "@/data/services";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const metadata: Metadata = {
  title: "Local SEO Services | #1 Local SEO Agency",
  description:
    "Looking for a local SEO company that delivers real results? Our local SEO agency provides expert local SEO services across the US. Best local SEO for small businesses. Find an SEO company near me today.",
  keywords: [
    "local seo company",
    "local seo services",
    "best local seo",
    "seo company near me",
    "local seo agency",
    "local seo experts",
    "local seo packages",
    "affordable local seo",
  ],
  alternates: {
    canonical: `${BASE_URL}/local-seo`,
  },
  openGraph: {
    title: "Local SEO Services | #1 Local SEO Agency",
    description:
      "Expert local SEO services from the best local SEO company in the US. Rank higher on Google Maps & local search. Free audit available.",
    url: `${BASE_URL}/local-seo`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SBMP Local SEO Agency",
  url: `${BASE_URL}/local-seo`,
  description:
    "Full-service local SEO agency providing Google My Business optimization, local link building, citations, and local SEO audits across the United States.",
  serviceType: "Local SEO Services",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Local SEO Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.shortDesc,
      },
    })),
  },
};

export default function LocalSeoHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-[#0F172A] pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-[#3B82F6] text-sm font-semibold tracking-wide uppercase">
              #1 Rated Local SEO Agency in the US
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Local SEO Services —{" "}
            <span className="text-[#3B82F6]">Find an Expert Near You</span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            As the <strong className="text-white">best local SEO company</strong> in the
            country, we help businesses rank higher on Google Maps, dominate the Local Pack,
            and attract ready-to-buy customers from their own backyard. Whether you need a
            trusted{" "}
            <strong className="text-white">local SEO agency near me</strong> or a national
            partner for your franchise, our{" "}
            <strong className="text-white">local SEO experts</strong> deliver measurable
            results. We are the{" "}
            <strong className="text-white">local SEO services</strong> provider that
            top-rated <strong className="text-white">local seo company</strong> clients
            recommend — because we rank businesses, not just manage them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#3B82F6]/25 text-base"
            >
              Get Free Local SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/20 hover:border-[#3B82F6]/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              Talk to a Local SEO Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="bg-[#0D1627] border-y border-white/5 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Clients Ranked" },
              { value: "40%", label: "Avg Ranking Boost" },
              { value: "1,200+", label: "GMB Optimizations" },
              { value: "10 Yrs", label: "Local SEO Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-3xl font-display font-extrabold text-[#3B82F6]">
                  {stat.value}
                </dt>
                <dd className="text-[#94A3B8] text-sm mt-1">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── INTRO / SERVICES OVERVIEW ─────────────────────────── */}
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Our Local SEO Services
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              From Google My Business optimization to local link building, we offer every
              service you need to dominate your local market.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/local-seo/services/${service.slug}`}
                className="group bg-[#0D1627] border border-white/7 rounded-2xl p-6 hover:border-[#3B82F6]/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3B82F6]/10"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center mb-4">
                  <span className="text-[#3B82F6] text-xl">✦</span>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-[#3B82F6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{service.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITY GRID ─────────────────────────────────────────── */}
      <section className="bg-[#0D1627] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Local SEO Experts in Your City
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              We provide{" "}
              <strong className="text-white">local SEO services</strong> across the largest
              US metro areas. Select your city for location-specific strategies, pricing, and
              a free local SEO audit.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/local-seo/${loc.slug}`}
                className="group bg-[#0F172A] border border-white/7 rounded-xl p-4 text-center hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/5 transition-all duration-200"
              >
                <span className="text-2xl mb-2 block">📍</span>
                <span className="font-semibold text-white text-sm group-hover:text-[#3B82F6] transition-colors block">
                  {loc.city}
                </span>
                <span className="text-[#94A3B8] text-xs">{loc.state}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why We&apos;re the Best Local SEO Company
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Not all SEO companies are equal. Here&apos;s what makes our{" "}
              <strong className="text-white">local SEO agency</strong> different.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Hyperlocal Targeting",
                desc: "We optimize for the exact streets, neighborhoods, and zip codes your customers search from — not just broad city terms.",
              },
              {
                icon: "📈",
                title: "Proven Track Record",
                desc: "500+ businesses ranked on Google's first page. Our case studies show real rankings, real traffic, and real revenue growth.",
              },
              {
                icon: "🔍",
                title: "Transparent Reporting",
                desc: "Monthly reports in plain English. No jargon, no fluff — just rankings, calls, and ROI your team can actually understand.",
              },
              {
                icon: "⚡",
                title: "Fast Results",
                desc: "Most clients see measurable ranking improvements within 30–60 days using our prioritized, high-impact optimization approach.",
              },
              {
                icon: "🤝",
                title: "No Long-Term Contracts",
                desc: "We earn your business every month. Month-to-month plans with full flexibility to scale up, down, or pause.",
              },
              {
                icon: "🏆",
                title: "Industry Specialists",
                desc: "Dedicated specialists for plumbers, dentists, restaurants, contractors, and HVAC — they speak your industry's language.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0D1627] border border-white/7 rounded-2xl p-6"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Rank #1 in Your City?
          </h2>
          <p className="text-[#94A3B8] text-lg mb-8">
            Get a free local SEO audit from our{" "}
            <strong className="text-white">local SEO experts</strong>. We&apos;ll show you
            exactly why competitors outrank you and how to fix it — no sales pitch, just
            honest analysis.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-[#3B82F6]/30 text-lg"
          >
            Claim Your Free Local SEO Audit →
          </Link>
        </div>
      </section>
    </>
  );
}
