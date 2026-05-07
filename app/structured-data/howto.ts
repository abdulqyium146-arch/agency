/**
 * app/structured-data/howto.ts
 * HowTo schema generator — triggers rich results for guide/process pages.
 */

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  imageUrl?: string;
}

export interface HowToOptions {
  name: string;
  description: string;
  url: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCostCurrency?: string;
  estimatedCostValue?: string;
}

export function getHowToSchema(opts: HowToOptions) {
  const { name, description, url, steps, totalTime, estimatedCostCurrency, estimatedCostValue } = opts;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name,
    description,
    url,
    ...(totalTime && { totalTime }),
    ...(estimatedCostCurrency &&
      estimatedCostValue && {
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: estimatedCostCurrency,
          value: estimatedCostValue,
        },
      }),
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.imageUrl && {
        image: { "@type": "ImageObject", url: step.imageUrl },
      }),
    })),
  };
}

/** Standard "How Local SEO Works" HowTo schema — reusable across service pages */
export const localSeoHowToSteps: HowToStep[] = [
  {
    name: "Audit your Google Business Profile",
    text: "We audit every element of your GBP — categories, description, photos, reviews, and Q&A — identifying gaps that suppress your Google Maps ranking.",
  },
  {
    name: "Fix citations and NAP consistency",
    text: "We build and correct your business listings across 80+ directories, ensuring your Name, Address, and Phone number is identical everywhere Google looks.",
  },
  {
    name: "Optimize your website for local keywords",
    text: "We add city-specific pages, schema markup, and on-page content targeting the exact phrases your customers use when searching locally.",
  },
  {
    name: "Build local authority with backlinks and reviews",
    text: "We earn high-DA local backlinks from news sites, chambers of commerce, and directories, and implement a review generation system to build your online reputation.",
  },
  {
    name: "Monitor, report, and refine monthly",
    text: "We send clear monthly reports showing ranking improvements, GMB insights, and new leads — then adjust our strategy based on real data.",
  },
];
