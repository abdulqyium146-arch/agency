import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseMeSection from "@/components/sections/WhyChooseMeSection";
import StatsSection from "@/components/sections/StatsSection";
import PricingSection from "@/components/sections/PricingSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CitiesSection from "@/components/sections/CitiesSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "UK Local Digital Marketing Expert | Get More Customers",
  description:
    "Expert UK local digital marketing from £199/month. Local SEO, Google Ads & web design. Ranked 150+ businesses. No contracts. Free audit worth £299.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Small Business Marketing Professional",
      url: "https://smallbusinessmarketingprofessional.com",
      telephone: "03474825228",
      priceRange: "££",
      areaServed: "United Kingdom",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
      },
    },
    {
      "@type": "Person",
      name: "Small Business Marketing Professional",
      jobTitle: "Local Digital Marketing Expert",
      knowsAbout: [
        "Local SEO",
        "Google Ads",
        "Web Design",
        "Social Media Marketing",
      ],
    },
    {
      "@type": "WebSite",
      url: "https://smallbusinessmarketingprofessional.com",
      name: "Small Business Marketing Professional",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustBar />
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
