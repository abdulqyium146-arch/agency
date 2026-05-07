/**
 * lib/seo-utils.ts
 * Master SEO utility — consolidates + extends lib/metadata.ts and lib/schemas.ts.
 * Use this file as the single import for SEO helpers across the project.
 */

import type { Metadata } from "next";

// ─── Constants ────────────────────────────────────────────────────────────────

export const BASE_URL = "https://smallbusinessmarketingprofessional.com";
export const BUSINESS_NAME = "SBMP — Small Business Marketing Professional";
export const BUSINESS_SHORT_NAME = "SBMP";
export const BUSINESS_EMAIL = "hello@sbmp.com";
export const BUSINESS_PHONE = "+44 (0)1234 567890";
export const FOUNDER_NAME = "Alex Morgan";
export const FOUNDER_TITLE = "Local SEO Expert & Founder";
export const YEAR_FOUNDED = "2014";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61583689962796";
export const INSTAGRAM_URL = "https://www.instagram.com/small_business_marketing_profe/";
export const LINKEDIN_URL = "https://www.linkedin.com/";
export const WA_LINK = "https://wa.me/923474825228";

// ─── String Utilities ─────────────────────────────────────────────────────────

/** Convert a slug like "local-seo-for-plumbers" to "Local SEO for Plumbers" */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Convert a title to a URL-safe slug */
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Format a city slug as a proper city name, e.g. "new-york-ny" → "New York, NY" */
export function formatCityName(slug: string): string {
  const parts = slug.split("-");
  const stateCode = parts[parts.length - 1]?.toUpperCase();
  const cityParts = parts.slice(0, -1).map((p) => p.charAt(0).toUpperCase() + p.slice(1));
  return `${cityParts.join(" ")}, ${stateCode}`;
}

/** Normalize keywords: lowercase, trim, deduplicate */
export function normalizeKeywords(keywords: string[]): string[] {
  return [...new Set(keywords.map((k) => k.toLowerCase().trim()))];
}

// ─── Canonical & URL Helpers ──────────────────────────────────────────────────

export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
}

// ─── Title & Description Generators ──────────────────────────────────────────

export function generatePageTitle(
  primary: string,
  suffix: string = `${BUSINESS_SHORT_NAME} — Local Digital Marketing`
): string {
  return `${primary} | ${suffix}`;
}

export function generateMetaDescription(
  core: string,
  cta: string = "Free audit. No contracts."
): string {
  const combined = `${core} ${cta}`;
  return combined.length > 160 ? combined.slice(0, 157) + "…" : combined;
}

// ─── Keyword Generators ───────────────────────────────────────────────────────

export function generateKeywords(
  primary: string[],
  location?: string,
  service?: string
): string[] {
  const extras: string[] = [];
  if (location) {
    extras.push(
      `local SEO ${location}`,
      `digital marketing ${location}`,
      `SEO agency ${location}`
    );
  }
  if (service) {
    extras.push(service.toLowerCase(), `${service.toLowerCase()} UK`);
  }
  return normalizeKeywords([...primary, ...extras]);
}

// ─── Open Graph & Twitter Helpers ────────────────────────────────────────────

export function generateOGData(
  title: string,
  description: string,
  url: string,
  imageUrl: string = `${BASE_URL}/sbmp-logo.png`,
  type: "website" | "article" = "website"
) {
  return {
    title,
    description,
    url,
    type,
    siteName: "SBMP — Local Digital Marketing",
    locale: "en_GB",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
  };
}

export function generateTwitterData(
  title: string,
  description: string,
  imageUrl: string = `${BASE_URL}/sbmp-logo.png`
) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [imageUrl],
    creator: "@sbmp_marketing",
  };
}

// ─── Full Metadata Generator ──────────────────────────────────────────────────

export function buildPageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  imageUrl?: string;
  type?: "website" | "article";
  robots?: Partial<{ index: boolean; follow: boolean }>;
}): Metadata {
  const { title, description, path, keywords, imageUrl, type = "website", robots } = opts;
  const url = generateCanonicalUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: generateOGData(title, description, url, imageUrl, type),
    twitter: generateTwitterData(title, description, imageUrl),
    robots: {
      index: true,
      follow: true,
      ...robots,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// ─── JSON-LD Schema Generators ────────────────────────────────────────────────

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
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

export function generateBreadcrumbSchema(items: Array<{ name: string; url?: string }>) {
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

export function generateLocalBusinessSchema(opts: {
  cityName: string;
  citySlug: string;
  description?: string;
  countryCode?: "GB" | "US";
  priceRange?: string;
}) {
  const { cityName, citySlug, description, countryCode = "GB", priceRange = "£199–£699" } = opts;
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: `${BUSINESS_NAME} — ${cityName}`,
    description: description ?? `Expert local SEO and digital marketing services for ${cityName} businesses.`,
    url: `${BASE_URL}/locations/${citySlug}`,
    logo: `${BASE_URL}/sbmp-logo.png`,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    priceRange,
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL],
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressCountry: countryCode,
    },
    areaServed: [{ "@type": "City", name: cityName }],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 150,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function generateServiceSchema(opts: {
  serviceName: string;
  description: string;
  price?: string;
  currency?: string;
  cityName?: string;
  url?: string;
}) {
  const { serviceName, description, price, currency = "GBP", cityName, url } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url: url ?? `${BASE_URL}/services/${toSlug(serviceName)}`,
    provider: {
      "@type": "ProfessionalService",
      name: BUSINESS_NAME,
      url: BASE_URL,
    },
    ...(price && {
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: currency,
        price: price.replace(/[^0-9.]/g, ""),
      },
    }),
    areaServed: cityName
      ? [{ "@type": "City", name: cityName }]
      : [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
        ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: BUSINESS_NAME,
    url: BASE_URL,
    description:
      "Expert local SEO & digital marketing for UK and US service businesses.",
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

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#organization`,
    name: BUSINESS_NAME,
    alternateName: BUSINESS_SHORT_NAME,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/sbmp-logo.png`,
      width: 400,
      height: 60,
    },
    description:
      "Expert local SEO & digital marketing for UK and US service businesses. Rank on page 1 of Google in 30–90 days. Trusted by 150+ businesses.",
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    foundingDate: YEAR_FOUNDED,
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
      jobTitle: FOUNDER_TITLE,
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
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Packages",
    },
  };
}

export function generateArticleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  authorName?: string;
  section?: string;
}) {
  const {
    headline,
    description,
    url,
    datePublished,
    dateModified,
    imageUrl,
    authorName = FOUNDER_NAME,
    section = "Digital Marketing",
  } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "en-GB",
    articleSection: section,
    author: {
      "@type": "Person",
      name: authorName,
      url: LINKEDIN_URL,
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
    image: {
      "@type": "ImageObject",
      url: imageUrl ?? `${BASE_URL}/sbmp-logo.png`,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function generateHowToSchema(opts: {
  name: string;
  description: string;
  url: string;
  steps: Array<{ name: string; text: string; url?: string }>;
  totalTime?: string;
  estimatedCost?: { currency: string; value: string };
}) {
  const { name, description, url, steps, totalTime, estimatedCost } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: estimatedCost.currency,
        value: estimatedCost.value,
      },
    }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
    })),
  };
}

export function generateSpeakableSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: pageUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".page-summary", ".faq-section", "h1", "h2"],
    },
  };
}

export function generateSiteNavigationSchema() {
  const navItems = [
    { name: "Home", url: BASE_URL },
    { name: "Services", url: `${BASE_URL}/services` },
    { name: "Local SEO", url: `${BASE_URL}/local-seo` },
    { name: "Locations", url: `${BASE_URL}/locations` },
    { name: "Industries", url: `${BASE_URL}/industries` },
    { name: "Digital Marketing", url: `${BASE_URL}/digital-marketing` },
    { name: "Pricing", url: `${BASE_URL}/pricing` },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: "Contact", url: `${BASE_URL}/contact` },
    { name: "Free Audit", url: `${BASE_URL}/free-audit` },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "SiteLinksSearchBox",
    url: BASE_URL,
    potentialAction: [
      {
        "@type": "SearchAction",
        target: `${BASE_URL}/blog?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    ],
  };
}

export function generateWebPageSchema(opts: {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
  breadcrumb?: Array<{ name: string; url?: string }>;
}) {
  const { title, description, url, dateModified, breadcrumb } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: title,
    description,
    url,
    inLanguage: "en-GB",
    isPartOf: { "@type": "WebSite", url: BASE_URL },
    dateModified: dateModified ?? new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: FOUNDER_NAME,
      jobTitle: FOUNDER_TITLE,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/sbmp-logo.png` },
    },
    ...(breadcrumb && {
      breadcrumb: generateBreadcrumbSchema(breadcrumb),
    }),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".page-summary", ".faq-section", "h1", "h2"],
    },
  };
}

// Existing pages continue to import from lib/metadata.ts and lib/schemas.ts.
// New code should import from this file for the additional helpers above.
