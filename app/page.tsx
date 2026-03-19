import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  generateAggregateRatingSchema,
  generateWebPageSchema,
  generateWebSiteSchema,
  generateComprehensiveLocalBusinessSchema,
  generatePricingSchema,
  generateContactPointSchema,
} from "@/lib/schemas";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import TrustedClientsSection from "@/components/sections/TrustedClientsSection";
import VisualShowcaseSection from "@/components/sections/VisualShowcaseSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseMeSection from "@/components/sections/WhyChooseMeSection";
import StatsSection from "@/components/sections/StatsSection";
import PricingSection from "@/components/sections/PricingSection";
import IndustriesSection from "@/components/sections/IndustriesSection";

// Dynamically import below-the-fold sections for better Core Web Vitals
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
const CitiesSection = dynamic(() => import("@/components/sections/CitiesSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const FinalCTASection = dynamic(() => import("@/components/sections/FinalCTASection"));

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const metadata: Metadata = {
  title: "UK Local Digital Marketing Expert | Get More Customers",
  description:
    "Expert UK local digital marketing from £199/month. Local SEO, Google Ads & web design. Ranked 150+ businesses. No contracts. Free audit worth £299.",
  keywords: [
    "local SEO UK",
    "local digital marketing",
    "Google Business Profile",
    "UK service business marketing",
    "local SEO agency",
    "digital marketing",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "UK Local Digital Marketing Expert | Get More Customers",
    description:
      "Expert UK local digital marketing from £199/month. Local SEO, Google Ads & web design. Ranked 150+ businesses.",
    url: BASE_URL,
    type: "website",
    siteName: "SBMP — Local Digital Marketing",
    images: [
      {
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 1200,
        height: 630,
        alt: "SBMP — Local Digital Marketing",
      },
    ],
  },
};

// ============================================================================
// HOMEPAGE SCHEMAS — TECHNICALLY SOUND FOR GOOGLE VALIDATION
// ============================================================================

// Homepage FAQ data (matches FAQSection component exactly)
const homepageFAQs = [
  {
    q: "How quickly will I see results?",
    a: "Most clients see measurable improvement in Google rankings within 4–8 weeks. Significant traffic and lead increases typically happen by month 3. I'll be transparent with you throughout.",
  },
  {
    q: "Do I need to sign a long contract?",
    a: "Never. All plans are month-to-month. I earn your loyalty with results, not contracts. Cancel anytime with 30 days notice.",
  },
  {
    q: "What makes you different from an SEO agency?",
    a: "You work directly with me — a digital marketing expert with 5 years of focused results. No junior staff, no account managers, no outsourcing. Just direct, expert work on your business.",
  },
  {
    q: "Do you work with businesses outside your local area?",
    a: "Yes — I work with service businesses all across the UK remotely. My high-authority domain helps rank businesses in any UK city.",
  },
  {
    q: "What's included in the free audit?",
    a: "A full review of your Google Business Profile, website SEO health, local rankings, competitor analysis, and a personalised action plan. Worth £299, completely free, no obligation.",
  },
  {
    q: "Can I message you on WhatsApp before signing up?",
    a: "Absolutely — and I encourage it! WhatsApp me on 03474825228 and I'll give you honest advice about what your business actually needs.",
  },
];

// FAQ Schema (separate for Google Rich Snippets validation)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepageFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

// Business & Website Schemas with @graph wrapper
const rawSchemas = [
  generateComprehensiveLocalBusinessSchema(),
  generateWebSiteSchema(),
  generateWebPageSchema(
    "UK Local Digital Marketing Expert | Get More Customers",
    "Expert UK local digital marketing from £199/month. Local SEO, Google Ads & web design. Ranked 150+ businesses.",
    BASE_URL
  ),
  generatePricingSchema(),
  generateAggregateRatingSchema("SBMP — Small Business Marketing Professional", 4.9, 150),
  generateContactPointSchema(),
];

// Remove @context from each schema when using @graph (single @context at top level)
const businessSchemas = {
  "@context": "https://schema.org",
  "@graph": rawSchemas.map((schema: any) => {
    const { "@context": _context, ...rest } = schema;
    return rest;
  }),
};

export default function HomePage() {
  return (
    <>
      {/* FAQ Schema - separate for rich snippet validation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {/* Business & Website Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchemas),
        }}
      />
      <HeroSection />
      <TrustBar />
      <TrustedClientsSection />
      <VisualShowcaseSection />
      <ServicesSection />
      <WhyChooseMeSection />
      <StatsSection />
      <PricingSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ProcessSection />
      <CitiesSection />

      {/* ── LOCAL MARKETING RESOURCES — internal linking hub ── */}
      <section className="bg-[#0D1627] py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white text-center mb-3">
            Local Marketing Resources
          </h2>
          <p className="text-[#8B9CB8] text-center mb-10 max-w-2xl mx-auto">
            Everything you need to attract more local customers — guides, strategies, and expert services for UK small businesses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/local-business-marketing",
                title: "Local Business Marketing",
                desc: "Complete guide to marketing your local business online — strategies ranked by ROI.",
              },
              {
                href: "/local-advertising",
                title: "Local Advertising",
                desc: "Best local advertising options — Google Ads, free directories, Facebook, and more.",
              },
              {
                href: "/local-marketing-agency",
                title: "Local Marketing Agency",
                desc: "See how a specialist local marketing agency grows your customer base faster.",
              },
              {
                href: "/google-maps-marketing",
                title: "Google Maps Marketing",
                desc: "Rank in Google's Local 3-Pack and capture 44% of local search clicks.",
              },
              {
                href: "/local-social-media-marketing",
                title: "Social Media Marketing",
                desc: "Facebook, Instagram and local video marketing that drives footfall and calls.",
              },
              {
                href: "/local-marketing-strategies",
                title: "Marketing Strategies",
                desc: "Proven local marketing strategies for service businesses — from £0 to paid.",
              },
              {
                href: "/free-local-advertising",
                title: "Free Local Advertising",
                desc: "8 free ways to advertise your business locally — starting with Google Business Profile.",
              },
              {
                href: "/digital-marketing-for-small-business",
                title: "Digital Marketing",
                desc: "Full-funnel digital marketing for small business owners who want consistent leads.",
              },
              {
                href: "/local-seo",
                title: "Local SEO Services (US)",
                desc: "Local SEO packages for US businesses — all 25 major cities covered.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block bg-[#0F172A] border border-white/7 rounded-2xl p-5 hover:border-[#3B82F6]/40 transition-all duration-200"
              >
                <h3 className="font-semibold text-white group-hover:text-[#3B82F6] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[#8B9CB8] leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <FinalCTASection />
    </>
  );
}
