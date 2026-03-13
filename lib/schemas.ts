// JSON-LD Schema Generators for SEO and AI Understanding
// Used across all pages to provide structured data

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const BUSINESS_NAME = "SBMP — Small Business Marketing Professional";
const BUSINESS_PHONE = "+44 (0)1234 567890"; // Update with actual phone
const BUSINESS_EMAIL = "hello@sbmp.com"; // Update with actual email
const BUSINESS_PHONE_WA = "+923474825228"; // WhatsApp contact
const BUSINESS_ADDRESS = {
  streetAddress: "123 Business Street",
  addressLocality: "London",
  addressRegion: "Greater London",
  postalCode: "SW1A 1AA",
  addressCountry: "GB",
};

// ============================================================================
// ORGANIZATION SCHEMA
// ============================================================================

export interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  telephone: string;
  email: string;
  sameAs: string[];
  address: {
    "@type": string;
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  foundingDate?: string;
  areaServed?: {
    "@type": string;
    name: string;
  }[];
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/sbmp-logo.png`,
    description:
      "Expert local SEO & digital marketing for UK service businesses. Rank on page 1 of Google in 30–90 days. Trusted by 150+ UK businesses.",
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    sameAs: [
      // Add social media URLs when available
      // "https://facebook.com/sbmp",
      // "https://linkedin.com/company/sbmp",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "City", name: "Birmingham" },
      { "@type": "City", name: "Manchester" },
      { "@type": "City", name: "Leeds" },
      { "@type": "City", name: "London" },
      { "@type": "Country", name: "UK" },
    ],
  };
}

// ============================================================================
// LOCAL BUSINESS SCHEMA (for location pages)
// ============================================================================

export interface LocalBusinessSchema extends OrganizationSchema {
  "@type": "LocalBusiness" | "ProfessionalService";
  priceRange?: string;
  openingHoursSpecification?: Array<{
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
}

export function generateLocalBusinessSchema(locationName: string): LocalBusinessSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${BUSINESS_NAME} - ${locationName}`,
    url: `${BASE_URL}/locations/${locationName.toLowerCase()}`,
    logo: `${BASE_URL}/sbmp-logo.png`,
    description: `Expert local SEO and digital marketing services for ${locationName} businesses.`,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressLocality: locationName,
      addressCountry: "GB",
    },
    priceRange: "£149-£699",
    areaServed: [{ "@type": "City", name: locationName }],
  };
}

// ============================================================================
// SERVICE SCHEMA
// ============================================================================

export interface ServiceSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
    url: string;
  };
  priceSpecification?: {
    "@type": string;
    priceCurrency: string;
    price: string;
  };
  areaServed?: {
    "@type": string;
    name: string;
  }[];
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  price: string
): ServiceSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: BASE_URL,
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "GBP",
      price: price.replace(/[^0-9.]/g, ""), // Extract just the number
    },
    areaServed: [
      { "@type": "Country", name: "UK" },
      { "@type": "Region", name: "United Kingdom" },
    ],
  };
}

// ============================================================================
// BREADCRUMB SCHEMA
// ============================================================================

export interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

// ============================================================================
// FAQ SCHEMA
// ============================================================================

export interface FAQSchema {
  "@context": string;
  "@type": string;
  mainEntity: Array<{
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }>;
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ============================================================================
// AGGREGATE RATING SCHEMA (for social proof)
// ============================================================================

export interface AggregateRatingSchema {
  "@context": string;
  "@type": string;
  name: string;
  aggregateRating: {
    "@type": string;
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
}

export function generateAggregateRatingSchema(
  businessName: string,
  ratingValue: number = 4.9,
  reviewCount: number = 150
): AggregateRatingSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

// ============================================================================
// WEB PAGE SCHEMA
// ============================================================================

export interface WebPageSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  isPartOf?: {
    "@type": string;
    url: string;
  };
  datePublished?: string;
  dateModified?: string;
  author?: {
    "@type": string;
    name: string;
    url: string;
  };
  publisher?: {
    "@type": string;
    name: string;
    logo?: {
      "@type": string;
      url: string;
    };
  };
}

export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
  dateModified?: string
): WebPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      url: BASE_URL,
    },
    dateModified: dateModified || new Date().toISOString().split("T")[0],
    author: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/sbmp-logo.png`,
      },
    },
  };
}

// ============================================================================
// CONTACT POINT SCHEMA
// ============================================================================

export interface ContactPointSchema {
  "@context": string;
  "@type": string;
  contactType: string;
  telephone: string;
  email?: string;
  url?: string;
}

export function generateContactPointSchema(
  contactType: string = "Customer Service",
  telephone?: string,
  email?: string,
  url?: string
): ContactPointSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType,
    telephone: telephone || BUSINESS_PHONE,
    ...(email && { email }),
    ...(url && { url }),
  };
}

// ============================================================================
// WEBSITE SCHEMA (with SearchAction — enables Sitelinks Search Box)
// ============================================================================

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS_NAME,
    url: BASE_URL,
    description: "Expert local SEO & digital marketing for UK service businesses. Rank on page 1 of Google in 30–90 days. Trusted by 150+ UK businesses.",
    inLanguage: "en-GB",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 400,
        height: 60,
      },
    },
  };
}

// ============================================================================
// PROFESSIONAL SERVICE SCHEMA (for service & industry pages — enables Offers rich result)
// ============================================================================

export function generateProfessionalServiceSchema(
  serviceName: string,
  description: string,
  url: string,
  priceFrom: string,
  serviceType: string,
  cityName?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: serviceName,
    description,
    url,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    inLanguage: "en-GB",
    address: {
      "@type": "PostalAddress",
      ...(cityName && { addressLocality: cityName }),
      addressCountry: "GB",
    },
    areaServed: cityName
      ? { "@type": "City", name: cityName }
      : { "@type": "Country", name: "United Kingdom" },
    serviceType,
    priceRange: priceFrom,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceName} Packages`,
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          description: `Entry-level ${serviceType} package`,
          price: "199",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Growth Plan",
          description: `Full ${serviceType} package with Google Ads`,
          price: "349",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/pricing`,
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          description: `Comprehensive ${serviceType} with website & social media`,
          price: "599",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

// ============================================================================
// ITEM LIST SCHEMA (for blog index, city lists, service lists)
// ============================================================================

export function generateItemListSchema(
  items: Array<{ name: string; url: string; description?: string; position: number }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      url: item.url,
      ...(item.description && { description: item.description }),
    })),
  };
}

// ============================================================================
// BLOG POSTING SCHEMA (for blog article cards and individual posts)
// ============================================================================

export function generateBlogPostingSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  articleSection: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    inLanguage: "en-GB",
    author: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 400,
        height: 60,
      },
    },
    articleSection,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: {
      "@type": "ImageObject",
      url: `${BASE_URL}/sbmp-logo.png`,
      width: 1200,
      height: 630,
    },
  };
}

// ============================================================================
// PERSON SCHEMA (Business Owner/Founder)
// ============================================================================

export function generatePersonSchema(
  name: string = "Business Owner",
  title: string = "Founder & CEO",
  imageUrl?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: title,
    ...(imageUrl && { image: imageUrl }),
    url: BASE_URL,
    sameAs: [],
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        ...BUSINESS_ADDRESS,
      },
    },
  };
}

// ============================================================================
// BUSINESS SCHEMA WITH FULL LOCAL BUSINESS DETAILS
// ============================================================================

export function generateComprehensiveLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BASE_URL,
    name: BUSINESS_NAME,
    description:
      "Expert local SEO & digital marketing for UK service businesses. Rank on page 1 of Google in 30–90 days. Trusted by 150+ UK businesses.",
    url: BASE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    image: [
      {
        "@type": "ImageObject",
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 400,
        height: 60,
      },
      {
        "@type": "ImageObject",
        url: `${BASE_URL}/sbmp-services-hero.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/sbmp-logo.png`,
      width: 400,
      height: 60,
    },
    sameAs: [
      // Add actual social media URLs when available
      // "https://www.facebook.com/sbmp",
      // "https://www.linkedin.com/company/sbmp",
      // "https://www.twitter.com/sbmp",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 150,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: "£199–£699",
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Region", name: "England" },
      { "@type": "Region", name: "Scotland" },
      { "@type": "Region", name: "Wales" },
      { "@type": "Region", name: "Northern Ireland" },
    ],
    knowsAbout: [
      "Local SEO",
      "Digital Marketing",
      "Google Business Profile",
      "Google Ads",
      "Web Design",
      "Search Engine Optimization",
      "Local Search Marketing",
    ],
    opens: "09:00",
    closes: "18:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "10:00",
        closes: "16:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: BUSINESS_PHONE,
        email: BUSINESS_EMAIL,
        areaServed: "GB",
        availableLanguage: ["en"],
      },
      {
        "@type": "ContactPoint",
        contactType: "WhatsApp Support",
        url: `https://wa.me/${BUSINESS_PHONE_WA.replace(/\D/g, "")}`,
        areaServed: "GB",
        availableLanguage: ["en"],
      },
    ],
    founder: {
      "@type": "Person",
      name: "Business Owner",
    },
    parentOrganization: {
      "@type": "Organization",
      name: BUSINESS_NAME,
    },
  };
}

// ============================================================================
// ENHANCED OFFER/PRICING SCHEMA
// ============================================================================

export function generatePricingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing Services",
    description:
      "Complete digital marketing solutions for UK service businesses: Local SEO, Google Ads, Web Design, and Business Growth Consulting",
    provider: {
      "@type": "Organization",
      "@id": BASE_URL,
      name: BUSINESS_NAME,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/sbmp-logo.png`,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Packages",
      itemListElement: [
        {
          "@type": "Offer",
          "@id": `${BASE_URL}/pricing#starter`,
          name: "Starter Plan",
          description: "Entry-level local SEO package including Google Business Profile optimization and basic local citations",
          price: "199",
          priceCurrency: "GBP",
          priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split("T")[0],
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/pricing`,
          eligibleRegion: "GB",
          areaServed: { "@type": "Country", name: "United Kingdom" },
          serviceType: "Local SEO",
        },
        {
          "@type": "Offer",
          "@id": `${BASE_URL}/pricing#growth`,
          name: "Growth Plan",
          description: "Full local SEO + Google Ads management for accelerated customer acquisition and visibility",
          price: "349",
          priceCurrency: "GBP",
          priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split("T")[0],
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/pricing`,
          eligibleRegion: "GB",
          areaServed: { "@type": "Country", name: "United Kingdom" },
          serviceType: "Local SEO + Paid Ads",
        },
        {
          "@type": "Offer",
          "@id": `${BASE_URL}/pricing#pro`,
          name: "Pro Plan",
          description: "Comprehensive digital marketing: Local SEO, Google Ads, Professional Website, Social Media, and Business Consulting",
          price: "599",
          priceCurrency: "GBP",
          priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split("T")[0],
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/pricing`,
          eligibleRegion: "GB",
          areaServed: { "@type": "Country", name: "United Kingdom" },
          serviceType: "Complete Digital Marketing",
        },
      ],
    },
  };
}

// ============================================================================
// HELPER: Render Schema as JSON
// ============================================================================

export function renderSchema(schema: any): string {
  return JSON.stringify(schema, null, 0); // Single line for smaller HTML
}

// ============================================================================
// COMBINED: Full page schema with multiple types
// ============================================================================

export function generateFullPageSchema(
  title: string,
  description: string,
  url: string,
  type: "homepage" | "service" | "location" | "industry" | "contact" = "homepage"
): string {
  const schemas: any[] = [generateOrganizationSchema(), generateWebPageSchema(title, description, url)];

  if (type === "service") {
    schemas.push(generateBreadcrumbSchema([{ name: "Home", url: BASE_URL }, { name: "Services" }, { name: title }]));
  } else if (type === "location") {
    schemas.push(generateLocalBusinessSchema(title));
  } else if (type === "contact") {
    schemas.push(generateContactPointSchema());
  }

  // Wrap multiple schemas in an array
  return JSON.stringify(schemas.length > 1 ? schemas : schemas[0]);
}
