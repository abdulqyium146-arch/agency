import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import { services, getServiceBySlug } from "@/data/services";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20local%20SEO%20services.%20Can%20you%20help%3F";

export async function generateStaticParams() {
  const params: { location: string; service: string }[] = [];
  for (const loc of locations) {
    for (const svc of services) {
      params.push({ location: loc.slug, service: svc.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string; service: string }>;
}): Promise<Metadata> {
  const { location, service } = await params;
  const loc = getLocationBySlug(location);
  const svc = getServiceBySlug(service);
  if (!loc || !svc) return {};

  return {
    title: `${svc.title} in ${loc.city}, ${loc.state} | Local SEO Expert`,
    description: `Professional ${svc.title.toLowerCase()} in ${loc.city}. ${svc.shortDesc} Get a free local SEO audit today — no obligations.`,
    keywords: [
      ...svc.keywords.map((k) => `${k} ${loc.city}`),
      `local seo ${loc.city}`,
      `seo company near me ${loc.city}`,
      `local seo expert ${loc.city}`,
    ],
    alternates: {
      canonical: `${BASE_URL}/local-seo/${location}/${service}`,
    },
    openGraph: {
      title: `${svc.title} in ${loc.city}, ${loc.state} | Local SEO Expert`,
      description: `Professional ${svc.title.toLowerCase()} in ${loc.city}. ${svc.shortDesc}`,
      url: `${BASE_URL}/local-seo/${location}/${service}`,
      type: "website",
    },
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ location: string; service: string }>;
}) {
  const { location, service } = await params;
  const loc = getLocationBySlug(location);
  const svc = getServiceBySlug(service);
  if (!loc || !svc) notFound();

  const { city, state } = loc;
  const pageUrl = `${BASE_URL}/local-seo/${location}/${service}`;

  // 4 related services (exclude current)
  const relatedServices = services.filter((s) => s.slug !== service).slice(0, 4);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${svc.title} in ${city}, ${state}`,
    url: pageUrl,
    description: `${svc.shortDesc} Serving ${city}, ${state} and surrounding areas.`,
    serviceType: svc.title,
    provider: {
      "@type": "LocalBusiness",
      name: `Local SEO Expert - ${city}`,
      url: `${BASE_URL}/local-seo/${location}`,
      areaServed: {
        "@type": "City",
        name: city,
      },
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "299",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        price: "299",
        unitText: "MONTH",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Local SEO", item: `${BASE_URL}/local-seo` },
      {
        "@type": "ListItem",
        position: 3,
        name: `Local SEO ${city}`,
        item: `${BASE_URL}/local-seo/${location}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: svc.title,
        item: pageUrl,
      },
    ],
  };

  // Build location-specific long description with keyword weaving
  const cityLongDesc = `${svc.longDesc}

In ${city}, ${state}, the local search landscape is highly competitive. Businesses that invest in professional ${svc.title.toLowerCase()} gain a significant edge over competitors who rely on word-of-mouth or outdated marketing methods. With ${city}'s growing business community and increasing smartphone usage, the majority of your potential customers are actively searching Google for exactly what you offer — the question is whether they find you or your competitor.

Our ${svc.title.toLowerCase()} service in ${city} is built around the specific search behaviors, competitor landscape, and ranking opportunities unique to the ${city} market. We use localized keyword research to identify exactly what ${city} customers search for, then optimize every element of your digital presence to match those searches. From your Google Business Profile to your website's location pages, every touchpoint is optimized for maximum visibility in ${city} and the surrounding area.

When ${city} customers search for ${svc.keywords[0] ?? "local services"}, they expect to find a business that looks professional, has strong reviews, and clearly serves their neighborhood. Our team ensures your business meets all three criteria. We combine technical SEO expertise with deep local market knowledge to deliver ${svc.title.toLowerCase()} results that translate directly into more calls, more bookings, and more revenue for your ${city} business.

The investment in ${svc.title.toLowerCase()} for your ${city} business pays for itself quickly. Our clients typically see their first measurable ranking improvements within 30–60 days, and most reach the Google Local Pack within 90 days. For ${city} businesses in competitive industries, we have a proven framework that systematically outranks competitors by building stronger local authority month after month.`;

  // Service-specific trust signals
  const trustSignals = [
    {
      icon: "🏆",
      title: `Proven ${city} Results`,
      desc: `We've helped dozens of ${city} businesses rank on the first page of Google with our ${svc.title.toLowerCase()} service. Real rankings, real calls, real revenue.`,
    },
    {
      icon: "📊",
      title: "Data-Driven Strategy",
      desc: `Every decision is backed by local search data specific to ${city}. We don't guess — we analyze, plan, and execute with precision.`,
    },
    {
      icon: "🤝",
      title: "No Contracts, No Risk",
      desc: `Our ${city} ${svc.title.toLowerCase()} plans are month-to-month. If you're not seeing results, you're not locked in. We earn your business every month.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── BREADCRUMB ──────────────────────────────────────── */}
      <nav className="bg-[#0D1627] border-b border-white/5 py-3 px-6">
        <ol className="max-w-6xl mx-auto flex flex-wrap items-center gap-2 text-sm text-[#94A3B8]">
          <li>
            <Link href="/" className="hover:text-[#3B82F6] transition-colors">
              Home
            </Link>
          </li>
          <li className="text-white/20">/</li>
          <li>
            <Link href="/local-seo" className="hover:text-[#3B82F6] transition-colors">
              Local SEO
            </Link>
          </li>
          <li className="text-white/20">/</li>
          <li>
            <Link
              href={`/local-seo/${location}`}
              className="hover:text-[#3B82F6] transition-colors"
            >
              {city}, {state}
            </Link>
          </li>
          <li className="text-white/20">/</li>
          <li className="text-white font-medium">{svc.title}</li>
        </ol>
      </nav>

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative bg-[#0F172A] pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#3B82F6]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-[#3B82F6] text-sm font-semibold">
              Expert Local SEO · {city}, {state}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            {svc.title} in{" "}
            <span className="text-[#3B82F6]">
              {city}, {state}
            </span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            {svc.shortDesc} Our {city} specialists use proven strategies to rank your
            business higher on Google Maps and local search — bringing you more calls,
            more customers, and more revenue from{" "}
            <strong className="text-white">local SEO in {city}</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#3B82F6]/25 text-base"
            >
              Get Free Local SEO Audit
            </Link>
            <Link
              href={`/local-seo/${location}`}
              className="inline-flex items-center justify-center border border-white/20 hover:border-[#3B82F6]/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              All {city} SEO Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. SERVICE DETAIL ───────────────────────────────── */}
      <section className="bg-[#0D1627] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-extrabold text-white mb-6">
              {svc.title} in {city} — What&apos;s Included
            </h2>
            <div className="prose prose-invert max-w-none">
              {cityLongDesc.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-[#94A3B8] text-base leading-relaxed mb-5">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-[#0F172A] border border-[#3B82F6]/20 rounded-2xl p-6">
            <h3 className="font-display font-bold text-white text-lg mb-4">
              Key Terms We Optimize For in {city}
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ...svc.keywords,
                `${svc.keywords[0] ?? ""} ${city}`,
                `local seo ${city}`,
                `seo company near me`,
                `local seo expert ${city}`,
                `best local seo ${city}`,
              ]
                .filter(Boolean)
                .map((kw) => (
                  <span
                    key={kw}
                    className="bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs px-3 py-1.5 rounded-lg"
                  >
                    {kw}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROCESS ──────────────────────────────────────── */}
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Our {svc.title} Process in {city}
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
              A clear, 4-step process built around the {city} market and your specific
              business goals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {svc.process.map((item, i) => (
              <div
                key={i}
                className="bg-[#0D1627] border border-white/7 rounded-2xl p-6 relative"
              >
                <div className="text-5xl font-display font-extrabold text-[#3B82F6]/20 mb-4 leading-none">
                  0{i + 1}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {item.step}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE US ────────────────────────────────── */}
      <section className="bg-[#0D1627] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Why Choose Us for {svc.title} in {city}
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
              Three reasons why {city} businesses trust us with their local SEO.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {trustSignals.map((ts) => (
              <div
                key={ts.title}
                className="bg-[#0F172A] border border-white/7 rounded-2xl p-6"
              >
                <div className="text-3xl mb-4">{ts.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{ts.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{ts.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. RELATED SERVICES ─────────────────────────────── */}
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-3">
              More Local SEO Services in {city}
            </h2>
            <p className="text-[#94A3B8]">
              Explore our full suite of local SEO services for {city} businesses.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((rs) => (
              <Link
                key={rs.slug}
                href={`/local-seo/${location}/${rs.slug}`}
                className="group bg-[#0D1627] border border-white/7 rounded-xl p-5 hover:border-[#3B82F6]/40 transition-all duration-200"
              >
                <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-[#3B82F6] transition-colors">
                  {rs.title}
                </h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed line-clamp-2">
                  {rs.shortDesc}
                </p>
                <span className="mt-3 text-[#3B82F6] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity block">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CTA + LEAD FORM ───────────────────────── */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Get Started with {svc.title} in {city}
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Request your free {city} local SEO audit and we&apos;ll show you exactly
              what&apos;s holding your business back — and how our{" "}
              {svc.title.toLowerCase()} service fixes it.
            </p>
          </div>
          <form
            action="/api/contact"
            method="POST"
            className="bg-[#0D1627] border border-white/10 rounded-2xl p-8 grid sm:grid-cols-2 gap-5"
          >
            <input type="hidden" name="city" value={city} />
            <input type="hidden" name="service" value={svc.title} />
            <input type="hidden" name="source" value="local-seo-service-page" />
            <div className="flex flex-col gap-2">
              <label htmlFor="lssp-name" className="text-[#94A3B8] text-sm font-medium">
                Your Name *
              </label>
              <input
                id="lssp-name"
                name="name"
                type="text"
                required
                placeholder="John Smith"
                className="bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lssp-business" className="text-[#94A3B8] text-sm font-medium">
                Business Name *
              </label>
              <input
                id="lssp-business"
                name="businessName"
                type="text"
                required
                placeholder={`Your ${city} Business`}
                className="bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lssp-phone" className="text-[#94A3B8] text-sm font-medium">
                Phone Number *
              </label>
              <input
                id="lssp-phone"
                name="phone"
                type="tel"
                required
                placeholder="(555) 000-0000"
                className="bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lssp-email" className="text-[#94A3B8] text-sm font-medium">
                Email Address *
              </label>
              <input
                id="lssp-email"
                name="email"
                type="email"
                required
                placeholder="you@yourbusiness.com"
                className="bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-colors"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-[#3B82F6]/25 text-base"
              >
                Get My Free {city} SEO Audit →
              </button>
              <p className="text-center text-[#475569] text-xs mt-3">
                No spam. No contracts. We respond within 1 business day.
              </p>
            </div>
          </form>
          <div className="text-center mt-8">
            <p className="text-[#94A3B8] text-sm mb-3">Prefer to message us directly?</p>
            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#22C55E] font-semibold hover:underline text-sm"
            >
              <span>💬</span>
              WhatsApp Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
