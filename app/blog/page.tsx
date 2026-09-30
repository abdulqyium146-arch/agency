import type { Metadata } from "next";
import Link from "next/link";
import { generateWebPageSchema, generateBreadcrumbSchema, generateItemListSchema, generateBlogPostingSchema } from "@/lib/schemas";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const metadata: Metadata = {
  title: "UK Local Digital Marketing Blog | Tips for Service Businesses",
  description:
    "Expert local SEO tips, Google Ads advice, and digital marketing insights for UK service businesses. Free guides updated monthly.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

const posts = blogPosts;

export default function BlogPage() {
  const blogUrl = `${BASE_URL}/blog`;

  const webPageSchema = generateWebPageSchema(
    "UK Local Digital Marketing Blog | Tips for Service Businesses",
    "Expert local SEO tips, Google Ads advice, and digital marketing insights for UK service businesses. Free guides updated monthly.",
    blogUrl
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Blog" },
  ]);
  const itemListSchema = generateItemListSchema(
    posts.map((post, i) => ({
      position: i + 1,
      name: post.title,
      url: post.hasFullPost ? `${BASE_URL}/blog/${post.slug}` : `${blogUrl}#${post.slug}`,
      description: post.excerpt,
    }))
  );
  const blogPostingSchemas = posts.map((post) =>
    generateBlogPostingSchema(
      post.title,
      post.excerpt,
      post.hasFullPost ? `${BASE_URL}/blog/${post.slug}` : `${blogUrl}#${post.slug}`,
      post.date,
      post.category
    )
  );

  const jsonLd = [webPageSchema, breadcrumbSchema, itemListSchema, ...blogPostingSchemas];

  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#0D1627",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6"
            style={{ backgroundColor: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}
          >
            📚 Updated Monthly
          </div>
          <h1
            className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Digital Marketing Insights for UK Service Businesses
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8B9CB8" }}>
            Free expert tips, guides, and case studies — updated monthly.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 card-hover-blue"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                {/* Card header accent */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    backgroundColor: post.categoryColor,
                    boxShadow: `0 0 8px ${post.categoryColor}60`,
                  }}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Category badge */}
                  <div className="mb-4">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: post.categoryBg, color: post.categoryColor }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-base font-bold mb-3 leading-snug flex-1"
                    style={{ color: "#E2E8F0" }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#8B9CB8" }}>
                    {post.excerpt}
                  </p>

                  {/* Footer row */}
                  <div
                    className="flex items-center justify-between mt-auto pt-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="flex items-center gap-3 text-xs" style={{ color: "#4A5A6E" }}>
                      <span>⏱ {post.readTime} read</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    {post.hasFullPost ? (
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold transition-colors hover:underline"
                        style={{ color: "#4F8EF7" }}
                      >
                        Read More →
                      </Link>
                    ) : (
                      <span className="text-xs" style={{ color: "#4A5A6E" }}>Coming soon</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24"
        style={{
          background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,142,247,0.10) 0%, #080D1A 70%)",
          borderTop: "1px solid rgba(79,142,247,0.20)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="gradient-text text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Want results like these? Get your free audit today.
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            I&apos;ll review your online presence and show you exactly what needs fixing — completely free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get My FREE Audit →
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#22C55E" }}
            >
              💬 WhatsApp Me Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
