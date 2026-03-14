"use client";

export default function DMComparison() {
  const rows = [
    { feature: "Professional Setup & Strategy", diy: "❌", agency: "❌", sbmp: "✓" },
    { feature: "Dedicated Expert", diy: "❌", agency: "Often Junior Staff", sbmp: "✓ (Directly)" },
    { feature: "Monthly Optimization", diy: "❌", agency: "Varies", sbmp: "✓" },
    { feature: "Transparent Reporting", diy: "❌", agency: "Often Vague", sbmp: "✓ Weekly" },
    { feature: "No Long Contracts", diy: "✓", agency: "❌", sbmp: "✓" },
    { feature: "Affordable Pricing", diy: "Free (Your Time)", agency: "£500-2000+", sbmp: "From £199" },
    { feature: "Results in 30-90 Days", diy: "Unlikely", agency: "Varies", sbmp: "✓ Guaranteed" },
    { feature: "Quick Response Support", diy: "❌", agency: "24-48 hours", sbmp: "✓ Same Day" },
    { feature: "Multiple Services", diy: "Limited", agency: "✓", sbmp: "✓ All Included" },
    { feature: "ROI Tracking", diy: "Difficult", agency: "Basic", sbmp: "✓ Detailed" },
  ];

  return (
    <section style={{ backgroundColor: "#0D1627" }} className="py-12 md:py-16">
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
            DIY vs. Agency vs. SBMP
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "#8B9CB8" }}
          >
            See why more small businesses are choosing expert digital marketing partners.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: "rgba(79, 142, 247, 0.1)" }}>
                <th className="p-4 text-left font-semibold" style={{ color: "#E2E8F0" }}>
                  Feature
                </th>
                <th className="p-4 text-center font-semibold" style={{ color: "#8B9CB8" }}>
                  DIY
                </th>
                <th className="p-4 text-center font-semibold" style={{ color: "#8B9CB8" }}>
                  Other Agencies
                </th>
                <th className="p-4 text-center font-semibold" style={{ color: "#4F8EF7" }}>
                  SBMP
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    backgroundColor: idx % 2 === 0 ? "transparent" : "rgba(255, 255, 255, 0.02)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <td className="p-4" style={{ color: "#E2E8F0" }}>
                    {row.feature}
                  </td>
                  <td className="p-4 text-center" style={{ color: "#8B9CB8" }}>
                    {row.diy}
                  </td>
                  <td className="p-4 text-center" style={{ color: "#8B9CB8" }}>
                    {row.agency}
                  </td>
                  <td
                    className="p-4 text-center font-semibold"
                    style={{ color: "#22C55E" }}
                  >
                    {row.sbmp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 md:mt-16 p-8 rounded-2xl text-center"
          style={{
            backgroundColor: "rgba(34, 197, 94, 0.08)",
            border: "2px solid rgba(34, 197, 94, 0.3)",
          }}
        >
          <h3
            className="text-2xl font-semibold mb-3"
            style={{ color: "#E2E8F0" }}
          >
            Ready to Stop Spinning Your Wheels?
          </h3>
          <p
            className="mb-6 max-w-2xl mx-auto"
            style={{ color: "#8B9CB8" }}
          >
            Get expert digital marketing that actually delivers results. No guessing, no contracts, no fluff—just proven strategies tailored to your small business.
          </p>
          <a
            href="/free-audit"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            style={{
              backgroundColor: "#22C55E",
              color: "#FFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#16A34A";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#22C55E";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Your Free Audit Now
          </a>
        </div>
      </div>
    </section>
  );
}
