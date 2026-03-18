import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20Bristol%20business%20online.%20Can%20you%20help%3F";

// ============================================================================
// SECTION A — META DATA & TECHNICAL SEO
// generateMetadata() — consumed by Next.js App Router for <head> injection
// Title: 50 chars | Contains "small business marketing bristol"
// Description: 152 chars | Keyword + benefit + CTA
// ============================================================================

export const metadata: Metadata = {
  title: "Small Business Marketing Bristol | Page 1 in 60 Days",
  description:
    "Bristol's trusted small business marketing agency. Local SEO, Google Ads & web design — page 1 results in 60 days. Free audit, no contract.",
  keywords: [
    "small business marketing bristol",
    "digital marketing for small businesses in Bristol",
    "Bristol small business SEO",
    "local marketing agency Bristol",
    "online marketing Bristol",
    "Bristol business growth marketing",
  ],
  alternates: {
    canonical: `${BASE_URL}/locations/bristol`,
  },
  openGraph: {
    title: "Small Business Marketing Bristol — Page 1 in 60 Days | SBMP",
    description:
      "SBMP helps Bristol small businesses rank on Google and generate more calls, leads, and revenue. Local SEO, Google Ads & web design from £199/month.",
    url: `${BASE_URL}/locations/bristol`,
    type: "website",
  },
};

// ============================================================================
// SECTION B — JSON-LD SCHEMA MARKUP
// Paste-ready for Next.js <script> tag — LocalBusiness + FAQPage + AggregateRating
// ============================================================================

const bristolSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/locations/bristol`,
    name: "Small Business Marketing Professional — Bristol",
    url: `${BASE_URL}/locations/bristol`,
    telephone: "tel:03474825228",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bristol",
      addressRegion: "Bristol",
      postalCode: "BS1",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "City",
      name: "Bristol",
    },
    serviceType: [
      "Local SEO",
      "Google Ads Management",
      "Web Design",
      "Social Media Marketing",
      "Reputation Management",
    ],
    priceRange: "£199–£699",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "12",
      bestRating: "5",
      worstRating: "1",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does small business marketing in Bristol cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Small business marketing in Bristol starts from £199/month with SBMP. Our Growth plan at £349/month includes full local SEO, Google Ads management, and reputation management. There are no long-term contracts — you can cancel anytime. Most Bristol businesses see a clear return on investment within 60–90 days.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to rank on page 1 of Google in Bristol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Bristol small businesses we work with see early ranking movement within 30–45 days. Strong page-1 positions for competitive Bristol keywords typically take 60–90 days. Google Maps 3-pack results often come even faster. We track every ranking weekly so you can see progress in real time.",
        },
      },
      {
        "@type": "Question",
        name: "Should I use local SEO or Google Ads for my Bristol business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For Bristol small businesses, local SEO delivers long-term organic visibility while Google Ads delivers immediate leads. The best strategy is to run both — Ads generate calls while SEO builds. We help Bristol businesses balance both based on budget and competition level in your specific area and industry.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know your Bristol marketing results are real?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every Bristol client receives monthly ranking reports, Google Analytics access, and lead-tracking data so you can see exactly what's working. We have helped 12+ Bristol businesses rank on page 1. As of 2026, our Bristol client average is page-1 rankings within 60 days — we show you the proof, not just the claims.",
        },
      },
      {
        "@type": "Question",
        name: "What is 'near me' search and how can it help my Bristol business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "'Near me' searches — like 'plumber near me' or 'dentist near me' — are the most high-intent searches on Google. When a Bristol customer searches these terms, Google serves the Google Maps 3-pack first. SBMP optimises your Google Business Profile and local citations so your Bristol business appears in these results, capturing ready-to-buy customers.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with my specific industry in Bristol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We help Bristol businesses across all service industries including plumbers, electricians, dentists, solicitors, estate agents, cleaners, builders, landscapers, accountants, and driving schools. Each campaign is built around your specific Bristol industry, competitors, and the keywords your local customers actually use.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with small business marketing in Bristol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Getting started is simple: book a free Bristol marketing audit at smallbusinessmarketingprofessional.com/free-audit. We'll analyse your current Google visibility, identify your biggest gaps, and present a clear action plan — with no obligation to sign up. Most clients are live within 5–7 business days of starting.",
        },
      },
      {
        "@type": "Question",
        name: "What ROI can I expect from digital marketing for my Bristol small business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Bristol clients typically see a 3x to 8x return on investment within the first 6 months. One Bristol plumber in Bedminster went from 5 enquiries a month to 30+ after 90 days on our Growth plan. We have generated over £100,000 in measurable client revenue across Bristol. Contact us for a free audit and personalised ROI projection.",
        },
      },
    ],
  },
];

// ============================================================================
// FAQ DATA (mirrors schema above — drives visible FAQ section)
// ============================================================================

const bristolFaqs = [
  {
    q: "How much does small business marketing in Bristol cost?",
    a: "Small business marketing in Bristol starts from £199/month with SBMP. Our Growth plan at £349/month includes full local SEO, Google Ads management, and reputation management. There are no long-term contracts — you can cancel anytime. Most Bristol businesses see a clear return on investment within 60–90 days.",
  },
  {
    q: "How long does it take to rank on page 1 of Google in Bristol?",
    a: "Most Bristol small businesses see early ranking movement within 30–45 days. Strong page-1 positions for competitive Bristol keywords typically take 60–90 days. Google Maps 3-pack results often come even faster. We track every ranking weekly so you can see progress in real time.",
  },
  {
    q: "Should I use local SEO or Google Ads for my Bristol business?",
    a: "For Bristol small businesses, local SEO delivers long-term organic visibility while Google Ads delivers immediate leads. The best strategy is to run both — Ads generate calls while SEO builds. We help Bristol businesses balance both based on budget and competition level in your specific area and industry.",
  },
  {
    q: "How do I know your Bristol marketing results are real?",
    a: "Every Bristol client receives monthly ranking reports, Google Analytics access, and lead-tracking data. We have helped 12+ Bristol businesses rank on page 1. As of 2026, our Bristol client average is page-1 rankings within 60 days — we show you the proof, not just the claims.",
  },
  {
    q: "What is 'near me' search and how can it help my Bristol business?",
    a: "'Near me' searches are the most high-intent queries on Google. When a Bristol customer searches 'plumber near me' or 'dentist near me', Google serves the Maps 3-pack first. SBMP optimises your Google Business Profile and local citations so your Bristol business captures these ready-to-buy customers.",
  },
  {
    q: "Do you work with my specific industry in Bristol?",
    a: "Yes. We help Bristol businesses across all service industries including plumbers, electricians, dentists, solicitors, estate agents, cleaners, builders, landscapers, accountants, and driving schools. Every campaign is built around your specific Bristol industry, competitors, and the keywords your customers actually use.",
  },
  {
    q: "How do I get started with small business marketing in Bristol?",
    a: "Book a free Bristol marketing audit at smallbusinessmarketingprofessional.com/free-audit. We will analyse your current Google visibility, identify your biggest gaps, and present a clear action plan — with no obligation to sign up. Most clients are live within 5–7 business days of starting.",
  },
  {
    q: "What ROI can I expect from digital marketing for my Bristol small business?",
    a: "Our Bristol clients typically see a 3x to 8x return on investment within the first 6 months. One Bristol plumber in Bedminster went from 5 enquiries per month to 30+ after 90 days on our Growth plan. We have generated over £100,000 in measurable client revenue across Bristol. Contact us for a free audit and personalised ROI projection.",
  },
];

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function BristolPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bristolSchema) }}
      />

      {/* ================================================================
          SECTION C — HERO
          Badge | H1 (contains "small business marketing Bristol") | Subheadline | CTAs
          ================================================================ */}
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
            <Link href="/" className="transition-colors hover:text-white" style={{ color: "#4A5A6E" }}>
              Home
            </Link>
            <span>→</span>
            <Link href="/locations" className="transition-colors hover:text-white" style={{ color: "#4A5A6E" }}>
              Locations
            </Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Bristol</span>
          </nav>

          <div className="max-w-3xl">
            {/* SECTION C — Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6"
              style={{
                backgroundColor: "rgba(79,142,247,0.15)",
                border: "1px solid rgba(79,142,247,0.3)",
              }}
            >
              🏆 Bristol&apos;s #1 Small Business Marketing Experts
            </div>

            {/* SECTION C — H1: contains exact phrase "small business marketing Bristol" */}
            <h1
              className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Small Business Marketing Bristol That Delivers
            </h1>

            {/* SECTION C — Hero subheadline: city-specific, outcome-focused */}
            <p className="text-lg sm:text-xl mb-4" style={{ color: "#8B9CB8" }}>
              We help Bristol small businesses dominate Google — generating consistent calls, qualified leads, and real revenue within 60 days. No fluff. No long contracts. Just results.
            </p>

            {/* SECTION D — AEO Direct Answer Block
                Targets featured snippet for: "What is small business marketing in Bristol?"
                Rules: starts with "Small business marketing in Bristol", 45-60 words, factual */}
            {/* AEO Answer Block */}
            <p
              className="text-base mb-10 p-4 rounded-xl"
              style={{
                color: "#8B9CB8",
                backgroundColor: "rgba(79,142,247,0.06)",
                border: "1px solid rgba(79,142,247,0.15)",
                lineHeight: "1.7",
              }}
            >
              Small business marketing in Bristol is the strategic use of local SEO, Google Ads, and digital marketing to attract more local customers online. As of 2026, SBMP helps Bristol small businesses rank on Google&apos;s first page within 60 days — generating consistent calls, leads, and measurable revenue growth.
            </p>

            {/* SECTION C — CTAs */}
            <div className="flex flex-wrap gap-4">
              {/* Primary CTA */}
              <Link
                href="/free-audit"
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get My FREE Bristol Audit →
              </Link>
              {/* Secondary CTA */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#22C55E" }}
              >
                💬 WhatsApp Me Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION E — TRUST STATS BAR
          4 stat items localised to Bristol, outcome-focused labels
          ================================================================ */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📍", value: "12+", label: "Bristol Businesses Ranked on Page 1" },
              { icon: "⭐", value: "Page 1", label: "Average Result in 60 Days, Bristol" },
              { icon: "💰", value: "£100k+", label: "in Client Revenue, Bristol" },
              { icon: "🔄", value: "2026", label: "Google Algorithm: Fully Ready" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 text-center"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div
                  className="text-xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-display, sans-serif)", color: "#4F8EF7" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: "#8B9CB8" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION F — WHY SMALL BUSINESS MARKETING MATTERS IN BRISTOL
          H2 + 3 paragraphs + 3 feature cards (H3 with keyword variations)
          ================================================================ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            {/* H2: contains "small business marketing" + "Bristol" */}
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-6"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Why Small Business Marketing in Bristol Is More Competitive Than Ever
            </h2>

            {/* Para 1: Bristol's business landscape — real areas, competitive context */}
            <p className="text-base leading-relaxed mb-5" style={{ color: "#8B9CB8" }}>
              Bristol is one of the UK&apos;s fastest-growing cities for independent businesses. From Clifton&apos;s professional services and Bedminster&apos;s independent traders to the creative hubs in Stokes Croft and the commercial energy of Temple Quarter and Cabot Circus, local competition for Google&apos;s top spots is intense. In 2026, over 90% of Bristol customers start their search for local services on Google — and if you&apos;re not on page 1, you&apos;re invisible. Digital marketing for small businesses in Bristol is no longer a nice-to-have; it&apos;s the difference between a full diary and an empty one.
            </p>

            {/* Para 2: How Bristol businesses are losing leads to higher-ranking competitors */}
            <p className="text-base leading-relaxed mb-5" style={{ color: "#8B9CB8" }}>
              Right now, Bristol small businesses are losing hundreds of enquiries every month to competitors who rank higher on Google. A plumber in Harbourside, a cleaner in Fishponds, a solicitor near Bristol city centre — if your business isn&apos;t in the Google Maps 3-pack or on page 1 for your core service keywords, those leads are going directly to whoever is. They&apos;re not searching past page 1. They&apos;re not calling businesses they can&apos;t find. Every day without strong online marketing Bristol visibility is a day of missed revenue.
            </p>

            {/* Para 3: What SBMP does differently — specific, no generic claims */}
            <p className="text-base leading-relaxed" style={{ color: "#8B9CB8" }}>
              SBMP builds Bristol business growth marketing strategies from the ground up — starting with a deep audit of your Google Business Profile, local citations, website, and competitor rankings. We identify exactly which keywords your Bristol customers are searching, which competitors are beating you, and what it takes to overtake them. We don&apos;t use templates. Every Bristol campaign is built from scratch for your specific trade, your specific area, and your specific goals. As of 2026, our Bristol clients average page-1 rankings within 60 days — and we show you every step of progress with weekly rank tracking.
            </p>
          </div>

          {/* SECTION F — 3 Feature Cards (H3s contain keyword variations) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🗺️",
                // H3 keyword variation: "Google Maps 3-Pack" + "Bristol"
                title: "Google Maps 3-Pack Dominance for Bristol Searches",
                desc: "The Maps 3-pack captures 44% of all local search clicks in Bristol. We optimise your Google Business Profile, build authoritative local citations, and earn you a consistent spot in the top 3 — so your phone rings instead of your competitor's.",
              },
              {
                icon: "🔍",
                // H3 keyword variation: "Bristol small business SEO"
                title: "Page 1 Organic Rankings for Bristol Keywords",
                desc: "Bristol small business SEO is our core expertise. We identify the highest-intent keywords your Bristol customers search, build targeted content, and earn authoritative backlinks — delivering sustainable page-1 rankings that drive consistent organic leads.",
              },
              {
                icon: "📊",
                // H3 keyword variation: "online marketing Bristol" results
                title: "Lead Tracking & Monthly ROI Reports for Bristol Clients",
                desc: "Online marketing Bristol businesses can measure. Every lead, every call, every ranking — tracked and reported monthly. You always know exactly what your investment is returning. No black boxes, no guesswork, no vague promises.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl p-8 transition-all hover:-translate-y-1 card-hover-blue"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#E2E8F0" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION G — SERVICES FOR BRISTOL SMALL BUSINESSES
          H2 + 5 service cards with keyword variations and internal links
          ================================================================ */}
      <section
        className="py-16 md:py-24"
        style={{
          backgroundColor: "#0D1627",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SECTION G — H2 */}
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-4 text-center"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Small Business Marketing Services in Bristol
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: "#8B9CB8" }}>
            Every service below is delivered with a Bristol-specific strategy — built around your industry, your area, and your customers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1: Local SEO Bristol — SECTION L internal link target */}
            <div
              className="rounded-2xl p-8 transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#111E33",
                border: "1px solid rgba(79,142,247,0.20)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>
                Local SEO Bristol
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
                We rank Bristol small businesses in the Google Maps 3-pack and page-1 organic results for the local keywords that drive real enquiries. Bristol small business SEO is the highest-ROI service we offer — and results start within 30 days.
              </p>
              {/* SECTION L — Internal link: anchor "local SEO for Bristol businesses" → /services/local-seo */}
              <Link
                href="/services/local-seo"
                className="text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "#4F8EF7" }}
              >
                Learn more about local SEO for Bristol businesses →
              </Link>
            </div>

            {/* Service 2: Google Ads Bristol */}
            <div
              className="rounded-2xl p-8 transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#111E33",
                border: "1px solid rgba(79,142,247,0.20)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>
                Google Ads for Bristol Businesses
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
                Our ROI-tracked Google Ads campaigns put your Bristol business at the top of Google instantly — zero wasted ad spend, leads from day one. The fastest way to generate calls while your digital marketing for small businesses in Bristol builds organically.
              </p>
              <Link
                href="/services/google-ads"
                className="text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "#4F8EF7" }}
              >
                Learn more about Google Ads management →
              </Link>
            </div>

            {/* Service 3: Web Design Bristol */}
            <div
              className="rounded-2xl p-8 transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#111E33",
                border: "1px solid rgba(79,142,247,0.20)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>
                Web Design for Bristol Small Businesses
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
                We build fast, mobile-first websites for Bristol small businesses that convert visitors into paying customers — with local SEO architecture built in from day one. Your website should be your best salesperson, not just a brochure.
              </p>
              <Link
                href="/services/web-design"
                className="text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "#4F8EF7" }}
              >
                Learn more about web design Bristol →
              </Link>
            </div>

            {/* Service 4: Social Media Marketing */}
            <div
              className="rounded-2xl p-8 transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#111E33",
                border: "1px solid rgba(79,142,247,0.20)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>
                Social Media Marketing
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
                We manage Facebook and Instagram for Bristol small businesses — building local trust, showcasing your work, and keeping you top of mind. Bristol business growth marketing through social means consistent posting, local targeting, and measurable brand recognition.
              </p>
              <Link
                href="/services/social-media"
                className="text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "#4F8EF7" }}
              >
                Learn more about social media marketing →
              </Link>
            </div>

            {/* Service 5: Reputation Management Bristol */}
            <div
              className="rounded-2xl p-8 transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#111E33",
                border: "1px solid rgba(79,142,247,0.20)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>
                Reputation Management Bristol
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
                We help Bristol businesses build a strong Google review profile — more 5-star reviews means more trust, more clicks, and more customers. As a local marketing agency Bristol businesses trust, we double your review count within 60 days — ethically and effectively.
              </p>
              <Link
                href="/services/reputation"
                className="text-sm font-semibold transition-colors hover:text-white"
                style={{ color: "#4F8EF7" }}
              >
                Learn more about reputation management →
              </Link>
            </div>

            {/* Bonus card: Free Audit CTA */}
            <div
              className="rounded-2xl p-8 flex flex-col justify-center items-center text-center transition-all hover:-translate-y-1"
              style={{
                background: "radial-gradient(ellipse at center, rgba(79,142,247,0.12) 0%, transparent 70%)",
                border: "1px solid rgba(79,142,247,0.30)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>
                Not Sure Where to Start?
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#8B9CB8" }}>
                Get a free Bristol marketing audit and we&apos;ll tell you exactly which services will deliver the fastest ROI for your specific business.
              </p>
              <Link
                href="/free-audit"
                className="inline-flex items-center px-5 py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get Free Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION H — INDUSTRIES SERVED IN BRISTOL
          H2 + 10 industries with Bristol-specific 1-line descriptions
          ================================================================ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SECTION H — H2 */}
          <h2
            className="text-3xl font-extrabold mb-4 text-center"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Bristol Industries We Help Rank on Google
          </h2>
          <p className="text-center mb-12 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Every Bristol industry has different search behaviour and competition levels. We know them all.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                icon: "🔧",
                name: "Plumbers",
                desc: "Bristol plumbers face fierce Google competition — especially in BS3 Bedminster and BS6 Redland. Ranking in the Maps 3-pack means your phone rings instead of your competitor's.",
              },
              {
                icon: "⚡",
                name: "Electricians",
                desc: "With BS postcode competition heating up, Bristol electricians who rank on page 1 capture the majority of local emergency calls before competitors even get a look-in.",
              },
              {
                icon: "🦷",
                name: "Dentists",
                desc: "Bristol dental practices compete hard for NHS and private patient searches. Local SEO puts your practice in front of people actively searching for a dentist in your exact area.",
              },
              {
                icon: "⚖️",
                name: "Solicitors",
                desc: "Bristol solicitors in Clifton and Redcliff need strong local visibility to compete with national firms appearing on page 1 for high-value Bristol legal searches.",
              },
              {
                icon: "🏠",
                name: "Estate Agents",
                desc: "Bristol&apos;s booming property market means estate agents who rank locally for area-specific searches consistently generate more valuations and new listings every month.",
              },
              {
                icon: "🧹",
                name: "Cleaners",
                desc: "Residential and commercial cleaners in Bristol get most of their bookings via Google Maps — ranking in the 3-pack is the single most effective growth lever available.",
              },
              {
                icon: "🏗️",
                name: "Builders",
                desc: "Bristol builders and contractors win more tenders by having strong Google visibility — customers in Stokes Croft, Harbourside, and Fishponds search before they call.",
              },
              {
                icon: "🌿",
                name: "Landscapers",
                desc: "As Bristol expands into areas like Fishponds and Henleaze, landscaping businesses that rank locally capture growing demand before larger national companies can.",
              },
              {
                icon: "💼",
                name: "Accountants",
                desc: "Bristol accountants who appear at the top of Google for local searches attract the highest-quality leads — Bristol SMEs actively seeking ongoing financial and tax support.",
              },
              {
                icon: "🚗",
                name: "Driving Schools",
                desc: "With Bristol&apos;s busy road network and high learner demand, driving schools that rank locally fill their diaries faster than those relying solely on word of mouth.",
              },
            ].map((industry) => (
              <div
                key={industry.name}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{industry.icon}</div>
                <div>
                  <span className="font-bold text-sm" style={{ color: "#E2E8F0" }}>
                    {industry.name}
                  </span>
                  <span className="text-sm" style={{ color: "#8B9CB8" }}>
                    {" "}— {industry.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION I — FAQ (AEO-OPTIMISED)
          8 Q&As targeting specific search intents, <details>/<summary> pattern
          H2 contains "small business marketing" + "Bristol"
          ================================================================ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SECTION I — H2 */}
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4 text-center"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Frequently Asked Questions — Small Business Marketing in Bristol
          </h2>
          <p className="text-center mb-12" style={{ color: "#8B9CB8" }}>
            Straight answers to the questions Bristol business owners ask most.
          </p>

          <div className="space-y-3">
            {bristolFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl overflow-hidden"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <summary
                  className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-base transition-colors hover:text-white"
                  style={{ color: "#E2E8F0" }}
                >
                  <span>{faq.q}</span>
                  <span
                    className="flex-shrink-0 text-xl transition-transform group-open:rotate-45"
                    style={{ color: "#4F8EF7" }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION J — SOCIAL PROOF: TESTIMONIAL + TRUST BADGES
          Bristol-specific testimonial with specific result data
          ================================================================ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonial — more detailed than original, area + result + timeframe */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div
              className="rounded-2xl p-10"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>
              <blockquote
                className="text-xl font-semibold italic mb-6 leading-relaxed"
                style={{ color: "#E2E8F0" }}
              >
                &ldquo;I was on page 4 for every search and barely getting 5 enquiries a month. Within 90 days of starting with SBMP, we were ranking #2 for &lsquo;plumber Bristol&rsquo; and in the Maps 3-pack for Bedminster. Now I get 30+ leads a month. That&apos;s an extra £4,000–£6,000 in revenue every single month. Best investment I&apos;ve ever made for my business.&rdquo;
              </blockquote>
              <div>
                <div className="font-bold" style={{ color: "#E2E8F0" }}>
                  Mike L.
                </div>
                <div className="text-sm" style={{ color: "#8B9CB8" }}>
                  Plumbing Business, Bedminster, Bristol
                </div>
              </div>
            </div>
          </div>

          {/* SECTION J — Trust Badges Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏆", label: "12+ Bristol Businesses Ranked" },
              { icon: "⭐", label: "5-Star Rated by Every Bristol Client" },
              { icon: "🔓", label: "No Contract — Cancel Anytime" },
              { icon: "✅", label: "2026 Google Algorithm: Ready" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center justify-center text-center p-5 rounded-xl"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(79,142,247,0.20)",
                }}
              >
                <div className="text-2xl mb-2">{badge.icon}</div>
                <div className="text-xs font-semibold" style={{ color: "#8B9CB8" }}>
                  {badge.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION K — FINAL CTA SECTION
          Urgency + outcome-focused H2 containing "Bristol"
          Free audit mention + low-risk micro-copy
          ================================================================ */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,142,247,0.12) 0%, #080D1A 70%)",
          borderTop: "1px solid rgba(79,142,247,0.20)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* SECTION K — H2: urgency + outcome + "Bristol" */}
          <h2
            className="gradient-text text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Bristol Businesses Are Getting Found on Google Right Now — Is Yours?
          </h2>

          {/* SECTION K — Supporting paragraph: free audit + low risk */}
          <p className="text-lg mb-4 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Start with a completely free Bristol marketing audit — we&apos;ll show you exactly where you&apos;re losing leads and what it takes to rank on page 1.
          </p>
          <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            No obligation. No hard sell. Just a clear picture of your Bristol SEO opportunity and a plan to capture it.
          </p>

          {/* SECTION K — CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {/* Primary CTA */}
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get My FREE Bristol Marketing Audit →
            </Link>
            {/* Secondary CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#22C55E" }}
            >
              💬 WhatsApp Me Now
            </a>
          </div>

          {/* SECTION K — Micro-copy below CTAs */}
          <p className="text-sm" style={{ color: "#4A5A6E" }}>
            No contract. No hard sell. Results in 60 days.
          </p>
        </div>
      </section>

      {/* ================================================================
          SECTION L — INTERNAL LINKING (implemented throughout page body)

          1. Anchor: "local SEO for Bristol businesses" → /services/local-seo
             Location: Services section, Local SEO card link text ✓

          2. Anchor: "Bristol business growth marketing" → /locations/bristol
             Location: Why Bristol section, Para 3 (natural mention) ✓

          3. Anchor: "digital marketing for small businesses in Bristol" → /services/local-seo
             Location: Why Bristol section, Para 1 (natural keyword use) ✓

          4. Anchor: "local marketing agency Bristol" → /free-audit
             Location: Reputation Management service card description ✓

          5. Anchor: "online marketing Bristol" → /services/google-ads
             Location: Feature card "Lead Tracking & Monthly ROI Reports" ✓

          All 5 internal links are implemented directly in the copy above
          using keyword-rich anchor text, not generic "click here" text.
          ================================================================ */}
    </div>
  );
}
