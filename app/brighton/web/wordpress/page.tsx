import type { Metadata } from "next";
import { Globe, Code2, ShieldCheck, MapPin, Star, ChevronRight, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK = "https://wa.me/923474825228?text=Hi%2C%20I%27d%20like%20to%20discuss%20WordPress%20Web%20Design%20for%20my%20Brighton%20business";

export const metadata: Metadata = {
  title: "WordPress Web Design Brighton | Custom Websites & WooCommerce",
  description: "WordPress web design for Brighton businesses. Custom themes, WooCommerce stores, sub-2s load speeds & SEO-ready from day one. 100+ sites built. Free consultation.",
  keywords: [
    "wordpress web design brighton","wordpress developer brighton","wordpress agency brighton",
    "woocommerce brighton","wordpress website brighton","web design brighton",
    "custom wordpress brighton","wordpress developer hove","brighton web design agency",
    "wordpress seo brighton","wordpress maintenance brighton","wordpress migration brighton",
    "small business website brighton","affordable web design brighton","brighton website designer",
    "wordpress speed optimisation brighton","wordpress security brighton",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  alternates: { canonical: `${BASE_URL}/brighton/web/wordpress`, languages: { "en-GB": `${BASE_URL}/brighton/web/wordpress` } },
  openGraph: {
    title: "WordPress Web Design Brighton | Custom Themes & WooCommerce",
    description: "WordPress websites for Brighton businesses. Custom themes, WooCommerce, sub-2s load speed & SEO-ready. 100+ sites built. Free consultation.",
    url: `${BASE_URL}/brighton/web/wordpress`,
    siteName: "Small Business Marketing Professional",
    locale: "en_GB",
    type: "website",
    images: [{ url: `${BASE_URL}/og-brighton-wordpress.jpg`, width: 1200, height: 630, alt: "WordPress Web Design Brighton" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Web Design Brighton | 100+ Sites Built",
    description: "Custom WordPress websites for Brighton businesses. Fast, secure & SEO-optimised from day one. Free consultation.",
    images: [`${BASE_URL}/og-brighton-wordpress.jpg`],
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
      "@id": `${BASE_URL}/brighton/web/wordpress#webpage`,
      url: `${BASE_URL}/brighton/web/wordpress`,
      name: "WordPress Web Design Brighton | Custom Websites & WooCommerce",
      description: "WordPress web design for Brighton businesses. Custom themes, WooCommerce, fast load speeds & SEO-ready.",
      inLanguage: "en-GB",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      breadcrumb: { "@id": `${BASE_URL}/brighton/web/wordpress#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/brighton/web/wordpress#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Brighton", item: `${BASE_URL}/brighton` },
        { "@type": "ListItem", position: 3, name: "WordPress Web Design Brighton", item: `${BASE_URL}/brighton/web/wordpress` },
      ],
    },
    {
      "@type": "Service",
      name: "WordPress Web Design Brighton",
      provider: { "@type": "MarketingAgency", name: "Small Business Marketing Professional", url: BASE_URL },
      areaServed: { "@type": "City", name: "Brighton", containedInPlace: { "@type": "AdministrativeArea", name: "East Sussex" } },
      description: "Custom WordPress web design for Brighton businesses including WooCommerce stores, speed optimisation, and ongoing maintenance.",
      offers: { "@type": "Offer", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does a WordPress website cost in Brighton?", acceptedAnswer: { "@type": "Answer", text: "WordPress websites for Brighton businesses start from £1,200 for a simple brochure site and range to £8,000+ for complex WooCommerce stores. We provide a fixed-price quote after a free discovery call — no hidden costs." } },
        { "@type": "Question", name: "How long does it take to build a WordPress website?", acceptedAnswer: { "@type": "Answer", text: "Simple WordPress sites are typically live within 2–3 weeks. E-commerce stores with WooCommerce take 4–6 weeks. We provide a project timeline at kickoff and keep Brighton clients updated throughout." } },
        { "@type": "Question", name: "Will my WordPress site be SEO optimised?", acceptedAnswer: { "@type": "Answer", text: "Yes — every Brighton WordPress site we build includes on-page SEO foundations: clean URL structure, SEO plugin setup, schema markup, fast load speed, and mobile optimisation. This is built in, not an add-on." } },
        { "@type": "Question", name: "Can you migrate my existing website to WordPress?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We handle full website migrations to WordPress from any platform including Wix, Squarespace, Magento, or custom CMS — including redirects to preserve your existing Brighton SEO rankings." } },
        { "@type": "Question", name: "Do you offer ongoing WordPress maintenance for Brighton businesses?", acceptedAnswer: { "@type": "Answer", text: "Yes — we offer monthly maintenance packages covering plugin updates, security monitoring, daily backups, performance checks, and priority support. Starting from £75/month for Brighton businesses." } },
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
    icon: Globe,
    title: "Custom WordPress Theme Development",
    desc: "No off-the-shelf templates. Every Brighton website we build uses a custom theme tailored to your brand — fast, flexible, and uniquely yours.",
    gradient: "from-purple-500 to-violet-600",
    glow: "rgba(139,92,246,0.3)",
    stagger: "animate-fade-in-1",
  },
  {
    icon: Code2,
    title: "WooCommerce Online Stores",
    desc: "Sell products and services online with a fully customised WooCommerce store — payments, inventory, shipping and local Brighton delivery all configured.",
    gradient: "from-violet-500 to-fuchsia-600",
    glow: "rgba(167,139,250,0.3)",
    stagger: "animate-fade-in-2",
  },
  {
    icon: ShieldCheck,
    title: "Speed & Security",
    desc: "Every site scores 90+ on PageSpeed Insights, loads in under 2 seconds, and is hardened against malware and brute-force attacks from day one.",
    gradient: "from-fuchsia-500 to-purple-600",
    glow: "rgba(217,70,239,0.3)",
    stagger: "animate-fade-in-3",
  },
];

const problems = [
  "Slow websites losing Brighton visitors before the page loads",
  "Generic templates that look nothing like your brand",
  "No idea how to update or manage your own site",
  "Poor mobile experience costing you enquiries",
  "No security — vulnerable to hacks and data breaches",
];

const solutions = [
  "Sub-2s load speeds on mobile and desktop, optimised hosting",
  "Fully custom designs built around your Brighton brand identity",
  "WordPress training included — manage your content with confidence",
  "Mobile-first development tested across all devices",
  "Security hardening, SSL, daily backups and monitoring included",
];

const steps = [
  { n: "01", color: "from-purple-500 to-violet-500", title: "Discovery & Planning", desc: "We learn your Brighton business goals, audience, and competitors — then plan your sitemap and content structure." },
  { n: "02", color: "from-violet-500 to-fuchsia-500", title: "Design & Approval", desc: "Custom design mockups reviewed and approved by you before a line of code is written. No surprises." },
  { n: "03", color: "from-fuchsia-500 to-purple-500", title: "Build & Test", desc: "We build your WordPress site, integrate all tools, and test thoroughly across devices, browsers and connection speeds." },
  { n: "04", color: "from-purple-500 to-violet-500", title: "Launch & Support", desc: "Your site goes live with all SEO foundations in place. Training session included. Ongoing support available." },
];

const stats = [
  { value: "100+", label: "Sites Built", sub: "for Brighton businesses" },
  { value: "<2s", label: "Load Speed", sub: "average across all sites" },
  { value: "SEO", label: "Ready From Day One", sub: "built-in, not bolted on" },
];

const faqs = [
  { q: "How much does a WordPress website cost in Brighton?", a: "WordPress websites for Brighton businesses start from £1,200 for a simple brochure site and range to £8,000+ for complex WooCommerce stores. We provide a fixed-price quote after a free discovery call — no hidden costs." },
  { q: "How long does it take to build a WordPress website?", a: "Simple WordPress sites are typically live within 2–3 weeks. E-commerce stores with WooCommerce take 4–6 weeks. We provide a project timeline at kickoff and keep Brighton clients updated throughout." },
  { q: "Will my WordPress site be SEO optimised?", a: "Yes — every Brighton WordPress site we build includes on-page SEO foundations: clean URL structure, SEO plugin setup, schema markup, fast load speed, and mobile optimisation. This is built in, not an add-on." },
  { q: "Can you migrate my existing website to WordPress?", a: "Absolutely. We handle full website migrations to WordPress from any platform including Wix, Squarespace, Magento, or custom CMS — including redirects to preserve your existing Brighton SEO rankings." },
  { q: "Do you offer ongoing WordPress maintenance for Brighton businesses?", a: "Yes — we offer monthly maintenance packages covering plugin updates, security monitoring, daily backups, performance checks, and priority support. Starting from £75/month for Brighton businesses." },
];

const related = [
  { href: "/brighton/web/landing-pages", label: "Landing Page Design Brighton" },
  { href: "/brighton/seo/local", label: "Local SEO Brighton" },
  { href: "/brighton/seo/ecommerce", label: "Ecommerce SEO Brighton" },
];

function PageStyles() {
  return (
    <style>{`
      @keyframes fadeInUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
      @keyframes fadeInLeft { from { opacity:0; transform:translateX(-24px); } to { opacity:1; transform:translateX(0); } }
      @keyframes pulse-slow { 0%,100% { opacity:.18; transform:scale(1); } 50% { opacity:.28; transform:scale(1.06); } }
      .animate-fade-in-1 { animation: fadeInUp .65s ease both .1s; }
      .animate-fade-in-2 { animation: fadeInUp .65s ease both .22s; }
      .animate-fade-in-3 { animation: fadeInUp .65s ease both .34s; }
      .animate-fade-in-hero { animation: fadeInUp .7s ease both .05s; }
      .gradient-text { background: linear-gradient(135deg,#C084FC,#A855F7,#E879F9); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
      .svc-card { transition: box-shadow .3s ease, transform .3s ease; }
      .svc-card:hover { box-shadow: 0 20px 60px var(--card-glow,rgba(139,92,246,.25)); transform:translateY(-4px); }
      .stat-card { transition: box-shadow .3s ease, transform .3s ease; }
      .stat-card:hover { box-shadow: 0 20px 50px rgba(139,92,246,.2); transform:translateY(-4px); }
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
          <li style={{ color:"#F8FAFC" }}>WordPress Web Design Brighton</li>
        </ol>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background:"linear-gradient(160deg,#0A0F1E 0%,#0D1627 50%,#0A0F1E 100%)" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background:"rgba(139,92,246,.12)", animation:"pulse-slow 7s ease-in-out infinite" }} />
        <div className="absolute bottom-20 right-1/4 w-56 h-56 rounded-full blur-3xl" style={{ background:"rgba(217,70,239,.08)", animation:"pulse-slow 9s ease-in-out infinite 2s" }} />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-in-hero inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6 border" style={{ background:"rgba(139,92,246,.1)", borderColor:"rgba(139,92,246,.25)", color:"#C4B5FD" }}>
          <Globe size={14} />
          WordPress • WooCommerce • Brighton
        </div>
        <h1 className="animate-fade-in-1 text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight" style={{ color:"#F8FAFC", fontFamily:"var(--font-display)" }}>
          WordPress Websites Built for Brighton{" "}
          <span className="gradient-text">Businesses That Mean Business</span>
        </h1>
        <p className="animate-fade-in-2 text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ color:"#94A3B8" }}>
          Custom WordPress design that loads fast, ranks well, and converts visitors. Built to reflect your Brighton brand — not a cookie-cutter template.
        </p>
        <div className="animate-fade-in-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold text-white transition-all hover:scale-105" style={{ background:"linear-gradient(135deg,#7C3AED,#A855F7)" }}>
            Get Free Web Design Quote <ArrowRight size={18} />
          </a>
          <Link href="/brighton" className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-colors border" style={{ color:"#C4B5FD", borderColor:"rgba(139,92,246,.3)", background:"rgba(139,92,246,.06)" }}>
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
            What Our WordPress Service Includes
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"#94A3B8" }}>
            From custom themes to full WooCommerce stores — built properly, not bodged together.
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
            Why Your Brighton WordPress Site Might Be Costing You Business
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"#94A3B8" }}>
            Your website is your most important sales tool. Here&apos;s what separates the high performers from the rest.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 border" style={{ background:"rgba(239,68,68,0.05)", borderColor:"rgba(239,68,68,0.2)" }}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color:"#FCA5A5" }}>
              <XCircle size={20} style={{ color:"#EF4444" }} /> Common Website Problems
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
              <CheckCircle size={20} style={{ color:"#22C55E" }} /> How We Build It Right
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
            How We Build Your Brighton WordPress Site
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"#94A3B8" }}>
            A clear, collaborative process from kickoff to live launch.
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
            WordPress Results for Brighton Businesses
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
          WordPress Web Design Across Brighton & Beyond
        </h2>
        <p className="mb-8" style={{ color:"#94A3B8" }}>Serving Brighton businesses and surrounding East Sussex communities.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {brightonAreas.map((area) => (
            <span key={area} className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium border" style={{ background:"rgba(139,92,246,.08)", borderColor:"rgba(139,92,246,.2)", color:"#C4B5FD" }}>
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
            &ldquo;Our old Wix site was embarrassing us. The new WordPress site loads in under 2 seconds, looks incredible, and we&apos;re already ranking for our interior design keywords in Brighton.&rdquo;
          </blockquote>
          <div className="font-semibold" style={{ color:"#C4B5FD" }}>Lisa T.</div>
          <div className="text-sm" style={{ color:"#94A3B8" }}>Brighton Interior Design</div>
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
          WordPress Web Design Brighton — FAQs
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border group" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)" }}>
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium select-none" style={{ color:"#F8FAFC" }}>
                {faq.q}
                <ChevronRight size={18} className="faq-icon shrink-0 ml-3" style={{ color:"#A855F7" }} />
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
          Get a WordPress Website Your Brighton Business Deserves
        </h2>
        <p className="mb-8 text-lg" style={{ color:"#94A3B8" }}>
          Free design consultation and fixed-price quote. No obligation, no hidden costs.
        </p>
        <form className="rounded-2xl p-6 md:p-8 border text-left space-y-4" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)" }} action="/api/contact" method="POST">
          <input type="hidden" name="service" value="WordPress Web Design Brighton" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Your Name</label>
              <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder="Lisa Thompson" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-purple-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Email Address</label>
              <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder="lisa@brightoninteriors.co.uk" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-purple-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Phone Number</label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+44 1273 000000" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-purple-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
            <div>
              <label htmlFor="contact-business" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Business Name</label>
              <input id="contact-business" name="business" type="text" autoComplete="organization" placeholder="Brighton Interior Design" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-purple-500" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5" style={{ color:"#94A3B8" }}>Tell Us About Your Website Project</label>
            <textarea id="contact-message" name="message" rows={4} placeholder="e.g. We need a new WordPress website for our interior design studio in Brighton, including a portfolio and contact form..." className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-purple-500 resize-none" style={{ background:"rgba(15,23,42,0.8)", borderColor:"rgba(71,85,105,0.5)", color:"#F8FAFC" }} />
          </div>
          <button type="submit" className="w-full rounded-xl py-3.5 text-base font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-lg" style={{ background:"linear-gradient(135deg,#7C3AED,#A855F7)" }}>
            Get My Free Web Design Quote
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
            <Link key={r.href} href={r.href} className="rounded-xl px-5 py-2.5 text-sm font-medium border transition-colors hover:border-purple-400" style={{ background:"rgba(30,41,59,0.5)", borderColor:"rgba(71,85,105,0.5)", color:"#C4B5FD" }}>
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

export default function WordPressBrightonPage() {
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
