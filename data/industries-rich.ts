export interface IndustryRichData {
  tagline: string;
  description: string;
  keyFacts: Array<{ value: string; label: string }>;
  topServices: Array<{ icon: string; title: string; desc: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const industriesRich: Record<string, IndustryRichData> = {
  plumbers: {
    tagline:
      "Rank at the top of Google when homeowners need an emergency plumber — and keep a full diary of booked jobs.",
    description:
      "UK homeowners searching for a plumber are under pressure — a burst pipe, blocked drain, or failing boiler means they need someone now. They scan Google Maps, read the first three to five reviews, and call within minutes. Local SEO for plumbers secures your position in the Google Maps 3-pack and page-1 organic results before a competitor takes the call.\n\nPlumbing is among the most competitive local search verticals in the UK. Major cities typically have 40–80 Google Business Profile listings competing for the same searches. Ranking in the top 3 requires category-precise GBP optimisation, trade directory citations (Checkatrade, Gas Safe Register, TrustATrader), and a review velocity of 3–5 new reviews per month to maintain competitive standing.",
    keyFacts: [
      { value: "72%", label: "of emergency plumber searches lead to a call within 1 hour" },
      { value: "Top 3", label: "GMB positions capture 68% of all local plumbing clicks" },
      { value: "£180–£400", label: "average plumber job value in the UK" },
      { value: "30–60 days", label: "typical time to first ranking movement" },
    ],
    topServices: [
      {
        icon: "🚨",
        title: "Emergency Callout Ranking",
        desc: "Target 'emergency plumber near me' and '24-hour plumber [city]' with GBP attributes and dedicated landing pages that convert stressed homeowners into confirmed bookings.",
      },
      {
        icon: "📍",
        title: "Google Maps 3-Pack Optimisation",
        desc: "Full Google Business Profile build, category optimisation, and service area configuration to place your business in the top 3 Maps positions for your target postcodes.",
      },
      {
        icon: "📋",
        title: "Trade Directory Citations",
        desc: "Consistent NAP listings across Checkatrade, Gas Safe Register, TrustATrader, and Rated People — the citation sources Google uses to verify UK plumbing businesses.",
      },
      {
        icon: "⭐",
        title: "Review Generation",
        desc: "Automated review request system that collects 4–8 new Google reviews per month, building the trust profile that converts ranked positions into calls.",
      },
    ],
    faqs: [
      {
        question: "How do I get my plumbing business to rank on Google?",
        answer:
          "Ranking your plumbing business requires three actions: fully optimising your Google Business Profile with the correct primary category ('Plumber'), building consistent citations on trade directories like Checkatrade and TrustATrader, and generating a steady flow of 4–5 star reviews. Most plumbing businesses see first ranking movement within 4–8 weeks of starting these activities.",
      },
      {
        question: "How much does local SEO for plumbers cost in the UK?",
        answer:
          "Local SEO for plumbers in the UK costs £199–£599 per month depending on the competitiveness of your area and how many services you want to rank for. An independent plumber competing in a single town will pay less than a multi-van firm targeting an entire county. Our Growth plan at £349/month covers full local SEO and reputation management for most plumbing businesses.",
      },
      {
        question: "Can I rank in the Google Maps 3-pack for emergency plumber searches?",
        answer:
          "Yes. Emergency plumber searches ('emergency plumber near me', 'emergency plumber [city]') are high-frequency and high-intent. Ranking in the Maps 3-pack for these queries requires an optimised GBP with emergency and 24-hour service attributes, a strong review profile of 20+ reviews, and local landing pages targeting emergency plumbing services.",
      },
      {
        question: "How many Google reviews does a plumber need to rank?",
        answer:
          "UK plumbing businesses in competitive cities typically need 25–50 Google reviews with an average rating of 4.5 or above to compete for top 3 Maps positions. Review velocity — how many new reviews you earn per month — matters as much as the total count. Google favours active trust signals over a large but static historical review count.",
      },
      {
        question: "Does Gas Safe registration help with local SEO?",
        answer:
          "Gas Safe registration is not a direct ranking factor, but it significantly improves conversion rates from ranked positions. We display your Gas Safe registration number on your GBP, website, and citation profiles, which increases click-through and call rates because homeowners specifically search for Gas Safe engineers for boiler and gas work.",
      },
    ],
  },

  electricians: {
    tagline:
      "Get more domestic and commercial electrical jobs by ranking at the top of Google when local customers need a qualified electrician.",
    description:
      "Electricians operate in a high-trust, qualification-sensitive market. Customers searching 'electrician near me' or 'NICEIC electrician [city]' are willing to pay more for a credentialed, well-reviewed provider — but only if they can find one. Local SEO for electricians makes your qualifications visible in search (Part P certification, NICEIC, NAPIT membership) and positions your business before customers settle for an uncertified alternative.\n\nElectrical work spans emergency callouts (fuse box trips, total power loss), planned work (consumer unit upgrades, EV charger installation, rewires), and commercial contracts. Each service type has a distinct search pattern. We target the full range — from high-urgency 'emergency electrician near me' to high-value 'full rewire [city]' — and build your citation profile across NICEIC, NAPIT, Checkatrade, and local business directories.",
    keyFacts: [
      { value: "EV charging", label: "is the fastest-growing electrical search term in the UK (2024)" },
      { value: "£150–£600", label: "average electrical job value" },
      { value: "+15% CTR", label: "typical uplift from displaying NICEIC/NAPIT on GBP" },
      { value: "45–90 days", label: "typical timeline to strong Maps 3-pack positions" },
    ],
    topServices: [
      {
        icon: "⚡",
        title: "NICEIC & NAPIT Trust Signal SEO",
        desc: "Display your certifications prominently across GBP, website, and citations to increase click-through rates and convert more ranking impressions into calls.",
      },
      {
        icon: "🚨",
        title: "Emergency Electrician Targeting",
        desc: "Dedicated optimisation for 'emergency electrician near me' and '24-hour electrician [city]' — the highest-urgency searches that convert to immediate calls.",
      },
      {
        icon: "🔌",
        title: "EV Charger Installation SEO",
        desc: "Dedicated landing pages targeting 'EV charger installation [city]' and 'home EV charging point [city]' — the fastest-growing, highest-margin electrical service.",
      },
      {
        icon: "📋",
        title: "Electrical Trade Citations",
        desc: "Consistent listings across NICEIC approved directory, NAPIT register, Checkatrade, and TrustATrader to build the citation profile Google uses to rank electricians.",
      },
    ],
    faqs: [
      {
        question: "How can electricians get more Google reviews?",
        answer:
          "The most effective method is to send a direct Google review link by text message immediately after completing a job. Customers are most satisfied in the first 24 hours after a successful electrical job. We set up automated follow-up sequences that request reviews at the optimal moment without being intrusive, typically generating 4–8 new reviews per month.",
      },
      {
        question: "What Google Business Profile category should an electrician use?",
        answer:
          "The primary category should be 'Electrician'. Additional secondary categories can include 'Electrical installation service', 'Emergency electrician service', and 'Lighting contractor' depending on your service mix. Using the most specific relevant categories improves Google's ability to match your listing to relevant local searches.",
      },
      {
        question: "Does NICEIC or NAPIT certification help with local SEO?",
        answer:
          "Certification does not directly affect search rankings, but it significantly improves conversion rates from ranked positions. We incorporate your NICEIC or NAPIT badge on your Google Business Profile, website, and citation listings. Customers specifically filter for accredited electricians, so displaying your certification is one of the highest-impact conversion improvements available.",
      },
      {
        question: "How competitive is local SEO for electricians in UK cities?",
        answer:
          "Competition varies significantly. London, Manchester, and Birmingham are highly competitive, with 60–100 active GMB listings in some postcodes. Market towns and smaller cities with populations under 100,000 typically have 15–30 competitors, making page-1 rankings achievable within 60–90 days of starting a focused local SEO campaign.",
      },
      {
        question: "Can I rank for commercial electrical contracts through local SEO?",
        answer:
          "Yes. Commercial electrical keywords ('commercial electrician [city]', 'office rewire contractor [city]') have lower competition than domestic terms and significantly higher job values. We build dedicated landing pages for commercial electrical services with location-specific content targeting these high-value queries — typically ranking within 60–90 days.",
      },
    ],
  },

  dentists: {
    tagline:
      "Attract more private patients and NHS registrations by ranking at the top of Google when local patients search for a dentist.",
    description:
      "Dental search behaviour differs from emergency trades: patients are not in immediate crisis, but they are deciding who to trust with their oral health — and they research thoroughly. A patient searching 'private dentist [city]' will compare three to five practices, check Google reviews in detail, scan the website for pricing, and look for GDC registration and patient testimonials. Local SEO for dentists ensures your practice dominates this consideration window.\n\nNHS versus private positioning requires distinct keyword strategies. 'NHS dentist accepting new patients [city]' and 'private dentist [city] prices' are different queries with different intent and different patient values. We build strategies that address both — NHS patient acquisition where needed, and private treatment marketing (Invisalign, implants, whitening) where margins are strongest.",
    keyFacts: [
      { value: "87%", label: "of dental patients read online reviews before booking" },
      { value: "£3.9bn", label: "UK private dental market value (2024)" },
      { value: "£3k–£6k", label: "average Invisalign and implant treatment value" },
      { value: "45–120 days", label: "typical timeline to strong Maps 3-pack positions" },
    ],
    topServices: [
      {
        icon: "🦷",
        title: "NHS vs Private Patient Strategy",
        desc: "Separate keyword tracks for NHS registration searches and high-value private treatment searches — Invisalign, implants, and whitening — each with its own landing page and intent-matched content.",
      },
      {
        icon: "📍",
        title: "Dental Google Business Profile",
        desc: "Full GBP build for dental practices: correct service categories, NHS/private status attributes, photo optimisation, and Q&A management to capture local patient searches.",
      },
      {
        icon: "💳",
        title: "Treatment Landing Pages",
        desc: "Dedicated pages for Invisalign, dental implants, and teeth whitening with local SEO, pricing ranges, and FAQSchema markup for featured snippet and AIO visibility.",
      },
      {
        icon: "⭐",
        title: "Patient Review Generation",
        desc: "GDC-compliant review request process that consistently generates 4–8 new reviews per month, building the 50-review trust profile that converts dental searches into bookings.",
      },
    ],
    faqs: [
      {
        question: "How do I get my dental practice to the top of Google?",
        answer:
          "Ranking your dental practice requires an optimised Google Business Profile with accurate service categories, consistent citations across healthcare directories (NHS website, Dentist Finder, Yell), a structured on-page SEO strategy targeting your key treatments, and an active patient review generation process targeting a 4.5-star average or above.",
      },
      {
        question: "Can I rank for both NHS and private dental searches?",
        answer:
          "Yes, but the strategies are distinct. NHS registrations require different landing pages and keyword targeting from private treatment searches. We build both tracks — targeting 'NHS dentist accepting patients [city]' for new patient acquisition and specific treatment pages ('dental implants [city]', 'Invisalign [city]') for high-value private conversions.",
      },
      {
        question: "How important are Google reviews for a dental practice?",
        answer:
          "Google reviews are critical for dental practices. Research shows 87% of patients read reviews before booking. Practices with 50 or more reviews and a 4.5-star rating convert significantly more profile visitors into bookings than practices with fewer reviews. We implement a compliant patient review request process that follows GDC advertising guidance.",
      },
      {
        question: "Does GDC registration affect local SEO?",
        answer:
          "GDC registration does not directly affect rankings, but displaying it prominently on your website and Google Business Profile increases trust and conversion rates. We incorporate GDC registration numbers, NHS registration status, and professional memberships in all listings and on-page content to maximise the value of your credentials in search results.",
      },
      {
        question: "What is the best way to rank for Invisalign in my city?",
        answer:
          "Ranking for 'Invisalign [city]' requires a dedicated treatment page with the target keyword in the H1 and URL, clinic-specific pricing or a pricing range, before-and-after case studies with patient consent, a FAQ section, and FAQPage schema markup. We also build a citation on Invisalign's provider directory, which provides a high-authority backlink from the brand's official site.",
      },
    ],
  },

  solicitors: {
    tagline:
      "Get more enquiries from people searching for legal help locally — ranked by practice area and location to capture high-intent, high-value clients.",
    description:
      "Legal searches are high-stakes and high-value. Someone searching 'divorce solicitor [city]' or 'conveyancing solicitor near me' is about to spend £1,000–£20,000 on legal services. They are not searching casually — they have an immediate need, they are comparing providers carefully, and the firm that ranks highest with strong reviews and clear service descriptions wins the instruction.\n\nSolicitor SEO requires practice-area precision. 'Family law solicitor [city]', 'employment law advice [city]', and 'personal injury no win no fee [city]' are entirely different queries with different competitive landscapes and different client values. We build dedicated landing pages per practice area, each with local search intent matched to your specific specialisms — not generic 'solicitors [city]' pages that dilute your relevance across all practice areas.",
    keyFacts: [
      { value: "£1.5k–£15k", label: "average client value depending on practice area" },
      { value: "Conveyancing", label: "highest search volume of all UK legal services" },
      { value: "'No win no fee'", label: "one of the highest-CPC legal search terms in the UK" },
      { value: "60–120 days", label: "typical timeline to first-page rankings for solicitors" },
    ],
    topServices: [
      {
        icon: "⚖️",
        title: "Practice Area Landing Pages",
        desc: "Dedicated pages per practice area — conveyancing, family law, employment law, personal injury — each optimised for that specific query type and client intent.",
      },
      {
        icon: "📍",
        title: "Local Maps 3-Pack for Solicitors",
        desc: "Google Business Profile optimisation for law firms, including correct legal service categories, review management, and the local signals Google uses to rank solicitor practices.",
      },
      {
        icon: "📋",
        title: "Legal Directory Citations",
        desc: "Citations on Law Society Find a Solicitor, Solicitors Guru, and key legal directories — the authoritative sources Google uses to verify and rank UK solicitor firms.",
      },
      {
        icon: "⭐",
        title: "SRA-Compliant Review Strategy",
        desc: "Review generation within SRA advertising rules — genuine client testimonials collected at the right moment in the matter lifecycle to build a 4.5-star profile.",
      },
    ],
    faqs: [
      {
        question: "How do I get my solicitor firm on the first page of Google?",
        answer:
          "First-page rankings for solicitor searches require an optimised Google Business Profile with correct legal service categories, dedicated landing pages for each practice area you offer, consistent citation listings on legal directories (Law Society, Solicitors Guru), and a structured review generation process targeting 4.5 stars or above.",
      },
      {
        question: "Can I rank for multiple practice areas in the same city?",
        answer:
          "Yes, but each practice area needs its own dedicated page. A single page targeting 'solicitors [city]' underperforms compared to separate pages for 'conveyancing solicitor [city]', 'family law solicitor [city]', and 'employment solicitor [city]'. We map your practice areas to dedicated pages with unique local content targeting each specific query.",
      },
      {
        question: "How do law firm advertising rules affect local SEO content?",
        answer:
          "SRA advertising rules require that all marketing is accurate, not misleading, and does not make claims about outcomes. These rules affect how we write service descriptions, testimonials, and pricing information. We ensure all local SEO content for solicitor clients complies with SRA Code of Conduct standards throughout.",
      },
      {
        question: "Is it worth ranking for 'no win no fee' searches?",
        answer:
          "'No win no fee' searches have very high intent but also very high competition. Organic local rankings for 'no win no fee [practice area] [city]' are achievable and highly valuable. They require a dedicated page with a clear explanation of the CFA arrangement, specific practice area content, and strong local signals. Return on investment is typically strong given the high case values involved.",
      },
      {
        question: "How can solicitors get Google reviews ethically?",
        answer:
          "Solicitors must follow SRA guidance — testimonials must be genuine, not cherry-picked, and must not imply outcomes. The safest approach is to invite all recent clients to leave a Google review after matter completion. We set up email-based review requests with SRA-compliant language that maximises response rates without breaching professional rules.",
      },
    ],
  },

  "estate-agents": {
    tagline:
      "Dominate local property searches and attract more vendor instructions and buyer enquiries by ranking at the top of Google for your area.",
    description:
      "Estate agents live and die by geographic coverage. A buyer or seller in your area will not instruct an agent they found on page 3 — they will choose from the top 3 results in Google Maps and the first few organic results. Local SEO for estate agents targets both vendor acquisition ('sell my house [city]', 'property valuation [city]') and buyer search traffic to drive both sides of the market.\n\nProperty search has migrated heavily to Rightmove and Zoopla for active listings, but local agency SEO remains critical for vendor instruction acquisition — the instructions that generate fee income. We build local SEO strategies that position your brand as the dominant local agency through Google Business Profile optimisation, property market content, and a review profile that proves client satisfaction to prospective vendors.",
    keyFacts: [
      { value: "75%", label: "of UK home sellers research estate agents on Google before instructing" },
      { value: "1.2–2.5%", label: "average UK estate agent commission + VAT" },
      { value: "Vendor instructions", label: "the primary revenue driver — not buyer registrations" },
      { value: "45–90 days", label: "typical timeline to strong Google Maps 3-pack positions" },
    ],
    topServices: [
      {
        icon: "🏠",
        title: "Vendor Acquisition SEO",
        desc: "Target 'estate agent [city]', 'sell my house [city]', and 'free property valuation [city]' — the searches that indicate someone about to instruct an agent and generate fee income.",
      },
      {
        icon: "📍",
        title: "Google Business Profile for Agents",
        desc: "Full GBP optimisation with correct real estate categories, service area settings, photo management, and the review profile that converts vendor searches into valuation requests.",
      },
      {
        icon: "📝",
        title: "Local Property Market Content",
        desc: "Regularly updated content about your local property market — average prices, demand trends, recent sales — that builds topical authority and attracts vendor acquisition searches.",
      },
      {
        icon: "⭐",
        title: "Client Review Generation",
        desc: "Structured review collection at exchange — the point of maximum client satisfaction — generating the 30+ reviews that differentiate your agency from competitors in search results.",
      },
    ],
    faqs: [
      {
        question: "What keywords should estate agents target for local SEO?",
        answer:
          "The most valuable keywords split into two groups: vendor acquisition ('estate agent [city]', 'sell my house [city]', 'property valuation [city]') and buyer traffic ('houses for sale [city]', 'flats to rent [city]'). Vendor acquisition keywords have lower search volume but generate the instructions that drive fee income, so we prioritise those first.",
      },
      {
        question: "How does local SEO for estate agents differ from portal advertising?",
        answer:
          "Rightmove and Zoopla are buyer-facing platforms driven by active property listings. Google local SEO targets vendor acquisition and brand awareness — people searching for which estate agent to use in their area. These searches indicate someone about to instruct an agent, making them higher-value than portal impressions for revenue generation.",
      },
      {
        question: "Can I rank in the top 3 on Google Maps as an independent estate agent?",
        answer:
          "Yes. Google Maps rankings are determined by proximity, relevance, and prominence — not business size. An independent agent with 50 or more positive reviews, an optimised GBP, and consistent local citations can outrank a national chain with weaker local signals. We have achieved top-3 Maps positions for independent agents competing against major UK chains.",
      },
      {
        question: "How important are online reviews for estate agents?",
        answer:
          "Reviews are critical. 75% of home sellers research estate agents online before making contact. An agent with 30 or more 4.8-star reviews will generate significantly more valuation requests from a ranked position than one with 10 reviews at a 4.2-star average. We build review systems that request feedback at exchange — when clients are most satisfied — not at the final completion.",
      },
      {
        question: "What is the best local SEO strategy for a new estate agency?",
        answer:
          "New agencies should prioritise: a fully optimised Google Business Profile from day one, consistent NAP citations on property industry directories (allAgents, Trustpilot), a Google-indexed website with dedicated pages per area and property type, and an early review generation push targeting the first 20 reviews as quickly as possible. These foundations drive the first ranking movements within 45–60 days.",
      },
    ],
  },

  cleaners: {
    tagline:
      "Get a fully booked cleaning round by ranking at the top of Google when local homeowners and businesses search for a trusted cleaner.",
    description:
      "Cleaning services win on trust and convenience. A homeowner searching 'house cleaner near me' or 'cleaning company [city]' wants someone reliable, vetted, and with verifiable reviews — not the cheapest option. Local SEO for cleaners builds the visibility, review profile, and trust signals that convert searchers into regular weekly or fortnightly customers worth £1,500–£3,000 per year each.\n\nCleaning SEO covers distinct verticals with different search patterns: domestic cleaning ('house cleaner [city]', 'weekly cleaner near me'), end-of-tenancy cleaning (high-value, one-off, urgent), commercial and office cleaning (B2B, contract-based), and specialist services (carpet cleaning, oven cleaning). Each service type requires its own landing page and keyword strategy to rank effectively without diluting relevance across all cleaning categories.",
    keyFacts: [
      { value: "£200–£400", label: "average end-of-tenancy cleaning job value — highest in the sector" },
      { value: "£1,500–£3k/yr", label: "lifetime value of a weekly domestic cleaning client" },
      { value: "+20% conversions", label: "typical uplift from displaying DBS check on GBP" },
      { value: "30–60 days", label: "typical time to first Maps 3-pack ranking for cleaners" },
    ],
    topServices: [
      {
        icon: "🏠",
        title: "Domestic Cleaning SEO",
        desc: "Target 'house cleaner [city]', 'regular cleaner near me', and 'domestic cleaning service [city]' to build a consistent pipeline of new weekly and fortnightly clients.",
      },
      {
        icon: "🔑",
        title: "End-of-Tenancy Landing Page",
        desc: "Dedicated page targeting 'end of tenancy cleaning [city]' — a high-value, urgent search with clear scope and defined price point that converts at high rates.",
      },
      {
        icon: "🏢",
        title: "Commercial Cleaning Strategy",
        desc: "B2B keyword targeting for 'office cleaning [city]' and 'commercial cleaning contractors [city]' — lower search volume but higher contract values and longer client retention.",
      },
      {
        icon: "⭐",
        title: "DBS & Trust Signal Integration",
        desc: "DBS check, public liability insurance, and industry accreditations displayed across GBP, website, and citations to increase conversion rates from ranked positions.",
      },
    ],
    faqs: [
      {
        question: "How do I get my cleaning business to rank on Google?",
        answer:
          "Ranking your cleaning business starts with a fully optimised Google Business Profile (primary category: 'House cleaning service' or 'Commercial cleaning service'), consistent citations on directories like TrustATrader, Bark.com, and Checkatrade, and 20 or more Google reviews. Dedicated landing pages for each cleaning type you offer — domestic, end-of-tenancy, office — accelerate rankings significantly.",
      },
      {
        question: "Should I target domestic or commercial cleaning keywords?",
        answer:
          "Target both, but with separate pages. Domestic cleaning keywords have higher search volume. Commercial cleaning keywords have lower volume but higher contract values and longer average client retention. We build both tracks into your local SEO strategy, prioritising the type that matches your current capacity and growth goals.",
      },
      {
        question: "How does displaying a DBS check affect my cleaning business online?",
        answer:
          "Displaying DBS clearance on your Google Business Profile, website, and citation listings significantly increases trust and conversion rates. Homeowners inviting a cleaner into their home prioritise safety above all other factors. We ensure your DBS certificate, public liability insurance, and any cleaning industry accreditations are visible across all online profiles.",
      },
      {
        question: "Is end-of-tenancy cleaning worth targeting specifically?",
        answer:
          "End-of-tenancy cleaning is highly valuable because it has a fixed, urgent timeline, a defined scope (whole property), and a defined average value of £200–£400 per job. It has lower ongoing competition than regular domestic cleaning. A dedicated end-of-tenancy cleaning landing page with local service area content typically ranks within 45–60 days and converts at high rates due to the urgency of the search.",
      },
      {
        question: "How many reviews does a cleaning business need to rank in Google Maps?",
        answer:
          "UK cleaning businesses in most areas need 20–40 Google reviews with a 4.5-star average or above to rank in the Maps 3-pack. Review velocity — new reviews per month — matters as much as the total. Google favours active, current trust signals over a large historical review count. We build automated review request systems that generate 4–8 new reviews per month consistently.",
      },
    ],
  },

  builders: {
    tagline:
      "Win more construction projects and renovation enquiries by ranking at the top of Google when local homeowners look for a trusted local builder.",
    description:
      "Builders are hired on trust, portfolio, and local reputation. A homeowner searching 'builder near me' or 'local builder [city]' for a kitchen extension or loft conversion will research thoroughly — they are committing £25,000–£80,000 and cannot afford to get it wrong. Local SEO for builders ensures your portfolio, reviews, and credentials are the first thing those homeowners see when they search.\n\nBuilding SEO spans multiple distinct project types: extensions (rear, side return, two-storey), loft conversions, kitchen and bathroom refits, new builds, and commercial fit-outs. Each has a different search pattern and different average project value. We create dedicated landing pages per project type, so you rank for the specific projects that match your skills and margins — not just generic 'builder [city]' searches.",
    keyFacts: [
      { value: "£25k–£80k", label: "average rear extension project value in the UK" },
      { value: "Loft conversions", label: "one of the highest-value local construction searches" },
      { value: "75%", label: "of homeowners get 2–3 builder quotes — reviews determine who they call first" },
      { value: "60–120 days", label: "typical timeline to first-page rankings for builders" },
    ],
    topServices: [
      {
        icon: "🏗️",
        title: "Extension & Loft Conversion Pages",
        desc: "Dedicated landing pages for rear extensions, loft conversions, and kitchen refits — the highest-value building searches — with local content and project photography.",
      },
      {
        icon: "📍",
        title: "Google Business Profile for Builders",
        desc: "Full GBP build with project photos, service categories, and review management. Builders with 30+ project photos on GBP receive significantly more contact requests.",
      },
      {
        icon: "📋",
        title: "Trade Directory Citations",
        desc: "Federation of Master Builders, Checkatrade, TrustATrader, and Rated People listings — the citation sources Google uses to verify and rank UK building businesses.",
      },
      {
        icon: "🖼️",
        title: "Portfolio SEO",
        desc: "Location-tagged before/after project photos and case studies that build trust with prospective customers and provide content for search result image carousels.",
      },
    ],
    faqs: [
      {
        question: "How can a builder get more enquiries from Google?",
        answer:
          "Ranking on Google for builder searches requires: an optimised Google Business Profile in the 'General contractor' or 'Building contractor' category, dedicated landing pages for each project type you specialise in (extensions, loft conversions, kitchen refits), consistent citations on trade directories (FMB, Checkatrade, TrustaTrader), and 20 or more Google reviews with project photos.",
      },
      {
        question: "What building projects should I prioritise for local SEO?",
        answer:
          "Prioritise the project types with the highest values and best margins first. In most UK markets, rear extensions and loft conversions generate the highest-value enquiries from local search. We analyse your specific market to identify which project types have the best combination of search volume and competition, then build your SEO strategy around those first.",
      },
      {
        question: "Does Federation of Master Builders membership help with SEO?",
        answer:
          "FMB membership provides a high-authority citation on the FMB directory, which strengthens your local link profile. We include the FMB member badge on your website, GBP, and all citation listings. FMB membership also improves click-through rates from search results because consumers recognise the badge as a quality assurance signal for building work.",
      },
      {
        question: "How important are project photos for a builder's local SEO?",
        answer:
          "Project photos are critical. Google Business Profile allows unlimited photos — builders with 30 or more high-quality before/after project photos receive significantly more profile views than those with under 10. We optimise all GBP photos with location-specific file names and descriptions, which contributes to local search relevance and drives more profile engagement.",
      },
      {
        question: "Can I rank for commercial building searches as well as domestic?",
        answer:
          "Yes, but domestic and commercial building searches require separate landing pages. Commercial keywords ('commercial fit-out contractor [city]', 'office refurbishment [city]') have lower search volume but much higher average project values. We build both tracks if commercial work is part of your service mix, targeting the highest-value project types in each category.",
      },
    ],
  },

  landscapers: {
    tagline:
      "Fill your landscaping calendar with residential and commercial enquiries by ranking at the top of Google for local garden and landscaping searches.",
    description:
      "Landscaping is a seasonal, high-value, and highly visual trade. Customers searching 'landscaper near me' or 'garden design [city]' want to see your work first — your photos, your portfolio, your past projects. Local SEO for landscapers makes your visual portfolio the first thing local customers see when they decide to invest in their outdoor space.\n\nLandscaping covers distinct services with different search patterns and average values: landscape design (high-ticket, planned), garden maintenance (recurring, seasonal), driveway and patio installation, fencing, artificial grass, and commercial landscaping contracts. We build a local SEO strategy that captures the full range of your offering, with dedicated pages for high-value services like driveway installation and landscape design where search intent is strongest.",
    keyFacts: [
      { value: "£3k–£15k", label: "average driveway installation project value" },
      { value: "Spring (Mar–May)", label: "peak search season for landscaping in the UK" },
      { value: "+35%", label: "conversion uplift from before/after photos on GBP" },
      { value: "45–90 days", label: "typical time to Maps 3-pack ranking for landscapers" },
    ],
    topServices: [
      {
        icon: "🚗",
        title: "Driveway & Patio SEO",
        desc: "Dedicated landing pages targeting 'driveway installation [city]', 'block paving [city]', and 'resin driveway [city]' — the highest-value landscaping searches in most UK markets.",
      },
      {
        icon: "🌿",
        title: "Garden Design SEO",
        desc: "Target 'garden design [city]' and 'landscape designer [city]' to capture high-ticket planned projects with a longer consideration window and higher average design fees.",
      },
      {
        icon: "📷",
        title: "GBP Portfolio Optimisation",
        desc: "30+ location-tagged before/after photos on your Google Business Profile — the single most important conversion asset for landscaping businesses in local search.",
      },
      {
        icon: "📅",
        title: "Seasonal SEO Campaigns",
        desc: "Timed optimisation pushes 8–10 weeks before each season peak — autumn for garden clearance, winter for design planning, spring for installation — to capture early enquiries.",
      },
    ],
    faqs: [
      {
        question: "How does local SEO work for a landscaping business?",
        answer:
          "Local SEO for landscapers focuses on three areas: your Google Business Profile optimised with service categories, project photos, and service area; dedicated landing pages for each service type (driveway installation, garden design, maintenance); and a review generation system that captures satisfied customers while their project is fresh. These three elements drive Maps 3-pack and organic page-1 rankings.",
      },
      {
        question: "Should I create separate pages for each landscaping service?",
        answer:
          "Yes. 'Driveway installation [city]', 'artificial grass [city]', and 'garden design [city]' are entirely different searches with different users, different intent, and different competitive landscapes. A separate landing page for each service — with localised content, project examples, and a specific call to action — consistently outranks a generic 'landscaping services [city]' page for those specific queries.",
      },
      {
        question: "How do I rank for driveway installation searches in my area?",
        answer:
          "Driveway installation ranking requires a dedicated page targeting your surface types (block paving, resin, tarmac), local citation consistency, GBP photos of completed driveways in your area, and 15 or more Google reviews specifically mentioning driveway work. We build this complete approach from day one, targeting the most searched driveway surface in your specific market first.",
      },
      {
        question: "How can I get more landscaping enquiries from Google in winter?",
        answer:
          "Winter landscaping searches shift toward planning and projects with spring delivery. We target winter-specific queries like 'garden design [city]', 'patio installation quote [city]', and 'driveway quotes near me' with content that positions you for spring work. A well-timed winter strategy fills your spring calendar before competitors who only become active when weather improves.",
      },
      {
        question: "Does artificial grass installation have good local SEO potential?",
        answer:
          "Artificial grass installation is a growing search category with less competition than driveway installation in most UK markets. It has a defined project scope, a clear average value of £2,000–£8,000, and a specific customer type. A dedicated artificial grass landing page typically ranks within 60–90 days in most UK markets and generates consistent enquiries from spring through autumn.",
      },
    ],
  },

  "driving-schools": {
    tagline:
      "Get more learner driver enquiries by ranking at the top of Google when people search for a driving instructor in your area.",
    description:
      "Driving lesson searches are high-frequency, hyperlocal, and personal. A learner driver searching 'driving instructor near me' or 'driving school [city]' is comparing pass rates, prices, and availability — and they are highly likely to book within 24–48 hours of searching. Local SEO for driving schools positions your instructor profile at the top of those searches before a competitor takes the booking.\n\nDriving instruction is a personal service. Searchers compare individual instructors as much as schools — DVSA approval, experience with nervous drivers, lesson prices, and availability for intensive courses. We build your Google Business Profile and local SEO to highlight your specific strengths: DVSA ADI status, lesson packages, postcode coverage areas, and the intensive course offering that generates your highest-value bookings.",
    keyFacts: [
      { value: "1.6 million", label: "provisional licence holders took UK driving tests in 2023" },
      { value: "£800–£1,500", label: "average intensive driving course value" },
      { value: "DVSA ADI", label: "the primary trust signal for driving school searches" },
      { value: "30–60 days", label: "typical time to first ranking movement for driving schools" },
    ],
    topServices: [
      {
        icon: "🚗",
        title: "Driving Instructor Local SEO",
        desc: "GBP optimisation, DVSA ADI trust signal integration, and local keyword targeting for 'driving instructor [city]' and 'driving lessons near me' to win bookings from your target postcodes.",
      },
      {
        icon: "📅",
        title: "Intensive Course Landing Page",
        desc: "Dedicated page targeting 'intensive driving course [city]' and 'crash course driving lessons [city]' — higher average values and a distinct customer type from standard weekly lessons.",
      },
      {
        icon: "📍",
        title: "Postcode Area Targeting",
        desc: "GBP service area configuration and postcode-level keyword targeting to rank for searches in the specific areas you cover, not just your registered address location.",
      },
      {
        icon: "⭐",
        title: "Post-Test Review System",
        desc: "Automated review requests sent at the highest-satisfaction moment — immediately after a student passes their test — generating a consistent stream of 5-star reviews.",
      },
    ],
    faqs: [
      {
        question: "How do driving schools rank on Google?",
        answer:
          "Driving school rankings are determined by your Google Business Profile completeness, the number and quality of your Google reviews, your website's relevance to local driving instruction queries, and your consistency across local directories (DVSA ADI register, driving test booking sites). A fully optimised GBP in the 'Driving school' category is the single most important first step.",
      },
      {
        question: "Can a sole trader driving instructor compete with larger driving schools?",
        answer:
          "Yes. Google Maps rankings favour proximity and relevance over business size. A sole trader instructor with 40 or more reviews and an optimised GBP consistently outranks larger schools with weaker local signals. We specialise in building sole trader instructor profiles that compete effectively against franchise schools in the same area.",
      },
      {
        question: "Should I create a page for intensive driving courses?",
        answer:
          "Absolutely. Intensive driving courses have higher average values (£800–£1,500 vs £30–£35 per standard lesson) and a distinct search intent. A dedicated intensive course page with pricing, availability, and booking capability ranks independently from your standard lesson pages and generates high-value enquiries from learners who want to pass quickly.",
      },
      {
        question: "How do I get more reviews as a driving instructor?",
        answer:
          "The best moment to request a review is immediately after a student passes their test — satisfaction is at its peak. We set up a two-step review request: a congratulations text within two hours of the result, with a direct Google review link. This consistently generates 4–8 new reviews per month for active instructors without requiring any ongoing effort.",
      },
      {
        question: "Does ADI badge colour affect my local SEO?",
        answer:
          "ADI badge colour (green for full ADI, pink for trainee PDI) is not a direct ranking factor, but it is a trust signal that affects conversion rates. We display your DVSA ADI registration status and badge number clearly on your GBP, website, and citation profiles. Fully qualified ADI status with the green badge should be front and centre in your online profiles.",
      },
    ],
  },

  physiotherapists: {
    tagline:
      "Attract more patients for physiotherapy, sports injury, and rehabilitation treatment by ranking at the top of Google in your area.",
    description:
      "Physiotherapy patients search deliberately. They have a specific condition — a back injury, post-surgical rehabilitation need, or sports injury — and they want a qualified, credentialed specialist nearby. A patient searching 'physiotherapist near me' or 'sports physio [city]' will check HCPC registration, read reviews, look for condition-specific experience, and compare pricing. Local SEO for physiotherapists wins in that comparison window.\n\nPhysiotherapy encompasses condition-specific sub-verticals with distinct search patterns: sports injury treatment, back and neck pain, post-operative rehabilitation, women's health physiotherapy, and manual therapy. Each condition type has its own searcher and keyword cluster. We build dedicated condition pages with local SEO that positions your clinic for the specific conditions your practitioners specialise in — not generic 'physio near me' pages that compete for everything at once.",
    keyFacts: [
      { value: "HCPC", label: "registration is the primary patient trust signal for physiotherapy" },
      { value: "Sports injury", label: "fastest-growing physiotherapy search category in the UK (2024)" },
      { value: "£50–£80", label: "typical private physiotherapy session rate in the UK" },
      { value: "45–90 days", label: "typical timeline to first-page rankings for physio practices" },
    ],
    topServices: [
      {
        icon: "🏃",
        title: "Condition-Specific Landing Pages",
        desc: "Dedicated pages for sports injury, back pain, and post-surgical rehab — each targeting the specific search query of a patient with that condition, not a generic 'physiotherapy' page.",
      },
      {
        icon: "🏅",
        title: "HCPC Trust Signal Integration",
        desc: "HCPC registration numbers, chartered physiotherapist status, and specialist qualifications displayed prominently across GBP, website, and healthcare directory citations.",
      },
      {
        icon: "📍",
        title: "Healthcare Directory Citations",
        desc: "Consistent listings on HCPC Register, PhysioFind, NHS website (where applicable), and health-specific directories — the citation sources Google uses to verify physio clinics.",
      },
      {
        icon: "⭐",
        title: "Patient Review Generation",
        desc: "HCPC-compliant review request process that generates 4–6 new reviews per month, building the 25+ review profile that converts clinic searches into booked appointments.",
      },
    ],
    faqs: [
      {
        question: "How do I get my physiotherapy clinic on the first page of Google?",
        answer:
          "First-page rankings for physiotherapy require an optimised Google Business Profile with 'Physiotherapist' as the primary category, dedicated landing pages for your key specialisms (sports injury, back pain, post-surgical rehab), consistent citations on healthcare directories (HCPC, PhysioFind), and 25 or more Google reviews with a 4.5-star average.",
      },
      {
        question: "Should a physiotherapy clinic have separate pages per condition?",
        answer:
          "Yes. Patients search for specific conditions, not general physiotherapy. 'Back pain physiotherapist [city]', 'sports injury physio [city]', and 'post-surgery rehabilitation [city]' are different queries with different searchers. Dedicated condition pages with relevant clinical content outrank general practice pages for condition-specific searches and attract pre-qualified patients.",
      },
      {
        question: "How do HCPC regulations affect physiotherapy marketing content?",
        answer:
          "HCPC standards require that all marketing is accurate, does not mislead about outcomes, and does not make unsubstantiated claims. We use qualifying language for outcomes, describe services accurately, and do not make guaranteed recovery claims. HCPC registration numbers are displayed prominently as a trust signal throughout your online presence.",
      },
      {
        question: "Is women's health physiotherapy worth targeting for local SEO?",
        answer:
          "Women's health physiotherapy (pelvic floor treatment, post-natal rehabilitation, menopause-related musculoskeletal care) is an underserved, high-demand search category with relatively low SEO competition in most UK markets. If you have qualified practitioners, a dedicated women's health page will rank significantly faster than a general physiotherapist page in the same city.",
      },
      {
        question: "How can physiotherapy clinics get more Google reviews within HCPC guidelines?",
        answer:
          "HCPC guidelines permit patient testimonials if they are genuine and not selectively presented to mislead. Invite all patients to leave a Google review at the end of their treatment course — not just satisfied ones. We build review request systems with HCPC-compliant language that generate consistent new reviews without breaching professional standards.",
      },
    ],
  },

  locksmiths: {
    tagline:
      "Get more emergency callouts and property security jobs by ranking at the top of Google when people need a locksmith fast.",
    description:
      "Locksmith searches are among the most urgent in local services — a locked-out homeowner, a failed lock after a break-in, a lost key. The searcher needs help within minutes and will call the first trusted, well-reviewed locksmith they find. Local SEO for locksmiths positions your business in the Google Maps 3-pack for 'locksmith near me' and 'emergency locksmith [city]' before customers find an unaccredited operator.\n\nThe locksmith market has a significant trust problem: rogue operators harm the reputation of legitimate businesses and inflate prices. MLA (Master Locksmiths Association) membership and Trading Standards approval are the critical trust signals that differentiate genuine locksmiths from rogue traders. We display your accreditations prominently across all local search profiles and build a review count that makes the distinction unmistakable to searching customers.",
    keyFacts: [
      { value: "60–70%", label: "of UK locksmith revenue comes from emergency callout work" },
      { value: "MLA membership", label: "the primary trust signal separating legitimate from rogue operators" },
      { value: "£80–£200", label: "average emergency callout value depending on time and job" },
      { value: "14–30 days", label: "fastest ranking timeline — emergency intent drives rapid results" },
    ],
    topServices: [
      {
        icon: "🚨",
        title: "Emergency Locksmith SEO",
        desc: "Target 'emergency locksmith near me' and 'locksmith [city]' with GBP 24/7 attributes, emergency response time claims, and a review count that signals trustworthiness to stressed customers.",
      },
      {
        icon: "🏅",
        title: "MLA Trust Signal Integration",
        desc: "MLA membership number, badge, and Trading Standards approval displayed across GBP, website, and citation listings — the trust signals that convert an emergency searcher into a caller.",
      },
      {
        icon: "🏠",
        title: "Residential & Commercial Split",
        desc: "Separate page strategy for residential lockout/lock replacement and commercial security/access control — distinct audiences with different average job values.",
      },
      {
        icon: "⭐",
        title: "Post-Job Review System",
        desc: "Review requests sent within 24 hours of job completion — when customer satisfaction is highest — building the 30+ review profile that earns trust in emergency searches.",
      },
    ],
    faqs: [
      {
        question: "How do I get my locksmith business in the Google Maps 3-pack?",
        answer:
          "Locksmith Maps 3-pack rankings require 'Locksmith' as your GBP primary category, '24/7' service attributes enabled, your service area set accurately, 20 or more Google reviews with 4.5 stars or above, and consistent citations on locksmith directories (MLA, Trust My Locksmith). Due to the emergency nature of searches, GBP rankings drive the vast majority of new callout bookings.",
      },
      {
        question: "Does MLA membership help with local SEO?",
        answer:
          "MLA membership provides a high-authority citation on the MLA directory, which strengthens your local link profile. We include your MLA member badge and membership number on your GBP, website, and all citation listings. MLA membership also improves click-through rates from search results because consumers actively look for the MLA badge when searching for a trustworthy locksmith.",
      },
      {
        question: "Why is local SEO important for avoiding rogue locksmith competition?",
        answer:
          "Rogue operators spend heavily on Google Ads but have weak review profiles and no accreditation signals. Organic local SEO rankings combined with a strong review count and visible MLA or Trading Standards accreditation consistently outperform rogue operators in conversion rate from the same ranking position. Legitimate locksmiths who invest in SEO win the trust comparison every time.",
      },
      {
        question: "Should I target car locksmith and home locksmith searches separately?",
        answer:
          "Yes. Car locksmith searches and home locksmith searches have different users, different equipment requirements, and different average job values. Separate landing pages for automotive and residential locksmith services improve ranking relevance for each query type and allow you to present the most relevant trust signals and pricing for each audience.",
      },
      {
        question: "How many Google reviews does a locksmith need to compete?",
        answer:
          "In most UK markets, 20–35 Google reviews with a 4.6-star average is sufficient to rank in the Maps 3-pack. Because the locksmith industry has widespread trust problems, review count matters more than in most trades — a locksmith with 50 reviews will consistently outperform one with 5, even with equivalent GBP optimisation signals.",
      },
    ],
  },

  accountants: {
    tagline:
      "Attract more sole trader, limited company, and VAT clients by ranking at the top of Google when local businesses search for an accountant.",
    description:
      "Accountant searches combine urgency with careful evaluation. A limited company director searching 'accountant [city]' or 'small business accountant near me' is about to commit to an ongoing professional relationship and will evaluate carefully: qualifications, accounting software used (Xero, QuickBooks, Sage), pricing transparency, and client reviews. Local SEO for accountants wins at this evaluation stage by making your qualifications and client satisfaction the most visible in your area.\n\nAccounting SEO spans multiple client types with different search patterns: sole traders, limited companies, VAT registration, payroll services, R&D tax credits, and self-assessment filing. Each has distinct search volume, seasonality (self-assessment peaks January), and client value. We target the highest-value client types first — limited company clients with ongoing monthly contracts — while capturing seasonal self-assessment demand.",
    keyFacts: [
      { value: "Oct–Jan", label: "peak UK accountant search season driven by self-assessment deadline" },
      { value: "ACA/ACCA/CIMA", label: "the qualifications that convert searcher into client" },
      { value: "£1.5k–£5k/yr", label: "average UK SME accountancy fee" },
      { value: "60–90 days", label: "typical timeline to first-page rankings for accountants" },
    ],
    topServices: [
      {
        icon: "💼",
        title: "Limited Company vs Sole Trader Pages",
        desc: "Separate landing pages for limited company accounts and sole trader self-assessment — different searchers, different service scope, different average annual fees.",
      },
      {
        icon: "📅",
        title: "Self-Assessment Seasonal SEO",
        desc: "Timed optimisation push in October–November targeting 'self-assessment accountant [city]' — capturing the search volume spike before the January 31st filing deadline.",
      },
      {
        icon: "🖥️",
        title: "Accounting Software SEO",
        desc: "Content targeting 'Xero accountant [city]', 'QuickBooks bookkeeper [city]', and 'FreeAgent accountant [city]' — software-specific searches that attract clients who already know what they want.",
      },
      {
        icon: "⭐",
        title: "Milestone-Based Review Requests",
        desc: "Review requests triggered at the highest-satisfaction moments — successful self-assessment submission, year-end completion, tax investigation resolution — for consistent authentic reviews.",
      },
    ],
    faqs: [
      {
        question: "How do I get my accounting practice on the first page of Google?",
        answer:
          "First-page rankings for accounting searches require an optimised Google Business Profile with 'Accountant' as the primary category, dedicated service pages for your key client types (sole traders, limited companies, VAT services), consistent citations on accountancy directories (ICAEW Find an Accountant, AAT directory), and 15 or more Google reviews.",
      },
      {
        question: "Should an accountant have separate pages for sole traders and limited companies?",
        answer:
          "Yes. Sole traders and limited company directors search with different terms, have different needs, and represent different annual fee values — limited company clients typically generate two to four times the annual fee of sole traders. Separate landing pages with specific content for each client type rank more effectively and convert at higher rates.",
      },
      {
        question: "How does accounting software affect local SEO?",
        answer:
          "Mentioning accounting software (Xero, QuickBooks, FreeAgent, Sage) on your website and Google Business Profile helps with search relevance because many clients search for a 'Xero accountant [city]' or 'QuickBooks bookkeeper near me'. We include software compatibility prominently in your service descriptions and GBP attributes to capture these software-specific searches.",
      },
      {
        question: "How can accountants get more Google reviews?",
        answer:
          "The optimal time to request a review is immediately after resolving a stressful situation — a successful self-assessment submission, a tax investigation resolution, or a first year-end accounts approval. We set up review request triggers at these milestone moments, which consistently generate authentic 5-star reviews from satisfied clients.",
      },
      {
        question: "Is it worth targeting R&D tax credits in local SEO?",
        answer:
          "R&D tax credit searches have very high intent and very high client values — a successful R&D claim can be worth £50,000–£500,000 to a client, and advisors typically charge 10–20% of the claim. Search volume is lower than general accountant terms, but competition is also lower. A dedicated R&D tax credits landing page with local signals attracts very high-value enquiries.",
      },
    ],
  },

  "car-detailing": {
    tagline:
      "Get a fully booked detailing diary by ranking at the top of Google when local car owners search for a professional detailer.",
    description:
      "Car detailing is a premium, discretionary service where customers are already invested in their vehicle's appearance. A customer searching 'car detailing near me' or 'mobile car detailer [city]' is comparing quality, process, and price — not just proximity. Local SEO for car detailers makes your work visible first: your GBP photos, your review detail, and your service menu must communicate premium quality before a competitor does.\n\nCar detailing spans multiple service tiers with different search volumes and values: exterior wash and wax, full detail packages, paint correction, ceramic coating, and interior deep clean. Ceramic coating and paint correction are the highest-value services (£300–£2,000+) and have dedicated high-intent search terms. We build a strategy that captures both high-frequency entry-level searches and the high-value paint protection and ceramic coating queries.",
    keyFacts: [
      { value: "£500–£2,000", label: "average ceramic coating application value" },
      { value: "GBP photos", label: "the #1 conversion driver for car detailing businesses" },
      { value: "Mobile vs studio", label: "two distinct audiences requiring different SEO strategies" },
      { value: "30–60 days", label: "typical time to first Maps 3-pack ranking for detailers" },
    ],
    topServices: [
      {
        icon: "✨",
        title: "Ceramic Coating & Paint Correction SEO",
        desc: "Dedicated landing pages targeting 'ceramic coating [city]' and 'paint correction near me' — highest-value detailing services with high-intent, pre-planned search behaviour.",
      },
      {
        icon: "🚗",
        title: "Mobile Detailing Geo-Targeting",
        desc: "Service-area GBP configuration and postcode-level keyword targeting for 'mobile car detailing [city]' and 'mobile car valet near me' — the fastest-growing detailing segment.",
      },
      {
        icon: "📷",
        title: "GBP Portfolio Optimisation",
        desc: "30+ professional before/after photos on your Google Business Profile with optimised file names — the most important single conversion asset for detailing businesses.",
      },
      {
        icon: "📋",
        title: "Service Package Pages",
        desc: "Individual landing pages for paint correction, full detail packages, and interior deep clean — each targeting the specific search query for that service level.",
      },
    ],
    faqs: [
      {
        question: "How does local SEO work for car detailing businesses?",
        answer:
          "Local SEO for car detailing centres on three elements: a fully optimised Google Business Profile with high-quality before/after photos, dedicated service pages for your highest-value offerings (ceramic coating, paint correction), and a review count of 20 or more with 4.6 stars or above. Car detailing is visually driven — your GBP photos are your most important conversion asset in search results.",
      },
      {
        question: "Should mobile car detailers and studio detailers use different SEO strategies?",
        answer:
          "Yes. Mobile detailers need geo-targeted service area SEO targeting 'mobile car detailing [city]' and specific postcode areas. Studio detailers target location-specific searches like 'car detailing [city]' and 'paint correction near me'. Mobile detailers set up their GBP as a service-area business without a fixed address, which requires different configuration from a studio location.",
      },
      {
        question: "How can I rank for ceramic coating searches?",
        answer:
          "Ceramic coating searches have high intent and good commercial value. Ranking requires a dedicated page targeting 'ceramic coating [city]', content covering your specific coating brands (Gtechniq, Gyeon, CarPro), your preparation process including paint correction requirements, and your warranty terms. We also build citations on detailing industry directories and relevant forums.",
      },
      {
        question: "How important are photos for a car detailing business on Google?",
        answer:
          "Photos are the single most important conversion asset for car detailing businesses. Customers decide to contact you based on the quality of your work, which they judge entirely from your GBP photos before visiting your website. We optimise all photos with location-relevant file names and captions, target a minimum of 30 portfolio photos, and guide you on which photo types generate the most enquiries.",
      },
      {
        question: "Is car detailing SEO worth it for a sole trader?",
        answer:
          "Yes. Car detailing is a high-margin, personally delivered service where a sole trader competes equally with larger operations on Google Maps. A sole trader with 30 or more reviews and professional GBP photos consistently outranks a larger operation with weaker local signals. Most sole trader detailers who invest in local SEO achieve fully booked calendars within 90 days.",
      },
    ],
  },

  "car-valeting": {
    tagline:
      "Keep your valeting business fully booked by ranking at the top of Google when local drivers search for a professional car valet.",
    description:
      "Car valeting searches are frequent, local, and price-competitive. A driver searching 'car valeting near me' or 'mobile car valet [city]' is comparing price, speed, and convenience. Local SEO for car valeting businesses positions your service at the top of those searches — above competitors who rely only on word of mouth or social media promotion.\n\nValeting covers a spectrum from a quick exterior wash-and-vacuum through to full interior and exterior valet packages. Mobile valeting (at-home or workplace service) is the fastest-growing segment with dedicated search terms. We build a local SEO strategy that captures the full range of valeting search intent — from quick searches for a wash to considered searches for a thorough interior valet — and converts each into a booking.",
    keyFacts: [
      { value: "Mobile valeting", label: "fastest-growing car care segment by local search volume in the UK" },
      { value: "£60–£150", label: "average full interior valet value" },
      { value: "Before/after photos", label: "the primary conversion driver for valeting GBP profiles" },
      { value: "30–45 days", label: "typical time to first Maps ranking for valeting businesses" },
    ],
    topServices: [
      {
        icon: "🚘",
        title: "Mobile Valeting Geo-Targeting",
        desc: "Service-area GBP configuration and mobile-specific keyword targeting for 'mobile car valeting near me' and 'mobile car valet [city]' — customers who want at-home convenience.",
      },
      {
        icon: "🧹",
        title: "Interior Valet Landing Page",
        desc: "Dedicated page targeting 'interior car valet [city]' and 'full car valet near me' — the highest-converting valeting searches with clear service scope and defined price expectation.",
      },
      {
        icon: "📷",
        title: "Before/After Photo Strategy",
        desc: "25–40 professional before/after photos on your GBP, updated monthly, showing the transformations that convert browsers into booking customers.",
      },
      {
        icon: "📋",
        title: "Local Business Directory Citations",
        desc: "Consistent listings on Yell, Bark.com, TrustATrader, and local business directories to build the citation profile that supports Maps 3-pack rankings.",
      },
    ],
    faqs: [
      {
        question: "How do I get more car valeting customers from Google?",
        answer:
          "The fastest way to increase valeting customers from Google is to claim and fully optimise your Google Business Profile with 'Car wash' as the primary category, add 20 or more professional before/after photos, and collect 15 or more Google reviews. This three-step process alone puts most UK valeting businesses in the Maps 3-pack within 45–60 days for their target area.",
      },
      {
        question: "Is mobile car valeting worth targeting with local SEO?",
        answer:
          "Mobile valeting is worth prioritising. It has its own search category with clear local intent and customers who specifically want at-home convenience. A Google Business Profile set up as a service-area business with mobile valeting as the primary offering ranks well for mobile-specific searches and targets a customer segment willing to pay a premium for convenience.",
      },
      {
        question: "What is the best Google Business Profile category for a car valeting business?",
        answer:
          "For valeting businesses, 'Car wash' is the most common primary GBP category. 'Car detailing service' may be appropriate if you offer comprehensive valeting packages. Additional secondary categories can include 'Mobile car wash service'. We test and optimise GBP category combinations based on what drives the most calls in your specific local market.",
      },
      {
        question: "How do I compete with large car wash chains on Google?",
        answer:
          "Large car wash chains have brand recognition but often lack the personalised service and review quality of independent valeting businesses. An independent valet with 40 reviews and professional photos consistently outranks chain competitors who rely on brand reputation rather than local signals. Independent businesses also rank better for 'near me' searches due to greater location precision.",
      },
      {
        question: "How many photos should a car valeting business have on Google?",
        answer:
          "Aim for 25–40 photos on your Google Business Profile showing multiple before/after examples, interior and exterior work, your equipment, and your team. Profiles with 30 or more photos receive significantly more views and contact requests than those with under 10. Update photos monthly with recent work to signal that your business is active and regularly serving customers.",
      },
    ],
  },

  "auto-locksmiths": {
    tagline:
      "Get more emergency vehicle lockout calls by ranking at the top of Google when drivers are locked out of their cars and need help fast.",
    description:
      "Auto locksmith searches are pure emergency. A driver locked out of their car is searching on their phone, uncomfortable and stressed, and will call the first trusted, well-reviewed result within minutes of searching. Local SEO for auto locksmiths positions your business in the Google Maps 3-pack for 'auto locksmith near me', 'car lockout [city]', and 'car key replacement [city]' before customers find a rogue trader.\n\nAuto locksmith SEO must convey speed, trust, and 24/7 availability simultaneously. The Google Business Profile must show 24-hour service attributes, an emergency response time in the description, and MLA or ALOA accreditation. We build auto locksmith local SEO that communicates all three trust factors from the first moment of contact in search results — converting emergency searches into confirmed call bookings.",
    keyFacts: [
      { value: "£80–£200", label: "average auto lockout callout value" },
      { value: "93% mobile", label: "share of 'auto locksmith near me' searches — GBP is the primary landing point" },
      { value: "MLA accreditation", label: "the critical trust signal for auto locksmith searches" },
      { value: "14–21 days", label: "fastest ranking category in local SEO due to emergency search volume" },
    ],
    topServices: [
      {
        icon: "🚨",
        title: "Emergency Auto Locksmith SEO",
        desc: "GBP optimisation for 24/7 availability, emergency response time claims, and 'auto locksmith near me' targeting — converting stressed drivers into confirmed callout bookings.",
      },
      {
        icon: "🔑",
        title: "Car Key Replacement Page",
        desc: "Dedicated page for 'car key replacement [city]' and vehicle-specific key programming searches — capturing higher-value, pre-planned work alongside emergency callouts.",
      },
      {
        icon: "🏅",
        title: "MLA Trust Integration",
        desc: "MLA membership and accreditation displayed prominently across GBP, website, and citations — the trust signal that differentiates legitimate auto locksmiths from rogue operators.",
      },
      {
        icon: "⭐",
        title: "Emergency Review System",
        desc: "Review requests sent within 24 hours of job completion — the optimal window for emergency service customers who were grateful for fast, professional help.",
      },
    ],
    faqs: [
      {
        question: "How do I get my auto locksmith business in the Google Maps 3-pack?",
        answer:
          "Auto locksmith Maps 3-pack rankings require 'Locksmith' or 'Auto locksmith service' as your GBP primary category, 24/7 service attributes enabled, your service area set accurately, 20 or more Google reviews with 4.5 stars or above, and consistent citations on locksmith directories (MLA, Trust My Locksmith). GBP rankings drive the vast majority of emergency auto lockout calls.",
      },
      {
        question: "What makes an auto locksmith business rank higher than competitors?",
        answer:
          "Review count and recency are the primary differentiators for auto locksmith rankings in competitive markets. An auto locksmith with 50 or more reviews and a 4.7-star rating consistently ranks ahead of a competitor with 10 reviews and similar GBP optimisation. We build review generation systems specifically designed for emergency service businesses, collecting reviews in the 24 hours after job completion.",
      },
      {
        question: "Should I create a separate page for car key replacement?",
        answer:
          "Yes. 'Car key replacement [city]' and 'car key programming [city]' are distinct from lockout searches and have a different customer profile — pre-planned replacement versus emergency lockout. A dedicated car key replacement page targeting vehicle-specific queries captures high-value, pre-planned work that supplements your emergency callout revenue.",
      },
      {
        question: "How do I rank for both domestic and auto locksmith searches?",
        answer:
          "Domestic and auto locksmith searches require separate strategy tracks. We create distinct service pages for automotive locksmith services (car lockouts, car key replacement, key programming) and residential services (house lockouts, lock replacement). Your GBP primary category and service description should reflect your strongest and most profitable service type.",
      },
      {
        question: "Does the time of day affect auto locksmith Google rankings?",
        answer:
          "Time of day does not affect Maps ranking position — you rank the same at 2am as at 2pm. However, your GBP opening hours must accurately reflect your 24-hour service, your listing must consistently show as 'Open now', and your response time must be stated clearly. These factors affect click-through and call rates from your ranked position at any hour.",
      },
    ],
  },

  "car-locksmiths": {
    tagline:
      "Win more car lockout and key replacement jobs by ranking at the top of Google when drivers need a car locksmith urgently.",
    description:
      "Car locksmith searches combine the urgency of an emergency with the specificity of a vehicle-related need. A driver searching 'car locksmith near me' needs immediate help — their keys are locked inside, their key is broken, or their remote fob has failed. Local SEO for car locksmiths puts your business at the top of these urgent searches with trust signals that convert stressed drivers into confirmed bookings.\n\nCar locksmith services include vehicle entry (most urgent), car key cutting, transponder key programming, key fob replacement, and car lock replacement after theft. Each service type has a distinct search pattern and average value. We build a strategy that captures the high-frequency emergency entry searches while also ranking for the higher-value planned services like key programming and replacement.",
    keyFacts: [
      { value: "£80–£160", label: "average car lockout callout value" },
      { value: "£150–£400", label: "average key programming value depending on vehicle" },
      { value: "92% mobile", label: "share of 'car locksmith near me' searches" },
      { value: "14–30 days", label: "typical time to first Maps rankings for car locksmiths" },
    ],
    topServices: [
      {
        icon: "🚗",
        title: "Vehicle Lockout Emergency SEO",
        desc: "24/7 GBP configuration and 'car locksmith near me' targeting for emergency vehicle entry searches — the highest-frequency, highest-urgency car locksmith query type.",
      },
      {
        icon: "🔑",
        title: "Car Key Cutting & Programming Page",
        desc: "Dedicated page for 'car key replacement [city]' and vehicle-specific key programming — targeting pre-planned replacement customers alongside emergency lockout work.",
      },
      {
        icon: "🚘",
        title: "Vehicle-Specific Key Replacement",
        desc: "Pages or sections targeting key replacement by car make — Ford, Vauxhall, VW, BMW — capturing high-intent searches from owners of specific vehicles.",
      },
      {
        icon: "⭐",
        title: "Post-Job Review Automation",
        desc: "Text-based review requests sent within hours of job completion — capturing the peak satisfaction window of emergency service customers who received fast, professional help.",
      },
    ],
    faqs: [
      {
        question: "What is the best Google Business Profile setup for a car locksmith?",
        answer:
          "Use 'Locksmith' as the primary GBP category with 'Auto locksmith service' as a secondary category. Enable 24-hour service attributes if you offer emergency response. Your GBP description should state your emergency response time, the vehicles you work with, and your MLA accreditation. Service area should cover the postcodes you can realistically reach within your stated response time.",
      },
      {
        question: "How do I rank for car key replacement searches?",
        answer:
          "Car key replacement searches have different intent from lockout searches — customers are planning a replacement key, not in immediate distress. A dedicated page targeting 'car key replacement [city]' with vehicle-specific pricing ranges, your key programming equipment (Autel, Snap-on), and turnaround times will rank for planned replacement queries and convert at high rates.",
      },
      {
        question: "Should I target specific car makes for key replacement SEO?",
        answer:
          "Yes. 'BMW key replacement [city]', 'Ford key fob programming [city]', and 'VW car key [city]' are specific queries with clear intent. Dedicated page sections per vehicle make — especially for high-volume models like Ford, Vauxhall, VW, and BMW — capture searches from owners of those specific vehicles and signal your expertise in their car's key system to Google.",
      },
      {
        question: "How important are reviews for a car locksmith business?",
        answer:
          "Reviews are the primary conversion signal for car locksmith businesses. A stressed driver comparing results in a lockout situation will choose the business with more reviews and higher ratings almost every time. 30 or more reviews with a 4.6-star rating is the target for competitive UK markets. We build a review system that requests reviews via text immediately after job completion.",
      },
      {
        question: "Is there a difference between car locksmith and auto locksmith SEO?",
        answer:
          "The terms are largely interchangeable in search, but 'auto locksmith' has slightly higher volume in some UK regions while 'car locksmith' dominates in others. We target both through GBP category optimisation, landing page content, and keyword strategy — so your business appears for both search variants. Local keyword data determines which term to lead with in your specific market.",
      },
    ],
  },

  "home-locksmiths": {
    tagline:
      "Get more residential lockout and lock replacement calls by ranking at the top of Google when homeowners need a trusted home locksmith fast.",
    description:
      "Home locksmith searches cover two distinct situations: the genuine emergency (locked out of the house) and the planned need (lock upgrade after moving in, lock replacement after break-in, smart lock installation). Both are high-intent searches — the searcher is certain they need a locksmith and is comparing speed, trust, and price. Local SEO for home locksmiths ensures your business ranks first and looks most trustworthy for both.\n\nResidential locksmith SEO requires clear separation between emergency lockout services and planned lock work. Emergency lockout searches convert to calls within minutes. Planned lock replacement and smart lock installation searches have a longer consideration window. We build a local SEO strategy that serves both audiences with dedicated pages, correct GBP attributes, and a review profile that reassures homeowners about letting a locksmith into their home.",
    keyFacts: [
      { value: "£80–£160", label: "average residential lockout callout value" },
      { value: "Smart locks", label: "fastest-growing residential locksmith search term (2024)" },
      { value: "'Locksmith near me'", label: "the highest-volume locksmith search term in the UK" },
      { value: "14–30 days", label: "fastest-ranking emergency service category in local SEO" },
    ],
    topServices: [
      {
        icon: "🏡",
        title: "Residential Lockout Emergency SEO",
        desc: "24/7 GBP optimisation and 'locksmith near me' targeting for homeowners in emergency lockout situations — the highest-frequency residential locksmith query.",
      },
      {
        icon: "🔒",
        title: "Smart Lock Installation Page",
        desc: "Dedicated page targeting 'smart lock installer [city]' and 'smart door lock installation near me' — a growing, high-value service with a distinct planned-purchase audience.",
      },
      {
        icon: "🏅",
        title: "MLA & DBS Trust Integration",
        desc: "MLA membership, DBS certificate, and Trading Standards approval displayed across all profiles — the trust signals homeowners need before letting a locksmith into their home.",
      },
      {
        icon: "🔐",
        title: "Lock Replacement & Upgrade Pages",
        desc: "Dedicated content for 'lock replacement [city]', 'high-security lock upgrade', and 'lock replacement after break-in' — planned security work with higher average job values.",
      },
    ],
    faqs: [
      {
        question: "How do I rank for house lockout searches in my area?",
        answer:
          "House lockout rankings require your GBP to show 24/7 availability, state your emergency response time clearly, and have 'Locksmith' as the primary category. The most important differentiator for homeowner trust is review count and rating — homeowners are admitting a stranger to their home, so they check reviews carefully. 20 or more reviews with 4.7 stars or above is the target for competitive residential locksmith markets.",
      },
      {
        question: "Should home locksmiths create a page for smart lock installation?",
        answer:
          "Yes. Smart lock installation is a growing, high-value service with a distinct customer type — a homeowner upgrading security, not in emergency. A dedicated smart lock page with the brands you install (Yale, Ring, Schlage), pricing ranges, and compatibility information ranks for planned searches and generates higher-value, pre-booked appointments that complement your emergency callout work.",
      },
      {
        question: "What trust signals matter most to homeowners looking for a locksmith?",
        answer:
          "Homeowners evaluating locksmiths prioritise: MLA or Trading Standards membership, a visible DBS check certificate, a high number of recent Google reviews, and transparent pricing with a clear call-out fee explanation. We incorporate all four trust signals into your GBP, website, and citation profiles to maximise conversion from your ranked positions.",
      },
      {
        question: "How do I differentiate my business from rogue locksmiths in search results?",
        answer:
          "Differentiating from rogue operators requires MLA or Trading Standards certification displayed prominently, a named individual locksmith on your GBP rather than a generic company name, a high review count from verified customers, and transparent pricing on your website. Google increasingly filters suspected rogue operators from local results when legitimate businesses have strong local signals.",
      },
      {
        question: "Can I rank for both emergency lockout and planned lock work?",
        answer:
          "Yes, but use separate pages. Emergency lockout searches and planned lock work searches are different queries with different intent and different consideration windows. Separate landing pages let you serve both audiences with the right content — urgency signals for emergency searchers, detailed product and pricing information for planned lock upgrade buyers.",
      },
    ],
  },

  "gutter-cleaning": {
    tagline:
      "Fill your gutter cleaning schedule with regular and one-off jobs by ranking at the top of Google when local homeowners need their gutters cleared.",
    description:
      "Gutter cleaning has clear seasonal search patterns: searches peak in late autumn (October–November) when leaves block gutters, and in early spring (February–March) when homeowners carry out maintenance. A homeowner searching 'gutter cleaning near me' or 'gutter clearance [city]' at these peak times will call the first trusted, locally ranked business they find. Local SEO for gutter cleaners captures this seasonal demand before competitors.\n\nGutter cleaning is a volume business — the average job value is modest at £60–£150, but recurring demand is strong. Homeowners who use a gutter cleaner once typically rebook annually. Local SEO builds the base of enquiries that feeds a recurring customer list, making the lifetime value per acquired customer significantly higher than the initial job value alone.",
    keyFacts: [
      { value: "Oct–Nov", label: "peak gutter cleaning search season in the UK" },
      { value: "£60–£150", label: "average gutter cleaning job value" },
      { value: "35%", label: "of gutter cleaning enquiries want service within one week" },
      { value: "30–45 days", label: "typical time to first Maps 3-pack ranking for gutter cleaners" },
    ],
    topServices: [
      {
        icon: "🌧️",
        title: "Seasonal Gutter Cleaning SEO",
        desc: "Timed optimisation pushes 8–10 weeks before autumn and spring search peaks — building rankings before the volume spike so you capture early enquiries ahead of competitors.",
      },
      {
        icon: "🔧",
        title: "Gutter Repair Landing Page",
        desc: "Dedicated page targeting 'gutter repair [city]' and 'broken gutter replacement' — complementary to cleaning searches with higher average job values of £150–£400.",
      },
      {
        icon: "🏠",
        title: "Fascia & Soffit Upsell Page",
        desc: "Content targeting fascia and soffit replacement searches — higher-value roofline work (£500–£3,000) that naturally follows from gutter cleaning relationships.",
      },
      {
        icon: "📍",
        title: "Multi-Postcode Service Area Targeting",
        desc: "GBP service area settings and location-specific landing pages for each target town or district — expanding your geographic ranking coverage without thin duplicate content.",
      },
    ],
    faqs: [
      {
        question: "How do I get more gutter cleaning jobs from Google?",
        answer:
          "The most effective approach is a fully optimised Google Business Profile with 'Gutter cleaning service' as the primary category, 20 or more before/after photos, and 15 or more Google reviews. A dedicated gutter cleaning page on your website targeting '[city] gutter cleaning' and 'gutter clearance [area]' accelerates organic rankings alongside your GBP. Most gutter cleaners see booking increases within 45 days of starting.",
      },
      {
        question: "When should I increase my local SEO activity for seasonal demand?",
        answer:
          "Start optimising 8–10 weeks before your peak season. For autumn gutter cleaning, this means an August–September optimisation push. For spring maintenance, start in December–January. Rankings take 4–8 weeks to respond to optimisation activity, so you need to act before the search volume peak — not during it when every competitor is also active.",
      },
      {
        question: "Should I add gutter repair to my gutter cleaning SEO strategy?",
        answer:
          "Yes. Gutter repair searches are complementary to cleaning searches and have higher average job values of £150–£400 for repair versus £60–£150 for cleaning. A dedicated gutter repair page diversifies your enquiry sources and increases average job value. Customers who find you through a cleaning search often convert to repair work when you identify issues on-site.",
      },
      {
        question: "Is fascia and soffit work worth targeting alongside gutter cleaning?",
        answer:
          "Fascia, soffit, and roofline searches have higher job values of £500–£3,000 for full replacement and are natural upsells from gutter cleaning relationships. If you offer this work, a dedicated fascia and soffit page captures these higher-value searches and positions your business as a full roofline maintenance provider, improving average job value across your customer base significantly.",
      },
      {
        question: "How do I rank my gutter cleaning business in multiple postcodes?",
        answer:
          "Covering multiple postcodes requires a combination of GBP service area settings covering each target postcode and location-specific landing pages for your main target areas. We build a location page strategy that expands your geographic ranking coverage without creating thin duplicate content — each location page has genuine local content differentiating it from the others.",
      },
    ],
  },

  "jet-washing": {
    tagline:
      "Get more driveway, patio, and commercial jet washing bookings by ranking at the top of Google when local customers search for a pressure washing service.",
    description:
      "Jet washing searches peak in spring and after summer — homeowners want driveways, patios, and decking cleaned before outdoor use or before property sales. A customer searching 'jet washing near me' or 'pressure washing [city]' is ready to book within days. Local SEO for jet washing businesses positions your service at the top of those time-sensitive searches before competitors capture the enquiry.\n\nJet washing covers distinct service types with different search patterns and values: residential driveway and patio cleaning, commercial forecourt and car park washing, decking and fence treatment, and exterior building cleaning. Residential services have higher search volume; commercial contracts have higher job values of £500–£5,000 or more. We build a strategy that captures both — high-frequency residential searches for steady booking volume and commercial searches for high-value contract acquisition.",
    keyFacts: [
      { value: "Spring (Apr–May)", label: "peak jet washing search season in the UK" },
      { value: "£500–£5,000", label: "average commercial jet washing contract value" },
      { value: "Driveway cleaning", label: "highest-volume individual jet washing search term in the UK" },
      { value: "30–45 days", label: "typical time to Maps 3-pack ranking for jet washing businesses" },
    ],
    topServices: [
      {
        icon: "💦",
        title: "Driveway & Patio Cleaning SEO",
        desc: "Dedicated landing pages for 'driveway cleaning [city]' and 'patio cleaning [city]' — the highest-volume residential jet washing searches with strong seasonal conversion rates.",
      },
      {
        icon: "🏢",
        title: "Commercial Pressure Washing Page",
        desc: "B2B keyword targeting for 'commercial pressure washing [city]' and 'car park cleaning contractor [city]' — lower search volume but much higher per-job values.",
      },
      {
        icon: "📅",
        title: "Seasonal SEO Strategy",
        desc: "Optimisation pushes starting in February–March targeting spring peak demand — building rankings before the April–May surge so you capture early enquiries ahead of competitors.",
      },
      {
        icon: "🌿",
        title: "Surface-Specific Landing Pages",
        desc: "Separate sections or pages for driveways, patios, decking, and fencing — each targeting the specific surface search query that a generic 'jet washing' page would miss.",
      },
    ],
    faqs: [
      {
        question: "How do I get my jet washing business to rank on Google?",
        answer:
          "Start with a Google Business Profile in the 'Pressure washing service' category, add 20 or more before/after photos of driveways, patios, and decking, and collect 15 or more Google reviews. A dedicated website page targeting 'jet washing [city]' and 'driveway cleaning [city]' builds organic rankings alongside your GBP. Most jet washing businesses see first ranking movement within 30–45 days.",
      },
      {
        question: "Is driveway cleaning worth a separate landing page?",
        answer:
          "Yes. 'Driveway cleaning [city]' is the highest-volume jet washing search term and deserves its own dedicated page with local content, project photos, pricing ranges, and a booking call to action. A dedicated driveway cleaning page consistently outranks a generic 'jet washing services' page for driveway-specific searches because it matches the query intent precisely.",
      },
      {
        question: "How do I rank for commercial jet washing contracts?",
        answer:
          "Commercial jet washing searches have lower volume but much higher values. A dedicated commercial page with sector-specific content (retail parks, industrial estates, car dealerships) and commercial testimonials targets these high-value buyers. We also build local citations on commercial property directories for additional visibility with facilities managers and property owners.",
      },
      {
        question: "Should I target different surfaces separately?",
        answer:
          "Yes, where practical. Separate sections or pages for driveway cleaning, patio cleaning, and decking treatment let you rank for surface-specific searches that a general jet washing page would miss. This broader coverage captures the full range of jet washing search intent in your area and improves overall organic click volume from local search.",
      },
      {
        question: "How does jet washing SEO work in winter when demand drops?",
        answer:
          "Winter is foundation-building time. We use lower search periods for GBP optimisation, citation building, review collection, and content creation that positions you for the spring peak. A business that does winter SEO work starts appearing in results 6–8 weeks before spring demand peaks — capturing early enquiries before competitors who only become active when weather improves.",
      },
    ],
  },

  automotive: {
    tagline:
      "Get more bookings for MOTs, servicing, repairs, and tyres by ranking at the top of Google when local drivers need a trusted garage.",
    description:
      "Automotive businesses operate in a high-frequency, trust-sensitive market. A driver searching 'garage near me' or 'MOT [city]' needs a service they can rely on — for the safety of their vehicle and the safety of everyone on the road. Local SEO for automotive businesses positions your garage or workshop at the top of those searches with the trust signals — reviews, accreditations, and transparent pricing — that convert searchers into booked-in customers.\n\nAutomotive SEO covers distinct service verticals with different search patterns: MOT testing (scheduled, compliance-driven), servicing and repairs (planned and breakdown), tyres and exhausts (often urgent), car diagnostics, and specialist services like air conditioning recharge and cambelt replacement. Each service has its own search frequency and average value. We build a strategy that targets the highest-volume services first and expands to specialist searches as your rankings build.",
    keyFacts: [
      { value: "40M+", label: "MOT tests conducted in the UK annually — consistent search demand" },
      { value: "£54.85", label: "maximum MOT test fee — price comparisons drive searcher behaviour" },
      { value: "Cambelt replacement", label: "one of the highest-value routine automotive searches (£300–£700)" },
      { value: "30–60 days", label: "typical time to first Maps 3-pack ranking for garages" },
    ],
    topServices: [
      {
        icon: "🔧",
        title: "MOT & Servicing SEO",
        desc: "Target 'MOT [city]', 'car service near me', and 'full service and MOT [city]' — the highest-volume automotive searches with consistent year-round demand.",
      },
      {
        icon: "🚗",
        title: "Specialist Service Pages",
        desc: "Dedicated pages for cambelt replacement, air conditioning recharge, diagnostics, and tyres — high-value services with specific search intent that compound your overall organic traffic.",
      },
      {
        icon: "📷",
        title: "Garage Google Business Profile",
        desc: "Full GBP build with workshop photos, service categories, price transparency attributes, and review management — the primary discovery point for local automotive searches.",
      },
      {
        icon: "⭐",
        title: "Automotive Review Generation",
        desc: "Review requests triggered at vehicle collection — the moment of maximum customer satisfaction — building the 30+ review profile that drives Maps 3-pack clicks.",
      },
    ],
    faqs: [
      {
        question: "How do I get my garage to rank on Google Maps?",
        answer:
          "Garage Maps 3-pack rankings require a fully optimised Google Business Profile with 'Auto repair shop' or 'Car repair and maintenance' as the primary category, 25 or more Google reviews with 4.4 stars or above, consistent citations on automotive directories (RAC approved, AA approved, Checkatrade), and a website with dedicated service pages. Most garages see first Maps ranking movement within 30–60 days.",
      },
      {
        question: "Should I create a dedicated page for MOT testing?",
        answer:
          "Yes. 'MOT [city]' is a high-volume, high-frequency search with clear local intent and consistent year-round demand. A dedicated MOT page with your current price (or mention that it meets the maximum fee), booking availability, and your MOT station number signals to Google that your page is the definitive answer for MOT searches in your area.",
      },
      {
        question: "Does RAC or AA approved status help with local SEO?",
        answer:
          "RAC and AA approved status provides high-authority citations on both organisations' directories — valuable backlinks that improve your local link profile. We display your approval status prominently on your GBP, website, and all citation listings. These accreditations significantly increase click-through rates from search results because drivers recognise them as quality signals.",
      },
      {
        question: "How can I rank for specialist automotive services like cambelt replacement?",
        answer:
          "Cambelt replacement and other specialist service searches have lower volume than MOT or servicing but higher average job values and less competition. A dedicated landing page targeting 'cambelt replacement [city]' with content covering your vehicle coverage (makes and models), pricing ranges, and booking availability will typically rank within 60–90 days and generate high-value enquiries.",
      },
      {
        question: "How do I get more Google reviews for my garage?",
        answer:
          "The best time to request a review is when a customer collects their vehicle after a successful repair or service — satisfaction is highest at that moment. We set up a text-based review request sent within two hours of vehicle collection, with a direct Google review link. This approach consistently generates 4–8 new reviews per month for active garages without requiring any manual effort.",
      },
    ],
  },
};
