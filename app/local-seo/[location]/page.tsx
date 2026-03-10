import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import { services } from "@/data/services";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20local%20SEO%20services.%20Can%20you%20help%3F";

export async function generateStaticParams() {
  return locations.map((loc) => ({ location: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const loc = getLocationBySlug(location);
  if (!loc) return {};

  return {
    title: `Local SEO Services in ${loc.city}, ${loc.state} | #1 Local SEO Agency Near You`,
    description: `Looking for local SEO services in ${loc.city}? Our expert local SEO agency helps ${loc.city} businesses rank higher on Google Maps & local search. Get a free local SEO audit today!`,
    keywords: [
      `local seo ${loc.city}`,
      `local seo services ${loc.city}`,
      `seo company near me ${loc.city}`,
      `local seo agency near me`,
      `google my business optimization ${loc.city}`,
      `google maps seo ${loc.city}`,
      `local seo expert ${loc.city}`,
      `best local seo company ${loc.city}`,
      `affordable local seo ${loc.city}`,
    ],
    alternates: {
      canonical: `${BASE_URL}/local-seo/${location}`,
    },
    openGraph: {
      title: `Local SEO Services in ${loc.city}, ${loc.state} | #1 Local SEO Agency`,
      description: `Expert local SEO in ${loc.city}. Rank higher on Google Maps. Free local SEO audit available.`,
      url: `${BASE_URL}/local-seo/${location}`,
      type: "website",
    },
  };
}

// The 6 service cards shown on city pages (subset of full 12)
const cityCoreServices = [
  {
    slug: "google-my-business-optimization",
    title: "GMB Optimization",
    icon: "📍",
    desc: "Dominate Google Maps with a fully optimized Google Business Profile.",
  },
  {
    slug: "local-link-building",
    title: "Local Citations",
    icon: "📋",
    desc: "Build consistent NAP citations across 50+ local directories.",
  },
  {
    slug: "local-link-building",
    title: "Local Link Building",
    icon: "🔗",
    desc: "Earn high-authority backlinks from locally relevant sites.",
  },
  {
    slug: "local-seo-audit",
    title: "On-Page SEO",
    icon: "✏️",
    desc: "Optimize every page of your website for local keyword intent.",
  },
  {
    slug: "local-seo-audit",
    title: "Local SEO Audit",
    icon: "🔍",
    desc: "Uncover ranking gaps and quick wins with a comprehensive audit.",
  },
  {
    slug: "google-my-business-optimization",
    title: "Reputation Management",
    icon: "⭐",
    desc: "Generate, monitor, and respond to reviews across all platforms.",
  },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const loc = getLocationBySlug(location);
  if (!loc) notFound();

  const { city, state, nearbyCities } = loc;
  const pageUrl = `${BASE_URL}/local-seo/${location}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Local SEO Expert - ${city}`,
    url: pageUrl,
    description: `Professional local SEO services in ${city}, ${state}. We help ${city} businesses rank higher on Google Maps, dominate the Local Pack, and generate more leads from local search.`,
    areaServed: {
      "@type": "City",
      name: city,
    },
    serviceType: "Local SEO Services",
    priceRange: "$$$",
    telephone: "+1-800-SEO-HELP",
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How much does local SEO cost in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Local SEO pricing in ${city} typically ranges from $299/month for small businesses to $999+/month for competitive industries or larger service areas. Our ${city} local SEO packages start at $299/month with no long-term contracts. The exact cost depends on your industry competitiveness, number of target keywords, and service area size.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the best local SEO company near ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The best local SEO company near ${city} is one that has a proven track record of ranking businesses in your specific market. Our agency has helped 500+ businesses across the US, including ${city}, rank on Google's first page. We specialize in Google My Business optimization, local link building, and Google Maps SEO for ${city} businesses.`,
        },
      },
      {
        "@type": "Question",
        name: `How do I rank higher on Google Maps in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `To rank higher on Google Maps in ${city}, you need to: (1) Fully optimize your Google Business Profile with accurate categories, services, and ${city}-specific keywords; (2) Build consistent local citations across directories; (3) Generate positive reviews from ${city} customers; (4) Build local backlinks from ${city}-area websites; (5) Optimize your website with ${city} location pages. Our team handles all of this for ${city} businesses.`,
        },
      },
      {
        "@type": "Question",
        name: `How long does local SEO take in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Most ${city} businesses see their first ranking improvements within 30–60 days of starting local SEO. Significant Google Maps movement typically happens within 60–90 days. For competitive ${city} markets, reaching the top 3 local pack positions can take 3–6 months of consistent optimization. We provide monthly ranking reports so you can track progress every step of the way.`,
        },
      },
      {
        "@type": "Question",
        name: `What is local SEO and why do I need it in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Local SEO is the process of optimizing your online presence so that your business appears when ${city} customers search for your services on Google. In ${city}'s competitive market, 97% of people use search engines to find local businesses — if you're not in the top 3 results, you're missing the majority of that traffic. Local SEO for ${city} includes Google My Business optimization, local keyword targeting, citation building, and review management.`,
        },
      },
    ],
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
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── 11. BREADCRUMB ──────────────────────────────────── */}
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
          <li className="text-white font-medium">
            {city}, {state}
          </li>
        </ol>
      </nav>

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className="relative bg-[#0F172A] pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#3B82F6]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-[#3B82F6] text-sm font-semibold tracking-wide">
              Serving {city}, {state} &amp; Surrounding Areas
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Local SEO Services in{" "}
            <span className="text-[#3B82F6]">
              {city}, {state}
            </span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
            The top-rated{" "}
            <strong className="text-white">SEO company near me</strong> for {city}{" "}
            businesses. Our{" "}
            <strong className="text-white">local SEO agency near me</strong> helps {city}{" "}
            service businesses rank in the Google 3-Pack, generate more calls, and grow
            revenue from local search — without wasting budget on tactics that don&apos;t
            work.
          </p>
          <p className="text-[#94A3B8] text-base max-w-2xl mx-auto mb-10">
            From <strong className="text-white">google my business optimization</strong> to{" "}
            <strong className="text-white">local link building</strong> and full-service{" "}
            <strong className="text-white">local SEO packages</strong>, we cover every
            ranking signal that matters in {city}&apos;s competitive local market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#3B82F6]/25 text-base"
            >
              Get Free Local SEO Audit
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-white/20 hover:border-[#3B82F6]/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              View Local SEO Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ────────────────────────────────────── */}
      <section className="bg-[#0D1627] border-y border-white/5 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Clients Ranked" },
              { value: "40%", label: "Avg Ranking Boost" },
              { value: "1,200+", label: "GMB Optimizations" },
              { value: "10 Yrs", label: "Experience" },
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

      {/* ── 3. SERVICES GRID ────────────────────────────────── */}
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Local SEO Services in {city}
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Everything your {city} business needs to dominate local search —
              from GMB to backlinks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityCoreServices.map((svc, i) => (
              <Link
                key={`${svc.slug}-${i}`}
                href={`/local-seo/${location}/${svc.slug}`}
                className="group bg-[#0D1627] border border-white/7 rounded-2xl p-6 hover:border-[#3B82F6]/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-[#3B82F6] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{svc.desc}</p>
                <span className="mt-4 inline-flex items-center text-[#3B82F6] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY LOCAL SEO ────────────────────────────────── */}
      <section className="bg-[#0D1627] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-6">
                Why {city} Businesses Need Local SEO
              </h2>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
                The {city} market is competitive. Customers searching for{" "}
                <strong className="text-white">local seo for small business</strong>{" "}
                providers, plumbers, dentists, and restaurants all turn to Google first —
                and they click one of the top three results 75% of the time. If your
                business isn&apos;t in that Local Pack, you&apos;re invisible to the majority
                of your potential customers.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
                Our local SEO strategy for {city} is built around three core goals:{" "}
                <strong className="text-white">improve google my business ranking</strong>,{" "}
                <strong className="text-white">rank higher on google maps</strong>, and
                dominate the organic local search results for your highest-value service
                keywords. Every tactic we use is data-driven and specific to the {city}{" "}
                market.
              </p>
              <ul className="space-y-3">
                {[
                  `97% of consumers search online for local businesses in ${city}`,
                  "The top 3 Google Maps results capture 75%+ of clicks",
                  "Local search has 80% higher purchase intent than general search",
                  `${city} businesses with optimized GMB profiles get 7x more clicks`,
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[#94A3B8] text-sm">
                    <span className="text-[#22C55E] mt-0.5 flex-shrink-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: "🗺️",
                  title: "Google Maps Domination",
                  desc: `We optimize every local ranking signal to put your ${city} business in the top 3 map results.`,
                },
                {
                  icon: "🏪",
                  title: "Small Business Specialists",
                  desc: `Our ${city} local SEO packages are built for small businesses — big results, smart budgets.`,
                },
                {
                  icon: "⭐",
                  title: "Review & Reputation Building",
                  desc: `We help you generate consistent 5-star reviews that build trust with ${city} customers.`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0F172A] border border-white/7 rounded-xl p-5 flex gap-4"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. GMB SECTION ──────────────────────────────────── */}
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Google My Business Optimization in {city}
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Your GMB profile is your most powerful free local marketing tool. Our{" "}
              <strong className="text-white">gmb seo</strong> and{" "}
              <strong className="text-white">seo google my business</strong> service
              maximizes every element of your {city} listing.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
                For {city} businesses, Google My Business is the gateway to the Local Pack
                — the three map results that appear above all organic listings. A fully
                optimized GMB profile signals to Google that your business is legitimate,
                relevant, and trustworthy for searches like &ldquo;
                <strong className="text-white">google maps seo {city}</strong>&rdquo; and
                related queries.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
                Our{" "}
                <strong className="text-white">google my business optimization</strong>{" "}
                service for {city} covers every ranking factor: accurate business categories,
                keyword-optimized descriptions, geo-tagged photos, service listings with
                local pricing, Q&amp;A optimization, review generation, and a consistent
                Google Posts schedule. We also build {city}-specific citation signals that
                reinforce your local authority.
              </p>
              <h3 className="font-display font-bold text-white text-lg mb-4">
                GMB Optimization Checklist for {city}
              </h3>
              <ul className="space-y-2">
                {[
                  "Business name, address & phone (NAP) consistency verified",
                  "Primary & secondary categories optimized for your industry",
                  `${city}-specific keywords woven into business description`,
                  "20+ high-quality, geo-tagged business photos uploaded",
                  "All services listed with descriptions and pricing",
                  "Products catalog set up (if applicable)",
                  "Q&A section populated with common customer questions",
                  "Booking/appointment link activated",
                  "Review response templates created and deployed",
                  "Weekly Google Posts scheduled and published",
                  "Local citation audit — 50+ directory submissions",
                  "Competitor GMB analysis completed",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <span className="text-[#3B82F6] flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0D1627] border border-[#3B82F6]/20 rounded-2xl p-8">
              <h3 className="font-display font-bold text-white text-xl mb-2">
                GMB Optimization Results in {city}
              </h3>
              <p className="text-[#94A3B8] text-sm mb-6">
                Average improvements our {city} clients see within 90 days:
              </p>
              <div className="space-y-4">
                {[
                  { metric: "Profile Views", improvement: "+340%" },
                  { metric: "Direction Requests", improvement: "+210%" },
                  { metric: "Phone Calls from GMB", improvement: "+180%" },
                  { metric: "Website Clicks from GMB", improvement: "+250%" },
                  { metric: "Local Pack Rankings", improvement: "Top 3" },
                ].map((result) => (
                  <div
                    key={result.metric}
                    className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                  >
                    <span className="text-[#94A3B8] text-sm">{result.metric}</span>
                    <span className="text-[#22C55E] font-bold text-sm">
                      {result.improvement}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/free-audit"
                className="mt-6 w-full inline-flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                Get Your Free GMB Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. LOCAL SEO PROCESS ────────────────────────────── */}
      <section className="bg-[#0D1627] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Our Local SEO Process for {city}
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              A proven 4-step framework that takes your {city} business from invisible to
              dominant in local search.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Local SEO Audit",
                desc: `We analyze your current ${city} rankings, competitor strategies, GMB health, and citation gaps to build a prioritized action plan.`,
              },
              {
                step: "02",
                title: "Strategy",
                desc: `We design a ${city}-specific local SEO strategy targeting your highest-value keywords and the quickest path to the Local Pack.`,
              },
              {
                step: "03",
                title: "Optimize",
                desc: `We execute GMB optimization, on-page SEO, local link building, citations, and review campaigns simultaneously.`,
              },
              {
                step: "04",
                title: "Rank & Grow",
                desc: `We track your ${city} keyword rankings daily and refine the strategy monthly to keep you climbing and protect your positions.`,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-[#0F172A] border border-white/7 rounded-2xl p-6"
              >
                <div className="text-5xl font-display font-extrabold text-[#3B82F6]/20 mb-4 leading-none">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PRICING ──────────────────────────────────────── */}
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Local SEO Pricing in {city}
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Transparent{" "}
              <strong className="text-white">local SEO packages</strong> for every budget.
              All plans include{" "}
              <strong className="text-white">affordable local seo</strong> with no
              long-term contracts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "$299",
                period: "/mo",
                badge: null,
                features: [
                  "GMB Optimization",
                  "10 Citation Submissions",
                  "On-Page SEO (5 pages)",
                  "Monthly Rank Report",
                  "Review Request Templates",
                  "1 Blog Post/Month",
                  "Email Support",
                ],
                cta: "Get Started",
                href: "/contact",
                highlight: false,
              },
              {
                name: "Professional",
                price: "$599",
                period: "/mo",
                badge: "Most Popular",
                features: [
                  "Everything in Starter",
                  "25 Citation Submissions",
                  "On-Page SEO (15 pages)",
                  "Local Link Building (5/mo)",
                  "Google Posts Management",
                  "Review Management",
                  "3 Blog Posts/Month",
                  "Competitor Tracking",
                  "Priority Support",
                ],
                cta: "Start Growing",
                href: "/contact",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "$999",
                period: "/mo",
                badge: null,
                features: [
                  "Everything in Professional",
                  "Unlimited Citation Submissions",
                  "Full-Site SEO Optimization",
                  "Local Link Building (15/mo)",
                  "Dedicated Account Manager",
                  "Weekly Strategy Calls",
                  "6 Blog Posts/Month",
                  "Custom Reporting Dashboard",
                  "24/7 Priority Support",
                ],
                cta: "Contact Sales",
                href: "/contact",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#1E3A5F] to-[#0D1627] border-[#3B82F6]/50 shadow-xl shadow-[#3B82F6]/10"
                    : "bg-[#0D1627] border-white/7"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3B82F6] text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <h3 className="font-display font-extrabold text-white text-xl mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-display font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-[#94A3B8] text-sm mb-1">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#94A3B8] text-sm">
                      <span className="text-[#22C55E] flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`w-full inline-flex items-center justify-center font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm ${
                    plan.highlight
                      ? "bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-lg shadow-[#3B82F6]/25"
                      : "border border-white/15 hover:border-[#3B82F6]/50 text-white"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-[#94A3B8] text-sm mt-8">
            All {city} local SEO pricing is month-to-month. No setup fees. No contracts.
            Cancel anytime.
          </p>
        </div>
      </section>

      {/* ── 8. TESTIMONIALS ─────────────────────────────────── */}
      <section className="bg-[#0D1627] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              What {city} Business Owners Say
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
              Real results from real {city} businesses — plumbers, dentists, and
              restaurants just like yours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: `Mike T.`,
                role: `Plumber — ${city}, ${state}`,
                quote: `Before local SEO, I was on page 4 of Google. Within 60 days of working with this team, I was in the top 3 on Google Maps for "plumber near me ${city}". My phone hasn't stopped ringing. Best investment I've made for my plumbing business.`,
                rating: 5,
              },
              {
                name: `Dr. Sarah L.`,
                role: `Dentist — ${city}, ${state}`,
                quote: `I was skeptical about local SEO for a dental practice, but the results speak for themselves. We went from 8 new patients a month to over 30 — all from Google. Their Google My Business optimization and review strategy transformed our practice's visibility in ${city}.`,
                rating: 5,
              },
              {
                name: `Carlos M.`,
                role: `Restaurant Owner — ${city}, ${state}`,
                quote: `Our restaurant was invisible on Google Maps. After 3 months of their local SEO work, we rank #1 for "best restaurant ${city}" and our Saturday reservations are booked 2 weeks out. The ROI is incredible — we made our investment back in the first month.`,
                rating: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-[#0F172A] border border-white/7 rounded-2xl p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-[#FBBF24] text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#3B82F6] text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────── */}
      <section className="bg-[#0F172A] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Local SEO FAQ for {city}
            </h2>
            <p className="text-[#94A3B8] text-lg">
              Answers to the most common questions from {city} business owners.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: `How much does local SEO cost in ${city}?`,
                a: `Local SEO pricing in ${city} typically ranges from $299/month for small businesses to $999+/month for competitive industries. Our ${city} packages start at $299/month with no long-term contracts. The right budget depends on your industry, competition level, and how fast you want to see results. We offer a free audit to recommend the right tier for your specific ${city} market.`,
              },
              {
                q: `What is the best local SEO company near ${city}?`,
                a: `The best local SEO company near ${city} is one that understands your specific market, has a track record of ranking similar businesses, and communicates results transparently. Our agency has helped 500+ US businesses rank in the Local Pack — including businesses in and around ${city}. We specialize in Google Maps SEO, GMB optimization, and local link building that moves the needle in competitive markets like ${city}.`,
              },
              {
                q: `How do I rank higher on Google Maps in ${city}?`,
                a: `Ranking higher on Google Maps in ${city} requires optimizing three core signals: relevance (matching search keywords to your business), prominence (reviews, citations, backlinks), and proximity (how close your business is to the searcher). We optimize all three simultaneously. Key tactics include fully completing your GMB profile with ${city}-specific keywords, building consistent citations, generating 5-star reviews from ${city} customers, and earning local backlinks from ${city}-area websites.`,
              },
              {
                q: `How long does local SEO take in ${city}?`,
                a: `Most ${city} businesses see their first ranking movement within 30–60 days. Reaching the Google 3-Pack for competitive keywords in ${city} typically takes 3–6 months of consistent optimization. The timeline varies by industry competition — a ${city} plumber faces different competition than a ${city} pediatric dentist. We track your rankings weekly and share monthly progress reports so you always know exactly where you stand.`,
              },
              {
                q: `What is local SEO and why do I need it in ${city}?`,
                a: `Local SEO is the process of optimizing your online presence so ${city} customers find your business when searching Google for your services. In ${city}'s competitive market, 97% of people use search engines to research local businesses. Without local SEO, you're invisible to the majority of potential customers actively searching for what you offer. Local SEO covers Google My Business optimization, local keyword targeting, citation building, review management, and local link acquisition — all the signals Google uses to decide which businesses appear in the Local Pack for ${city} searches.`,
              },
            ].map((item, i) => (
              <details key={i} className="group bg-[#0D1627] border border-white/7 rounded-xl">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                  <span className="font-semibold text-white text-base">{item.q}</span>
                  <span className="text-[#3B82F6] flex-shrink-0 transition-transform group-open:rotate-45 text-xl">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#94A3B8] text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. NEARBY CITIES ───────────────────────────────── */}
      <section className="bg-[#0D1627] py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl font-extrabold text-white mb-6 text-center">
            Also Serving Nearby Areas
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {nearbyCities.map((nearbySlug) => {
              const nearbyCity = nearbySlug
                .split("-")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ");
              return (
                <span
                  key={nearbySlug}
                  className="bg-[#0F172A] border border-white/10 text-[#94A3B8] text-sm px-4 py-2 rounded-lg"
                >
                  📍 {nearbyCity}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 12. BOTTOM CTA + LEAD FORM ──────────────────────── */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#0F172A] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Dominate Local Search in {city}?
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Get a free, no-obligation local SEO audit for your {city} business. We&apos;ll
              show you exactly why competitors outrank you and what to do about it.
            </p>
          </div>
          <form
            action="/api/contact"
            method="POST"
            className="bg-[#0D1627] border border-white/10 rounded-2xl p-8 grid sm:grid-cols-2 gap-5"
          >
            <input type="hidden" name="city" value={city} />
            <input type="hidden" name="source" value="local-seo-city-page" />
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#94A3B8] text-sm font-medium">
                Your Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={`John Smith`}
                className="bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="business" className="text-[#94A3B8] text-sm font-medium">
                Business Name *
              </label>
              <input
                id="business"
                name="businessName"
                type="text"
                required
                placeholder={`Your ${city} Business`}
                className="bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-[#94A3B8] text-sm font-medium">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(555) 000-0000"
                className="bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#94A3B8] text-sm font-medium">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@yourbusiness.com"
                className="bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="service" className="text-[#94A3B8] text-sm font-medium">
                Service You&apos;re Interested In
              </label>
              <select
                id="service"
                name="service"
                className="bg-[#0F172A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#3B82F6]/60 transition-colors"
              >
                <option value="">Select a Service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-[#3B82F6]/25 text-base"
              >
                Get My Free {city} Local SEO Audit →
              </button>
              <p className="text-center text-[#475569] text-xs mt-3">
                No spam. No contracts. We&apos;ll respond within 1 business day.
              </p>
            </div>
          </form>
          <div className="text-center mt-8">
            <p className="text-[#94A3B8] text-sm mb-3">Prefer to chat directly?</p>
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
