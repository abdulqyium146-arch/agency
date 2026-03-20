import { MetadataRoute } from "next";
import { cities, industriesSlugs, servicesSlugs } from "@/lib/data";
import { locationSlugs } from "@/data/locations";
import { serviceSlugs } from "@/data/services";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

const services = servicesSlugs;
const industries = industriesSlugs;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static core pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/free-audit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/digital-marketing-for-small-business`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/local-seo-experts-katy-tx`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/local-business-marketing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.93,
    },
    {
      url: `${BASE_URL}/local-advertising`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.93,
    },
    {
      url: `${BASE_URL}/local-marketing-agency`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.94,
    },
    {
      url: `${BASE_URL}/google-maps-marketing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/local-social-media-marketing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.91,
    },
    {
      url: `${BASE_URL}/local-marketing-strategies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.91,
    },
    {
      url: `${BASE_URL}/free-local-advertising`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.90,
    },
    {
      url: `${BASE_URL}/brighton`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.94,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Location pages (high priority — these rank locally)
  // Bristol has a dedicated fully-optimised page — boosted to 0.93
  const locationPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/locations/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: city === "bristol" ? 0.93 : 0.8,
  }));

  // Automotive SEO landing pages — one per city (high priority local SEO pages)
  const automotiveSEOPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/locations/${city}/automotive-seo`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Industry pages
  const industryPages: MetadataRoute.Sitemap = industries.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Local SEO hub page
  const localSeoHub: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/local-seo`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  // Local SEO city pages — one per major US city
  const localSeoCityPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/local-seo/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Local SEO service pages — city × service combinations (25 × 12 = 300 pages)
  const localSeoServicePages: MetadataRoute.Sitemap = locationSlugs.flatMap((locSlug) =>
    serviceSlugs.map((svcSlug) => ({
      url: `${BASE_URL}/local-seo/${locSlug}/${svcSlug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...automotiveSEOPages,
    ...industryPages,
    ...localSeoHub,
    ...localSeoCityPages,
    ...localSeoServicePages,
  ];
}
