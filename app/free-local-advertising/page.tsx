import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%27m%20interested%20in%20free%20local%20advertising%20options%20for%20my%20business.%20Can%20you%20help%3F";

export const metadata: Metadata = {
  title: "Free Local Advertising for Small Business | 12 Best Options",
  description:
    "Best free local advertising options for small businesses. Free local advertising sites, Google Business Profile, directories & more. Get more local customers at zero cost.",
  authors: [{ name: "SBMP — Local Marketing Expert" }],
  creator: "SBMP — Small Business Marketing Professional",
  publisher: "SBMP",
  category: "Free Local Advertising",
  keywords: [
    "free local advertising",
    "free local business advertising",
    "free local advertising sites",
    "free local advertising near me",
    "free local advertising for small businesses",
    "free local marketing",
    "free local advertising online",
    "best free advertising for small business",
    "google free local business advertising",
    "cheap local advertising",
    "affordable local advertising",
    "affordable local marketing",
    "affordable local seo agency",
    "cheap local seo packages",
    "local advertising website",
    "free local advertising for small businesses",
    "promote your business locally",
    "promote your local",
    "ways to advertise locally",
    "ways to advertise your business locally",
    "best way to advertise locally",
    "advertise my business locally",
    "advertising your business locally",
    "advertising small business locally",
    "go local advertising",
    "local internet advertising",
    "local online advertising",
  ],
  alternates: { canonical: `${BASE_URL}/free-local-advertising` },
  openGraph: {
    title: "Free Local Advertising for Small Business | 12 Best Options",
    description: "Best free local advertising options for small businesses — Google Business Profile, directories, social, and more. Zero cost. Maximum local reach.",
    url: `${BASE_URL}/free-local-advertising`,
    type: "website",
    siteName: "SBMP — Small Business Marketing Professional",
    images: [{ url: `${BASE_URL}/sbmp-logo.png`, width: 1200, height: 630, alt: "Free Local Advertising — SBMP" }],
  },
  twitter: { card: "summary_large_image", title: "Free Local Advertising for Small Business | 12 Best Options", description: "Best free local advertising for small businesses. Zero cost strategies." },
};

const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/free-local-advertising`,
    name: "SBMP — Free Local Advertising Guide",
    url: `${BASE_URL}/free-local-advertising`,
    telephone: "+923474825228",
    email: "hello@sbmp.com",
    description: "Expert guide to free local advertising options for small businesses — Google Business Profile, local directories, social media, and more.",
    serviceType: ["Local Advertising", "Local SEO", "Google Business Profile", "Local Marketing"],
    areaServed: [{ "@type": "Country", name: "United Kingdom" }, { "@type": "Country", name: "United States" }],
    priceRange: "£199–£699",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "150", bestRating: "5", worstRating: "1" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/free-local-advertising`,
    name: "Free Local Advertising for Small Business | 12 Best Options",
    description: "Best free local advertising options for small businesses. Google Business Profile, directories, social, and more.",
    url: `${BASE_URL}/free-local-advertising`,
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
      { "@type": "ListItem", position: 2, name: "Free Local Advertising", item: `${BASE_URL}/free-local-advertising` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best free local advertising for small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best free local advertising options for small businesses are: (1) Google Business Profile — the #1 free tool, controls your Google Maps ranking; (2) Bing Places for Business — free visibility on Bing and Apple Maps; (3) Yelp and Yell — free directory listings that build local citations; (4) Facebook Business Page — free local social presence; (5) Nextdoor — highly local neighbourhood platform; (6) Local press and PR — free editorial coverage. These free options form the foundation of any local advertising strategy.",
        },
      },
      {
        "@type": "Question",
        name: "Is Google Business Profile really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — creating, claiming, and maintaining a Google Business Profile is completely free. It is Google's free local advertising platform for businesses. A well-optimised Google Business Profile can appear in the Google Maps Local 3-Pack for hundreds of local search queries — driving calls, website visits, and direction requests at zero cost per click. SBMP manages Google Business Profiles as part of our local SEO plans from £199/month.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best free local advertising sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The best free local advertising sites for UK businesses are: Google Business Profile, Bing Places, Yelp, Yell.com, Thomson Local, FreeIndex, Checkatrade, TrustATrader, Houzz (for tradespeople), and Bark.com. For US businesses: Google Business Profile, Bing Places, Yelp, Better Business Bureau, Angi, HomeAdvisor, and Nextdoor. Listing your business consistently across these free sites also builds local citations that boost your Google Maps ranking.",
        },
      },
      {
        "@type": "Question",
        name: "How can I advertise my business locally for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To advertise your business locally for free: (1) Claim and fully complete your Google Business Profile; (2) List on Yelp, Yell, Thomson Local, and industry directories; (3) Create a Facebook Business Page and post weekly; (4) Join local Facebook community groups and engage helpfully; (5) Register on Nextdoor as a local business; (6) Ask every customer for a Google review; (7) Create local content on your website targeting '[service] in [your town]' keywords; (8) Submit press releases to local newspapers about milestones or community involvement.",
        },
      },
      {
        "@type": "Question",
        name: "What is cheap local advertising for small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cheapest local advertising options that still deliver results are: (1) Free — Google Business Profile, local directories, Facebook Page, Nextdoor, Google reviews; (2) Low cost — Local SEO from £199/month (delivers free organic traffic long-term); (3) Budget Google Ads — starting from £10/day with precise local targeting. The best cheap local advertising strategy is to maximise all free channels first, then add low-budget Google Ads for immediate leads.",
        },
      },
    ],
  },
];

const freeOptions = [
  { rank: 1, icon: "🗺️", title: "Google Business Profile", cost: "Free", impact: "⭐⭐⭐⭐⭐", desc: "The most powerful free local advertising tool in existence. A complete, active Google Business Profile ranks your business in the Maps 3-Pack for hundreds of 'near me' searches. Fully optimising your GBP is the single highest-ROI action you can take for free local advertising. Include photos, posts, services, Q&A responses, and encourage reviews regularly.", href: "/google-maps-marketing" },
  { rank: 2, icon: "📋", title: "Yelp & Yell Listings", cost: "Free (basic)", impact: "⭐⭐⭐⭐", desc: "Free listings on Yelp, Yell.com, Thomson Local, and FreeIndex provide free local advertising on high-authority sites AND build the local citation signals that boost your Google Maps ranking. Ensure your NAP (Name, Address, Phone) is identical across all listings.", href: "/local-seo" },
  { rank: 3, icon: "🌐", title: "Bing Places for Business", cost: "Free", impact: "⭐⭐⭐", desc: "Bing Places powers local listings on Bing Search and Apple Maps. Many small businesses ignore Bing completely — meaning less competition for you. Bing powers 33% of desktop searches and all voice searches on Siri-enabled devices. A free Bing Places listing captures this audience.", href: "/local-advertising" },
  { rank: 4, icon: "📘", title: "Facebook Business Page", cost: "Free", impact: "⭐⭐⭐⭐", desc: "A Facebook Business Page provides free local visibility to Facebook's 3+ billion users. Post local content 3× per week, respond to messages promptly, and join local community groups. Even without paid ads, an active Facebook presence drives local awareness and referrals at no cost.", href: "/local-social-media-marketing" },
  { rank: 5, icon: "🏘️", title: "Nextdoor Local Business", cost: "Free", impact: "⭐⭐⭐", desc: "Nextdoor is the neighbourhood social network where local residents recommend and discover local businesses. A verified Nextdoor business profile lets neighbours find you directly and leave recommendations visible to their entire neighbourhood — extremely high-trust free local advertising.", href: "/local-social-media-marketing" },
  { rank: 6, icon: "⭐", title: "Google Review Strategy", cost: "Free", impact: "⭐⭐⭐⭐⭐", desc: "Proactively asking satisfied customers for Google reviews is free local advertising that never stops working. More reviews improve your Maps ranking AND your conversion rate from people who find you. Create a simple post-job text message asking for a review — this alone can double your monthly enquiries.", href: "/local-marketing-strategies" },
  { rank: 7, icon: "✍️", title: "Local Blog Content", cost: "Free (your time)", impact: "⭐⭐⭐⭐", desc: "Writing blog posts and service pages targeting '[service] in [your city]' keywords creates free local advertising that compounds over time. A single well-written local SEO article can attract qualified local traffic for years. Focus on answering the exact questions your local customers search for.", href: "/local-marketing-strategies" },
  { rank: 8, icon: "📰", title: "Local Press & PR", cost: "Free", impact: "⭐⭐⭐", desc: "Local newspapers, community news sites, and neighbourhood blogs are often hungry for local business stories. Opening a new business, completing a notable project, donating to local causes, or achieving an award can all generate free editorial coverage — which builds both brand awareness and valuable local backlinks.", href: "/local-business-marketing" },
];

const faqs = [
  {
    q: "What is the best free local advertising for small businesses?",
    a: "The best free local advertising options are: (1) Google Business Profile — #1 free tool, controls Google Maps ranking; (2) Bing Places — free Bing and Apple Maps visibility; (3) Yelp and Yell — free directories that build citations; (4) Facebook Business Page; (5) Nextdoor; (6) Local press and PR. These free options form the foundation of any local advertising strategy.",
  },
  {
    q: "Is Google Business Profile really free?",
    a: "Yes — Google Business Profile is completely free. A well-optimised profile can appear in the Google Maps Local 3-Pack for hundreds of local search queries, driving calls and website visits at zero cost per click. SBMP manages Google Business Profiles as part of our local SEO plans from £199/month.",
  },
  {
    q: "What are the best free local advertising sites?",
    a: "Best free local advertising sites (UK): Google Business Profile, Bing Places, Yelp, Yell.com, Thomson Local, FreeIndex, Checkatrade, TrustATrader. For US businesses: Google Business Profile, Bing Places, Yelp, Better Business Bureau, Angi, and Nextdoor. Consistent listings across these sites also build local citations that boost your Google Maps ranking.",
  },
  {
    q: "How can I advertise my business locally for free?",
    a: "To advertise your business locally for free: (1) Claim and fully complete your Google Business Profile; (2) List on Yelp, Yell, Thomson Local, and industry directories; (3) Create a Facebook Business Page; (4) Join local Facebook community groups; (5) Register on Nextdoor; (6) Ask every customer for a Google review; (7) Create local content targeting '[service] in [your town]'; (8) Submit press releases to local newspapers.",
  },
  {
    q: "What is cheap local advertising for small businesses?",
    a: "Cheapest local advertising options: (1) Free — Google Business Profile, local directories, Facebook Page, Nextdoor, Google reviews; (2) Low cost — Local SEO from £199/month (delivers free organic traffic long-term); (3) Budget Google Ads — starting from £10/day with local targeting. Maximise all free channels first, then add low-budget Google Ads for immediate leads.",
  },
];

export default function FreeLocalAdvertisingPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }} />

      {/* HERO */}
      <section style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.20) 0%, transparent 70%), #080D1A", borderBottom: "1px solid rgba(255,255,255,0.07)" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8" style={{ color: "#4A5A6E" }}>
            <Link href="/" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Home</Link>
            <span>→</span>
            <Link href="/local-advertising" className="hover:text-white transition-colors" style={{ color: "#4A5A6E" }}>Local Advertising</Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Free Local Advertising</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6" style={{ backgroundColor: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)" }}>
              ✅ 100% Free Local Advertising Options
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display, sans-serif)", background: "linear-gradient(135deg, #E2E8F0 0%, #4F8EF7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: "1.1" }}>
              Free Local Advertising — 8 Best Options for Small Businesses
            </h1>
            <p className="text-lg sm:text-xl mb-6" style={{ color: "#8B9CB8" }}>
              Every free local advertising option available to small businesses in 2026 — ranked by impact, explained
              clearly, and backed by the local marketing expertise of SBMP. Get more local customers at zero cost.
            </p>
            {/* AEO Answer Block */}
            <p className="text-base mb-10 p-4 rounded-xl" style={{ color: "#CBD5E1", backgroundColor: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)", lineHeight: "1.75" }}>
              <strong style={{ color: "#E2E8F0" }}>Free local advertising</strong> uses no-cost platforms — Google
              Business Profile, Bing Places, local directories (Yelp, Yell), Facebook Business Page, and Nextdoor — to
              promote a small business to customers in a specific geographic area. As of 2026, the most impactful free
              local advertising is Google Business Profile optimisation, which can generate hundreds of local calls and
              website visits per month at zero advertising cost.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/free-audit" className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#4F8EF7" }}>
                Get My Free Advertising Audit →
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#E2E8F0" }}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FREE OPTIONS LIST */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
              8 Best Free Local Advertising Options — Ranked by Impact
            </h2>
            <p style={{ color: "#8B9CB8" }}>Every free local advertising site and strategy that actually works in 2026.</p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {freeOptions.map((opt) => (
              <div key={opt.title} className="rounded-2xl p-5 flex gap-5 items-start" style={{ backgroundColor: "#080D1A", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="text-2xl font-extrabold shrink-0 w-8 text-center pt-0.5" style={{ color: "rgba(79,142,247,0.5)", fontFamily: "var(--font-display, sans-serif)" }}>{opt.rank}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xl">{opt.icon}</span>
                    <h3 className="text-base font-bold" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>{opt.title}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.25)" }}>{opt.cost}</span>
                    <span className="text-xs" style={{ color: "#8B9CB8" }}>Impact: {opt.impact}</span>
                  </div>
                  <p className="text-sm mb-2" style={{ color: "#8B9CB8", lineHeight: "1.75" }}>{opt.desc}</p>
                  <Link href={opt.href} className="text-xs font-semibold hover:underline" style={{ color: "#4F8EF7" }}>Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSITION TO PAID */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
              When to Move from Free to Paid Local Advertising
            </h2>
            <p className="text-base mb-5" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              Free local advertising builds your foundation. But to dominate your local market and outpace competitors,
              most local businesses eventually combine free strategies with paid local advertising — specifically{" "}
              <Link href="/local-seo" style={{ color: "#4F8EF7" }} className="hover:underline">local SEO</Link> and{" "}
              <Link href="/local-advertising" style={{ color: "#4F8EF7" }} className="hover:underline">Google Ads</Link>.
            </p>
            <p className="text-base mb-5" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              <strong style={{ color: "#CBD5E1" }}>Start paid advertising when:</strong> your free channels are fully
              optimised (GBP complete, 20+ reviews, 5+ directory listings) but you want to accelerate results, capture
              more high-intent search traffic, or outrank specific competitors.
            </p>
            <p className="text-base" style={{ color: "#8B9CB8", lineHeight: "1.8" }}>
              SBMP starts every client engagement with a free audit that identifies exactly which free local advertising
              channels you&apos;re not using yet — and which paid channels will deliver the highest ROI for your
              specific market.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center" style={{ color: "#E2E8F0", fontFamily: "var(--font-display, sans-serif)" }}>
            Free Local Advertising — Frequently Asked Questions
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
              { label: "Local Advertising (Paid + Free)", href: "/local-advertising" },
              { label: "Local Business Marketing", href: "/local-business-marketing" },
              { label: "Local SEO Services", href: "/local-seo" },
              { label: "Google Maps Marketing", href: "/google-maps-marketing" },
              { label: "Local Marketing Strategies", href: "/local-marketing-strategies" },
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
            Want to Go Further Than Free?
          </h2>
          <p className="text-base mb-8" style={{ color: "#8B9CB8" }}>
            Free local advertising gets you started. SBMP&apos;s local SEO and Google Ads management from £199/month
            gets you to page 1 of Google — generating 10× more local leads than free strategies alone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-audit" className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ backgroundColor: "#4F8EF7" }}>
              Get My Free Advertising Audit →
            </Link>
            <Link href="/local-advertising" className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#E2E8F0" }}>
              View All Advertising Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
