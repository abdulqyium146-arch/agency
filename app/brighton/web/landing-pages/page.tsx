import type { Metadata } from "next";
import { Layout, MousePointer2, Zap, MapPin, Star, ChevronRight, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK = "https://wa.me/923474825228?text=Hi%2C%20I%27d%20like%20to%20discuss%20Landing%20Page%20Design%20for%20my%20Brighton%20business";

export const metadata: Metadata = {
  title: "Landing Page Design Brighton | CRO Agency — High-Converting Pages",
  description: "Landing page design for Brighton businesses. CRO-focused layouts, A/B testing & fast load speeds. 340% average conversion lift. Free consultation.",
  keywords: [
    "landing page design brighton","landing page agency brighton","conversion rate optimisation brighton",
    "cro brighton","landing page builder brighton","web design brighton",
    "a/b testing brighton","high converting landing pages brighton","brighton landing page designer",
    "lead generation pages brighton","sales page design brighton","squeeze page brighton",
    "landing page hove","brighton cro agency","brighton web design agency",
    "landing page optimisation brighton","website conversion brighton",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  alternates: { canonical: `${BASE_URL}/brighton/web/landing-pages`, languages: { "en-GB": `${BASE_URL}/brighton/web/landing-pages` } },
  openGraph: {
    title: "Landing Page Design Brighton | 340% Conversion Lift",
    description: "CRO-focused landing pages for Brighton businesses. A/B tested, mobile-first, lightning fast. 150+ pages launched. Free design consultation.",
    url: `${BASE_URL}/brighton/web/landing-pages`,
    siteName: "Small Business Marketing Professional",
    locale: "en_GB",
    type: "website",
    images: [{ url: `${BASE_URL}/og-brighton-landing-pages.jpg`, width: 1200, height: 630, alt: "Landing Page Design Brighton" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Design Brighton | 340% Conversion Lift",
    description: "High-converting landing pages for Brighton businesses. A/B tested, fast & mobile-first. Free consultation.",
    images: [`${BASE_URL}/og-brighton-landing-pages.jpg`],
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
      "@id": `${BASE_URL}/brighton/web/landing-pages#webpage`,
      url: `${BASE_URL}/brighton/web/landing-pages`,
      name: "Landing Page Design Brighton | CRO Agency",
      description: "CRO-focused landing page design for Brighton businesses. A/B testing, fast load speeds, mobile-first.",
      inLanguage: "en-GB",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      breadcrumb: { "@id": `${BASE_URL}/brighton/web/landing-pages#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/brighton/web/landing-pages#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Brighton", item: `${BASE_URL}/brighton` },
        { "@type": "ListItem", position: 3, name: "Landing Page Design Brighton", item: `${BASE_URL}/brighton/web/landing-pages` },
      ],
    },
    {
      "@type": "Service",
      name: "Landing Page Design Brighton",
      provider: { "@type": "MarketingAgency", name: "Small Business Marketing Professional", url: BASE_URL },
      areaServed: { "@type": "City", name: "Brighton", containedInPlace: { "@type": "AdministrativeArea", name: "East Sussex" } },
      description: "CRO-focused landing page design for Brighton businesses including A/B testing, mobile-first development, and conversion rate optimisation.",
      offers: { "@type": "Offer", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What makes a good landing page for Brighton businesses?", acceptedAnswer: { "@type": "Answer", text: "A great landing page has one clear goal, a compelling headline, social proof from local Brighton customers, fast load speed, and a single strong call to action. We use heat maps and user behaviour data to optimise every element." } },
        { "@type": "Question", name: "How long does a landing page take to build?", acceptedAnswer: { "@type": "Answer", text: "Most landing pages are live within 5–10 business days. Complex pages with custom animations or integrations may take up to 2–3 weeks. We'll give you an accurate timeline at the free consultation." } },
        { "@type": "Question", name: "Do you run A/B tests on the pages you build?", acceptedAnswer: { "@type": "Answer", text: "Yes — every landing page we build includes an initial A/B test of the headline and CTA. Ongoing split testing is available as part of our CRO retainer service for Brighton clients." } },
        { "@type": "Question", name: "Can you build a landing page that works with my existing website?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We build landing pages that match your existing brand and can integrate with any website platform — WordPress, Shopify, Webflow, or custom builds. No separate subdomain needed." } },
        { "@type": "Question", name: "Can you connect the landing page to my CRM or email system?", acceptedAnswer: { "@type": "Answer", text: "Yes. We integrate with all major CRMs and email platforms including HubSpot, Mailchimp, Klaviyo, ActiveCampaign, and Salesforce. Lead data flows automatically to your system." } },
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
    icon: Layout,
    title: "CRO-Focused Page Design",
    desc: "Every element — headline, layout, imagery, CTA — is designed around conversion psychology, not just aesthetics. We use heat maps and user data to inform every decision.",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.3)",
    stagger: "animate-fade-in-1",
  },
  {
    icon: MousePointer2,
    title: "A/B Testing & Optimisation",
    desc: "We test headline variants, CTA copy, button colours, and form lengths against real Brighton visitor data — then roll out the version that converts best.",
    gradient: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
    stagger: "animate-fade-in-2",
  },
  {
    icon: Zap,
    title: "Fast Load Speed & Mobile First",
    desc: "Every page scores 90+ on PageSpeed. With 60% of Brighton traffic on mobile, we build mobile-first to ensure your page loads in under 2 seconds on any device.",
    gradient: "from-cyan-500 to-emerald-600",
    glow: "rgba(6,182,212,0.3)",
    stagger: "animate-fade-in-3",
  },
];

const problems = [
  "Generic templates that look identical to competitors",
  "Slow pages that lose mobile visitors in under 3 seconds",
  "No tracking — no idea what's working or failing",
  "Long forms that kill conversion before the submit button",
  "Pretty designs built by designers who don't understand CRO",
];

const solutions = [
  "Custom-designed pages built around your unique Brighton brand",
  "Sub-2-second load speeds on mobile and desktop",
  "Full analytics, heatmaps & session recording from day one",
  "Optimised short-form testing with progressive profiling options",
  "Every design decision backed by conversion data, not preference",
];

const steps = [
  { n: "01", color: "from-emerald-500 to-teal-500", title: "Discovery & Goals", desc: "We understand your Brighton audience, traffic source, and conversion goal before a single pixel is placed." },
  { n: "02", color: "from-teal-500 to-cyan-500", title: "Design & Copy", desc: "We write persuasive copy and design a conversion-focused layout tailored to Brighton visitors — mobile-first." },
  { n: "03", color: "from-cyan-500 to-emerald-500", title: "Build & Integrate", desc: "Your page is built for performance, connected to your CRM/email tool, and thoroughly tested across devices." },
  { n: "04", color: "from-emerald-500 to-teal-500", title: "Test & Optimise", desc: "We run A/B tests, analyse the data, and continuously improve conversion rates over time." },
];

const stats = [
  { value: "340%", label: "Average Conversion Lift", sub: "vs client's previous page" },
  { value: "150+", label: "Pages Launched", sub: "for Brighton businesses" },
  { value: "A/B", label: "Tested Every Page", sub: "data-driven optimisation" },
];

const faqs = [
  { q: "What makes a good landing page for Brighton businesses?", a: "A great landing page has one clear goal, a compelling headline, social proof from local Brighton customers, fast load speed, and a single strong call to action. We use heat maps and user behaviour data to optimise every element." },
  { q: "How long does a landing page take to build?", a: "Most landing pages are live within 5–10 business days. Complex pages with custom animations or integrations may take up to 2–3 weeks. We'll give you an accurate timeline at the free consultation." },
  { q: "Do you run A/B tests on the pages you build?", a: "Yes — every landing page we build includes an initial A/B test of the headline and CTA. Ongoing split testing is available as part of our CRO retainer service for Brighton clients." },
  { q: "Can you build a landing page that works with my existing website?", a: "Absolutely. We build landing pages that match your existing brand and can integrate with any website platform — WordPress, Shopify, Webflow, or custom builds. No separate subdomain needed." },
  { q: "Can you connect the landing page to my CRM or email system?", a: "Yes. We integrate with all major CRMs and email platforms including HubSpot, Mailchimp, Klaviyo, ActiveCampaign, and Salesforce. Lead data flows automatically to your system." },
];

const related = [
  { href: "/brighton/social/facebook", label: "Facebook Ads Brighton" },
  { href: "/brighton/web/wordpress", label: "WordPress Web Design Brighton" },
  { href: "/brighton/content/email", label: "Email Marketing Brighton" },
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
      .gradient-text { background: linear-gradient(135deg,#34D399,#10B981,#06B6D4); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
      .svc-card { transition: box-shadow .3s ease, transform .3s ease; }
      .svc-card:hover { box-shadow: 0 20px 60px var(--card-glow,rgba(16,185,129,.25)); transform:translateY(-4px); }
      .stat-card { transition: box-shadow .3s ease, transform .3s ease; }
      .stat-card:hover { box-shadow: 0 20px 50px rgba(16,185,129,.2); transform:translateY(-4px); }
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
          <li style={{ color:"#F8FAFC" }}>Landing Page Design Brighton</li>
        </ol>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background:"linear-gradient(160deg,#0A0F1E 0%,#0D1627 50%,#0A0F1E 100%)" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background:"rgba(16,185,129,.1)", animation:"pulse-slow 7s ease-in-out infinite" }} />
        <div className="absolute bottom-20 right-1/4 w-56 h-56 rounded-full blur-3xl" style={{ background:"rgba(6,182,212,.08)", animation:"pulse-slow 9s ease-in-out infinite 2s" }} />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-in-hero inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6 border" style={{ background:"rgba(16,185,129,.1)", borderColor:"rgba(16,185,129,.25)", color:"#6EE7B7" }}>
          <Layout size={14} />
          CRO • Landing Pages • Brighton
        </div>
        <h1 className="animate-fade-in-1 text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
          Landing Pages That Turn Brighton{" "}
          <span className="gradient-text">Visitors Into Paying Customers</span>
        </h1>
        <p className="animate-fade-in-2 text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color:"#94A3B8" }}>
          Stop sending paid traffic to pages that don&apos;t convert. Our CRO-first landing pages for Brighton businesses are A/B tested, mobile-first, and designed to maximise every visit.
        </p>
        <div className="animate-fade-in-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white transition-all hover:scale-105" style={{ background:"linear-gradient(135deg,#059669,#0891B2)" }}>
            Get Free CRO Consultation <ArrowRight size={18} />
          </a>
          <Link href="/brighton" className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-colors border" style={{ color:"#6EE7B7", borderColor:"rgba(16,185,129,.3)", background:"rgba(16,185,129,.06)" }}>
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
            What Our Landing Page Service Includes
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"#94A3B8" }}>
            Every page we build is engineered to convert — not just look good.
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
            Why Most Brighton Landing Pages Fail to Convert
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"#94A3B8" }}>
            The difference between a 1% and a 5% conversion rate is strategy, not luck.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 border" style={{ background:"rgba(239,68,68,0.05)", borderColor:"rgba(239,68,68,0.2)" }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color:"#FCA5A5" }}>
              <XCircle size={20} style={{ color:"#EF4444" }} /> Why Pages Fail
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
              <CheckCircle size={20} style={{ color:"#22C55E" }} /> Our Approach
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
            How We Build Your Brighton Landing Page
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"#94A3B8" }}>
            From discovery to live A/B test in as little as 5 business days.
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
            Landing Page Results for Brighton Businesses
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
          Landing Page Design Across Brighton & Beyond
        </h2>
        <p className="mb-8" style={{ color:"#94A3B8" }}>Serving businesses across Brighton and the wider East Sussex area.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {brightonAreas.map((area) => (
            <span key={area} className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium border" style={{ background:"rgba(16,185,129,.08)", borderColor:"rgba(16,185,129,.2)", color:"#6EE7B7" }}>
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
            &ldquo;Our old page converted at 1.2%. The new one converts at 5.8%. Same traffic, 4× more enquiries from Brighton clients. The team really knows conversion.&rdquo;
          </blockquote>
          <div className="font-semibold" style={{ color:"#6EE7B7" }}>David L.</div>
          <div className="text-sm" style={{ color:"#94A3B8" }}>Brighton Legal Services</div>
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
          Landing Page Design Brighton — FAQs
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border group" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)" }}>
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium select-none" style={{ color:"#F8FAFC" }}>
                {faq.q}
                <ChevronRight size={18} className="faq-icon shrink-0 ml-3" style={{ color:"#34D399" }} />
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
          Get a Landing Page That Actually Converts
        </h2>
        <p className="mb-8 text-lg" style={{ color:"#94A3B8" }}>
          Free CRO audit of your current page included. We&apos;ll show you exactly what&apos;s killing your conversions before you commit to anything.
        </p>
        <form className="rounded-2xl p-6 md:p-8 border text-left space-y-4" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)" }} action="/api/contact" method="POST">
          <input type="hidden" name="service" value="Landing Page Design Brighton" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Your Name</label>
              <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="David Lambert" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-emerald-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Email Address</label>
              <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="david@brightonlegal.co.uk" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-emerald-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Phone Number</label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+44 1273 000000" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-emerald-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
            <div>
              <label htmlFor="contact-business" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Business Name</label>
              <input id="contact-business" name="business" type="text" autoComplete="organization" placeholder="Brighton Legal Services" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-emerald-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Tell Us About Your Page Goals</label>
            <textarea id="contact-message" name="message" rows={4} placeholder="e.g. We need a landing page for our employment law service targeting Brighton businesses..." className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-emerald-500 resize-none" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
          </div>
          <button type="submit" className="w-full rounded-xl py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg" style={{ background:"linear-gradient(135deg,#059669,#0891B2)" }}>
            Get My Free CRO Audit
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
            <Link key={r.href} href={r.href} className="rounded-xl px-5 py-2.5 text-sm font-medium border transition-colors hover:border-emerald-400" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)", color:"#6EE7B7" }}>
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

export default function LandingPagesBrightonPage() {
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
