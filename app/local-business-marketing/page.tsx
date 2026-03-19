import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20local%20business%20marketing.%20Can%20you%20help%3F";

// ============================================================================
// SECTION A — META DATA & TECHNICAL SEO
// Title: 59 chars | Primary: "local business marketing"
// Description: 158 chars | Keyword + benefit + CTA
// ============================================================================

export const metadata: Metadata = {
  title: "Local Business Marketing | Expert Strategies That Drive Growth",
  description:
    "Expert local business marketing for small businesses. Local SEO, Google Ads & digital strategies. 150+ businesses ranked. Free audit. Results in 60 days. No contracts.",
  authors: [{ name: "SBMP — Local Marketing Expert" }],
  creator: "SBMP — Small Business Marketing Professional",
  publisher: "SBMP",
  category: "Local Business Marketing",
  keywords: [
    "local business marketing",
    "local business marketing agency",
    "local business marketing strategies",
    "local business marketing company",
    "digital marketing for local businesses",
    "local business marketing experts",
    "best local business marketing",
    "local business internet marketing",
    "online local business marketing",
    "local business marketing service",
    "local business online marketing",
    "local business web marketing",
    "local business digital marketing agency",
    "local business content marketing",
    "local business video marketing",
    "local business social media marketing",
    "local business in digital marketing",
    "marketing for local small business",
    "marketing your small business locally",
    "local service business marketing",
    "local small business marketing",
    "local small business marketing strategies",
    "digital marketing strategy for local business",
    "local business marketing online",
    "local business marketing near me",
    "local marketing near me",
    "smb local marketing",
    "local business search engine marketing",
    "local business internet marketing services",
    "best marketing for small business",
    "best marketing strategies for small business",
    "best marketing strategies for local businesses",
    "local digital marketing for small business",
    "local small business digital marketing",
    "local small business internet marketing",
  ],
  alternates: {
    canonical: `${BASE_URL}/local-business-marketing`,
  },
  openGraph: {
    title: "Local Business Marketing | Expert Strategies That Drive Growth",
    description:
      "Expert local business marketing — local SEO, Google Ads & digital strategy for small businesses. 150+ businesses helped. Free audit worth £299.",
    url: `${BASE_URL}/local-business-marketing`,
    type: "website",
    siteName: "SBMP — Small Business Marketing Professional",
    images: [
      {
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 1200,
        height: 630,
        alt: "Local Business Marketing — SBMP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Business Marketing | Expert Strategies That Drive Growth",
    description:
      "Local SEO, Google Ads & digital marketing for small businesses. 150+ ranked. Free audit.",
  },
};

// ============================================================================
// SECTION B — JSON-LD SCHEMA MARKUP
// ProfessionalService + FAQPage + BreadcrumbList — Google Rich Results eligible
// ============================================================================

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/local-business-marketing`,
    name: "SBMP — Local Business Marketing",
    url: `${BASE_URL}/local-business-marketing`,
    telephone: "+923474825228",
    email: "hello@sbmp.com",
    description:
      "Expert local business marketing agency helping small businesses get found on Google. Local SEO, Google Ads, content marketing, and social media for local service businesses.",
    serviceType: [
      "Local Business Marketing",
      "Local SEO",
      "Google Ads Management",
      "Content Marketing",
      "Social Media Marketing",
      "Web Design",
    ],
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    priceRange: "£199–£699",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Local Business Marketing Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter Local Marketing",
          description: "Local SEO + Google Business Profile for small businesses",
          price: "199",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Growth Local Marketing",
          description: "Full local SEO + Google Ads + content marketing",
          price: "349",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Pro Local Marketing",
          description: "Complete digital marketing: SEO, Ads, web design, social media",
          price: "599",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/pricing`,
        },
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/local-business-marketing`,
    name: "Local Business Marketing | Expert Strategies That Drive Growth",
    description: "Expert local business marketing for small businesses. Local SEO, Google Ads & digital strategies. 150+ businesses ranked. Free audit. Results in 60 days.",
    url: `${BASE_URL}/local-business-marketing`,
    datePublished: "2026-03-19",
    dateModified: "2026-03-19",
    inLanguage: "en-GB",
    isPartOf: { "@type": "WebSite", url: BASE_URL },
    author: { "@type": "Organization", name: "SBMP — Small Business Marketing Professional", url: BASE_URL },
    publisher: { "@type": "Organization", name: "SBMP — Small Business Marketing Professional", logo: { "@type": "ImageObject", url: `${BASE_URL}/sbmp-logo.png` } },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Local Business Marketing", item: `${BASE_URL}/local-business-marketing` },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Local Business Marketing",
        item: `${BASE_URL}/local-business-marketing`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is local business marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local business marketing is the use of digital strategies — local SEO, Google Ads, Google Business Profile, content marketing, and social media — to attract customers in your specific geographic area. The goal is to appear in 'near me' searches, Google Maps, and local search results when nearby customers look for your service.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best local business marketing strategies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most effective local business marketing strategies in 2026 are: (1) Local SEO — optimising your website for geo-specific keywords; (2) Google Business Profile — ranking in the Maps 3-pack; (3) Google Ads with local targeting; (4) Local content marketing — blog posts about your area and industry; (5) Reputation management — getting and responding to reviews. These combined deliver the highest ROI for local businesses.",
        },
      },
      {
        "@type": "Question",
        name: "How much does local business marketing cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local business marketing starts from £199/month with SBMP. Our Starter plan includes local SEO and Google Business Profile optimisation. The Growth plan at £349/month adds Google Ads management and content marketing. The Pro plan at £599/month covers everything including web design and social media. No contracts — cancel anytime.",
        },
      },
      {
        "@type": "Question",
        name: "How long does local business marketing take to work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most local businesses see early ranking improvements within 30–45 days. Consistent page-1 rankings and a steady flow of local leads typically happen by month 3. Google Ads delivers immediate results from day one. A combined strategy (SEO + Ads) delivers the fastest and most sustainable local business growth.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best marketing for small local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For small local businesses, the best marketing is local SEO + Google Business Profile + Google Ads. Local SEO builds long-term visibility in organic results. Google Business Profile puts you in the Maps 3-pack for 'near me' searches. Google Ads delivers immediate calls. Together they cover all the ways local customers search — giving you the best return on every marketing pound.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a marketing agency for my local business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A local business marketing agency accelerates results, handles technical SEO work you may not have time for, and ensures consistent execution. DIY marketing often stalls because local SEO requires ongoing technical work, content creation, and monthly link building. SBMP works as your dedicated local marketing expert — no large agency overhead, no junior staff, just direct expert work.",
        },
      },
      {
        "@type": "Question",
        name: "What does a local business marketing company do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A local business marketing company handles everything needed to make your business visible online locally: keyword research, website optimisation, Google Business Profile management, local citation building, content creation, Google Ads campaigns, reputation management, and monthly performance reporting. SBMP offers all of these in a single monthly plan.",
        },
      },
      {
        "@type": "Question",
        name: "How do I market my small business locally online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To market your small business locally online: (1) Claim and fully optimise your Google Business Profile; (2) Ensure your website targets local keywords on every key page; (3) Build local citations on Yelp, Yell, and industry directories; (4) Collect and respond to Google reviews; (5) Run geo-targeted Google Ads campaigns; (6) Create local content (area guides, local case studies). SBMP manages all of this for local businesses from £199/month.",
        },
      },
    ],
  },
];

// ============================================================================
// STATS DATA
// ============================================================================

const stats = [
  { value: "150+", label: "Local Businesses Ranked" },
  { value: "60", label: "Days to Page 1 (avg)" },
  { value: "4.9★", label: "Average Client Rating" },
  { value: "3–8×", label: "Typical ROI" },
];

// ============================================================================
// SERVICES DATA
// ============================================================================

const services = [
  {
    icon: "🔍",
    title: "Local SEO",
    desc: "Dominate Google organic rankings and the Maps 3-pack for 'near me' and location-based searches. Full on-page, technical, and off-page SEO.",
    href: "/local-seo",
  },
  {
    icon: "📍",
    title: "Google Business Profile",
    desc: "Complete optimisation of your Google Business Profile — the single most powerful free local business marketing tool available in 2026.",
    href: "/google-maps-marketing",
  },
  {
    icon: "📢",
    title: "Google Ads (Local)",
    desc: "Geo-targeted pay-per-click campaigns that put your business in front of local buyers the moment they search. Immediate leads from day one.",
    href: "/services/google-ads",
  },
  {
    icon: "✍️",
    title: "Local Content Marketing",
    desc: "Area-specific blog posts, service pages, and landing pages that attract local search traffic and establish your authority in your market.",
    href: "/local-marketing-strategies",
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Facebook, Instagram, and local social media advertising that builds brand awareness and drives customers to your door every week.",
    href: "/local-social-media-marketing",
  },
  {
    icon: "⭐",
    title: "Reputation Management",
    desc: "Build, protect, and leverage your Google reviews. 87% of local buyers check reviews before choosing a local business — we help you win them.",
    href: "/services/local-seo",
  },
];

// ============================================================================
// INDUSTRIES DATA
// ============================================================================

const industries = [
  { name: "Plumbers & Heating", icon: "🔧" },
  { name: "Electricians", icon: "⚡" },
  { name: "Dentists & Clinics", icon: "🦷" },
  { name: "Solicitors & Law Firms", icon: "⚖️" },
  { name: "Estate Agents", icon: "🏠" },
  { name: "Restaurants & Cafés", icon: "🍽️" },
  { name: "Landscapers", icon: "🌿" },
  { name: "Builders & Roofers", icon: "🏗️" },
  { name: "Accountants", icon: "📊" },
  { name: "Cleaners", icon: "✨" },
  { name: "Automotive & Garages", icon: "🚗" },
  { name: "Beauty & Hair Salons", icon: "💇" },
];

// ============================================================================
// FAQ DATA (mirrors schema — drives visible accordion)
// ============================================================================

const faqs = [
  {
    q: "What is local business marketing?",
    a: "Local business marketing is the use of digital strategies — local SEO, Google Ads, Google Business Profile, content marketing, and social media — to attract customers in your specific geographic area. The goal is to appear in 'near me' searches, Google Maps, and local search results when nearby customers look for your service.",
  },
  {
    q: "What are the best local business marketing strategies?",
    a: "The most effective local business marketing strategies in 2026 are: (1) Local SEO — optimising your website for geo-specific keywords; (2) Google Business Profile — ranking in the Maps 3-pack; (3) Google Ads with local targeting; (4) Local content marketing; (5) Reputation management — getting and responding to reviews. Combined, these deliver the highest ROI for local businesses.",
  },
  {
    q: "How much does local business marketing cost?",
    a: "Local business marketing starts from £199/month with SBMP. Our Starter plan includes local SEO and Google Business Profile optimisation. The Growth plan at £349/month adds Google Ads management and content marketing. The Pro plan at £599/month covers everything including web design and social media. No contracts — cancel anytime.",
  },
  {
    q: "How long does local business marketing take to work?",
    a: "Most local businesses see early ranking improvements within 30–45 days. Consistent page-1 rankings and a steady flow of local leads typically happen by month 3. Google Ads delivers immediate results from day one. A combined strategy (SEO + Ads) delivers the fastest and most sustainable local business growth.",
  },
  {
    q: "What is the best marketing for small local businesses?",
    a: "For small local businesses, the best marketing is local SEO + Google Business Profile + Google Ads. Local SEO builds long-term visibility. Google Business Profile puts you in the Maps 3-pack for 'near me' searches. Google Ads delivers immediate calls. Together they cover all the ways local customers search.",
  },
  {
    q: "Do I need a marketing agency for my local business?",
    a: "A local business marketing agency accelerates results and handles technical work you may not have time for. DIY marketing often stalls because local SEO requires ongoing technical effort, content creation, and monthly link building. SBMP works as your dedicated local marketing expert — no large agency overhead, just direct expert work.",
  },
  {
    q: "What does a local business marketing company do?",
    a: "A local business marketing company handles everything needed to make your business visible online locally: keyword research, website optimisation, Google Business Profile management, local citation building, content creation, Google Ads campaigns, reputation management, and monthly performance reporting.",
  },
  {
    q: "How do I market my small business locally online?",
    a: "To market your small business locally online: (1) Claim and fully optimise your Google Business Profile; (2) Target local keywords on every key page; (3) Build local citations on Yelp, Yell, and industry directories; (4) Collect and respond to Google reviews; (5) Run geo-targeted Google Ads; (6) Create local content. SBMP manages all of this from £199/month.",
  },
];

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function LocalBusinessMarketingPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />

      {/* ====================================================================
          SECTION C — HERO
          Badge | H1 (primary keyword) | AEO answer block | CTAs | Stats
          ==================================================================== */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.20) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb — BreadcrumbList schema signal */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm mb-8"
            style={{ color: "#4A5A6E" }}
          >
            <Link href="/" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>
              Home
            </Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Local Business Marketing</span>
          </nav>

          <div className="max-w-3xl">
            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6"
              style={{
                backgroundColor: "rgba(79,142,247,0.15)",
                border: "1px solid rgba(79,142,247,0.3)",
              }}
            >
              🏆 Trusted by 150+ Local Businesses
            </div>

            {/* H1 — exact primary keyword "local business marketing" */}
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
              Local Business Marketing That Gets You Found First
            </h1>

            {/* Hero subheadline */}
            <p className="text-lg sm:text-xl mb-6" style={{ color: "#8B9CB8" }}>
              We help local businesses dominate Google — generating consistent calls, qualified leads, and measurable
              revenue. The best local business marketing strategies, executed by experts. No fluff. No long contracts.
            </p>

            {/* AEO ANSWER BLOCK — targets featured snippet for "what is local business marketing"
                Rules: starts with primary keyword phrase, 45-65 words, factual, present tense */}
            <p
              className="text-base mb-10 p-4 rounded-xl"
              style={{
                color: "#CBD5E1",
                backgroundColor: "rgba(79,142,247,0.06)",
                border: "1px solid rgba(79,142,247,0.15)",
                lineHeight: "1.75",
              }}
            >
              <strong style={{ color: "#E2E8F0" }}>Local business marketing</strong> is the strategic use of local SEO,
              Google Ads, Google Business Profile, and content marketing to attract customers in a specific geographic
              area. As of 2026, SBMP helps local businesses rank on Google&apos;s first page within 60 days —
              generating consistent local leads, calls, and measurable revenue growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get My Free Marketing Audit →
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#E2E8F0",
                }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="text-2xl font-extrabold mb-1"
                    style={{ color: "#4F8EF7", fontFamily: "var(--font-display, sans-serif)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs" style={{ color: "#8B9CB8" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION D — WHAT IS LOCAL BUSINESS MARKETING
          H2 targets "local business marketing strategies" + "local business in digital marketing"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-6"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              What Is Local Business Marketing — And Why It Matters
            </h2>
            <p className="text-base mb-5" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              Local business marketing is the collection of digital strategies that make your business visible to
              customers searching for services in your area. Unlike national or brand marketing, local business
              marketing focuses entirely on <strong style={{ color: "#CBD5E1" }}>geographic intent</strong> — capturing
              searches like &ldquo;plumber near me&rdquo;, &ldquo;best dentist in [city]&rdquo;, or
              &ldquo;electrician open now&rdquo;.
            </p>
            <p className="text-base mb-5" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              In 2026, <strong style={{ color: "#CBD5E1" }}>46% of all Google searches</strong> have local intent.
              That means nearly half of all searches on Google are people looking for a local business, service, or
              product. If your business is not appearing in those results, your competitors are taking those customers.
            </p>
            <p className="text-base mb-8" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              The most effective local business marketing strategy in 2026 combines{" "}
              <Link href="/local-seo" style={{ color: "#4F8EF7" }} className="hover:underline">
                local SEO
              </Link>
              ,{" "}
              <Link href="/google-maps-marketing" style={{ color: "#4F8EF7" }} className="hover:underline">
                Google Maps optimisation
              </Link>
              , paid local advertising, and reputation management — a full-funnel approach that captures customers at
              every stage of their buying journey.
            </p>

            {/* Key stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { stat: "76%", text: "of local mobile searches result in a business visit within 24 hours" },
                { stat: "28%", text: "of local searches result in a purchase — the highest conversion rate of any search type" },
                { stat: "97%", text: "of people learn about local businesses online more than any other source" },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="rounded-xl p-5"
                  style={{
                    backgroundColor: "rgba(79,142,247,0.06)",
                    border: "1px solid rgba(79,142,247,0.15)",
                  }}
                >
                  <div
                    className="text-3xl font-extrabold mb-2"
                    style={{ color: "#4F8EF7", fontFamily: "var(--font-display, sans-serif)" }}
                  >
                    {item.stat}
                  </div>
                  <p className="text-sm" style={{ color: "#8B9CB8", lineHeight: "1.6" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION E — OUR LOCAL BUSINESS MARKETING SERVICES
          H2 keyword: "local business marketing services" + "local business marketing company"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              Our Local Business Marketing Services
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              Every service is built around one goal: more local customers finding your business on Google and choosing
              you over the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="block rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30"
                style={{
                  backgroundColor: "#0D1627",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm" style={{ color: "#8B9CB8", lineHeight: "1.7" }}>
                  {svc.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION F — LOCAL BUSINESS MARKETING STRATEGIES
          H2 keyword: "best local business marketing strategies"
          Targets: "local marketing strategies small business", "local digital marketing strategy"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-6"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              Best Local Business Marketing Strategies for 2026
            </h2>
            <p className="text-base mb-10" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              The most effective local business marketing strategies work together as a system — not in isolation. Here
              are the strategies SBMP uses to rank 150+ local businesses on page 1 of Google.
            </p>

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Local SEO — The Foundation",
                  body: "Local SEO is the most powerful long-term local business marketing strategy. It involves optimising your website pages for local keywords, building local citations, earning backlinks, and ensuring technical SEO is perfect. A well-executed local SEO campaign builds compounding visibility that no paid ad can replicate.",
                },
                {
                  num: "02",
                  title: "Google Business Profile Optimisation",
                  body: "Your Google Business Profile (formerly Google My Business) controls whether you appear in the Maps 3-pack — the top 3 results that appear above organic rankings for most local searches. Fully optimised profiles receive 7x more clicks than incomplete ones. This is the single highest-ROI activity in local business marketing.",
                },
                {
                  num: "03",
                  title: "Google Ads with Local Targeting",
                  body: "Geo-targeted Google Ads campaigns ensure your business appears at the top of search results from day one. While SEO builds over months, Google Ads provides immediate local leads. The best local business marketing strategy runs both in parallel — Ads for immediate calls, SEO for long-term organic growth.",
                },
                {
                  num: "04",
                  title: "Local Content Marketing",
                  body: "Creating location-specific content — area guides, local case studies, service pages targeting '[service] in [city]' — builds topical authority and attracts organic traffic. Local content marketing targets the full breadth of local search queries, not just your core service terms.",
                },
                {
                  num: "05",
                  title: "Review Generation & Reputation Management",
                  body: "87% of local buyers read reviews before choosing a business. A systematic review generation strategy — asking happy customers via SMS, email, and in-person — builds social proof that directly improves conversion rates and local search rankings. Google rewards businesses with high review counts and strong ratings.",
                },
                {
                  num: "06",
                  title: "Local Social Media Advertising",
                  body: "Facebook and Instagram's geo-targeting capabilities make them powerful tools for local business marketing. Targeted local social media ads build brand awareness, retarget website visitors, and drive traffic from customers who haven't yet searched for your service but are in your area.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex gap-5 rounded-xl p-5"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="text-2xl font-extrabold shrink-0 pt-0.5"
                    style={{ color: "#4F8EF7", fontFamily: "var(--font-display, sans-serif)", lineHeight: "1" }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold mb-2"
                      style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#8B9CB8", lineHeight: "1.75" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION G — INDUSTRIES
          H2 keyword: "local business marketing for every industry"
          Targets: "local service business marketing", "marketing for local small business"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              Local Business Marketing for Every Industry
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              We build bespoke local marketing strategies for service businesses across all industries — tailored to your
              specific competitors, customers, and local market.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="rounded-xl p-4 flex items-center gap-3"
                style={{
                  backgroundColor: "#0D1627",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-xl">{ind.icon}</span>
                <span className="text-sm font-medium" style={{ color: "#CBD5E1" }}>
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/industries"
              style={{ color: "#4F8EF7" }}
              className="text-sm font-semibold hover:underline"
            >
              View all industries we serve →
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION H — HOW IT WORKS
          Targets: "local business marketing process", "how local business marketing works"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              How Our Local Business Marketing Works
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              A clear, transparent process from day one — no surprises, no jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "1",
                title: "Free Audit",
                desc: "We analyse your current Google visibility, competitor rankings, website health, and local market opportunity. 100% free. No obligation.",
              },
              {
                step: "2",
                title: "Custom Strategy",
                desc: "We build a bespoke local business marketing strategy based on your industry, location, competitors, and goals — not a generic template.",
              },
              {
                step: "3",
                title: "Expert Execution",
                desc: "We implement everything — on-page SEO, Google Business Profile, content, citations, Ads. You work directly with an expert, not an account manager.",
              },
              {
                step: "4",
                title: "Monthly Results",
                desc: "Monthly ranking reports, traffic data, and lead tracking show exactly what your local business marketing investment is delivering.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl p-6 relative"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="text-4xl font-extrabold mb-4"
                  style={{ color: "rgba(79,142,247,0.3)", fontFamily: "var(--font-display, sans-serif)" }}
                >
                  {s.step}
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm" style={{ color: "#8B9CB8", lineHeight: "1.7" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION I — FAQ
          Targets: all long-tail FAQ keyword variations
          FAQ schema above powers Google rich results
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-10 text-center"
            style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
          >
            Local Business Marketing — Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl group"
                style={{
                  backgroundColor: "#0D1627",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <summary
                  className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-sm list-none"
                  style={{ color: "#E2E8F0" }}
                >
                  {faq.q}
                  <span
                    className="shrink-0 text-lg transition-transform group-open:rotate-45"
                    style={{ color: "#4F8EF7" }}
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION J — INTERNAL LINKS (SEO LINK EQUITY DISTRIBUTION)
          ==================================================================== */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold mb-6 text-center"
            style={{ color: "#CBD5E1", fontFamily: "var(--font-display, sans-serif)" }}
          >
            Explore Our Local Marketing Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Local SEO Services", href: "/local-seo" },
              { label: "Local Advertising", href: "/local-advertising" },
              { label: "Local Marketing Agency", href: "/local-marketing-agency" },
              { label: "Google Maps Marketing", href: "/google-maps-marketing" },
              { label: "Local Social Media Marketing", href: "/local-social-media-marketing" },
              { label: "Free Local Advertising", href: "/free-local-advertising" },
              { label: "Local Marketing Strategies", href: "/local-marketing-strategies" },
              { label: "Digital Marketing", href: "/digital-marketing-for-small-business" },
              { label: "Free Audit", href: "/free-audit" },
              { label: "Pricing", href: "/pricing" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:border-blue-500/40"
                style={{
                  backgroundColor: "rgba(79,142,247,0.08)",
                  border: "1px solid rgba(79,142,247,0.2)",
                  color: "#8B9CB8",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION K — FINAL CTA
          ==================================================================== */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(79,142,247,0.15) 0%, transparent 70%), #080D1A",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
          >
            Ready to Grow Your Local Business?
          </h2>
          <p className="text-base mb-8" style={{ color: "#8B9CB8" }}>
            Book a free local business marketing audit. We&apos;ll show you exactly where your biggest growth
            opportunities are — and how to capture them. No obligation. No sales pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get My Free Audit — Worth £299 →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#E2E8F0",
              }}
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
