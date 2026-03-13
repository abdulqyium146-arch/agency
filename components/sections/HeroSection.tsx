"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const rotatingIndustries = ["Plumbing", "Dental", "Legal", "Cleaning", "Building"];
const rotatingCities = ["Birmingham", "Manchester", "Leeds", "Bristol"];

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

function RotatingText({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <span
      className="inline-block transition-all duration-300"
      style={{
        color: "#4F8EF7",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
      }}
    >
      {items[index]}
    </span>
  );
}

export default function HeroSection() {
  // E-A-T Schema for Google
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Digital Marketing Expert - SBMP",
    jobTitle: "Digital Marketing Expert, Local SEO Specialist, AEO Expert",
    image: "/owner-profile.jpg",
    description: "5 years of focused digital marketing expertise helping UK, USA & Australian service businesses dominate Google and get more customers",
    url: "https://smallbusinessmarketingprofessional.com",
    sameAs: [
      "https://www.linkedin.com/in/sbmp",
      "https://www.facebook.com/sbmp",
    ],
    affiliation: {
      "@type": "Organization",
      name: "SBMP — Small Business Marketing Professional",
    },
    knowsAbout: [
      "Local SEO",
      "Digital Marketing",
      "Google Business Profile",
      "AEO (Answer Engine Optimization)",
      "Social Media Marketing",
      "Content Strategy",
    ],
  };

  return (
    <>
      {/* E-A-T Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <section
        className="py-16 md:py-24 overflow-hidden dot-grid"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.18) 0%, transparent 70%), #080D1A",
        }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(251,191,36,0.12)",
                border: "1px solid rgba(251,191,36,0.3)",
                color: "#FBBF24",
              }}
            >
              ━ SMALL BUSINESS MARKETING PROFESSIONAL
            </div>

            {/* H1 */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-8"
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                color: "#E2E8F0",
                lineHeight: "1.1",
              }}
            >
              Get More Customers —{" "}
              <span style={{ color: "#FBBF24" }}>Without Paying Agency Fees</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8B9CB8" }}>
              I'm a digital marketing expert with 5 years of focused results, helping service businesses across the UK, USA & Australia dominate Google, get more calls, and grow revenue — directly, personally, affordably.
            </p>

            {/* Guarantee Box */}
            <div
              className="flex items-center gap-4 px-6 py-4 rounded-2xl mb-8"
              style={{
                backgroundColor: "rgba(251,191,36,0.08)",
                border: "2px solid rgba(251,191,36,0.3)",
              }}
            >
              <span style={{ color: "#FBBF24", fontSize: "1.5rem" }}>✓</span>
              <span
                className="text-base font-semibold leading-relaxed"
                style={{ color: "#E2E8F0" }}
              >
                <span style={{ color: "#FBBF24" }}>Results guaranteed in 30–90 days</span>
                {" "}— or I fix it for free
              </span>
            </div>

            {/* CTA Section */}
            <div className="mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg text-lg"
                style={{ backgroundColor: "#22C55E" }}
              >
                💬 WhatsApp Me Now
              </a>
              <p className="text-sm mt-2 ml-3" style={{ color: "#8B9CB8" }}>
                <span style={{ color: "#FBBF24" }}>I reply same day</span>
              </p>
            </div>

            {/* Location Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {[
                { flag: "🇬🇧", country: "UK", count: "20+ businesses" },
                { flag: "🇺🇸", country: "USA", count: "20+ businesses" },
                { flag: "🇨🇦", country: "Canada", count: "20+ businesses" },
                { flag: "🇦🇺", country: "Australia", count: "20+ businesses" },
              ].map((location) => (
                <div
                  key={location.country}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: "rgba(79,142,247,0.08)",
                    border: "1px solid rgba(79,142,247,0.2)",
                  }}
                >
                  <span className="text-2xl">{location.flag}</span>
                  <div>
                    <div style={{ color: "#E2E8F0" }} className="font-semibold text-sm">
                      {location.country}
                    </div>
                    <div style={{ color: "#FBBF24" }} className="font-bold text-xs">
                      {location.count}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Professional Profile with EAT Signals */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="animate-float w-full max-w-sm"
              style={{ filter: "drop-shadow(0 30px 80px rgba(79,142,247,0.2))" }}
            >
              {/* Profile Card */}
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: "#0D1627",
                  border: "2px solid rgba(79,142,247,0.3)",
                  boxShadow: "0 12px 60px rgba(0,0,0,0.5)",
                }}
              >
                {/* Profile Image */}
                <div className="relative h-80 w-full overflow-hidden bg-gradient-to-b from-[#4F8EF7]/20 to-[#0D1627]">
                  <Image
                    src="/owner-profile.jpg"
                    alt="Digital Marketing Expert - Local SEO & AEO Specialist"
                    width={500}
                    height={600}
                    quality={90}
                    priority
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(13,22,39,0.8), transparent)",
                    }}
                  />
                </div>

                {/* Profile Content */}
                <div className="px-6 py-8">
                  {/* Name & Title */}
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-display, sans-serif)",
                      color: "#E2E8F0",
                    }}
                  >
                    Your Digital Marketing Expert
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "#8B9CB8" }}>
                    Owner & Founder, SBMP
                  </p>

                  {/* Expertise Badges - EAT Signals */}
                  <div className="space-y-3 mb-6">
                    {[
                      { icon: "📊", text: "Digital Marketing Expert" },
                      { icon: "🔍", text: "Local SEO Specialist" },
                      { icon: "⚡", text: "AEO Expert" },
                      { icon: "💬", text: "Social Media Strategist" },
                    ].map((badge) => (
                      <div
                        key={badge.text}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl"
                        style={{
                          backgroundColor: "rgba(79,142,247,0.08)",
                          border: "1px solid rgba(79,142,247,0.2)",
                        }}
                      >
                        <span className="text-lg">{badge.icon}</span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "#E2E8F0" }}
                        >
                          {badge.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Trust Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="text-center">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: "#4F8EF7" }}
                      >
                        5
                      </div>
                      <div className="text-xs mt-1" style={{ color: "#8B9CB8" }}>
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: "#22C55E" }}
                      >
                        150+
                      </div>
                      <div className="text-xs mt-1" style={{ color: "#8B9CB8" }}>
                        Clients Helped
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
