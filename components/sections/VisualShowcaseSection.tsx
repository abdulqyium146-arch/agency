"use client";

import Image from "next/image";
import Link from "next/link";

export default function VisualShowcaseSection() {
  return (
    <section style={{ backgroundColor: "#080D1A" }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            Your Business Growth, Our Strategy
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#8B9CB8" }}
          >
            We combine proven SEO expertise with personalized digital marketing strategies designed for UK service businesses.
          </p>
        </div>

        {/* Two-Column Grid for Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT: Services Showcase */}
          <div className="flex flex-col">
            <div
              className="rounded-3xl overflow-hidden mb-6 flex-1 shadow-xl"
              style={{
                border: "1px solid rgba(79,142,247,0.2)",
                boxShadow: "0 8px 32px rgba(79,142,247,0.15)",
              }}
            >
              <Image
                src="/sbmp-services-hero.jpg"
                alt="SBMP Digital Marketing Services - SEO, Social Media, Content Strategy for UK Businesses"
                width={600}
                height={400}
                quality={85}
                priority={false}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                color: "#E2E8F0",
              }}
            >
              Core Services
            </h3>
            <ul className="space-y-3">
              {["Local SEO Optimization", "Social Media Management", "Content Strategy & Creation"].map((service) => (
                <li key={service} className="flex items-start gap-2">
                  <span style={{ color: "#4F8EF7" }} className="font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  <span style={{ color: "#E2E8F0" }} className="text-base font-medium">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Value Proposition */}
          <div className="flex flex-col">
            <div
              className="rounded-3xl overflow-hidden mb-6 flex-1 shadow-xl"
              style={{
                border: "1px solid rgba(79,142,247,0.2)",
                boxShadow: "0 8px 32px rgba(79,142,247,0.15)",
              }}
            >
              <Image
                src="/sbmp-value-proposition.jpg"
                alt="SBMP Professional Marketing Strategy - Your Growth, Our Strategy"
                width={600}
                height={400}
                quality={85}
                priority={false}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                color: "#E2E8F0",
              }}
            >
              Why SBMP
            </h3>
            <ul className="space-y-3">
              {["Expert-led, personalized strategies", "30-90 day results guarantee", "Direct access to me, not junior staff"].map((reason) => (
                <li key={reason} className="flex items-start gap-2">
                  <span style={{ color: "#4F8EF7" }} className="font-bold text-lg mt-0.5">
                    ✓
                  </span>
                  <span style={{ color: "#E2E8F0" }} className="text-base font-medium">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p
            className="text-base sm:text-lg mb-6"
            style={{ color: "#8B9CB8" }}
          >
            Ready to transform your local marketing presence?
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
            style={{
              backgroundColor: "#4F8EF7",
              boxShadow: "0 4px 24px rgba(79,142,247,0.3)",
            }}
          >
            Get Your Free Audit Worth £299
          </Link>
        </div>
      </div>

      {/* Structured Data for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Local Digital Marketing & SEO Services",
            provider: {
              "@type": "LocalBusiness",
              name: "SBMP — Small Business Marketing Professional",
              image: "/sbmp-logo.png",
            },
            description: "Expert local SEO, social media management, and content strategy for UK service businesses",
            areaServed: "GB",
            serviceType: ["Local SEO", "Digital Marketing", "Social Media Management", "Content Strategy"],
          }),
        }}
      />
    </section>
  );
}
