import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%27m%20interested%20in%20local%20marketing%20strategies%20for%20my%20business.%20Can%20you%20help%3F";

export const metadata: Metadata = {
  title: "Local Marketing Strategies for Small Business | 2026 Guide",
  description:
    "Proven local marketing strategies for small businesses in 2026. Local SEO, Google Ads, Google Maps & content marketing plans that generate real local customers.",
  authors: [{ name: "SBMP — Local Marketing Expert" }],
  creator: "SBMP — Small Business Marketing Professional",
  publisher: "SBMP",
  category: "Local Marketing Strategies",
  keywords: [
    "local marketing strategy",
    "local marketing strategies small business",
    "best local marketing strategies",
    "local digital marketing strategy",
    "local seo strategy",
    "best marketing strategies for small business",
    "best marketing strategies for local businesses",
    "local marketing best practices",
    "effective local marketing",
    "effective local marketing strategies",
    "local marketing campaign",
    "local marketing plans",
    "best local marketing campaigns",
    "local marketing packages",
    "local store marketing",
    "local store marketing strategies",
    "local store marketing for restaurants",
    "local content marketing",
    "local business content marketing",
    "content marketing for local business",
    "content marketing for plumbers",
    "local inbound marketing",
    "local inbound marketing agency",
    "local lead marketing",
    "local results marketing",
    "local web marketing",
    "local web marketing services",
    "local website marketing",
    "local level marketing",
    "local strategy marketing",
    "local reputation marketing",
    "local internet marketing for your small business",
    "surefire local marketing",
    "hyper local small business marketing company",
    "best local marketing",
    "best marketing for small business",
    "best small business marketing strategies",
    "best marketing plans for small business",
    "best marketing practices for small businesses",
    "best marketing ways for small business",
    "best ways to promote your small business",
    "promote your local",
    "ways to promote your business locally",
    "local marketing for plumbers",
    "home services local seo marketing",
    "local service marketing",
    "elocal internet marketing",
  ],
  alternates: { canonical: `${BASE_URL}/local-marketing-strategies` },
  openGraph: {
    title: "Local Marketing Strategies for Small Business | 2026 Guide",
    description: "Proven local marketing strategies for 2026. Local SEO, Google Ads, Google Maps & content plans that generate real local customers. Free audit.",
    url: `${BASE_URL}/local-marketing-strategies`,
    type: "website",
    siteName: "SBMP — Small Business Marketing Professional",
    images: [{ url: `${BASE_URL}/sbmp-logo.png`, width: 1200, height: 630, alt: "Local Marketing Strategies — SBMP" }],
  },
  twitter: { card: "summary_large_image", title: "Local Marketing Strategies | 2026 Guide", description: "Proven local marketing strategies for small businesses. Free audit." },
};

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/local-marketing-strategies`,
    name: "SBMP — Local Marketing Strategies",
    url: `${BASE_URL}/local-marketing-strategies`,
    telephone: "+923474825228",
    email: "hello@sbmp.com",
    description: "Expert local marketing strategies for small businesses. Local SEO, Google Ads, content marketing, and reputation management strategies that deliver measurable results.",
    serviceType: ["Local Marketing Strategy", "Local SEO", "Content Marketing", "Local Business Marketing"],
    areaServed: [{ "@type": "Country", name: "United Kingdom" }, { "@type": "Country", name: "United States" }],
    priceRange: "£199–£699",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "150", bestRating: "5", worstRating: "1" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/local-marketing-strategies`,
    name: "Local Marketing Strategies for Small Business | 2026 Guide",
    description: "Proven local marketing strategies for small businesses in 2026. Local SEO, Google Ads, Google Maps & content marketing plans.",
    url: `${BASE_URL}/local-marketing-strategies`,
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
      { "@type": "ListItem", position: 2, name: "Local Marketing Strategies", item: `${BASE_URL}/local-marketing-strategies` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best local marketing strategy for small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best local marketing strategy for small businesses in 2026 combines: (1) Local SEO — ranking your website for location-based search queries; (2) Google Business Profile — ranking in the Maps Local 3-Pack; (3) Google Ads with local targeting — immediate paid visibility; (4) Reputation management — building Google reviews; (5) Local content marketing — location-specific pages and blog posts. This multi-channel approach covers all the ways local customers find and choose businesses.",
        },
      },
      {
        "@type": "Question",
        name: "What is a local marketing strategy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A local marketing strategy is a plan for making a business visible to customers in a specific geographic area. It defines which channels to use (local SEO, Google Ads, social media, content), what keywords to target, how to position against local competitors, what budget to allocate, and what metrics to track. A good local marketing strategy is specific to the business's location, industry, competitor landscape, and budget.",
        },
      },
      {
        "@type": "Question",
        name: "What is local content marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local content marketing is the creation of location-specific content — blog posts, service area pages, case studies, and guides — designed to rank for local search queries. For example, a plumber in Manchester might create content targeting 'boiler repair Manchester', 'emergency plumber Salford', and 'how to fix a leaking radiator in your Manchester home'. This content attracts organic local search traffic indefinitely and costs nothing per click.",
        },
      },
      {
        "@type": "Question",
        name: "How do I create a local marketing plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To create a local marketing plan: (1) Audit your current local online presence — Google rankings, Google Business Profile, competitor analysis; (2) Identify your target local keywords and service area; (3) Choose your channel mix — local SEO, Google Ads, social media, content; (4) Set a monthly budget for each channel; (5) Define KPIs — rankings, traffic, calls, leads; (6) Assign responsibility for execution; (7) Set a monthly review cadence. SBMP builds bespoke local marketing plans for small businesses as part of our free audit process.",
        },
      },
      {
        "@type": "Question",
        name: "What are the most effective local marketing strategies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most effective local marketing strategies ranked by ROI are: (1) Google Business Profile optimisation — free and highest immediate impact; (2) Local SEO — highest long-term ROI; (3) Google Ads — fastest results; (4) Review generation — highest conversion impact; (5) Local content marketing — compounds over time; (6) Local social media advertising — best for brand awareness. SBMP executes all of these in a coordinated local marketing strategy.",
        },
      },
      {
        "@type": "Question",
        name: "What is local store marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local store marketing refers to marketing strategies designed to drive foot traffic and local customers to a physical location — whether a retail store, restaurant, service business, or clinic. It includes local SEO, Google Maps marketing, local social media advertising, loyalty programmes, and in-store promotions combined with digital strategies. SBMP helps retail and service businesses drive both online enquiries and physical visits.",
        },
      },
    ],
  },
];

const strategies = [
  {
    rank: "🥇",
    title: "Local SEO Strategy",
    roi: "⭐⭐⭐⭐⭐",
    timeline: "1–3 months",
    cost: "£199+/mo",
    body: "Local SEO is the highest-ROI local marketing strategy over any 12-month period. By ranking your website for location-based keywords — 'plumber in [city]', '[service] near me', '[service] [postcode]' — you capture high-intent local customers who are actively searching. Once rankings are established, traffic is effectively free. SBMP's local SEO strategy includes keyword research, on-page optimisation, technical SEO, local citation building, and link acquisition.",
    href: "/local-seo",
  },
  {
    rank: "🥈",
    title: "Google Business Profile Strategy",
    roi: "⭐⭐⭐⭐⭐",
    timeline: "2–8 weeks",
    cost: "Free + management",
    body: "Your Google Business Profile controls your Google Maps Local 3-Pack ranking. A fully optimised profile — complete NAP, accurate categories, 50+ photos, regular posts, active Q&A, and a systematic review generation strategy — consistently outperforms inactive profiles. The GBP strategy is the single fastest way to increase local calls and is the mandatory foundation of every local marketing plan SBMP builds.",
    href: "/google-maps-marketing",
  },
  {
    rank: "🥉",
    title: "Google Ads Local Strategy",
    roi: "⭐⭐⭐⭐",
    timeline: "Immediate",
    cost: "£200+ ad spend",
    body: "Google Ads with local intent targeting delivers immediate visibility at the top of search results for your target keywords. The key to a profitable local Google Ads strategy is precise match types, negative keyword lists, geo-targeting radius optimisation, ad schedule adjustments for peak local search times, and conversion tracking set up correctly from day one. SBMP builds and manages local Google Ads strategies that deliver measurable ROI.",
    href: "/local-advertising",
  },
  {
    rank: "4",
    title: "Local Content Marketing Strategy",
    roi: "⭐⭐⭐⭐",
    timeline: "2–6 months",
    cost: "£99+/mo",
    body: "Local content marketing creates location-specific pages and blog posts that rank for the full breadth of local search queries. Service area pages targeting '[service] in [city/town]', local guides, FAQ pages, and case studies build topical authority and capture long-tail local searches your competitors aren't targeting. Content compounds over time — a page written today can generate free local traffic for years.",
    href: "/local-business-marketing",
  },
  {
    rank: "5",
    title: "Reputation & Review Strategy",
    roi: "⭐⭐⭐⭐⭐",
    timeline: "Ongoing",
    cost: "Low cost",
    body: "A systematic review generation strategy — SMS review requests, email follow-ups, in-person QR codes — builds the Google review count and rating that directly influences both Maps rankings and conversion rates. 87% of local buyers read reviews before choosing a business. Businesses with 50+ reviews at 4.5+ stars consistently outconvert competitors with fewer reviews, regardless of other marketing spend.",
    href: "/local-marketing-agency",
  },
  {
    rank: "6",
    title: "Local Social Media Strategy",
    roi: "⭐⭐⭐",
    timeline: "Immediate",
    cost: "£150+ ad spend",
    body: "A local social media strategy uses geo-targeted Facebook and Instagram advertising to build local brand awareness and retarget website visitors. Social media is most effective as a brand-building and retargeting channel — not a primary lead generation tool. The ideal local marketing strategy uses social media to maintain local top-of-mind awareness while SEO and Google Ads capture active searchers.",
    href: "/local-social-media-marketing",
  },
];

const faqs = [
  {
    q: "What is the best local marketing strategy for small businesses?",
    a: "The best local marketing strategy for small businesses in 2026 combines: (1) Local SEO — ranking for location-based queries; (2) Google Business Profile — ranking in the Maps 3-Pack; (3) Google Ads — immediate paid visibility; (4) Reputation management — building Google reviews; (5) Local content marketing. This multi-channel approach covers all the ways local customers find and choose businesses.",
  },
  {
    q: "What is a local marketing strategy?",
    a: "A local marketing strategy is a plan for making a business visible to customers in a specific geographic area. It defines which channels to use, what keywords to target, how to position against local competitors, what budget to allocate, and what metrics to track. A good local marketing strategy is specific to the business's location, industry, competitor landscape, and budget.",
  },
  {
    q: "What is local content marketing?",
    a: "Local content marketing is the creation of location-specific content — blog posts, service area pages, case studies, and guides — designed to rank for local search queries. For example, a plumber in Manchester creates content targeting 'boiler repair Manchester', 'emergency plumber Salford', etc. This content attracts organic local search traffic indefinitely and costs nothing per click.",
  },
  {
    q: "How do I create a local marketing plan?",
    a: "To create a local marketing plan: (1) Audit your current local online presence; (2) Identify target local keywords and service area; (3) Choose your channel mix; (4) Set a monthly budget per channel; (5) Define KPIs — rankings, traffic, calls, leads; (6) Assign execution responsibility; (7) Set a monthly review cadence. SBMP builds bespoke local marketing plans as part of our free audit process.",
  },
  {
    q: "What are the most effective local marketing strategies?",
    a: "Ranked by ROI: (1) Google Business Profile — free and highest immediate impact; (2) Local SEO — highest long-term ROI; (3) Google Ads — fastest results; (4) Review generation — highest conversion impact; (5) Local content marketing — compounds over time; (6) Local social media advertising — best for awareness. SBMP executes all of these in a coordinated local marketing strategy.",
  },
  {
    q: "What is local store marketing?",
    a: "Local store marketing refers to marketing strategies designed to drive foot traffic to a physical location — whether a retail store, restaurant, service business, or clinic. It includes local SEO, Google Maps marketing, local social media advertising, loyalty programmes, and in-store promotions combined with digital strategies.",
  },
];

export default function LocalMarketingStrategiesPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }} />

      {/* HERO */}
      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.20) 0%, transparent 70%), #080D1A", borderBottom: "1px solid rgba(255,255,255,0.07)" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8" style={{ color: "#4A5A6E" }}>
            <Link href="/" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Home</Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Local Marketing Strategies</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6" style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}>
              🎯 Data-Backed Local Marketing Strategies
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display, sans-serif)", background: "linear-gradient(135deg, #E2E8F0 0%, #4F8EF7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: "1.1" }}>
              Local Marketing Strategies That Generate Real Results
            </h1>
            <p className="text-lg sm:text-xl mb-6" style={{ color: "#8B9CB8" }}>
              The best local marketing strategies for small businesses in 2026 — ranked by ROI, explained clearly, and
              executed by SBMP experts. No fluff. No wasted budget. Just the strategies that work.
            </p>
            {/* AEO Answer Block */}
            <p className="text-base mb-10 p-4 rounded-xl" style={{ color: "#CBD5E1", backgroundColor: "rgba(79,142,247,0.06)", border: "1px solid rgba(79,142,247,0.15)", lineHeight: "1.75" }}>
              <strong style={{ color: "#E2E8F0" }}>Local marketing strategies</strong> are the specific tactics and
              channel plans used to make a small business visible to customers in a geographic area — including local
              SEO, Google Business Profile, Google Ads, local content marketing, and reputation management. As of 2026,
              SBMP executes these strategies for 150+ local businesses, delivering page-1 rankings within 60 days.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/free-audit" className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#4F8EF7" }}>
                Get My Free Strategy Audit →
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#E2E8F0" }}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIES */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
              Best Local Marketing Strategies for 2026 — Ranked by ROI
            </h2>
            <p style={{ color: "#8B9CB8" }}>Every strategy ranked by long-term ROI, speed to results, and cost — so you allocate budget where it matters most.</p>
          </div>
          <div className="space-y-5 max-w-4xl mx-auto">
            {strategies.map((s) => (
              <div key={s.title} className="rounded-2xl p-6" style={{ backgroundColor: "#080D1A", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{s.rank}</span>
                    <h3 className="text-lg font-bold" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>{s.title}</h3>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(34,197,94,0.1)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>⏱ {s.timeline}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(251,191,36,0.1)", color: "#FBBF24", border: "1px solid rgba(251,191,36,0.2)" }}>💰 {s.cost}</span>
                  </div>
                </div>
                <div className="mb-3">{s.roi}</div>
                <p className="text-sm mb-4" style={{ color: "#8B9CB8", lineHeight: "1.75" }}>{s.body}</p>
                <Link href={s.href} className="text-sm font-semibold hover:underline" style={{ color: "#4F8EF7" }}>
                  Learn more about this strategy →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
            Local Marketing Strategies — Frequently Asked Questions
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
              { label: "Google Maps Marketing", href: "/google-maps-marketing" },
              { label: "Local Social Media Marketing", href: "/local-social-media-marketing" },
              { label: "Local Marketing Agency", href: "/local-marketing-agency" },
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
            Get a Bespoke Local Marketing Strategy Built for Your Business
          </h2>
          <p className="text-base mb-8" style={{ color: "#8B9CB8" }}>
            Free local marketing strategy audit — we analyse your market, competitors, and current visibility to
            build a prioritised action plan that delivers results within 60 days.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-audit" className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#4F8EF7" }}>
              Get My Free Strategy Audit →
            </Link>
            <Link href="/local-marketing-agency" className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#E2E8F0" }}>
              View Agency Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
