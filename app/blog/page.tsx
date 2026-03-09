import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Local Digital Marketing Blog | Tips for Service Businesses",
  description:
    "Expert local SEO tips, Google Ads advice, and digital marketing insights for UK service businesses. Free guides updated monthly.",
};

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

const posts = [
  {
    id: 1,
    title: "How to Rank #1 on Google Maps in 2024 — The Complete Guide for UK Tradespeople",
    category: "Local SEO",
    readTime: "8 min",
    date: "15 Jan 2024",
    excerpt:
      "Google Maps rankings are crucial for local service businesses. Here's the exact strategy I've used to rank 150+ UK businesses in the 3-pack...",
    categoryColor: "#4F8EF7",
    categoryBg: "rgba(79,142,247,0.12)",
  },
  {
    id: 2,
    title: "Why Your Google Business Profile Is Killing Your Leads (And How to Fix It)",
    category: "Google Business Profile",
    readTime: "5 min",
    date: "28 Feb 2024",
    excerpt:
      "Most business owners set up their Google Business Profile once and forget it. Here are the 7 critical optimisations most businesses are missing...",
    categoryColor: "#FB923C",
    categoryBg: "rgba(251,146,60,0.10)",
  },
  {
    id: 3,
    title: "Local SEO vs Google Ads: Which Should UK Service Businesses Use in 2024?",
    category: "Strategy",
    readTime: "6 min",
    date: "10 Mar 2024",
    excerpt:
      "The age-old question: should you invest in SEO or PPC? The answer isn't simple — it depends on your budget, timeline, and competition level...",
    categoryColor: "#22C55E",
    categoryBg: "rgba(34,197,94,0.12)",
  },
  {
    id: 4,
    title: "The Complete Guide to Getting 5-Star Google Reviews (Without Spamming Your Customers)",
    category: "Reputation",
    readTime: "4 min",
    date: "22 Apr 2024",
    excerpt:
      "Online reviews are the #1 trust signal for local service businesses. Here's an ethical, effective system for generating a steady stream of 5-star reviews...",
    categoryColor: "#FBBF24",
    categoryBg: "rgba(251,191,36,0.10)",
  },
  {
    id: 5,
    title: "How Much Does Local SEO Cost in the UK? (Honest Breakdown for 2024)",
    category: "Pricing",
    readTime: "5 min",
    date: "5 May 2024",
    excerpt:
      "Local SEO pricing in the UK ranges from £50/month to £5,000+. Here's an honest breakdown of what you actually need — and what's a waste of money...",
    categoryColor: "#A78BFA",
    categoryBg: "rgba(167,139,250,0.12)",
  },
  {
    id: 6,
    title: "Case Study: How a Birmingham Plumber Went from Page 4 to Position #1 in 8 Weeks",
    category: "Case Study",
    readTime: "7 min",
    date: "18 Jun 2024",
    excerpt:
      "A real-world breakdown of exactly how I took a plumbing business from invisible to dominant in Birmingham's competitive local search market...",
    categoryColor: "#22D3EE",
    categoryBg: "rgba(34,211,238,0.10)",
  },
];

export default function BlogPage() {
  return (
    <div style={{ backgroundColor: "#080D1A" }}>
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
                key={post.id}
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
                    <Link
                      href="#"
                      className="text-sm font-semibold transition-colors hover:underline"
                      style={{ color: "#4F8EF7" }}
                    >
                      Read More →
                    </Link>
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
