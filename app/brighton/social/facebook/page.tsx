import type { Metadata } from "next";
import { Target, Users, BarChart2, MapPin, Star, ChevronRight, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK = "https://wa.me/923474825228?text=Hi%2C%20I%27d%20like%20to%20discuss%20Facebook%20Ads%20for%20my%20Brighton%20business";

export const metadata: Metadata = {
  title: "Facebook Ads Brighton | Lead Generation & PPC Agency",
  description: "Facebook Ads management for Brighton businesses. Lead generation, retargeting, lookalike audiences & full funnel strategy. 8× ROAS. Free audit.",
  keywords: [
    "facebook ads brighton","facebook advertising brighton","facebook ads agency brighton",
    "facebook lead generation brighton","social media advertising brighton","paid social brighton",
    "facebook retargeting brighton","brighton facebook ads management","meta ads brighton",
    "ppc brighton","facebook marketing brighton","lead generation brighton",
    "facebook ads hove","facebook ads east sussex","brighton paid advertising",
    "facebook lookalike audiences brighton","facebook ad agency near me brighton",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  alternates: { canonical: `${BASE_URL}/brighton/social/facebook`, languages: { "en-GB": `${BASE_URL}/brighton/social/facebook` } },
  openGraph: {
    title: "Facebook Ads Brighton | 8× ROAS — Lead Generation Agency",
    description: "Facebook & Meta Ads for Brighton businesses. Lead gen, retargeting, lookalike audiences. £500K+ ad spend managed. Free strategy call.",
    url: `${BASE_URL}/brighton/social/facebook`,
    siteName: "Small Business Marketing Professional",
    locale: "en_GB",
    type: "website",
    images: [{ url: `${BASE_URL}/og-brighton-facebook.jpg`, width: 1200, height: 630, alt: "Facebook Ads Brighton" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Ads Brighton | 8× ROAS Lead Generation",
    description: "Expert Facebook & Meta Ads management for Brighton businesses. 8× ROAS, £500K+ managed. Free audit.",
    images: [`${BASE_URL}/og-brighton-facebook.jpg`],
  },
  other: {
    "geo.region": "GB-ESX",
    "geo.placename": "Brighton, East Sussex",
    "geo.position": "50.8225;-0.1372",
    ICBM: "50.8225, -0.1372",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/brighton/social/facebook#webpage`,
      url: `${BASE_URL}/brighton/social/facebook`,
      name: "Facebook Ads Brighton | Lead Generation & PPC Agency",
      description: "Facebook Ads management for Brighton businesses. Lead generation, retargeting, lookalike audiences & full funnel strategy.",
      inLanguage: "en-GB",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      breadcrumb: { "@id": `${BASE_URL}/brighton/social/facebook#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/brighton/social/facebook#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Brighton", item: `${BASE_URL}/brighton` },
        { "@type": "ListItem", position: 3, name: "Facebook Ads Brighton", item: `${BASE_URL}/brighton/social/facebook` },
      ],
    },
    {
      "@type": "Service",
      name: "Facebook Ads Brighton",
      provider: { "@type": "MarketingAgency", name: "Small Business Marketing Professional", url: BASE_URL },
      areaServed: { "@type": "City", name: "Brighton", containedInPlace: { "@type": "AdministrativeArea", name: "East Sussex" } },
      description: "Facebook & Meta Ads management including lead generation, retargeting, lookalike audiences, and full funnel ad strategy for Brighton businesses.",
      offers: { "@type": "Offer", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What budget do I need for Facebook Ads in Brighton?", acceptedAnswer: { "@type": "Answer", text: "We recommend a minimum ad spend of £500/month for Brighton businesses, though £1,000–£2,000/month delivers faster results. Budget is separate from our management fee." } },
        { "@type": "Question", name: "How quickly will I see results from Facebook Ads?", acceptedAnswer: { "@type": "Answer", text: "Most Brighton clients see leads within the first 7 days. The learning phase typically takes 2–4 weeks before campaigns fully optimise. Significant ROI is usually visible by month 2." } },
        { "@type": "Question", name: "Do you create the ad creative and copy?", acceptedAnswer: { "@type": "Answer", text: "Yes — our team handles all ad creative, copywriting, and video editing. We A/B test multiple creatives per campaign to find the best performers for your Brighton audience." } },
        { "@type": "Question", name: "What is retargeting and do Brighton businesses need it?", acceptedAnswer: { "@type": "Answer", text: "Retargeting shows ads to people who visited your website or engaged with your content. For Brighton businesses, this converts warm prospects who didn't act the first time — often at 3–5× lower cost per lead." } },
        { "@type": "Question", name: "Which industries do you run Facebook Ads for in Brighton?", acceptedAnswer: { "@type": "Answer", text: "We work with all Brighton industries including property, hospitality, retail, legal, health & wellness, trades, and professional services. Our targeting strategies are tailored per industry." } },
      ],
    },
  ],
};

const brightonAreas = [
  "Brighton City Centre","Hove","Kemptown","North Laine","Preston Park",
  "Fiveways","Seven Dials","Hanover","Portslade","Shoreham","Worthing","Lewes",
];

const features = [
  {
    icon: Target,
    title: "Lead Generation Campaigns",
    desc: "Precision-targeted Facebook lead gen ads that capture qualified Brighton prospects directly inside the platform — no landing page friction.",
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(59,130,246,0.3)",
    stagger: "animate-fade-in-1",
  },
  {
    icon: Users,
    title: "Retargeting & Lookalike Audiences",
    desc: "Re-engage warm prospects and clone your best Brighton customers with Meta's lookalike audience technology for scalable growth.",
    gradient: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.3)",
    stagger: "animate-fade-in-2",
  },
  {
    icon: BarChart2,
    title: "Full Funnel Ad Strategy",
    desc: "Top, middle, and bottom-of-funnel campaigns working together — awareness to conversion — for maximum ROAS on every pound spent.",
    gradient: "from-violet-500 to-blue-600",
    glow: "rgba(139,92,246,0.3)",
    stagger: "animate-fade-in-3",
  },
];

const problems = [
  "Boosting posts with no strategy and wasting budget",
  "Low-quality leads who never convert into customers",
  "No idea which ads are working or why",
  "Paying agency fees with zero transparency",
  "Competitors outbidding you for the same Brighton audience",
];

const solutions = [
  "Data-led campaigns with clear KPIs before we spend a penny",
  "Lead qualification flows that filter tyre-kickers before they cost you",
  "Live dashboard reporting — see every metric in real time",
  "Transparent pricing with no hidden markups on ad spend",
  "Audience segmentation that finds Brighton buyers at scale",
];

const steps = [
  { n: "01", color: "from-blue-500 to-indigo-500", title: "Audience Research", desc: "We map your ideal Brighton customer — demographics, interests, behaviours — and build custom audiences before running a single ad." },
  { n: "02", color: "from-indigo-500 to-violet-500", title: "Creative & Copy", desc: "Our team produces scroll-stopping ad creative and persuasive copy tested across multiple variants to find your highest performer." },
  { n: "03", color: "from-violet-500 to-blue-500", title: "Launch & Optimise", desc: "Campaigns go live with daily monitoring. We adjust bids, audiences, and creative weekly based on real performance data." },
  { n: "04", color: "from-blue-500 to-cyan-500", title: "Scale & Report", desc: "Once profitable, we scale your winning campaigns and deliver monthly reports showing leads, cost per lead, and ROI clearly." },
];

const stats = [
  { value: "8×", label: "Average ROAS", sub: "return on ad spend" },
  { value: "£500K+", label: "Ad Spend Managed", sub: "across Brighton clients" },
  { value: "98%", label: "Client Retention", sub: "stay beyond 6 months" },
];

const faqs = [
  { q: "What budget do I need for Facebook Ads in Brighton?", a: "We recommend a minimum ad spend of £500/month for Brighton businesses, though £1,000–£2,000/month delivers faster results. Budget is separate from our management fee." },
  { q: "How quickly will I see results from Facebook Ads?", a: "Most Brighton clients see leads within the first 7 days. The learning phase typically takes 2–4 weeks before campaigns fully optimise. Significant ROI is usually visible by month 2." },
  { q: "Do you create the ad creative and copy?", a: "Yes — our team handles all ad creative, copywriting, and video editing. We A/B test multiple creatives per campaign to find the best performers for your Brighton audience." },
  { q: "What is retargeting and do Brighton businesses need it?", a: "Retargeting shows ads to people who visited your website or engaged with your content. For Brighton businesses, this converts warm prospects who didn't act the first time — often at 3–5× lower cost per lead." },
  { q: "Which industries do you run Facebook Ads for in Brighton?", a: "We work with all Brighton industries including property, hospitality, retail, legal, health & wellness, trades, and professional services. Our targeting strategies are tailored per industry." },
];

const related = [
  { href: "/brighton/social/instagram", label: "Instagram Marketing Brighton" },
  { href: "/brighton/content/email", label: "Email Marketing Brighton" },
  { href: "/brighton/web/landing-pages", label: "Landing Page Design Brighton" },
];

function PageStyles() {
  return (
    <style>{`
      @keyframes fadeInUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
      @keyframes fadeInLeft { from { opacity:0; transform:translateX(-24px); } to { opacity:1; transform:translateX(0); } }
      @keyframes fadeInRight { from { opacity:0; transform:translateX(24px); } to { opacity:1; transform:translateX(0); } }
      @keyframes pulse-slow { 0%,100% { opacity:.18; transform:scale(1); } 50% { opacity:.28; transform:scale(1.06); } }
      .animate-fade-in-1 { animation: fadeInUp .65s ease both .1s; }
      .animate-fade-in-2 { animation: fadeInUp .65s ease both .22s; }
      .animate-fade-in-3 { animation: fadeInUp .65s ease both .34s; }
      .animate-fade-in-hero { animation: fadeInUp .7s ease both .05s; }
      .animate-fade-left { animation: fadeInLeft .65s ease both .1s; }
      .animate-fade-right { animation: fadeInRight .65s ease both .1s; }
      .gradient-text { background: linear-gradient(135deg,#60A5FA,#3B82F6,#818CF8); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
      .svc-card { transition: box-shadow .3s ease, transform .3s ease; }
      .svc-card:hover { box-shadow: 0 20px 60px var(--card-glow,rgba(59,130,246,.25)); transform:translateY(-4px); }
      .stat-card { transition: box-shadow .3s ease, transform .3s ease; }
      .stat-card:hover { box-shadow: 0 20px 50px rgba(59,130,246,.2); transform:translateY(-4px); }
      details summary::-webkit-details-marker { display:none; }
      details[open] .faq-icon { transform:rotate(90deg); }
      .faq-icon { transition: transform .25s ease; }
    `}</style>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="border-b" style={{ background:"#0D1627", borderColor:"rgba(255,255,255,0.05)" }}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm" style={{ color:"#94A3B8" }}>
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><ChevronRight size={14} /></li>
          <li><Link href="/brighton" className="hover:text-white transition-colors">Brighton</Link></li>
          <li><ChevronRight size={14} /></li>
          <li style={{ color:"#F8FAFC" }}>Facebook Ads Brighton</li>
        </ol>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background:"linear-gradient(160deg,#0A0F1E 0%,#0D1627 50%,#0A0F1E 100%)" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background:"rgba(59,130,246,.12)", animation:"pulse-slow 7s ease-in-out infinite" }} />
        <div className="absolute bottom-20 right-1/4 w-56 h-56 rounded-full blur-3xl" style={{ background:"rgba(129,140,248,.1)", animation:"pulse-slow 9s ease-in-out infinite 2s" }} />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-in-hero inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6 border" style={{ background:"rgba(59,130,246,.1)", borderColor:"rgba(59,130,246,.25)", color:"#93C5FD" }}>
          <Target size={14} />
          Meta Ads • Lead Generation • Brighton
        </div>
        <h1 className="animate-fade-in-1 text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
          Facebook Ads That Generate{" "}
          <span className="gradient-text">Real Leads</span> for Brighton Businesses
        </h1>
        <p className="animate-fade-in-2 text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color:"#94A3B8" }}>
          Stop boosting posts. Start generating revenue. Our Facebook & Meta Ads campaigns for Brighton businesses deliver qualified leads at predictable cost — average 8× ROAS.
        </p>
        <div className="animate-fade-in-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white transition-all hover:scale-105" style={{ background:"linear-gradient(135deg,#2563EB,#4F46E5)" }}>
            Get Free Facebook Audit <ArrowRight size={18} />
          </a>
          <Link href="/brighton" className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-colors border" style={{ color:"#93C5FD", borderColor:"rgba(59,130,246,.3)", background:"rgba(59,130,246,.06)" }}>
            All Brighton Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-16 md:py-20" style={{ background:"#0A0F1E" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
            What Our Facebook Ads Service Includes
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"#94A3B8" }}>
            Full-service Meta Ads management — from audience research to daily optimisation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className={`${f.stagger} svc-card rounded-2xl p-6 border flex flex-col`} style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.6)", backdropFilter:"blur(8px)", "--card-glow": f.glow } as React.CSSProperties}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shrink-0`}>
                <f.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color:"#F8FAFC" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color:"#94A3B8" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="py-16 md:py-20" style={{ background:"#0D1627" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
            Why Brighton Businesses Need a Proper Facebook Ads Strategy
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"#94A3B8" }}>
            Most Brighton businesses burn ad budget without a strategy. Here&apos;s what changes with expert management.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 border" style={{ background:"rgba(239,68,68,0.05)", borderColor:"rgba(239,68,68,0.2)" }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color:"#FCA5A5" }}>
              <XCircle size={20} style={{ color:"#EF4444" }} /> Common Problems
            </h3>
            <ul className="space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm" style={{ color:"#94A3B8" }}>
                  <XCircle size={16} className="shrink-0 mt-0.5" style={{ color:"#EF4444" }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6 border" style={{ background:"rgba(34,197,94,0.05)", borderColor:"rgba(34,197,94,0.2)" }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color:"#86EFAC" }}>
              <CheckCircle size={20} style={{ color:"#22C55E" }} /> Our Solution
            </h3>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm" style={{ color:"#94A3B8" }}>
                  <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color:"#22C55E" }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-16 md:py-20" style={{ background:"#0A0F1E" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
            How We Launch Your Brighton Facebook Ads
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"#94A3B8" }}>
            A proven 4-step process from audience research to scaling profitable campaigns.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl p-6 border" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)" }}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 text-white font-bold text-lg`}>{s.n}</div>
              <h3 className="font-semibold mb-2" style={{ color:"#F8FAFC" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color:"#94A3B8" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-16 md:py-20" style={{ background:"#0D1627" }}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
            Facebook Ads Results for Brighton Businesses
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="stat-card rounded-2xl p-8 text-center border" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)" }}>
              <div className="text-4xl font-bold mb-2 gradient-text">{s.value}</div>
              <div className="font-semibold mb-1" style={{ color:"#F8FAFC" }}>{s.label}</div>
              <div className="text-sm" style={{ color:"#94A3B8" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AreasSection() {
  return (
    <section className="py-16" style={{ background:"#0A0F1E" }}>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
          Facebook Ads Management Across Brighton & Beyond
        </h2>
        <p className="mb-8" style={{ color:"#94A3B8" }}>Serving Brighton businesses and surrounding areas of East Sussex.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {brightonAreas.map((area) => (
            <span key={area} className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium border" style={{ background:"rgba(59,130,246,.08)", borderColor:"rgba(59,130,246,.2)", color:"#93C5FD" }}>
              <MapPin size={13} /> {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="py-16" style={{ background:"#0D1627" }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
          What Brighton Clients Say
        </h2>
        <div className="rounded-2xl p-8 border" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)" }}>
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map((i) => <Star key={i} size={18} fill="#FBBF24" style={{ color:"#FBBF24" }} />)}
          </div>
          <blockquote className="text-lg italic mb-4" style={{ color:"#E2E8F0" }}>
            &ldquo;£4 back for every £1 spent on ads. We&apos;ve never had results like this before. The team really understands what Brighton property buyers respond to.&rdquo;
          </blockquote>
          <div className="font-semibold" style={{ color:"#93C5FD" }}>James R.</div>
          <div className="text-sm" style={{ color:"#94A3B8" }}>Brighton Property Group</div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-16 md:py-20" style={{ background:"#0A0F1E" }}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
          Facebook Ads Brighton — FAQs
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border group" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)" }}>
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium select-none" style={{ color:"#F8FAFC" }}>
                {faq.q}
                <ChevronRight size={18} className="faq-icon shrink-0 ml-3" style={{ color:"#60A5FA" }} />
              </summary>
              <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color:"#94A3B8" }}>{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-20" style={{ background:"#0D1627" }}>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
          Start Your Brighton Facebook Ads Campaign
        </h2>
        <p className="mb-8 text-lg" style={{ color:"#94A3B8" }}>
          Free Facebook account audit included. We&apos;ll show you exactly what&apos;s wasting your budget before you spend another penny.
        </p>
        <form className="rounded-2xl p-6 md:p-8 border text-left space-y-4" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)" }} action="/api/contact" method="POST">
          <input type="hidden" name="service" value="Facebook Ads Brighton" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Your Name</label>
              <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="James Robinson" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-blue-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Email Address</label>
              <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="james@brightonproperty.co.uk" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-blue-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Phone Number</label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+44 1273 000000" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-blue-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
            <div>
              <label htmlFor="contact-business" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Business Name</label>
              <input id="contact-business" name="business" type="text" autoComplete="organization" placeholder="Brighton Property Group" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-blue-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Tell Us About Your Goals</label>
            <textarea id="contact-message" name="message" rows={4} placeholder="e.g. We want to generate property valuation leads in Brighton..." className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-blue-500 resize-none" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
          </div>
          <button type="submit" className="w-full rounded-xl py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg" style={{ background:"linear-gradient(135deg,#2563EB,#4F46E5)" }}>
            Get My Free Facebook Audit
          </button>
        </form>
      </div>
    </section>
  );
}

function RelatedSection() {
  return (
    <section className="py-12" style={{ background:"#0A0F1E" }}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-6 text-center" style={{ color:"#F8FAFC" }}>Related Brighton Marketing Services</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {related.map((r) => (
            <Link key={r.href} href={r.href} className="rounded-xl px-5 py-2.5 text-sm font-medium border transition-colors hover:border-blue-400" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)", color:"#93C5FD" }}>
              {r.label} →
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/brighton" className="text-sm underline underline-offset-4 transition-colors hover:text-white" style={{ color:"#94A3B8" }}>← Back to All Brighton Services</Link>
          <Link href="/contact" className="text-sm underline underline-offset-4 transition-colors hover:text-white" style={{ color:"#94A3B8" }}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

export default function FacebookAdsBrightonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <PageStyles />
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
    </>
  );
}
