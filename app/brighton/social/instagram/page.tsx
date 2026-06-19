import type { Metadata } from "next";
import Link from "next/link";
import { Camera, Heart, MessageCircle, Star, MapPin, CheckCircle, XCircle, ArrowRight, ChevronRight } from "lucide-react";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const metadata: Metadata = {
  title: "Instagram Marketing Brighton | Grow Your Following",
  description: "Professional Instagram marketing for Brighton businesses. Content creation, reels, ads & community management. Free Instagram audit for Brighton brands.",
  keywords: ["Instagram marketing Brighton", "Instagram management Brighton", "Instagram ads Brighton", "social media Brighton", "Instagram agency Brighton", "reels Brighton", "Instagram growth Brighton", "social media management Brighton"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  alternates: { canonical: `${BASE_URL}/brighton/social/instagram`, languages: { "en-GB": `${BASE_URL}/brighton/social/instagram` } },
  openGraph: { title: "Instagram Marketing Brighton | Grow Your Following | SBMP", description: "Professional Instagram marketing for Brighton businesses. Content creation, reels, ads & community management.", url: `${BASE_URL}/brighton/social/instagram`, type: "website", locale: "en_GB", siteName: "SBMP — Local Digital Marketing" },
  twitter: { card: "summary_large_image", title: "Instagram Marketing Brighton | Grow Your Following", description: "Professional Instagram marketing for Brighton businesses. Free audit." },
  other: { "geo.region": "GB-ESX", "geo.placename": "Brighton, East Sussex", "geo.position": "50.8225;-0.1372", ICBM: "50.8225, -0.1372" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${BASE_URL}/brighton/social/instagram#webpage`, url: `${BASE_URL}/brighton/social/instagram`, name: "Instagram Marketing Brighton | Grow Your Following", inLanguage: "en-GB", breadcrumb: { "@id": `${BASE_URL}/brighton/social/instagram#breadcrumb` }, datePublished: "2026-03-20", dateModified: "2026-03-20" },
    { "@type": "BreadcrumbList", "@id": `${BASE_URL}/brighton/social/instagram#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Brighton Digital Marketing", item: `${BASE_URL}/brighton` }, { "@type": "ListItem", position: 3, name: "Instagram Marketing Brighton", item: `${BASE_URL}/brighton/social/instagram` }] },
    { "@type": "Service", name: "Instagram Marketing Brighton", serviceType: "Social Media Marketing", description: "Professional Instagram marketing for Brighton businesses — content strategy, Reels, paid ads, and community management.", provider: { "@type": "LocalBusiness", name: "Small Business Marketing Professional", url: BASE_URL, address: { "@type": "PostalAddress", addressLocality: "Brighton", addressRegion: "East Sussex", postalCode: "BN1", addressCountry: "GB" } }, areaServed: { "@type": "City", name: "Brighton" }, offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", price: "249", priceCurrency: "GBP", unitText: "MONTH" } } },
    { "@type": "FAQPage", "@id": `${BASE_URL}/brighton/social/instagram#faq`, mainEntity: [{ "@type": "Question", name: "How many posts per week do you create for Brighton businesses?", acceptedAnswer: { "@type": "Answer", text: "Our standard Brighton Instagram package includes 4–5 feed posts per week plus 5–7 Stories, with a minimum of 2 Reels per week. Higher-tier packages include daily content across all formats." } }, { "@type": "Question", name: "Do you run Instagram ads for Brighton businesses too?", acceptedAnswer: { "@type": "Answer", text: "Yes — Instagram ads management is included in our full-service packages. We create and manage targeted ads reaching Brighton and Hove audiences by demographics, interests, and location." } }, { "@type": "Question", name: "Can you grow our Brighton local following?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We use location-tagged content, Brighton-specific hashtags, local collaborations, and geo-targeted ads to grow an audience of genuine Brighton customers — not bots or irrelevant followers." } }, { "@type": "Question", name: "Do you create the photos and videos for our Brighton account?", acceptedAnswer: { "@type": "Answer", text: "Yes — our creative team handles all content production including graphic design, copy, and video editing. For photography and videography shoots, we work with Brighton-based photographers we trust." } }, { "@type": "Question", name: "How do you measure Instagram success for Brighton brands?", acceptedAnswer: { "@type": "Answer", text: "We track follower growth, engagement rate, reach, impressions, profile visits, website clicks, and for ad campaigns: leads, bookings, and ROAS. Monthly reports delivered with clear Brighton-benchmarked KPIs." } }] },
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
    .gradient-text { background: linear-gradient(135deg,#F472B6,#EC4899,#A855F7); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; animation: gradient-shift 4s ease infinite; }
    .hero-glow-btn:hover { box-shadow: 0 0 40px rgba(236,72,153,0.55); transform: scale(1.04); }
    .svc-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
    .svc-card:hover { box-shadow: 0 20px 50px var(--card-glow,rgba(236,72,153,0.25)); transform: translateY(-4px); }
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
          <li style={{ color: "#F8FAFC" }} className="font-medium">Instagram Marketing Brighton</li>
        </ol>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden" style={{ background: "#0A0F1E" }}>
      <PageStyles />
      <div className="blob-a absolute -top-40 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "rgba(236,72,153,0.12)", filter: "blur(120px)" }} />
      <div className="blob-a absolute -bottom-40 -left-32 w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: "rgba(168,85,247,0.10)", filter: "blur(130px)", animationDelay: "4s" }} />
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-24 text-center">
        <div className="anim-fade-up inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-8 border" style={{ background: "rgba(236,72,153,0.10)", borderColor: "rgba(236,72,153,0.28)", color: "#F9A8D4" }}>
          <span className="pulse-dot w-2 h-2 bg-green-400 rounded-full" />Trusted by 150+ Brighton Businesses
        </div>
        <h1 className="anim-fade-up anim-delay-1 font-black leading-tight mb-6" style={{ fontSize: "clamp(2.3rem, 6vw, 4rem)", color: "#F8FAFC" }}>
          Instagram Marketing That Puts<br /><span className="gradient-text">Your Brighton Brand on the Map</span>
        </h1>
        <p className="anim-fade-up anim-delay-2 text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: "#CBD5E1" }}>
          Stop posting into the void. Our Brighton Instagram specialists build loyal audiences, create scroll-stopping content, and turn followers into paying customers through your door.
        </p>
        <div className="anim-fade-up anim-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="hero-glow-btn inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300" style={{ background: "linear-gradient(135deg,#EC4899,#A855F7)" }}>
            Get Free Instagram Audit <ArrowRight className="w-5 h-5" />
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
  { Icon: Camera, title: "Content Creation & Reels", desc: "Professional Reels, carousels, and Stories crafted for Brighton's food, lifestyle, and retail audience. Every post has a hook, a story, and a call to action — no filler content.", gradient: "linear-gradient(135deg,#EC4899,#BE185D)", glow: "rgba(236,72,153,0.25)", stagger: "card-stagger-1" },
  { Icon: Heart, title: "Instagram Ads Management", desc: "Geo-targeted Instagram ads reaching Brighton & Hove demographics. From awareness campaigns to direct lead generation — every £1 of ad spend tracked and optimised.", gradient: "linear-gradient(135deg,#A855F7,#7C3AED)", glow: "rgba(168,85,247,0.25)", stagger: "card-stagger-2" },
  { Icon: MessageCircle, title: "Community Management & DMs", desc: "Every comment, DM, and mention responded to professionally. We build genuine relationships with Brighton's local audience — turning followers into loyal repeat customers.", gradient: "linear-gradient(135deg,#F59E0B,#D97706)", glow: "rgba(245,158,11,0.25)", stagger: "card-stagger-3" },
];

function FeaturesSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F472B6" }}>What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3" style={{ color: "#F8FAFC" }}>Brighton Instagram Marketing Services</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#64748B" }}>Full-service Instagram management for Brighton brands — from content to conversions.</p>
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
  "Posting inconsistently with no strategy — getting minimal engagement and growing the wrong audience",
  "Your Brighton competitors in The Lanes and North Laine look polished; your account looks amateur",
  "No hooks, no CTAs, no conversion path — just pretty pictures that generate zero revenue",
  "Spending hours each week on content that nobody sees, with zero measurable ROI to show for it",
];
const solutions = [
  "Professional content strategy targeting Brighton's food, culture, lifestyle and retail audience behaviour",
  "Reels, carousels, and Stories designed to stop the scroll and drive real engagement with Brighton locals",
  "Instagram Ads precision-targeting Brighton & Hove demographics for immediate, measurable reach",
  "Full community management — every comment and DM handled, building a loyal Brighton following that buys",
];

function WhySection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F472B6" }}>Why Instagram Marketing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Why Brighton Businesses Need Professional Instagram Management</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 border" style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.18)" }}>
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2" style={{ color: "#FCA5A5" }}><XCircle className="w-5 h-5 shrink-0" /> Without Instagram Strategy</h3>
            <ul className="space-y-3">{problems.map((p) => <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#94A3B8" }}><XCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#F87171" }} />{p}</li>)}</ul>
          </div>
          <div className="rounded-2xl p-7 border" style={{ background: "rgba(34,197,94,0.06)", borderColor: "rgba(34,197,94,0.18)" }}>
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2" style={{ color: "#86EFAC" }}><CheckCircle className="w-5 h-5 shrink-0" /> With SBMP Instagram Brighton</h3>
            <ul className="space-y-3">{solutions.map((s) => <li key={s} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#94A3B8" }}><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#4ADE80" }} />{s}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { num: "01", title: "Brand Audit", desc: "We analyse your current Instagram performance, competitor accounts in Brighton, and target audience demographics and behaviour patterns.", bg: "#EC4899", shadow: "rgba(236,72,153,0.45)" },
  { num: "02", title: "Content Strategy", desc: "Monthly content calendar with post types, caption frameworks, hashtag strategy, and Reel concepts — all tailored to Brighton's specific audience.", bg: "#A855F7", shadow: "rgba(168,85,247,0.45)" },
  { num: "03", title: "Create & Publish", desc: "We handle all content creation, scheduling, and publishing — consistent, on-brand, and algorithm-optimised. You approve content monthly via a shared preview board.", bg: "#0891B2", shadow: "rgba(8,145,178,0.45)" },
  { num: "04", title: "Analyse & Optimise", desc: "Weekly performance monitoring, monthly full reports, and continuous strategy refinement based on what Brighton's audience is engaging with.", bg: "#059669", shadow: "rgba(5,150,105,0.45)" },
];

function ProcessSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F472B6" }}>Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3" style={{ color: "#F8FAFC" }}>How We Grow Your Brighton Instagram Audience</h2>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="hidden lg:block absolute top-8 left-[14%] right-[14%] h-px opacity-30" style={{ background: "linear-gradient(to right,#EC4899,#A855F7,#0891B2,#059669)" }} />
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
  { value: "10K+", label: "Followers Grown Monthly", sub: "for Brighton clients on average" },
  { value: "8×", label: "Average Engagement Rate", sub: "vs 1.2% industry average" },
  { value: "200+", label: "Brighton Brands Managed", sub: "across all industries" },
];

function StatsSection() {
  return (
    <section id="results" className="py-20 px-4" style={{ background: "#0A0F1E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F472B6" }}>Instagram Results</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Brighton Instagram Marketing Results</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl p-8 text-center border" style={{ background: "rgba(30,41,59,0.4)", borderColor: "rgba(71,85,105,0.5)" }}>
              <div className="text-5xl font-black mb-2" style={{ color: "#F472B6" }}>{s.value}</div>
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
        <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F472B6" }}>Service Area</span>
        <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-8" style={{ color: "#F8FAFC" }}>Brighton Instagram Marketing Coverage Area</h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {brightonAreas.map((a) => <span key={a} className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium border" style={{ background: "rgba(236,72,153,0.08)", borderColor: "rgba(236,72,153,0.22)", color: "#F9A8D4" }}><MapPin className="w-3 h-3" />{a}</span>)}
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
            &ldquo;We went from 400 followers to over 12,000 in just 5 months. Our Brighton café is now fully booked every single weekend — Instagram has transformed our business completely.&rdquo;
          </blockquote>
          <div className="font-semibold" style={{ color: "#F8FAFC" }}>Priya S.</div>
          <div className="text-sm mt-0.5" style={{ color: "#F472B6" }}>The Lanes Café, Brighton City Centre</div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "How many Instagram posts per week do you create for Brighton businesses?", a: "Our standard Brighton Instagram package includes 4–5 feed posts per week plus daily Stories, with a minimum of 2 Reels per week. Higher-tier packages include daily posts across all formats. All content is pre-approved by you each month." },
  { q: "Do you run Instagram ads for Brighton businesses too?", a: "Yes — Instagram ads management is available in our full-service packages. We create and manage targeted ads reaching Brighton and Hove audiences, with demographic, interest, and location targeting to reach your ideal Brighton customer." },
  { q: "Can you grow our genuine Brighton local following?", a: "Absolutely. We use location-tagged content, Brighton-specific hashtags, local collaborations, and geo-targeted ads to grow an audience of genuine Brighton locals — not bought followers or bots. Real followers who visit your business." },
  { q: "Do you create all the photos and videos for our Brighton account?", a: "Yes — our creative team handles graphic design, copy, and video editing. For on-location photography and videography, we work with trusted Brighton-based creators. We can brief your own photographer too if you have one." },
  { q: "How do you measure Instagram success for Brighton brands?", a: "We track follower growth, engagement rate, reach, impressions, profile visits, link clicks, and DM volume. For ad campaigns we track leads, bookings, and ROAS. Monthly reports delivered with clear KPIs benchmarked against Brighton industry averages." },
];

function FAQSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#F472B6" }}>FAQ</span>
          <h2 className="text-3xl font-bold mt-3" style={{ color: "#F8FAFC" }}>Brighton Instagram Marketing — FAQs</h2>
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
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "rgba(236,72,153,0.10)", filter: "blur(150px)" }} />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#F8FAFC" }}>Ready to Put Your Brighton Brand on Instagram?</h2>
          <p className="text-lg" style={{ color: "#94A3B8" }}>Free Instagram audit — we&apos;ll show you exactly how to grow your Brighton following and turn it into revenue.</p>
        </div>
        <div className="rounded-2xl p-7 md:p-8 border" style={{ background: "#0D1627", borderColor: "rgba(255,255,255,0.07)" }}>
          <form action="/api/contact" method="POST" className="space-y-5">
            <input type="hidden" name="service" value="Instagram Marketing Brighton" />
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label htmlFor="ig-name" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Full Name *</label><input id="ig-name" type="text" name="name" required autoComplete="name" placeholder="Your name" className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} /></div>
              <div><label htmlFor="ig-email" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Email Address *</label><input id="ig-email" type="email" name="email" required autoComplete="email" placeholder="hello@brightonbrand.co.uk" className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div><label htmlFor="ig-phone" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Phone Number</label><input id="ig-phone" type="tel" name="phone" autoComplete="tel" placeholder="+44 1273 000000" className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} /></div>
              <div><label htmlFor="ig-biz" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Business Name *</label><input id="ig-biz" type="text" name="business" required autoComplete="organization" placeholder="Your Brighton business" className="w-full rounded-xl px-4 py-3 text-sm outline-none border" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} /></div>
            </div>
            <div><label htmlFor="ig-msg" className="block text-sm font-medium mb-2" style={{ color: "#CBD5E1" }}>Your Instagram Goals</label><textarea id="ig-msg" name="message" rows={4} placeholder="Tell us about your Brighton business, your current Instagram, and what you're hoping to achieve…" className="w-full rounded-xl px-4 py-3 text-sm outline-none border resize-none" style={{ background: "#0A0F1E", borderColor: "rgba(255,255,255,0.10)", color: "#F8FAFC" }} /></div>
            <button type="submit" className="w-full text-white font-semibold py-4 rounded-xl text-base flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all duration-300" style={{ background: "linear-gradient(135deg,#EC4899,#A855F7)", boxShadow: "0 4px 24px rgba(236,72,153,0.35)" }}>
              Claim My Free Instagram Audit <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const related = [
  { title: "Facebook Ads Brighton", desc: "High-ROI Facebook & Meta ad campaigns targeting Brighton audiences.", href: "/brighton/social/facebook" },
  { title: "Email Marketing Brighton", desc: "Automated email campaigns that convert Brighton followers into repeat buyers.", href: "/brighton/content/email" },
  { title: "Landing Page Design Brighton", desc: "CRO-optimised pages to convert your Instagram traffic into leads.", href: "/brighton/web/landing-pages" },
];

function RelatedSection() {
  return (
    <section className="py-16 px-4" style={{ background: "#0D1627" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#F8FAFC" }}>Related Brighton Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {related.map((r) => (
            <Link key={r.href} href={r.href} className="rounded-xl p-5 border hover:-translate-y-1 transition-all duration-300 block group" style={{ background: "rgba(30,41,59,0.4)", borderColor: "rgba(71,85,105,0.5)" }}>
              <div className="font-semibold mb-2 group-hover:text-pink-400 transition-colors" style={{ color: "#F8FAFC" }}>{r.title}</div>
              <div className="text-sm" style={{ color: "#64748B" }}>{r.desc}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/brighton" className="hover:text-white transition-colors" style={{ color: "#F472B6" }}>← Back to Brighton Digital Marketing</Link>
          <span style={{ color: "#334155" }}>|</span>
          <Link href="/contact" className="hover:text-white transition-colors" style={{ color: "#F472B6" }}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

export default function InstagramMarketingBrightonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main><Breadcrumb /><HeroSection /><FeaturesSection /><WhySection /><ProcessSection /><StatsSection /><AreasSection /><TestimonialSection /><FAQSection /><CTASection /><RelatedSection /></main>
    </>
  );
}
