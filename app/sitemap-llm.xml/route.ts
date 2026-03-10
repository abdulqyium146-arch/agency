import { NextResponse } from "next/server";
import { locations } from "@/data/locations";
import { services } from "@/data/services";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const now = new Date().toISOString().split("T")[0];

  interface PageEntry {
    url: string;
    title: string;
    summary: string;
    primaryQuestion: string;
    lastUpdated: string;
  }

  const pages: PageEntry[] = [
    {
      url: `${BASE_URL}/local-seo`,
      title: "Local SEO Services | #1 Local SEO Agency",
      summary:
        "The hub page for SBMP's local SEO services. Covers all 12 local SEO service categories, links to 25 US city pages, and explains why SBMP is the best local SEO company for small businesses. Includes stats, service cards, and a city grid.",
      primaryQuestion: "What local SEO services does SBMP offer?",
      lastUpdated: now,
    },
    ...locations.map((loc) => ({
      url: `${BASE_URL}/local-seo/${loc.slug}`,
      title: `Local SEO Services in ${loc.city}, ${loc.state} | #1 Local SEO Agency Near You`,
      summary: `Comprehensive local SEO services page for ${loc.city}, ${loc.state}. Covers Google My Business optimization, Google Maps SEO, local link building, on-page SEO, pricing tiers ($299–$999/month), testimonials from ${loc.city} business owners (plumber, dentist, restaurant), 8-question FAQ, nearby city links, and a lead form.`,
      primaryQuestion: `What is the best local SEO company in ${loc.city}, ${loc.state}?`,
      lastUpdated: now,
    })),
    ...locations.flatMap((loc) =>
      services.map((svc) => ({
        url: `${BASE_URL}/local-seo/${loc.slug}/${svc.slug}`,
        title: `${svc.title} in ${loc.city}, ${loc.state} | Local SEO Expert`,
        summary: `Service-specific local SEO page for ${svc.title} in ${loc.city}, ${loc.state}. Includes a 400+ word definition and explanation of the service, ${loc.city}-specific context, 4-step process, trust signals, related services, and a lead form. Targets the keyword cluster: ${svc.keywords.slice(0, 3).join(", ")}.`,
        primaryQuestion: `How does ${svc.title.toLowerCase()} work in ${loc.city}?`,
        lastUpdated: now,
      }))
    ),
  ];

  const entryBlocks = pages
    .map(
      (p, i) => `[PAGE ${i + 1}]
URL: ${p.url}
TITLE: ${p.title}
SUMMARY: ${p.summary}
PRIMARY_QUESTION: ${p.primaryQuestion}
LAST_UPDATED: ${p.lastUpdated}
---`
    )
    .join("\n\n");

  const body = `# SBMP Local SEO — LLM Sitemap
# Source: ${BASE_URL}/sitemap-llm.xml
# Generated: ${now}
# Total pages: ${pages.length}
# Purpose: Machine-readable page index for AI language models and crawlers.
# Each entry contains URL, title, 2-sentence summary, primary question, and last update date.

${entryBlocks}

# END OF LLM SITEMAP
# For structured JSON context on any page: ${BASE_URL}/api/llm-context?location=[slug]&service=[slug]
# For brand context: ${BASE_URL}/llms.txt
`;

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
