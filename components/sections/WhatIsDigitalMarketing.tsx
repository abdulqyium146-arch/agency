"use client";

import Link from "next/link";

export default function WhatIsDigitalMarketing() {
  return (
    <section
      style={{ backgroundColor: "#0D1627" }}
      className="py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column - Definition */}
          <div>
            <h2
              className="text-2xl md:text-3xl font-extrabold mb-4"
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                color: "#E2E8F0",
              }}
            >
              What is Digital Marketing?
            </h2>

            {/* Definition block - AEO optimized */}
            <div
              className="p-6 rounded-xl mb-6 border-l-4"
              style={{
                backgroundColor: "rgba(79, 142, 247, 0.08)",
                borderLeftColor: "#4F8EF7",
              }}
            >
              <p
                className="text-base md:text-lg leading-relaxed mb-4"
                style={{ color: "#E2E8F0" }}
              >
                <strong>Digital marketing</strong> is the practice of promoting your small business online through multiple digital channels—including search engines, social media, email, and your website. For small businesses, digital marketing is essential because it helps you reach local customers, build credibility, and compete with larger companies.
              </p>
              <p style={{ color: "#8B9CB8" }} className="text-sm">
                Unlike traditional marketing, digital marketing provides measurable results, targets specific audiences, and costs a fraction of traditional advertising. Most small businesses see a 300%+ return on investment within 90 days.
              </p>
            </div>

            {/* Why it matters */}
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: "#E2E8F0" }}
            >
              Why Small Businesses Need Digital Marketing
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                "80% of consumers search Google before buying from a local business",
                "Small businesses with digital marketing see 2-3x more leads than competitors",
                "Social media reaches 4.5+ billion people globally—many are your ideal customers",
                "Email marketing has a 40:1 ROI for small businesses",
                "Local SEO helps you dominate your competition in your city",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span style={{ color: "#22C55E" }} className="text-lg mt-0.5">
                    ✓
                  </span>
                  <span style={{ color: "#E2E8F0" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - The challenge */}
          <div>
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: "#E2E8F0" }}
            >
              The Challenge for Small Business Owners
            </h3>
            <p
              className="mb-6 leading-relaxed"
              style={{ color: "#8B9CB8" }}
            >
              Digital marketing feels overwhelming. There are dozens of platforms, endless tools, confusing jargon, and no clear path to results. Most small business owners either:
            </p>

            {/* Challenge list */}
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Try DIY & Waste Time",
                  desc: "Spend 10+ hours weekly on marketing that generates little to no results",
                },
                {
                  title: "Hire Wrong Agencies",
                  desc: "Get stuck with expensive contracts and junior staff who don't understand their business",
                },
                {
                  title: "Pay Too Much",
                  desc: "Overpay £500-1000+/month for generic services that don't drive real growth",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border-l-4"
                  style={{
                    backgroundColor: "rgba(255, 0, 0, 0.05)",
                    borderLeftColor: "#FB923C",
                  }}
                >
                  <h4
                    className="font-semibold mb-1"
                    style={{ color: "#E2E8F0" }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ color: "#8B9CB8" }} className="text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Solution teaser */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "rgba(34, 197, 94, 0.08)",
                border: "1px solid rgba(34, 197, 94, 0.2)",
              }}
            >
              <h4
                className="font-semibold mb-2"
                style={{ color: "#22C55E" }}
              >
                The Better Way
              </h4>
              <p style={{ color: "#E2E8F0" }} className="text-sm">
                Partner with an expert who knows digital marketing inside-out, handles everything for you, and charges affordably. That's where we come in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
