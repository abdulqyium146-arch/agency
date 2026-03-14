"use client";

const clients = [
  {
    name: "Key2bh Auto Locksmith",
    description: "Automotive locksmith services",
    icon: "🔐",
  },
  {
    name: "SRV Detailing",
    description: "Professional car detailing",
    icon: "🚗",
  },
  {
    name: "RRM External Cleaning Specialist",
    description: "Commercial cleaning services",
    icon: "✨",
  },
  {
    name: "Warrington Car Detailing",
    description: "Premium vehicle detailing",
    icon: "🌟",
  },
  {
    name: "KJS Supreme Pressure Washing",
    description: "Professional pressure washing (USA)",
    icon: "💨",
  },
  {
    name: "Central FL Mobile Home Leveling",
    description: "Mobile home services (Florida)",
    icon: "🏠",
  },
];

export default function TrustedClientsSection() {
  return (
    <section
      style={{
        backgroundColor: "#0F172A",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
              lineHeight: "1.2",
            }}
          >
            Trusted by Leading UK & US Businesses
          </h2>
          <p
            className="text-sm md:text-base max-w-2xl mx-auto"
            style={{ color: "#8B9CB8" }}
          >
            We've helped service businesses across industries rank higher on Google and attract more customers.
          </p>
        </div>

        {/* Clients Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative p-5 md:p-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#0D1627",
                border: "1px solid rgba(79, 142, 247, 0.15)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(79, 142, 247, 0.4)";
                e.currentTarget.style.backgroundColor = "#111D2D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(79, 142, 247, 0.15)";
                e.currentTarget.style.backgroundColor = "#0D1627";
              }}
            >
              {/* Icon */}
              <div className="mb-3 text-3xl md:text-4xl">{client.icon}</div>

              {/* Company Name */}
              <h3
                className="font-semibold text-sm md:text-base mb-1.5 line-clamp-2"
                style={{ color: "#E2E8F0" }}
              >
                {client.name}
              </h3>

              {/* Description */}
              <p
                className="text-xs md:text-sm line-clamp-2"
                style={{ color: "#8B9CB8" }}
              >
                {client.description}
              </p>

              {/* Accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#4F8EF7] to-transparent rounded-full transition-all duration-300"
                style={{
                  width: "0%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.parentElement &&
                    (e.currentTarget.style.width = "100%");
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.width = "0%";
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-10 md:mt-14 p-6 md:p-8 rounded-2xl text-center"
          style={{
            backgroundColor: "rgba(79, 142, 247, 0.08)",
            border: "1px solid rgba(79, 142, 247, 0.2)",
          }}
        >
          <p
            className="text-sm md:text-base mb-4"
            style={{ color: "#E2E8F0" }}
          >
            Your business could be next. Join 150+ successful companies we've helped grow.
          </p>
          <a
            href="/free-audit"
            className="inline-block px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 hover:shadow-lg"
            style={{
              backgroundColor: "#4F8EF7",
              color: "#FFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#3B82F6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4F8EF7";
            }}
          >
            Get Your Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
