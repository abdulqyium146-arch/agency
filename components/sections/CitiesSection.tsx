"use client";

import Link from "next/link";

const cities = [
  "Birmingham",
  "Manchester",
  "Leeds",
  "Sheffield",
  "Bristol",
  "Leicester",
  "Nottingham",
  "Liverpool",
  "Newcastle",
  "Cardiff",
  "Edinburgh",
  "Glasgow",
  "Brighton",
  "Southampton",
  "Coventry",
  "Hull",
  "Derby",
  "Stoke",
  "Preston",
  "Oxford",
];

export default function CitiesSection() {
  return (
    <section id="locations" style={{ backgroundColor: "#080D1A" }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            Serving Service Businesses Across the UK
          </h2>
          <p className="text-lg" style={{ color: "#8B9CB8" }}>
            Local expertise in every major UK city and town.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/locations/${city.toLowerCase()}`}
              className="px-5 py-2.5 rounded-full border font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                backgroundColor: "#111E33",
                color: "#8B9CB8",
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget;
                t.style.backgroundColor = "#4F8EF7";
                t.style.color = "#FFFFFF";
                t.style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget;
                t.style.backgroundColor = "#111E33";
                t.style.color = "#8B9CB8";
                t.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
