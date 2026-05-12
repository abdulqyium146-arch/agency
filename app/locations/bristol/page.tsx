import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const PAGE_URL = `${BASE_URL}/locations/bristol`;
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%27m%20a%20Bristol%20small%20business%20and%20I%27d%20love%20to%20discuss%20marketing%20to%20help%20grow%20my%20business.%20Can%20you%20help%3F";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Small Business Marketing Bristol | Local SEO & Digital Marketing Expert",
  description:
    "Expert small business marketing in Bristol from £199/month. Local SEO, Google Ads & web design that gets you to page 1 of Google. 12+ Bristol businesses ranked. Free audit — no contracts.",
  keywords: [
    "small business marketing bristol",
    "small business marketing agency bristol",
    "digital marketing bristol",
    "local SEO bristol",
    "SEO agency bristol",
    "marketing consultant bristol",
    "online marketing bristol",
    "bristol marketing company",
    "google ads bristol",
    "web design bristol",
    "local marketing bristol",
    "google business profile bristol",
    "bristol SEO expert",
    "affordable marketing bristol",
    "small business SEO bristol",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Small Business Marketing Bristol | Local SEO & Digital Marketing Expert",
    description:
      "Expert small business marketing in Bristol from £199/month. Local SEO, Google Ads & web design that gets you to page 1 of Google. Free audit.",
    url: PAGE_URL,
    type: "website",
    siteName: "SBMP — Local Digital Marketing",
    images: [
      {
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 1200,
        height: 630,
        alt: "Small Business Marketing Bristol — SBMP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Marketing Bristol | SBMP",
    description:
      "Expert small business marketing in Bristol from £199/month. Local SEO, Google Ads & web design. Free audit.",
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
    },
  },
};

// ─── Schemas ──────────────────────────────────────────────────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${PAGE_URL}#localbusiness`,
  name: "SBMP — Small Business Marketing Bristol",
  description:
    "Expert small business marketing agency in Bristol. Local SEO, Google Ads, web design and digital marketing for Bristol small businesses from £199/month.",
  url: PAGE_URL,
  logo: `${BASE_URL}/sbmp-logo.png`,
  image: `${BASE_URL}/sbmp-logo.png`,
  email: "hello@sbmp.com",
  priceRange: "£199–£699",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bristol",
    addressRegion: "South West England",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4545,
    longitude: -2.5879,
  },
  areaServed: [
    { "@type": "City", name: "Bristol" },
    { "@type": "AdministrativeArea", name: "South West England" },
    { "@type": "Place", name: "Clifton, Bristol" },
    { "@type": "Place", name: "Southville, Bristol" },
    { "@type": "Place", name: "Bedminster, Bristol" },
    { "@type": "Place", name: "Harbourside, Bristol" },
    { "@type": "Place", name: "Stokes Croft, Bristol" },
    { "@type": "Place", name: "Aztec West, Bristol" },
    { "@type": "Place", name: "Kingswood, Bristol" },
    { "@type": "Place", name: "Bradley Stoke, Bristol" },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61583689962796",
    "https://www.instagram.com/small_business_marketing_profe/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 150,
    bestRating: 5,
    worstRating: 1,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Small Business Marketing Packages Bristol",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter — Local SEO Bristol",
        price: "199",
        priceCurrency: "GBP",
        description: "Google Business Profile optimisation, local citations, on-page SEO.",
        url: `${BASE_URL}/pricing`,
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Growth — SEO + Google Ads Bristol",
        price: "349",
        priceCurrency: "GBP",
        description: "Full local SEO plus Google Ads management for Bristol businesses.",
        url: `${BASE_URL}/pricing`,
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Pro — Complete Digital Marketing Bristol",
        price: "599",
        priceCurrency: "GBP",
        description: "All-in-one: SEO, Google Ads, website, social media, reputation management.",
        url: `${BASE_URL}/pricing`,
        availability: "https://schema.org/InStock",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE_URL}/locations` },
    { "@type": "ListItem", position: 3, name: "Bristol", item: PAGE_URL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  name: "Small Business Marketing Bristol",
  description:
    "Expert small business marketing in Bristol. Local SEO, Google Ads, web design from £199/month. 12+ Bristol businesses ranked on page 1.",
  url: PAGE_URL,
  inLanguage: "en-GB",
  isPartOf: { "@type": "WebSite", url: BASE_URL },
  dateModified: "2026-05-11",
  author: {
    "@type": "Person",
    name: "Alex Morgan",
    jobTitle: "Local SEO Expert & Founder",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".page-summary", ".faq-section", "h1", "h2"],
  },
  breadcrumb: breadcrumbSchema,
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${PAGE_URL}#howto`,
  name: "How Small Business Marketing Works in Bristol",
  description:
    "Our proven 5-step process for getting Bristol small businesses to page 1 of Google and generating consistent local leads.",
  totalTime: "P90D",
  estimatedCost: { "@type": "MonetaryAmount", currency: "GBP", value: "199" },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Free Bristol Marketing Audit",
      text: "We audit your Google Business Profile, website, current rankings, local citations, and top Bristol competitors — identifying exactly what's holding you back from page 1.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Bristol-Specific Strategy",
      text: "We build a tailored marketing plan targeting your exact Bristol postcode, service area, and the keywords your customers actually use.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Full On-Page & GBP Optimisation",
      text: "We optimise your website, Google Business Profile, and local citations across 80+ directories to signal authority to Google.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Local Authority Building",
      text: "We earn Bristol-relevant backlinks and build your online reputation through a review generation system.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Monthly Reports & Ongoing Growth",
      text: "You receive clear monthly reports showing Bristol keyword rankings, GBP insights, leads generated, and what's next.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is small business marketing in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small business marketing in Bristol is the process of promoting your local business online to attract customers across Bristol and surrounding areas including Clifton, Southville, Bedminster, Harbourside, and Aztec West. It combines local SEO, Google Business Profile optimisation, Google Ads, social media, and web design — all targeted to the Bristol market — to generate consistent local leads.",
      },
    },
    {
      "@type": "Question",
      name: "How much does small business marketing cost in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Small business marketing in Bristol typically costs £199–£599 per month. Our Starter plan (£199/month) covers local SEO and Google Business Profile; the Growth plan (£349/month) adds Google Ads management; the Pro plan (£599/month) includes website, social media, and full-stack digital marketing. All plans are month-to-month — no long-term contracts.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to rank on page 1 of Google in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Bristol small businesses see early ranking movement within 30–60 days of starting local SEO. Strong page-1 positions for competitive keywords typically take 90–120 days. Google Maps 3-Pack rankings often move faster than organic rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Is local SEO worth it for a small business in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Bristol has over 40,000 registered businesses competing for local customers. Appearing in the Google Maps 3-Pack can generate 5–20 additional qualified leads per month. At £199/month, a single new customer typically delivers a 3–10× return on investment.",
      },
    },
    {
      "@type": "Question",
      name: "What does a small business marketing agency in Bristol do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A small business marketing agency in Bristol helps local businesses get found online through: Google Business Profile optimisation, local SEO (ranking in Google Maps and page 1), Google Ads management, website design, social media marketing, and online reputation management — all aimed at generating consistent leads from Bristol customers.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Bristol do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Bristol postcodes (BS1–BS16) and surrounding areas: Bristol city centre, Clifton, Redland, Cotham, Southville, Bedminster, Bishopston, Horfield, Fishponds, Easton, Lawrence Hill, Kingswood, Patchway, Aztec West, Filton, and Bradley Stoke.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer Google Ads management for Bristol businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We manage Google Ads campaigns specifically targeted to Bristol postcodes. We set up conversion tracking, eliminate wasted ad spend, and optimise your ads for the services Bristol customers are actively searching for — delivering immediate page-1 visibility while your SEO builds.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in Bristol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all service-based small businesses in Bristol: plumbers, electricians, roofers, builders, solicitors, accountants, dentists, physiotherapists, beauty salons, restaurants, cafés, estate agents, mortgage brokers, personal trainers, cleaning companies, landscapers, and IT support firms.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help my Bristol business rank in the Google Maps 3-Pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Google Maps (Local Pack) ranking is one of our core specialisms. We optimise your Google Business Profile, build local citations, generate reviews, and create content that signals Bristol authority to Google. Most businesses see Local Pack movement within 60 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to sign a long-term contract for Bristol marketing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Never. All our Bristol small business marketing plans are month-to-month. We earn your loyalty through results, not contracts. Cancel anytime with 30 days' notice.",
      },
    },
  ],
};

// ─── Page data ────────────────────────────────────────────────────────────────

const bristolServices = [
  {
    icon: "📍",
    slug: "local-seo",
    title: "Local SEO Bristol",
    desc: "Rank at the top of Google when Bristol customers search for your services. We optimise your Google Business Profile, build local citations, and create Bristol-specific content that drives rankings.",
    result: "Page 1 in 60–90 days",
  },
  {
    icon: "🎯",
    slug: "google-ads",
    title: "Google Ads Bristol",
    desc: "Immediate page-1 visibility for Bristol searches. ROI-tracked Google Ads campaigns targeting your exact Bristol service area — from BS1 city centre to Aztec West — with zero wasted spend.",
    result: "Leads from day 1",
  },
  {
    icon: "💻",
    slug: "web-design",
    title: "Web Design Bristol",
    desc: "Fast, conversion-optimised websites built for Bristol small businesses. Mobile-first design, clear CTAs, and local SEO architecture built in from day one.",
    result: "Live in 2–4 weeks",
  },
  {
    icon: "📱",
    slug: "social-media",
    title: "Social Media Marketing Bristol",
    desc: "Consistent social media presence that builds your Bristol brand and drives traffic. We manage content, ads, and community so you can focus on running your business.",
    result: "Consistent brand growth",
  },
  {
    icon: "⭐",
    slug: "reputation",
    title: "Reputation Management Bristol",
    desc: "More 5-star Google reviews from your Bristol customers. Our review generation system automates the ask — improving your rating and your Maps ranking simultaneously.",
    result: "4.8★ average in 90 days",
  },
];

const howItWorksSteps = [
  { num: "01", title: "Free Bristol Audit", desc: "We audit your Google rankings, GBP, website, citations, and top Bristol competitors — identifying exactly what's blocking you from page 1." },
  { num: "02", title: "Bristol Strategy", desc: "We build a tailored plan targeting your exact Bristol postcodes, service area, and the keywords your local customers actually search." },
  { num: "03", title: "Full Optimisation", desc: "We optimise your website, GBP, and local citations across 80+ directories — plus Bristol-specific content that signals authority to Google." },
  { num: "04", title: "Authority & Reviews", desc: "We earn Bristol-relevant backlinks and implement a review generation system — the two biggest factors Google uses to rank local businesses." },
  { num: "05", title: "Monthly Reports", desc: "Clear monthly reports: Bristol keyword rankings, GBP insights, leads generated, and our plan for next month. No jargon." },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "£199",
    badge: null,
    color: "#3B82F6",
    features: [
      "Google Business Profile optimisation",
      "Local citation building & cleanup",
      "On-page SEO (up to 5 pages)",
      "Bristol keyword targeting",
      "Monthly ranking report",
      "WhatsApp access",
    ],
    cta: "Start Ranking",
  },
  {
    name: "Growth",
    price: "£349",
    badge: "Most Popular",
    color: "#4F8EF7",
    features: [
      "Everything in Starter",
      "Google Ads management",
      "Conversion tracking setup",
      "Competitor analysis",
      "Review generation system",
      "Bi-weekly strategy calls",
    ],
    cta: "Get More Leads",
  },
  {
    name: "Pro",
    price: "£599",
    badge: null,
    color: "#8B5CF6",
    features: [
      "Everything in Growth",
      "Professional website included",
      "Social media management",
      "Content marketing",
      "PR & local link building",
      "Priority support",
    ],
    cta: "Full Marketing Package",
  },
];

const bristolTestimonials = [
  {
    quote: "Within 3 months we went from invisible on Google to ranking top 3 for 'plumber bristol'. The phone doesn't stop ringing now. Best investment I've made in 10 years of business.",
    name: "Mark T.",
    business: "Plumbing & Heating, Clifton BS8",
    stars: 5,
  },
  {
    quote: "I was sceptical about SEO — I'd been burned before. But within 6 weeks we had page-1 rankings for our key Bristol searches and the enquiries started immediately. No contract, no risk.",
    name: "Sarah L.",
    business: "Beauty Salon, Southville BS3",
    stars: 5,
  },
];

const bristolFAQs = [
  {
    q: "What is small business marketing in Bristol?",
    a: "Small business marketing in Bristol is the process of promoting your local business online to attract customers across Bristol and surrounding areas including Clifton, Southville, Bedminster, Harbourside, and Aztec West. It combines local SEO, Google Business Profile optimisation, Google Ads, social media, and web design — all targeted to the Bristol market.",
  },
  {
    q: "How much does small business marketing cost in Bristol?",
    a: "Small business marketing in Bristol costs £199–£599/month. Starter (£199/mo): local SEO; Growth (£349/mo): SEO + Google Ads; Pro (£599/mo): full digital marketing including website and social media. All month-to-month — no contracts.",
  },
  {
    q: "How long before I see results from local SEO in Bristol?",
    a: "Most Bristol businesses see early ranking movement within 30–60 days. Strong page-1 positions for competitive searches like 'plumber bristol' typically take 90–120 days. Google Maps 3-Pack rankings often move faster.",
  },
  {
    q: "Do you cover all areas of Bristol?",
    a: "Yes — all Bristol postcodes (BS1–BS16): city centre, Clifton, Redland, Cotham, Southville, Bedminster, Bishopston, Horfield, Fishponds, Easton, Kingswood, Patchway, Aztec West, Filton, and Bradley Stoke.",
  },
  {
    q: "Is Google Maps SEO different from regular SEO?",
    a: "Yes. Google Maps rankings are controlled by three factors: relevance (do you offer the searched service?), prominence (reviews, citations, authority), and proximity (distance from the searcher). We optimise all three simultaneously — which is why our clients appear in the Maps 3-Pack.",
  },
  {
    q: "Can you help me get more Google reviews in Bristol?",
    a: "Yes. We implement a review generation system — automated follow-ups asking happy customers to leave a Google review. Most Bristol businesses see a consistent flow of new 5-star reviews within 30 days, which also improves your Maps ranking.",
  },
  {
    q: "What industries do you serve in Bristol?",
    a: "All service-based small businesses: plumbers, electricians, roofers, builders, solicitors, accountants, dentists, physiotherapists, beauty salons, restaurants, cafés, estate agents, mortgage brokers, personal trainers, cleaning companies, and IT support firms.",
  },
  {
    q: "What makes you different from other Bristol marketing agencies?",
    a: "You work directly with me — not a junior account manager. I have 5 years of focused expertise in local SEO specifically. I limit Bristol clients I take on to ensure results. No contracts — I earn your business every month.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BristolPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema,
            breadcrumbSchema,
            webPageSchema,
            howToSchema,
            faqSchema,
          ]),
        }}
      />

      {/* AI-readable summary — machine-readable, screen-reader accessible */}
      <div className="sr-only page-summary" aria-label="AI Summary" role="note">
        SBMP provides expert small business marketing in Bristol, UK. Services include local SEO,
        Google Business Profile optimisation, Google Ads, web design, and social media marketing
        for Bristol small businesses. Plans start from £199/month with no contracts. We have ranked
        12+ Bristol businesses on page 1 of Google. Coverage includes all Bristol postcodes (BS1–BS16)
        and surrounding areas: Clifton, Southville, Bedminster, Harbourside, Aztec West, Kingswood,
        Bradley Stoke, Filton, and Patchway.
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.20) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8" style={{ color: "#4A5A6E" }}>
            <Link href="/" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/locations" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Locations</Link>
            <span aria-hidden="true">›</span>
            <span style={{ color: "#8B9CB8" }} aria-current="page">Bristol</span>
          </nav>

          <div className="max-w-4xl">
            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6"
              style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}
            >
              🏆 12+ Bristol businesses ranked on page 1 · 4.9★ · No contracts
            </div>

            <h1
              className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Small Business Marketing Bristol
            </h1>

            {/* 40-60 word direct answer — Featured Snippet + AI Overview target */}
            <p
              className="text-lg sm:text-xl mb-4 leading-relaxed page-summary"
              style={{ color: "#C8D5E8" }}
            >
              Expert small business marketing in Bristol from £199/month. We get your Bristol
              business to page 1 of Google through local SEO, Google Ads, and web design —
              generating real calls, real enquiries, and real revenue. No contracts. Free audit.
            </p>
            <p className="text-base mb-10" style={{ color: "#8B9CB8" }}>
              Covering all Bristol postcodes — BS1 city centre, Clifton, Southville, Bedminster,
              Harbourside, Aztec West, Kingswood, Bradley Stoke, and beyond.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-audit"
                className="inline-flex items-center px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get Free Bristol Audit →
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#22C55E" }}
              >
                💬 WhatsApp Now
              </a>
            </div>

            {/* Micro-trust signals */}
            <div className="flex flex-wrap gap-6 mt-8">
              {["✓ No long-term contracts", "✓ Results in 30–90 days", "✓ Direct expert access", "✓ Free £299 audit"].map((t) => (
                <span key={t} className="text-sm font-medium" style={{ color: "#4F8EF7" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Row ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📍", value: "12+", label: "Bristol Businesses Ranked" },
              { icon: "⭐", value: "4.9★", label: "Average Client Rating" },
              { icon: "⏱️", value: "30–60 days", label: "Average Ranking Timeline" },
              { icon: "💰", value: "£199/mo", label: "Starting Price — No Contract" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: "#111E33", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-xl font-extrabold mb-1" style={{ fontFamily: "var(--font-display, sans-serif)", color: "#4F8EF7" }}>
                  {s.value}
                </div>
                <div className="text-xs" style={{ color: "#8B9CB8" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is small business marketing — Featured Snippet target ─────── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-5"
                style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
              >
                What is Small Business Marketing in Bristol?
              </h2>
              {/* Definition block — Featured Snippet optimised */}
              <div
                className="rounded-xl p-6 mb-6"
                style={{ backgroundColor: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.20)" }}
              >
                <p className="text-base leading-relaxed" style={{ color: "#C8D5E8" }}>
                  <strong style={{ color: "#E2E8F0" }}>Small business marketing in Bristol</strong> is
                  the process of promoting your local business online to attract customers across
                  Bristol and surrounding areas. It combines{" "}
                  <strong style={{ color: "#E2E8F0" }}>local SEO</strong>,{" "}
                  <strong style={{ color: "#E2E8F0" }}>Google Business Profile optimisation</strong>,{" "}
                  <strong style={{ color: "#E2E8F0" }}>Google Ads</strong>, and{" "}
                  <strong style={{ color: "#E2E8F0" }}>web design</strong> — all targeted to the
                  Bristol market — to generate consistent local leads.
                </p>
              </div>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
                Bristol has over 40,000 registered businesses competing for the same local customers.
                When someone in Clifton searches &ldquo;plumber near me&rdquo; or a Southville resident
                looks for &ldquo;beauty salon bs3&rdquo;, the businesses at the top of Google Maps get the
                calls. Everyone else is invisible.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#8B9CB8" }}>
                Effective small business marketing in Bristol means owning those top positions —
                and keeping them. That&apos;s exactly what we do.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold mb-4" style={{ color: "#E2E8F0" }}>
                Why Bristol Businesses Need Local Marketing Now
              </h3>
              {[
                { stat: "46%", text: "of all Google searches have local intent — nearly half of every search is looking for something nearby." },
                { stat: "75%", text: "of clicks on local searches go to the top 3 Google Maps results. Outside the 3-Pack, you're nearly invisible." },
                { stat: "88%", text: "of people who search for a local business on their phone call or visit within 24 hours." },
                { stat: "40,000+", text: "registered businesses in Bristol are competing for the same local customers searching on Google every day." },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="flex items-start gap-4 rounded-xl p-4"
                  style={{ backgroundColor: "#111E33", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="text-2xl font-extrabold shrink-0" style={{ color: "#4F8EF7", fontFamily: "var(--font-display, sans-serif)" }}>
                    {item.stat}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Small Business Marketing Services in Bristol
            </h2>
            <p className="max-w-2xl mx-auto text-base" style={{ color: "#8B9CB8" }}>
              Every service is built specifically for the Bristol market — not a generic template.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bristolServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group rounded-2xl p-8 transition-all hover:-translate-y-1 block"
                style={{ backgroundColor: "#111E33", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
              >
                <div className="text-4xl mb-4">{svc.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>{svc.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>{svc.desc}</p>
                <div
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(79,142,247,0.15)", color: "#4F8EF7" }}
                >
                  {svc.result}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              How Small Business Marketing Works in Bristol
            </h2>
            <p className="max-w-xl mx-auto text-base" style={{ color: "#8B9CB8" }}>
              Our proven 5-step process — from free audit to consistent page-1 rankings.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howItWorksSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#111E33", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-3xl font-extrabold mb-3" style={{ color: "#4F8EF7", fontFamily: "var(--font-mono, monospace)" }}>
                  {step.num}
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "#E2E8F0" }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8B9CB8" }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Start with a Free Bristol Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bristol-specific local signals ────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl font-extrabold mb-5"
                style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
              >
                We Know Bristol&apos;s Business Landscape
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
                Bristol is one of the UK&apos;s fastest-growing cities, with a diverse economy spanning
                tech, creative industries, professional services, hospitality, and traditional trades.
                From the independent shops of Stokes Croft to the corporate offices of Aztec West
                and the startups clustering around Temple Quarter, each Bristol neighbourhood has its
                own customer profile and search behaviour.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
                We don&apos;t apply a generic SEO template to your Bristol business. We research how
                Bristol customers search for your specific services — including hyper-local queries
                like &ldquo;plumber clifton bs8&rdquo; or &ldquo;accountant bedminster bs3&rdquo; — and we target those exactly.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#8B9CB8" }}>
                We understand Bristol&apos;s competitive landscape in contested service niches —
                from trades in Kingswood to professional services in the city centre.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-5" style={{ color: "#E2E8F0" }}>
                Areas We Cover in Bristol
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Bristol City Centre (BS1)",
                  "Clifton & Redland (BS6/BS8)",
                  "Southville & Bedminster (BS3)",
                  "Harbourside & Spike Island",
                  "Stokes Croft & Montpelier",
                  "Bishopston & Horfield (BS7)",
                  "Easton & Lawrence Hill (BS5)",
                  "Fishponds & Staple Hill",
                  "Kingswood & Warmley",
                  "Aztec West & Patchway",
                  "Filton & Bradley Stoke",
                  "Nailsea & Portishead",
                ].map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg"
                    style={{ backgroundColor: "rgba(79,142,247,0.08)", color: "#C8D5E8" }}
                  >
                    <span style={{ color: "#4F8EF7" }}>✓</span>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-extrabold mb-3"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Industries We Serve in Bristol
            </h2>
            <p style={{ color: "#8B9CB8" }}>Expert small business marketing for every type of Bristol service business.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Plumbers", icon: "🔧" },
              { name: "Electricians", icon: "⚡" },
              { name: "Solicitors", icon: "⚖️" },
              { name: "Dentists", icon: "🦷" },
              { name: "Accountants", icon: "📊" },
              { name: "Builders & Roofers", icon: "🏠" },
              { name: "Restaurants & Cafés", icon: "🍽️" },
              { name: "Beauty Salons", icon: "💅" },
              { name: "Estate Agents", icon: "🏡" },
              { name: "Physiotherapists", icon: "🏃" },
              { name: "Cleaning Companies", icon: "🧹" },
              { name: "Personal Trainers", icon: "💪" },
            ].map((ind) => (
              <div
                key={ind.name}
                className="flex items-center gap-3 rounded-xl p-4"
                style={{ backgroundColor: "#111E33", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-2xl">{ind.icon}</span>
                <span className="text-sm font-semibold" style={{ color: "#E2E8F0" }}>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Bristol Marketing Packages & Pricing
            </h2>
            <p className="text-base mb-2" style={{ color: "#8B9CB8" }}>Month-to-month. No contracts. Cancel anytime.</p>
            <p className="text-sm font-semibold" style={{ color: "#4F8EF7" }}>
              ✓ Every plan includes a free Bristol audit before you commit
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-2xl p-8 flex flex-col"
                style={{
                  backgroundColor: plan.badge ? "rgba(79,142,247,0.08)" : "#111E33",
                  border: plan.badge ? `2px solid ${plan.color}` : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: plan.badge ? "0 0 40px rgba(79,142,247,0.15)" : "none",
                }}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: plan.color }}
                  >
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-xl font-extrabold mb-1" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold" style={{ color: plan.color, fontFamily: "var(--font-display, sans-serif)" }}>
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "#8B9CB8" }}>/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#C8D5E8" }}>
                      <span style={{ color: "#22C55E" }} className="shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/free-audit"
                  className="block text-center py-3 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: plan.color }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-6" style={{ color: "#8B9CB8" }}>
            Not sure which plan fits your Bristol business?{" "}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#4F8EF7" }}>WhatsApp me</a>{" "}
            and I&apos;ll recommend the best fit.
          </p>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold mb-10 text-center"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Bristol Businesses Already on Page 1
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bristolTestimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-yellow-400 text-lg mb-4">{"★".repeat(t.stars)}</div>
                <blockquote className="text-base italic mb-5 leading-relaxed" style={{ color: "#E2E8F0" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-bold text-sm" style={{ color: "#E2E8F0" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "#8B9CB8" }}>{t.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section id="faq" className="faq-section py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-3 text-center"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-center mb-10" style={{ color: "#8B9CB8" }}>
            Everything you need to know about small business marketing in Bristol.
          </p>
          <div className="space-y-4">
            {bristolFAQs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl group"
                style={{ backgroundColor: "#111E33", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer font-semibold text-base list-none"
                  style={{ color: "#E2E8F0" }}
                >
                  {faq.q}
                  <span
                    className="ml-4 shrink-0 text-lg transition-transform group-open:rotate-45"
                    style={{ color: "#4F8EF7" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal linking hub ──────────────────────────────────────────── */}
      <section className="py-12" style={{ backgroundColor: "#080D1A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-center mb-5" style={{ color: "#8B9CB8" }}>
            Explore More Bristol Marketing Services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Local SEO Bristol", href: "/services/local-seo" },
              { label: "Google Ads Bristol", href: "/services/google-ads" },
              { label: "Web Design Bristol", href: "/services/web-design" },
              { label: "Brighton SEO Services", href: "/brighton/seo/local" },
              { label: "Brighton Social Media", href: "/brighton/social/instagram" },
              { label: "All UK Locations", href: "/locations" },
              { label: "All Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
              { label: "Free Audit", href: "/free-audit" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-white"
                style={{ backgroundColor: "#111E33", color: "#4F8EF7", border: "1px solid rgba(79,142,247,0.25)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{
          background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,142,247,0.12) 0%, #080D1A 70%)",
          borderTop: "1px solid rgba(79,142,247,0.20)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-6"
            style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.3)" }}
          >
            Limited Bristol Spots Available
          </div>
          <h2
            className="gradient-text text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Ready to dominate Bristol search results?
          </h2>
          <p className="text-lg mb-3 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Start with a completely free Bristol marketing audit — no obligation, no hard sell.
            I&apos;ll show you exactly what&apos;s stopping you from page 1 and how to fix it.
          </p>
          <p className="text-sm mb-10" style={{ color: "#4F8EF7" }}>
            ✓ Worth £299 &nbsp;✓ Delivered in 48 hours &nbsp;✓ No strings attached
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-10 py-4 rounded-xl font-bold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get My Free Bristol Audit →
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
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
