import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Local SEO, Google Ads & Web Design",
  description:
    "Expert digital marketing services for UK businesses. Local SEO, Google Ads, web design, social media, reputation management. Custom solutions from £149/month.",
  keywords: [
    "digital marketing services",
    "local SEO services",
    "Google Ads management",
    "web design services",
    "social media marketing",
    "reputation management",
  ],
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Digital Marketing Services | SBMP",
    description: "Expert digital marketing services tailored for UK service businesses.",
    url: `${BASE_URL}/services`,
    type: "website",
  },
};

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: "#8B9CB8" }}>
              Complete digital marketing solutions designed to get your UK service business to page 1 of Google and keep it there.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(services).map(([slug, service]) => (
              <Link key={slug} href={`/services/${slug}`}>
                <div
                  className="rounded-2xl p-8 h-full transition-all hover:-translate-y-1 card-hover-blue cursor-pointer"
                  style={{
                    backgroundColor: "#111E33",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mb-4" style={{ color: "#8B9CB8" }}>
                    {service.tagline}
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "#4F8EF7" }}>
                    {service.price}
                  </p>
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
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Get a free audit worth £299 to see exactly what's holding your business back on Google.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: "#4F8EF7" }}
          >
            Claim Your Free Audit →
          </Link>
        </div>
      </section>
    </div>
  );
}
