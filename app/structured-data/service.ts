/**
 * app/structured-data/service.ts
 * Service schema generator for service pages.
 */

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const BUSINESS_NAME = "SBMP — Small Business Marketing Professional";

export interface ServiceSchemaOptions {
  serviceName: string;
  description: string;
  url?: string;
  price?: string;
  currency?: "GBP" | "USD";
  cityName?: string;
  serviceType?: string;
}

export function getServiceSchema(opts: ServiceSchemaOptions) {
  const {
    serviceName,
    description,
    url,
    price,
    currency = "GBP",
    cityName,
    serviceType,
  } = opts;

  const slug = serviceName.toLowerCase().replace(/\s+/g, "-");
  const pageUrl = url ?? `${BASE_URL}/services/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: serviceName,
    description,
    url: pageUrl,
    serviceType: serviceType ?? serviceName,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#organization`,
      name: BUSINESS_NAME,
      url: BASE_URL,
    },
    ...(price && {
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: currency,
        price: price.replace(/[^0-9.]/g, ""),
        unitText: "MONTH",
      },
    }),
    areaServed: cityName
      ? [{ "@type": "City", name: cityName }]
      : [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
        ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 150,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
