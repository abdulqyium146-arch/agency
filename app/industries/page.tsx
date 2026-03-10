import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/data";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const metadata: Metadata = {
  title: "Industry-Specific Digital Marketing | SEO for Service Businesses",
  description:
    "Expert digital marketing for plumbers, electricians, dentists, and 20+ other service industries. Proven strategies for your specific business type.",
  keywords: [
    "industry specific marketing",
    "service business SEO",
    "plumber marketing",
    "dentist marketing",
    "tradesperson marketing",
    "local business growth",
  ],
  alternates: {
    canonical: `${BASE_URL}/industries`,
  },
  openGraph: {
    title: "Industry-Specific Digital Marketing | SBMP",
    description: "Expert digital marketing tailored to your specific service industry.",
    url: `${BASE_URL}/industries`,
    type: "website",
  },
};

export default function IndustriesPage() {
  const industryEntries = Object.entries(industries);

  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      {/* Hero */}
      <section
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.18) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Industries We Serve
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: "#8B9CB8" }}>
              Expert local marketing strategies tailored to your specific service industry. I've helped businesses across 20+ industries rank #1 on Google.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryEntries.map(([slug, industry]) => (
              <Link key={slug} href={`/industries/${slug}`}>
                <div
                  className="rounded-xl p-6 transition-all hover:-translate-y-1 card-hover-blue cursor-pointer flex items-center gap-4"
                  style={{
                    backgroundColor: "#111E33",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="text-4xl flex-shrink-0">{industry.icon}</div>
                  <div>
                    <h3 className="font-bold" style={{ color: "#E2E8F0" }}>
                      {industry.name}
                    </h3>
                    <p className="text-xs" style={{ color: "#8B9CB8" }}>
                      {industry.searchTerm}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Don't See Your Industry?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            I work with service businesses across all industries. Let's discuss your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: "#4F8EF7" }}
          >
            Get In Touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
