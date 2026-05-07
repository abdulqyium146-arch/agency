/**
 * app/structured-data/webpage.ts
 * WebPage schema generator — use on every page alongside Speakable.
 */

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const BUSINESS_NAME = "SBMP — Small Business Marketing Professional";
const FOUNDER_NAME = "Alex Morgan";
const FOUNDER_TITLE = "Local SEO Expert & Founder";

export interface WebPageOptions {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
  speakableSelectors?: string[];
}

export function getWebPageSchema(opts: WebPageOptions) {
  const {
    title,
    description,
    url,
    dateModified,
    speakableSelectors = [".page-summary", ".faq-section", "h1", "h2"],
  } = opts;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: title,
    description,
    url,
    inLanguage: "en-GB",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
    dateModified: dateModified ?? new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: FOUNDER_NAME,
      jobTitle: FOUNDER_TITLE,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: BUSINESS_NAME,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/sbmp-logo.png` },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    },
  };
}
