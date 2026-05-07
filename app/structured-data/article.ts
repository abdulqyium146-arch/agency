/**
 * app/structured-data/article.ts
 * Article schema generator for blog posts and editorial content.
 */

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const BUSINESS_NAME = "SBMP — Small Business Marketing Professional";
const FOUNDER_NAME = "Alex Morgan";
const FOUNDER_TITLE = "Local SEO Expert & Founder";
const LINKEDIN_URL = "https://www.linkedin.com/";

export interface ArticleSchemaOptions {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  authorName?: string;
  section?: string;
  tags?: string[];
}

export function getArticleSchema(opts: ArticleSchemaOptions) {
  const {
    headline,
    description,
    url,
    datePublished,
    dateModified,
    imageUrl,
    authorName = FOUNDER_NAME,
    section = "Digital Marketing",
    tags,
  } = opts;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "en-GB",
    articleSection: section,
    ...(tags && { keywords: tags.join(", ") }),
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: FOUNDER_TITLE,
      url: LINKEDIN_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
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
