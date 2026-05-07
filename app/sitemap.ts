import { MetadataRoute } from "next";
import { cities, industriesSlugs, servicesSlugs } from "@/lib/data";
import { locationSlugs } from "@/data/locations";
import { serviceSlugs } from "@/data/services";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

const services = servicesSlugs;
const industries = industriesSlugs;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static core pages ──────────────────────────────────────────────────────
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
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
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
      url: `${BASE_URL}/digital-marketing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
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

  // ── Section hub pages ──────────────────────────────────────────────────────
  const hubPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/local-seo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // ── Landing pages (US market) ──────────────────────────────────────────────
  const landingPages: MetadataRoute.Sitemap = [
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
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/video-editing-services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.93,
    },
  ];

  // ── Brighton location pages (UK flagship) ─────────────────────────────────
  const brightonPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/brighton`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.94,
    },
    {
      url: `${BASE_URL}/brighton/seo/local`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/brighton/seo/ecommerce`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/brighton/content/email`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/brighton/social/instagram`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/brighton/social/facebook`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/brighton/web/landing-pages`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/brighton/web/wordpress`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // ── Service pages ──────────────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // ── UK location pages (high priority — local rankings) ────────────────────
  const locationPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/locations/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: city === "bristol" ? 0.93 : 0.8,
  }));

  // ── Automotive SEO — one per UK city ──────────────────────────────────────
  const automotiveSEOPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/locations/${city}/automotive-seo`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // ── Industry pages ────────────────────────────────────────────────────────
  const industryPages: MetadataRoute.Sitemap = industries.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // ── Local SEO city pages — 25 US cities ───────────────────────────────────
  const localSeoCityPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/local-seo/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Local SEO service pages — 25 cities × 12 services = 300 pages ─────────
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
    ...hubPages,
    ...landingPages,
    ...brightonPages,
    ...servicePages,
    ...locationPages,
    ...automotiveSEOPages,
    ...industryPages,
    ...localSeoCityPages,
    ...localSeoServicePages,
  ];
}
