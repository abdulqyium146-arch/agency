"use client";

export default function DigitalMarketingHero() {
  return (
    <section
      style={{
        backgroundColor: "#080D1A",
        backgroundImage:
          "radial-gradient(circle at 20% 50%, rgba(79, 142, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
      }}
      className="py-12 md:py-24 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          backgroundColor: "#4F8EF7",
          transform: "translate(100px, -100px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main content */}
        <div className="text-center mb-8 md:mb-12">
          {/* Badge */}
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: "rgba(79, 142, 247, 0.15)",
              color: "#4F8EF7",
              border: "1px solid rgba(79, 142, 247, 0.3)",
            }}
          >
            Expert Digital Marketing Services
          </div>

          {/* H1 - Primary keyword */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            Digital Marketing for Small Businesses
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
            style={{ color: "#8B9CB8" }}
          >
            Proven digital marketing services that help UK small businesses attract more customers, generate leads, and grow revenue. From local SEO to Google Ads—we handle it all.
          </p>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 md:mb-12">
            <div className="flex items-center gap-2">
              <span style={{ color: "#22C55E" }} className="text-xl">
                ✓
              </span>
              <span style={{ color: "#E2E8F0" }} className="text-sm">
                150+ Businesses Helped
              </span>
            </div>
            <div className="hidden sm:block w-px h-6" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
            <div className="flex items-center gap-2">
              <span style={{ color: "#FBBF24" }} className="text-xl">
                ★
              </span>
              <span style={{ color: "#E2E8F0" }} className="text-sm">
                4.9/5 Average Rating
              </span>
            </div>
            <div className="hidden sm:block w-px h-6" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
            <div className="flex items-center gap-2">
              <span style={{ color: "#4F8EF7" }} className="text-xl">
                ⚡
              </span>
              <span style={{ color: "#E2E8F0" }} className="text-sm">
                Results in 30-90 Days
              </span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/free-audit"
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
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
              Get Your Free Audit Worth £299
            </a>
            <a
              href="https://wa.me/923474825228?text=Hi!%20I%27m%20interested%20in%20digital%20marketing%20services%20for%20my%20small%20business.%20Can%20you%20help%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border-2 w-full sm:w-auto"
              style={{
                borderColor: "#4F8EF7",
                color: "#4F8EF7",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(79, 142, 247, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Subtext */}
          <p
            className="mt-6 text-sm"
            style={{ color: "#8B9CB8" }}
          >
            No credit card required. Direct access to our expert. Free consultation included.
          </p>
        </div>

        {/* Quick stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 max-w-3xl mx-auto">
          {[
            { icon: "📈", label: "Average ROI", value: "320%" },
            { icon: "⏱️", label: "Time to Results", value: "30-90 Days" },
            { icon: "🔓", label: "No Contracts", value: "Month-to-Month" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-lg text-center"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-sm" style={{ color: "#8B9CB8" }}>
                {stat.label}
              </div>
              <div
                className="text-lg font-semibold mt-1"
                style={{ color: "#E2E8F0" }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
