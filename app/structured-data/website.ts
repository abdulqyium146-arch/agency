/**
 * app/structured-data/website.ts
 * WebSite schema with SiteLinksSearchBox potential action.
 */

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const BUSINESS_NAME = "SBMP — Small Business Marketing Professional";

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: BUSINESS_NAME,
    url: BASE_URL,
    description: "Expert local SEO & digital marketing for UK and US service businesses.",
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
      "@id": `${BASE_URL}/#organization`,
      name: BUSINESS_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 400,
        height: 60,
      },
    },
  };
}
