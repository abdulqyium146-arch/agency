// Centralized data for all services, locations, and industries
// Single source of truth for consistent schema generation and metadata

export interface ServiceData {
  title: string;
  icon: string;
  tagline: string;
  description: string;
  benefits: string[];
  results: string;
  price: string;
}

export interface LocationData {
  slug: string;
  name: string;
  industry?: string;
}

export interface IndustryData {
  name: string;
  icon: string;
  plural: string;
  searchTerm: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  color: string;
  badge?: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  business: string;
}

// ============================================================================
// SERVICES DATA
// ============================================================================

export const services: Record<string, ServiceData> = {
  "local-seo": {
    title: "Local SEO & Google Rankings",
    icon: "📍",
    tagline:
      "Get your business to page 1 of Google when local customers search for your services.",
    description:
      "Local SEO is the single most powerful long-term strategy for UK service businesses. When someone in your area searches for 'plumber near me' or 'best dentist in Manchester', you want to be at the top. I use proven local SEO methods developed over 20 years to get you there — and keep you there.",
    benefits: [
      "Google Business Profile full optimisation",
      "Maps 3-pack ranking strategy",
      "Local citation building & cleanup",
      "Geo-targeted keyword content",
      "Competitor analysis & gap strategy",
      "Monthly ranking reports",
    ],
    results:
      "Most clients see ranking movement within 30–60 days, with strong page-1 positions by month 3.",
    price: "From £199/month",
  },
  "google-ads": {
    title: "Google Ads & PPC Management",
    icon: "🎯",
    tagline:
      "Instant page-1 visibility with ROI-tracked campaigns that bring in ready-to-buy customers.",
    description:
      "Google Ads done right can deliver immediate results while your SEO builds. Done wrong, it's an expensive lesson. I've managed Google Ads campaigns for UK service businesses since 2004 — I know how to eliminate wasted spend and maximise your return on every pound.",
    benefits: [
      "Instant page-1 Google visibility",
      "Zero wasted ad spend",
      "Negative keyword management",
      "Ad copy split testing",
      "Conversion tracking setup",
      "Weekly performance reports",
    ],
    results: "Most clients see leads within the first week of campaigns going live.",
    price: "From £299/month + ad spend",
  },
  "web-design": {
    title: "High-Converting Website Design",
    icon: "💻",
    tagline:
      "Professional websites built to turn visitors into paying customers — fast, mobile-first, SEO-ready.",
    description:
      "Your website is your 24/7 salesperson. It needs to load fast, look professional on every device, and be built with SEO baked in from the ground up. I build websites for UK service businesses that generate real enquiries — not just pretty pages that nobody finds.",
    benefits: [
      "Mobile-first responsive design",
      "Sub-2 second load speed",
      "SEO architecture built-in",
      "Lead capture & contact forms",
      "Google Analytics setup",
      "Hosted on your own domain",
    ],
    results:
      "New websites typically see a 40–80% improvement in enquiry rates within the first month.",
    price: "From £799 one-time or included in Pro plan",
  },
  "social-media": {
    title: "Social Media Marketing",
    icon: "📱",
    tagline:
      "Build a loyal local following that brings you consistent new customers every month.",
    description:
      "Social media for service businesses isn't about going viral. It's about building trust with your local community, showcasing your work, and staying top of mind when someone needs your services. I manage Facebook and Instagram for UK service businesses — consistently, professionally, and with results you can measure.",
    benefits: [
      "Facebook & Instagram management",
      "3+ posts per week minimum",
      "Local audience targeting",
      "Review & reputation content",
      "Story and reel creation",
      "Monthly engagement reports",
    ],
    results:
      "Consistent social media management typically leads to 20–40% more local brand recognition within 90 days.",
    price: "From £249/month",
  },
  reputation: {
    title: "Reputation Management",
    icon: "⭐",
    tagline:
      "Build, protect, and grow your online reputation to win more trust and more customers.",
    description:
      "In today's world, your online reviews are your most powerful sales tool. A business with 50 five-star reviews will win over a business with 5 — every single time. I help UK service businesses build a strong review profile ethically, respond to all feedback professionally, and amplify their trust signals across the web.",
    benefits: [
      "Google review generation campaigns",
      "Review response management",
      "Brand monitoring & alerts",
      "Trust signal amplification",
      "Negative review strategy",
      "Trustpilot & industry review sites",
    ],
    results: "Most clients double their Google review count within 60 days.",
    price: "From £149/month or included in Growth/Pro plans",
  },
};

export const servicesSlugs = Object.keys(services);

// ============================================================================
// LOCATIONS DATA
// ============================================================================

export const cities = [
  "birmingham",
  "manchester",
  "leeds",
  "sheffield",
  "bristol",
  "leicester",
  "nottingham",
  "liverpool",
  "newcastle",
  "cardiff",
  "edinburgh",
  "glasgow",
  "brighton",
  "southampton",
  "coventry",
  "hull",
  "derby",
  "stoke",
  "preston",
  "oxford",
];

export const locationTestimonials: Record<string, Testimonial> = {
  birmingham: {
    quote:
      "Within 8 weeks I went from page 4 to position #1 for 'plumber Birmingham'. The phone hasn't stopped ringing since.",
    name: "Dave T.",
    business: "Plumber, Birmingham",
  },
  manchester: {
    quote:
      "I was sceptical at first but the results speak for themselves. We're now getting 3x the calls we used to get. Absolutely brilliant.",
    name: "Sarah M.",
    business: "Cleaning Company, Manchester",
  },
  leeds: {
    quote:
      "Michelle helped us completely transform our online presence. We went from zero Google reviews to 47 in two months.",
    name: "James R.",
    business: "Electrician, Leeds",
  },
};

export const defaultLocationTestimonial: Testimonial = {
  quote:
    "The best investment I've made for my business. Within 90 days we were ranking on page 1 and the leads were coming in consistently.",
  name: "Mike L.",
  business: "Local Business",
};

// ============================================================================
// INDUSTRIES DATA
// ============================================================================

export const industries: Record<string, IndustryData> = {
  plumbers: { name: "Plumbers", icon: "🔧", plural: "Plumbing Businesses", searchTerm: "plumber near me" },
  electricians: { name: "Electricians", icon: "⚡", plural: "Electrical Businesses", searchTerm: "electrician near me" },
  dentists: { name: "Dentists", icon: "🦷", plural: "Dental Practices", searchTerm: "dentist near me" },
  solicitors: { name: "Solicitors", icon: "⚖️", plural: "Solicitor Firms", searchTerm: "solicitor near me" },
  "estate-agents": { name: "Estate Agents", icon: "🏠", plural: "Estate Agent Businesses", searchTerm: "estate agent near me" },
  cleaners: { name: "Cleaners", icon: "🧹", plural: "Cleaning Businesses", searchTerm: "cleaner near me" },
  builders: { name: "Builders", icon: "🏗️", plural: "Building Businesses", searchTerm: "builder near me" },
  landscapers: { name: "Landscapers", icon: "🌿", plural: "Landscaping Businesses", searchTerm: "landscaper near me" },
  "driving-schools": { name: "Driving Schools", icon: "🚗", plural: "Driving Schools", searchTerm: "driving school near me" },
  physiotherapists: { name: "Physiotherapists", icon: "💊", plural: "Physiotherapy Practices", searchTerm: "physiotherapist near me" },
  locksmiths: { name: "Locksmiths", icon: "🔐", plural: "Locksmith Businesses", searchTerm: "locksmith near me" },
  accountants: { name: "Accountants", icon: "💼", plural: "Accounting Firms", searchTerm: "accountant near me" },
  "car-detailing": { name: "Car Detailing", icon: "✨", plural: "Car Detailing Businesses", searchTerm: "car detailing near me" },
  "car-valeting": { name: "Car Valeting", icon: "🚘", plural: "Car Valeting Businesses", searchTerm: "car valeting near me" },
  "auto-locksmiths": { name: "Auto Locksmiths", icon: "🔑", plural: "Auto Locksmith Businesses", searchTerm: "auto locksmith near me" },
  "car-locksmiths": { name: "Car Locksmiths", icon: "🚪", plural: "Car Locksmith Businesses", searchTerm: "car locksmith near me" },
  "home-locksmiths": { name: "Home Locksmiths", icon: "🏡", plural: "Home Locksmith Businesses", searchTerm: "home locksmith near me" },
  "gutter-cleaning": { name: "Gutter Cleaning", icon: "🌧️", plural: "Gutter Cleaning Businesses", searchTerm: "gutter cleaning near me" },
  "jet-washing": { name: "Jet Washing", icon: "💦", plural: "Jet Washing Businesses", searchTerm: "jet washing near me" },
};

export const industriesSlugs = Object.keys(industries);

// ============================================================================
// PRICING DATA
// ============================================================================

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "£199",
    period: "/month",
    color: "#4F8EF7",
    features: ["Local SEO basics", "Google Business Profile", "Monthly report"],
  },
  {
    name: "Growth",
    price: "£349",
    period: "/month",
    color: "#22C55E",
    badge: "Most Popular",
    features: ["Full local SEO", "Google Ads management", "Reputation management", "Bi-weekly reports"],
  },
  {
    name: "Pro",
    price: "£599",
    period: "/month",
    color: "#4F8EF7",
    features: ["Everything in Growth", "Custom website", "Social media", "Priority support"],
  },
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getSingularName(name: string): string {
  if (name.endsWith("s") && name !== "Driving Schools") {
    return name.slice(0, -1);
  }
  return name;
}

export function getLocationTestimonial(city: string): Testimonial {
  return locationTestimonials[city] || {
    ...defaultLocationTestimonial,
    business: `Local Business, ${capitalize(city)}`,
  };
}

export function getIndustryPluralDisplayList(): string[] {
  return [
    "Plumbers",
    "Electricians",
    "Dentists",
    "Solicitors",
    "Estate Agents",
    "Cleaners",
    "Builders",
    "Landscapers",
    "Driving Schools",
    "Physiotherapists",
    "Locksmiths",
    "Accountants",
  ];
}
