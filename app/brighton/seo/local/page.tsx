import type { Metadata } from "next";
import Link from "next/link";
import {
  Map, Building2, Search, Star, MapPin, CheckCircle,
  XCircle, ArrowRight, ChevronRight,
} from "lucide-react";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK = "https://wa.me/923474825228?text=Hi!%20I%27m%20interested%20in%20Local%20SEO%20for%20my%20Brighton%20business.";

export const metadata: Metadata = {
  title: "Local SEO Brighton | Rank #1 in Brighton Searches",
  description:
    "Dominate local Google searches in Brighton & Hove. Google Business Profile, local citations & map pack rankings. Free local SEO audit for Brighton businesses.",
  keywords: [
    "local SEO Brighton", "Google Maps Brighton", "Brighton Google Business Profile",
    "local search Brighton", "local SEO agency Brighton", "map pack Brighton",
    "Google Business Profile optimisation Brighton", "local citations Brighton",
    "Brighton local search ranking", "SEO company Brighton",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  alternates: { canonical: `${BASE_URL}/brighton/seo/local`, languages: { "en-GB": `${BASE_URL}/brighton/seo/local` } },
  openGraph: {
    title: "Local SEO Brighton | Rank #1 in Brighton Searches | SBMP",
    description: "Dominate local Google searches in Brighton & Hove. GBP optimisation, local citations & map pack rankings.",
    url: `${BASE_URL}/brighton/seo/local`, type: "website", locale: "en_GB", siteName: "SBMP — Local Digital Marketing",
  },
  twitter: { card: "summary_large_image", title: "Local SEO Brighton | Rank #1 in Brighton Searches", description: "Dominate local Google searches in Brighton & Hove. Free local SEO audit." },
  other: { "geo.region": "GB-ESX", "geo.placename": "Brighton, East Sussex", "geo.position": "50.8225;-0.1372", ICBM: "50.8225, -0.1372" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/brighton/seo/local#webpage`,
      url: `${BASE_URL}/brighton/seo/local`,
      name: "Local SEO Brighton | Rank #1 in Brighton Searches",
      description: "Dominate local Google searches in Brighton & Hove. GBP, local citations & map pack rankings.",
      inLanguage: "en-GB",
      breadcrumb: { "@id": `${BASE_URL}/brighton/seo/local#breadcrumb` },
      datePublished: "2026-03-20", dateModified: "2026-03-20",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/brighton/seo/local#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Brighton Digital Marketing", item: `${BASE_URL}/brighton` },
        { "@type": "ListItem", position: 3, name: "Local SEO Brighton", item: `${BASE_URL}/brighton/seo/local` },
      ],
    },
    {
      "@type": "Service",
      name: "Local SEO Brighton",
      serviceType: "Local Search Engine Optimisation",
      description: "Hyper-local SEO for Brighton businesses — Google Business Profile optimisation, citation building, and map pack domination across BN1–BN3 postcodes.",
      provider: {
        "@type": "LocalBusiness", name: "Small Business Marketing Professional", url: BASE_URL,
        address: { "@type": "PostalAddress", addressLocality: "Brighton", addressRegion: "East Sussex", postalCode: "BN1", addressCountry: "GB" },
      },
      areaServed: [{ "@type": "City", name: "Brighton" }, { "@type": "City", name: "Hove" }],
      offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", price: "299", priceCurrency: "GBP", unitText: "MONTH" } },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/brighton/seo/local#faq`,
      mainEntity: [
        { "@type": "Question", name: "What is local SEO and why does my Brighton business need it?", acceptedAnswer: { "@type": "Answer", text: "Local SEO is the process of optimising your online presence to rank in location-specific searches on Google — like 'plumber Brighton' or 'restaurant near me' in Hove. It's essential for any Brighton business with a physical location or that serves a local area." } },
        { "@type": "Question", name: "How long does local SEO take in Brighton?", acceptedAnswer: { "@type": "Answer", text: "Most Brighton businesses see Google Business Profile improvements within 4–6 weeks. Map pack rankings typically improve within 60–90 days, with consistent gains continuing month-on-month as citation authority builds." } },
        { "@type": "Question", name: "Do you optimise Google Business Profiles for Brighton businesses?", acceptedAnswer: { "@type": "Answer", text: "Yes — GBP optimisation is central to our Brighton local SEO service. We optimise every field: categories, services, opening hours, photos, posts, Q&A, and review management strategy." } },
        { "@type": "Question", name: "What areas of Brighton do you target?", acceptedAnswer: { "@type": "Answer", text: "We target all Brighton & Hove postcodes: BN1, BN2, BN3 and surrounding areas including Portslade, Shoreham, Worthing, and Lewes. We build hyper-local landing pages for each neighbourhood you serve." } },
        { "@type": "Question", name: "How is local SEO different from regular SEO?", acceptedAnswer: { "@type": "Answer", text: "Local SEO focuses on ranking in Google's Map Pack (the top 3 map results) and near-me searches. It involves Google Business Profile, local citations, and location-specific landing pages — different tools from standard national SEO." } },
      ],
    },
  ],
};

const brightonAreas = [
  "Brighton City Centre", "Hove", "Kemptown", "North Laine",
  "Preston Park", "Fiveways", "Seven Dials", "Hanover",
  "Portslade", "Shoreham", "Worthing", "Lewes",
];

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

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ background: "#0D1627", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap" style={{ color: "#64748B" }}>
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li><Link href="/brighton" className="hover:text-white transition-colors">Brighton</Link></li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li style={{ color: "#F8FAFC" }} className="font-medium">Local SEO Brighton</li>
        </ol>
      </div>
    </nav>
  );
}

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
          Rank #1 on Google Maps &<br /><span className="gradient-text">Local Search in Brighton</span>
        </h1>
        <p className="anim-fade-up anim-delay-2 text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: "#CBD5E1" }}>
          Thousands of Brighton locals search Google every day for businesses like yours. Our hyper-local SEO strategies put you at the top of the Map Pack across BN1, BN2, and BN3 postcodes.
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

const features = [
  { Icon: Map, title: "Google Business Profile Optimisation", desc: "Complete GBP overhaul — categories, services, photos, posts, Q&A, and a proven review-generation strategy. We make your Brighton listing irresistible to Google and customers alike.", gradient: "linear-gradient(135deg,#3B82F6,#1D4ED8)", glow: "rgba(59,130,246,0.25)", stagger: "card-stagger-1" },
  { Icon: Building2, title: "Local Citation Building", desc: "200+ consistent NAP listings across UK directories, Brighton business listings, Chamber of Commerce, and industry-specific sites. Citations are the backbone of Map Pack dominance.", gradient: "linear-gradient(135deg,#8B5CF6,#6D28D9)", glow: "rgba(139,92,246,0.25)", stagger: "card-stagger-2" },
  { Icon: Search, title: "Brighton Map Pack Domination", desc: "Hyper-local landing pages targeting every Brighton neighbourhood — Hove, Kemptown, North Laine, and more. Plus on-page schema, internal linking, and local content strategy.", gradient: "linear-gradient(135deg,#06B6D4,#0E7490)", glow: "rgba(6,182,212,0.25)", stagger: "card-stagger-3" },
];

function FeaturesSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3" style={{ color: "#F8FAFC" }}>Brighton Local SEO Services</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>The exact strategies that get Brighton businesses to the top of Google Maps — and keep them there.</p>
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

const problems = [
  "Brighton searches like 'plumber near me' or 'Brighton solicitor' send customers to your competitors",
  "Your Google Business Profile is incomplete and you're invisible in the BN1–BN2 Map Pack",
  "Footfall from Google search has dropped and you don't know how to fix it",
  "Thousands of tourists and locals searching Brighton services daily — and you're not there",
];
const solutions = [
  "We get you into the top 3 Map Pack results for your highest-value Brighton search terms",
  "Complete GBP overhaul: categories, photos, reviews, posts, and local signals Google loves",
  "Monthly rank tracking across every BN postcode — you'll see exactly where you rank and how it's improving",
  "150+ Brighton businesses already ranking — we likely know your industry's local landscape already",
];

function WhySection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Why Local SEO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Why Brighton Businesses Must Invest in Local SEO</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 border" style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.18)" }}>
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2" style={{ color: "#FCA5A5" }}>
              <XCircle className="w-5 h-5 shrink-0" /> Without Local SEO in Brighton
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
              <CheckCircle className="w-5 h-5 shrink-0" /> With SBMP Local SEO Brighton
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

const steps = [
  { num: "01", title: "Local Audit", desc: "Full analysis of your GBP health, local citations, competitor Map Pack rankings, and keyword gaps across BN1–BN3 postcodes.", bg: "#2563EB", shadow: "rgba(37,99,235,0.45)" },
  { num: "02", title: "GBP Optimisation", desc: "Complete Google Business Profile overhaul: primary category, services, photos, posts, Q&A, and a structured review generation strategy.", bg: "#7C3AED", shadow: "rgba(124,58,237,0.45)" },
  { num: "03", title: "Citation Building", desc: "NAP consistency across 200+ UK directories, Brighton Chamber of Commerce, Yell, Thomson Local, and industry-specific directories.", bg: "#0891B2", shadow: "rgba(8,145,178,0.45)" },
  { num: "04", title: "Monitor & Scale", desc: "Monthly rank tracking reports across Brighton postcodes, GBP insights review, and ongoing optimisation to maintain and extend your #1 positions.", bg: "#059669", shadow: "rgba(5,150,105,0.45)" },
];

function ProcessSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3" style={{ color: "#F8FAFC" }}>How We Get Brighton Businesses to #1 on Google Maps</h2>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-8 left-[14%] right-[14%] h-px opacity-30" style={{ background: "linear-gradient(to right,#2563EB,#7C3AED,#0891B2,#059669)" }} />
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              {i < steps.length - 1 && <div className="lg:hidden absolute top-16 left-1/2 -translate-x-1/2 w-px h-10 mt-1" style={{ background: "rgba(255,255,255,0.08)" }} />}
              <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg mb-4"
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

const stats = [
  { value: "3×", label: "More Google Map Views", sub: "average for Brighton clients" },
  { value: "200+", label: "Local Citations Built", sub: "per Brighton business" },
  { value: "90-Day", label: "Ranking Guarantee", sub: "or we work for free" },
];

function StatsSection() {
  return (
    <section id="results" className="py-20 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Brighton Local SEO Results</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Local SEO Results for Brighton Businesses</h2>
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

function AreasSection() {
  return (
    <section className="py-16 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Local SEO Coverage</span>
        <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-8" style={{ color: "#F8FAFC" }}>Brighton Local SEO Coverage Area</h2>
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

function TestimonialSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl p-8 md:p-10 border text-center" style={{ background: "rgba(30,41,59,0.5)", borderColor: "rgba(71,85,105,0.5)" }}>
          <div className="flex gap-1 justify-center mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
          </div>
          <blockquote className="text-xl leading-relaxed mb-6 italic" style={{ color: "#CBD5E1" }}>
            &ldquo;We went from completely invisible to top 3 on Google Maps for every Brighton plumbing search in just 8 weeks. The phone hasn&apos;t stopped ringing since.&rdquo;
          </blockquote>
          <div className="font-semibold" style={{ color: "#F8FAFC" }}>Mark T.</div>
          <div className="text-sm mt-0.5" style={{ color: "#60A5FA" }}>Brighton Plumbing Services, BN1</div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What is local SEO and why does my Brighton business need it?", a: "Local SEO optimises your online presence so you appear at the top of Google searches with a local intent — like 'plumber Brighton' or 'café near me in Hove'. 97% of people search for local businesses online before visiting. If you're not in the top 3, you're invisible to thousands of daily Brighton searches." },
  { q: "How long does local SEO take in Brighton?", a: "GBP improvements appear within 4–6 weeks. Map Pack rankings typically move within 60–90 days, with sustained gains month-on-month as your local citation authority builds. We provide monthly rank tracking so you see progress clearly." },
  { q: "Do you optimise Google Business Profiles for Brighton businesses?", a: "Yes — GBP optimisation is the cornerstone of our Brighton local SEO service. We optimise your primary category, service areas, attributes, photos, posts, Q&A, and implement a structured review-generation strategy to boost your local signals." },
  { q: "What areas of Brighton do you target?", a: "We target all Brighton & Hove postcodes (BN1, BN2, BN3) plus surrounding areas: Portslade, Shoreham, Worthing, and Lewes. We build hyper-local service area pages for every neighbourhood you serve." },
  { q: "How is local SEO different from regular SEO?", a: "Local SEO focuses on Google's Map Pack results (the 3 map results shown for local searches), Google Business Profile signals, and NAP (Name, Address, Phone) consistency across directories. Regular SEO targets organic rankings nationally — both complement each other but require different strategies." },
];

function FAQSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>FAQ</span>
          <h2 className="text-3xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Brighton Local SEO — FAQs</h2>
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

function CTASection() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden" style={{ background: "#0A0F1E" }}>
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "rgba(29,78,216,0.12)", filter: "blur(150px)" }} />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#F8FAFC" }}>Ready to Dominate Brighton Local Search?</h2>
          <p className="text-lg" style={{ color: "#94A3B8" }}>Free local SEO audit — we&apos;ll show you exactly where you rank and how to reach #1 in Brighton.</p>
        </div>
        <div className="rounded-2xl p-7 md:p-8 border" style={{ background: "#0D1627", borderColor: "rgba(255,255,255,0.07)" }}>
          <form action="/api/contact" method="POST" className="space-y-5">
            <input type="hidden" name="service" value="Local SEO Brighton" />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="ls-name" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Full Name *</label>
                <input id="ls-name" type="text" name="name" required autoComplete="name" placeholder="Your name"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} />
              </div>
              <div>
                <label htmlFor="ls-email" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Email Address *</label>
                <input id="ls-email" type="email" name="email" required autoComplete="email" placeholder="hello@brightonbiz.co.uk"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="ls-phone" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Phone Number</label>
                <input id="ls-phone" type="tel" name="phone" autoComplete="tel" placeholder="+44 1273 000000"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} />
              </div>
              <div>
                <label htmlFor="ls-biz" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Business Name *</label>
                <input id="ls-biz" type="text" name="business" required autoComplete="organization" placeholder="Your Brighton business"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} />
              </div>
            </div>
            <div>
              <label htmlFor="ls-msg" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Your Goals / Message</label>
              <textarea id="ls-msg" name="message" rows={4} placeholder="Tell us about your Brighton business and local SEO goals…"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none border resize-none"
                style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} />
            </div>
            <button type="submit" className="w-full text-white font-semibold py-4 rounded-xl text-base flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
              style={{ background: "linear-gradient(135deg,#2563EB,#1D4ED8)", boxShadow: "0 4px 24px rgba(37,99,235,0.35)" }}>
              Claim My Free Local SEO Audit <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const related = [
  { title: "Email Marketing Brighton", desc: "Automated campaigns that drive repeat business from your Brighton customers.", href: "/brighton/content/email", color: "#3B82F6" },
  { title: "Ecommerce SEO Brighton", desc: "Product and category page SEO for Brighton online stores and retailers.", href: "/brighton/seo/ecommerce", color: "#8B5CF6" },
  { title: "WordPress Web Design Brighton", desc: "SEO-ready WordPress sites built for Brighton businesses.", href: "/brighton/web/wordpress", color: "#06B6D4" },
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

export default function LocalSEOBrightonPage() {
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
