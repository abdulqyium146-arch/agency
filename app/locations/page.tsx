import type { Metadata } from "next";
import Link from "next/link";
import { cities, capitalize } from "@/lib/data";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const metadata: Metadata = {
  title: "Local Digital Marketing by City | UK Service Business Experts",
  description:
    "Expert local digital marketing in 20+ UK cities. From Birmingham to Brighton, I help service businesses rank on page 1 of Google in their area.",
  keywords: [
    "local digital marketing",
    "marketing by location",
    "UK cities",
    "local SEO",
    "regional marketing",
    "service business marketing",
  ],
  alternates: {
    canonical: `${BASE_URL}/locations`,
  },
  openGraph: {
    title: "Local Digital Marketing by City | SBMP",
    description: "Expert local digital marketing across 20+ UK cities.",
    url: `${BASE_URL}/locations`,
    type: "website",
  },
};

export default function LocationsPage() {
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
              Local Marketing Across the UK
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: "#8B9CB8" }}>
              Select your location to discover how I can help your business dominate local search results.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link key={city} href={`/locations/${city}`}>
                <div
                  className="rounded-xl p-6 text-center transition-all hover:-translate-y-1 card-hover-blue cursor-pointer"
                  style={{
                    backgroundColor: "#111E33",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  <h3 className="font-bold text-lg" style={{ color: "#E2E8F0" }}>
                    {capitalize(city)}
                  </h3>
                  <p className="text-sm mt-2" style={{ color: "#4F8EF7" }}>
                    View services →
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
            Your City Not Listed?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            I work across the entire UK. Contact me to discuss local marketing for your area.
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
