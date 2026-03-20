import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  TrendingUp,
  Share2,
  Monitor,
  Star,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Users,
  Clock,
  Award,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

// ============================================================================
// CONSTANTS
// ============================================================================

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20Brighton%20business%20online.%20Can%20you%20help%3F";

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: "Digital Marketing Agency Brighton | SEO, PPC, Social Media & Web Design",
  description:
    "Brighton's top-rated digital marketing agency. Expert SEO, Google Ads, Social Media & Web Design for Brighton & Hove businesses. Get a free consultation today.",
  keywords: [
    "digital marketing agency Brighton",
    "SEO Brighton",
    "Google Ads Brighton",
    "social media marketing Brighton",
    "web design Brighton",
    "local SEO expert Brighton",
    "small business marketing Brighton",
    "local business advertising Brighton",
    "marketing companies Brighton",
    "affordable marketing agency Brighton",
    "Brighton Hove digital marketing",
    "PPC management Brighton",
    "Brighton SEO agency",
    "online marketing Brighton East Sussex",
    "small business digital agency Brighton",
    "local seo expert",
    "small business marketing",
    "small business digital agency",
    "small business advertising",
    "google advertising for small business",
    "marketing companies for small businesses",
    "local business advertising",
    "marketing agency for small business",
    "digital marketing for small business",
    "affordable marketing for small business",
    "local advertising for small business",
    "seo experts near me",
    "marketing for small business near me",
    "local seo consultant services",
    "small business seo agency",
    "best marketing for small business",
    "social media marketing agency for small business",
    "digital marketing services for small business",
    "local business marketing",
    "seo marketing for small business",
    "best digital marketing for small business",
    "local seo specialist",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: {
    canonical: `${BASE_URL}/brighton`,
    languages: { "en-GB": `${BASE_URL}/brighton` },
  },
  openGraph: {
    title: "Digital Marketing Agency Brighton | SEO, PPC & Web Design",
    description:
      "Brighton's top-rated digital marketing agency. Expert SEO, Google Ads, Social Media & Web Design for Brighton & Hove businesses. Free consultation today.",
    url: `${BASE_URL}/brighton`,
    type: "website",
    siteName: "SBMP — Local Digital Marketing",
    locale: "en_GB",
    images: [
      {
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 1200,
        height: 630,
        alt: "Digital Marketing Agency Brighton — SBMP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency Brighton | SEO, PPC & Web Design",
    description:
      "Brighton's top-rated digital marketing agency. Expert SEO, Google Ads & Social Media for Brighton & Hove businesses. Free audit today.",
    images: [`${BASE_URL}/sbmp-logo.png`],
  },
  other: {
    "geo.region": "GB-ESX",
    "geo.placename": "Brighton, East Sussex",
    "geo.position": "50.8225;-0.1372",
    ICBM: "50.8225, -0.1372",
  },
};

// ============================================================================
// JSON-LD SCHEMA
// ============================================================================

const brightonSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "MarketingAgency", "LocalBusiness"],
      "@id": `${BASE_URL}/brighton#business`,
      name: "Small Business Marketing Professional — Brighton",
      url: `${BASE_URL}/brighton`,
      logo: `${BASE_URL}/sbmp-logo.png`,
      image: `${BASE_URL}/sbmp-logo.png`,
      telephone: "+441273000000",
      email: "hello@youragency.co.uk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Brighton City Centre",
        addressLocality: "Brighton",
        addressRegion: "East Sussex",
        postalCode: "BN1",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.8225,
        longitude: -0.1372,
      },
      areaServed: [
        { "@type": "City", name: "Brighton" },
        { "@type": "City", name: "Hove" },
        { "@type": "Place", name: "Kemptown" },
        { "@type": "Place", name: "North Laine" },
        { "@type": "Place", name: "Preston Park" },
        { "@type": "Place", name: "Fiveways" },
        { "@type": "Place", name: "Seven Dials" },
        { "@type": "Place", name: "Portslade" },
      ],
      priceRange: "£199–£699",
      currenciesAccepted: "GBP",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "10:00",
          closes: "14:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/sbmp",
        "https://www.instagram.com/sbmp",
        "https://www.linkedin.com/company/sbmp",
        "https://twitter.com/sbmp",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Brighton Digital Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Local SEO Brighton", description: "Rank #1 on Google for Brighton searches with hyper-local SEO strategies." },
            priceSpecification: { "@type": "PriceSpecification", price: "199", priceCurrency: "GBP", unitText: "MONTH" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Google Ads Management Brighton", description: "High-ROI PPC campaigns targeting Brighton & East Sussex." },
            priceSpecification: { "@type": "PriceSpecification", price: "299", priceCurrency: "GBP", unitText: "MONTH" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Social Media Marketing Brighton", description: "Instagram, Facebook & LinkedIn management for Brighton businesses." },
            priceSpecification: { "@type": "PriceSpecification", price: "249", priceCurrency: "GBP", unitText: "MONTH" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Web Design Brighton", description: "Fast, conversion-focused websites for Brighton businesses." },
            priceSpecification: { "@type": "PriceSpecification", price: "699", priceCurrency: "GBP", unitText: "ONE_TIME" },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "James T." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Our restaurant bookings doubled in 3 months. Best investment we've made for our Brighton business. The local SEO work was outstanding.",
          datePublished: "2025-11-01",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sarah M." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "Our Google Ads ROI went from 2x to 8x. Absolutely incredible results — we're now the top boutique in Brighton on every relevant search.",
          datePublished: "2025-12-15",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "David R." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: "We now rank #1 for every key Brighton search term. The SEO work has been completely transformational for our firm.",
          datePublished: "2026-01-20",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/brighton#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${BASE_URL}/locations` },
        { "@type": "ListItem", position: 3, name: "Brighton Digital Marketing Agency", item: `${BASE_URL}/brighton` },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/brighton#webpage`,
      url: `${BASE_URL}/brighton`,
      name: "Digital Marketing Agency Brighton | SEO, PPC, Social Media & Web Design",
      description: "Brighton's top-rated digital marketing agency. Expert SEO, Google Ads, Social Media & Web Design for Brighton & Hove businesses.",
      isPartOf: { "@id": BASE_URL },
      about: { "@id": `${BASE_URL}/brighton#business` },
      breadcrumb: { "@id": `${BASE_URL}/brighton#breadcrumb` },
      inLanguage: "en-GB",
      datePublished: "2026-03-20",
      dateModified: "2026-03-20",
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/brighton#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does SEO take for Brighton businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Brighton businesses see measurable improvements within 60–90 days, with significant ranking gains by month 6. We provide monthly reports so you can track progress every step of the way.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with small businesses in Brighton?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — we specialise in helping small and medium Brighton businesses grow online with affordable, results-driven digital marketing from £199/month, no long-term contracts.",
          },
        },
        {
          "@type": "Question",
          name: "What areas of Brighton do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve all areas of Brighton & Hove including the City Centre, Kemptown, North Laine, Preston Park, Fiveways, Seven Dials, Hanover, Portslade, Patcham and all BN1–BN3 postcodes.",
          },
        },
        {
          "@type": "Question",
          name: "What's included in the free Brighton marketing audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our free audit covers your Google rankings, Google Business Profile health, website speed score, local competitor analysis, and a custom growth roadmap for your Brighton business — worth over £299.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer Google Ads management for Brighton companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — we manage Google Ads campaigns specifically targeted at Brighton, Hove, and the wider East Sussex area. We focus on maximising your return on ad spend, not just click volume.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help my Brighton business with social media marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We create and manage organic and paid social media campaigns on Instagram, Facebook, TikTok, and LinkedIn — all tailored to Brighton's local audience and your business niche.",
          },
        },
      ],
    },
  ],
};

// ============================================================================
// STICKY NAV
// ============================================================================

function StickyNav() {
  return (
    <nav
      aria-label="Brighton page navigation"
      className="sticky top-0 z-50 border-b border-white/5"
      style={{ background: "rgba(10,15,30,0.92)", backdropFilter: "blur(16px)" }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight flex items-center gap-1">
          <span className="text-blue-400">SBMP</span>
          <span className="text-white/60 text-sm font-normal hidden sm:inline"> — Brighton</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#94A3B8" }}>
          <a href="#services" className="hover:text-white transition-colors duration-200">
            Services
          </a>
          <a href="#about" className="hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="#results" className="hover:text-white transition-colors duration-200">
            Results
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">
            Contact
          </a>
        </div>

        <Link
          href="#contact"
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
          style={{ boxShadow: "0 0 0 0 rgba(59,130,246,0)" }}
        >
          Free Audit
        </Link>
      </div>
    </nav>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0A0F1E" }}
    >
      {/* Inline keyframes for CSS-only animations */}
      <style>{`
        @keyframes float-blob-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.08); }
        }
        @keyframes float-blob-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(1.05); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .anim-fade-up { animation: fade-up 0.8s ease both; }
        .anim-delay-1 { animation-delay: 0.15s; }
        .anim-delay-2 { animation-delay: 0.30s; }
        .anim-delay-3 { animation-delay: 0.45s; }
        .anim-delay-4 { animation-delay: 0.60s; }
        .pulse-dot { animation: pulse-dot 2s ease infinite; }
        .blob-a { animation: float-blob-a 8s ease-in-out infinite; }
        .blob-b { animation: float-blob-b 10s ease-in-out infinite; }
        details summary::-webkit-details-marker { display: none; }
        @keyframes card-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-stagger-1 { animation: card-in 0.6s ease both 0.05s; }
        .card-stagger-2 { animation: card-in 0.6s ease both 0.15s; }
        .card-stagger-3 { animation: card-in 0.6s ease both 0.25s; }
        .card-stagger-4 { animation: card-in 0.6s ease both 0.35s; }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .gradient-text {
          background: linear-gradient(135deg, #60A5FA, #38BDF8, #818CF8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }
        .hero-glow-btn:hover {
          box-shadow: 0 0 40px rgba(59,130,246,0.55);
          transform: scale(1.04);
        }
        /* Server-safe hover glows — replaces JS onMouse* handlers */
        .service-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .service-card:hover { box-shadow: 0 20px 60px var(--card-glow, rgba(59,130,246,0.25)); transform: translateY(-4px); }
        .stat-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .stat-card:hover { box-shadow: 0 20px 50px var(--card-glow, rgba(59,130,246,0.20)); transform: translateY(-4px); }
      `}</style>
      {/* Preconnect hints for Google Maps (improves iframe load performance) */}
      <link rel="preconnect" href="https://maps.googleapis.com" />
      <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />

      {/* Background blobs */}
      <div
        className="blob-a absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "rgba(59,130,246,0.18)", filter: "blur(120px)" }}
      />
      <div
        className="blob-b absolute -bottom-40 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "rgba(6,182,212,0.13)", filter: "blur(130px)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(29,78,216,0.12), transparent)",
        }}
      />
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-28 text-center">
        {/* Trust badge */}
        <div className="anim-fade-up inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-8 border"
          style={{
            background: "rgba(59,130,246,0.10)",
            borderColor: "rgba(59,130,246,0.28)",
            color: "#93C5FD",
          }}
        >
          <span className="pulse-dot w-2 h-2 bg-green-400 rounded-full" />
          Trusted by 150+ Brighton Businesses
        </div>

        <h1
          className="anim-fade-up anim-delay-1 font-black leading-[1.04] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.6rem, 7vw, 4.5rem)", color: "#F8FAFC" }}
        >
          Brighton&apos;s Most{" "}
          <span className="gradient-text">Results-Driven</span>
          <br />
          Digital Marketing Agency
        </h1>

        <p
          className="anim-fade-up anim-delay-2 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#CBD5E1" }}
        >
          We help Brighton &amp; Hove businesses dominate Google, crush competitors
          on social media, and turn clicks into customers.
        </p>

        <div className="anim-fade-up anim-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="hero-glow-btn inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
            style={{ background: "#2563EB" }}
          >
            Get Free Brighton Audit
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#results"
            className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 border hover:bg-white/5"
            style={{
              color: "#F8FAFC",
              borderColor: "rgba(255,255,255,0.20)",
            }}
          >
            See Our Results
          </a>
        </div>

        {/* Proof bar */}
        <div className="anim-fade-up anim-delay-4 mt-16 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm" style={{ color: "#64748B" }}>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1" style={{ color: "#94A3B8" }}>5.0 Google Rating</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <span style={{ color: "#94A3B8" }}>150+ Brighton Clients</span>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <span style={{ color: "#94A3B8" }}>No Lock-in Contracts</span>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <span style={{ color: "#94A3B8" }}>Results in 60 Days</span>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SERVICES SECTION
// ============================================================================

const services = [
  {
    Icon: Search,
    title: "SEO for Brighton Businesses",
    desc: "Rank #1 on Google for Brighton searches. Local SEO strategies built for the Sussex market.",
    cta: "Explore SEO →",
    href: "/services/seo",
    gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    shadowColor: "rgba(59,130,246,0.25)",
    stagger: "card-stagger-1",
  },
  {
    Icon: TrendingUp,
    title: "Google Ads Management",
    desc: "High-converting PPC campaigns targeting Brighton & surrounding areas. Pay only for results.",
    cta: "Explore PPC →",
    href: "/services/google-ads",
    gradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    shadowColor: "rgba(139,92,246,0.25)",
    stagger: "card-stagger-2",
  },
  {
    Icon: Share2,
    title: "Social Media Marketing",
    desc: "Engage Brighton's audience on Instagram, Facebook & LinkedIn with content that converts.",
    cta: "Explore Social →",
    href: "/services/social-media",
    gradient: "linear-gradient(135deg, #EC4899, #BE185D)",
    shadowColor: "rgba(236,72,153,0.25)",
    stagger: "card-stagger-3",
  },
  {
    Icon: Monitor,
    title: "Web Design & Development",
    desc: "Fast, beautiful, conversion-focused websites built for Brighton businesses.",
    cta: "Explore Web Design →",
    href: "/services/web-design",
    gradient: "linear-gradient(135deg, #06B6D4, #0E7490)",
    shadowColor: "rgba(6,182,212,0.25)",
    stagger: "card-stagger-4",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#60A5FA" }}
          >
            Our Services
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-3 mb-4"
            style={{ color: "#F8FAFC" }}
          >
            Full-Stack Digital Marketing for Brighton
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
            Everything your Brighton business needs to grow online — delivered by local experts who know the Sussex market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => {
            const { Icon } = svc;
            return (
              <div
                key={svc.title}
                className={`${svc.stagger} service-card group relative rounded-2xl p-6 flex flex-col border`}
                style={{
                  background: "rgba(30,41,59,0.5)",
                  borderColor: "rgba(71,85,105,0.6)",
                  backdropFilter: "blur(8px)",
                  "--card-glow": svc.shadowColor,
                } as React.CSSProperties}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: svc.gradient }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-lg mb-3 leading-snug" style={{ color: "#F8FAFC" }}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#94A3B8" }}>
                  {svc.desc}
                </p>
                <Link
                  href={svc.href}
                  className="text-sm font-semibold transition-colors inline-flex items-center gap-1 hover:gap-2"
                  style={{ color: "#60A5FA" }}
                >
                  {svc.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// STATS SECTION
// ============================================================================

const stats = [
  { label: "Brighton Clients", value: "150+", Icon: Users, color: "#60A5FA", glow: "rgba(59,130,246,0.2)" },
  { label: "Revenue Generated", value: "£2.4M", Icon: Award, color: "#34D399", glow: "rgba(52,211,153,0.2)" },
  { label: "Client Retention", value: "98%", Icon: CheckCircle, color: "#22D3EE", glow: "rgba(34,211,238,0.2)" },
  { label: "Years Experience", value: "10+", Icon: Clock, color: "#A78BFA", glow: "rgba(167,139,250,0.2)" },
];

function StatsSection() {
  return (
    <section id="results" className="py-24 px-4 relative overflow-hidden" style={{ background: "#0A0F1E" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(29,78,216,0.08), transparent)",
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>
            Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>
            Brighton Results That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {stats.map((stat) => {
            const { Icon } = stat;
            return (
              <div
                key={stat.label}
                className="stat-card rounded-2xl p-6 md:p-8 text-center border"
                style={{
                  background: "rgba(30,41,59,0.4)",
                  borderColor: "rgba(71,85,105,0.5)",
                  "--card-glow": stat.glow,
                } as React.CSSProperties}
              >
                <Icon className="w-7 h-7 mx-auto mb-3" style={{ color: stat.color }} />
                <div
                  className="text-4xl md:text-5xl font-black mb-2 leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-medium" style={{ color: "#64748B" }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// LOCAL BRIGHTON SECTION
// ============================================================================

const brightonAreas = [
  "Brighton City Centre",
  "Hove",
  "Kemptown",
  "North Laine",
  "Preston Park",
  "Fiveways",
  "Seven Dials",
  "Hanover",
  "Portslade",
  "Patcham",
  "Withdean",
  "Woodingdean",
];

function LocalSection() {
  return (
    <section id="about" className="py-24 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>
              Hyper-Local Expertise
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mt-3 mb-6 leading-snug"
              style={{ color: "#F8FAFC" }}
            >
              We Know Brighton Like the Back of Our Hand
            </h2>
            <p className="text-lg leading-relaxed mb-5" style={{ color: "#CBD5E1" }}>
              From the bustling North Laine to the business hubs of Hove, our team understands the Brighton market. We craft hyper-local strategies for businesses across Brighton, Hove, Kemptown, Preston Park, Fiveways, Seven Dials and beyond.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "#94A3B8" }}>
              Brighton&apos;s unique mix of creative independents, tourism, tech startups and professional services means cookie-cutter marketing never works here. We build strategies that resonate with Brighton&apos;s diverse, discerning audience — driving footfall, leads and lasting growth.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:opacity-90"
              style={{ background: "#2563EB" }}
            >
              Get Local Strategy <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Area pills card */}
          <div
            className="rounded-2xl p-8 border"
            style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <h3 className="font-bold text-lg mb-6" style={{ color: "#F8FAFC" }}>
              Brighton Areas We Serve
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {brightonAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium border transition-colors duration-200 hover:bg-blue-500/20"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    borderColor: "rgba(59,130,246,0.22)",
                    color: "#93C5FD",
                  }}
                >
                  <MapPin className="w-3 h-3" />
                  {area}
                </span>
              ))}
            </div>

            <div
              className="mt-8 pt-6 flex items-start gap-3 border-t"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
            >
              <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#34D399" }} />
              <p className="text-sm" style={{ color: "#94A3B8" }}>
                Deep knowledge of Brighton postcodes BN1, BN2, BN3 &amp; surrounding areas — so your campaigns reach exactly the right local audience.
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div
          className="mt-12 rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40314.5975216277!2d-0.1061897!3d50.83741795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758509f6294167%3A0x9cc6af7a727d0ef9!2sBrighton%2C%20Brighton%20and%20Hove%2C%20UK!5e0!3m2!1sen!2s!4v1774023890750!5m2!1sen!2s"
            width="100%"
            height="380"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brighton & Hove, East Sussex — digital marketing service area"
          />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PROCESS SECTION
// ============================================================================

const steps = [
  {
    num: "01",
    title: "Free Audit",
    desc: "We analyse your current online presence, local competitors, and growth opportunity across all digital channels.",
    bg: "#2563EB",
    shadow: "rgba(37,99,235,0.45)",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Custom Brighton-focused growth plan built around your business goals, target audience, and local search landscape.",
    bg: "#7C3AED",
    shadow: "rgba(124,58,237,0.45)",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our team gets to work immediately — implementing SEO, ads, content, and social campaigns in parallel.",
    bg: "#0891B2",
    shadow: "rgba(8,145,178,0.45)",
  },
  {
    num: "04",
    title: "Results",
    desc: "Track growth with a live reporting dashboard. Monthly strategy calls to review performance and accelerate gains.",
    bg: "#059669",
    shadow: "rgba(5,150,105,0.45)",
  },
];

function ProcessSection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ background: "#0A0F1E" }}>
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>
            Our Process
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-3 mb-4"
            style={{ color: "#F8FAFC" }}
          >
            How We Grow Your Brighton Business
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>
            A proven 4-step system designed to deliver measurable results for Brighton businesses within 60 days.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop connector */}
          <div
            className="hidden lg:block absolute top-8 left-[14%] right-[14%] h-px"
            style={{
              background:
                "linear-gradient(to right, #2563EB 0%, #7C3AED 33%, #0891B2 66%, #059669 100%)",
              opacity: 0.35,
            }}
          />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              {/* Mobile connector (vertical line) */}
              {i < steps.length - 1 && (
                <div
                  className="lg:hidden absolute top-16 left-1/2 -translate-x-1/2 w-px h-12 mt-1"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                />
              )}

              <div
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg mb-5 shrink-0"
                style={{
                  background: step.bg,
                  boxShadow: `0 8px 30px ${step.shadow}`,
                }}
              >
                {step.num}
              </div>

              <h3 className="font-bold text-lg mb-2" style={{ color: "#F8FAFC" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{
              background: "#2563EB",
              boxShadow: "0 0 0 0 rgba(59,130,246,0)",
            }}
          >
            Start My Free Audit <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// TESTIMONIALS SECTION
// ============================================================================

const testimonials = [
  {
    quote:
      "Our restaurant bookings doubled in just 3 months. Best investment we've made for our Brighton business. The local SEO work was outstanding.",
    name: "James T.",
    company: "The Lanes Kitchen, Brighton",
    stars: 5,
  },
  {
    quote:
      "Our Google Ads ROI went from 2x to 8x. Absolutely incredible results — we're now the top boutique in Brighton on every relevant search.",
    name: "Sarah M.",
    company: "Brighton Boutique Store",
    stars: 5,
  },
  {
    quote:
      "We now rank #1 for every key Brighton search term. The SEO work has been completely transformational for our firm's online presence.",
    name: "David R.",
    company: "Brighton Legal Services",
    stars: 5,
  },
];

function TestimonialsSection() {
  return (
    <section className="py-24 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>
            What Brighton Businesses Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:border-slate-500/60"
              style={{
                background: "rgba(30,41,59,0.5)",
                borderColor: "rgba(71,85,105,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex gap-0.5 mb-5">
                {[...Array(t.stars)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: "#CBD5E1" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                className="border-t pt-4"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="font-semibold text-sm" style={{ color: "#F8FAFC" }}>
                  {t.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#60A5FA" }}>
                  {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating bar */}
        <div
          className="mt-10 rounded-2xl p-6 flex flex-wrap items-center justify-center gap-6 border text-center"
          style={{
            background: "rgba(30,41,59,0.3)",
            borderColor: "rgba(71,85,105,0.4)",
          }}
        >
          <div>
            <div className="flex items-center gap-1 justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-sm" style={{ color: "#94A3B8" }}>
              4.9 / 5 from 150+ Brighton clients
            </div>
          </div>
          <div className="hidden sm:block w-px h-10" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="text-sm" style={{ color: "#94A3B8" }}>
            <span className="font-bold text-white">£2.4M+</span> revenue generated for Brighton businesses
          </div>
          <div className="hidden sm:block w-px h-10" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="text-sm" style={{ color: "#94A3B8" }}>
            <span className="font-bold text-white">98%</span> client retention rate
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FAQ SECTION
// ============================================================================

const faqs = [
  {
    q: "How long does SEO take for Brighton businesses?",
    a: "Most Brighton businesses see measurable improvements within 60–90 days, with significant ranking gains by month 6. We provide monthly reports so you can track progress every step of the way.",
  },
  {
    q: "Do you offer Google Ads management for Brighton companies?",
    a: "Yes — we manage Google Ads campaigns specifically targeted at Brighton, Hove, and the wider East Sussex area. We focus on maximising your return on ad spend, not just click volume.",
  },
  {
    q: "What's included in your free Brighton marketing audit?",
    a: "Our free audit covers your Google rankings, Google Business Profile optimisation, website speed & Core Web Vitals, competitor gap analysis, and a custom 90-day growth roadmap — worth over £299.",
  },
  {
    q: "Do you work with small businesses or only large companies?",
    a: "We specialise in small and medium Brighton businesses. Our packages start from £199/month with no long-term contracts required. Most clients see positive ROI within the first 90 days.",
  },
  {
    q: "Can you help my Brighton business with social media marketing?",
    a: "Absolutely. We create and manage organic and paid social media campaigns on Instagram, Facebook, TikTok, and LinkedIn — all tailored to Brighton's local audience and your business niche.",
  },
];

function FAQSection() {
  return (
    <section className="py-24 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>
            Brighton Digital Marketing — FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl overflow-hidden border"
              style={{
                background: "#0D1627",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <summary
                className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-medium transition-colors hover:bg-white/3 list-none"
                style={{ color: "#F8FAFC" }}
              >
                {faq.q}
                <ChevronRight
                  className="w-4 h-4 shrink-0 transition-transform duration-200 group-open:rotate-90"
                  style={{ color: "#94A3B8" }}
                />
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT / CTA FORM SECTION
// ============================================================================

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden" style={{ background: "#0D1627" }}>
      <div
        className="absolute -top-60 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "rgba(29,78,216,0.12)", filter: "blur(160px)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>
            Free Brighton Audit
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mt-3 mb-4"
            style={{ color: "#F8FAFC" }}
          >
            Get Your Free Brighton Marketing Audit
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
            No commitment. Just real insights about how to grow your Brighton business online.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-14">
          {/* ── Form ── */}
          <div
            className="lg:col-span-3 rounded-2xl p-7 md:p-8 border"
            style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.07)" }}
          >
            <form action="/api/contact" method="POST" className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#CBD5E1" }}
                  >
                    Full Name <span style={{ color: "#60A5FA" }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 border"
                    style={{
                      background: "#0D1627",
                      borderColor: "rgba(255,255,255,0.10)",
                      color: "#F8FAFC",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#CBD5E1" }}
                  >
                    Email Address <span style={{ color: "#60A5FA" }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="hello@yourbusiness.co.uk"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 border"
                    style={{
                      background: "#0D1627",
                      borderColor: "rgba(255,255,255,0.10)",
                      color: "#F8FAFC",
                    }}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#CBD5E1" }}
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+44 1273 000000"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 border"
                    style={{
                      background: "#0D1627",
                      borderColor: "rgba(255,255,255,0.10)",
                      color: "#F8FAFC",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-business"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#CBD5E1" }}
                  >
                    Business Name <span style={{ color: "#60A5FA" }}>*</span>
                  </label>
                  <input
                    id="contact-business"
                    type="text"
                    name="business"
                    required
                    autoComplete="organization"
                    placeholder="Your Brighton business"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 border"
                    style={{
                      background: "#0D1627",
                      borderColor: "rgba(255,255,255,0.10)",
                      color: "#F8FAFC",
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#CBD5E1" }}
                >
                  Service Needed
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 border appearance-none cursor-pointer"
                  style={{
                    background: "#0D1627",
                    borderColor: "rgba(255,255,255,0.10)",
                    color: "#F8FAFC",
                  }}
                >
                  <option value="">Select a service…</option>
                  <option value="seo">SEO</option>
                  <option value="google-ads">Google Ads</option>
                  <option value="social-media">Social Media</option>
                  <option value="web-design">Web Design</option>
                  <option value="full-package">Full Package</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#CBD5E1" }}
                >
                  Your Goals / Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your Brighton business and what you're hoping to achieve…"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 border resize-none"
                  style={{
                    background: "#0D1627",
                    borderColor: "rgba(255,255,255,0.10)",
                    color: "#F8FAFC",
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white font-semibold py-4 rounded-xl text-base transition-all duration-300 flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  boxShadow: "0 4px 24px rgba(37,99,235,0.35)",
                }}
              >
                Claim My Free Audit <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-center" style={{ color: "#475569" }}>
                No spam. No contracts. Just a free, honest audit of your Brighton online presence.
              </p>
            </form>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Contact details */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <h3 className="font-bold text-lg mb-6" style={{ color: "#F8FAFC" }}>
                Get in Touch
              </h3>
              <div className="space-y-4">
                {[
                  {
                    Icon: MapPin,
                    label: "Office Location",
                    value: "Brighton, East Sussex, BN1",
                    href: null,
                  },
                  {
                    Icon: Phone,
                    label: "Phone",
                    value: "+44 1273 000000",
                    href: "tel:+441273000000",
                  },
                  {
                    Icon: Mail,
                    label: "Email",
                    value: "hello@youragency.co.uk",
                    href: "mailto:hello@youragency.co.uk",
                  },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(59,130,246,0.10)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#60A5FA" }} />
                    </div>
                    <div>
                      <div className="text-sm font-medium" style={{ color: "#F8FAFC" }}>
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm mt-0.5 hover:opacity-80 transition-opacity"
                          style={{ color: "#60A5FA" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm mt-0.5" style={{ color: "#94A3B8" }}>
                          {value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-6 border transition-all duration-300 block hover:opacity-90"
              style={{
                background: "rgba(34,197,94,0.08)",
                borderColor: "rgba(34,197,94,0.22)",
              }}
            >
              <div className="font-semibold mb-1 flex items-center gap-2" style={{ color: "#4ADE80" }}>
                <span>💬</span> Chat on WhatsApp
              </div>
              <p className="text-sm" style={{ color: "#64748B" }}>
                Get a response within minutes during business hours.
              </p>
            </a>

            {/* Trust list */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.07)" }}
            >
              <div className="space-y-3">
                {[
                  "Free audit — no obligation whatsoever",
                  "Custom strategy for your business niche",
                  "Measurable results within 60 days",
                  "No long-term contracts required",
                  "100% Brighton & Hove focused",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "#CBD5E1" }}>
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#34D399" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// DEFAULT EXPORT — PAGE
// ============================================================================

export default function BrightonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brightonSchema) }}
      />
      <StickyNav />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <LocalSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </>
  );
}
