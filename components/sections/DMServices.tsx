"use client";

import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Local SEO for Small Business",
    icon: "🔍",
    description:
      "Get your business found on Google when customers search for your services in your city. Local SEO is the fastest way for small businesses to attract qualified leads from local customers.",
    benefits: [
      "Rank on page 1 of Google in 30-90 days",
      "Attract qualified local customers actively searching for your services",
      "Build trust with authentic reviews and ratings",
      "Zero cost per click (unlike Google Ads)",
      "Long-term sustainable growth",
    ],
    details:
      "Local SEO optimizes your Google Business Profile, website, and local citations so your small business appears when customers search. We focus on your specific city and service area, ensuring high-intent customers find you first.",
  },
  {
    id: 2,
    title: "Google Ads Management",
    icon: "💰",
    description:
      "Instantly appear at the top of Google search results with Google Ads. Perfect for small businesses wanting immediate visibility and predictable customer acquisition.",
    benefits: [
      "Appear above organic results for high-intent keywords",
      "Pay only when someone clicks your ad",
      "Detailed tracking of every conversion",
      "Flexible budget control",
      "Quick scaling as your business grows",
    ],
    details:
      "We manage your Google Ads campaigns to ensure maximum ROI. Every pound is tracked, optimized, and measured. Our goal is sustainable growth—not just clicks.",
  },
  {
    id: 3,
    title: "Website Design & Development",
    icon: "🌐",
    description:
      "A professional website is your digital storefront. We build fast, mobile-friendly websites designed to convert visitors into customers.",
    benefits: [
      "Mobile-first design (90% of users browse on phones)",
      "Fast loading speeds (under 2 seconds)",
      "Clear call-to-actions that drive conversions",
      "SEO-optimized structure from day one",
      "Easy to update and manage",
    ],
    details:
      "Your website is your most important marketing asset. We design websites that look professional, load fast, and convert visitors into customers. Every element is optimized for results.",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    icon: "📱",
    description:
      "Engage your audience on Facebook, Instagram, and LinkedIn. Social media is where your customers spend time—we help you reach and convert them there.",
    benefits: [
      "Build community around your brand",
      "Regular engagement with ideal customers",
      "Affordable ad targeting options",
      "Increase brand awareness in your local area",
      "Generate word-of-mouth referrals",
    ],
    details:
      "We create and manage engaging social content tailored to your audience. From posting schedules to paid campaigns, we handle everything so you can focus on running your business.",
  },
  {
    id: 5,
    title: "Reputation Management",
    icon: "⭐",
    description:
      "Your online reputation directly impacts customer decisions. We help you build and protect your credibility across review sites and search results.",
    benefits: [
      "Increase positive reviews on Google, Trustpilot, etc.",
      "Respond professionally to negative feedback",
      "Dominate search results with positive content",
      "Build social proof that converts strangers into customers",
      "Monitor online mentions in real-time",
    ],
    details:
      "Building a strong online reputation takes time, but it's worth it. We help you generate authentic reviews, respond to feedback, and manage your online presence.",
  },
  {
    id: 6,
    title: "Google Business Profile Optimization",
    icon: "📍",
    description:
      "Your Google Business Profile is how customers find your business on Google Maps and search results. We optimize it to attract more local customers.",
    benefits: [
      "Higher visibility on Google Maps",
      "Increased phone calls and store visits",
      "Better search result rankings",
      "Showcase photos, services, and pricing",
      "Respond to reviews and customer questions",
    ],
    details:
      "A complete Google Business Profile with photos, accurate information, and regular updates can increase local foot traffic by 30-40%. We ensure yours is optimized.",
  },
  {
    id: 7,
    title: "Content Marketing & Email",
    icon: "✉️",
    description:
      "Build lasting relationships with your customers through valuable content and email marketing. Email has a 40:1 ROI for small businesses.",
    benefits: [
      "Build email lists of interested customers",
      "Regular communication that keeps your business top-of-mind",
      "Showcase expertise and build trust",
      "Nurture leads into paying customers",
      "Recover abandoned sales opportunities",
    ],
    details:
      "We create valuable content and email campaigns that keep customers engaged and coming back. This builds long-term relationships and increases lifetime customer value.",
  },
];

export default function DMServices() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#0F172A" }} className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            Core Digital Marketing Services for Small Businesses
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "#8B9CB8" }}
          >
            We offer comprehensive digital marketing solutions to help small businesses grow. From search engine optimization to paid advertising, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl p-6 transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: "#111E33",
                border: "1px solid rgba(79, 142, 247, 0.15)",
              }}
              onClick={() =>
                setExpandedId(expandedId === service.id ? null : service.id)
              }
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(79, 142, 247, 0.4)";
                e.currentTarget.style.backgroundColor = "#131F3A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(79, 142, 247, 0.15)";
                e.currentTarget.style.backgroundColor = "#111E33";
              }}
            >
              {/* Service Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Service Title */}
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#E2E8F0" }}
              >
                {service.title}
              </h3>

              {/* Service Description */}
              <p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: "#8B9CB8" }}
              >
                {service.description}
              </p>

              {/* Expandable Benefits */}
              {expandedId === service.id && (
                <div className="mt-6 pt-6 border-t border-white/10 animate-fade-slide">
                  <h4
                    className="font-semibold mb-3"
                    style={{ color: "#E2E8F0" }}
                  >
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span style={{ color: "#22C55E" }}>✓</span>
                        <span style={{ color: "#8B9CB8" }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#8B9CB8" }}
                  >
                    <strong style={{ color: "#E2E8F0" }}>How it works:</strong>{" "}
                    {service.details}
                  </p>
                </div>
              )}

              {/* Expand indicator */}
              <div className="mt-4 text-xs" style={{ color: "#4F8EF7" }}>
                Click to {expandedId === service.id ? "collapse" : "learn more"}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 md:mt-16 p-8 rounded-2xl text-center"
          style={{
            backgroundColor: "rgba(79, 142, 247, 0.08)",
            border: "1px solid rgba(79, 142, 247, 0.2)",
          }}
        >
          <h3
            className="text-2xl font-semibold mb-3"
            style={{ color: "#E2E8F0" }}
          >
            Not Sure Which Service You Need?
          </h3>
          <p
            className="mb-6 max-w-2xl mx-auto"
            style={{ color: "#8B9CB8" }}
          >
            Get a free audit. We'll analyze your business, identify opportunities, and recommend the right digital marketing strategy for your specific goals.
          </p>
          <a
            href="/free-audit"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg"
            style={{
              backgroundColor: "#4F8EF7",
              color: "#FFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#3B82F6";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4F8EF7";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Your Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
