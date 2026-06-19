import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingCart, Settings, TrendingUp, Star, MapPin, CheckCircle, XCircle, ArrowRight, ChevronRight } from "lucide-react";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const metadata: Metadata = {
  title: "Ecommerce SEO Brighton | Grow Online Sales",
  description: "Specialist ecommerce SEO for Brighton online stores. Product page optimisation, technical SEO & category rankings. Free ecommerce SEO audit for Brighton retailers.",
  keywords: ["ecommerce SEO Brighton", "online store SEO Brighton", "Shopify SEO Brighton", "WooCommerce SEO Brighton", "product page SEO Brighton", "ecommerce agency Brighton", "Brighton online store ranking"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  alternates: { canonical: `${BASE_URL}/brighton/seo/ecommerce`, languages: { "en-GB": `${BASE_URL}/brighton/seo/ecommerce` } },
  openGraph: { title: "Ecommerce SEO Brighton | Grow Online Sales | SBMP", description: "Specialist ecommerce SEO for Brighton online stores. Product page optimisation, technical SEO & category rankings.", url: `${BASE_URL}/brighton/seo/ecommerce`, type: "website", locale: "en_GB", siteName: "SBMP — Local Digital Marketing" },
  twitter: { card: "summary_large_image", title: "Ecommerce SEO Brighton | Grow Online Sales", description: "Specialist ecommerce SEO for Brighton online stores. Free audit." },
  other: { "geo.region": "GB-ESX", "geo.placename": "Brighton, East Sussex", "geo.position": "50.8225;-0.1372", ICBM: "50.8225, -0.1372" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${BASE_URL}/brighton/seo/ecommerce#webpage`, url: `${BASE_URL}/brighton/seo/ecommerce`, name: "Ecommerce SEO Brighton | Grow Online Sales", inLanguage: "en-GB", breadcrumb: { "@id": `${BASE_URL}/brighton/seo/ecommerce#breadcrumb` }, datePublished: "2026-03-20", dateModified: "2026-03-20" },
    { "@type": "BreadcrumbList", "@id": `${BASE_URL}/brighton/seo/ecommerce#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Brighton Digital Marketing", item: `${BASE_URL}/brighton` }, { "@type": "ListItem", position: 3, name: "Ecommerce SEO Brighton", item: `${BASE_URL}/brighton/seo/ecommerce` }] },
    { "@type": "Service", name: "Ecommerce SEO Brighton", serviceType: "Ecommerce Search Engine Optimisation", description: "Specialist ecommerce SEO for Brighton online stores — Shopify, WooCommerce, product and category page optimisation.", provider: { "@type": "LocalBusiness", name: "Small Business Marketing Professional", url: BASE_URL, address: { "@type": "PostalAddress", addressLocality: "Brighton", addressRegion: "East Sussex", postalCode: "BN1", addressCountry: "GB" } }, areaServed: { "@type": "City", name: "Brighton" }, offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", price: "399", priceCurrency: "GBP", unitText: "MONTH" } } },
    { "@type": "FAQPage", "@id": `${BASE_URL}/brighton/seo/ecommerce#faq`, mainEntity: [{ "@type": "Question", name: "Which ecommerce platforms do you support?", acceptedAnswer: { "@type": "Answer", text: "We specialise in Shopify, WooCommerce, Magento, and BigCommerce. We also work with custom-built stores and can audit any platform for technical SEO issues affecting your Brighton online store's rankings." } }, { "@type": "Question", name: "How long does ecommerce SEO take?", acceptedAnswer: { "@type": "Answer", text: "Technical fixes deliver quick wins within 30–60 days. Significant traffic and revenue growth for Brighton online stores typically builds over 3–6 months as optimised pages gain authority and rankings compound." } }, { "@type": "Question", name: "Do you do keyword research for product pages?", acceptedAnswer: { "@type": "Answer", text: "Yes — buyer-intent keyword research is central to our ecommerce SEO process. We map keywords to every product and category page, targeting the terms Brighton shoppers use when ready to buy." } }, { "@type": "Question", name: "Can you fix our slow site speed?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Site speed and Core Web Vitals are a priority. We optimise images, implement caching, reduce render-blocking resources, and achieve sub-2s load speeds on both mobile and desktop." } }, { "@type": "Question", name: "What results can Brighton online stores expect?", acceptedAnswer: { "@type": "Answer", text: "Our Brighton ecommerce clients typically see 100–320% organic traffic increases within 6 months, with consistent revenue growth thereafter. Results depend on competition, current site health, and investment level." } }] },
  ],
};

const brightonAreas = ["Brighton City Centre", "Hove", "Kemptown", "North Laine", "Preston Park", "Fiveways", "Seven Dials", "Hanover", "Portslade", "Shoreham", "Worthing", "Lewes"];

function PageStyles() {
  return <style>{`
    @keyframes fade-up { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
    @keyframes card-in { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
    @keyframes gradient-shift { 0%,100% { background-position:0% 50%; } 50% { background-position:100% 50%; } }
    @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
    @keyframes float-blob { 0%,100% { transform:translate(0,0) scale(1); } 50% { transform:translate(30px,-20px) scale(1.05); } }
    .anim-fade-up { animation: fade-up 0.7s ease both; }
    .anim-delay-1 { animation-delay: 0.1s; } .anim-delay-2 { animation-delay: 0.2s; } .anim-delay-3 { animation-delay: 0.3s; }
    .card-stagger-1 { animation: card-in 0.6s ease both 0.05s; } .card-stagger-2 { animation: card-in 0.6s ease both 0.15s; } .card-stagger-3 { animation: card-in 0.6s ease both 0.25s; }
    .blob-a { animation: float-blob 8s ease-in-out infinite; }
    .pulse-dot { animation: pulse-dot 2s ease infinite; }
    .gradient-text { background: linear-gradient(135deg,#60A5FA,#38BDF8,#818CF8); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation: gradient-shift 4s ease infinite; }
    .hero-glow-btn:hover { box-shadow: 0 0 40px rgba(59,130,246,0.55); transform: scale(1.04); }
    .svc-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
    .svc-card:hover { box-shadow: 0 20px 50px var(--card-glow,rgba(59,130,246,0.25)); transform: translateY(-4px); }
    details summary::-webkit-details-marker { display:none; }
  `}</style>;
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
          <li style={{ color: "#F8FAFC" }} className="font-medium">Ecommerce SEO Brighton</li>
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
      <div className="blob-a absolute -bottom-40 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: "rgba(139,92,246,0.10)", filter: "blur(130px)", animationDelay: "4s" }} />
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center">
        <div className="anim-fade-up inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-8 border" style={{ background: "rgba(59,130,246,0.10)", borderColor: "rgba(59,130,246,0.28)", color: "#93C5FD" }}>
          <span className="pulse-dot w-2 h-2 bg-green-400 rounded-full" />Trusted by 150+ Brighton Businesses
        </div>
        <h1 className="anim-fade-up anim-delay-1 font-black leading-tight mb-6" style={{ fontSize: "clamp(2.3rem, 6vw, 4rem)", color: "#F8FAFC" }}>
          Ecommerce SEO That Turns Brighton<br /><span className="gradient-text">Online Stores Into Sales Machines</span>
        </h1>
        <p className="anim-fade-up anim-delay-2 text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: "#CBD5E1" }}>
          Stop relying on paid ads for every sale. Our specialist ecommerce SEO for Brighton retailers drives consistent organic traffic, ranking your products where buyers are already searching.
        </p>
        <div className="anim-fade-up anim-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="hero-glow-btn inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300" style={{ background: "#2563EB" }}>
            Get Free Brighton Audit <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#results" className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full text-lg border transition-all duration-300 hover:bg-white/5" style={{ color: "#F8FAFC", borderColor: "rgba(255,255,255,0.20)" }}>
            See Results
          </a>
        </div>
      </div>
    </section>
  );
}

const features = [
  { Icon: ShoppingCart, title: "Product & Category Page SEO", desc: "Buyer-intent keyword mapping across every product and category. Optimised title tags, meta descriptions, structured data, and compelling copy that ranks and converts.", gradient: "linear-gradient(135deg,#3B82F6,#1D4ED8)", glow: "rgba(59,130,246,0.25)", stagger: "card-stagger-1" },
  { Icon: Settings, title: "Technical Ecommerce SEO Audits", desc: "Deep crawl of your Brighton store: faceted navigation, duplicate content, indexation issues, Core Web Vitals, schema markup, and canonicalisation — all fixed.", gradient: "linear-gradient(135deg,#8B5CF6,#6D28D9)", glow: "rgba(139,92,246,0.25)", stagger: "card-stagger-2" },
  { Icon: TrendingUp, title: "Shopify & WooCommerce Specialists", desc: "Platform-specific expertise: Shopify collection page SEO, WooCommerce category optimisation, product schema, breadcrumbs, and speed optimisation for both.", gradient: "linear-gradient(135deg,#06B6D4,#0E7490)", glow: "rgba(6,182,212,0.25)", stagger: "card-stagger-3" },
];

function FeaturesSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3" style={{ color: "#F8FAFC" }}>Brighton Ecommerce SEO Services</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>Everything your Brighton online store needs to rank, convert, and grow — organically.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => {
            const { Icon } = f;
            return (
              <div key={f.title} className={`${f.stagger} svc-card rounded-2xl p-7 border flex flex-col`} style={{ background: "rgba(30,41,59,0.5)", borderColor: "rgba(71,85,105,0.6)", "--card-glow": f.glow } as React.CSSProperties}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0" style={{ background: f.gradient }}><Icon className="w-6 h-6 text-white" /></div>
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
  "Your Brighton store ranks for brand terms but nothing transactional — missing thousands of ready buyers",
  "Product pages are thin, unoptimised, and cannibalising each other in Google's index",
  "Site speed is poor — every extra second costs 7% of conversions and signals low quality to Google",
  "You're completely reliant on Google Ads — one algorithm change or bad month kills your cash flow",
];
const solutions = [
  "Product and category pages optimised for buyer-intent keywords that drive immediate, measurable sales",
  "Full technical SEO audit fixing crawl errors, canonicals, structured data, and Core Web Vitals",
  "Sub-2s load speed as standard — better UX and stronger Brighton Google rankings simultaneously",
  "Sustainable organic revenue that compounds month-on-month, independent of ad spend fluctuations",
];

function WhySection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Why Ecommerce SEO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Why Brighton Online Stores Need Specialist Ecommerce SEO</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 border" style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.18)" }}>
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2" style={{ color: "#FCA5A5" }}><XCircle className="w-5 h-5 shrink-0" /> Without Ecommerce SEO</h3>
            <ul className="space-y-3">{problems.map((p) => <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#94A3B8" }}><XCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F87171" }} />{p}</li>)}</ul>
          </div>
          <div className="rounded-2xl p-7 border" style={{ background: "rgba(34,197,94,0.06)", borderColor: "rgba(34,197,94,0.18)" }}>
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2" style={{ color: "#86EFAC" }}><CheckCircle className="w-5 h-5 shrink-0" /> With SBMP Ecommerce SEO Brighton</h3>
            <ul className="space-y-3">{solutions.map((s) => <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#94A3B8" }}><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#4ADE80" }} />{s}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { num: "01", title: "Technical Audit", desc: "Deep crawl of your store: indexation, site speed, Core Web Vitals, schema markup, duplicate content, and canonicalisation — all issues prioritised by impact.", bg: "#2563EB", shadow: "rgba(37,99,235,0.45)" },
  { num: "02", title: "Keyword Research", desc: "Buyer-intent keyword mapping for every product and category — finding the exact terms Brighton shoppers use when they're ready to buy from your store.", bg: "#7C3AED", shadow: "rgba(124,58,237,0.45)" },
  { num: "03", title: "On-Page Optimisation", desc: "Title tags, meta descriptions, H1/H2 structure, product copy, internal linking, and structured data (Product, BreadcrumbList, Review schemas) implemented across every key page.", bg: "#0891B2", shadow: "rgba(8,145,178,0.45)" },
  { num: "04", title: "Content & Links", desc: "Buying guides, comparison content, and link building to boost category authority and long-tail keyword rankings — compounding traffic month-on-month.", bg: "#059669", shadow: "rgba(5,150,105,0.45)" },
];

function ProcessSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3" style={{ color: "#F8FAFC" }}>How We Scale Your Brighton Online Store With SEO</h2>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-8 left-[14%] right-[14%] h-px opacity-30" style={{ background: "linear-gradient(to right,#2563EB,#7C3AED,#0891B2,#059669)" }} />
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              {i < steps.length - 1 && <div className="lg:hidden absolute top-16 left-1/2 -translate-x-1/2 w-px h-10 mt-1" style={{ background: "rgba(255,255,255,0.08)" }} />}
              <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-lg mb-4" style={{ background: s.bg, boxShadow: `0 8px 30px ${s.shadow}` }}>{s.num}</div>
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
  { value: "320%", label: "Average Traffic Increase", sub: "for Brighton ecommerce clients" },
  { value: "£2.4M", label: "Revenue Generated", sub: "across Brighton online stores" },
  { value: "50+", label: "Ecommerce Stores Ranked", sub: "Shopify, WooCommerce & more" },
];

function StatsSection() {
  return (
    <section id="results" className="py-20 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Ecommerce SEO Results</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Brighton Ecommerce SEO Results</h2>
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
        <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>Service Area</span>
        <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-8" style={{ color: "#F8FAFC" }}>Brighton Ecommerce SEO Coverage Area</h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {brightonAreas.map((a) => <span key={a} className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium border" style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.22)", color: "#93C5FD" }}><MapPin className="w-3 h-3" />{a}</span>)}
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
          <div className="flex gap-1 justify-center mb-6">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}</div>
          <blockquote className="text-xl leading-relaxed mb-6 italic" style={{ color: "#CBD5E1" }}>
            &ldquo;Organic revenue is up 280% in just 6 months. We barely run paid ads anymore — the SEO traffic is so consistent. Best decision we ever made for our Brighton boutique.&rdquo;
          </blockquote>
          <div className="font-semibold" style={{ color: "#F8FAFC" }}>Sarah K.</div>
          <div className="text-sm mt-0.5" style={{ color: "#60A5FA" }}>Brighton Fashion Store, North Laine</div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Which ecommerce platforms do you support?", a: "We specialise in Shopify, WooCommerce, Magento, and BigCommerce. We've also worked with custom-built stores and can audit any platform for the technical SEO issues hurting your Brighton store's rankings." },
  { q: "How long does ecommerce SEO take?", a: "Technical fixes deliver quick wins within 30–60 days. Significant organic traffic and revenue growth for Brighton online stores typically builds over 3–6 months as optimised pages gain authority. SEO compounds — results accelerate over time." },
  { q: "Do you do keyword research for product pages?", a: "Yes — buyer-intent keyword research is the foundation of our ecommerce SEO process. We map specific keywords to every product and category, targeting what Brighton and UK shoppers actually search when they're ready to buy." },
  { q: "Can you fix our slow site speed?", a: "Absolutely. Site speed and Core Web Vitals are a top priority. We optimise images (next-gen formats, lazy loading), implement caching, remove render-blocking scripts, and consistently achieve sub-2s load times on mobile." },
  { q: "What results can Brighton online stores expect?", a: "Our Brighton ecommerce clients typically see 100–320% organic traffic increases within 6 months. Revenue impact varies by competition and product margin, but most clients recover their investment within 60–90 days through increased organic sales." },
];

function FAQSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#60A5FA" }}>FAQ</span>
          <h2 className="text-3xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Brighton Ecommerce SEO — FAQs</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border overflow-hidden" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.07)" }}>
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-medium list-none hover:bg-white/3 transition-colors" style={{ color: "#F8FAFC" }}>
                {f.q}<ChevronRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-open:rotate-90" style={{ color: "#94A3B8" }} />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#F8FAFC" }}>Ready to Scale Your Brighton Online Store With SEO?</h2>
          <p className="text-lg" style={{ color: "#94A3B8" }}>Free ecommerce SEO audit — we&apos;ll identify exactly what&apos;s holding your Brighton store back.</p>
        </div>
        <div className="rounded-2xl p-7 md:p-8 border" style={{ background: "#0D1627", borderColor: "rgba(255,255,255,0.07)" }}>
          <form action="/api/contact" method="POST" className="space-y-5">
            <input type="hidden" name="service" value="Ecommerce SEO Brighton" />
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label htmlFor="ec-name" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Full Name *</label><input id="ec-name" type="text" name="name" required autoComplete="name" placeholder="Your name" className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} /></div>
              <div><label htmlFor="ec-email" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Email Address *</label><input id="ec-email" type="email" name="email" required autoComplete="email" placeholder="hello@brightonstore.co.uk" className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label htmlFor="ec-phone" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Phone Number</label><input id="ec-phone" type="tel" name="phone" autoComplete="tel" placeholder="+44 1273 000000" className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} /></div>
              <div><label htmlFor="ec-biz" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Business Name *</label><input id="ec-biz" type="text" name="business" required autoComplete="organization" placeholder="Your online store" className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} /></div>
            </div>
            <div><label htmlFor="ec-msg" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Your Goals / Message</label><textarea id="ec-msg" name="message" rows={4} placeholder="Tell us about your Brighton online store and what you're hoping to achieve with SEO…" className="w-full rounded-xl px-4 py-3 text-sm outline-none border resize-none" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} /></div>
            <button type="submit" className="w-full text-white font-semibold py-4 rounded-xl text-base flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all duration-300" style={{ background: "linear-gradient(135deg,#2563EB,#1D4ED8)", boxShadow: "0 4px 24px rgba(37,99,235,0.35)" }}>
              Claim My Free Ecommerce SEO Audit <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const related = [
  { title: "Local SEO Brighton", desc: "Dominate Google Maps and local searches across Brighton's BN postcodes.", href: "/brighton/seo/local" },
  { title: "Landing Page Design Brighton", desc: "High-converting landing pages for your Brighton campaigns and products.", href: "/brighton/web/landing-pages" },
  { title: "WordPress Web Design Brighton", desc: "WooCommerce-ready WordPress sites optimised for speed and SEO.", href: "/brighton/web/wordpress" },
];

function RelatedSection() {
  return (
    <section className="py-16 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#F8FAFC" }}>Related Brighton Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {related.map((r) => (
            <Link key={r.href} href={r.href} className="rounded-xl p-5 border hover:-translate-y-1 transition-all duration-300 block group" style={{ background: "rgba(30,41,59,0.4)", borderColor: "rgba(71,85,105,0.5)" }}>
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

export default function EcommerceSEOBrightonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main><Breadcrumb /><HeroSection /><FeaturesSection /><WhySection /><ProcessSection /><StatsSection /><AreasSection /><TestimonialSection /><FAQSection /><CTASection /><RelatedSection /></main>
    </>
  );
}
