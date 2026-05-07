import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Turbopack configuration
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Image optimization for Core Web Vitals
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Enable SWR (stale-while-revalidate) for better caching
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },

  // Compression
  compress: true,

  // Production source maps disabled for performance
  productionBrowserSourceMaps: false,

  // Trailing slash consistency — no trailing slashes (canonical consistency)
  trailingSlash: false,

  // HTTP headers for SEO and security
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          // Tell search engines to index and follow all pages
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1",
          },
          // Security headers that also improve trust signals
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache static assets aggressively — improves Core Web Vitals (LCP/FID)
        source: "/(.*)\\.(ico|png|jpg|jpeg|svg|webp|avif|woff|woff2|ttf|otf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // llms.txt + .well-known/llms.txt — short cache so AI crawlers get fresh content
        source: "/(llms.txt|.well-known/llms.txt)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=3600",
          },
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          // Explicitly allow all AI crawlers on these files
          {
            key: "X-Robots-Tag",
            value: "all",
          },
        ],
      },
      {
        // robots.txt — daily cache
        source: "/robots.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        // sitemap — 1-hour cache for fast Googlebot discovery
        source: "/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=600",
          },
        ],
      },
    ];
  },

  // Redirects for canonical consistency
  async redirects() {
    return [
      // Normalize old path variant to canonical (if any pages were renamed)
      {
        source: "/digital-marketing-for-small-business",
        destination: "/digital-marketing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
