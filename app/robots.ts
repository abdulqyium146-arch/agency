import { MetadataRoute } from "next";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers — allow all, block internal Next.js/admin paths
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Google's AI training crawler — allow full access for AI Overviews
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // OpenAI / ChatGPT crawler
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // Anthropic / Claude crawler
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // Perplexity AI crawler
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Amazon Alexa / Bing Copilot discovery
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      // Cohere AI crawler
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      // Meta AI crawler
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      // Apple Applebot (Siri/Spotlight)
      {
        userAgent: "Applebot",
        allow: "/",
      },
      // Common-Crawl (used by many LLMs for training)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Mistral AI
      {
        userAgent: "MistralBot",
        allow: "/",
      },
      // You.com AI
      {
        userAgent: "YouBot",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
