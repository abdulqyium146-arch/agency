import type { Metadata } from "next";
import Link from "next/link";
import {
  Play,
  Film,
  Scissors,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Clock,
  Award,
  TrendingUp,
  Users,
  Monitor,
  Smartphone,
  Youtube,
  Share2,
  Eye,
} from "lucide-react";

// ============================================================================
// CONSTANTS
// ============================================================================

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20need%20professional%20video%20editing%20services.%20Can%20you%20help%3F";

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: "Professional Video Editing Services | USA, UK & Worldwide | SBMP",
  description:
    "Expert video editing services for businesses worldwide. YouTube videos, social media reels, corporate films, ads & more. Fast turnaround, unlimited revisions. Serving USA, UK, Canada, Australia & globally.",
  keywords: [
    "video editing services",
    "professional video editing",
    "video editing company",
    "video editing services USA",
    "video editing services UK",
    "online video editing service",
    "corporate video editing",
    "YouTube video editing service",
    "social media video editing",
    "video editing for businesses",
    "affordable video editing services",
    "video post production services",
    "motion graphics services",
    "video color grading service",
    "short form video editing",
    "long form video editing",
    "reels editing service",
    "TikTok video editing",
    "Instagram reels editor",
    "promotional video editing",
    "explainer video editing",
    "wedding video editing",
    "real estate video editing",
    "e-commerce video editing",
    "product video editing",
    "video editing agency",
    "freelance video editing",
    "best video editing services",
    "fast video editing turnaround",
    "video editing with subtitles",
    "video editing captions",
    "video editor for hire",
    "hire video editor online",
    "video editing services near me",
    "remote video editing services",
    "video content creation",
    "video marketing services",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: `${BASE_URL}/video-editing-services`,
  },
  openGraph: {
    title: "Professional Video Editing Services | USA, UK & Worldwide",
    description:
      "Expert video editing for YouTube, social media, corporate, ads & more. Fast delivery, unlimited revisions. Serving businesses in USA, UK, Canada, Australia & globally.",
    url: `${BASE_URL}/video-editing-services`,
    type: "website",
    siteName: "SBMP — Small Business Marketing Professional",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 1200,
        height: 630,
        alt: "Professional Video Editing Services — SBMP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Video Editing Services | USA, UK & Worldwide",
    description:
      "YouTube, social media, corporate & ad video editing. Fast turnaround, unlimited revisions. Global service.",
    images: [`${BASE_URL}/sbmp-logo.png`],
  },
};

// ============================================================================
// JSON-LD SCHEMA
// ============================================================================

const videoEditingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "CreativeWork"],
      "@id": `${BASE_URL}/video-editing-services#service`,
      name: "Professional Video Editing Services — SBMP",
      url: `${BASE_URL}/video-editing-services`,
      logo: `${BASE_URL}/sbmp-logo.png`,
      image: `${BASE_URL}/sbmp-logo.png`,
      description:
        "Professional video editing services for businesses worldwide. We specialise in YouTube content, social media reels, corporate videos, advertisements, motion graphics, colour grading and more. Serving clients across the USA, UK, Canada, Australia and globally.",
      telephone: "+923474825228",
      email: "hello@sbmp.com",
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "New Zealand" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "UAE" },
        { "@type": "Continent", name: "Worldwide" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Video Editing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "YouTube Video Editing",
              description:
                "Long-form YouTube video editing with intro/outro, chapters, subtitles, colour grading and thumbnail-ready exports.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "49",
              priceCurrency: "USD",
              unitText: "PER_VIDEO",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Reels & Shorts Editing",
              description:
                "Vertical short-form video editing for Instagram Reels, TikTok, YouTube Shorts and Facebook.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "25",
              priceCurrency: "USD",
              unitText: "PER_VIDEO",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate & Brand Video Editing",
              description:
                "Professional corporate video editing with motion graphics, lower thirds, brand overlays and music.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "149",
              priceCurrency: "USD",
              unitText: "PER_VIDEO",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Advertisement & Promo Video Editing",
              description:
                "High-impact ad video editing for Facebook Ads, Google Ads, TV commercials and digital campaigns.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "99",
              priceCurrency: "USD",
              unitText: "PER_VIDEO",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "347",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Michael T." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "My YouTube channel went from 2k to 45k subscribers in 6 months after switching to SBMP for video editing. The quality and turnaround time is unmatched.",
          datePublished: "2025-10-12",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sarah K." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Our product reels are getting 10x more views than before. The team understands social media perfectly and delivers exactly what we need every time.",
          datePublished: "2025-12-03",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "James W." },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody:
            "Professional, fast, and affordable. Our corporate video looked like it cost £10,000 to produce. Highly recommend to any UK business.",
          datePublished: "2026-01-18",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/video-editing-services#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How fast is your video editing turnaround?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard turnaround is 24–48 hours for short-form content (reels, shorts, TikToks) and 2–4 business days for long-form videos (YouTube, corporate, ads). Rush delivery in 12 hours is available for an additional fee.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer unlimited revisions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All our video editing packages include unlimited revisions until you are 100% satisfied. We don't move on until you love the final product.",
          },
        },
        {
          "@type": "Question",
          name: "What video formats do you edit and deliver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We work with all major formats — MP4, MOV, AVI, MKV, ProRes, R3D and more. Deliverables are exported in your required format and resolution, including 4K, 1080p, vertical 9:16, square 1:1, and widescreen 16:9.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide subtitles and captions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We offer accurate auto-generated and manually reviewed subtitles, burned-in captions (for social media), and SRT/VTT files for YouTube and website embeds.",
          },
        },
        {
          "@type": "Question",
          name: "Can you add motion graphics and animations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Our team can add custom motion graphics, animated lower thirds, logo reveals, kinetic typography, transitions, and full After Effects animations to any video.",
          },
        },
        {
          "@type": "Question",
          name: "Do you edit videos for clients outside the UK and USA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we are a fully remote video editing service serving clients worldwide — USA, UK, Canada, Australia, UAE, Europe, Asia and beyond. All communication and file transfers are handled online.",
          },
        },
        {
          "@type": "Question",
          name: "What software do your video editors use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our editors work in Adobe Premiere Pro, DaVinci Resolve, After Effects, and Final Cut Pro, depending on project requirements. We use professional colour grading and audio mastering pipelines on every project.",
          },
        },
        {
          "@type": "Question",
          name: "How do I send my raw footage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can share footage via Google Drive, Dropbox, WeTransfer, or Frame.io. We'll send you a secure upload link once your project is confirmed. Files are deleted from our servers 30 days after delivery.",
          },
        },
      ],
    },
  ],
};

// ============================================================================
// DATA
// ============================================================================

const services = [
  {
    icon: Youtube,
    title: "YouTube Video Editing",
    desc: "Engaging long-form content that keeps viewers watching. Chapters, cards, end screens, colour grade, music bed — everything optimised for YouTube's algorithm.",
    tags: ["Long-form", "Chapters", "SEO Titles", "Thumbnails-ready"],
    price: "From $49/video",
  },
  {
    icon: Smartphone,
    title: "Reels, TikTok & Shorts",
    desc: "Hook-driven vertical videos built for maximum reach on Instagram, TikTok and YouTube Shorts. Trending transitions, text animations, and viral-ready cuts.",
    tags: ["9:16 Format", "Trending Transitions", "Captions", "Fast Cuts"],
    price: "From $25/video",
  },
  {
    icon: Monitor,
    title: "Corporate & Brand Videos",
    desc: "Polished, professional corporate videos that build trust and authority. Brand-consistent motion graphics, voiceover sync, and broadcast-quality colour grading.",
    tags: ["Motion Graphics", "Lower Thirds", "Brand Kit", "4K Export"],
    price: "From $149/video",
  },
  {
    icon: Play,
    title: "Ad & Promo Videos",
    desc: "High-converting video ads for Facebook, Instagram, Google, YouTube and TV. Optimised for each platform's specs, hook structure, and CTA placement.",
    tags: ["Facebook Ads", "Google Ads", "TV Ready", "A/B Variants"],
    price: "From $99/video",
  },
  {
    icon: Film,
    title: "Real Estate Video Editing",
    desc: "Stunning property walkthroughs with colour correction, drone footage integration, smooth transitions, and branded intros for agents and developers.",
    tags: ["Drone Footage", "Colour Correction", "Property Tours", "Agent Branding"],
    price: "From $69/video",
  },
  {
    icon: Share2,
    title: "E-Commerce & Product Videos",
    desc: "Conversion-focused product videos for Shopify, Amazon, and online stores. Clean, professional edits that drive sales and reduce buyer hesitation.",
    tags: ["Product 360°", "Lifestyle Cuts", "Amazon Ready", "Shopify Format"],
    price: "From $59/video",
  },
  {
    icon: Zap,
    title: "Podcast & Webinar Editing",
    desc: "Full podcast video editing — audio cleanup, talking-head framing, chapter markers, audiograms, and highlight clips for social distribution.",
    tags: ["Audio Cleanup", "Audiograms", "Highlight Clips", "RSS Export"],
    price: "From $79/episode",
  },
  {
    icon: Scissors,
    title: "Wedding & Event Videos",
    desc: "Cinematic wedding films and event highlight reels that capture every emotion. Colour grading, music sync, titles, and multi-cam editing included.",
    tags: ["Cinematic", "Multi-Cam", "Music Sync", "Highlight Reel"],
    price: "From $199/video",
  },
];

const addons = [
  { name: "Captions / Subtitles (Auto + Manual review)", price: "+$15" },
  { name: "Custom motion graphics & logo animation", price: "+$49" },
  { name: "Colour grading (DaVinci Resolve)", price: "+$29" },
  { name: "Voiceover (professional native speaker)", price: "+$49" },
  { name: "Background music + sound design", price: "+$19" },
  { name: "Thumbnail design (YouTube/Social)", price: "+$15" },
  { name: "Rush delivery (12-hour turnaround)", price: "+$39" },
  { name: "Multiple aspect ratio exports (16:9 + 9:16 + 1:1)", price: "+$19" },
];

const process = [
  {
    step: "01",
    title: "Brief & Upload",
    desc: "Tell us what you need via WhatsApp or our form. Upload raw footage via Google Drive, Dropbox, or WeTransfer. We'll confirm scope and turnaround time.",
  },
  {
    step: "02",
    title: "Edit & Craft",
    desc: "Our editor dives in — cutting, grading, adding motion graphics, captions, music and transitions. Every video follows a proven engagement framework.",
  },
  {
    step: "03",
    title: "Review & Revise",
    desc: "You receive a private review link within the agreed timeframe. Leave timestamped comments. We revise until you're 100% satisfied — unlimited rounds.",
  },
  {
    step: "04",
    title: "Deliver & Publish",
    desc: "Final files delivered in your required format and resolution — ready to upload directly to YouTube, Instagram, TikTok, your website or ad platform.",
  },
];

const stats = [
  { value: "2,500+", label: "Videos Edited" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24–48h", label: "Avg. Turnaround" },
  { value: "40+", label: "Countries Served" },
];

const industries = [
  "E-Commerce & Retail",
  "Real Estate & Property",
  "Health & Wellness",
  "Fitness & Personal Training",
  "Restaurants & Food",
  "Coaches & Consultants",
  "Technology & SaaS",
  "Education & Online Courses",
  "Legal & Finance",
  "Travel & Hospitality",
  "Fashion & Beauty",
  "Automotive",
  "Non-Profits & Charities",
  "Entertainment & Media",
  "Recruitment & HR",
  "Home Services & Trades",
];

const testimonials = [
  {
    name: "Michael T.",
    role: "YouTube Creator, USA",
    rating: 5,
    text: "My channel grew from 2,000 to 45,000 subscribers in 6 months after switching to SBMP for editing. The quality is incredible and turnaround is always on time.",
  },
  {
    name: "Sarah K.",
    role: "E-Commerce Brand Owner, UK",
    rating: 5,
    text: "Our product reels now get 10x more views and saves than before. The editing team understands social media algorithms — they know exactly what works.",
  },
  {
    name: "James W.",
    role: "Marketing Director, Australia",
    rating: 5,
    text: "Our corporate video looked like it cost $50,000 to produce. Absolutely premium quality at a fraction of the price. We use them for every video now.",
  },
  {
    name: "Priya N.",
    role: "Real Estate Agent, Canada",
    rating: 5,
    text: "Property listings with their edited walkthrough videos sell 3x faster. The colour grading is stunning. My clients always comment on how professional they look.",
  },
  {
    name: "Hassan A.",
    role: "Business Coach, UAE",
    rating: 5,
    text: "I send raw recordings from my phone and get back polished, professional content ready for LinkedIn and YouTube. The captions alone save me hours every week.",
  },
  {
    name: "Emma R.",
    role: "Restaurant Owner, London",
    rating: 5,
    text: "Our food reels are now reaching 500,000+ views each. The editing style is perfectly aligned with our brand. Fast, professional, and always delivers.",
  },
];

const faqs = [
  {
    q: "How fast is your video editing turnaround?",
    a: "Standard turnaround is 24–48 hours for short-form content (reels, shorts, TikToks) and 2–4 business days for long-form videos (YouTube, corporate, ads). Rush 12-hour delivery is available as an add-on.",
  },
  {
    q: "Do you offer unlimited revisions?",
    a: "Yes — every project includes unlimited revisions until you are 100% satisfied. We don't charge extra for revision rounds. We want you to love the final product.",
  },
  {
    q: "What video formats do you work with?",
    a: "We accept all major formats: MP4, MOV, AVI, MKV, ProRes, R3D, and more. We deliver in your required format and resolution — 4K, 1080p, vertical 9:16, square 1:1, and widescreen 16:9.",
  },
  {
    q: "Do you add subtitles and captions?",
    a: "Yes. We offer accurate auto-generated and manually reviewed subtitles, burned-in captions for social media, and SRT/VTT files for YouTube and website embeds. Available as an add-on.",
  },
  {
    q: "Can you add motion graphics and animations?",
    a: "Absolutely. Our team can add custom motion graphics, animated lower thirds, logo reveals, kinetic typography, custom transitions, and full After Effects animations to any video.",
  },
  {
    q: "Do you serve clients outside the USA and UK?",
    a: "Yes — we are a fully remote service with clients in 40+ countries including Canada, Australia, UAE, Germany, Singapore, India, and more. All work is handled online with zero geographic limits.",
  },
  {
    q: "What editing software do you use?",
    a: "Our editors use Adobe Premiere Pro, DaVinci Resolve, After Effects, and Final Cut Pro depending on project type. We use professional colour grading and audio mastering pipelines on every project.",
  },
  {
    q: "How do I send you my raw footage?",
    a: "Share footage via Google Drive, Dropbox, WeTransfer, or Frame.io. We'll send a secure upload link once your project is confirmed. Raw files are deleted from our servers 30 days after final delivery.",
  },
  {
    q: "Do you provide a dedicated account manager?",
    a: "Yes. Monthly retainer clients get a dedicated editor and account manager. All clients communicate directly with their editor via WhatsApp or a shared project dashboard for fast feedback loops.",
  },
  {
    q: "Is there a minimum number of videos I have to order?",
    a: "No minimum. You can order a single video or set up an ongoing monthly retainer for consistent weekly content. Volume discounts apply from 10+ videos per month.",
  },
];

const globalMarkets = [
  { flag: "🇺🇸", country: "United States", desc: "NYC, LA, Chicago, Houston, Miami" },
  { flag: "🇬🇧", country: "United Kingdom", desc: "London, Manchester, Birmingham, Leeds" },
  { flag: "🇨🇦", country: "Canada", desc: "Toronto, Vancouver, Calgary, Montreal" },
  { flag: "🇦🇺", country: "Australia", desc: "Sydney, Melbourne, Brisbane, Perth" },
  { flag: "🇦🇪", country: "UAE", desc: "Dubai, Abu Dhabi, Sharjah" },
  { flag: "🇩🇪", country: "Germany", desc: "Berlin, Munich, Hamburg, Frankfurt" },
  { flag: "🇸🇬", country: "Singapore", desc: "Full city coverage" },
  { flag: "🌍", country: "Worldwide", desc: "Any country, any timezone" },
];

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function VideoEditingServicesPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoEditingSchema) }}
      />

      <main className="bg-[#080D1A] text-[#E2E8F0]">

        {/* ── BREADCRUMB ── */}
        <nav className="bg-[#0D1627] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-sm text-[#8B9CB8]">
              <li><Link href="/" className="hover:text-[#4F8EF7] transition-colors">Home</Link></li>
              <li className="text-white/30">/</li>
              <li className="text-[#E2E8F0]">Video Editing Services</li>
            </ol>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-[#080D1A] pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#4F8EF7]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#22C55E]/6 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full px-4 py-2 mb-6">
                <Globe className="w-4 h-4 text-[#4F8EF7]" />
                <span className="text-[#4F8EF7] text-sm font-medium">Serving USA · UK · Canada · Australia · Worldwide</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                Professional{" "}
                <span className="text-[#4F8EF7]">Video Editing Services</span>{" "}
                That Drive Real Results
              </h1>

              <p className="text-lg sm:text-xl text-[#8B9CB8] leading-relaxed mb-8 max-w-3xl mx-auto">
                From YouTube content and viral reels to corporate films and high-converting ads — our expert video editors deliver broadcast-quality results with{" "}
                <strong className="text-[#E2E8F0]">24–48 hour turnaround</strong>,{" "}
                <strong className="text-[#E2E8F0]">unlimited revisions</strong>, and pricing that makes sense for businesses of every size.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
                >
                  <Play className="w-5 h-5" />
                  Get a Free Quote Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[#E2E8F0] font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
                >
                  View Pricing
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#8B9CB8]">
                {[
                  "✓ 24–48h Turnaround",
                  "✓ Unlimited Revisions",
                  "✓ 100% Satisfaction Guarantee",
                  "✓ No Contracts",
                  "✓ 40+ Countries Served",
                ].map((t) => (
                  <span key={t} className="text-[#22C55E] font-medium">{t}</span>
                ))}
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#0D1627] border border-white/7 rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#4F8EF7] mb-1">{s.value}</div>
                  <div className="text-sm text-[#8B9CB8]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="bg-[#0D1627] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Video Editing Services We Offer
              </h2>
              <p className="text-[#8B9CB8] text-lg max-w-2xl mx-auto">
                Every format, every platform, every industry. Our editors handle it all — from 60-second TikToks to 60-minute documentaries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.title}
                    className="bg-[#080D1A] border border-white/7 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#4F8EF7]/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#4F8EF7]/10 flex items-center justify-center group-hover:bg-[#4F8EF7]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#4F8EF7]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#E2E8F0] mb-2">{svc.title}</h3>
                      <p className="text-[#8B9CB8] text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white/5 border border-white/8 rounded-full px-2 py-1 text-[#8B9CB8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-[#22C55E] font-semibold text-sm">{svc.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="bg-[#080D1A] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Why 500+ Businesses Trust Us With Their Video Content
                </h2>
                <p className="text-[#8B9CB8] text-lg mb-8 leading-relaxed">
                  We're not a marketplace of random freelancers. Every project is handled by a dedicated editor who understands your brand, your audience, and the platform you're publishing on. The result? Videos that actually perform.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: Clock, title: "Guaranteed Fast Turnaround", desc: "24–48h for short-form, 2–4 days for long-form. No missed deadlines, ever." },
                    { icon: Scissors, title: "Unlimited Revisions", desc: "We revise until you're 100% happy. No cap on revision rounds, no extra charges." },
                    { icon: Award, title: "Dedicated Editor", desc: "Same editor on every project — they learn your style, brand, and preferences." },
                    { icon: Globe, title: "Fully Remote & Global", desc: "Async workflow that works across any timezone. USA, UK, Australia, UAE and beyond." },
                    { icon: TrendingUp, title: "Algorithm-Aware Editing", desc: "Our editors study platform algorithms. Every cut, hook, and caption is built to maximise reach and watch-time." },
                    { icon: Eye, title: "100% Satisfaction Guarantee", desc: "If you're not happy with the final result, you don't pay. That's our promise." },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.title} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#4F8EF7]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-[#4F8EF7]" />
                        </div>
                        <div>
                          <div className="font-semibold text-[#E2E8F0] mb-1">{item.title}</div>
                          <div className="text-[#8B9CB8] text-sm">{item.desc}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA card */}
              <div className="bg-[#0D1627] border border-white/7 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FBBF24] fill-[#FBBF24]" />
                    ))}
                  </div>
                  <span className="text-[#8B9CB8] text-sm">4.9/5 from 347+ clients</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Level Up Your Video Content?
                </h3>
                <p className="text-[#8B9CB8] mb-6">
                  Send us your raw footage today. We'll have a polished, publish-ready video back to you within 24–48 hours.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-6 py-4 rounded-xl transition-colors w-full mb-4"
                >
                  <Play className="w-5 h-5" />
                  Start Your First Video
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-center text-[#8B9CB8] text-xs">
                  No contracts · No setup fees · Cancel anytime
                </p>
                <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
                  {[
                    { v: "500+", l: "Happy Clients" },
                    { v: "2,500+", l: "Videos Edited" },
                    { v: "40+", l: "Countries" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="font-bold text-[#4F8EF7]">{s.v}</div>
                      <div className="text-xs text-[#8B9CB8]">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="bg-[#0D1627] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                How Our Video Editing Process Works
              </h2>
              <p className="text-[#8B9CB8] text-lg max-w-2xl mx-auto">
                Simple, transparent, and built around your schedule. From raw footage to finished video in four easy steps.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <div key={step.step} className="relative">
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10 z-0" />
                  )}
                  <div className="bg-[#080D1A] border border-white/7 rounded-2xl p-6 relative z-10">
                    <div className="text-4xl font-black text-[#4F8EF7]/20 mb-3">{step.step}</div>
                    <h3 className="font-bold text-[#E2E8F0] mb-2">{step.title}</h3>
                    <p className="text-[#8B9CB8] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ADD-ONS ── */}
        <section className="bg-[#080D1A] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Power Up Any Video With Our Add-Ons
                </h2>
                <p className="text-[#8B9CB8] text-lg mb-8">
                  Every video can be enhanced with professional upgrades. Mix and match to build exactly the package your content needs.
                </p>
                <div className="space-y-3">
                  {addons.map((addon) => (
                    <div
                      key={addon.name}
                      className="flex items-center justify-between bg-[#0D1627] border border-white/7 rounded-xl px-5 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                        <span className="text-[#E2E8F0] text-sm">{addon.name}</span>
                      </div>
                      <span className="text-[#FBBF24] font-semibold text-sm ml-4 flex-shrink-0">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Industries We Edit For
                </h2>
                <p className="text-[#8B9CB8] text-lg mb-8">
                  Every industry has different video needs. Our editors have deep experience across 16+ verticals.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((ind) => (
                    <div
                      key={ind}
                      className="flex items-center gap-2 text-[#8B9CB8] text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] flex-shrink-0" />
                      {ind}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GLOBAL REACH ── */}
        <section className="bg-[#0D1627] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Video Editing Services — USA, UK & Worldwide
              </h2>
              <p className="text-[#8B9CB8] text-lg max-w-2xl mx-auto">
                We're a fully remote video editing agency with no geographic limits. Whether you're a creator in New York, a brand in London, or a startup in Dubai — we deliver the same premium quality.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {globalMarkets.map((market) => (
                <div
                  key={market.country}
                  className="bg-[#080D1A] border border-white/7 rounded-2xl p-6 text-center hover:border-[#4F8EF7]/30 transition-colors"
                >
                  <div className="text-4xl mb-3">{market.flag}</div>
                  <div className="font-bold text-[#E2E8F0] mb-1">{market.country}</div>
                  <div className="text-[#8B9CB8] text-sm">{market.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-[#080D1A] border border-white/7 rounded-2xl p-8 text-center">
              <p className="text-[#8B9CB8] text-lg max-w-3xl mx-auto">
                Our async workflow means we work across <strong className="text-[#E2E8F0]">every timezone</strong>. Send footage, leave feedback, and receive finished videos — all without a single call if you prefer. We've worked with clients in{" "}
                <strong className="text-[#4F8EF7]">40+ countries</strong> and counting.
              </p>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="bg-[#080D1A] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#FBBF24] fill-[#FBBF24]" />
                ))}
                <span className="text-[#8B9CB8] ml-2">4.9 / 5 from 347+ clients worldwide</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-[#0D1627] border border-white/7 rounded-2xl p-6 flex flex-col gap-4"
                >
                  <div className="flex">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" />
                    ))}
                  </div>
                  <p className="text-[#8B9CB8] text-sm leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-auto">
                    <div className="font-semibold text-[#E2E8F0]">{t.name}</div>
                    <div className="text-xs text-[#8B9CB8]">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#0D1627] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#8B9CB8] text-lg">
                Everything you need to know about our video editing services.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-[#080D1A] border border-white/7 rounded-2xl group"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-[#E2E8F0] list-none select-none">
                    <span>{faq.q}</span>
                    <span className="text-[#4F8EF7] ml-4 flex-shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-[#8B9CB8] text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="bg-[#080D1A] py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#0D1627] to-[#0F172A] border border-[#4F8EF7]/20 rounded-3xl p-12">
              <div className="inline-flex items-center gap-2 bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-[#4F8EF7]" />
                <span className="text-[#4F8EF7] text-sm font-medium">500+ businesses. 40+ countries. 2,500+ videos delivered.</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Get Your Video Edited — Fast, Professional, Affordable
              </h2>
              <p className="text-[#8B9CB8] text-lg mb-8 max-w-2xl mx-auto">
                Send us your raw footage today. We'll deliver a polished, publish-ready video within 24–48 hours. No contracts, unlimited revisions, 100% satisfaction guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
                >
                  <Play className="w-5 h-5" />
                  Start a Project on WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[#E2E8F0] font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
                >
                  Send an Email Instead
                </Link>
              </div>
              <p className="mt-6 text-[#8B9CB8] text-sm">
                No setup fees · No minimum order · Cancel anytime · Satisfaction guaranteed
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
