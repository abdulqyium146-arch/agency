"use client";

export default function DMBenefits() {
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
            Real Results for Small Businesses
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "#8B9CB8" }}
          >
            See what digital marketing has done for businesses like yours.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {[
            { label: "Average ROI", value: "320%", icon: "📈" },
            { label: "Average Lead Increase", value: "240%", icon: "🚀" },
            { label: "Avg. Revenue Generated", value: "£2.3M+", icon: "💰" },
            { label: "Client Satisfaction", value: "4.9★", icon: "⭐" },
          ].map((metric, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl"
              style={{
                backgroundColor: "rgba(79, 142, 247, 0.08)",
                border: "1px solid rgba(79, 142, 247, 0.2)",
              }}
            >
              <div className="text-4xl mb-3">{metric.icon}</div>
              <div
                className="text-3xl md:text-4xl font-extrabold mb-2"
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  color: "#4F8EF7",
                }}
              >
                {metric.value}
              </div>
              <p style={{ color: "#8B9CB8" }} className="text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Case Study cards */}
        <div className="mb-12 md:mb-16">
          <h3
            className="text-2xl font-semibold text-center mb-8"
            style={{ color: "#E2E8F0" }}
          >
            How Our Digital Marketing Helped Real Businesses
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Auto Locksmith Business",
                challenge: "Lost leads to competitors appearing higher on Google",
                solution: "Local SEO optimization + Google Ads management",
                result: "420% increase in qualified leads, £45k new revenue in 6 months",
                metric: "420% ↑ Leads",
              },
              {
                title: "Car Detailing Service",
                challenge: "No online presence, competing with larger chains",
                solution: "Local SEO, Google Business Profile, social media",
                result: "Ranked #1 on Google, booked 60+ customers, 8-week waitlist",
                metric: "60+ New Customers",
              },
              {
                title: "Cleaning Specialist",
                challenge: "Expensive Google Ads with poor conversion",
                solution: "Website redesign + Ads optimization + reviews management",
                result: "50% lower cost per customer, 180% more bookings",
                metric: "50% Lower CPC",
              },
              {
                title: "Pressure Washing LLC (USA)",
                challenge: "Seasonal business with inconsistent revenue",
                solution: "Social media + email marketing + local SEO",
                result: "Year-round bookings, 300% revenue increase",
                metric: "300% ↑ Revenue",
              },
            ].map((study, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(79, 142, 247, 0.15)",
                }}
              >
                <h4
                  className="text-lg font-semibold mb-3"
                  style={{ color: "#E2E8F0" }}
                >
                  {study.title}
                </h4>

                <div className="space-y-3 text-sm">
                  <div>
                    <span style={{ color: "#8B9CB8" }} className="text-xs">
                      CHALLENGE
                    </span>
                    <p style={{ color: "#E2E8F0" }}>{study.challenge}</p>
                  </div>

                  <div>
                    <span style={{ color: "#8B9CB8" }} className="text-xs">
                      OUR SOLUTION
                    </span>
                    <p style={{ color: "#E2E8F0" }}>{study.solution}</p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                      style={{
                        backgroundColor: "rgba(34, 197, 94, 0.15)",
                        color: "#22C55E",
                      }}
                    >
                      {study.metric}
                    </div>
                    <p style={{ color: "#8B9CB8" }}>{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits list */}
        <div className="bg-gradient-to-r from-transparent via-blue-900/20 to-transparent rounded-2xl p-8 md:p-12">
          <h3
            className="text-2xl font-semibold text-center mb-8"
            style={{ color: "#E2E8F0" }}
          >
            Why Small Businesses Choose Digital Marketing
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "💡",
                title: "Affordable",
                desc: "Start from £199/month. No long contracts or hidden fees.",
              },
              {
                icon: "📊",
                title: "Measurable",
                desc: "Track every lead, every sale, and every pound spent.",
              },
              {
                icon: "🎯",
                title: "Targeted",
                desc: "Reach only the customers actively looking for your services.",
              },
              {
                icon: "⚡",
                title: "Fast Results",
                desc: "See meaningful improvements in 30-90 days.",
              },
              {
                icon: "🔄",
                title: "Flexible",
                desc: "Adjust your strategy monthly based on what's working.",
              },
              {
                icon: "🚀",
                title: "Scalable",
                desc: "Grow your digital marketing as your business grows.",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h4
                    className="font-semibold mb-1"
                    style={{ color: "#E2E8F0" }}
                  >
                    {benefit.title}
                  </h4>
                  <p style={{ color: "#8B9CB8" }} className="text-sm">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
