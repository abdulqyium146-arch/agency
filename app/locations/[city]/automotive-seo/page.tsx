import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, capitalize } from "@/lib/data";
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schemas";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20automotive%20business%20online.%20Can%20you%20help%3F";

// Automotive-specific content variations by city
const automotiveContent: Record<string, {
  marketDescription: string;
  marketInsight: string;
  challenge: string;
  stat1: { label: string; value: string };
  stat2: { label: string; value: string };
  testimonialQuote?: string;
  testimonialName?: string;
  testimonialBusiness?: string;
}> = {
  london: {
    marketDescription: "London's automotive market is fiercely competitive — dealerships, repair shops, and detailing services fight for every customer. With 40+ major automotive competitors in most local searches, visibility is everything.",
    marketInsight: "London drivers search for auto services 15,000+ times per month. If you're not on page 1 of Google Maps and organic results, you're losing customers to competitors daily.",
    challenge: "Auto repair shops in London compete against well-funded chains. Independent mechanics and dealerships need local SEO to level the playing field.",
    stat1: { label: "Monthly automotive searches", value: "15,000+" },
    stat2: { label: "Competitors on page 1", value: "40+" },
    testimonialQuote: "We went from page 3 to Google Maps top position for 'car mechanic London' within 90 days. Calls and bookings tripled.",
    testimonialName: "Raj P.",
    testimonialBusiness: "Auto Repair Shop, London",
  },
  manchester: {
    marketDescription: "Manchester's automotive sector is booming — from independent mechanics to large dealerships. The competition is growing, but local SEO expertise is still scarce. That's your advantage.",
    marketInsight: "Car owners in Manchester search for 'MOT near me', 'tyre shop Manchester', and 'car repair services' thousands of times monthly. These are high-intent searches that convert immediately.",
    challenge: "Manchester's auto market is expanding. Early dominance in local search now means long-term market share before competitors catch on.",
    stat1: { label: "Monthly repair searches", value: "8,500+" },
    stat2: { label: "Days to first rankings", value: "30-60" },
    testimonialQuote: "As a used car dealership in Manchester, local visibility is crucial. We're now #1 for 'used car dealership Manchester' and footfall has increased significantly.",
    testimonialName: "David K.",
    testimonialBusiness: "Used Car Dealership, Manchester",
  },
  birmingham: {
    marketDescription: "Birmingham is the heartland of the UK automotive industry. With Jaguar Land Rover connections and decades of automotive heritage, this is a HIGH-VALUE market. Local SEO here generates serious revenue.",
    marketInsight: "Birmingham's motor trade is worth £2B+ annually. Mechanics, body shops, dealers, and detailing services are actively searching online. The question isn't whether to do SEO — it's whether to do it before competitors.",
    challenge: "Competition is intense. But early movers in local SEO capture 60-70% of the market before others optimize.",
    stat1: { label: "Annual automotive market value", value: "£2B+" },
    stat2: { label: "Market growth rate", value: "12%/year" },
    testimonialQuote: "Local SEO for our MOT centre was a game-changer. We went from 15 MOTs a month to 45+. Finally getting the local visibility we deserved.",
    testimonialName: "Michael B.",
    testimonialBusiness: "MOT Testing Centre, Birmingham",
  },
  leeds: {
    marketDescription: "Leeds has a thriving automotive sector with hundreds of independent repair shops, dealerships, and specialist services. Online visibility separates the busy shops from the struggling ones.",
    marketInsight: "Leeds drivers conduct 7,000+ monthly searches for auto services. Most of these searches are local and high-intent — people actively looking to spend money today.",
    challenge: "Many Leeds auto businesses lack online presence. Dominating local search now means consistent revenue while competitors are still figuring out how to rank.",
    stat1: { label: "Monthly local searches", value: "7,000+" },
    stat2: { label: "Businesses without SEO", value: "85%" },
  },
  coventry: {
    marketDescription: "Coventry is the AUTOMOTIVE HUB of the UK. Jaguar Land Rover's presence means Coventry attracts premium automotive businesses and customers. Local SEO here isn't just marketing — it's survival.",
    marketInsight: "Coventry's automotive industry generates £4.5B annually. Mechanics, body shops, tyre specialists, and dealerships are concentrated here. Google search volume for auto services is exceptionally high.",
    challenge: "Coventry's auto shops compete for a limited pool of local searches. Ranking in the top 3 means consistent bookings. Ranking on page 2 means near-zero visibility.",
    stat1: { label: "Annual industry value", value: "£4.5B" },
    stat2: { label: "Automotive businesses", value: "2,000+" },
    testimonialQuote: "Competing in Coventry's automotive market is tough, but ranking for 'tyre shop near me' put us on the map. Revenue increased 40% in first quarter.",
    testimonialName: "Sophie L.",
    testimonialBusiness: "Tyre Shop, Coventry",
  },
  bristol: {
    marketDescription: "Bristol's automotive scene is premium-focused with high-value dealerships and specialist services. Local SEO here targets affluent customers actively willing to spend on quality.",
    marketInsight: "Bristol drivers search for 'luxury car repair', 'premium detailing', and high-end services. These searches indicate serious buyers. Ranking means access to high-ticket customers.",
    challenge: "Bristol's market is niche but lucrative. Early SEO dominance here builds sustainable, premium customer bases.",
    stat1: { label: "Premium service searches", value: "4,500+/month" },
    stat2: { label: "Average customer value", value: "35% higher" },
    testimonialQuote: "Car detailing is competitive here, but we went from unranked to position 2 for 'mobile car detailing Bristol'. Bookings are now consistent.",
    testimonialName: "Tom W.",
    testimonialBusiness: "Mobile Car Detailing, Bristol",
  },
  sheffield: {
    marketDescription: "Sheffield's automotive market is growing with demand for honest, reliable mechanics and repair services. Local search dominance here builds trust and steady income.",
    marketInsight: "Sheffield residents actively search for 'trusted mechanic' and 'reliable car repair' — they value trust and reputation. Google Business Profile and reviews are critical here.",
    challenge: "Businesses with strong local profiles dominate. New mechanics can rank quickly with proper SEO foundation.",
    stat1: { label: "Monthly searches", value: "5,200+" },
    stat2: { label: "Review importance", value: "Very high" },
  },
  liverpool: {
    marketDescription: "Liverpool's port-city logistics and industrial base mean automotive services are in constant demand. Fleet management, repairs, and detailing create year-round business opportunities.",
    marketInsight: "Liverpool has active automotive networking communities. Local business visibility here creates word-of-mouth momentum plus direct search traffic.",
    challenge: "Liverpool's market rewards business owners who invest in local presence early.",
    stat1: { label: "Fleet-related searches", value: "3,800+/month" },
    stat2: { label: "Industrial vehicle services", value: "Growing 8%/year" },
  },
  cardiff: {
    marketDescription: "Cardiff is Wales' automotive capital with strong demand for repair services, detailing, and MOT testing. Welsh business owners who rank locally build monopolistic market positions.",
    marketInsight: "Cardiff's automotive market is less saturated than major English cities. First-mover advantage in local SEO is significant here.",
    challenge: "Ranking in Cardiff means serving a growing market with limited SEO-optimized competitors.",
    stat1: { label: "Wales' automotive hub", value: "True" },
    stat2: { label: "Market competition", value: "Lower" },
  },
  edinburgh: {
    marketDescription: "Edinburgh's Scottish market is distinct and valuable. Premium services combined with mainstream repair shops create diverse opportunities for local SEO success.",
    marketInsight: "Edinburgh drivers search actively for local services. Scottish automotive market has unique search behavior and preferences — requires specialized local knowledge.",
    challenge: "Edinburgh businesses with strong local profiles capture 60%+ market share in their niches.",
    stat1: { label: "Scottish automotive market", value: "Premium" },
    stat2: { label: "Local search volume", value: "6,200+/month" },
  },
  glasgow: {
    marketDescription: "Glasgow is Scotland's largest automotive market with high volume and consistent demand. Local SEO here scales quickly — one ranking means hundreds of monthly leads.",
    marketInsight: "Glasgow has higher automotive search volume than Edinburgh. Industrial heritage means strong fleet and heavy vehicle services demand.",
    challenge: "Glasgow's market is fast-moving. Quick implementation means capturing market before competition catches on.",
    stat1: { label: "Scotland's largest market", value: "True" },
    stat2: { label: "Monthly searches", value: "8,900+" },
  },
  nottingham: {
    marketDescription: "Nottingham's Midlands location and thriving business district create high-demand automotive services market. Local SEO success here means serving busy professionals.",
    marketInsight: "Nottingham professionals need quick, reliable auto services. Online booking and rapid availability are key. Google visibility gets you these time-sensitive customers.",
    challenge: "Nottingham's automotive market rewards businesses with strong online presence and fast response systems.",
    stat1: { label: "Monthly searches", value: "6,100+" },
    stat2: { label: "Professional customer base", value: "High" },
  },
  leicester: {
    marketDescription: "Leicester's growing automotive market serves both professionals and residents. Local search optimization here builds stable, recurring customer bases.",
    marketInsight: "Leicester's market growth is outpacing SEO adoption. Early optimizers capture disproportionate market share.",
    challenge: "Leicester is ripe for automotive SEO investment. Competition is still developing.",
    stat1: { label: "Market growth rate", value: "9%/year" },
    stat2: { label: "SEO adoption", value: "Low" },
  },
  newcastle: {
    marketDescription: "Newcastle's northeast market is strong and underserved. Auto repair shops, dealerships, and detailing services have massive opportunity for local dominance.",
    marketInsight: "Northeast England's automotive market is growing. Newcastle businesses with strong Google presence capture customer flow easily.",
    challenge: "First-mover advantage is significant. Early optimization means years of market dominance.",
    stat1: { label: "Northeast market size", value: "£800M+" },
    stat2: { label: "Monthly searches", value: "7,300+" },
  },
  brighton: {
    marketDescription: "Brighton's vibrant market attracts eco-conscious consumers and premium service seekers. Electric vehicle servicing and premium detailing are growth areas.",
    marketInsight: "Brighton's automotive scene is trending toward premium services and sustainability. Google visibility here captures high-value customers.",
    challenge: "Brighton's premium market rewards businesses with strong online positioning.",
    stat1: { label: "EV service growth", value: "25%/year" },
    stat2: { label: "Premium service demand", value: "Growing" },
  },
  southampton: {
    marketDescription: "Southampton's port-city status and coastal tourism create unique automotive opportunities. Servicing, detailing, and quick repairs for passing traffic are constant revenue sources.",
    marketInsight: "Southampton sees significant tourist and transit traffic. Quick-service automotive businesses with Google visibility capture high-volume walk-in business.",
    challenge: "Tourism seasonality means year-round marketing strategy required. Local SEO ensures consistent visibility across seasons.",
    stat1: { label: "Annual tourists", value: "3M+" },
    stat2: { label: "Service demand", value: "High & consistent" },
  },
  hull: {
    marketDescription: "Hull's industrial port economy creates consistent demand for fleet servicing, commercial vehicle repairs, and heavy-duty automotive work. The city's growing regeneration also brings new residential customers looking for reliable local garages.",
    marketInsight: "Hull drivers search for 'mechanic near me', 'MOT Hull', and 'cheap tyre fitting Hull' thousands of times each month. With less SEO competition than larger cities, early movers here capture dominant positions quickly.",
    challenge: "Hull's automotive market is underleveraged in terms of SEO. Most businesses rely on word-of-mouth. The first garages to rank on Google Maps will own the market for years.",
    stat1: { label: "Monthly automotive searches", value: "4,800+" },
    stat2: { label: "SEO competition level", value: "Low — ideal timing" },
  },
  derby: {
    marketDescription: "Derby's manufacturing and logistics heritage keeps its automotive market active year-round. With Rolls-Royce and Toyota connections in the region, Derby drivers expect quality and reliability — and they search Google to find it.",
    marketInsight: "Derby's strong professional workforce means high-value customers searching for MOT centres, premium detailing, and trusted mechanics. These are buyers, not browsers.",
    challenge: "Derby's auto businesses underinvest in local SEO, leaving prime Google Map positions empty. Strategic investment now locks in top rankings before competition intensifies.",
    stat1: { label: "Monthly repair searches", value: "5,600+" },
    stat2: { label: "Professional customer base", value: "Very high" },
  },
  stoke: {
    marketDescription: "Stoke-on-Trent's large working population and strong industrial base drive constant demand for affordable, reliable automotive services. Budget-conscious customers research heavily before booking — Google visibility is non-negotiable.",
    marketInsight: "Stoke residents value trust and price. Businesses with strong Google reviews and top Maps positions win bookings consistently. First-page rankings here translate directly into daily phone calls.",
    challenge: "Stoke's automotive market is price-sensitive but high-volume. Ranking for 'cheap MOT Stoke' or 'budget tyre fitting near me' means capturing the majority of local searches.",
    stat1: { label: "Monthly local searches", value: "4,200+" },
    stat2: { label: "Review influence on bookings", value: "Extremely high" },
  },
  preston: {
    marketDescription: "Preston sits at the heart of Lancashire's road network, making it a natural hub for automotive services. With the M6 and M55 nearby, breakdown services, tyre shops, and quick-turn repair centres see high footfall from local and transient customers.",
    marketInsight: "Preston drivers search frequently for 'emergency tyre fitting Preston', 'local mechanic Preston', and 'MOT centre near me'. Appearing in the Maps 3-pack for these terms means a constant stream of ready-to-book customers.",
    challenge: "Preston is a mid-sized market where local SEO is still underutilised. Automotive businesses that invest now secure dominant positions before the market matures.",
    stat1: { label: "Monthly search volume", value: "3,900+" },
    stat2: { label: "Market maturity", value: "Emerging — ideal entry" },
  },
  oxford: {
    marketDescription: "Oxford's affluent, highly educated population has high expectations and high spend. Prestige car servicing, premium MOT centres, and specialist repair shops thrive here. Customers research thoroughly before choosing — your Google presence must be impeccable.",
    marketInsight: "Oxford's automotive buyers are among the highest-value in the UK. Average service spend is significantly above the national average. Ranking for 'prestige car service Oxford' or 'specialist mechanic Oxford' unlocks premium revenue streams.",
    challenge: "Oxford's premium market demands a polished online presence. Strong reviews, optimised GBP, and well-ranked service pages are the baseline for competing.",
    stat1: { label: "Average customer spend", value: "40% above UK avg" },
    stat2: { label: "Premium service demand", value: "Very high" },
    testimonialQuote: "We were getting lost among Oxford garages online. Within 3 months we ranked top 3 for our key terms and now see premium clients booking weekly.",
    testimonialName: "James H.",
    testimonialBusiness: "Prestige Car Service, Oxford",
  },
};

export async function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  if (!cities.includes(city)) return {};
  const cityName = capitalize(city);

  return {
    title: `Automotive Local SEO in ${cityName} | Car Repair & Dealership Marketing`,
    description: `Expert automotive local SEO for ${cityName}. Help auto repair shops, dealerships, mechanics & MOT centres rank #1 on Google Maps. Drive more qualified leads. Free audit.`,
    keywords: [
      `automotive SEO ${cityName}`,
      `car repair SEO ${cityName}`,
      `auto dealership marketing ${cityName}`,
      `mechanic local SEO ${cityName}`,
      `MOT garage SEO ${cityName}`,
      `automotive local marketing ${cityName}`,
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: `${BASE_URL}/locations/${city}/automotive-seo`,
    },
    openGraph: {
      title: `Automotive Local SEO in ${cityName} | Car Repair & Dealership Marketing`,
      description: `Expert automotive local SEO for ${cityName}. Help auto repair shops, dealerships & mechanics rank #1 on Google Maps & get more qualified leads.`,
      url: `${BASE_URL}/locations/${city}/automotive-seo`,
      type: "website",
    },
  };
}

export default async function AutomotiveSEOPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  if (!cities.includes(city)) notFound();

  const cityName = capitalize(city);
  const content = automotiveContent[city] || {
    marketDescription: `${cityName}'s automotive market is competitive and growing. Local search dominance is essential for auto repair shops, dealerships, and mechanic services.`,
    marketInsight: `${cityName} drivers actively search for local automotive services. These are high-intent searches that convert into immediate bookings and sales.`,
    challenge: `Automotive businesses in ${cityName} need specialist SEO expertise to compete effectively online and capture market share.`,
    stat1: { label: "Monthly local searches", value: "5,000+" },
    stat2: { label: "Average competition", value: "High" },
  };

  const faqs = [
    {
      question: `How long does it take to rank my auto repair shop in ${cityName}?`,
      answer: "Most automotive clients see ranking movement within 30–60 days. Strong page-1 positions for competitive keywords typically take 90–120 days. It depends on keyword competition and how quickly we build your local authority.",
    },
    {
      question: `Can you rank my garage on Google Maps in ${cityName}?`,
      answer: "Yes. Google Maps rankings are our specialty. Through proper Google Business Profile optimization, review management, and local citations, we consistently get automotive businesses into the Maps 3-pack.",
    },
    {
      question: `How much does automotive local SEO cost in ${cityName}?`,
      answer: "We offer flexible plans starting from £199/month (Starter) up to £599/month (Pro plan with website & full services). Most automotive clients invest £349–£599/month for comprehensive local SEO, Google Ads, and reputation management.",
    },
    {
      question: `Do you work with independent mechanics and small shops in ${cityName}?`,
      answer: "Absolutely. We specialise in helping small independent automotive businesses compete with larger dealerships. Local SEO is designed to level the playing field — and we've done it successfully for dozens of UK garages.",
    },
    {
      question: `What automotive businesses do you help in ${cityName}?`,
      answer: `We work with the full spectrum of automotive businesses in ${cityName}: auto repair shops, car dealerships, independent mechanics, MOT testing centres, tyre shops, car detailing services, body shops, and fleet service providers.`,
    },
  ];

  const localBusinessSchema = generateLocalBusinessSchema(
    `Automotive Local SEO Services in ${cityName}`
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Locations", url: `${BASE_URL}/locations` },
    { name: cityName },
    { name: "Automotive SEO" },
  ]);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      {/* Hero */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.18) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8 flex-wrap" style={{ color: "#4A5A6E" }}>
            <Link href="/" className="transition-colors hover:text-white" style={{ color: "#4A5A6E" }}>
              Home
            </Link>
            <span>→</span>
            <Link href="/locations" className="transition-colors hover:text-white" style={{ color: "#4A5A6E" }}>
              Locations
            </Link>
            <span>→</span>
            <Link href={`/locations/${city}`} className="transition-colors hover:text-white" style={{ color: "#4A5A6E" }}>
              {cityName}
            </Link>
            <span>→</span>
            <span style={{ color: "#8B9CB8" }}>Automotive SEO</span>
          </div>

          <div className="max-w-3xl">
            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-6"
              style={{
                backgroundColor: "rgba(79,142,247,0.15)",
                border: "1px solid rgba(79,142,247,0.3)",
              }}
            >
              🏆 Ranked 150+ automotive businesses since 2004
            </div>

            <h1
              className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Automotive Local SEO in {cityName}
            </h1>

            <p className="text-lg sm:text-xl mb-10" style={{ color: "#8B9CB8" }}>
              Get your auto repair shop, dealership, or mechanic business ranking #1 on Google Maps and dominating organic search results in {cityName}. I specialize in automotive local SEO — I know exactly what it takes to get cars coming through your doors.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/free-audit"
                className="inline-flex items-center px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Free Automotive Audit →
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: "#22C55E" }}
              >
                💬 WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🚗", label: "Automotive Businesses Ranked", value: "150+" },
              { icon: "📍", label: `${cityName} Market Position`, value: "Specialist" },
              { icon: "💰", label: "Client Revenue Generated", value: "£500k+" },
              { icon: "🏆", label: "Years in Automotive SEO", value: "20+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 text-center"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div
                  className="text-xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-display, sans-serif)", color: "#4F8EF7" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: "#8B9CB8" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Automotive SEO Matters */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-5"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Why Automotive Local SEO Matters in {cityName}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#8B9CB8" }}>
              {content.marketDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📍",
                title: "Google Maps Dominance",
                desc: "When someone searches 'car repair near me' or 'MOT garage in {city}', you need to appear in the 3-pack. That's where the calls and bookings come from.",
              },
              {
                icon: "🔍",
                title: "Page 1 Organic Rankings",
                desc: "Own the top positions for 'auto repair {city}', 'mechanic near me', 'car dealership {city}'. Long-term, sustainable visibility that competitors can't easily take away.",
              },
              {
                icon: "📞",
                title: "More Automotive Leads",
                desc: "Visibility = leads. More calls from qualified customers actively searching for auto services right now. I track every lead so you see ROI monthly.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl p-8 transition-all hover:-translate-y-1 card-hover-blue"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                  {feature.desc.replace("{city}", cityName)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insight */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-5"
                style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
              >
                {cityName}'s Automotive Market Opportunity
              </h2>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "#8B9CB8" }}>
                {content.marketInsight}
              </p>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "#8B9CB8" }}>
                {content.challenge}
              </p>
              <ul className="space-y-4">
                {[
                  "I know the automotive search keywords that drive local business in {city}",
                  "I understand seasonal demand patterns (MOTs, detailing, repairs)",
                  "I know what your automotive competitors are ranking for",
                  "I've refined strategies for repair shops, dealerships, mechanics, & detailing services",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm mt-0.5"
                      style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22C55E" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm" style={{ color: "#8B9CB8" }}>
                      {point.replace("{city}", cityName)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🚗</div>
                <div
                  className="text-4xl font-extrabold mb-1"
                  style={{
                    fontFamily: "var(--font-display, sans-serif)",
                    color: "#4F8EF7",
                    textShadow: "0 0 30px rgba(79,142,247,0.5)",
                  }}
                >
                  {content.stat1.value}
                </div>
                <div style={{ color: "#8B9CB8" }}>{content.stat1.label}</div>
              </div>
              <div
                className="rounded-xl p-4 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <div
                  className="text-2xl font-extrabold mb-1"
                  style={{
                    fontFamily: "var(--font-display, sans-serif)",
                    color: "#4F8EF7",
                  }}
                >
                  {content.stat2.value}
                </div>
                <div className="text-xs" style={{ color: "#8B9CB8" }}>
                  {content.stat2.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Automotive Local SEO Services */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Our Automotive Local SEO Services
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              A complete local SEO solution built specifically for automotive businesses in {cityName}. Every tactic is chosen to drive phone calls, bookings, and showroom visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📍",
                title: "Google Business Profile Optimisation",
                desc: `Your GBP is your most powerful local ranking asset. We fully optimise your profile with service categories, photos, Q&A, posts, and geo-tagged content to dominate the ${cityName} Maps 3-pack.`,
              },
              {
                icon: "🔑",
                title: "Local Keyword Research",
                desc: `We research every high-intent keyword your ${cityName} customers are typing — 'MOT garage near me', 'tyre shop ${cityName}', 'car repair open now'. You rank for the terms that convert.`,
              },
              {
                icon: "🖥️",
                title: "On-Page SEO for Automotive Websites",
                desc: `Service pages, location landing pages, and metadata are all optimised with automotive-specific keywords. We use schema markup so Google understands exactly what you offer and where.`,
              },
              {
                icon: "🔗",
                title: "Local Citations & Link Building",
                desc: `We build consistent NAP citations across automotive directories (RAC, AA, AutoTrader) and local ${cityName} business directories. Quality local links that boost domain authority.`,
              },
              {
                icon: "⭐",
                title: "Review & Reputation Management",
                desc: `More 5-star reviews = higher Maps rankings + more conversions. We build ethical review generation campaigns and respond professionally to all feedback on your behalf.`,
              },
              {
                icon: "⚙️",
                title: "Technical SEO",
                desc: `Fast load times, mobile-first design, Core Web Vitals, and clean site architecture. Google rewards technically sound websites — we ensure yours meets every standard.`,
              },
              {
                icon: "✍️",
                title: "Automotive Content Marketing",
                desc: `City-specific blog posts, service guides, and FAQs targeting ${cityName} automotive searches. Content that ranks and positions your business as the trusted local expert.`,
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl p-7 transition-all hover:-translate-y-1 card-hover-blue"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-base font-bold mb-3" style={{ color: "#E2E8F0" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Automotive Businesses We Help in {cityName}
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              Whether you run a single-bay garage or a multi-site dealership group, we have proven strategies tailored to your niche.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: "🔧", title: "Auto Repair Shops" },
              { emoji: "🏎️", title: "Car Dealerships" },
              { emoji: "👨‍🔧", title: "Mechanics" },
              { emoji: "✅", title: "MOT Testing Centres" },
              { emoji: "🛞", title: "Tyre Shops" },
              { emoji: "✨", title: "Car Detailing" },
            ].map((type) => (
              <div
                key={type.title}
                className="rounded-2xl p-5 text-center"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="text-3xl mb-2">{type.emoji}</div>
                <div className="text-xs font-semibold" style={{ color: "#E2E8F0" }}>
                  {type.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automotive Services We Optimize */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2
              className="text-3xl sm:text-4xl font-extrabold mb-4"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Automotive Services We Help Rank
            </h2>
            <p style={{ color: "#8B9CB8" }}>
              Whether you're an independent mechanic, large dealership, or specialized service, we have proven strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🔧", title: "Auto Repair Shops", keyword: "car repair" },
              { emoji: "🏎️", title: "Car Dealerships", keyword: "used cars" },
              { emoji: "👨‍🔧", title: "Mechanics & Garages", keyword: "mechanic services" },
              { emoji: "✅", title: "MOT Testing Centres", keyword: "MOT garage" },
              { emoji: "🛞", title: "Tyre Shops", keyword: "tyre fitting" },
              { emoji: "✨", title: "Car Detailing Services", keyword: "car detailing" },
              { emoji: "🚗", title: "Body Shops", keyword: "car body repair" },
              { emoji: "⚙️", title: "Automotive Parts", keyword: "auto parts" },
              { emoji: "🚙", title: "Fleet Services", keyword: "fleet maintenance" },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl p-6 text-center transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="text-4xl mb-3">{service.emoji}</div>
                <h3 className="font-bold mb-2" style={{ color: "#E2E8F0" }}>
                  {service.title}
                </h3>
                <p className="text-sm" style={{ color: "#8B9CB8" }}>
                  Rank for "{service.keyword} {cityName.toLowerCase()}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Automotive SEO Process */}
      <section style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-12 text-center"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Our Automotive Local SEO Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Automotive Audit",
                desc: "We audit your current online presence, Google Business Profile, citations, and competitor landscape. Identify quick wins and major opportunities.",
              },
              {
                step: "2",
                title: "Local Keyword Research",
                desc: "Research the exact keywords automotive customers in {city} are using. 'Car repair near me', 'MOT garage {city}', 'mechanic booking' — we find them all.",
              },
              {
                step: "3",
                title: "Google Business Profile Optimization",
                desc: "Fully optimize your GBP with service photos, detailed descriptions, hours, and local service areas. This is where most leads come from.",
              },
              {
                step: "4",
                title: "On-Page & Local SEO",
                desc: "Optimize your website pages with automotive keywords, local schema markup, and conversion-focused content. Make Google (and customers) understand what you offer.",
              },
              {
                step: "5",
                title: "Local Citations & Link Building",
                desc: "Build consistent business citations across automotive directories. Earn links from local {city} business resources and industry-relevant sites.",
              },
              {
                step: "6",
                title: "Review & Reputation Management",
                desc: "Build and manage your Google reviews. More reviews = higher rankings + higher conversion rates. We make it easy for customers to leave reviews.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "#111E33",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="text-3xl font-extrabold mb-3"
                  style={{
                    fontFamily: "var(--font-display, sans-serif)",
                    color: "#4F8EF7",
                  }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#E2E8F0" }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "#8B9CB8" }}>
                  {item.desc.replace("{city}", cityName)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mb-6"
                style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
              >
                Why Automotive Businesses in {cityName} Choose Us
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    icon: "🚗",
                    title: "Automotive Niche Expertise",
                    desc: `We don't do generic SEO. Every strategy is built around automotive search behaviour — seasonal MOT demand, 'near me' repair searches, fleet enquiries specific to ${cityName}.`,
                  },
                  {
                    icon: "🏆",
                    title: "Proven Rankings for UK Garages",
                    desc: "We've ranked 150+ automotive businesses across the UK on page 1 of Google and in the Maps 3-pack. Our case studies speak for themselves.",
                  },
                  {
                    icon: "📍",
                    title: "Google Maps Specialists",
                    desc: `Local pack rankings are our core strength. We know exactly how to push automotive businesses into the top 3 Google Map positions in ${cityName} — and keep them there.`,
                  },
                  {
                    icon: "📊",
                    title: "Transparent Monthly Reporting",
                    desc: "You get a clear, jargon-free monthly report showing keyword rankings, Google Maps position, website traffic, and lead volume. No guessing about your ROI.",
                  },
                  {
                    icon: "💰",
                    title: "ROI-Focused Strategy",
                    desc: "Every tactic we implement is tied back to bookings and revenue — not vanity metrics. If it doesn't make your automotive business money, we don't prioritise it.",
                  },
                  {
                    icon: "🤝",
                    title: "One-to-One Support",
                    desc: "You work directly with an experienced specialist — not account managers or junior staff. Direct WhatsApp access, fast responses, and genuine accountability.",
                  },
                ].map((point) => (
                  <li key={point.title} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ backgroundColor: "rgba(79,142,247,0.12)", border: "1px solid rgba(79,142,247,0.25)" }}
                    >
                      {point.icon}
                    </span>
                    <div>
                      <div className="font-bold text-sm mb-1" style={{ color: "#E2E8F0" }}>
                        {point.title}
                      </div>
                      <div className="text-sm" style={{ color: "#8B9CB8" }}>
                        {point.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(79,142,247,0.08) 0%, transparent 80%), #111E33",
                border: "1px solid rgba(79,142,247,0.20)",
              }}
            >
              <div className="text-6xl mb-6">🏅</div>
              <div
                className="text-5xl font-extrabold mb-2"
                style={{ fontFamily: "var(--font-display, sans-serif)", color: "#4F8EF7" }}
              >
                20+
              </div>
              <div className="font-semibold mb-6" style={{ color: "#E2E8F0" }}>
                Years of Local SEO Experience
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: "150+", label: "Automotive Clients Ranked" },
                  { value: "£500k+", label: "Client Revenue Generated" },
                  { value: "90 days", label: "Average to Page 1" },
                  { value: "4.9★", label: "Average Client Rating" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl p-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div className="text-xl font-extrabold mb-1" style={{ color: "#4F8EF7" }}>
                      {s.value}
                    </div>
                    <div className="text-xs" style={{ color: "#8B9CB8" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/free-audit"
                className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Claim Your Free Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {content.testimonialQuote && (
        <section className="py-16 md:py-24" style={{ backgroundColor: "#080D1A" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="glass-card rounded-2xl p-10"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>
              <blockquote
                className="text-xl font-semibold italic mb-6 leading-relaxed"
                style={{ color: "#E2E8F0" }}
              >
                &ldquo;{content.testimonialQuote}&rdquo;
              </blockquote>
              <div>
                <div className="font-bold" style={{ color: "#E2E8F0" }}>
                  {content.testimonialName}
                </div>
                <div className="text-sm" style={{ color: "#8B9CB8" }}>
                  {content.testimonialBusiness}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Schema */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-12 text-center"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            Automotive SEO Questions Answered
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="rounded-2xl border transition-all"
                style={{
                  backgroundColor: "#111E33",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <summary
                  className="px-8 py-6 cursor-pointer font-semibold flex justify-between items-center"
                  style={{ color: "#E2E8F0" }}
                >
                  {faq.question}
                  <span style={{ color: "#4F8EF7" }}>+</span>
                </summary>
                <div
                  className="px-8 pb-6 border-t"
                  style={{
                    color: "#8B9CB8",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,142,247,0.10) 0%, #080D1A 70%)",
          borderTop: "1px solid rgba(79,142,247,0.20)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="gradient-text text-3xl sm:text-4xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Ready to dominate automotive local search in {cityName}?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Start with a free audit. See exactly what it takes to rank your automotive business on page 1 and in Google Maps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get Free Automotive Audit →
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#22C55E" }}
            >
              💬 WhatsApp Me Now
            </a>
          </div>
          <p className="mt-8 text-sm" style={{ color: "#8B9CB8" }}>
            Free. No credit card. No obligation. Just straight advice on how to rank your {cityName} automotive business.
          </p>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-12" style={{ backgroundColor: "#0D1627" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 style={{ color: "#E2E8F0" }} className="font-semibold">
              Explore More Services & Locations
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/locations"
              className="rounded-xl p-4 text-center transition-all hover:bg-blue-900 hover:bg-opacity-20"
              style={{
                backgroundColor: "rgba(79,142,247,0.10)",
                border: "1px solid rgba(79,142,247,0.20)",
                color: "#4F8EF7",
              }}
            >
              All UK Locations
            </Link>
            <Link
              href={`/locations/${city}`}
              className="rounded-xl p-4 text-center transition-all hover:bg-blue-900 hover:bg-opacity-20"
              style={{
                backgroundColor: "rgba(79,142,247,0.10)",
                border: "1px solid rgba(79,142,247,0.20)",
                color: "#4F8EF7",
              }}
            >
              {cityName} General
            </Link>
            <Link
              href="/industries/automotive"
              className="rounded-xl p-4 text-center transition-all hover:bg-blue-900 hover:bg-opacity-20"
              style={{
                backgroundColor: "rgba(79,142,247,0.10)",
                border: "1px solid rgba(79,142,247,0.20)",
                color: "#4F8EF7",
              }}
            >
              Automotive Services
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl p-4 text-center transition-all hover:bg-green-900 hover:bg-opacity-20"
              style={{
                backgroundColor: "rgba(34,197,94,0.10)",
                border: "1px solid rgba(34,197,94,0.20)",
                color: "#22C55E",
              }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
