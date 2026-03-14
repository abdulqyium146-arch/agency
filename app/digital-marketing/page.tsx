import type { Metadata } from "next";
import DigitalMarketingHero from "@/components/sections/DigitalMarketingHero";
import WhatIsDigitalMarketing from "@/components/sections/WhatIsDigitalMarketing";
import DMServices from "@/components/sections/DMServices";
import DMBenefits from "@/components/sections/DMBenefits";
import DMProcess from "@/components/sections/DMProcess";
import DMComparison from "@/components/sections/DMComparison";
import DMFAQSection from "@/components/sections/DMFAQSection";
import TrustedClientsSection from "@/components/sections/TrustedClientsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const metadata: Metadata = {
  title:
    "Digital Marketing for Small Businesses | Expert Services & Strategy",
  description:
    "Expert digital marketing services for UK small businesses. Local SEO, Google Ads, web design from £199/month. Proven results. 150+ businesses helped. Free £299 audit. No contracts.",
  keywords: [
    "digital marketing for small business",
    "digital marketing services for small business",
    "digital marketing company for small business",
    "digital marketing for small businesses",
    "small business digital marketing services",
    "affordable digital marketing",
    "local SEO small business",
    "digital marketing agency UK",
  ],
  authors: [{ name: "Alex Morgan, Digital Marketing Expert" }],
  creator: "SBMP — Small Business Marketing Professional",
  publisher: "SBMP",
  category: "Digital Marketing",
  alternates: {
    canonical: `${BASE_URL}/digital-marketing-for-small-business`,
  },
  openGraph: {
    title: "Digital Marketing for Small Businesses | Expert Services",
    description:
      "Expert digital marketing services for small businesses. Local SEO, Google Ads, web design. From £199/month. Free audit.",
    url: `${BASE_URL}/digital-marketing-for-small-business`,
    type: "website",
    siteName: "SBMP — Local Digital Marketing",
    images: [
      {
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 1200,
        height: 630,
        alt: "SBMP — Digital Marketing for Small Businesses",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for Small Businesses | SBMP",
    description:
      "Expert digital marketing services for UK small businesses. Proven results. From £199/month.",
    images: [`${BASE_URL}/sbmp-logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// FAQ data - matches DMFAQSection exactly
const dmFAQs = [
  {
    q: "How much does digital marketing for small businesses cost?",
    a: "Digital marketing services start from £199/month for basic local SEO, with comprehensive packages ranging from £500-1500+/month depending on services. We offer flexible month-to-month plans—no long contracts.",
  },
  {
    q: "How long does it take to see results from digital marketing?",
    a: "Most small businesses see measurable results within 30-90 days. Local SEO and Google Ads can start driving traffic immediately.",
  },
  {
    q: "Do I need all services or can I start with one?",
    a: "You can absolutely start with one service and add more later. We recommend what works best for your goals.",
  },
  {
    q: "What if my business is new or small with no online presence?",
    a: "Perfect—we work with new businesses all the time and build a strong digital foundation from day one.",
  },
  {
    q: "Will digital marketing work for my type of business?",
    a: "We specialize in service businesses and have proven success across 50+ industries. If your customers search Google for your services, digital marketing will work.",
  },
  {
    q: "Can you guarantee #1 Google rankings?",
    a: "No legitimate agency guarantees #1 rankings. We focus on results (leads and sales), not just rankings.",
  },
  {
    q: "What if I want to cancel? Are there penalties?",
    a: "No. All plans are month-to-month with no contracts. Cancel anytime with 30 days notice.",
  },
  {
    q: "How do I know if digital marketing is working?",
    a: "We provide detailed weekly reports showing leads generated, customer calls, website traffic, conversions, and ROI.",
  },
];

// Generate comprehensive schema markup
function generateDMSchemas() {
  const schemas = [
    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/digital-marketing-for-small-business`,
      url: `${BASE_URL}/digital-marketing-for-small-business`,
      name: "Digital Marketing for Small Businesses | Expert Services & Strategy",
      description:
        "Expert digital marketing services for UK small businesses. Local SEO, Google Ads, web design from £199/month.",
      isPartOf: { "@id": `${BASE_URL}` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/sbmp-logo.png`,
        width: 1200,
        height: 630,
      },
      datePublished: new Date().toISOString().split("T")[0],
      dateModified: new Date().toISOString().split("T")[0],
      author: {
        "@type": "Person",
        name: "Alex Morgan",
        url: `${BASE_URL}`,
        jobTitle: "Digital Marketing Expert",
        description: "5+ years of focused digital marketing expertise for UK small businesses",
      },
    },

    // Service Schema - Digital Marketing
    {
      "@type": "Service",
      "@id": `${BASE_URL}/digital-marketing-for-small-business`,
      name: "Digital Marketing Services for Small Businesses",
      description:
        "Comprehensive digital marketing services including local SEO, Google Ads, web design, social media, reputation management.",
      provider: {
        "@type": "Organization",
        name: "SBMP — Small Business Marketing Professional",
        url: BASE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: "UK",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${BASE_URL}/free-audit`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Local SEO Services",
            description: "Get your business to page 1 of Google in your city",
            price: "199",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            name: "Google Ads Management",
            description: "Instantly appear at the top of Google search results",
            price: "299",
            priceCurrency: "GBP",
          },
          {
            "@type": "Offer",
            name: "Web Design & Development",
            description: "Fast, mobile-friendly websites designed to convert",
            price: "500",
            priceCurrency: "GBP",
          },
        ],
      },
    },

    // ProfessionalService Schema - Enables rich results
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/digital-marketing-for-small-business`,
      name: "Digital Marketing for Small Businesses",
      description:
        "Expert digital marketing services tailored for UK small businesses. From local SEO to Google Ads management.",
      url: `${BASE_URL}/digital-marketing-for-small-business`,
      telephone: "+44 3474825228",
      email: "contact@smallbusinessmarketingprofessional.com",
      priceRange: "£199-£1500",
      areaServed: {
        "@type": "Country",
        name: "UK",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Packages",
        itemListElement: [
          {
            "@type": "Service",
            name: "Local SEO",
            price: "From £199/month",
          },
          {
            "@type": "Service",
            name: "Google Ads Management",
            price: "From £299/month",
          },
          {
            "@type": "Service",
            name: "Website Design",
            price: "From £500",
          },
        ],
      },
    },

    // Breadcrumb Schema
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Digital Marketing for Small Businesses",
          item: `${BASE_URL}/digital-marketing-for-small-business`,
        },
      ],
    },

    // HowTo Schema - Our Process
    {
      "@type": "HowTo",
      name: "How Digital Marketing Works for Small Businesses",
      description:
        "4-step process for getting digital marketing results for your small business",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Free Audit & Strategy",
          text: "We analyze your business and create a personalized strategy",
          duration: "P1W",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Implementation",
          text: "We set up and launch your digital marketing campaigns",
          duration: "P2W",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Optimization & Growth",
          text: "We monitor performance and make improvements based on data",
          duration: "P8W",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Scale & Maintain",
          text: "We scale what works and maintain consistent results",
          duration: "PT0S",
        },
      ],
    },

    // AggregateRating Schema
    {
      "@type": "AggregateRating",
      "@id": `${BASE_URL}/digital-marketing-for-small-business#rating`,
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "150",
      reviewCount: "150",
    },

    // DefinedTerm Schema - For AEO (Answer Engine Optimization)
    {
      "@type": "DefinedTerm",
      name: "Digital Marketing",
      description:
        "Digital marketing is the practice of promoting a small business online through multiple digital channels including search engines, social media, email, and websites. For small businesses, it helps attract local customers, build credibility, and compete with larger companies.",
      url: `${BASE_URL}/digital-marketing-for-small-business`,
      termCode: "DM001",
      inLanguage: "en",
    },

    // Offer Schema - Pricing
    {
      "@type": "Offer",
      "@id": `${BASE_URL}/digital-marketing-for-small-business#offer`,
      name: "Digital Marketing Services",
      description: "Flexible digital marketing packages starting from £199/month",
      price: "199",
      priceCurrency: "GBP",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        .toISOString()
        .split("T")[0],
      availability: "InStock",
      seller: {
        "@type": "Organization",
        name: "SBMP — Small Business Marketing Professional",
      },
    },

    // Organization Schema
    {
      "@type": "Organization",
      "@id": BASE_URL,
      name: "SBMP — Small Business Marketing Professional",
      url: BASE_URL,
      logo: `${BASE_URL}/sbmp-logo.png`,
      description:
        "Expert digital marketing services for UK small businesses. Local SEO, Google Ads, web design. From £199/month.",
      telephone: "+44 3474825228",
      email: "contact@smallbusinessmarketingprofessional.com",
      sameAs: [],
      foundingDate: "2020",
      founder: {
        "@type": "Person",
        name: "Alex Morgan",
        jobTitle: "Founder & Digital Marketing Expert",
      },
      areaServed: {
        "@type": "Country",
        name: "UK",
      },
    },
  ];

  return schemas;
}

// FAQ Schema - separate for rich snippets
const dmFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: dmFAQs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function DigitalMarketingPage() {
  const schemas = generateDMSchemas();
  const schemaWithGraph = {
    "@context": "https://schema.org",
    "@graph": schemas,
  };

  return (
    <>
      {/* FAQ Schema - Separate for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dmFAQSchema),
        }}
      />

      {/* Main schemas with @graph wrapper */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaWithGraph),
        }}
      />

      {/* Page Sections */}
      <DigitalMarketingHero />
      <WhatIsDigitalMarketing />
      <DMServices />
      <DMBenefits />
      <TrustedClientsSection />
      <DMProcess />
      <DMComparison />
      <DMFAQSection />
      <FinalCTASection />
    </>
  );
}
