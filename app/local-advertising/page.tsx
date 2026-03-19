import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20local%20advertising%20for%20my%20business.%20Can%20you%20help%3F";

// ============================================================================
// SECTION A — META DATA & TECHNICAL SEO
// Title: 60 chars | Primary: "local advertising"
// Description: 158 chars | Keyword + benefit + CTA
// ============================================================================

export const metadata: Metadata = {
  title: "Local Advertising for Small Business | Best Options",
  description:
    "Expert local advertising for small businesses. Google Ads, local SEO, Facebook ads & free advertising options. Get more local customers today. Free audit.",
  authors: [{ name: "SBMP — Local Marketing Expert" }],
  creator: "SBMP — Small Business Marketing Professional",
  publisher: "SBMP",
  category: "Local Advertising",
  keywords: [
    "local advertising",
    "local business advertising",
    "local advertising for small business",
    "google local advertising",
    "free local business advertising",
    "best advertising for small businesses",
    "free local advertising",
    "advertise my business locally",
    "best advertising for local business",
    "local advertising companies",
    "best way to advertise locally",
    "local business advertising near me",
    "best online advertising for small business",
    "free local advertising near me",
    "best paid advertising for small business",
    "small business advertising near me",
    "local digital advertising",
    "local online advertising",
    "local advertising agencies",
    "local social media advertising",
    "local advertising google",
    "ways to advertise locally",
    "ways to advertise your business locally",
    "promote your business locally",
    "business advertising near me",
    "local internet advertising",
    "local web advertising",
    "local advertising options",
    "local advertising website",
    "affordable local advertising",
    "cheap local advertising",
    "free local advertising sites",
    "effective local advertising",
    "most effective local advertising",
    "best advertising for small local business",
    "local display advertising",
    "go local advertising",
    "first local advertising",
    "local advertising firm",
    "local advertising service",
    "local advertising strategies",
    "local advertising business",
    "advertising small business locally",
    "advertising your business locally",
    "best advertising campaigns for small business",
    "best advertising options for small business",
    "local advertising agencies near me",
    "local advertising companies near me",
    "nearby advertising agency",
    "google local business advertising",
    "google free local business advertising",
    "best free advertising for small business",
    "free local advertising for small businesses",
    "free local advertising online",
    "free local marketing",
    "local online advertising agency",
    "local search advertising",
    "affordable local marketing",
    "best internet marketing company for small business",
  ],
  alternates: {
    canonical: `${BASE_URL}/local-advertising`,
  },
  openGraph: {
    title: "Local Advertising for Small Business | Best Options & Results",
    description:
      "Expert local advertising — Google Ads, local SEO, Facebook, and free advertising options for small businesses. Free audit. More local customers guaranteed.",
    url: `${BASE_URL}/local-advertising`,
    type: "website",
    siteName: "SBMP — Small Business Marketing Professional",
    images: [
      {
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 1200,
        height: 630,
        alt: "Local Advertising for Small Business — SBMP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Advertising for Small Business | Best Options",
    description:
      "Google Ads, local SEO, Facebook ads & free advertising for small businesses. Free audit.",
  },
};

// ============================================================================
// SECTION B — JSON-LD SCHEMA MARKUP
// ProfessionalService + FAQPage + BreadcrumbList
// ============================================================================

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/local-advertising`,
    name: "SBMP — Local Advertising for Small Business",
    url: `${BASE_URL}/local-advertising`,
    telephone: "+923474825228",
    email: "hello@sbmp.com",
    description:
      "Expert local advertising services for small businesses. Google Ads, local SEO, Facebook advertising, and free local advertising strategies to get more local customers.",
    serviceType: [
      "Local Advertising",
      "Google Ads",
      "Local SEO",
      "Facebook Advertising",
      "Local Display Advertising",
      "Google Business Profile",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/local-advertising`,
    name: "Local Advertising for Small Business | Best Options",
    description: "Expert local advertising for small businesses. Google Ads, local SEO, Facebook ads & free advertising options. Get more local customers today.",
    url: `${BASE_URL}/local-advertising`,
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
        { "@type": "ListItem", position: 2, name: "Local Advertising", item: `${BASE_URL}/local-advertising` },
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
        name: "Local Advertising",
        item: `${BASE_URL}/local-advertising`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is local advertising?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local advertising is any form of marketing that targets customers in a specific geographic area — a city, town, postcode, or radius. It includes Google Ads with local targeting, local SEO, Facebook geo-targeted ads, Google Business Profile, local display advertising, and free options like local directories and Google Business Profile. The goal is to appear in front of local buyers at the exact moment they search for what you offer.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best way to advertise a local business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best way to advertise a local business in 2026 is a combination of: (1) Google Business Profile — free and the most powerful tool for local visibility; (2) Local SEO — organic rankings that drive consistent free traffic; (3) Google Ads with local targeting — immediate paid visibility; (4) Facebook/Instagram geo-targeted ads — brand awareness and retargeting. Together these cover every way local customers search and discover businesses.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best free local advertising options?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best free local advertising options are: (1) Google Business Profile — the #1 free tool, appearing in Maps results; (2) Bing Places — often overlooked but drives free traffic; (3) Yelp, Yell, and local directories — free listings that build citations; (4) Facebook Business Page — free local presence on social; (5) Local community groups on Facebook and Nextdoor; (6) Local press and PR — free editorial coverage. These free options build the foundation; paid local advertising amplifies results.",
        },
      },
      {
        "@type": "Question",
        name: "How much does local advertising cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local advertising costs vary by channel. Google Ads for local businesses typically costs £200–£1,500/month in ad spend, depending on your industry competitiveness. SBMP's local advertising management starts from £199/month (excluding ad spend). Free options like Google Business Profile and local directories cost nothing. The most cost-effective approach combines free local SEO/GBP with targeted paid advertising.",
        },
      },
      {
        "@type": "Question",
        name: "What is Google local advertising?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google local advertising refers to paid ads that target users in a specific geographic area through Google Ads, and free local visibility through Google Business Profile and local SEO. Google Local Services Ads (LSAs) are a specific paid format showing verified local service providers at the very top of search results. Google Ads with local intent targeting allows businesses to bid on searches made within a set radius of their location.",
        },
      },
      {
        "@type": "Question",
        name: "How do I advertise my business locally for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To advertise your business locally for free: (1) Fully optimise your Google Business Profile with photos, posts, and reviews; (2) List your business on Yelp, Yell, Thomson Local, and industry directories; (3) Create a Facebook Business Page and post regularly; (4) Join and contribute to local Facebook community groups; (5) List on Nextdoor as a local business; (6) Ask satisfied customers to leave Google reviews; (7) Create local blog content targeting '[service] in [your town]' searches.",
        },
      },
      {
        "@type": "Question",
        name: "Is Facebook advertising good for local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Facebook advertising is highly effective for local businesses because of its precise geo-targeting capabilities. You can target users within a specific radius of your business, by city/postcode, and by interests that match your ideal customer profile. Facebook ads work especially well for local restaurants, salons, service businesses, and retailers building brand awareness and driving footfall. SBMP manages Facebook local advertising as part of our Growth and Pro plans.",
        },
      },
      {
        "@type": "Question",
        name: "What local advertising options are available for small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local advertising options for small businesses include: (1) Google Ads — paid search with local targeting; (2) Google Local Services Ads — pay-per-lead local ads; (3) Google Business Profile — free local Maps visibility; (4) Facebook/Instagram geo-targeted ads; (5) Local SEO — free organic local rankings; (6) Local display advertising on news sites; (7) Local directory listings; (8) Local radio and print (offline); (9) Nextdoor business ads; (10) YouTube local video advertising. SBMP helps small businesses choose and execute the right mix.",
        },
      },
    ],
  },
];

// ============================================================================
// ADVERTISING OPTIONS DATA
// ============================================================================

const adOptions = [
  {
    icon: "🔍",
    title: "Google Ads (Local)",
    badge: "Paid",
    badgeColor: "#FBBF24",
    cost: "From £200/mo ad spend",
    speed: "Immediate results",
    best: "High-intent buyers actively searching",
    desc: "Geo-targeted pay-per-click campaigns that put your business at the top of Google search results the moment a local customer searches for what you offer. Highest commercial intent of any advertising channel.",
    href: "/services/google-ads",
  },
  {
    icon: "📍",
    title: "Local SEO",
    badge: "Organic",
    badgeColor: "#22C55E",
    cost: "From £199/mo",
    speed: "30–90 days",
    best: "Long-term free traffic",
    desc: "Rank your website organically for local search terms. Once you rank, each click is free. Local SEO delivers the highest long-term ROI of any local advertising strategy — traffic that compounds month over month.",
    href: "/local-seo",
  },
  {
    icon: "🗺️",
    title: "Google Business Profile",
    badge: "Free",
    badgeColor: "#22C55E",
    cost: "No cost",
    speed: "2–8 weeks",
    best: "'Near me' and Maps searches",
    desc: "The most powerful free local advertising tool available. A fully optimised Google Business Profile puts your business in the Maps 3-pack — appearing above organic results for millions of local searches every day.",
    href: "/google-maps-marketing",
  },
  {
    icon: "📘",
    title: "Facebook & Instagram Ads",
    badge: "Paid",
    badgeColor: "#FBBF24",
    cost: "From £150/mo ad spend",
    speed: "Immediate results",
    best: "Brand awareness & retargeting",
    desc: "Geo-targeted social media advertising reaching local customers by location, age, interests, and behaviour. Ideal for building brand awareness, promoting offers, and retargeting website visitors who haven't yet converted.",
    href: "/local-social-media-marketing",
  },
  {
    icon: "📋",
    title: "Local Directories",
    badge: "Free",
    badgeColor: "#22C55E",
    cost: "Free (or low cost)",
    speed: "1–4 weeks",
    best: "Citation building & credibility",
    desc: "Listings on Yelp, Yell, Thomson Local, FreeIndex, and industry directories provide free local advertising and build the citation signals that boost your local SEO rankings. Essential foundation for any local advertising strategy.",
    href: "/local-seo",
  },
  {
    icon: "📺",
    title: "Local Display & Video Ads",
    badge: "Paid",
    badgeColor: "#FBBF24",
    cost: "From £100/mo ad spend",
    speed: "Immediate results",
    best: "Awareness in specific areas",
    desc: "Display advertising on local news sites and YouTube video ads with geographic targeting build brand awareness in your specific service area. Effective for local businesses in competitive markets needing visibility beyond search.",
    href: "/local-business-marketing",
  },
];

// ============================================================================
// FREE VS PAID TABLE DATA
// ============================================================================

const comparison = [
  { channel: "Google Business Profile", cost: "Free", speed: "Weeks", roi: "⭐⭐⭐⭐⭐", type: "free" },
  { channel: "Local SEO", cost: "£199+/mo", speed: "1–3 months", roi: "⭐⭐⭐⭐⭐", type: "paid" },
  { channel: "Google Ads (Local)", cost: "£200+ ad spend", speed: "Immediate", roi: "⭐⭐⭐⭐", type: "paid" },
  { channel: "Local Directories", cost: "Free", speed: "Weeks", roi: "⭐⭐⭐", type: "free" },
  { channel: "Facebook Geo-Ads", cost: "£150+ ad spend", speed: "Immediate", roi: "⭐⭐⭐⭐", type: "paid" },
  { channel: "Local Display Ads", cost: "£100+ ad spend", speed: "Immediate", roi: "⭐⭐⭐", type: "paid" },
  { channel: "Nextdoor Ads", cost: "Free + Paid", speed: "Weeks", roi: "⭐⭐⭐", type: "free" },
  { channel: "Local Video (YouTube)", cost: "£100+ ad spend", speed: "Immediate", roi: "⭐⭐⭐", type: "paid" },
];

// ============================================================================
// FAQ DATA
// ============================================================================

const faqs = [
  {
    q: "What is local advertising?",
    a: "Local advertising is any form of marketing that targets customers in a specific geographic area — a city, town, postcode, or radius. It includes Google Ads with local targeting, local SEO, Facebook geo-targeted ads, Google Business Profile, local display advertising, and free options like local directories. The goal is to appear in front of local buyers at the exact moment they search for what you offer.",
  },
  {
    q: "What is the best way to advertise a local business?",
    a: "The best way to advertise a local business in 2026 is a combination of: (1) Google Business Profile — free and the most powerful tool for local visibility; (2) Local SEO — organic rankings that drive consistent free traffic; (3) Google Ads with local targeting — immediate paid visibility; (4) Facebook/Instagram geo-targeted ads — brand awareness and retargeting. Together these cover every way local customers search.",
  },
  {
    q: "What are the best free local advertising options?",
    a: "The best free local advertising options are: (1) Google Business Profile — #1 free tool, appearing in Maps results; (2) Bing Places; (3) Yelp, Yell, and local directories; (4) Facebook Business Page; (5) Local community groups on Facebook and Nextdoor; (6) Local press and PR. These free options build the foundation; paid local advertising amplifies results.",
  },
  {
    q: "How much does local advertising cost?",
    a: "Google Ads for local businesses typically costs £200–£1,500/month in ad spend. SBMP's management starts from £199/month (excluding ad spend). Free options like Google Business Profile and local directories cost nothing. The most cost-effective approach combines free local SEO/GBP with targeted paid advertising for maximum coverage and ROI.",
  },
  {
    q: "What is Google local advertising?",
    a: "Google local advertising refers to paid ads targeting users in a specific geographic area through Google Ads, and free local visibility through Google Business Profile and local SEO. Google Local Services Ads (LSAs) are a specific paid format showing verified local service providers at the very top of search results.",
  },
  {
    q: "How do I advertise my business locally for free?",
    a: "To advertise your business locally for free: (1) Fully optimise your Google Business Profile; (2) List on Yelp, Yell, Thomson Local, and industry directories; (3) Create a Facebook Business Page; (4) Join local Facebook community groups; (5) List on Nextdoor; (6) Ask customers for Google reviews; (7) Create local blog content targeting '[service] in [your town]'.",
  },
  {
    q: "Is Facebook advertising good for local businesses?",
    a: "Yes — Facebook advertising is highly effective for local businesses because of its precise geo-targeting. You can target users within a specific radius, by city/postcode, and by interests matching your ideal customer profile. Facebook ads work especially well for local restaurants, salons, service businesses, and retailers building brand awareness.",
  },
  {
    q: "What local advertising options are available for small businesses?",
    a: "Local advertising options include: Google Ads, Google Local Services Ads, Google Business Profile, Facebook/Instagram geo-ads, Local SEO, local display advertising, local directory listings, Nextdoor ads, and YouTube local video ads. SBMP helps small businesses choose and execute the right mix for their budget and goals.",
  },
];

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function LocalAdvertisingPage() {
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
            <span style={{ color: "#8B9CB8" }}>Local Advertising</span>
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
              📢 Local Advertising That Gets Results
            </div>

            {/* H1 — primary keyword "local advertising" + "local business advertising" */}
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
              Local Advertising That Puts Your Business in Front of Local Buyers
            </h1>

            <p className="text-lg sm:text-xl mb-6" style={{ color: "#8B9CB8" }}>
              From free local advertising to targeted Google Ads — we identify the best local advertising strategy for
              your business, budget, and goals. More local customers. Measurable results. No wasted spend.
            </p>

            {/* AEO ANSWER BLOCK — targets featured snippet for "what is local advertising" */}
            <p
              className="text-base mb-10 p-4 rounded-xl"
              style={{
                color: "#CBD5E1",
                backgroundColor: "rgba(79,142,247,0.06)",
                border: "1px solid rgba(79,142,247,0.15)",
                lineHeight: "1.75",
              }}
            >
              <strong style={{ color: "#E2E8F0" }}>Local advertising</strong> is the use of paid and free digital
              channels — Google Ads, Google Business Profile, Facebook geo-targeted ads, local SEO, and online
              directories — to promote a business to customers in a specific geographic area. As of 2026, the most
              effective local advertising combines free organic strategies with targeted paid campaigns for maximum
              local reach and ROI.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-audit"
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get My Free Advertising Audit →
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
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION D — WHAT IS LOCAL ADVERTISING
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-6"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              What Is Local Advertising — And Why Every Small Business Needs It
            </h2>
            <p className="text-base mb-5" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              Local advertising is any marketing activity specifically designed to reach customers in your immediate
              geographic area. Unlike national advertising, local advertising focuses on{" "}
              <strong style={{ color: "#CBD5E1" }}>proximity and intent</strong> — reaching people near your business
              who are actively looking for what you offer.
            </p>
            <p className="text-base mb-5" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              In 2026, the most effective local advertising is digital. When a customer searches &ldquo;best plumber
              near me&rdquo; or &ldquo;dentist open now&rdquo; — they are ready to buy. Local advertising ensures your
              business is the one they find and call.
            </p>
            <p className="text-base mb-0" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              SBMP manages local advertising across all channels — from free directory listings and{" "}
              <Link href="/google-maps-marketing" style={{ color: "#4F8EF7" }} className="hover:underline">
                Google Maps marketing
              </Link>{" "}
              to geo-targeted Google Ads and{" "}
              <Link href="/local-social-media-marketing" style={{ color: "#4F8EF7" }} className="hover:underline">
                local social media advertising
              </Link>
              . We build the right local advertising mix for your specific goals and budget.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION E — LOCAL ADVERTISING OPTIONS
          H2 keyword: "local advertising options", "best advertising for small businesses"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              Local Advertising Options for Small Businesses
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              Every channel has a role to play. We find the best advertising mix for your budget and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {adOptions.map((opt) => (
              <Link
                key={opt.title}
                href={opt.href}
                className="block rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30"
                style={{
                  backgroundColor: "#0D1627",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{opt.icon}</span>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${opt.badgeColor}20`,
                      color: opt.badgeColor,
                      border: `1px solid ${opt.badgeColor}40`,
                    }}
                  >
                    {opt.badge}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
                >
                  {opt.title}
                </h3>
                <div className="flex gap-4 mb-3">
                  <span className="text-xs" style={{ color: "#22C55E" }}>
                    💰 {opt.cost}
                  </span>
                  <span className="text-xs" style={{ color: "#FBBF24" }}>
                    ⚡ {opt.speed}
                  </span>
                </div>
                <p className="text-xs mb-3" style={{ color: "#4F8EF7" }}>
                  Best for: {opt.best}
                </p>
                <p className="text-sm" style={{ color: "#8B9CB8", lineHeight: "1.7" }}>
                  {opt.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION F — FREE VS PAID COMPARISON TABLE
          H2 keyword: "free local advertising" vs "best paid advertising for small business"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              Free vs Paid Local Advertising — Which Is Better?
            </h2>
            <p className="text-base mb-8" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              The honest answer: <strong style={{ color: "#CBD5E1" }}>both.</strong> Free local advertising builds your
              foundation and delivers long-term ROI. Paid local advertising delivers immediate results. The best local
              advertising strategy for small businesses uses both together — free channels compound over time, paid
              channels keep leads flowing in the short term.
            </p>

            {/* Comparison table */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Header */}
              <div
                className="grid grid-cols-4 gap-0 px-5 py-3 text-xs font-bold uppercase tracking-wider"
                style={{ backgroundColor: "rgba(79,142,247,0.1)", color: "#8B9CB8" }}
              >
                <span>Channel</span>
                <span>Cost</span>
                <span>Speed</span>
                <span>ROI Potential</span>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.channel}
                  className="grid grid-cols-4 gap-0 px-5 py-4 text-sm items-center"
                  style={{
                    backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <span className="font-medium" style={{ color: "#CBD5E1" }}>
                    {row.channel}
                  </span>
                  <span
                    style={{
                      color: row.type === "free" ? "#22C55E" : "#FBBF24",
                    }}
                  >
                    {row.cost}
                  </span>
                  <span style={{ color: "#8B9CB8" }}>{row.speed}</span>
                  <span>{row.roi}</span>
                </div>
              ))}
            </div>

            <p className="text-sm mt-6" style={{ color: "#8B9CB8" }}>
              💡 <strong style={{ color: "#CBD5E1" }}>Pro tip:</strong> Start with Google Business Profile (free) and
              local SEO as your foundation. Add Google Ads for immediate leads while SEO builds. This &ldquo;paid +
              organic&rdquo; local advertising strategy delivers the best short-term and long-term results.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION G — WAYS TO ADVERTISE LOCALLY
          H2 keyword: "ways to advertise locally", "ways to advertise your business locally"
          "best way to advertise small business locally", "advertise my business locally"
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-6"
              style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
            >
              7 Proven Ways to Advertise Your Business Locally
            </h2>
            <div className="space-y-5">
              {[
                {
                  num: "01",
                  title: "Optimise Your Google Business Profile",
                  body: "This is the single most effective free local advertising tool in 2026. A complete, active Google Business Profile puts your business in the Maps 3-pack for 'near me' and location-based searches. Add photos, posts, products, and services weekly. Respond to every review. This alone can double your local enquiries.",
                },
                {
                  num: "02",
                  title: "Run Geo-Targeted Google Ads",
                  body: "Google Ads with local targeting shows your business at the top of search results for customers within your set radius. Set up keyword targeting around '[your service] near me', '[your service] in [city]', and intent-based terms. Google Ads delivers the highest-intent local advertising traffic available.",
                },
                {
                  num: "03",
                  title: "Invest in Local SEO",
                  body: "Local SEO makes your website rank organically for local searches. Once you rank on page 1 of Google, every click is free. A properly executed local SEO campaign for a small business delivers a 5–10× return on investment over 12 months — the best ROI of any local advertising channel.",
                },
                {
                  num: "04",
                  title: "List on Free Local Advertising Sites",
                  body: "Submit your business to Yelp, Yell, Thomson Local, FreeIndex, Checkatrade, and industry-specific directories. These free local advertising sites build the citation signals Google uses to verify your business location and relevance — directly boosting your local search rankings.",
                },
                {
                  num: "05",
                  title: "Use Facebook & Instagram Local Ads",
                  body: "Facebook's geo-targeting allows you to advertise to people within a specific radius of your business. Run awareness campaigns targeting local demographics, retarget website visitors, and promote time-sensitive offers. Local social media advertising works especially well for restaurants, beauty businesses, and retailers.",
                },
                {
                  num: "06",
                  title: "Build Your Google Review Count",
                  body: "Reviews are free local advertising — they appear in Google search results, Maps, and influence buying decisions. A systematic review generation strategy (text message requests, email follow-ups, in-person asking) builds the social proof that converts searchers into customers. 10+ reviews with a 4.5+ rating is the threshold that unlocks higher conversion rates.",
                },
                {
                  num: "07",
                  title: "Create Local Content Marketing",
                  body: "Write blog posts and landing pages targeting '[service] in [your city]' search queries. Local content marketing is free advertising that keeps delivering for years. A well-written 'Best Plumbers in Manchester' guide or 'Dentists in Bristol Guide' ranks for dozens of local search variations and drives qualified traffic indefinitely.",
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
          SECTION H — FAQ
          ==================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-10 text-center"
            style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}
          >
            Local Advertising — Frequently Asked Questions
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
            Explore More Local Marketing Resources
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Local Business Marketing", href: "/local-business-marketing" },
              { label: "Local SEO Services", href: "/local-seo" },
              { label: "Local Marketing Agency", href: "/local-marketing-agency" },
              { label: "Google Maps Marketing", href: "/google-maps-marketing" },
              { label: "Local Social Media Marketing", href: "/local-social-media-marketing" },
              { label: "Free Local Advertising", href: "/free-local-advertising" },
              { label: "Local Marketing Strategies", href: "/local-marketing-strategies" },
              { label: "Digital Marketing", href: "/digital-marketing-for-small-business" },
              { label: "Get Free Audit", href: "/free-audit" },
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
            Start Advertising Your Business Locally Today
          </h2>
          <p className="text-base mb-8" style={{ color: "#8B9CB8" }}>
            Get a free local advertising audit. We&apos;ll identify the best advertising channels for your business,
            show you exactly where your competitors are winning — and build a strategy to beat them.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get My Free Local Advertising Audit →
            </Link>
            <Link
              href="/local-business-marketing"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#E2E8F0",
              }}
            >
              Learn About Local Business Marketing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
