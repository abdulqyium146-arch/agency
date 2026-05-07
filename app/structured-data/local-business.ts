/**
 * app/structured-data/local-business.ts
 * LocalBusiness schema generator for city/location pages.
 */

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const BUSINESS_NAME = "SBMP — Small Business Marketing Professional";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61583689962796";
const INSTAGRAM_URL = "https://www.instagram.com/small_business_marketing_profe/";
const LINKEDIN_URL = "https://www.linkedin.com/";

export interface LocalBusinessOptions {
  cityName: string;
  citySlug: string;
  description?: string;
  countryCode?: "GB" | "US";
  priceRange?: string;
  latitude?: number;
  longitude?: number;
}

export function getLocalBusinessSchema(opts: LocalBusinessOptions) {
  const {
    cityName,
    citySlug,
    description,
    countryCode = "GB",
    priceRange = "£199–£699",
    latitude,
    longitude,
  } = opts;

  const urlPath = countryCode === "US"
    ? `${BASE_URL}/local-seo/${citySlug}`
    : `${BASE_URL}/locations/${citySlug}`;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${urlPath}#localbusiness`,
    name: `${BUSINESS_NAME} — ${cityName}`,
    description:
      description ??
      `Expert local SEO and digital marketing services for ${cityName} businesses. Get found on Google and generate more leads.`,
    url: urlPath,
    logo: `${BASE_URL}/sbmp-logo.png`,
    image: `${BASE_URL}/sbmp-logo.png`,
    email: "hello@sbmp.com",
    telephone: "+44 (0)1234 567890",
    priceRange,
    sameAs: [FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL],
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressCountry: countryCode,
    },
    ...(latitude &&
      longitude && {
        geo: {
          "@type": "GeoCoordinates",
          latitude,
          longitude,
        },
      }),
    areaServed: [{ "@type": "City", name: cityName }],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 150,
      bestRating: 5,
      worstRating: 1,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "hello@sbmp.com",
      availableLanguage: ["en"],
    },
  };
}
