"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
  return (
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
                backgroundColor: "rgba(79,142,247,0.12)",
                border: "1px solid rgba(79,142,247,0.3)",
                color: "#4F8EF7",
              }}
            >
              🇬🇧 Trusted by 150+ UK Businesses
            </div>

            {/* H1 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                color: "#E2E8F0",
                lineHeight: "1.1",
              }}
            >
              Get More Customers For Your{" "}
              <RotatingText items={rotatingIndustries} />{" "}
              Business in{" "}
              <RotatingText items={rotatingCities} />
            </h1>

            {/* Subheading */}
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#8B9CB8" }}>
              I help UK service businesses dominate Google, get more calls, and grow revenue —
              without agency-level fees.
            </p>

            {/* Trust bullets */}
            <ul className="space-y-3 mb-8">
              {[
                "Results in 30–90 Days Guaranteed",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span style={{ color: "#22C55E", fontSize: "1.125rem" }}>✅</span>
                  <span className="font-medium" style={{ color: "#E2E8F0" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: "#22C55E" }}
              >
                💬 WhatsApp Me Now
              </a>
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get FREE Audit →
              </Link>
            </div>

            {/* Social proof */}
            <p className="text-sm" style={{ color: "#8B9CB8" }}>
              ⭐⭐⭐⭐⭐{" "}
              <span className="font-semibold" style={{ color: "#FBBF24" }}>4.9/5</span>
              {" "}from 127 UK business owners
            </p>
          </div>

          {/* RIGHT COLUMN - Floating Card Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="animate-float w-full max-w-sm"
              style={{ filter: "drop-shadow(0 20px 60px rgba(79,142,247,0.15))" }}
            >
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="font-semibold text-sm" style={{ color: "#E2E8F0" }}>
                      Google Rankings
                    </div>
                    <div className="text-xs" style={{ color: "#8B9CB8" }}>
                      Your local search performance
                    </div>
                  </div>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(79,142,247,0.15)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4F8EF7" strokeWidth="2.5">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                </div>

                {/* Bar chart */}
                <div className="flex items-end gap-2 mb-5 h-28">
                  {[35, 52, 48, 65, 70, 80, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-md transition-all"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i === 6 ? "#4F8EF7" : "rgba(255,255,255,0.06)",
                          boxShadow: i === 6 ? "0 0 12px rgba(79,142,247,0.5)" : "none",
                        }}
                      />
                      {i === 6 && (
                        <span className="text-xs font-bold" style={{ color: "#4F8EF7" }}>
                          Now
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Position #1 */}
                <div
                  className="flex items-center justify-between p-3 rounded-xl mb-3"
                  style={{ backgroundColor: "rgba(34,197,94,0.10)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🏆</span>
                    <span className="text-sm font-semibold" style={{ color: "#E2E8F0" }}>
                      Your Business
                    </span>
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full text-white"
                    style={{ backgroundColor: "#22C55E" }}
                  >
                    #1 Position
                  </span>
                </div>

                {/* Stat */}
                <div
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{ backgroundColor: "rgba(34,197,94,0.08)" }}
                >
                  <span className="text-sm font-semibold" style={{ color: "#22C55E" }}>
                    +247% more calls this month
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#22C55E">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>

                {/* Live badge */}
                <div className="flex items-center gap-2 mt-4">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: "#22C55E",
                      animation: "pulse 2s infinite",
                      boxShadow: "0 0 0 4px rgba(34,197,94,0.2)",
                    }}
                  />
                  <span className="text-xs font-medium" style={{ color: "#8B9CB8" }}>
                    Live Results
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
