import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

interface IndustryData {
  name: string;
  icon: string;
  plural: string;
  searchTerm: string;
}

const industries: Record<string, IndustryData> = {
  plumbers: { name: "Plumbers", icon: "🔧", plural: "Plumbing Businesses", searchTerm: "plumber near me" },
  electricians: { name: "Electricians", icon: "⚡", plural: "Electrical Businesses", searchTerm: "electrician near me" },
  dentists: { name: "Dentists", icon: "🦷", plural: "Dental Practices", searchTerm: "dentist near me" },
  solicitors: { name: "Solicitors", icon: "⚖️", plural: "Solicitor Firms", searchTerm: "solicitor near me" },
  "estate-agents": { name: "Estate Agents", icon: "🏠", plural: "Estate Agent Businesses", searchTerm: "estate agent near me" },
  cleaners: { name: "Cleaners", icon: "🧹", plural: "Cleaning Businesses", searchTerm: "cleaner near me" },
  builders: { name: "Builders", icon: "🏗️", plural: "Building Businesses", searchTerm: "builder near me" },
  landscapers: { name: "Landscapers", icon: "🌿", plural: "Landscaping Businesses", searchTerm: "landscaper near me" },
  "driving-schools": { name: "Driving Schools", icon: "🚗", plural: "Driving Schools", searchTerm: "driving school near me" },
  physiotherapists: { name: "Physiotherapists", icon: "💊", plural: "Physiotherapy Practices", searchTerm: "physiotherapist near me" },
  locksmiths: { name: "Locksmiths", icon: "🔐", plural: "Locksmith Businesses", searchTerm: "locksmith near me" },
  accountants: { name: "Accountants", icon: "💼", plural: "Accounting Firms", searchTerm: "accountant near me" },
  "car-detailing": { name: "Car Detailing", icon: "✨", plural: "Car Detailing Businesses", searchTerm: "car detailing near me" },
  "car-valeting": { name: "Car Valeting", icon: "🚘", plural: "Car Valeting Businesses", searchTerm: "car valeting near me" },
  "auto-locksmiths": { name: "Auto Locksmiths", icon: "🔑", plural: "Auto Locksmith Businesses", searchTerm: "auto locksmith near me" },
  "car-locksmiths": { name: "Car Locksmiths", icon: "🚪", plural: "Car Locksmith Businesses", searchTerm: "car locksmith near me" },
  "home-locksmiths": { name: "Home Locksmiths", icon: "🏡", plural: "Home Locksmith Businesses", searchTerm: "home locksmith near me" },
  "gutter-cleaning": { name: "Gutter Cleaning", icon: "🌧️", plural: "Gutter Cleaning Businesses", searchTerm: "gutter cleaning near me" },
  "jet-washing": { name: "Jet Washing", icon: "💦", plural: "Jet Washing Businesses", searchTerm: "jet washing near me" },
};

const plans = [
  {
    name: "Starter",
    price: "£199",
    period: "/month",
    color: "#4F8EF7",
    features: ["Local SEO basics", "Google Business Profile", "Monthly report"],
  },
  {
    name: "Growth",
    price: "£349",
    period: "/month",
    color: "#22C55E",
    badge: "Most Popular",
    features: ["Full local SEO", "Google Ads management", "Reputation management", "Bi-weekly reports"],
  },
  {
    name: "Pro",
    price: "£599",
    period: "/month",
    color: "#4F8EF7",
    features: ["Everything in Growth", "Custom website", "Social media", "Priority support"],
  },
];

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) return {};
  return {
    title: `Local SEO & Digital Marketing for ${industry.name} | UK Expert`,
    description: `Expert local digital marketing for UK ${industry.plural}. Get more customers searching '${industry.searchTerm}'. Page 1 results in 30–90 days. Free audit.`,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) notFound();

  // Singular name (remove trailing s or use name directly)
  const singularName = industry.name.endsWith("s") && industry.name !== "Driving Schools"
    ? industry.name.slice(0, -1)
    : industry.name;

  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      {/* Hero */}
      <section
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.18) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-5">{industry.icon}</div>
          <h1
            className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Local Digital Marketing for UK {industry.name}
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10" style={{ color: "#8B9CB8" }}>
            I help {industry.plural} across the UK rank #1 on Google, get more calls, and grow revenue. Deep industry knowledge means faster, better results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get Free Audit →
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#22C55E" }}
            >
              💬 WhatsApp Me
            </a>
          </div>
        </div>
      </section>

      {/* What businesses need online */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              What {industry.name} Businesses Need Online
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              I&apos;ve worked with {industry.plural} across the UK — I know exactly what it takes to win online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                title: "Page 1 Rankings",
                desc: `When someone searches '${industry.searchTerm}', your business needs to appear at the top. I know exactly what Google wants for ${singularName.toLowerCase()} businesses.`,
              },
              {
                icon: "📞",
                title: "More Local Calls",
                desc: `Every day you're not on page 1, customers are calling your competitors. I change that — typically within 30–90 days.`,
              },
              {
                icon: "⭐",
                title: "Trust & Reviews",
                desc: `Customers choosing a ${singularName.toLowerCase()} need to trust you first. I build your online reputation to make that decision easy.`,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-8 transition-all hover:-translate-y-1 card-hover-blue"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep industry knowledge */}
      <section style={{ backgroundColor: "#050A14" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-5"
                style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
              >
                Deep {industry.name} Knowledge = Better Results
              </h2>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "#8B9CB8" }}>
                I&apos;ve worked with {industry.plural} across the UK since 2004. I understand your customer&apos;s search behaviour, your local competition, and exactly what it takes to win the top Google ranking in your area.
              </p>
              <ul className="space-y-4">
                {[
                  `I know the exact search terms ${industry.plural} need to rank for`,
                  `I understand the seasonal demand patterns in your industry`,
                  `I know what your competitors are doing — and how to beat them`,
                  `I've refined strategies specifically for ${industry.plural} over 20 years`,
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-0.5"
                      style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22C55E" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm" style={{ color: "#8B9CB8" }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{industry.icon}</div>
                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-display, sans-serif)", color: "#4F8EF7", textShadow: "0 0 30px rgba(79,142,247,0.5)" }}
                >
                  20+ Years
                </div>
                <div style={{ color: "#8B9CB8" }}>Marketing {industry.plural} across the UK</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "150+", label: "Businesses ranked" },
                  { value: "Page 1", label: "In 30–90 days" },
                  { value: "£100k+", label: "Revenue generated" },
                  { value: "4.9★", label: "Client satisfaction" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div
                      className="text-2xl font-extrabold mb-1"
                      style={{ fontFamily: "var(--font-display, sans-serif)", color: "#4F8EF7" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs" style={{ color: "#8B9CB8" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Simple, Transparent Pricing
            </h2>
            <p style={{ color: "#8B9CB8" }}>No contracts. No surprises. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-7 flex flex-col transition-all hover:-translate-y-1 card-hover-blue"
                style={{
                  backgroundColor: "#111E33",
                  border: plan.badge
                    ? `2px solid rgba(34,197,94,0.40)`
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: plan.badge
                    ? "0 0 40px rgba(34,197,94,0.08)"
                    : "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                {plan.badge && (
                  <div
                    className="text-xs font-semibold px-3 py-1 rounded-full text-center mb-4 w-fit mx-auto"
                    style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.30)" }}
                  >
                    {plan.badge}
                  </div>
                )}
                <div className="text-lg font-bold mb-2" style={{ color: "#E2E8F0" }}>
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-5">
                  <span
                    className="text-3xl font-extrabold"
                    style={{ fontFamily: "var(--font-display, sans-serif)", color: plan.color }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "#8B9CB8" }}>{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                      <span style={{ color: "#22C55E" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#pricing"
                  className="w-full flex justify-center py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: plan.badge ? "rgba(34,197,94,0.15)" : "rgba(79,142,247,0.10)",
                    color: plan.badge ? "#22C55E" : "#4F8EF7",
                    border: plan.badge ? "1px solid rgba(34,197,94,0.30)" : "1px solid rgba(79,142,247,0.20)",
                  }}
                >
                  View Full Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24"
        style={{
          background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,142,247,0.10) 0%, #080D1A 70%)",
          borderTop: "1px solid rgba(79,142,247,0.20)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="gradient-text text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Ready to grow your {singularName.toLowerCase()} business?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Join hundreds of UK {industry.plural} growing with expert local digital marketing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get My FREE Audit →
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#22C55E" }}
            >
              💬 WhatsApp Me Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
