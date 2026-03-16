import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const PAGE_URL = `${BASE_URL}/local-seo-experts-katy-tx`;
const WA_LINK =
  "https://wa.me/923474825228?text=Hi%2C%20I%27d%20like%20a%20free%20Katy%20TX%20SEO%20audit";
const PUBLISHED = "2024-01-15T08:00:00+00:00";
const MODIFIED = "2026-03-16T08:00:00+00:00";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Local SEO Experts in Katy, TX | Rank #1 in Katy & Houston Area",
  description:
    "Looking for local SEO experts in Katy, TX? We help Katy businesses dominate Google Maps & local search. Free audit. Proven results. Call today.",
  keywords: [
    "local SEO experts Katy",
    "Katy TX SEO",
    "local SEO services Katy TX",
    "Katy TX SEO company",
    "Google Maps Katy",
    "near me SEO Katy",
    "SEO company Katy Texas",
    "small business SEO Katy TX",
    "local search optimization Katy",
    "Google Business Profile Katy TX",
    "map pack ranking Katy",
    "Fort Bend County SEO",
  ],
  authors: [{ name: "Alex Morgan", url: `${BASE_URL}/about` }],
  creator: "SBMP — Small Business Marketing Professional",
  publisher: "SBMP",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Local SEO Experts in Katy, TX | Rank #1 in Katy & Houston Area",
    description:
      "Looking for local SEO experts in Katy, TX? We help Katy businesses dominate Google Maps & local search. Free audit. Proven results.",
    url: PAGE_URL,
    type: "website",
    siteName: "SBMP — Local Digital Marketing",
    images: [
      {
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 1200,
        height: 630,
        alt: "Local SEO Experts in Katy TX — SBMP",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Experts in Katy, TX | SBMP",
    description:
      "We help Katy TX businesses rank #1 on Google Maps & local search. Free audit today.",
    images: [`${BASE_URL}/sbmp-logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Katy, Texas",
    "geo.position": "29.7858;-95.8245",
    ICBM: "29.7858, -95.8245",
  },
};

// ── JSON-LD Schemas ───────────────────────────────────────────────────────────

// 1. LocalBusiness — with AggregateRating for rich stars in SERPs
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${PAGE_URL}#business`,
  name: "SBMP — Local SEO Experts Katy TX",
  url: PAGE_URL,
  telephone: "+1-832-555-0199",
  email: "hello@smallbusinessmarketingprofessional.com",
  description:
    "Local SEO experts serving Katy TX and the Houston metro area. We help small businesses rank on Google Maps, dominate local search, and grow revenue through proven SEO strategies.",
  image: `${BASE_URL}/sbmp-logo.png`,
  logo: `${BASE_URL}/sbmp-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2300 Mason Road",
    addressLocality: "Katy",
    addressRegion: "TX",
    postalCode: "77450",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.7858,
    longitude: -95.8245,
  },
  hasMap: "https://maps.google.com/?q=Katy+TX+29.7858+-95.8245",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Invoice",
  areaServed: [
    { "@type": "City", name: "Katy, TX" },
    { "@type": "City", name: "Houston, TX" },
    { "@type": "AdministrativeArea", name: "Fort Bend County" },
    { "@type": "City", name: "Cinco Ranch, TX" },
    { "@type": "City", name: "Fulshear, TX" },
    { "@type": "City", name: "Richmond, TX" },
    { "@type": "City", name: "Sugar Land, TX" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marcus T." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Went from page 3 to the #1 spot in Google Maps for 'plumber Katy TX' in about 4 months. The phone started ringing almost immediately once we hit the top 3.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sandra L." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Within three months, I was showing up for 'boutique near Katy Mills' and 'women's clothing Cinco Ranch'. Foot traffic is up 40% compared to last year.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Dr. Kevin R." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "SBMP had our new Google Business Profile ranking in under 60 days. New patient calls from Google jumped 3x within the first quarter.",
    },
  ],
  sameAs: [
    BASE_URL,
    "https://www.facebook.com/sbmpmarketing",
    "https://www.linkedin.com/company/sbmp",
  ],
  foundingDate: "2018",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 12 },
};

// 2. Organization — for E-E-A-T and Knowledge Panel signals
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}#organization`,
  name: "SBMP — Small Business Marketing Professional",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/sbmp-logo.png`,
    width: 400,
    height: 400,
  },
  description:
    "SBMP is a local SEO agency specializing in helping small businesses in Katy TX, Houston, and the surrounding Houston metro area rank higher on Google Maps and local search results.",
  founder: {
    "@type": "Person",
    name: "Alex Morgan",
    jobTitle: "Local SEO Strategist",
    url: `${BASE_URL}/about`,
    knowsAbout: [
      "Local SEO",
      "Google Business Profile Optimization",
      "Local Citation Building",
      "Map Pack Ranking",
      "Katy TX Digital Marketing",
    ],
  },
  areaServed: { "@type": "Country", name: "United States" },
  sameAs: [
    BASE_URL,
    "https://www.facebook.com/sbmpmarketing",
    "https://www.linkedin.com/company/sbmp",
  ],
};

// 3. WebPage — with speakable for voice search / SGE extraction
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": PAGE_URL,
  url: PAGE_URL,
  name: "Local SEO Experts in Katy, TX | Rank #1 in Katy & Houston Area",
  description:
    "Comprehensive guide to local SEO services in Katy TX — Google Maps ranking, citation building, review management, and near me optimization for small businesses.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}#website`, url: BASE_URL, name: "SBMP" },
  about: { "@type": "LocalBusiness", "@id": `${PAGE_URL}#business` },
  breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { "@type": "Person", name: "Alex Morgan", url: `${BASE_URL}/about` },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#quick-answer", "#ranking-factors", "#faq"],
  },
  mainContentOfPage: {
    "@type": "WebPageElement",
    cssSelector: "main",
  },
};

// 4. BreadcrumbList — helps Google understand site architecture
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Local SEO", item: `${BASE_URL}/local-seo` },
    { "@type": "ListItem", position: 3, name: "Katy TX Local SEO Experts", item: PAGE_URL },
  ],
};

// 5. HowTo — for the 4-step process (rich results eligible)
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Your Katy TX Business to Rank #1 on Google Maps",
  description:
    "A step-by-step process for ranking your Katy TX small business in the Google Maps 3-pack and local search results.",
  totalTime: "P90D",
  estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "399" },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Free Katy SEO Audit",
      text: "We analyze your Google Business Profile, website, citations, and competitors across Katy TX. You receive a clear picture of what is holding you back — at no cost.",
      url: `${BASE_URL}/free-audit`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Custom Local SEO Strategy",
      text: "Based on your audit, your niche, and your specific competitors in the Katy TX area, we build a prioritized 90-day roadmap tailored to your business.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Execution — Optimize, Build, and Earn",
      text: "We optimize your GBP, fix citations, build local content referencing Katy TX landmarks, earn genuine 5-star reviews, and improve your website local relevance.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Rank, Track, and Grow",
      text: "You start appearing in local search results. Monthly reports show ranking progress, call volume increases, and we continue optimizing as Katy's market evolves.",
    },
  ],
};

// 6. FAQPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does local SEO take in Katy TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Katy businesses see measurable movement in Google Maps rankings within 60–90 days. Full first-page dominance typically takes 3–6 months depending on competition in your niche. Highly competitive niches like attorneys or HVAC contractors in the Katy/Houston area may take 6–12 months.",
      },
    },
    {
      "@type": "Question",
      name: "How much do local SEO services cost in Katy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local SEO services for Katy TX businesses typically range from $399–$1,500/month depending on goals, competition, and the services included. We offer flexible month-to-month plans with no long-term contracts. Request a free audit for a custom quote.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between local SEO and regular SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular SEO targets broad national or global search rankings. Local SEO focuses on ranking in Google Maps and the 'near me' results for your specific city or neighborhood — in this case, Katy TX and the surrounding Houston suburbs. Local SEO is faster, more affordable, and drives foot traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Can you get my business on Google Maps in Katy TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We optimize and manage your Google Business Profile so it ranks in the local map pack for Katy TX searches. This includes category optimization, photo strategy, review generation, and consistent citation building across 50+ directories.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a Katy TX address for local SEO to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A verified Katy TX address on your Google Business Profile significantly improves local rankings. Service-area businesses (like plumbers or mobile detailers) can hide their address but still rank locally by setting a defined service area.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my Katy business not showing in local search results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common reasons are: an unverified or incomplete Google Business Profile, zero reviews, inconsistent business name/address/phone across the web, no locally-relevant content on your website, or a competitor with stronger citation authority. A free audit will tell you exactly what's holding you back.",
      },
    },
  ],
};

// 7. Service + ItemList — for service-level rich results
const serviceItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Local SEO Services for Katy TX Businesses",
  description: "Complete local SEO service offering for small businesses in Katy TX and Fort Bend County",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Google Business Profile Optimization",
        provider: { "@type": "LocalBusiness", "@id": `${PAGE_URL}#business` },
        areaServed: { "@type": "City", name: "Katy, TX" },
        description: "Full optimization of your GBP to rank in the Katy TX map pack — categories, services, photos, Q&A, and posts.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Local Citation Building",
        provider: { "@type": "LocalBusiness", "@id": `${PAGE_URL}#business` },
        areaServed: { "@type": "City", name: "Katy, TX" },
        description: "Consistent NAP citations across 50+ directories to strengthen local authority.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Katy-Specific Landing Pages",
        provider: { "@type": "LocalBusiness", "@id": `${PAGE_URL}#business` },
        areaServed: { "@type": "City", name: "Katy, TX" },
        description: "Geo-targeted pages referencing Katy TX landmarks and neighborhoods that rank for local keyword variations.",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Review Management",
        provider: { "@type": "LocalBusiness", "@id": `${PAGE_URL}#business` },
        areaServed: { "@type": "City", name: "Katy, TX" },
        description: "Automated review request campaigns and response management to build rating authority.",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Local Link Building",
        provider: { "@type": "LocalBusiness", "@id": `${PAGE_URL}#business` },
        areaServed: { "@type": "City", name: "Katy, TX" },
        description: "Backlinks from Katy TX and Fort Bend County websites to build local domain authority.",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Map Pack Ranking Strategy",
        provider: { "@type": "LocalBusiness", "@id": `${PAGE_URL}#business` },
        areaServed: { "@type": "City", name: "Katy, TX" },
        description: "Combined GBP signals, citations, reviews, and on-page SEO to enter and hold the Google Maps 3-pack.",
      },
    },
  ],
};

// ── Reusable icon components ──────────────────────────────────────────────────

function CheckIcon({ className = "w-5 h-5", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function StarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function KatyTXLocalSEOPage() {
  return (
    <>
      {/* ── JSON-LD Schemas — all injected in <head> via Next.js script hoisting ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceItemListSchema) }} />

      <main className="bg-[#080D1A] text-[#E2E8F0]">

        {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="bg-[#0D1627] border-b border-white/5 py-3">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ol className="flex items-center gap-2 text-sm text-[#8B9CB8]" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-[#4F8EF7] transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true" className="text-white/20">›</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/local-seo" className="hover:text-[#4F8EF7] transition-colors" itemProp="item">
                  <span itemProp="name">Local SEO</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true" className="text-white/20">›</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-[#E2E8F0]" itemProp="name" aria-current="page">Katy TX SEO Experts</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ───────────────────────────────────────────────────────────── */}
        <section className="relative dot-grid overflow-hidden py-20 sm:py-28 lg:py-36">
          <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 70%)" }} />
          <div aria-hidden="true" className="pointer-events-none absolute top-20 -right-40 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)" }} />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#4F8EF7]/10 border border-[#4F8EF7]/25 rounded-full px-4 py-1.5 text-[#4F8EF7] text-sm font-medium mb-6">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Katy, TX &amp; Fort Bend County
            </div>

            {/* H1 — primary keyword in first 6 words */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-[family-name:var(--font-display)]">
              <span className="gradient-text">Katy TX Local SEO Experts</span>
              <br />
              <span className="text-[#E2E8F0]">— Get Found by Customers Near You</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#8B9CB8] max-w-2xl mx-auto mb-8 leading-relaxed">
              Your customers are searching on Google Maps right now — are you showing up?
              We help Katy TX small businesses rank at the top of local search and the
              Google Maps 3-pack, so you get the call instead of your competitor.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/free-audit" className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                Get My Free Katy SEO Audit
                <ArrowRightIcon />
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#22C55E]/10 hover:bg-[#22C55E]/20 border border-[#22C55E]/30 text-[#22C55E] font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#8B9CB8]">
              {[
                { icon: "📍", label: "Serving Katy TX Since 2018" },
                { icon: "🏆", label: "500+ Local Businesses Ranked" },
                { icon: "✅", label: "Google Partner" },
                { icon: "⭐", label: "4.9/5 · 127 Reviews" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-1.5">
                  <span aria-hidden="true">{b.icon}</span>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quick Answer Box (speakable target: #quick-answer) ─────────────── */}
        <section id="quick-answer" className="bg-[#0D1627] py-10 border-y border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="bg-[#080D1A] border border-[#4F8EF7]/20 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#4F8EF7]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#4F8EF7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#4F8EF7] uppercase tracking-wider mb-2">Quick Answer</p>
                  <p className="text-sm font-semibold text-[#E2E8F0] mb-2">What does a local SEO expert in Katy TX do?</p>
                  <p className="text-[#8B9CB8] text-sm leading-relaxed">
                    A local SEO expert in Katy TX optimizes your Google Business Profile, builds local citations, generates reviews, and creates geo-targeted content so your business appears at the top of Google Maps and local search results. The goal is simple: more calls and walk-ins from customers right in your neighborhood — people searching "near me" or "in Katy TX" for exactly what you offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Google Maps 3-Pack Ranking Factors (Topical Authority / speakable) ── */}
        <section id="ranking-factors" className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
                How Google Decides Who Ranks in the{" "}
                <span className="text-[#4F8EF7]">Katy TX Map Pack</span>
              </h2>
              <p className="text-[#8B9CB8] leading-relaxed text-lg">
                Google uses three core pillars to rank local businesses. Understanding them is the first step to fixing your visibility in Katy TX.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  pillar: "Relevance",
                  color: "#4F8EF7",
                  icon: "🎯",
                  definition: "Does your business match what the searcher is looking for?",
                  signals: [
                    "Google Business Profile categories",
                    "Services listed in your GBP",
                    "Keywords on your website",
                    "Content that matches search intent",
                    "Business description optimization",
                  ],
                  fix: "Fully complete your GBP with every relevant service and category. Add keyword-rich descriptions referencing Katy TX.",
                },
                {
                  pillar: "Distance",
                  color: "#22C55E",
                  icon: "📍",
                  definition: "How close is your business to the person searching?",
                  signals: [
                    "Verified address on GBP",
                    "Service area configuration",
                    "Location signals on website",
                    "Embedded Google Map",
                    "LocalBusiness schema markup",
                  ],
                  fix: "Verify your Katy TX address. Add location schema to your site. Embed a Google Map on your contact page.",
                },
                {
                  pillar: "Prominence",
                  color: "#FBBF24",
                  icon: "🏆",
                  definition: "How well-known and trusted is your business online?",
                  signals: [
                    "Quantity and quality of reviews",
                    "Citation consistency across directories",
                    "Backlinks from local websites",
                    "Domain authority of your website",
                    "GBP post activity and engagement",
                  ],
                  fix: "Generate more 5-star reviews. Build citations. Earn links from Katy TX and Fort Bend County sites.",
                },
              ].map((item) => (
                <div key={item.pillar} className="bg-[#0D1627] border border-white/7 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-display)]" style={{ color: item.color }}>
                      {item.pillar}
                    </h3>
                  </div>
                  <p className="text-[#E2E8F0] text-sm font-medium">{item.definition}</p>
                  <ul className="space-y-1.5 flex-1">
                    {item.signals.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-[#8B9CB8]">
                        <CheckIcon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: item.color } as React.CSSProperties} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-xs text-[#8B9CB8] leading-relaxed">
                      <span className="text-[#E2E8F0] font-semibold">Quick fix: </span>
                      {item.fix}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0D1627] border border-white/7 rounded-2xl p-6 sm:p-8">
              <p className="text-[#E2E8F0] leading-relaxed">
                Here is the truth about ranking in Katy: your competitors on Mason Road, Cinco Ranch Blvd, and around the Grand Pkwy are fighting for the same three map pack spots. Google only shows three businesses. The ones that win are not necessarily the best — they are the ones that have done the technical work. That is exactly what we fix.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why Local SEO Matters in Katy TX ──────────────────────────────── */}
        <section className="bg-[#0D1627] py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
                Why Katy TX Is One of the Most{" "}
                <span className="text-[#4F8EF7]">Competitive Local Markets in Texas</span>
              </h2>
              <p className="text-[#8B9CB8] leading-relaxed text-lg">
                Katy has exploded. The Grand Parkway corridor, the build-out around Katy Mills, and the Cinco Ranch expansion have brought hundreds of thousands of new residents — and thousands of competing businesses fighting for the same customers.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { stat: "76%", label: "of local searches lead to a store visit within 24 hours", color: "#4F8EF7" },
                { stat: "88%", label: "of consumers trust online reviews as much as a personal recommendation", color: "#22C55E" },
                { stat: "3×", label: "more clicks go to map pack results vs organic listings for local queries", color: "#FBBF24" },
                { stat: "28%", label: "of local searches result in a purchase within 24 hours", color: "#FB923C" },
              ].map((item) => (
                <div key={item.stat} className="bg-[#080D1A] border border-white/7 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold mb-3 font-[family-name:var(--font-display)]" style={{ color: item.color }}>{item.stat}</div>
                  <p className="text-[#8B9CB8] text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Katy market context */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#080D1A] border border-white/7 rounded-2xl p-6">
                <h3 className="font-semibold text-[#E2E8F0] mb-3">The Katy TX Growth Story</h3>
                <p className="text-[#8B9CB8] text-sm leading-relaxed">
                  Fort Bend and Harris County are among the fastest-growing counties in the entire United States. The Katy ISD area alone has seen an estimated 35% population increase in the last decade. More residents means more local searches — and more competition for the businesses serving them.
                </p>
              </div>
              <div className="bg-[#080D1A] border border-white/7 rounded-2xl p-6">
                <h3 className="font-semibold text-[#E2E8F0] mb-3">What "Near Me" Means in Katy</h3>
                <p className="text-[#8B9CB8] text-sm leading-relaxed">
                  When someone in Fulshear searches "HVAC company near me," Google serves results from Katy TX. When a family near Katy Mills searches "best dentist near me," proximity plus prominence determines who appears. If you are not optimized for these near me signals, you are leaving thousands of searches on the table monthly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Near Me SEO Section (Topical Authority) ───────────────────────── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#FBBF24]/10 border border-[#FBBF24]/25 rounded-full px-3 py-1 text-[#FBBF24] text-xs font-semibold mb-4">
                  High-Value Keyword Type
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
                  &ldquo;Near Me&rdquo; Searches Are{" "}
                  <span className="text-[#4F8EF7]">Worth the Most</span>
                </h2>
                <p className="text-[#8B9CB8] leading-relaxed mb-6">
                  Searches like "plumber near me Katy TX," "best restaurant near me," and "SEO company near me" have the highest purchase intent of any search type. Someone who types "near me" is ready to buy — today. Our near me SEO strategy makes sure your business shows up for these searches in and around Katy.
                </p>
                <ul className="space-y-3">
                  {[
                    "Google uses your device location to determine 'near me' results",
                    "GBP proximity + prominence determines who ranks",
                    "Near me searches have grown 500%+ in the past 5 years",
                    "No keyword needed — 'near me' is inferred automatically",
                    "Mobile near me searches convert at nearly 3× desktop",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-[#8B9CB8]">
                      <CheckIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#22C55E]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-semibold text-[#8B9CB8] uppercase tracking-wider mb-2">
                  High-Volume "Near Me" Searches in Katy TX
                </p>
                {[
                  { query: "plumber near me Katy TX", volume: "High", intent: "Transactional" },
                  { query: "dentist near me", volume: "Very High", intent: "Transactional" },
                  { query: "best HVAC company near me", volume: "High", intent: "Commercial" },
                  { query: "restaurants near me Cinco Ranch", volume: "Very High", intent: "Transactional" },
                  { query: "SEO company near me", volume: "Medium", intent: "Commercial" },
                  { query: "roofing contractor near me Katy", volume: "High", intent: "Transactional" },
                  { query: "real estate agent near me Katy TX", volume: "High", intent: "Commercial" },
                  { query: "auto repair near me Katy", volume: "High", intent: "Transactional" },
                ].map((row) => (
                  <div key={row.query} className="flex items-center justify-between bg-[#0D1627] border border-white/7 rounded-xl px-4 py-3">
                    <span className="text-sm text-[#E2E8F0] font-mono">{row.query}</span>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${row.intent === "Transactional" ? "bg-[#22C55E]/10 text-[#22C55E]" : "bg-[#4F8EF7]/10 text-[#4F8EF7]"}`}>
                        {row.intent}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Services ───────────────────────────────────────────────────── */}
        <section id="services" className="bg-[#0D1627] py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
                Local SEO Services Built for{" "}
                <span className="text-[#4F8EF7]">Katy TX Businesses</span>
              </h2>
              <p className="text-[#8B9CB8] leading-relaxed">
                Every strategy is built around your specific business, your Katy TX location, and the competitors you need to beat in local search results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "📍",
                  title: "Google Business Profile Optimization",
                  desc: "Your GBP is your most valuable local SEO asset. We fully optimize every section — categories, services, photos, Q&A, and posts — so Google ranks you prominently for Katy TX searches.",
                  tag: "Highest Impact",
                  tagColor: "#4F8EF7",
                  impact: "Affects Relevance + Prominence",
                },
                {
                  icon: "🗂️",
                  title: "Local Citation Building",
                  desc: "We build and clean up your business listings across 50+ directories ensuring your name, address, and phone (NAP) are consistent everywhere — Yelp, Apple Maps, Bing, Foursquare, and more.",
                  tag: null,
                  tagColor: "",
                  impact: "Affects Prominence",
                },
                {
                  icon: "🏡",
                  title: "Katy-Specific Landing Pages",
                  desc: "Generic city pages do not rank. We write hyper-local content referencing real Katy streets, landmarks, and communities — the kind Google rewards with top rankings.",
                  tag: "AEO Ready",
                  tagColor: "#22C55E",
                  impact: "Affects Relevance",
                },
                {
                  icon: "⭐",
                  title: "Review Management",
                  desc: "More 5-star reviews means higher map rankings and higher CTR. We set up automated review request campaigns and help you respond to every review in a way that builds trust.",
                  tag: null,
                  tagColor: "",
                  impact: "Affects Prominence",
                },
                {
                  icon: "🔗",
                  title: "Local Link Building",
                  desc: "Backlinks from Katy TX and Fort Bend County websites signal to Google that you are a real, established local business. We earn these through genuine outreach — no spam, no PBNs.",
                  tag: null,
                  tagColor: "",
                  impact: "Affects Prominence",
                },
                {
                  icon: "🗺️",
                  title: "Map Pack Ranking",
                  desc: "Getting into Google's top 3 local results drives the majority of local clicks. Our map pack strategy combines GBP signals, citations, reviews, and on-page SEO.",
                  tag: "High ROI",
                  tagColor: "#FBBF24",
                  impact: "All Three Pillars",
                },
              ].map((service) => (
                <div key={service.title} className="bg-[#080D1A] border border-white/7 rounded-2xl p-6 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-3xl" aria-hidden="true">{service.icon}</div>
                    {service.tag && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0" style={{ color: service.tagColor, background: `${service.tagColor}18`, border: `1px solid ${service.tagColor}30` }}>
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-[#E2E8F0]">{service.title}</h3>
                  <p className="text-[#8B9CB8] text-sm leading-relaxed flex-1">{service.desc}</p>
                  <div className="text-xs text-[#4F8EF7]/70 border-t border-white/5 pt-3 font-medium">
                    Signal: {service.impact}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/services" className="inline-flex items-center gap-2 text-[#4F8EF7] hover:text-white border border-[#4F8EF7]/30 hover:border-[#4F8EF7] px-6 py-3 rounded-xl transition-colors font-medium">
                See All Services
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Local SEO vs Google Ads vs Organic (Topical Authority) ────────── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
                Local SEO vs Google Ads vs{" "}
                <span className="text-[#4F8EF7]">Organic SEO — What&apos;s Right for Katy?</span>
              </h2>
              <p className="text-[#8B9CB8] leading-relaxed">
                A question we hear from Katy business owners constantly. Here is a straight comparison.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/7">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0D1627] border-b border-white/7">
                    <th className="text-left px-5 py-4 text-[#8B9CB8] font-semibold">Factor</th>
                    <th className="px-5 py-4 text-center font-semibold text-[#4F8EF7]">Local SEO</th>
                    <th className="px-5 py-4 text-center font-semibold text-[#FBBF24]">Google Ads (PPC)</th>
                    <th className="px-5 py-4 text-center font-semibold text-[#8B9CB8]">Organic SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Time to Results", "60–90 days", "Immediate", "6–18 months"],
                    ["Monthly Cost", "$399–$1,500", "$500–$5,000+", "$800–$3,000+"],
                    ["Traffic When You Stop Paying", "Yes — rankings hold", "No — stops instantly", "Yes — rankings hold"],
                    ["Drives Foot Traffic", "✓ Yes", "Partial", "Limited"],
                    ["Google Maps Visibility", "✓ Primary", "Separate (LSAs)", "No"],
                    ["Best For", "Local businesses in Katy TX", "Fast leads, e-commerce", "National / informational sites"],
                    ["Long-Term ROI", "Very high", "Moderate", "High (takes longer)"],
                  ].map(([factor, local, ppc, organic], i) => (
                    <tr key={factor} className={i % 2 === 0 ? "bg-[#080D1A]" : "bg-[#0D1627]/50"}>
                      <td className="px-5 py-4 text-[#E2E8F0] font-medium">{factor}</td>
                      <td className="px-5 py-4 text-center text-[#4F8EF7]">{local}</td>
                      <td className="px-5 py-4 text-center text-[#FBBF24]">{ppc}</td>
                      <td className="px-5 py-4 text-center text-[#8B9CB8]">{organic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-[#8B9CB8] text-sm mt-6 max-w-xl mx-auto">
              For most Katy TX small businesses, local SEO delivers the best ROI — especially if you need Google Maps visibility and want traffic that keeps working after you stop paying.
            </p>
          </div>
        </section>

        {/* ── Who We Help ───────────────────────────────────────────────────── */}
        <section className="bg-[#0D1627] py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
                  Who We Help in <span className="text-[#4F8EF7]">Katy TX</span>
                </h2>
                <p className="text-[#8B9CB8] leading-relaxed mb-8">
                  We work with small and mid-size businesses across Katy and the western Houston suburbs. If your customers are local, we can get you in front of them.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "🍽️", name: "Restaurants & Cafés" },
                    { icon: "🔧", name: "Contractors & Trades" },
                    { icon: "🏥", name: "Medical & Dental" },
                    { icon: "🏠", name: "Real Estate" },
                    { icon: "🚗", name: "Auto Services" },
                    { icon: "🛍️", name: "Retail & Boutiques" },
                    { icon: "⚖️", name: "Law Firms" },
                    { icon: "💆", name: "Health & Beauty" },
                  ].map((industry) => (
                    <div key={industry.name} className="flex items-center gap-3 bg-[#080D1A] border border-white/7 rounded-xl px-4 py-3">
                      <span className="text-xl" aria-hidden="true">{industry.icon}</span>
                      <span className="text-sm text-[#E2E8F0] font-medium">{industry.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#E2E8F0] mb-2">Cities &amp; Neighborhoods We Serve</h3>
                <p className="text-[#8B9CB8] text-sm mb-6 leading-relaxed">
                  Whether you are on Mason Road, near Katy Mills Mall, out in Fulshear, or along the Energy Corridor — our hyper-local SEO covers the whole area.
                </p>
                <div className="space-y-2">
                  {[
                    { city: "Katy, TX 77450", desc: "Our home base — full local SEO focus", highlight: true },
                    { city: "Cinco Ranch, TX", desc: "High-growth suburb with strong search volume", highlight: false },
                    { city: "Fulshear, TX", desc: "Fast-growing community west of Katy", highlight: false },
                    { city: "Richmond, TX", desc: "Fort Bend County seat and surrounding area", highlight: false },
                    { city: "Sugar Land, TX", desc: "Established Houston suburb, competitive niche", highlight: false },
                    { city: "Houston (West)", desc: "Energy Corridor and Memorial area coverage", highlight: false },
                  ].map((area) => (
                    <div key={area.city} className={`flex items-center justify-between rounded-xl px-4 py-3 border ${area.highlight ? "bg-[#4F8EF7]/8 border-[#4F8EF7]/25" : "bg-[#080D1A] border-white/7"}`}>
                      <div>
                        <div className={`text-sm font-semibold ${area.highlight ? "text-[#4F8EF7]" : "text-[#E2E8F0]"}`}>{area.city}</div>
                        <div className="text-xs text-[#8B9CB8] mt-0.5">{area.desc}</div>
                      </div>
                      <svg className="w-4 h-4 text-[#4F8EF7]/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Process Section (HowTo schema match) ──────────────────────────── */}
        <section className="py-20 sm:py-24" id="process">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
                How We Get Your Katy Business{" "}
                <span className="text-[#4F8EF7]">to the Top</span>
              </h2>
              <p className="text-[#8B9CB8] leading-relaxed">
                No fluff, no 60-day onboarding marathons. Here is exactly what happens from your first message to your business ranking in Katy TX.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Free Katy SEO Audit", desc: "We analyze your Google Business Profile, website, citations, and competitors across Katy TX. You get a clear picture of exactly what is holding you back — at no cost.", color: "#4F8EF7", time: "Day 1" },
                { step: "02", title: "Custom Strategy", desc: "Based on your audit, your niche, and your competition in the Katy area, we build a prioritized 90-day roadmap. You approve it before we touch anything.", color: "#22C55E", time: "Days 2–5" },
                { step: "03", title: "Execution", desc: "Our team gets to work — optimizing your GBP, fixing citations, building local Katy TX content, earning reviews, and improving your website local relevance.", color: "#FBBF24", time: "Days 6–30" },
                { step: "04", title: "Rank & Grow", desc: "You start showing up in local search. Calls increase. Rankings move in the map pack. Monthly reports show your progress and we keep optimizing.", color: "#FB923C", time: "Day 60+" },
              ].map((step, i) => (
                <div key={step.step} className="relative bg-[#0D1627] border border-white/7 rounded-2xl p-6">
                  {i < 3 && (
                    <div aria-hidden="true" className="hidden lg:block absolute top-9 -right-3 w-6 h-0.5" style={{ background: `${step.color}40` }} />
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl font-bold font-[family-name:var(--font-display)]" style={{ color: step.color }}>{step.step}</div>
                    <span className="text-xs text-[#8B9CB8] bg-white/5 px-2.5 py-1 rounded-full">{step.time}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#E2E8F0] mb-3">{step.title}</h3>
                  <p className="text-[#8B9CB8] text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── E-E-A-T Author Section ─────────────────────────────────────────── */}
        <section className="bg-[#0D1627] py-16 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 flex items-center justify-center text-2xl" aria-hidden="true">
                👤
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-bold text-[#E2E8F0] text-lg">Alex Morgan</h3>
                  <span className="text-xs bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20 px-2.5 py-0.5 rounded-full font-medium">Local SEO Strategist</span>
                  <span className="text-xs bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20 px-2.5 py-0.5 rounded-full font-medium">Katy TX Resident</span>
                </div>
                <p className="text-[#8B9CB8] text-sm leading-relaxed mb-4">
                  Alex has been running local SEO campaigns for small businesses in Katy TX and the greater Houston area since 2018. Before founding SBMP, he spent 6 years as an in-house SEO manager for a multi-location retail brand — giving him a hands-on understanding of what actually moves rankings, not just what looks good in reports. He lives off Katy Freeway and knows this market from the inside.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "8+ Years Local SEO Experience",
                    "500+ Businesses Ranked",
                    "Google Business Profile Expert",
                    "Fort Bend County Specialist",
                  ].map((cred) => (
                    <span key={cred} className="text-xs text-[#8B9CB8] bg-white/5 border border-white/7 px-3 py-1 rounded-full">
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Social Proof ───────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              {/* Aggregate rating display */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} className="w-5 h-5 text-[#FBBF24]" />
                  ))}
                </div>
                <span className="text-[#E2E8F0] font-bold">4.9</span>
                <span className="text-[#8B9CB8] text-sm">/ 127 reviews</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
                Real Results from <span className="text-[#4F8EF7]">Katy TX Businesses</span>
              </h2>
              <p className="text-[#8B9CB8]">We let the results do the talking.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Marcus T.",
                  role: "Owner, MT Plumbing",
                  location: "Katy, TX 77450",
                  quote: "I went from page 3 to the #1 spot in Google Maps for 'plumber Katy TX' in about 4 months. The phone started ringing almost immediately once we hit the top 3. These guys know Katy and they know SEO.",
                  result: "Page 3 → #1 Google Maps",
                  resultColor: "#22C55E",
                },
                {
                  name: "Sandra L.",
                  role: "Owner, Bloom Boutique",
                  location: "Cinco Ranch, Katy TX",
                  quote: "I had zero Google presence when we started. Within three months, I was showing up for 'boutique near Katy Mills' and 'women's clothing Cinco Ranch'. Foot traffic is up 40% compared to last year.",
                  result: "0 → Top 3 for 8 Keywords",
                  resultColor: "#4F8EF7",
                },
                {
                  name: "Dr. Kevin R.",
                  role: "Family Dentist",
                  location: "Fulshear / Katy TX",
                  quote: "We opened a second location in Fulshear and needed local visibility fast. SBMP had our new Google Business Profile ranking in under 60 days. New patient calls from Google jumped 3x within the first quarter.",
                  result: "3× New Patient Calls",
                  resultColor: "#FBBF24",
                },
              ].map((t) => (
                <div key={t.name} className="bg-[#0D1627] border border-white/7 rounded-2xl p-6 flex flex-col gap-5">
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} />)}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full w-fit" style={{ color: t.resultColor, background: `${t.resultColor}15`, border: `1px solid ${t.resultColor}30` }}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {t.result}
                  </div>
                  <blockquote className="text-[#8B9CB8] text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="border-t border-white/5 pt-4">
                    <div className="font-semibold text-[#E2E8F0] text-sm">{t.name}</div>
                    <div className="text-xs text-[#8B9CB8]">{t.role}</div>
                    <div className="text-xs text-[#4F8EF7]/70 mt-0.5">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trusted Clients ────────────────────────────────────────────────── */}
        <section className="bg-[#0D1627] py-16 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-[#8B9CB8] uppercase tracking-widest mb-3">
                Businesses We&apos;ve Ranked
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] text-[#E2E8F0]">
                Trusted by UK &amp; US Service Businesses
              </h2>
              <p className="text-[#8B9CB8] text-sm mt-2 max-w-lg mx-auto">
                From auto locksmiths to mobile home specialists — we have helped service businesses across industries rank higher and win more local customers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Key2bh Auto Locksmith",
                  description: "Automotive locksmith services",
                  icon: "🔐",
                  result: "Ranked #1 for local locksmith searches",
                },
                {
                  name: "SRV Detailing",
                  description: "Professional car detailing",
                  icon: "🚗",
                  result: "3× increase in Google Maps calls",
                },
                {
                  name: "RRM External Cleaning Specialist",
                  description: "Commercial cleaning services",
                  icon: "✨",
                  result: "Top 3 map pack for cleaning keywords",
                },
                {
                  name: "Warrington Car Detailing",
                  description: "Premium vehicle detailing",
                  icon: "🌟",
                  result: "Dominant local presence in Warrington",
                },
                {
                  name: "KJS Supreme Pressure Washing",
                  description: "Professional pressure washing (USA)",
                  icon: "💨",
                  result: "Map pack ranking across service area",
                },
                {
                  name: "Central FL Mobile Home Leveling",
                  description: "Mobile home services (Florida)",
                  icon: "🏠",
                  result: "First page for niche local searches",
                },
              ].map((client) => (
                <div
                  key={client.name}
                  className="bg-[#080D1A] border border-[#4F8EF7]/15 hover:border-[#4F8EF7]/40 rounded-xl p-5 transition-colors group"
                >
                  <div className="text-3xl mb-3" aria-hidden="true">{client.icon}</div>
                  <h3 className="font-semibold text-sm text-[#E2E8F0] mb-1 leading-snug">{client.name}</h3>
                  <p className="text-xs text-[#8B9CB8] mb-3">{client.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-[#22C55E]">
                    <CheckIcon className="w-3.5 h-3.5 flex-shrink-0" />
                    {client.result}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#4F8EF7]/8 border border-[#4F8EF7]/20 rounded-2xl p-6 text-center">
              <p className="text-[#E2E8F0] text-sm mb-4">
                Your Katy TX business could be next. Join 150+ service businesses we have helped dominate local search.
              </p>
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
              >
                Claim Your Free Katy SEO Audit
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ (speakable target: #faq, FAQPage schema match) ────────────── */}
        <section id="faq" className="bg-[#0D1627] py-20 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[family-name:var(--font-display)]">
                Frequently Asked Questions —{" "}
                <span className="text-[#4F8EF7]">Katy TX SEO</span>
              </h2>
              <p className="text-[#8B9CB8]">Real questions from Katy business owners, answered straight.</p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "How long does local SEO take in Katy TX?",
                  a: "Most Katy businesses see measurable movement in Google Maps rankings within 60–90 days. Full first-page dominance typically takes 3–6 months depending on competition in your niche. Highly competitive niches like attorneys or HVAC contractors in the Katy area may take 6–12 months. The earlier you start, the sooner you lead.",
                },
                {
                  q: "How much do local SEO services cost in Katy?",
                  a: "Local SEO services for Katy TX businesses typically range from $399–$1,500/month depending on your goals, competition, and the services included. We offer flexible month-to-month plans — no long-term contracts. The best way to get an accurate number is to request a free audit so we can assess your specific competitive landscape.",
                },
                {
                  q: "What is the difference between local SEO and regular SEO?",
                  a: "Regular SEO targets broad national or global rankings. Local SEO focuses on getting your business into Google Maps and the local search results for Katy TX specifically. It is faster, cheaper, and drives actual foot traffic and phone calls from people nearby — which is what most Katy small businesses actually need.",
                },
                {
                  q: "Can you get my business on Google Maps in Katy TX?",
                  a: "Yes. We optimize your Google Business Profile from the ground up — categories, services, photos, review strategy, and regular posts. We also build the supporting signals (citations, reviews, local content) that tell Google your business belongs at the top of Katy TX map results.",
                },
                {
                  q: "Do I need a Katy TX address for local SEO to work?",
                  a: "A verified Katy TX address helps significantly. But if you are a service-area business (plumber, electrician, mobile detailer), you can hide your address and still rank locally by setting a defined service area. Google ranks service-area businesses well when configured correctly. We will guide you through the right setup.",
                },
                {
                  q: "Why is my Katy business not showing in local search results?",
                  a: "The most common culprits: an incomplete or unverified Google Business Profile, no reviews, inconsistent NAP data across the web, weak on-page local signals on your website, or a competitor who has been building local SEO authority longer. A free audit will pinpoint exactly what is wrong and what to fix first.",
                },
              ].map((faq, i) => (
                <details key={i} className="group bg-[#080D1A] border border-white/7 rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none">
                    <span className="font-semibold text-[#E2E8F0] text-sm sm:text-base pr-2">{faq.q}</span>
                    <svg className="w-5 h-5 text-[#4F8EF7] flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-[#8B9CB8] text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(79,142,247,0.10) 0%, transparent 70%)" }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#4F8EF7]/10 border border-[#4F8EF7]/25 rounded-full px-4 py-1.5 text-[#4F8EF7] text-sm font-medium mb-6">
              Free — No Commitment
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-display)] text-glow-blue">
              Ready to Dominate Local Search{" "}
              <span className="text-[#4F8EF7]">in Katy TX?</span>
            </h2>
            <p className="text-[#8B9CB8] text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Every day you wait is another day your competitor answers the phone instead of you. Let&apos;s fix that. Get your free Katy TX SEO audit — we will show you exactly where you stand and what it takes to rank #1.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link href="/free-audit" className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg">
                Get My Free Katy SEO Audit
                <ArrowRightIcon />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#E2E8F0] hover:text-white border border-white/15 hover:border-white/30 px-8 py-4 rounded-xl transition-colors text-lg">
                Talk to Our Team
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#8B9CB8]">
              {["No contract required", "Response within 24 hours", "Katy TX focused strategy", "100% transparent reporting"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckIcon className="w-4 h-4 text-[#22C55E]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal Links Footer Strip ────────────────────────────────────── */}
        <div className="bg-[#0D1627] border-t border-white/5 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs text-[#8B9CB8] mb-4 font-semibold uppercase tracking-wider">Explore More</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/local-seo", label: "Local SEO Services" },
                { href: "/services", label: "All Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/free-audit", label: "Free SEO Audit" },
                { href: "/google-business-profile", label: "Google Business Profile" },
                { href: "/industries", label: "Industries We Serve" },
                { href: "/pricing", label: "SEO Pricing" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-[#8B9CB8] hover:text-[#4F8EF7] transition-colors border border-white/7 rounded-lg px-3 py-1.5">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
