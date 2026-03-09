const points = [
  "You talk directly to ME — not a junior account manager",
  "I've ranked businesses in 20+ UK cities since 2004",
  "Affordable pricing — from just £199/month",
  "I work with YOUR industry — I know what gets results",
];

const comparison = [
  { feature: "Monthly Cost", agency: "£2,000+", me: "From £199" },
  { feature: "Contract", agency: "12 months", me: "Month-to-month" },
  { feature: "Who you talk to", agency: "Junior staff", me: "Expert direct" },
  { feature: "Results time", agency: "6-12 months", me: "30-90 days" },
];

export default function WhyChooseMeSection() {
  return (
    <section style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-8"
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                color: "#E2E8F0",
              }}
            >
              Why Local Business Owners Choose Me Over Big Agencies
            </h2>
            <ul className="space-y-5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5" style={{ color: "#22C55E" }}>✅</span>
                  <span className="text-base font-medium leading-relaxed" style={{ color: "#E2E8F0" }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Comparison Table */}
          <div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Header */}
              <div className="grid grid-cols-3 text-sm font-semibold">
                <div
                  className="p-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#8B9CB8" }}
                >
                  Feature
                </div>
                <div
                  className="p-4 text-center"
                  style={{ backgroundColor: "#111E33", color: "#8B9CB8" }}
                >
                  Big Agency
                </div>
                <div
                  className="p-4 text-center"
                  style={{ backgroundColor: "rgba(79,142,247,0.12)", color: "#4F8EF7" }}
                >
                  Me ✅
                </div>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 text-sm border-t"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    backgroundColor: i % 2 === 0 ? "#111E33" : "#0D1627",
                  }}
                >
                  <div className="p-4 font-medium" style={{ color: "#E2E8F0" }}>
                    {row.feature}
                  </div>
                  <div className="p-4 text-center" style={{ color: "#8B9CB8" }}>
                    {row.agency}
                  </div>
                  <div
                    className="p-4 text-center font-semibold"
                    style={{ color: "#4F8EF7", backgroundColor: "rgba(79,142,247,0.08)" }}
                  >
                    {row.me}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
