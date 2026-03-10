export interface ServiceEntry {
  title: string;
  slug: string;
  shortDesc: string;
  keywords: string[];
  longDesc: string;
  process: { step: string; desc: string }[];
}

export const services: ServiceEntry[] = [
  {
    title: "Google My Business Optimization",
    slug: "google-my-business-optimization",
    shortDesc:
      "Fully optimize your Google Business Profile to dominate local search results and Google Maps rankings.",
    keywords: [
      "google my business optimization",
      "gmb seo",
      "seo google my business",
      "google business profile optimization",
      "improve google my business ranking",
      "google maps seo",
    ],
    longDesc:
      "Your Google Business Profile is the single most powerful free tool for local visibility. When potential customers search for services in your area, a fully optimized GMB profile places you directly in the Google Local Pack — the coveted map section at the top of search results. Our Google My Business optimization service covers every element of your profile: accurate NAP data, category selection, service listings, business descriptions packed with local keywords, photo uploads, Q&A management, and a systematic review-generation strategy. We also optimize your posting cadence and use geo-tagged images to reinforce your location signals. Businesses with optimized GMB profiles see up to 70% more calls and 35% more website visits within 90 days.",
    process: [
      { step: "GMB Audit", desc: "We audit your current profile for completeness, accuracy, and keyword gaps." },
      { step: "Profile Build-Out", desc: "We complete every field, optimize descriptions, and upload geo-tagged photos." },
      { step: "Citation Sync", desc: "We align your NAP across 50+ directories to strengthen local authority." },
      { step: "Review & Posts", desc: "We implement a review strategy and schedule regular Google Posts to boost engagement." },
    ],
  },
  {
    title: "Local SEO Audit",
    slug: "local-seo-audit",
    shortDesc:
      "Get a comprehensive audit of your current local SEO health — uncovering ranking gaps, citation errors, and quick wins.",
    keywords: [
      "local seo audit",
      "local seo analysis",
      "seo audit near me",
      "google local seo audit",
      "local seo health check",
      "local search audit",
    ],
    longDesc:
      "Before any optimization begins, you need to know exactly where you stand. Our local SEO audit is a deep-dive analysis of every factor that influences your local rankings: Google Business Profile completeness, citation consistency, on-page optimization, local link profile, competitor gap analysis, technical site health, and Google Maps presence. You receive a prioritized action plan with clear next steps. Whether you're starting from scratch or troubleshooting a ranking drop, a local SEO audit gives you the intelligence to make data-driven decisions and stop wasting budget on tactics that don't move the needle.",
    process: [
      { step: "Data Collection", desc: "We pull data from Google Search Console, GMB Insights, and 20+ local ranking tools." },
      { step: "Competitor Benchmarking", desc: "We map the top 5 local competitors and identify exactly why they outrank you." },
      { step: "Report Generation", desc: "You receive a fully annotated PDF report with severity scores and effort estimates." },
      { step: "Strategy Call", desc: "We walk you through every finding and build a 90-day prioritized action plan together." },
    ],
  },
  {
    title: "Local Link Building",
    slug: "local-link-building",
    shortDesc:
      "Build high-authority local backlinks that signal trust to Google and push you into the Local Pack.",
    keywords: [
      "local link building",
      "local seo backlinks",
      "local citations",
      "local link building service",
      "local seo link building",
      "niche local backlinks",
    ],
    longDesc:
      "Links from locally relevant, high-authority sites are among the strongest ranking signals for local SEO. Our local link building service targets the sites that matter most in your market: local news outlets, chamber of commerce directories, niche industry associations, community sponsorships, and local business partnerships. We use white-hat outreach techniques to earn genuine editorial links — not spammy directory submissions. Every link we build passes relevance and authority checks. Our local link building campaigns typically deliver 15–40 qualified local backlinks per month, accelerating your climb into the Google 3-Pack and driving referral traffic from audiences already searching in your city.",
    process: [
      { step: "Link Gap Analysis", desc: "We identify which links your top-ranking competitors have that you don't." },
      { step: "Prospect Research", desc: "We build a curated list of locally relevant, high-DA sites to target." },
      { step: "Outreach Campaigns", desc: "Our team sends personalized outreach emails and follows up systematically." },
      { step: "Reporting", desc: "You receive a monthly link report with DA, anchor text, and traffic estimates." },
    ],
  },
  {
    title: "Google Maps SEO",
    slug: "google-maps-seo",
    shortDesc:
      "Rank higher on Google Maps and dominate the Local Pack with our proven maps optimization strategies.",
    keywords: [
      "google maps seo",
      "google maps optimization",
      "rank higher on google maps",
      "google local pack ranking",
      "local pack seo",
      "google 3 pack",
    ],
    longDesc:
      "Appearing in the Google Maps 3-Pack can triple your inbound calls overnight. The Local Pack appears above organic results and captures over 44% of all local search clicks. Our Google Maps SEO service targets every ranking signal that Google's local algorithm evaluates: proximity optimization, relevance signals, prominence factors, review velocity and sentiment, citation volume and consistency, and behavioral signals like click-through rate and direction requests. We also optimize your map embed on your website and implement location-specific structured data. Our clients regularly see their Google Maps rankings improve within 30–60 days using our proven local pack SEO methodology.",
    process: [
      { step: "Maps Ranking Audit", desc: "We benchmark your current 3-Pack positions for all target keywords." },
      { step: "Signal Optimization", desc: "We optimize all prominence, relevance, and proximity signals simultaneously." },
      { step: "Review Strategy", desc: "We deploy a systematic review generation campaign to boost your rating and velocity." },
      { step: "Rank Tracking", desc: "We track your Maps rankings daily and adjust strategy based on movement." },
    ],
  },
  {
    title: "Local SEO for Small Business",
    slug: "local-seo-for-small-business",
    shortDesc:
      "Affordable local SEO packages built specifically for small businesses that need big results on a smart budget.",
    keywords: [
      "local seo for small business",
      "small business local seo",
      "affordable local seo",
      "local seo packages small business",
      "seo for small business owners",
      "local seo on a budget",
    ],
    longDesc:
      "Small businesses often assume SEO is only for big brands with big budgets — that simply isn't true. Local SEO levels the playing field, letting a family-owned plumbing company outrank a national chain in their own backyard. Our small business local SEO packages are designed around your actual budget, with flexible month-to-month plans starting at $299/month. We focus on the highest-impact activities first: Google Business Profile, local citations, on-page optimization, and review building. You get the same strategic thinking we bring to enterprise clients, packaged in an approachable, transparent process. Most of our small business clients see measurable ranking improvements within 60 days.",
    process: [
      { step: "Business Discovery", desc: "We learn your services, service area, and competitive landscape in depth." },
      { step: "Quick Win Audit", desc: "We identify the 5 highest-impact improvements you can make this month." },
      { step: "Core Optimization", desc: "We optimize your GMB, website, and top citations for maximum local visibility." },
      { step: "Monthly Growth", desc: "Each month we add links, content, and citations to compound your rankings." },
    ],
  },
  {
    title: "Local SEO for Contractors",
    slug: "local-seo-for-contractors",
    shortDesc:
      "Dominate local search for contractor keywords and fill your project pipeline with high-value local leads.",
    keywords: [
      "local seo for contractors",
      "contractor seo",
      "local seo contractor services",
      "construction company seo",
      "contractor google maps ranking",
      "local seo for construction",
    ],
    longDesc:
      "Contractors live and die by their local reputation and visibility. When a homeowner searches for a roofing contractor, HVAC company, or electrician near them, they click one of the first three results. Our contractor local SEO service is built around the unique needs of service-area businesses: geo-targeted landing pages for every city you serve, service-specific keyword optimization, contractor directory citations, before-and-after project gallery optimization, and a review system that keeps your Google rating above 4.8 stars. We understand the contractor industry, the seasonal keyword patterns, and the trust signals that convert searchers into booked jobs.",
    process: [
      { step: "Service Area Mapping", desc: "We map every city and neighborhood you serve and target them individually." },
      { step: "Landing Page Creation", desc: "We build optimized city + service landing pages for your top offerings." },
      { step: "Directory Citations", desc: "We list you in contractor-specific directories: Houzz, Angi, HomeAdvisor, and 40+ more." },
      { step: "Lead Tracking", desc: "We set up call tracking and conversion goals to prove your SEO ROI." },
    ],
  },
  {
    title: "Local SEO for Plumbers",
    slug: "local-seo-for-plumbers",
    shortDesc:
      "Get more emergency calls and booked jobs with plumber-specific local SEO that puts you at the top of Google Maps.",
    keywords: [
      "local seo for plumbers",
      "plumber seo",
      "plumbing company local seo",
      "seo for plumbing businesses",
      "plumber google maps ranking",
      "plumber near me seo",
    ],
    longDesc:
      "Plumbing emergencies happen 24/7 and customers need a plumber fast — they call whoever appears first on Google Maps. Our plumber local SEO service is laser-focused on getting you into that first position. We optimize your Google Business Profile with plumbing-specific categories, services, and photos. We build emergency plumbing keyword clusters for searches like 'plumber near me', 'emergency plumber [city]', and '24 hour plumber'. We build plumber-specific citations on directories like Angi, Thumbtack, and the Better Business Bureau. Our review strategy helps you accumulate consistent 5-star reviews that build trust with new customers and signal quality to Google's ranking algorithm.",
    process: [
      { step: "Keyword Research", desc: "We identify every plumbing keyword your ideal customers search for in your city." },
      { step: "GMB Optimization", desc: "We fully optimize your profile with plumbing categories, services, and photos." },
      { step: "On-Page SEO", desc: "We optimize your website for location + service keyword combinations." },
      { step: "Review Generation", desc: "We deploy SMS and email review request campaigns to every completed job." },
    ],
  },
  {
    title: "Local SEO for Dentists",
    slug: "local-seo-for-dentists",
    shortDesc:
      "Attract new dental patients from local search with dentist-specific SEO that builds trust and drives appointments.",
    keywords: [
      "local seo for dentists",
      "dental seo",
      "dentist local seo",
      "seo for dental practices",
      "dentist google maps ranking",
      "dental practice seo",
    ],
    longDesc:
      "Most people choose a dentist based on proximity, reviews, and how professional their online presence looks. Our dental local SEO service addresses all three. We optimize your Google Business Profile with dental-specific categories, appointment booking links, and photo galleries. We build your citations across health-specific directories: Healthgrades, Zocdoc, Vitals, and WebMD. Our on-page SEO targets high-value procedures — cosmetic dentistry, dental implants, Invisalign, teeth whitening — combined with your city name. We help you generate consistent, high-quality reviews that establish trust before a patient ever walks through your door. The result is a steady stream of new patient inquiries from qualified local searchers.",
    process: [
      { step: "Practice Audit", desc: "We audit your online presence against your top 5 competitor dental practices." },
      { step: "Profile Optimization", desc: "We optimize GMB with dental categories, photos, services, and booking links." },
      { step: "Health Directory Citations", desc: "We list your practice on every major health directory and dental review site." },
      { step: "Patient Review Strategy", desc: "We implement a post-appointment review request system to build your reputation." },
    ],
  },
  {
    title: "Local SEO for Restaurants",
    slug: "local-seo-for-restaurants",
    shortDesc:
      "Fill more tables with restaurant local SEO that puts you in front of hungry customers searching nearby.",
    keywords: [
      "local seo for restaurants",
      "restaurant seo",
      "restaurant local seo",
      "seo for restaurants",
      "restaurant google maps ranking",
      "restaurant near me seo",
    ],
    longDesc:
      "Over 60% of restaurant discoveries happen online, and the Google Local Pack is where most of them start. Our restaurant local SEO service is built around the behaviors of hungry diners: people searching 'restaurants near me', 'best Italian restaurant [city]', or 'outdoor dining [neighborhood]'. We optimize your Google Business Profile with menu integration, reservation links, hours, photos, and cuisine categories. We build citations on DoorDash, Yelp, TripAdvisor, OpenTable, and Zomato. We help you develop a review strategy that keeps your rating above 4.5 stars. We also optimize your website for neighborhood-specific keywords, holiday dining searches, and voice search queries that align with how local customers actually search.",
    process: [
      { step: "Cuisine Keyword Research", desc: "We identify every dish, cuisine type, and dining experience keyword in your market." },
      { step: "GMB Optimization", desc: "We optimize your profile with menu, photos, reservation links, and cuisine categories." },
      { step: "Food Directory Citations", desc: "We build your presence on Yelp, TripAdvisor, OpenTable, DoorDash, and more." },
      { step: "Review Management", desc: "We monitor, respond to, and generate reviews across all major food platforms." },
    ],
  },
  {
    title: "Local SEO for HVAC",
    slug: "local-seo-for-hvac",
    shortDesc:
      "Generate more HVAC service calls year-round with local SEO that targets both emergency and seasonal searches.",
    keywords: [
      "local seo for hvac",
      "hvac seo",
      "hvac company local seo",
      "seo for hvac businesses",
      "hvac google maps ranking",
      "hvac contractor seo",
    ],
    longDesc:
      "HVAC companies face intense local competition and highly seasonal demand. When a homeowner's AC goes out in July or their furnace fails in December, they search for help immediately. Our HVAC local SEO service ensures you appear at the top of those urgent, high-value searches. We build seasonal keyword campaigns targeting heating and cooling searches year-round. We optimize your GMB with HVAC service categories, equipment photos, and response time highlights. We build HVAC-specific citations on directories that homeowners trust. We also create optimized landing pages for every service you offer — furnace repair, AC installation, heat pump maintenance, ductwork — combined with every city in your service area. The result is year-round lead flow that doesn't depend on referrals or slow seasons.",
    process: [
      { step: "Seasonal Keyword Mapping", desc: "We build heating and cooling keyword clusters for every season." },
      { step: "Service Area Pages", desc: "We create optimized landing pages for every service in every city you cover." },
      { step: "GMB & Citations", desc: "We optimize your GMB and build citations on HVAC and home service directories." },
      { step: "Performance Tracking", desc: "We track calls, rankings, and conversions with monthly ROI reporting." },
    ],
  },
  {
    title: "White Label Local SEO",
    slug: "white-label-local-seo",
    shortDesc:
      "Scalable white label local SEO services for agencies — deliver expert results to your clients under your brand.",
    keywords: [
      "white label local seo",
      "white label seo services",
      "reseller local seo",
      "white label seo agency",
      "white label gmb optimization",
      "outsource local seo",
    ],
    longDesc:
      "Are you a marketing agency, web design firm, or consultant looking to offer local SEO without building an in-house team? Our white label local SEO program is designed exactly for you. We become your behind-the-scenes local SEO department, executing full campaigns under your brand. You set the client relationship and pricing; we do the work. Our white label program includes GMB optimization, local citation building, on-page SEO, link building, monthly reporting, and strategy consultation — all delivered with your agency's logo and branding. We currently power local SEO results for over 30 white label agency partners across the US. Our dedicated account managers act as an extension of your team, responding to your questions within 4 business hours.",
    process: [
      { step: "Partner Onboarding", desc: "We integrate with your project management workflow and set reporting templates." },
      { step: "Client Intake", desc: "You send us client details; we build a custom 90-day strategy for each account." },
      { step: "Campaign Execution", desc: "We execute all tasks — GMB, citations, links, content — on your timeline." },
      { step: "White Label Reporting", desc: "You receive brandable PDF reports every month to share directly with clients." },
    ],
  },
  {
    title: "Local SEO Reporting",
    slug: "local-seo-reporting",
    shortDesc:
      "Clear, actionable local SEO reports that show exactly how your rankings, traffic, and calls are improving.",
    keywords: [
      "local seo reporting",
      "local seo analytics",
      "local seo rank tracking",
      "local seo performance report",
      "google maps rank tracker",
      "local seo roi reporting",
    ],
    longDesc:
      "One of the biggest frustrations business owners have with SEO agencies is the lack of clear, meaningful reporting. You deserve to know exactly what's happening with your investment. Our local SEO reporting service provides transparent, easy-to-understand monthly reports that cover: keyword ranking changes (tracked at a local level, not just national), Google Business Profile performance (views, calls, direction requests, website clicks), local citation health, backlink profile growth, website traffic from local search, and conversion metrics. Every report includes a plain-English executive summary and a prioritized list of actions for the next month. You'll always know exactly where you stand and what we're doing about it.",
    process: [
      { step: "Tracking Setup", desc: "We configure rank tracking, GMB Insights, Search Console, and call tracking." },
      { step: "Baseline Report", desc: "We document your starting positions across all target keywords and metrics." },
      { step: "Monthly Reporting", desc: "You receive a formatted report by the 5th of every month covering the prior month." },
      { step: "Strategy Review", desc: "Quarterly we hold a strategy review call to adjust priorities based on data." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
