// Shared metadata utilities for consistent SEO across all pages

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const BUSINESS_NAME = "SBMP — Local Digital Marketing";

// ============================================================================
// METADATA TEMPLATES
// ============================================================================

export function generateCanonicalURL(path: string): string {
  return `${BASE_URL}${path}`;
}

export function generateServiceMetadata(
  serviceName: string,
  serviceTagline: string,
  servicePrice: string
) {
  const title = `${serviceName} for UK Service Businesses`;
  const description = `${serviceTagline} Expert UK local digital marketing. ${servicePrice}.`;

  return {
    title,
    description,
    canonical: generateCanonicalURL(`/services/${serviceName.toLowerCase().replace(/\s+/g, "-")}`),
    keywords: [
      serviceName.toLowerCase(),
      "UK service business",
      "digital marketing",
      "local marketing",
      servicePrice,
    ],
  };
}

export function generateLocationMetadata(cityName: string, citySlug: string) {
  const title = `Local Digital Marketing in ${cityName} | Expert SEO & Google Ads`;
  const description = `Get your ${cityName} service business to page 1 of Google. Expert local SEO, Google Ads & web design for ${cityName} businesses. From £199/month. Free audit.`;

  return {
    title,
    description,
    canonical: generateCanonicalURL(`/locations/${citySlug}`),
    keywords: [
      `local SEO ${cityName}`,
      `digital marketing ${cityName}`,
      `Google Business Profile ${cityName}`,
      `SEO agency ${cityName}`,
      `${cityName} local marketing`,
    ],
  };
}

export function generateIndustryMetadata(industryName: string, industryPlural: string, searchTerm: string, industrySlug: string) {
  const title = `Local SEO & Digital Marketing for ${industryName} | UK Expert`;
  const description = `Expert local digital marketing for UK ${industryPlural}. Get more customers searching '${searchTerm}'. Page 1 results in 30–90 days. Free audit.`;

  return {
    title,
    description,
    canonical: generateCanonicalURL(`/industries/${industrySlug}`),
    keywords: [
      `${industryName.toLowerCase()} SEO`,
      `${industryName.toLowerCase()} digital marketing`,
      `${industryName.toLowerCase()} local marketing`,
      searchTerm,
      `UK ${industryPlural.toLowerCase()}`,
    ],
  };
}

export function generateContactMetadata() {
  return {
    title: "Contact | Get Your Free SEO Audit Today",
    description:
      "Get a free SEO audit worth £299. No obligation, no hard sell. Chat with us via WhatsApp or fill out the contact form. We're here to help UK service businesses grow.",
    canonical: generateCanonicalURL("/contact"),
    keywords: ["contact SBMP", "free SEO audit", "UK digital marketing", "local SEO help"],
  };
}

export function generateBlogMetadata() {
  return {
    title: "UK Local Digital Marketing Blog | Tips for Service Businesses",
    description:
      "Insights, tips, and strategies for UK service business owners wanting to rank on Google and grow their business. Local SEO, Google Ads, and digital marketing advice.",
    canonical: generateCanonicalURL("/blog"),
    keywords: ["digital marketing blog", "local SEO tips", "UK business", "marketing strategy"],
  };
}

export function generatePrivacyMetadata() {
  return {
    title: "Privacy Policy | SBMP Local Digital Marketing",
    description: "Privacy policy for SBMP. We take your data protection seriously.",
    canonical: generateCanonicalURL("/privacy"),
  };
}

export function generateTermsMetadata() {
  return {
    title: "Terms of Service | SBMP Local Digital Marketing",
    description: "Terms of service and conditions for SBMP digital marketing services.",
    canonical: generateCanonicalURL("/terms"),
  };
}

// ============================================================================
// OPEN GRAPH & SOCIAL METADATA
// ============================================================================

export function generateOpenGraphMetadata(
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
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
    siteName: BUSINESS_NAME,
    locale: "en_GB",
  };
}

export function generateTwitterMetadata(title: string, description: string, imageUrl = `${BASE_URL}/sbmp-logo.png`) {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [imageUrl],
    creator: "@sbmp_marketing", // Update with actual Twitter handle if available
  };
}

// ============================================================================
// BREADCRUMB METADATA
// ============================================================================

export interface BreadcrumbItem {
  label: string;
  url?: string;
}

export function generateBreadcrumbs(items: BreadcrumbItem[]) {
  return items.map((item, index) => ({
    position: index + 1,
    label: item.label,
    ...(item.url && { url: item.url }),
  }));
}

// ============================================================================
// ENHANCED METADATA OBJECT
// ============================================================================

export interface EnhancedMetadata {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  openGraph?: any;
  twitter?: any;
  robots?: {
    index: boolean;
    follow: boolean;
  };
}

export function createEnhancedMetadata(
  title: string,
  description: string,
  canonicalUrl: string,
  keywords?: string[],
  ogImage?: string
): EnhancedMetadata {
  return {
    title,
    description,
    canonical: canonicalUrl,
    ...(keywords && { keywords }),
    openGraph: generateOpenGraphMetadata(title, description, canonicalUrl, ogImage),
    twitter: generateTwitterMetadata(title, description, ogImage),
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ============================================================================
// NEXT.JS METADATA CONVERTERS
// ============================================================================

import type { Metadata } from "next";

export function convertToNextMetadata(enhanced: EnhancedMetadata): Metadata {
  return {
    title: enhanced.title,
    description: enhanced.description,
    keywords: enhanced.keywords,
    alternates: {
      canonical: enhanced.canonical,
    },
    openGraph: {
      title: enhanced.openGraph.title,
      description: enhanced.openGraph.description,
      url: enhanced.openGraph.url,
      type: enhanced.openGraph.type as any,
      images: enhanced.openGraph.images,
      siteName: enhanced.openGraph.siteName,
      locale: enhanced.openGraph.locale,
    },
    twitter: {
      card: enhanced.twitter.card as any,
      title: enhanced.twitter.title,
      description: enhanced.twitter.description,
      images: enhanced.twitter.images,
      creator: enhanced.twitter.creator,
    },
    robots: enhanced.robots,
  };
}

// ============================================================================
// STRUCTURED DATA HELPERS
// ============================================================================

export function generateStructuredDataScript(schema: any): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

// ============================================================================
// UTILITY: Price parsing
// ============================================================================

export function extractPrice(priceString: string): string {
  // Extract just the number from price strings like "From £199/month"
  const match = priceString.match(/£(\d+)/);
  return match ? match[1] : "0";
}
