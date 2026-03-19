import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20Google%20Maps%20marketing.%20Can%20you%20help%3F";

// ============================================================================
// SECTION A — META DATA
// Title: 59 chars | Primary: "google maps marketing"
// ============================================================================

export const metadata: Metadata = {
  title: "Google Maps Marketing | Rank in the Local 3-Pack — SBMP",
  description:
    "Expert Google Maps marketing to rank your business in the Local 3-Pack. Google Business Profile optimisation, local SEO & GMB management. Free audit today.",
  authors: [{ name: "SBMP — Local Marketing Expert" }],
  creator: "SBMP — Small Business Marketing Professional",
  publisher: "SBMP",
  category: "Google Maps Marketing",
  keywords: [
    "google maps marketing",
    "google local marketing",
    "google maps marketing company",
    "recommended google maps marketing companies",
    "google local search marketing",
    "google local business advertising",
    "google local marketing strategy",
    "google local advertising",
    "google free local business advertising",
    "gmb in seo",
    "google local seo",
    "google business profile optimisation",
    "google maps seo",
    "local 3-pack ranking",
    "google maps local seo",
    "google my business marketing",
    "google maps advertising",
    "google maps local pack",
    "local search marketing",
    "local search marketing services",
    "local search marketing seo",
    "local search digital marketing",
    "local search advertising",
    "get local search marketing",
    "local search marketing strategy",
    "local seo listing management",
    "local listing in digital marketing",
    "local ranking factors",
    "local reach in digital marketing",
    "posicionamiento local en google maps",
  ],
  alternates: {
    canonical: `${BASE_URL}/google-maps-marketing`,
  },
  openGraph: {
    title: "Google Maps Marketing | Rank in the Local 3-Pack — SBMP",
    description:
      "Expert Google Maps marketing — rank in the Local 3-Pack, get more calls, more visits, more customers. Free Google Maps audit.",
    url: `${BASE_URL}/google-maps-marketing`,
    type: "website",
    siteName: "SBMP — Small Business Marketing Professional",
    images: [{ url: `${BASE_URL}/sbmp-logo.png`, width: 1200, height: 630, alt: "Google Maps Marketing — SBMP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Maps Marketing | Rank in the Local 3-Pack",
    description: "Rank in Google Maps 3-Pack. More calls, more customers. Free audit.",
  },
};

// ============================================================================
// SECTION B — JSON-LD SCHEMAS
// ============================================================================

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/google-maps-marketing`,
    name: "SBMP — Google Maps Marketing",
    url: `${BASE_URL}/google-maps-marketing`,
    telephone: "+923474825228",
    email: "hello@sbmp.com",
    description:
      "Expert Google Maps marketing services — Google Business Profile optimisation, local 3-pack ranking, and Google local search marketing for small businesses.",
    serviceType: ["Google Maps Marketing", "Local SEO", "Google Business Profile Optimisation", "Local Search Marketing"],
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    priceRange: "£199–£699",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "150", bestRating: "5", worstRating: "1" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/google-maps-marketing`,
    name: "Google Maps Marketing | Rank in the Local 3-Pack — SBMP",
    description: "Expert Google Maps marketing to rank your business in the Local 3-Pack. Google Business Profile optimisation, local SEO & GMB management.",
    url: `${BASE_URL}/google-maps-marketing`,
    datePublished: "2026-03-19",
    dateModified: "2026-03-19",
    inLanguage: "en-GB",
    isPartOf: { "@type": "WebSite", url: BASE_URL },
    author: { "@type": "Organization", name: "SBMP — Small Business Marketing Professional", url: BASE_URL },
    publisher: { "@type": "Organization", name: "SBMP", logo: { "@type": "ImageObject", url: `${BASE_URL}/sbmp-logo.png` } },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Google Maps Marketing", item: `${BASE_URL}/google-maps-marketing` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Google Maps marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Maps marketing is the process of optimising your Google Business Profile and local SEO signals to rank your business in the Google Maps Local 3-Pack — the three business listings that appear at the top of search results for local queries. It includes Google Business Profile optimisation, local citation building, review management, and on-page local SEO. Appearing in the Local 3-Pack significantly increases calls, foot traffic, and website visits.",
        },
      },
      {
        "@type": "Question",
        name: "How do I rank my business on Google Maps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To rank on Google Maps: (1) Claim and fully complete your Google Business Profile with accurate NAP (name, address, phone), categories, photos, and services; (2) Build local citations — consistent business listings across Yelp, Yell, Thomson Local and directories; (3) Generate Google reviews — more reviews with high ratings = higher Maps ranking; (4) Optimise your website pages for local keywords; (5) Earn local backlinks. SBMP manages all of this as part of our local SEO packages.",
        },
      },
      {
        "@type": "Question",
        name: "What is GMB in SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GMB (Google My Business) in SEO refers to the optimisation of your Google Business Profile — formerly known as Google My Business — as part of a local SEO strategy. GMB signals including profile completeness, review count, review rating, photo frequency, and posting activity are key local ranking factors that determine whether your business appears in the Google Maps Local 3-Pack.",
        },
      },
      {
        "@type": "Question",
        name: "How long does Google Maps ranking take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Maps ranking improvements typically begin within 4–8 weeks of starting a Google Maps marketing campaign. The Local 3-Pack often responds faster than organic rankings. Most local businesses working with SBMP see Maps 3-pack improvements within 30–60 days. Competitive markets may take 3–6 months for top-3 positions.",
        },
      },
      {
        "@type": "Question",
        name: "What are Google Maps local ranking factors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Maps local ranking factors include: (1) Relevance — how well your profile matches the search query; (2) Distance — how close your business is to the searcher; (3) Prominence — how well-known your business is online, including review count, ratings, and local citations. Profile completeness, category accuracy, photo count, posting frequency, Q&A responses, and website local SEO all contribute to Maps prominence.",
        },
      },
      {
        "@type": "Question",
        name: "Is Google Maps marketing free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Creating and maintaining a Google Business Profile is free. Ranking in the Google Maps Local 3-Pack through organic optimisation is also free — though it requires consistent SEO work. Google also offers paid Local Services Ads that appear above the Maps pack. SBMP manages organic Google Maps marketing as part of our local SEO plans from £199/month — you do not pay Google for the organic 3-pack visibility we achieve.",
        },
      },
      {
        "@type": "Question",
        name: "What is local search marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local search marketing is the combination of strategies used to increase a business's visibility in local search results — including both Google Maps (Local 3-Pack) and organic search results for location-based queries. It encompasses Google Business Profile optimisation, local SEO, Google Ads with local targeting, local citation building, and reputation management. SBMP provides complete local search marketing services from £199/month.",
        },
      },
      {
        "@type": "Question",
        name: "How many businesses appear in the Google Maps Local 3-Pack?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google shows only 3 businesses in the Local Pack (also called the 3-Pack or Map Pack) for most local search queries. These top 3 positions receive the majority of clicks — studies show the 3-Pack results get 44% of all clicks for local searches. Ranking outside the top 3 on Maps results in dramatically fewer impressions and calls. SBMP's goal is always to get your business into the top 3 positions.",
        },
      },
    ],
  },
];

const rankingFactors = [
  {
    icon: "📋",
    title: "Google Business Profile Completeness",
    desc: "A 100% complete profile — accurate business name, address, phone, website, hours, categories, photos, products, and services — is the foundation of every Google Maps marketing strategy.",
  },
  {
    icon: "⭐",
    title: "Review Count & Rating",
    desc: "Review quantity and quality are among the top Google Maps ranking signals. A systematic review generation strategy builds the social proof that boosts both Maps rankings and conversion rates.",
  },
  {
    icon: "🏛️",
    title: "Local Citations & NAP Consistency",
    desc: "Consistent Name, Address, Phone (NAP) data across Yelp, Yell, Thomson Local and 50+ directories reinforces your business location signals and directly improves Maps prominence.",
  },
  {
    icon: "🔗",
    title: "Website Local SEO",
    desc: "Your website's on-page local SEO — local keyword usage, location pages, schema markup, and internal linking — directly influences your Google Maps ranking. The two signals work together.",
  },
  {
    icon: "📸",
    title: "Photos & Posts Activity",
    desc: "Regular photo uploads and Google Business Profile posts signal an active, trustworthy business to Google. Profiles with 100+ photos receive 520% more calls than profiles with under 10 photos.",
  },
  {
    icon: "📍",
    title: "Category & Attribute Accuracy",
    desc: "Choosing the most accurate primary and secondary categories for your Google Business Profile is critical. SBMP research identifies the exact categories your top-ranking competitors use.",
  },
];

const faqs = [
  {
    q: "What is Google Maps marketing?",
    a: "Google Maps marketing is the process of optimising your Google Business Profile and local SEO signals to rank your business in the Google Maps Local 3-Pack — the three business listings that appear at the top of search results for local queries. It includes Google Business Profile optimisation, local citation building, review management, and on-page local SEO. Appearing in the Local 3-Pack significantly increases calls, foot traffic, and website visits.",
  },
  {
    q: "How do I rank my business on Google Maps?",
    a: "To rank on Google Maps: (1) Claim and fully complete your Google Business Profile with accurate NAP, categories, photos, and services; (2) Build local citations across Yelp, Yell, Thomson Local and directories; (3) Generate Google reviews; (4) Optimise your website pages for local keywords; (5) Earn local backlinks. SBMP manages all of this as part of our local SEO packages.",
  },
  {
    q: "What is GMB in SEO?",
    a: "GMB (Google My Business) in SEO refers to the optimisation of your Google Business Profile as part of a local SEO strategy. GMB signals including profile completeness, review count, review rating, photo frequency, and posting activity are key local ranking factors that determine whether your business appears in the Google Maps Local 3-Pack.",
  },
  {
    q: "How long does Google Maps ranking take?",
    a: "Google Maps ranking improvements typically begin within 4–8 weeks. The Local 3-Pack often responds faster than organic rankings. Most local businesses working with SBMP see Maps 3-pack improvements within 30–60 days. Competitive markets may take 3–6 months for top-3 positions.",
  },
  {
    q: "What are Google Maps local ranking factors?",
    a: "Google Maps ranking factors include: (1) Relevance — how well your profile matches the search query; (2) Distance — proximity to the searcher; (3) Prominence — how well-known your business is online, including review count, ratings, and citations. Profile completeness, category accuracy, photo count, posting frequency, and website local SEO all contribute.",
  },
  {
    q: "Is Google Maps marketing free?",
    a: "Creating and maintaining a Google Business Profile is free. Ranking in the Google Maps Local 3-Pack through organic optimisation is also free — though it requires consistent SEO work. SBMP manages organic Google Maps marketing as part of our local SEO plans from £199/month — you do not pay Google for organic 3-pack visibility.",
  },
  {
    q: "What is local search marketing?",
    a: "Local search marketing is the combination of strategies used to increase a business's visibility in local search results — including Google Maps and organic results for location-based queries. It encompasses Google Business Profile optimisation, local SEO, Google Ads, citation building, and reputation management.",
  },
  {
    q: "How many businesses appear in the Google Maps Local 3-Pack?",
    a: "Google shows only 3 businesses in the Local Pack for most local search queries. These top 3 positions receive the majority of clicks — the 3-Pack gets 44% of all clicks for local searches. Ranking outside the top 3 results in dramatically fewer impressions and calls. SBMP's goal is always to get your business into the top 3 positions.",
  },
];

export default function GoogleMapsMarketingPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }} />

      {/* HERO */}
      <section
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.20) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8" style={{ color: "#4A5A6E" }}>
            <Link href="/" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Home</Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Google Maps Marketing</span>
          </nav>

          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6"
              style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}
            >
              🗺️ Google Maps Local 3-Pack Specialists
            </div>

            {/* H1 — primary keyword "google maps marketing" */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                background: "linear-gradient(135deg, #E2E8F0 0%, #4F8EF7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "1.1",
              }}
            >
              Google Maps Marketing That Gets You in the Local 3-Pack
            </h1>

            <p className="text-lg sm:text-xl mb-6" style={{ color: "#8B9CB8" }}>
              The Google Maps Local 3-Pack is the most valuable real estate in local search. SBMP is a specialist
              Google Maps marketing company — we get local businesses into the top 3 positions where 44% of all clicks
              go.
            </p>

            {/* AEO Answer Block */}
            <p
              className="text-base mb-10 p-4 rounded-xl"
              style={{
                color: "#CBD5E1",
                backgroundColor: "rgba(79,142,247,0.06)",
                border: "1px solid rgba(79,142,247,0.15)",
                lineHeight: "1.75",
              }}
            >
              <strong style={{ color: "#E2E8F0" }}>Google Maps marketing</strong> is the optimisation of your Google
              Business Profile and local SEO signals to rank your business in the Google Maps Local 3-Pack — the three
              business listings that appear at the top of local search results. As of 2026, SBMP helps local businesses
              rank in the Google Maps 3-Pack within 30–60 days using proven local search marketing strategies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get My Free Maps Audit →
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#E2E8F0" }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "44%", label: "of local clicks go to Maps 3-Pack" },
                { value: "30–60", label: "Days to 3-Pack (avg)" },
                { value: "150+", label: "Local Businesses Ranked" },
                { value: "7×", label: "More clicks vs incomplete profile" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-2xl font-extrabold mb-1" style={{ color: "#4F8EF7", fontFamily: "var(--font-display, sans-serif)" }}>{s.value}</div>
                  <div className="text-xs" style={{ color: "#8B9CB8" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY GOOGLE MAPS */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
              Why Google Maps Marketing Is the Most Powerful Local Strategy
            </h2>
            <p className="text-base mb-5" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              When a local customer searches &ldquo;plumber near me&rdquo; or &ldquo;dentist open now&rdquo;, the first
              thing they see is not organic search results — it&apos;s the <strong style={{ color: "#CBD5E1" }}>Google Maps Local 3-Pack</strong>. This
              prominent placement, appearing above all organic results, captures the highest-intent, ready-to-buy local
              customers at the exact moment they search.
            </p>
            <p className="text-base mb-5" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              Google Maps marketing (also called Google local marketing or GMB marketing) focuses on the three signals
              Google uses to rank businesses in the Maps pack: <strong style={{ color: "#CBD5E1" }}>relevance</strong>,{" "}
              <strong style={{ color: "#CBD5E1" }}>distance</strong>, and{" "}
              <strong style={{ color: "#CBD5E1" }}>prominence</strong>. SBMP optimises all three — maximising your
              profile relevance, building the local authority signals that drive prominence, and ensuring your Google
              Business Profile is fully complete and active.
            </p>
            <p className="text-base" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              Google Maps marketing works alongside{" "}
              <Link href="/local-seo" style={{ color: "#4F8EF7" }} className="hover:underline">local SEO</Link> and{" "}
              <Link href="/local-advertising" style={{ color: "#4F8EF7" }} className="hover:underline">local advertising</Link>{" "}
              as part of a complete{" "}
              <Link href="/local-business-marketing" style={{ color: "#4F8EF7" }} className="hover:underline">local business marketing</Link>{" "}
              strategy.
            </p>
          </div>
        </div>
      </section>

      {/* RANKING FACTORS */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
              Google Maps Local Ranking Factors We Optimise
            </h2>
            <p style={{ color: "#8B9CB8" }}>Everything Google uses to rank your business in the Local 3-Pack — we handle all of it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rankingFactors.map((f) => (
              <div key={f.title} className="rounded-2xl p-6" style={{ backgroundColor: "#0D1627", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>{f.title}</h3>
                <p className="text-sm" style={{ color: "#8B9CB8", lineHeight: "1.7" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
              Our Google Maps Marketing Process
            </h2>
            <p style={{ color: "#8B9CB8" }}>A proven, systematic approach to Google Maps Local 3-Pack rankings.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Maps Audit", desc: "We audit your Google Business Profile, competitor 3-Pack rankings, citation consistency, and current Maps visibility to identify every gap." },
              { step: "02", title: "Profile Optimisation", desc: "Full Google Business Profile overhaul — categories, descriptions, services, products, photos, attributes — everything Google uses to assess relevance." },
              { step: "03", title: "Citation & Link Building", desc: "We build 50+ consistent local citations and earn local backlinks — the off-page signals that drive Maps prominence and ranking authority." },
              { step: "04", title: "Ongoing Management", desc: "Weekly posts, review responses, Q&A management, new photo uploads, and monthly reporting on your Maps ranking progress and call volume." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-3xl font-extrabold mb-3" style={{ color: "rgba(79,142,247,0.35)", fontFamily: "var(--font-display, sans-serif)" }}>{s.step}</div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>{s.title}</h3>
                <p className="text-xs" style={{ color: "#8B9CB8", lineHeight: "1.7" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
            Google Maps Marketing — Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl group" style={{ backgroundColor: "#0D1627", border: "1px solid rgba(255,255,255,0.07)" }}>
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-sm list-none" style={{ color: "#E2E8F0" }}>
                  {faq.q}
                  <span className="shrink-0 text-lg transition-transform group-open:rotate-45" style={{ color: "#4F8EF7" }}>+</span>
                </summary>
                <p className="px-6 pb-5 text-sm" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Local Business Marketing", href: "/local-business-marketing" },
              { label: "Local SEO Services", href: "/local-seo" },
              { label: "Local Advertising", href: "/local-advertising" },
              { label: "Local Marketing Agency", href: "/local-marketing-agency" },
              { label: "Local Social Media Marketing", href: "/local-social-media-marketing" },
              { label: "Local Marketing Strategies", href: "/local-marketing-strategies" },
              { label: "Free Audit", href: "/free-audit" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:border-blue-500/40" style={{ backgroundColor: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.2)", color: "#8B9CB8" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(79,142,247,0.15) 0%, transparent 70%), #080D1A", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
            Ready to Dominate Google Maps?
          </h2>
          <p className="text-base mb-8" style={{ color: "#8B9CB8" }}>
            Get a free Google Maps marketing audit. We&apos;ll show you exactly why you&apos;re not in the Local 3-Pack
            and what it will take to get there.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-audit" className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#4F8EF7" }}>
              Get My Free Google Maps Audit →
            </Link>
            <Link href="/local-seo" className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#E2E8F0" }}>
              View Local SEO Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
