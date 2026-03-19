import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%27m%20interested%20in%20local%20social%20media%20marketing%20for%20my%20business.%20Can%20you%20help%3F";

export const metadata: Metadata = {
  title: "Local Social Media Marketing | Grow Your Local Business",
  description:
    "Expert local social media marketing for small businesses. Facebook, Instagram & local social ads that drive real local customers. Free audit available.",
  authors: [{ name: "SBMP — Local Marketing Expert" }],
  creator: "SBMP — Small Business Marketing Professional",
  publisher: "SBMP",
  category: "Local Social Media Marketing",
  keywords: [
    "local social media marketing",
    "local social media marketing agency",
    "local social media advertising",
    "facebook local marketing",
    "facebook advertising for local businesses",
    "local facebook marketing agency",
    "local facebook marketing company",
    "facebook marketing local business",
    "facebook ad for local business",
    "facebook advertising for small local business",
    "local business social media marketing",
    "social media marketing local business",
    "best social media marketing for small business",
    "local b2b marketing",
    "digital local social media marketing agencies",
    "local display advertising",
    "social local mobile marketing",
    "local mobile marketing",
    "local video marketing",
    "local video marketing agency",
    "video marketing for small local businesses",
    "video marketing for local businesses",
    "local affiliate marketing",
    "local text message marketing",
    "text local sms marketing",
    "best digital marketing for small business",
    "best digital marketing services for small business",
    "local digital marketing services",
  ],
  alternates: { canonical: `${BASE_URL}/local-social-media-marketing` },
  openGraph: {
    title: "Local Social Media Marketing | Grow Your Local Business",
    description: "Expert Facebook, Instagram & local social media marketing for small businesses. Geo-targeted ads that drive local customers. Free audit.",
    url: `${BASE_URL}/local-social-media-marketing`,
    type: "website",
    siteName: "SBMP — Small Business Marketing Professional",
    images: [{ url: `${BASE_URL}/sbmp-logo.png`, width: 1200, height: 630, alt: "Local Social Media Marketing — SBMP" }],
  },
  twitter: { card: "summary_large_image", title: "Local Social Media Marketing", description: "Facebook, Instagram & social ads for local businesses. Free audit." },
};

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/local-social-media-marketing`,
    name: "SBMP — Local Social Media Marketing",
    url: `${BASE_URL}/local-social-media-marketing`,
    telephone: "+923474825228",
    email: "hello@sbmp.com",
    description: "Expert local social media marketing agency. Facebook, Instagram, and local social media advertising for small businesses to get more local customers.",
    serviceType: ["Local Social Media Marketing", "Facebook Advertising", "Instagram Advertising", "Local Display Advertising"],
    areaServed: [{ "@type": "Country", name: "United Kingdom" }, { "@type": "Country", name: "United States" }],
    priceRange: "£199–£699",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "150", bestRating: "5", worstRating: "1" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/local-social-media-marketing`,
    name: "Local Social Media Marketing | Grow Your Local Business",
    description: "Expert local social media marketing for small businesses. Facebook, Instagram & local social ads.",
    url: `${BASE_URL}/local-social-media-marketing`,
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
      { "@type": "ListItem", position: 2, name: "Local Social Media Marketing", item: `${BASE_URL}/local-social-media-marketing` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is local social media marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local social media marketing is the use of social media platforms — Facebook, Instagram, and others — with geographic targeting to reach customers in a specific local area. It includes organic content, geo-targeted paid ads, local community engagement, and social media advertising campaigns targeting people within a set radius of your business. Local social media marketing builds brand awareness, drives foot traffic, and generates local leads.",
        },
      },
      {
        "@type": "Question",
        name: "Is social media marketing effective for local businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — social media marketing is highly effective for local businesses when properly executed with local targeting. Facebook's geo-targeting allows ads to reach people within a specific radius, city, or postcode. Instagram's visual format is ideal for restaurants, beauty businesses, and retailers. Regular local content builds community trust. SBMP manages local social media marketing as part of our Growth and Pro plans.",
        },
      },
      {
        "@type": "Question",
        name: "What platforms work best for local social media marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For local business social media marketing: (1) Facebook — best for geo-targeted ads, community building, and reaching broad demographics; (2) Instagram — best for visually-driven businesses (restaurants, beauty, retail); (3) Nextdoor — highly local platform where neighbours discover and recommend local businesses; (4) YouTube — local video marketing that builds authority; (5) TikTok — growing for local service businesses targeting younger demographics. SBMP recommends the platform mix based on your specific industry and audience.",
        },
      },
      {
        "@type": "Question",
        name: "How much does local social media advertising cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local Facebook and Instagram ad spend typically starts from £150–£500/month for small local businesses. SBMP's social media marketing management is included in our Growth plan (£349/month) and Pro plan (£599/month) alongside local SEO and Google Ads. We optimise your ad spend for maximum local reach and lead generation within your budget.",
        },
      },
      {
        "@type": "Question",
        name: "What is Facebook local marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Facebook local marketing refers to using Facebook's advertising platform with geographic targeting to reach potential customers near your business. This includes Facebook Ads with radius targeting, boosted local posts, Facebook Business Page management, local awareness campaigns, and retargeting ads for website visitors. SBMP manages Facebook local marketing campaigns as part of comprehensive local business marketing plans.",
        },
      },
      {
        "@type": "Question",
        name: "What is local video marketing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local video marketing is the creation and promotion of video content — YouTube ads, Facebook video ads, Instagram Reels — targeted to local audiences. Video builds trust faster than any other content format. A 30-second video testimonial from a local customer, a before/after video of your work, or a simple 'about us' video can significantly increase local conversion rates. SBMP offers local video marketing as part of our content marketing service.",
        },
      },
    ],
  },
];

const channels = [
  { icon: "📘", name: "Facebook Ads", desc: "Geo-targeted campaigns reaching local customers by radius, demographics, and interests. Ideal for awareness, lead generation, and retargeting.", badge: "Most Effective" },
  { icon: "📸", name: "Instagram Ads", desc: "Visual social advertising for local businesses in food, beauty, retail, and hospitality. Reach local customers via Stories, Reels, and Feed ads.", badge: "" },
  { icon: "🎥", name: "Local Video Marketing", desc: "YouTube and social video ads with local geographic targeting. Video builds trust 3× faster than static content and outperforms all other ad formats for awareness.", badge: "" },
  { icon: "🏘️", name: "Nextdoor", desc: "The local neighbourhood platform where residents discover and recommend local services. A Nextdoor business presence drives highly trusted local referrals.", badge: "" },
  { icon: "📱", name: "Social Media Management", desc: "Consistent organic posting, community management, and local engagement that builds your brand's local presence and trust over time.", badge: "" },
  { icon: "🔁", name: "Retargeting Campaigns", desc: "Re-engage website visitors and social media page visitors with local targeted ads. Retargeting audiences convert 3–5× better than cold audiences.", badge: "" },
];

const faqs = [
  {
    q: "What is local social media marketing?",
    a: "Local social media marketing is the use of social media platforms — Facebook, Instagram, and others — with geographic targeting to reach customers in a specific local area. It includes organic content, geo-targeted paid ads, local community engagement, and advertising campaigns targeting people within a set radius of your business.",
  },
  {
    q: "Is social media marketing effective for local businesses?",
    a: "Yes — social media marketing is highly effective for local businesses when properly executed with local targeting. Facebook's geo-targeting allows ads to reach people within a specific radius, city, or postcode. Instagram's visual format is ideal for restaurants, beauty businesses, and retailers. SBMP manages local social media marketing as part of our Growth and Pro plans.",
  },
  {
    q: "What platforms work best for local social media marketing?",
    a: "For local businesses: (1) Facebook — best for geo-targeted ads and community building; (2) Instagram — best for visually-driven businesses (restaurants, beauty, retail); (3) Nextdoor — highly local platform where neighbours discover businesses; (4) YouTube — local video marketing for authority; (5) TikTok — growing for local businesses targeting younger demographics. SBMP recommends the platform mix based on your industry.",
  },
  {
    q: "How much does local social media advertising cost?",
    a: "Local Facebook and Instagram ad spend typically starts from £150–£500/month for small local businesses. SBMP's social media marketing management is included in our Growth plan (£349/month) and Pro plan (£599/month) alongside local SEO and Google Ads.",
  },
  {
    q: "What is Facebook local marketing?",
    a: "Facebook local marketing refers to using Facebook's advertising platform with geographic targeting to reach potential customers near your business. This includes Facebook Ads with radius targeting, boosted posts, Facebook Business Page management, local awareness campaigns, and retargeting ads for website visitors.",
  },
  {
    q: "What is local video marketing?",
    a: "Local video marketing is the creation and promotion of video content — YouTube ads, Facebook video ads, Instagram Reels — targeted to local audiences. Video builds trust faster than any other content format and significantly increases local conversion rates. SBMP offers local video marketing as part of our content marketing service.",
  },
];

export default function LocalSocialMediaMarketingPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }} />

      {/* HERO */}
      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.20) 0%, transparent 70%), #080D1A", borderBottom: "1px solid rgba(255,255,255,0.07)" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8" style={{ color: "#4A5A6E" }}>
            <Link href="/" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Home</Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Local Social Media Marketing</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6" style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}>
              📱 Local Social Media Marketing Experts
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display, sans-serif)", background: "linear-gradient(135deg, #E2E8F0 0%, #4F8EF7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: "1.1" }}>
              Local Social Media Marketing That Brings Local Customers to You
            </h1>
            <p className="text-lg sm:text-xl mb-6" style={{ color: "#8B9CB8" }}>
              Facebook, Instagram, and local social media advertising with precise geographic targeting. We build local
              social media marketing campaigns that drive real customers to your business — not just likes.
            </p>
            {/* AEO Answer Block */}
            <p className="text-base mb-10 p-4 rounded-xl" style={{ color: "#CBD5E1", backgroundColor: "rgba(79,142,247,0.06)", border: "1px solid rgba(79,142,247,0.15)", lineHeight: "1.75" }}>
              <strong style={{ color: "#E2E8F0" }}>Local social media marketing</strong> is the strategic use of
              Facebook, Instagram, and other platforms with geographic targeting to reach and engage customers in a
              specific local area. As of 2026, SBMP helps local businesses generate consistent leads and foot traffic
              through local social media advertising campaigns, organic content, and video marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/free-audit" className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#4F8EF7" }}>
                Get My Free Social Media Audit →
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#E2E8F0" }}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
              Local Social Media Marketing Channels We Manage
            </h2>
            <p style={{ color: "#8B9CB8" }}>Every channel, managed by experts, focused entirely on driving local customers to your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map((c) => (
              <div key={c.name} className="rounded-2xl p-6" style={{ backgroundColor: "#080D1A", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{c.icon}</span>
                  {c.badge && <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.3)" }}>{c.badge}</span>}
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>{c.name}</h3>
                <p className="text-sm" style={{ color: "#8B9CB8", lineHeight: "1.7" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SOCIAL */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
              Why Local Social Media Marketing Works for Small Businesses
            </h2>
            <div className="space-y-5">
              {[
                { num: "01", title: "Precise Geographic Targeting", body: "Facebook and Instagram allow ads to target users within a specific radius of your business — as tight as 1 mile. This means your social media advertising budget reaches only people who can realistically become customers, eliminating wasted impressions on audiences outside your service area." },
                { num: "02", title: "Build Local Brand Awareness", body: "Local social media marketing keeps your brand visible in the social feeds of nearby potential customers — even before they have a need for your service. Regular presence builds familiarity and trust so that when they do need what you offer, your business is the first they think of." },
                { num: "03", title: "Local Video Marketing Converts", body: "Local video content — a 30-second testimonial, a time-lapse of a job, a staff introduction — outperforms static content across every social media platform. Local video marketing builds the human connection that drives local customers to call and book." },
                { num: "04", title: "Retarget Local Website Visitors", body: "Social media retargeting re-engages people who visited your website but didn't enquire. These local retargeting audiences convert 3–5× better than cold audiences because they already know who you are. SBMP sets up and manages local retargeting as standard." },
                { num: "05", title: "Complements Local SEO & Google Ads", body: "Local social media marketing works best as part of a complete local marketing strategy alongside local SEO and Google Ads. SEO captures high-intent searchers. Social media captures passive local audiences. Together they achieve full local market coverage." },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-2xl font-extrabold shrink-0" style={{ color: "#4F8EF7", fontFamily: "var(--font-display, sans-serif)" }}>{item.num}</div>
                  <div>
                    <h3 className="text-base font-bold mb-2" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: "#8B9CB8", lineHeight: "1.75" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
            Local Social Media Marketing — Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl group" style={{ backgroundColor: "#080D1A", border: "1px solid rgba(255,255,255,0.07)" }}>
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
      <section className="py-12" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Local Business Marketing", href: "/local-business-marketing" },
              { label: "Local Advertising", href: "/local-advertising" },
              { label: "Local SEO Services", href: "/local-seo" },
              { label: "Google Maps Marketing", href: "/google-maps-marketing" },
              { label: "Free Local Advertising", href: "/free-local-advertising" },
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
      <section className="py-16 md:py-24" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(79,142,247,0.15) 0%, transparent 70%), #0D1627", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
            Start Getting More Local Customers from Social Media
          </h2>
          <p className="text-base mb-8" style={{ color: "#8B9CB8" }}>
            Book a free local social media marketing audit. We&apos;ll identify the best platforms and strategies for
            your business and present a clear action plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-audit" className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#4F8EF7" }}>
              Get My Free Social Media Audit →
            </Link>
            <Link href="/local-business-marketing" className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#E2E8F0" }}>
              View All Local Marketing Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
