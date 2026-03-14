import Link from "next/link";

const services = [
  {
    icon: "📍",
    iconBg: "rgba(79,142,247,0.12)",
    title: "Local SEO & Google Rankings",
    description:
      "Get your business to Page 1 of Google when customers in your area search for your services.",
    tags: ["Google Business Profile", "Maps Ranking", "Local Citations"],
    href: "/services/local-seo",
  },
  {
    icon: "💻",
    iconBg: "rgba(79,142,247,0.12)",
    title: "High-Converting Websites",
    description:
      "Professional websites built to turn visitors into paying customers — mobile-first, fast, and SEO-ready.",
    tags: ["Mobile First", "Fast Loading", "Lead Capture"],
    href: "/services/web-design",
  },
  {
    icon: "📱",
    iconBg: "rgba(79,142,247,0.12)",
    title: "Social Media Marketing",
    description:
      "Grow your audience and generate leads with strategic social media content and advertising campaigns.",
    tags: ["Facebook", "Instagram", "Content Creation"],
    href: "/services/social-media",
  },
  {
    icon: "🎯",
    iconBg: "rgba(79,142,247,0.12)",
    title: "Google Ads & PPC",
    description:
      "Appear at the very top of Google instantly with targeted pay-per-click campaigns that deliver real ROI.",
    tags: ["Instant Traffic", "ROI Focused", "No Wasted Budget"],
    href: "/services/google-ads",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ backgroundColor: "#080D1A" }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            Everything Your Business Needs to Dominate Locally
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8B9CB8" }}>
            A complete digital marketing solution tailored for UK service businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 border card-hover-blue"
              style={{
                backgroundColor: "#111E33",
                borderColor: "rgba(255,255,255,0.08)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: service.iconBg }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "#E2E8F0" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#8B9CB8" }}>
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ backgroundColor: "rgba(79,142,247,0.10)", color: "#4F8EF7" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={service.href}
                className="text-sm font-semibold transition-colors hover:underline"
                style={{ color: "#4F8EF7" }}
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Link to Digital Marketing Overview */}
        <div
          className="mt-12 p-6 rounded-xl text-center"
          style={{
            backgroundColor: "rgba(79, 142, 247, 0.08)",
            border: "1px solid rgba(79, 142, 247, 0.2)",
          }}
        >
          <p className="text-sm" style={{ color: "#8B9CB8" }}>
            Want to understand how these services work together?
          </p>
          <Link
            href="/digital-marketing-for-small-business"
            className="inline-block text-base font-semibold mt-2 transition-colors hover:underline"
            style={{ color: "#4F8EF7" }}
          >
            Explore Our Digital Marketing Approach →
          </Link>
        </div>
      </div>
    </section>
  );
}
