/**
 * app/structured-data/faq.ts
 * FAQPage schema generator — triggers PAA and FAQ rich results.
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export function getFAQSchema(faqs: FAQItem[]) {
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

/**
 * Standard FAQ sets — reusable across pages.
 * Override per-page by passing your own array to getFAQSchema().
 */
export const localSeoFAQs: FAQItem[] = [
  {
    question: "What is local SEO?",
    answer:
      "Local SEO is the process of optimizing your online presence so your business appears prominently in Google's local search results and Google Maps when customers nearby search for your services. It includes Google Business Profile optimization, local citations, reviews, and on-page SEO targeting your city.",
  },
  {
    question: "How much does local SEO cost?",
    answer:
      "Local SEO services typically range from £199 to £699 per month depending on the scope. Our Starter plan (£199/month) covers Google Business Profile optimization and citations; the Growth plan (£349/month) adds Google Ads management; the Pro plan (£599/month) includes website, social media, and full-stack digital marketing.",
  },
  {
    question: "How long does local SEO take to show results?",
    answer:
      "Most clients see measurable improvements in Google Maps and local rankings within 4–8 weeks. Significant traffic and lead increases typically occur by month 3. Competitive markets may take 4–6 months for dominant first-page positioning.",
  },
  {
    question: "Is local SEO worth it for small businesses?",
    answer:
      "Yes — local SEO delivers one of the highest ROIs in digital marketing. 46% of all Google searches have local intent, and the top 3 Local Pack results receive 75% of all clicks. For service businesses, ranking in the Local Pack can generate consistent free inbound leads.",
  },
  {
    question: "What does a local SEO agency do?",
    answer:
      "A local SEO agency optimizes your Google Business Profile, builds local citations, earns local backlinks, manages online reviews, creates location-specific web pages, and improves your website's technical SEO — all aimed at ranking your business higher in Google Maps and local organic results.",
  },
  {
    question: "Do I need a local SEO agency or can I do it myself?",
    answer:
      "While some local SEO tasks can be DIY, effective local SEO requires deep expertise in Google's local ranking algorithm, citation management across 80+ directories, review strategy, and competitor analysis. An agency delivers faster, more consistent results and frees you to run your business.",
  },
  {
    question: "How does Google decide which businesses rank in the Local Pack?",
    answer:
      "Google uses three primary factors: relevance (does your profile match the search?), distance (proximity to the searcher), and prominence (your authority based on reviews, citations, and backlinks). Optimizing all three factors simultaneously is the key to Local Pack dominance.",
  },
  {
    question: "Can local SEO work for businesses without a physical storefront?",
    answer:
      "Yes. Service-area businesses (plumbers, electricians, landscapers) can rank in the Local Pack by listing a service area instead of a physical address on their Google Business Profile. We specialize in service-area business SEO and build city landing pages to target each geographic market.",
  },
];
