import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateOrganizationSchema, generateAggregateRatingSchema, generateWebPageSchema, generateWebSiteSchema } from "@/lib/schemas";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
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

// Enhanced JSON-LD schemas for AI understanding and rich snippets
const organizationSchema = generateOrganizationSchema();
const ratingSchema = generateAggregateRatingSchema("SBMP — Small Business Marketing Professional", 4.9, 150);
const webPageSchema = generateWebPageSchema(
  "UK Local Digital Marketing Expert | Get More Customers",
  "Expert UK local digital marketing from £199/month. Local SEO, Google Ads & web design. Ranked 150+ businesses.",
  BASE_URL
);

const webSiteSchema = generateWebSiteSchema();

const jsonLd = [organizationSchema, webSiteSchema, ratingSchema, webPageSchema];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.length > 1 ? jsonLd : jsonLd[0]) }}
      />
      <HeroSection />
      <TrustBar />
      <VisualShowcaseSection />
      <ServicesSection />
      <WhyChooseMeSection />
      <StatsSection />
      <PricingSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ProcessSection />
      <CitiesSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
