import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20looking%20for%20a%20local%20marketing%20agency.%20Can%20you%20help%3F";

// ============================================================================
// SECTION A — META DATA & TECHNICAL SEO
// Title: 58 chars | Primary: "local marketing agency"
// Description: 159 chars
// ============================================================================

export const metadata: Metadata = {
  title: "Local Marketing Agency | #1 Rated Near You — SBMP",
  description:
    "Looking for a local marketing agency near you? SBMP is the expert local marketing company for small businesses. Local SEO, Google Ads & more. Free audit today.",
  authors: [{ name: "SBMP — Local Marketing Expert" }],
  creator: "SBMP — Small Business Marketing Professional",
  publisher: "SBMP",
  category: "Local Marketing Agency",
  keywords: [
    "local marketing agency",
    "local marketing company",
    "local marketing companies near me",
    "local marketing agency near me",
    "best marketing agency for small business",
    "best marketing companies for small business",
    "local digital marketing agencies",
    "local ad agencies near me",
    "local advertising agencies near me",
    "local advertising companies near me",
    "nearby advertising agency",
    "marketing company nearby",
    "local marketing firms",
    "local digital marketing company",
    "local digital marketing firm",
    "local digital marketing agency near me",
    "local digital agency",
    "local creative agencies",
    "local search marketing agency",
    "local search marketing companies",
    "local internet marketing agency",
    "local internet marketing firm",
    "regional advertising agencies",
    "local online marketing companies",
    "local internet marketing companies",
    "best marketing firms for small business",
    "hyper local small business marketing company",
    "hyperlocal marketing agency",
    "hyperlocal marketing companies",
    "local seo marketing firms",
    "local digital marketing seo",
    "seo marketing company near me",
    "seo agency near me",
    "best digital marketing agency for small business",
    "affordable local seo agency",
    "local digital marketing for small business",
    "best local marketing services",
    "best marketing options for small business",
    "local marketing services",
    "local marketing packages",
    "best local marketing",
    "local marketing",
    "local marketing near me",
    "local marketing expert",
    "local online marketing agency",
    "local online marketing agency near me",
    "local online marketing near me",
    "local online marketing services",
    "local online marketing for small businesses",
    "local internet marketing",
    "local internet marketing for small business",
    "local internet marketing packages",
    "local internet marketing service",
    "best online marketing for small business",
    "best online marketing companies for small business",
    "best internet marketing company for small business",
    "local b2b marketing",
    "affordable local marketing",
    "agency local marketing",
    "go local marketing",
    "go local digital marketing",
    "locale marketing",
    "marketing agency for local businesses",
    "local digital marketing services",
    "digital local online marketing agencies",
    "digital local social media marketing agencies",
    "local facebook marketing agency",
    "local facebook marketing company",
    "seo companies near me",
  ],
  alternates: {
    canonical: `${BASE_URL}/local-marketing-agency`,
  },
  openGraph: {
    title: "Local Marketing Agency | #1 Rated Near You — SBMP",
    description:
      "SBMP is the top-rated local marketing agency for small businesses. Local SEO, Google Ads, social media & more. Find the best local marketing agency near you.",
    url: `${BASE_URL}/local-marketing-agency`,
    type: "website",
    siteName: "SBMP — Small Business Marketing Professional",
    images: [
      {
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 1200,
        height: 630,
        alt: "Local Marketing Agency — SBMP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Marketing Agency | #1 Rated Near You — SBMP",
    description:
      "Top-rated local marketing agency for small businesses. SEO, Google Ads, social media. Free audit.",
  },
};

// ============================================================================
// SECTION B — JSON-LD SCHEMA MARKUP
// ============================================================================

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/local-marketing-agency`,
    name: "SBMP — Local Marketing Agency",
    url: `${BASE_URL}/local-marketing-agency`,
    telephone: "+923474825228",
    email: "hello@sbmp.com",
    description:
      "SBMP is a top-rated local marketing agency specialising in local SEO, Google Ads, and digital marketing for small businesses. Expert local marketing services with no contracts.",
    serviceType: [
      "Local Marketing Agency",
      "Local SEO",
      "Google Ads Management",
      "Local Digital Marketing",
      "Hyperlocal Marketing",
      "Social Media Marketing",
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
      name: "Local Marketing Agency Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter — Local Marketing",
          description: "Local SEO + Google Business Profile management",
          price: "199",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Growth — Local Marketing",
          description: "Full local SEO + Google Ads management + content marketing",
          price: "349",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Pro — Local Marketing",
          description: "Complete local marketing: SEO, Ads, web design, social media",
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
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/local-marketing-agency`,
    name: "Local Marketing Agency | #1 Rated Near You — SBMP",
    description: "Looking for a local marketing agency near you? SBMP is the expert local marketing company for small businesses. Local SEO, Google Ads & more. Free audit today.",
    url: `${BASE_URL}/local-marketing-agency`,
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
        { "@type": "ListItem", position: 2, name: "Local Marketing Agency", item: `${BASE_URL}/local-marketing-agency` },
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
        name: "Local Marketing Agency",
        item: `${BASE_URL}/local-marketing-agency`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a local marketing agency do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A local marketing agency manages all digital marketing activities to make your business visible to local customers online. This includes local SEO (ranking your website on Google for local searches), Google Business Profile management, Google Ads with geographic targeting, social media marketing, content creation, local citation building, and reputation management. SBMP handles all of this as your dedicated local marketing agency from £199/month.",
        },
      },
      {
        "@type": "Question",
        name: "How do I find a local marketing agency near me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To find a local marketing agency near you: search 'local marketing agency near me' or 'local digital marketing company' on Google and review their rankings (an agency that ranks well for their own keywords is a strong signal). Check their Google reviews, ask for case studies showing local ranking results, and ensure they have experience in your specific industry. SBMP serves businesses across the UK and US — contact us for a free audit.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a local marketing agency and a national agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A local marketing agency specialises in marketing strategies that target customers in a specific geographic area — local SEO, Google Maps, local Google Ads, and community-level marketing. A national agency focuses on broad brand awareness. For small and medium local businesses, a local marketing agency delivers significantly better ROI because every strategy is focused on your actual service area and the customers most likely to buy from you.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a local marketing agency cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local marketing agency costs vary widely. Large agencies charge £1,000–£5,000+/month. SBMP offers expert local marketing agency services from £199/month for the Starter plan (local SEO + Google Business Profile), £349/month for the Growth plan (SEO + Google Ads + content), and £599/month for the Pro plan (everything included). All plans are month-to-month with no long-term contracts.",
        },
      },
      {
        "@type": "Question",
        name: "What is a hyperlocal marketing agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A hyperlocal marketing agency focuses on extremely specific geographic areas — a single neighbourhood, town, or postcode radius rather than a whole city or region. Hyperlocal marketing uses precise geo-targeting in Google Ads and Facebook Ads, neighbourhood-level SEO content, and highly targeted local outreach. It is particularly effective for businesses serving a tight geographic area like a single borough, village, or town.",
        },
      },
      {
        "@type": "Question",
        name: "What should I look for in a local marketing agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When choosing a local marketing agency, look for: (1) Proven local SEO results — ask to see ranking case studies; (2) Google reviews from real business clients; (3) No long-term contracts — a good agency earns loyalty through results; (4) Direct access to the expert working on your account, not a rotating junior team; (5) Transparent monthly reporting; (6) Experience in your specific industry. SBMP meets all of these criteria — book a free audit to see our approach.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best local marketing agency for small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best local marketing agency for small businesses is one that specialises in local digital marketing (not just general SEO), has verifiable results for businesses in your industry, offers flexible month-to-month plans, and gives you direct access to an expert — not a junior account manager. SBMP has ranked 150+ local businesses on page 1 of Google across a range of service industries, with plans starting from £199/month.",
        },
      },
      {
        "@type": "Question",
        name: "Can a local marketing agency help with Google Maps ranking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Google Maps ranking (the Maps 3-pack) is one of the most important services a local marketing agency provides. Appearing in the top 3 Google Maps results generates more calls and leads than almost any other local marketing activity. SBMP optimises your Google Business Profile, builds local citations, manages your reviews, and executes the on-page SEO signals needed to rank in the Maps 3-pack for your target keywords.",
        },
      },
    ],
  },
];

// ============================================================================
// DIFFERENTIATORS DATA
// ============================================================================

const differentiators = [
  {
    icon: "🎯",
    title: "Local SEO Specialists",
    desc: "We live and breathe local search. Unlike generalist agencies, every strategy we build is focused on ranking your business in your specific geographic market — not broad national keywords that don't drive local customers.",
  },
  {
    icon: "👤",
    title: "Direct Expert Access",
    desc: "You work directly with an experienced local marketing expert — not an account manager who passes work to a junior team. Direct communication means faster execution, fewer mistakes, and better results.",
  },
  {
    icon: "📊",
    title: "Transparent Monthly Reports",
    desc: "Every month you receive a clear ranking report showing exactly which keywords have moved, how much traffic your website received, how many leads were generated, and what work was completed.",
  },
  {
    icon: "🔄",
    title: "No Long-Term Contracts",
    desc: "All our local marketing plans are month-to-month. We earn your loyalty with results — not legally binding contracts. You can upgrade, downgrade, or cancel at any time with 30 days notice.",
  },
  {
    icon: "🏆",
    title: "Proven Local Rankings",
    desc: "150+ local businesses ranked on page 1 of Google. We have verifiable ranking case studies across plumbing, dental, legal, property, and hospitality industries — not just promises.",
  },
  {
    icon: "🌍",
    title: "UK & US Experience",
    desc: "We serve local businesses across the UK and United States. Whether you need a local marketing agency in Bristol, Manchester, or Houston, Texas — we have the expertise and track record to deliver results.",
  },
];

// ============================================================================
// SERVICES TABLE DATA
// ============================================================================

const services = [
  {
    name: "Local SEO",
    starter: true,
    growth: true,
    pro: true,
    href: "/local-seo",
  },
  {
    name: "Google Business Profile",
    starter: true,
    growth: true,
    pro: true,
    href: "/google-maps-marketing",
  },
  {
    name: "Local Citation Building",
    starter: true,
    growth: true,
    pro: true,
    href: "/local-seo",
  },
  {
    name: "Monthly Ranking Reports",
    starter: true,
    growth: true,
    pro: true,
    href: "/free-audit",
  },
  {
    name: "Google Ads Management",
    starter: false,
    growth: true,
    pro: true,
    href: "/services/google-ads",
  },
  {
    name: "Content Marketing",
    starter: false,
    growth: true,
    pro: true,
    href: "/local-business-marketing",
  },
  {
    name: "Reputation Management",
    starter: false,
    growth: true,
    pro: true,
    href: "/services/reputation-management",
  },
  {
    name: "Professional Website",
    starter: false,
    growth: false,
    pro: true,
    href: "/services/web-design",
  },
  {
    name: "Social Media Management",
    starter: false,
    growth: false,
    pro: true,
    href: "/local-social-media-marketing",
  },
];

// ============================================================================
// FAQ DATA
// ============================================================================

const faqs = [
  {
    q: "What does a local marketing agency do?",
    a: "A local marketing agency manages all digital marketing activities to make your business visible to local customers online. This includes local SEO, Google Business Profile management, Google Ads, social media marketing, content creation, local citation building, and reputation management. SBMP handles all of this as your dedicated local marketing agency from £199/month.",
  },
  {
    q: "How do I find a local marketing agency near me?",
    a: "To find a local marketing agency near you: search 'local marketing agency near me' on Google and review their rankings. Check their Google reviews, ask for ranking case studies, and ensure they have experience in your specific industry. SBMP serves businesses across the UK and US — contact us for a free audit.",
  },
  {
    q: "What is the difference between a local marketing agency and a national agency?",
    a: "A local marketing agency specialises in strategies targeting customers in a specific geographic area — local SEO, Google Maps, local Google Ads. A national agency focuses on broad brand awareness. For local businesses, a local marketing agency delivers significantly better ROI because every strategy targets your actual service area.",
  },
  {
    q: "How much does a local marketing agency cost?",
    a: "Large agencies charge £1,000–£5,000+/month. SBMP offers expert local marketing services from £199/month (Starter), £349/month (Growth: SEO + Ads + content), and £599/month (Pro: everything included). All plans are month-to-month — no long-term contracts.",
  },
  {
    q: "What is a hyperlocal marketing agency?",
    a: "A hyperlocal marketing agency focuses on extremely specific geographic areas — a single neighbourhood, town, or postcode radius. Hyperlocal marketing uses precise geo-targeting in Google Ads and Facebook Ads, neighbourhood-level SEO content, and highly targeted local outreach. Particularly effective for businesses serving a tight geographic area.",
  },
  {
    q: "What should I look for in a local marketing agency?",
    a: "Look for: (1) Proven local SEO results with case studies; (2) Google reviews from real business clients; (3) No long-term contracts; (4) Direct access to the expert — not a junior team; (5) Transparent monthly reporting; (6) Experience in your specific industry. SBMP meets all these criteria.",
  },
  {
    q: "What is the best local marketing agency for small businesses?",
    a: "The best local marketing agency for small businesses specialises in local digital marketing (not just general SEO), has verifiable results in your industry, offers flexible month-to-month plans, and gives direct expert access. SBMP has ranked 150+ local businesses on page 1 across a range of service industries, with plans from £199/month.",
  },
  {
    q: "Can a local marketing agency help with Google Maps ranking?",
    a: "Yes — Google Maps ranking is one of the most important services a local marketing agency provides. Appearing in the Maps 3-pack generates more calls than almost any other local marketing activity. SBMP optimises your Google Business Profile, builds local citations, manages reviews, and executes the on-page SEO signals needed to rank in the Maps 3-pack.",
  },
];

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function LocalMarketingAgencyPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />

      {/* ====================================================================
          SECTION C — HERO
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
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm mb-8"
            style={{ color: "#4A5A6E" }}
          >
            <Link href="/" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>
              Home
            </Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Local Marketing Agency</span>
          </nav>

          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6"
              style={{
                backgroundColor: "rgba(79,142,247,0.15)",
                border: "1px solid rgba(79,142,247,0.3)",
              }}
            >
              ⭐ 4.9/5 — Rated the Best Local Marketing Agency
            </div>

            {/* H1 — primary keyword "local marketing agency" + "local marketing agency near me" */}
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
              Local Marketing Agency That Delivers Real Rankings
            </h1>

            <p className="text-lg sm:text-xl mb-6" style={{ color: "#8B9CB8" }}>
              SBMP is the local marketing agency for small businesses that need real results — not agency jargon.
              Expert local SEO, Google Ads, and digital marketing. 150+ businesses ranked. No contracts. Direct expert
              access.
            </p>

            {/* AEO ANSWER BLOCK — targets: "what does a local marketing agency do" */}
            <p
              className="text-base mb-10 p-4 rounded-xl"
              style={{
                color: "#CBD5E1",
                backgroundColor: "rgba(79,142,247,0.06)",
                border: "1px solid rgba(79,142,247,0.15)",
                lineHeight: "1.75",
              }}
            >
              <strong style={{ color: "#E2E8F0" }}>A local marketing agency</strong> manages all digital marketing
              activities needed to make a small business visible to local customers on Google — including local SEO,
              Google Business Profile management, Google Ads, and reputation management. SBMP is a specialist local
              marketing agency that has ranked 150+ small businesses on page 1 of Google, with plans starting from
              £199/month and no long-term contracts.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/free-audit"
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get My Free Agency Audit →
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

            {/* Rating strip */}
            <div className="flex flex-wrap gap-6">
              {[
                { label: "150+ Businesses Ranked", icon: "🏆" },
                { label: "4.9/5 Average Rating", icon: "⭐" },
                { label: "Page 1 in 60 Days (avg)", icon: "🚀" },
                { label: "No Long-Term Contracts", icon: "✅" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium" style={{ color: "#CBD5E1" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION D — WHY CHOOSE SBMP AS YOUR LOCAL MARKETING AGENCY
          H2 keyword: "best marketing agency for small business"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              Why SBMP Is the Best Local Marketing Agency for Small Businesses
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              We built SBMP specifically for local small businesses who need real results, transparent reporting, and
              direct access to an expert — not a large agency experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "#080D1A",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
                >
                  {d.title}
                </h3>
                <p className="text-sm" style={{ color: "#8B9CB8", lineHeight: "1.75" }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION E — SERVICES COMPARISON TABLE
          H2 keyword: "local marketing agency packages", "local marketing services"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              Local Marketing Agency Packages — What&apos;s Included
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              Every plan includes expert work from an experienced local marketing specialist. No junior staff. No
              outsourcing.
            </p>
          </div>

          {/* Pricing header */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Plan headers */}
            <div
              className="grid grid-cols-4 gap-0 text-center"
              style={{ backgroundColor: "rgba(79,142,247,0.08)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="px-4 py-5 text-left">
                <span className="text-sm font-bold" style={{ color: "#8B9CB8" }}>
                  Service
                </span>
              </div>
              {[
                { name: "Starter", price: "£199/mo" },
                { name: "Growth", price: "£349/mo" },
                { name: "Pro", price: "£599/mo" },
              ].map((plan) => (
                <div key={plan.name} className="px-4 py-5">
                  <div
                    className="text-base font-extrabold"
                    style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
                  >
                    {plan.name}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: "#4F8EF7" }}>
                    {plan.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Service rows */}
            {services.map((svc, i) => (
              <div
                key={svc.name}
                className="grid grid-cols-4 gap-0 items-center"
                style={{
                  backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div className="px-4 py-4">
                  <Link
                    href={svc.href}
                    className="text-sm font-medium hover:underline"
                    style={{ color: "#CBD5E1" }}
                  >
                    {svc.name}
                  </Link>
                </div>
                <div className="px-4 py-4 text-center text-lg">
                  {svc.starter ? <span style={{ color: "#22C55E" }}>✓</span> : <span style={{ color: "rgba(255,255,255,0.15)" }}>—</span>}
                </div>
                <div className="px-4 py-4 text-center text-lg">
                  {svc.growth ? <span style={{ color: "#22C55E" }}>✓</span> : <span style={{ color: "rgba(255,255,255,0.15)" }}>—</span>}
                </div>
                <div className="px-4 py-4 text-center text-lg">
                  {svc.pro ? <span style={{ color: "#22C55E" }}>✓</span> : <span style={{ color: "rgba(255,255,255,0.15)" }}>—</span>}
                </div>
              </div>
            ))}

            {/* CTA row */}
            <div
              className="grid grid-cols-4 gap-0 items-center pt-6 pb-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="px-4" />
              {["/free-audit", "/free-audit", "/free-audit"].map((href, i) => (
                <div key={i} className="px-4 text-center">
                  <Link
                    href={href}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "#4F8EF7" }}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-center mt-4" style={{ color: "#4A5A6E" }}>
            All plans are month-to-month. Cancel anytime.{" "}
            <Link href="/pricing" style={{ color: "#4F8EF7" }} className="hover:underline">
              View full pricing →
            </Link>
          </p>
        </div>
      </section>

      {/* ====================================================================
          SECTION F — HOW WE WORK
          H2 keyword: "how does a local marketing agency work"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              How Our Local Marketing Agency Works
            </h2>
            <p style={{ color: "#8B9CB8" }}>From first contact to page 1 rankings — a clear, transparent process.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-start">
            {[
              {
                step: "01",
                title: "Free Audit",
                desc: "We analyse your Google visibility, competitor rankings, website health, and local market opportunity. Delivered within 24 hours.",
              },
              {
                step: "02",
                title: "Strategy Call",
                desc: "A direct call with your local marketing expert to walk through the findings and agree a bespoke local marketing strategy.",
              },
              {
                step: "03",
                title: "Onboarding",
                desc: "We set up access, build your campaign infrastructure, and begin technical SEO work. Most campaigns go live within 5–7 days.",
              },
              {
                step: "04",
                title: "Execution",
                desc: "Expert ongoing work every month — content, links, Ads, GMB updates, citation building, review management, and more.",
              },
              {
                step: "05",
                title: "Monthly Report",
                desc: "A clear report showing ranking movements, traffic growth, and leads generated. You see the ROI of your local marketing agency spend.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-2xl p-5 relative"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="text-3xl font-extrabold mb-3"
                  style={{ color: "rgba(79,142,247,0.35)", fontFamily: "var(--font-display, sans-serif)" }}
                >
                  {s.step}
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
                >
                  {s.title}
                </h3>
                <p className="text-xs" style={{ color: "#8B9CB8", lineHeight: "1.7" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION G — LOCAL MARKETING AGENCY LOCATIONS
          H2 keyword: "local marketing company near me", "local marketing agencies"
          Targets proximity searches
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              Local Marketing Agency Serving the UK & US
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              We serve local businesses across the UK and the United States — providing expert local digital marketing
              wherever your business is located.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              "London", "Manchester", "Birmingham", "Bristol",
              "Leeds", "Sheffield", "Glasgow", "Edinburgh",
              "Houston TX", "Dallas TX", "Austin TX", "Katy TX",
              "Chicago IL", "Phoenix AZ", "Denver CO", "Nashville TN",
            ].map((city) => (
              <div
                key={city}
                className="rounded-xl px-4 py-3 text-center text-sm font-medium"
                style={{
                  backgroundColor: "#0D1627",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#CBD5E1",
                }}
              >
                📍 {city}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/locations"
              style={{ color: "#4F8EF7" }}
              className="text-sm font-semibold hover:underline"
            >
              View UK locations →
            </Link>
            <Link
              href="/local-seo"
              style={{ color: "#4F8EF7" }}
              className="text-sm font-semibold hover:underline"
            >
              View US cities →
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION H — FAQ
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-10 text-center"
            style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
          >
            Local Marketing Agency — Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-xl group"
                style={{
                  backgroundColor: "#080D1A",
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
          SECTION I — INTERNAL LINKS
          ==================================================================== */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold mb-6 text-center"
            style={{ color: "#CBD5E1", fontFamily: "var(--font-display, sans-serif)" }}
          >
            Explore Our Local Marketing Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Local Business Marketing", href: "/local-business-marketing" },
              { label: "Local SEO Services", href: "/local-seo" },
              { label: "Local Advertising", href: "/local-advertising" },
              { label: "Google Maps Marketing", href: "/google-maps-marketing" },
              { label: "Local Social Media Marketing", href: "/local-social-media-marketing" },
              { label: "Free Local Advertising", href: "/free-local-advertising" },
              { label: "Local Marketing Strategies", href: "/local-marketing-strategies" },
              { label: "Digital Marketing", href: "/digital-marketing-for-small-business" },
              { label: "All Services", href: "/services" },
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
          SECTION J — FINAL CTA
          ==================================================================== */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(79,142,247,0.15) 0%, transparent 70%), #0D1627",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
          >
            Ready to Work With the Best Local Marketing Agency?
          </h2>
          <p className="text-base mb-8" style={{ color: "#8B9CB8" }}>
            Book a free audit and we&apos;ll analyse your current local marketing, identify your biggest gaps, and
            present a clear strategy to get your business to page 1 of Google. No obligation. No jargon. Just results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get My Free Local Marketing Audit →
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
              View Agency Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
