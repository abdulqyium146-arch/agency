/**
 * app/structured-data/organization.ts
 * Global Organization + MarketingAgency schema for SBMP.
 * Inject in app/layout.tsx so every page inherits it.
 */

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const BUSINESS_NAME = "SBMP — Small Business Marketing Professional";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61583689962796";
const INSTAGRAM_URL = "https://www.instagram.com/small_business_marketing_profe/";
const LINKEDIN_URL = "https://www.linkedin.com/";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#organization`,
    name: BUSINESS_NAME,
    alternateName: "SBMP",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/sbmp-logo.png`,
      width: 400,
      height: 60,
    },
    image: `${BASE_URL}/sbmp-logo.png`,
    description:
      "Expert local SEO & digital marketing for UK and US service businesses. Rank on page 1 of Google in 30–90 days. Trusted by 150+ businesses. No contracts.",
    email: "hello@sbmp.com",
    telephone: "+44 (0)1234 567890",
    foundingDate: "2014",
    founder: {
      "@type": "Person",
      name: "Alex Morgan",
      jobTitle: "Local SEO Expert & Founder",
      url: LINKEDIN_URL,
    },
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL],
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    knowsAbout: [
      "Local SEO",
      "Google Business Profile",
      "Google Ads",
      "Web Design",
      "Social Media Marketing",
      "Reputation Management",
      "Local Link Building",
      "Digital Marketing",
      "Google Maps SEO",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "199",
          priceCurrency: "GBP",
          url: `${BASE_URL}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Growth Plan",
          price: "349",
          priceCurrency: "GBP",
          url: `${BASE_URL}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "599",
          priceCurrency: "GBP",
          url: `${BASE_URL}/pricing`,
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 150,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
