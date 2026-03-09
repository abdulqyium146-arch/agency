import { MetadataRoute } from "next";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

const cities = [
  "birmingham", "manchester", "leeds", "sheffield", "bristol",
  "leicester", "nottingham", "liverpool", "newcastle", "cardiff",
  "edinburgh", "glasgow", "brighton", "southampton", "coventry",
  "hull", "derby", "stoke", "preston", "oxford",
];

const industries = [
  "plumbers", "electricians", "dentists", "solicitors", "estate-agents",
  "cleaners", "builders", "landscapers", "driving-schools", "physiotherapists",
  "locksmiths", "accountants", "car-detailing", "car-valeting",
  "auto-locksmiths", "car-locksmiths", "home-locksmiths",
  "gutter-cleaning", "jet-washing",
];

const services = [
  "local-seo", "google-ads", "web-design", "social-media", "reputation",
];

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
  const locationPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/locations/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Industry pages
  const industryPages: MetadataRoute.Sitemap = industries.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...industryPages,
  ];
}
