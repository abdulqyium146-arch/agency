import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail, Zap, BarChart2, Star, MapPin, CheckCircle,
  XCircle, ArrowRight, ChevronRight, Phone,
} from "lucide-react";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK = "https://wa.me/923474825228?text=Hi!%20I%27m%20interested%20in%20Email%20Marketing%20for%20my%20Brighton%20business.";

export const metadata: Metadata = {
  title: "Email Marketing Brighton | Campaigns That Convert",
  description:
    "Expert email marketing for Brighton businesses. Automated campaigns, newsletters & sequences that drive repeat sales. Free audit for Brighton & Hove companies.",
  keywords: [
    "email marketing Brighton", "email campaigns Brighton", "email automation Brighton",
    "newsletter marketing Brighton", "email marketing agency Brighton",
    "Mailchimp management Brighton", "drip campaigns Brighton",
    "email marketing for small business Brighton", "Klaviyo Brighton",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  alternates: { canonical: `${BASE_URL}/brighton/content/email`, languages: { "en-GB": `${BASE_URL}/brighton/content/email` } },
  openGraph: {
    title: "Email Marketing Brighton | Campaigns That Convert | SBMP",
    description: "Expert email marketing for Brighton businesses. Automated campaigns, newsletters & sequences that drive repeat sales.",
    url: `${BASE_URL}/brighton/content/email`, type: "website", locale: "en_GB", siteName: "SBMP — Local Digital Marketing",
  },
  twitter: { card: "summary_large_image", title: "Email Marketing Brighton | Campaigns That Convert", description: "Expert email marketing for Brighton businesses. Automated campaigns & sequences that drive repeat sales." },
  other: { "geo.region": "GB-ESX", "geo.placename": "Brighton, East Sussex", "geo.position": "50.8225;-0.1372", ICBM: "50.8225, -0.1372" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/brighton/content/email#webpage`,
      url: `${BASE_URL}/brighton/content/email`,
      name: "Email Marketing Brighton | Campaigns That Convert",
      description: "Expert email marketing for Brighton businesses. Automated campaigns, newsletters & sequences that drive repeat sales.",
      inLanguage: "en-GB",
      breadcrumb: { "@id": `${BASE_URL}/brighton/content/email#breadcrumb` },
      datePublished: "2026-03-20", dateModified: "2026-03-20",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/brighton/content/email#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Brighton Digital Marketing", item: `${BASE_URL}/brighton` },
        { "@type": "ListItem", position: 3, name: "Email Marketing Brighton", item: `${BASE_URL}/brighton/content/email` },
      ],
    },
    {
      "@type": "Service",
      name: "Email Marketing Brighton",
      serviceType: "Email Marketing",
      description: "Professional email marketing services for Brighton businesses including campaign strategy, automated sequences, newsletter design and ongoing management.",
      provider: {
        "@type": "LocalBusiness", name: "Small Business Marketing Professional", url: BASE_URL,
        address: { "@type": "PostalAddress", addressLocality: "Brighton", addressRegion: "East Sussex", postalCode: "BN1", addressCountry: "GB" },
      },
      areaServed: [{ "@type": "City", name: "Brighton" }, { "@type": "City", name: "Hove" }],
      offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", price: "199", priceCurrency: "GBP", unitText: "MONTH" } },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/brighton/content/email#faq`,
      mainEntity: [
        { "@type": "Question", name: "How much does email marketing cost in Brighton?", acceptedAnswer: { "@type": "Answer", text: "Our Brighton email marketing packages start from £199/month, covering strategy, copywriting, design, and monthly reporting. No long-term contracts required." } },
        { "@type": "Question", name: "How long before we see results from email marketing?", acceptedAnswer: { "@type": "Answer", text: "Most Brighton businesses see improved open and click rates within 30 days. Revenue impact from automated sequences typically builds over 60–90 days as the system learns and optimises." } },
        { "@type": "Question", name: "Can you manage our existing Mailchimp account?", acceptedAnswer: { "@type": "Answer", text: "Yes — we work with Mailchimp, Klaviyo, ActiveCampaign, and all major platforms. We'll audit your existing setup, clean your list, and optimise your campaigns before building new ones." } },
        { "@type": "Question", name: "Do you write the email copy too?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Our copywriters handle subject lines, email body, CTAs, and landing page copy. You review and approve everything before it goes to your Brighton audience." } },
        { "@type": "Question", name: "What Brighton industries do you serve?", acceptedAnswer: { "@type": "Answer", text: "We serve all Brighton industries: restaurants, retail, wellness, hospitality, ecommerce, professional services, law firms, and creative agencies across BN1–BN3." } },
      ],
    },
  ],
};

const brightonAreas = [
  "Brighton City Centre", "Hove", "Kemptown", "North Laine",
  "Preston Park", "Fiveways", "Seven Dials", "Hanover",
  "Portslade", "Shoreham", "Worthing", "Lewes",
];

// ─── Shared CSS ──────────────────────────────────────────────────────────────
function PageStyles() {
  return (
    <style>{`
      @keyframes fade-up { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
      @keyframes card-in { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      @keyframes gradient-shift { 0%,100% { background-position:0% 50%; } 50% { background-position:100% 50%; } }
      @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
      @keyframes float-blob { 0%,100% { transform:translate(0,0) scale(1); } 50% { transform:translate(30px,-20px) scale(1.05); } }
      .anim-fade-up { animation: fade-up 0.7s ease both; }
      .anim-delay-1 { animation-delay: 0.1s; }
      .anim-delay-2 { animation-delay: 0.2s; }
      .anim-delay-3 { animation-delay: 0.3s; }
      .card-stagger-1 { animation: card-in 0.6s ease both 0.05s; }
      .card-stagger-2 { animation: card-in 0.6s ease both 0.15s; }
      .card-stagger-3 { animation: card-in 0.6s ease both 0.25s; }
      .blob-a { animation: float-blob 8s ease-in-out infinite; }
      .pulse-dot { animation: pulse-dot 2s ease infinite; }
      .gradient-text { background: linear-gradient(135deg,#60A5FA,#38BDF8,#818CF8); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation: gradient-shift 4s ease infinite; }
      .hero-glow-btn:hover { box-shadow: 0 0 40px rgba(59,130,246,0.55); transform: scale(1.04); }
      .svc-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
      .svc-card:hover { box-shadow: 0 20px 50px var(--card-glow,rgba(59,130,246,0.25)); transform: translateY(-4px); }
      details summary::-webkit-details-marker { display:none; }
    `}</style>
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ background: "#0D1627", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap" style={{ color: "#64748B" }}>
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li><Link href="/brighton" className="hover:text-white transition-colors">Brighton</Link></li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li style={{ color: "#F8FAFC" }} className="font-medium">Email Marketing Brighton</li>
        </ol>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden" style={{ background: "#0A0F1E" }}>
      <PageStyles />
      <div className="blob-a absolute -top-40 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "rgba(59,130,246,0.15)", filter: "blur(120px)" }} />
      <div className="blob-a absolute -bottom-40 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: "rgba(6,182,212,0.10)", filter: "blur(130px)", animationDelay: "4s" }} />
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center">
        <div className="anim-fade-up inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-8 border"
          style={{ background: "rgba(59,130,246,0.10)", borderColor: "rgba(59,130,246,0.28)", color: "#93C5FD" }}>
          <span className="pulse-dot w-2 h-2 bg-green-400 rounded-full" />
          Trusted by 150+ Brighton Businesses
        </div>
        <h1 className="anim-fade-up anim-delay-1 font-black leading-tight mb-6"
          style={{ fontSize: "clamp(2.3rem, 6vw, 4rem)", color: "#F8FAFC" }}>
          Email Marketing That Keeps Brighton<br />
          <span className="gradient-text">Customers Coming Back</span>
        </h1>
        <p className="anim-fade-up anim-delay-2 text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: "#CBD5E1" }}>
          Stop losing Brighton customers to competitors. Our automated email campaigns drive repeat business, increase average order value, and build loyal relationships with Brighton & Hove buyers.
        </p>
        <div className="anim-fade-up anim-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="hero-glow-btn inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300" style={{ background: "#2563EB" }}>
            Get Free Brighton Audit <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#results" className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full text-lg border transition-all duration-300 hover:bg-white/5"
            style={{ color: "#F8FAFC", borderColor: "rgba(255,255,255,0.20)" }}>
            See Results
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const features = [
  { Icon: Mail, title: "Campaign Strategy & Setup", desc: "Bespoke email strategy aligned with your Brighton business goals — welcome sequences, promotions, re-engagement, and seasonal campaigns built around Brighton's unique calendar.", gradient: "linear-gradient(135deg,#3B82F6,#1D4ED8)", glow: "rgba(59,130,246,0.25)", stagger: "card-stagger-1" },
  { Icon: Zap, title: "Automated Email Sequences", desc: "Set-and-forget nurture sequences that convert cold leads into loyal Brighton customers. Abandoned cart, post-purchase, birthday, and win-back automations fully built out.", gradient: "linear-gradient(135deg,#8B5CF6,#6D28D9)", glow: "rgba(139,92,246,0.25)", stagger: "card-stagger-2" },
  { Icon: BarChart2, title: "Newsletter Design & Management", desc: "Beautiful, on-brand newsletters your Brighton subscribers actually look forward to. We write, design, schedule, and report — you just check the results.", gradient: "linear-gradient(135deg,#06B6D4,#0E7490)", glow: "rgba(6,182,212,0.25)", stagger: "card-stagger-3" },
];

function FeaturesSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3" style={{ color: "#F8FAFC" }}>Brighton Email Marketing Services</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>End-to-end email marketing management for Brighton businesses — from strategy to send.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => {
            const { Icon } = f;
            return (
              <div key={f.title} className={`${f.stagger} svc-card rounded-2xl p-7 border flex flex-col`}
                style={{ background: "rgba(30,41,59,0.5)", borderColor: "rgba(71,85,105,0.6)", "--card-glow": f.glow } as React.CSSProperties}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0" style={{ background: f.gradient }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: "#F8FAFC" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Why Section ──────────────────────────────────────────────────────────────
const problems = [
  "Brighton customers buy once then disappear — no re-engagement strategy in place",
  "You're investing in ads & SEO to win new visitors, then doing nothing to retain them",
  "Local Brighton events & seasonal peaks go untapped with no targeted email campaigns",
  "Your competitors in The Lanes and Hove are already automating their customer journeys",
];
const solutions = [
  "Automated sequences re-engage Brighton customers at exactly the right moment with the right offer",
  "Email costs 40× less than paid ads — your highest-ROI channel for Brighton businesses",
  "Seasonal campaigns around Brighton Pride, Festival season, and Bank Holidays drive peak revenue",
  "Done-for-you strategy, copy, design, and management — zero extra work on your end",
];

function WhySection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Why Email Marketing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Why Brighton Businesses Need Email Marketing Now</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 border" style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.18)" }}>
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2" style={{ color: "#FCA5A5" }}>
              <XCircle className="w-5 h-5 shrink-0" /> The Problem Without Email Marketing
            </h3>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  <XCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F87171" }} />{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-7 border" style={{ background: "rgba(34,197,94,0.06)", borderColor: "rgba(34,197,94,0.18)" }}>
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2" style={{ color: "#86EFAC" }}>
              <CheckCircle className="w-5 h-5 shrink-0" /> The Solution: SBMP Email Marketing
            </h3>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#4ADE80" }} />{s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
const steps = [
  { num: "01", title: "Email Audit", desc: "We analyse your current list, platform setup, open rates, and Brighton competitor email strategies to identify quick wins.", bg: "#2563EB", shadow: "rgba(37,99,235,0.45)" },
  { num: "02", title: "Strategy & Copy", desc: "Custom campaign calendar with Brighton-specific content, seasonal offer timing, and automated sequence blueprints.", bg: "#7C3AED", shadow: "rgba(124,58,237,0.45)" },
  { num: "03", title: "Build & Automate", desc: "We build all sequences, templates, and triggers inside your email platform — tested, QA'd, and ready to fire.", bg: "#0891B2", shadow: "rgba(8,145,178,0.45)" },
  { num: "04", title: "Launch & Optimise", desc: "Go live, then continuously A/B test subject lines, content, and send times for maximum Brighton open and revenue rates.", bg: "#059669", shadow: "rgba(5,150,105,0.45)" },
];

function ProcessSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3" style={{ color: "#F8FAFC" }}>How We Launch Your Brighton Email Strategy</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#64748B" }}>From zero to converting in as little as 14 days.</p>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-8 left-[14%] right-[14%] h-px opacity-30"
            style={{ background: "linear-gradient(to right,#2563EB,#7C3AED,#0891B2,#059669)" }} />
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              {i < steps.length - 1 && <div className="lg:hidden absolute top-16 left-1/2 -translate-x-1/2 w-px h-10 mt-1" style={{ background: "rgba(255,255,255,0.08)" }} />}
              <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg mb-4 shrink-0"
                style={{ background: s.bg, boxShadow: `0 8px 30px ${s.shadow}` }}>{s.num}</div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#F8FAFC" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "42%", label: "Average Open Rate", sub: "vs 21% industry average" },
  { value: "£38", label: "ROI per £1 Spent", sub: "highest-ROI digital channel" },
  { value: "500+", label: "Campaigns Delivered", sub: "for Brighton businesses" },
];

function StatsSection() {
  return (
    <section id="results" className="py-20 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Brighton Email Results</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Email Marketing Results for Brighton Businesses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl p-8 text-center border" style={{ background: "rgba(30,41,59,0.4)", borderColor: "rgba(71,85,105,0.5)" }}>
              <div className="text-5xl font-black mb-2" style={{ color: "#60A5FA" }}>{s.value}</div>
              <div className="font-semibold mb-1" style={{ color: "#F8FAFC" }}>{s.label}</div>
              <div className="text-sm" style={{ color: "#64748B" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Areas ────────────────────────────────────────────────────────────────────
function AreasSection() {
  return (
    <section className="py-16 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Service Area</span>
        <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-8" style={{ color: "#F8FAFC" }}>Brighton & Surrounding Areas We Serve</h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {brightonAreas.map((a) => (
            <span key={a} className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium border"
              style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.22)", color: "#93C5FD" }}>
              <MapPin className="w-3 h-3" />{a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial ─────────────────────────────────────────────────────────────
function TestimonialSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl p-8 md:p-10 border text-center" style={{ background: "rgba(30,41,59,0.5)", borderColor: "rgba(71,85,105,0.5)" }}>
          <div className="flex gap-1 justify-center mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
          </div>
          <blockquote className="text-xl leading-relaxed mb-6 italic" style={{ color: "#CBD5E1" }}>
            &ldquo;Our repeat purchase rate jumped 60% in just 4 months. The automated email sequences they built are absolutely incredible — we barely think about it and the revenue just comes in.&rdquo;
          </blockquote>
          <div className="font-semibold" style={{ color: "#F8FAFC" }}>Rachel M.</div>
          <div className="text-sm mt-0.5" style={{ color: "#60A5FA" }}>Brighton Wellness Studio, Kemptown</div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "How much does email marketing cost in Brighton?", a: "Our Brighton email marketing packages start from £199/month, covering strategy, copywriting, design, scheduling, and monthly reporting. No long-term contracts — cancel any time." },
  { q: "How long before we see results from email marketing?", a: "Open rates and engagement improve within the first 30 days with better subject lines and design. Revenue impact from automated sequences builds over 60–90 days as the system learns your Brighton audience." },
  { q: "Can you manage our existing Mailchimp account?", a: "Yes — we work with Mailchimp, Klaviyo, ActiveCampaign, HubSpot, and all major email platforms. We'll audit your existing account, clean your list, and optimise current campaigns before building new ones." },
  { q: "Do you write the email copy too?", a: "Absolutely. Our copywriters handle everything — subject lines, preview text, email body, and CTAs. You review and approve before anything goes to your Brighton subscribers." },
  { q: "What Brighton industries do you serve with email marketing?", a: "We serve all Brighton industries including restaurants, retail, wellness, hospitality, ecommerce stores, professional services, law firms, estate agents, and creative agencies across BN1–BN3 postcodes." },
];

function FAQSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>FAQ</span>
          <h2 className="text-3xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Brighton Email Marketing — FAQs</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border overflow-hidden" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.07)" }}>
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-medium list-none hover:bg-white/3 transition-colors" style={{ color: "#F8FAFC" }}>
                {f.q}
                <ChevronRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-open:rotate-90" style={{ color: "#94A3B8" }} />
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA / Form ───────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden" style={{ background: "#0A0F1E" }}>
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "rgba(29,78,216,0.12)", filter: "blur(150px)" }} />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#F8FAFC" }}>Ready to Grow Your Brighton Business With Email?</h2>
          <p className="text-lg" style={{ color: "#94A3B8" }}>No commitment. Just a free, honest audit of your email marketing — and a clear plan to improve it.</p>
        </div>
        <div className="rounded-2xl p-7 md:p-8 border" style={{ background: "#0D1627", borderColor: "rgba(255,255,255,0.07)" }}>
          <form action="/api/contact" method="POST" className="space-y-5">
            <input type="hidden" name="service" value="Email Marketing Brighton" />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="em-name" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Full Name *</label>
                <input id="em-name" type="text" name="name" required autoComplete="name" placeholder="Your name"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors"
                  style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} />
              </div>
              <div>
                <label htmlFor="em-email" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Email Address *</label>
                <input id="em-email" type="email" name="email" required autoComplete="email" placeholder="hello@brightonbiz.co.uk"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors"
                  style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="em-phone" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Phone Number</label>
                <input id="em-phone" type="tel" name="phone" autoComplete="tel" placeholder="+44 1273 000000"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors"
                  style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} />
              </div>
              <div>
                <label htmlFor="em-biz" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Business Name *</label>
                <input id="em-biz" type="text" name="business" required autoComplete="organization" placeholder="Your Brighton business"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors"
                  style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} />
              </div>
            </div>
            <div>
              <label htmlFor="em-msg" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Your Goals / Message</label>
              <textarea id="em-msg" name="message" rows={4} placeholder="Tell us about your Brighton business and email marketing goals…"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none border resize-none transition-colors"
                style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} />
            </div>
            <button type="submit" className="w-full text-white font-semibold py-4 rounded-xl text-base flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
              style={{ background: "linear-gradient(135deg,#2563EB,#1D4ED8)", boxShadow: "0 4px 24px rgba(37,99,235,0.35)" }}>
              Claim My Free Audit <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-center" style={{ color: "#475569" }}>No spam. No lock-in contracts. Just a free, honest email marketing audit.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Related Services ─────────────────────────────────────────────────────────
const related = [
  { title: "Local SEO Brighton", desc: "Rank #1 on Google Maps and local search for Brighton keywords.", href: "/brighton/seo/local", color: "#3B82F6" },
  { title: "Facebook Ads Brighton", desc: "High-ROI Facebook & Meta ad campaigns targeting Brighton audiences.", href: "/brighton/social/facebook", color: "#8B5CF6" },
  { title: "Landing Page Design Brighton", desc: "CRO-optimised landing pages that turn Brighton visitors into leads.", href: "/brighton/web/landing-pages", color: "#06B6D4" },
];

function RelatedSection() {
  return (
    <section className="py-16 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#F8FAFC" }}>Related Brighton Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {related.map((r) => (
            <Link key={r.href} href={r.href} className="rounded-xl p-5 border hover:-translate-y-1 transition-all duration-300 block group"
              style={{ background: "rgba(30,41,59,0.4)", borderColor: "rgba(71,85,105,0.5)" }}>
              <div className="font-semibold mb-2 group-hover:text-blue-400 transition-colors" style={{ color: "#F8FAFC" }}>{r.title}</div>
              <div className="text-sm" style={{ color: "#64748B" }}>{r.desc}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/brighton" className="hover:text-white transition-colors" style={{ color: "#60A5FA" }}>← Back to Brighton Digital Marketing</Link>
          <span style={{ color: "#334155" }}>|</span>
          <Link href="/contact" className="hover:text-white transition-colors" style={{ color: "#60A5FA" }}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EmailMarketingBrightonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <Breadcrumb />
        <HeroSection />
        <FeaturesSection />
        <WhySection />
        <ProcessSection />
        <StatsSection />
        <AreasSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
        <RelatedSection />
      </main>
    </>
  );
}
