"use client";

import Link from "next/link";

const industries = [
  { icon: "🔧", name: "Plumbers", slug: "plumbers" },
  { icon: "⚡", name: "Electricians", slug: "electricians" },
  { icon: "🦷", name: "Dentists", slug: "dentists" },
  { icon: "⚖️", name: "Solicitors", slug: "solicitors" },
  { icon: "🏠", name: "Estate Agents", slug: "estate-agents" },
  { icon: "🧹", name: "Cleaners", slug: "cleaners" },
  { icon: "🏗️", name: "Builders", slug: "builders" },
  { icon: "🌿", name: "Landscapers", slug: "landscapers" },
  { icon: "🚗", name: "Driving Schools", slug: "driving-schools" },
  { icon: "💊", name: "Physiotherapists", slug: "physiotherapists" },
  { icon: "🔐", name: "Locksmiths", slug: "locksmiths" },
  { icon: "💼", name: "Accountants", slug: "accountants" },
  { icon: "✨", name: "Car Detailing", slug: "car-detailing" },
  { icon: "🚘", name: "Car Valeting", slug: "car-valeting" },
  { icon: "🔑", name: "Auto Locksmiths", slug: "auto-locksmiths" },
  { icon: "🚪", name: "Car Locksmiths", slug: "car-locksmiths" },
  { icon: "🏡", name: "Home Locksmiths", slug: "home-locksmiths" },
  { icon: "🌧️", name: "Gutter Cleaning", slug: "gutter-cleaning" },
  { icon: "💦", name: "Jet Washing", slug: "jet-washing" },
];

export default function IndustriesSection() {
  return (
    <section id="industries" style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            I Specialise in These UK Service Industries
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8B9CB8" }}>
            Deep industry knowledge means faster results for your specific business.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 group"
              style={{
                backgroundColor: "#111E33",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(79,142,247,0.35)";
                e.currentTarget.style.backgroundColor = "#16253F";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.backgroundColor = "#111E33";
              }}
            >
              <span className="text-4xl">{industry.icon}</span>
              <span
                className="font-semibold text-sm text-center transition-colors group-hover:text-blue-400"
                style={{ color: "#E2E8F0" }}
              >
                {industry.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
