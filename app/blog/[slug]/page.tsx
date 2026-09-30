import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, blogSlugs } from "@/data/blog-posts";
import { generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema } from "@/lib/schemas";

const BASE_URL = "https://smallbusinessmarketingprofessional.com";
const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

export async function generateStaticParams() {
  return blogSlugs
    .filter((slug) => {
      const post = getBlogPost(slug);
      return post?.hasFullPost;
    })
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post || !post.hasFullPost) return {};

  const postContent = getPostContent(slug);
  if (!postContent) return {};

  return {
    title: postContent.seoTitle,
    description: postContent.metaDescription,
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      title: postContent.seoTitle,
      description: postContent.metaDescription,
      url: `${BASE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: post.dateISO,
    },
    other: {
      "article:author": "Small Business Marketing Professional",
    },
  };
}

// ─── Post content registry ───────────────────────────────────────────────────

interface PostContent {
  seoTitle: string;
  metaDescription: string;
  body: ReactNode;
  faqs: Array<{ question: string; answer: string }>;
}

function getPostContent(slug: string): PostContent | null {
  if (slug === "how-long-does-local-seo-take") return howLongPost;
  return null;
}

// ─── Post: how-long-does-local-seo-take ──────────────────────────────────────

const howLongFaqs = [
  {
    question: "How long does local SEO take to show results?",
    answer:
      "Local SEO typically shows first measurable results — ranking movement for target keywords and more GBP profile views — within 30–60 days of starting a focused campaign. Strong page-1 and Maps 3-pack positions typically develop by months 3–4. Full ranking strength for competitive markets takes 6–12 months.",
  },
  {
    question: "Can I rank on Google Maps in 30 days?",
    answer:
      "For low-competition markets — small UK towns, niche trades with few local competitors — Maps 3-pack rankings are achievable within 30–45 days. For competitive urban markets like London, Manchester, or Birmingham, 60–120 days is more realistic for consistent Maps 3-pack placement.",
  },
  {
    question: "Why is my local SEO taking so long?",
    answer:
      "The most common reasons for slow local SEO progress are: (1) high competition in your market with many well-optimised competitors, (2) a new domain with no existing authority signals, (3) incomplete or inconsistent Google Business Profile, (4) very few Google reviews, or (5) NAP inconsistencies across citation listings confusing Google about your business details.",
  },
  {
    question: "Does local SEO work faster in smaller UK cities?",
    answer:
      "Yes, significantly faster. A plumber in Shrewsbury with 20 reviews and an optimised GBP can reach the Maps 3-pack within 3–4 weeks. The same plumber in Manchester competing against 70+ GMB listings would typically need 90–120 days. Competition density — the number of active, well-optimised local competitors — is the primary variable in ranking timelines.",
  },
  {
    question: "How long does local SEO take for a brand-new business?",
    answer:
      "A brand-new business with no website history, no reviews, and no existing citations should expect 90–120 days before seeing meaningful ranking positions. The first 30–60 days focus on establishing the foundational signals — GBP build, citation consistency, first reviews — that Google needs to trust and verify a new business before ranking it prominently.",
  },
];

const howLongPost: PostContent = {
  seoTitle: "How Long Does Local SEO Take? Realistic UK Timelines (2025)",
  metaDescription:
    "Local SEO takes 30–90 days to show first results and 6–12 months to reach full strength. Realistic timelines for UK service businesses by industry and city size.",
  faqs: howLongFaqs,
  body: <HowLongPostBody />,
};

function HowLongPostBody() {
  return (
    <article className="prose-dark">
      {/* Short Answer Block — AIO optimised */}
      <div
        className="rounded-xl p-6 mb-10"
        style={{
          backgroundColor: "rgba(79,142,247,0.08)",
          border: "1px solid rgba(79,142,247,0.20)",
        }}
      >
        <div
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: "#4F8EF7" }}
        >
          Quick Answer
        </div>
        <p className="text-base leading-relaxed" style={{ color: "#E2E8F0" }}>
          Local SEO for UK service businesses produces first measurable results — ranking movement
          and more Google Business Profile views — within <strong>30–60 days</strong>. Strong
          page-1 and Maps 3-pack positions typically develop by <strong>months 3–4</strong>. Full
          ranking strength in competitive urban markets takes <strong>6–12 months</strong>. The
          primary variable is competition density: how many well-optimised local competitors you are
          fighting for the same positions.
        </p>
      </div>

      <Section heading="The Three Phases of Local SEO Results">
        <p>
          Local SEO does not deliver results on a single date. Rankings build in phases, each with
          its own activity focus and measurable milestones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
          {[
            {
              phase: "Phase 1",
              label: "Weeks 1–4",
              color: "#4F8EF7",
              title: "Foundation",
              items: [
                "GBP fully built and verified",
                "NAP consistency established",
                "First 10–15 citations live",
                "On-page SEO complete",
                "First review requests sent",
              ],
              outcome: "GBP profile views begin increasing. No ranking jumps yet.",
            },
            {
              phase: "Phase 2",
              label: "Weeks 5–12",
              color: "#FBBF24",
              title: "Momentum",
              items: [
                "40+ citation listings live",
                "10–20 Google reviews",
                "Landing pages indexed",
                "Initial keyword ranking movement",
                "Maps 3-pack impressions begin",
              ],
              outcome:
                "First page-1 rankings appear for lower-competition terms. Maps impressions increasing.",
            },
            {
              phase: "Phase 3",
              label: "Month 3+",
              color: "#22C55E",
              title: "Results",
              items: [
                "25+ Google reviews",
                "Consistent Maps 3-pack positions",
                "Page-1 rankings for core terms",
                "Measurable call volume increase",
                "Compound review growth",
              ],
              outcome:
                "Consistent enquiry flow from organic search. Rankings stable and improving.",
            },
          ].map((phase) => (
            <div
              key={phase.phase}
              className="rounded-xl p-6"
              style={{
                backgroundColor: "#111E33",
                border: `1px solid ${phase.color}30`,
              }}
            >
              <div
                className="text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: phase.color }}
              >
                {phase.phase}
              </div>
              <div className="text-sm font-semibold mb-1" style={{ color: "#E2E8F0" }}>
                {phase.label}
              </div>
              <div
                className="text-base font-bold mb-4"
                style={{ color: phase.color, fontFamily: "var(--font-display, sans-serif)" }}
              >
                {phase.title}
              </div>
              <ul className="space-y-1.5 mb-5">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#8B9CB8" }}>
                    <span style={{ color: phase.color, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs italic leading-snug" style={{ color: "#4A5A6E" }}>
                {phase.outcome}
              </p>
            </div>
          ))}
        </div>

        <p>
          Phase 3 does not end at month 3. Rankings compound as your review count grows, your
          citation profile deepens, and Google accumulates more engagement signals from your GBP.
          Businesses that stay active with their local SEO at month 6 typically hold their positions
          much more stably than those who treat month 3 as &quot;done&quot;.
        </p>
      </Section>

      <Section heading="What Determines How Fast You Rank">
        <p>
          Five factors control local SEO speed more than anything else. Understanding them tells you
          what to expect for your specific market and starting point.
        </p>

        <div className="space-y-5 my-8">
          {[
            {
              factor: "1. Competition density",
              impact: "High",
              impactColor: "#FB923C",
              detail:
                "The number of active, well-optimised local competitors is the single strongest predictor of ranking timeline. A locksmith in Hereford with 5 local competitors ranks in weeks. A locksmith in Birmingham competing against 60+ GMB listings needs months. Before starting, we map your exact competitive landscape.",
            },
            {
              factor: "2. Google Business Profile status",
              impact: "High",
              impactColor: "#FB923C",
              detail:
                "A GBP that was never fully completed, has wrong categories, or has NAP mismatches will take longer to rank than one that is built from scratch correctly. Fixing an existing GBP is typically faster than building a new one for brand-new businesses.",
            },
            {
              factor: "3. Existing review count",
              impact: "High",
              impactColor: "#FB923C",
              detail:
                "A business with 0 Google reviews starts from a significant trust deficit. Getting from 0 to 20 reviews is the most time-sensitive part of any local SEO campaign — it requires real customers and real satisfaction, which takes time regardless of how well everything else is done.",
            },
            {
              factor: "4. Domain and citation history",
              impact: "Medium",
              impactColor: "#FBBF24",
              detail:
                "An existing website with some domain authority and existing citations can be optimised faster than a brand-new domain with no history. Google already trusts the older domain; a new domain must earn that trust from scratch, which typically adds 30–60 days to initial ranking timelines.",
            },
            {
              factor: "5. Geographic search volume",
              impact: "Medium",
              impactColor: "#FBBF24",
              detail:
                "London, Manchester, and Birmingham have enormously higher search volumes than smaller UK cities — but also far more competition. A business in Oxford has less potential search volume than one in London, but typically ranks significantly faster because competition is lower.",
            },
          ].map((item) => (
            <div
              key={item.factor}
              className="rounded-xl p-6"
              style={{
                backgroundColor: "#111E33",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-base font-bold" style={{ color: "#E2E8F0" }}>
                  {item.factor}
                </h3>
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: `${item.impactColor}15`,
                    color: item.impactColor,
                    border: `1px solid ${item.impactColor}30`,
                  }}
                >
                  {item.impact} impact
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="Expected Timelines by Industry">
        <p>
          Different industries have different competitive densities and different average review
          counts among established competitors. Here are realistic timelines for the most common UK
          service business verticals.
        </p>

        <div className="overflow-x-auto my-8">
          <table
            className="w-full text-sm"
            style={{ borderCollapse: "separate", borderSpacing: "0 4px" }}
          >
            <thead>
              <tr>
                {["Industry", "First movement", "Maps 3-pack", "Page-1 organic", "Competition"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "#4F8EF7" }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                ["Plumbers", "3–5 weeks", "60–90 days", "90–120 days", "Very high"],
                ["Electricians", "4–6 weeks", "60–90 days", "90–120 days", "High"],
                ["Locksmiths", "2–4 weeks", "30–60 days", "60–90 days", "Medium-High"],
                ["Cleaners", "3–5 weeks", "45–75 days", "75–120 days", "Medium"],
                ["Builders", "5–8 weeks", "75–120 days", "90–150 days", "High"],
                ["Landscapers", "4–6 weeks", "60–90 days", "90–120 days", "Medium"],
                ["Dentists", "5–8 weeks", "60–120 days", "90–150 days", "High"],
                ["Solicitors", "6–10 weeks", "90–120 days", "120–180 days", "Very high"],
                ["Driving schools", "3–5 weeks", "45–75 days", "60–90 days", "Medium"],
                ["Accountants", "5–8 weeks", "75–120 days", "90–150 days", "High"],
              ].map(([industry, ...cells]) => (
                <tr
                  key={industry}
                  style={{ backgroundColor: "#111E33" }}
                >
                  <td
                    className="px-4 py-3 font-semibold rounded-l-lg"
                    style={{ color: "#E2E8F0" }}
                  >
                    {industry}
                  </td>
                  {cells.map((cell, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3 ${i === cells.length - 1 ? "rounded-r-lg" : ""}`}
                      style={{
                        color:
                          cell === "Very high"
                            ? "#FB923C"
                            : cell === "High"
                            ? "#FBBF24"
                            : "#8B9CB8",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm" style={{ color: "#4A5A6E" }}>
          Timelines assume a focused campaign starting from a clean GBP with correct categories. Add
          30–60 days for new businesses with no domain history or reviews.
        </p>
      </Section>

      <Section heading="Timeline by City Size">
        <p>
          Where you operate matters as much as what industry you are in. The same trade business
          will rank at different speeds in different UK cities — not because Google treats cities
          differently, but because the number and quality of local competitors varies dramatically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-8">
          {[
            {
              tier: "Major UK Cities",
              cities: "London, Manchester, Birmingham, Leeds, Bristol",
              color: "#FB923C",
              mapsPack: "90–150 days",
              organic: "120–180 days",
              note: "Expect 50–100+ competitors. Review count and citation depth matter most. Budget at least 6 months.",
            },
            {
              tier: "Mid-Size Cities",
              cities: "Leicester, Sheffield, Nottingham, Liverpool, Edinburgh",
              color: "#FBBF24",
              mapsPack: "60–90 days",
              organic: "90–120 days",
              note: "Typically 20–50 competitors. Good balance of achievable rankings and decent search volume.",
            },
            {
              tier: "Smaller Cities & Towns",
              cities: "Oxford, Preston, Derby, Stoke, Coventry outskirts",
              color: "#22C55E",
              mapsPack: "30–60 days",
              organic: "60–90 days",
              note: "Often under 20 active local competitors. Fastest ROI timelines. Rankings achievable quickly.",
            },
          ].map((tier) => (
            <div
              key={tier.tier}
              className="rounded-xl p-6"
              style={{ backgroundColor: "#111E33", border: `1px solid ${tier.color}30` }}
            >
              <div className="text-sm font-bold mb-1" style={{ color: tier.color }}>
                {tier.tier}
              </div>
              <div className="text-xs mb-4" style={{ color: "#4A5A6E" }}>
                {tier.cities}
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span style={{ color: "#8B9CB8" }}>Maps 3-pack</span>
                  <span style={{ color: "#E2E8F0" }}>{tier.mapsPack}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: "#8B9CB8" }}>Page-1 organic</span>
                  <span style={{ color: "#E2E8F0" }}>{tier.organic}</span>
                </div>
              </div>
              <p className="text-xs leading-snug" style={{ color: "#4A5A6E" }}>
                {tier.note}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section heading="Signs Your Local SEO Is Working (Before Rankings Move)">
        <p>
          Rankings are a lagging indicator. Google updates them after it has already observed other
          signals improving. These leading indicators tell you that your campaign is working — even
          before rankings jump:
        </p>
        <ul className="mt-5 space-y-3">
          {[
            "Google Business Profile views are increasing week-on-week (visible in GBP Insights)",
            "GBP search appearances — how often your listing appears in search — are rising",
            "More 'Directions' requests being made from your GBP listing",
            "Website traffic from Google organic is increasing in Google Analytics",
            "New reviews are appearing at the rate of 2–4 per month or more",
            "Citations are appearing in Google Search Console as referring domains",
          ].map((sign) => (
            <li key={sign} className="flex items-start gap-3">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22C55E" }}
              >
                ✓
              </span>
              <span className="text-sm" style={{ color: "#8B9CB8" }}>
                {sign}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="Red Flags That Your SEO Is Not Working">
        <p>
          Some local SEO campaigns produce no results because they focus on the wrong activities.
          After 90 days, you should be able to see measurable movement. If you cannot, investigate
          these common failure points:
        </p>
        <ul className="mt-5 space-y-3">
          {[
            "GBP still shows 0–5 reviews after 90 days — review generation has not been activated",
            "GBP primary category is wrong or too generic (e.g., 'Service establishment' instead of 'Plumber')",
            "NAP is inconsistent across citations — different phone numbers, address formats, or business names confuse Google",
            "No dedicated location or service pages on the website — GBP alone is insufficient for page-1 organic rankings",
            "Citations are built on low-quality or irrelevant directories — quantity without quality does not help",
            "GBP is suspended or has an unresolved pending verification — check the GBP dashboard for warnings",
          ].map((flag) => (
            <li key={flag} className="flex items-start gap-3">
              <span className="flex-shrink-0 text-sm mt-0.5" style={{ color: "#FB923C" }}>
                ✗
              </span>
              <span className="text-sm" style={{ color: "#8B9CB8" }}>
                {flag}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section heading="How to Speed Up Your Local SEO Timeline">
        <p>
          You cannot bypass Google&apos;s trust-building process, but you can compress the timeline
          by removing bottlenecks. These actions have the highest impact on ranking speed:
        </p>
        <ol className="mt-5 space-y-4">
          {[
            {
              step: "1. Fix your GBP completely on day one",
              detail:
                "An incomplete or miscategorised GBP is the most common cause of slow rankings. Correct primary category, accurate service areas, all attributes filled, 20+ photos, and a description using your core keywords.",
            },
            {
              step: "2. Start review generation immediately",
              detail:
                "Do not wait for rankings to improve before requesting reviews. Reviews are a prerequisite for ranking, not a reward for it. Request a review from every completed job from day one.",
            },
            {
              step: "3. Build citations on the highest-authority directories first",
              detail:
                "Focus the first 30 days on the 15–20 most authoritative directories for your industry — trade directories (Checkatrade, FMB, NICEIC), general directories (Yell, Yelp, Thomson Local), and Google's own ecosystem (Maps, Search Console).",
            },
            {
              step: "4. Create dedicated service and location pages",
              detail:
                "Your GBP alone will not rank for page-1 organic results. You need a website with dedicated service pages that target the exact searches you want to rank for, with location-specific content.",
            },
            {
              step: "5. Maintain consistent NAP across all listings",
              detail:
                "Business name, address, and phone number must be identical across your GBP, website, and all citations. Even minor variations (St vs Street, Ltd vs Limited) create inconsistency signals that slow Google's ability to verify your business.",
            },
          ].map((item) => (
            <li
              key={item.step}
              className="rounded-xl p-5"
              style={{
                backgroundColor: "#111E33",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="font-semibold mb-2" style={{ color: "#E2E8F0" }}>
                {item.step}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Internal CTA block */}
      <div
        className="rounded-xl p-7 my-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(79,142,247,0.12) 0%, transparent 70%)",
          border: "1px solid rgba(79,142,247,0.25)",
        }}
      >
        <h3
          className="text-xl font-extrabold mb-3"
          style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
        >
          Not sure where your business stands?
        </h3>
        <p className="text-sm mb-5" style={{ color: "#8B9CB8" }}>
          A free audit tells you exactly: how your GBP compares to the top 3 competitors in your
          area, how many citations you are missing, and what a realistic ranking timeline looks like
          for your specific market. No obligation.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/free-audit"
            className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "#4F8EF7" }}
          >
            Get My Free Audit →
          </Link>
          <Link
            href="/services/local-seo"
            className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: "rgba(79,142,247,0.10)",
              color: "#4F8EF7",
              border: "1px solid rgba(79,142,247,0.25)",
            }}
          >
            See Our Local SEO Service →
          </Link>
        </div>
      </div>

      <Section heading="The Bottom Line on Local SEO Timelines">
        <p>
          Local SEO is not a quick fix, but it is a predictable process when done correctly. Most UK
          service businesses see first measurable results within 30–60 days, meaningful ranking
          positions by month 3, and consistently strong enquiry volumes by month 6. The businesses
          that see results fastest are those that execute all three pillars simultaneously from day
          one: Google Business Profile optimisation, citation building, and review generation.
        </p>
        <p className="mt-4">
          The businesses that see results slowest are those that do one pillar well and neglect the
          others — excellent SEO with no reviews, or lots of reviews with an incomplete GBP. Local
          SEO works as a system, not a checklist. When the system runs correctly, the timeline is
          predictable.{" "}
          <Link
            href="/pricing"
            style={{ color: "#4F8EF7", textDecoration: "underline" }}
          >
            See our pricing plans
          </Link>{" "}
          for a complete local SEO service from £199/month.
        </p>
      </Section>
    </article>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2
        className="text-2xl font-extrabold mb-5"
        style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
      >
        {heading}
      </h2>
      <div style={{ color: "#8B9CB8" }} className="space-y-4 leading-relaxed text-sm sm:text-base">
        {children}
      </div>
    </section>
  );
}

// ─── Page component ───────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post || !post.hasFullPost) notFound();

  const postContent = getPostContent(slug);
  if (!postContent) notFound();

  const pageUrl = `${BASE_URL}/blog/${slug}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Blog", url: `${BASE_URL}/blog` },
    { name: post.title },
  ]);
  const webPageSchema = generateWebPageSchema(postContent.seoTitle, postContent.metaDescription, pageUrl);
  const faqSchema = generateFAQSchema(postContent.faqs);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: postContent.metaDescription,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Organization",
      name: "Small Business Marketing Professional",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Small Business Marketing Professional",
      url: BASE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div style={{ backgroundColor: "#080D1A" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, webPageSchema, faqSchema, articleSchema]),
        }}
      />

      {/* Breadcrumb */}
      <nav
        className="py-3 px-4"
        style={{ backgroundColor: "#0D1627", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-4xl mx-auto">
          <ol className="flex items-center gap-2 text-sm flex-wrap" style={{ color: "#8B9CB8" }}>
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li style={{ color: "#4A5A6E" }}>›</li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li style={{ color: "#4A5A6E" }}>›</li>
            <li className="truncate max-w-xs" style={{ color: "#E2E8F0" }}>{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Post header */}
      <header
        className="py-14 md:py-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,247,0.15) 0%, transparent 70%), #080D1A",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
              style={{ backgroundColor: post.categoryBg, color: post.categoryColor }}
            >
              {post.category}
            </span>
            <span className="text-xs" style={{ color: "#4A5A6E" }}>
              ⏱ {post.readTime} read · {post.date}
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
          >
            {post.title}
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#8B9CB8" }}>
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Post body */}
      <main className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {postContent.body}

          {/* FAQ Section */}
          <section className="mt-12 mb-10">
            <h2
              className="text-2xl font-extrabold mb-8"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {postContent.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: "#111E33",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-semibold text-base select-none"
                    style={{ color: "#E2E8F0" }}
                  >
                    <span>{faq.question}</span>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform group-open:rotate-45"
                      style={{ backgroundColor: "rgba(79,142,247,0.15)", color: "#4F8EF7" }}
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section
          className="py-14 md:py-20"
          style={{ backgroundColor: "#0D1627", borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-extrabold mb-8"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              More from the Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{
                    backgroundColor: "#111E33",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit"
                    style={{
                      backgroundColor: related.categoryBg,
                      color: related.categoryColor,
                    }}
                  >
                    {related.category}
                  </span>
                  <h3
                    className="text-sm font-bold mb-3 leading-snug flex-1"
                    style={{ color: "#E2E8F0" }}
                  >
                    {related.title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <span className="text-xs" style={{ color: "#4A5A6E" }}>
                      ⏱ {related.readTime} read
                    </span>
                    {related.hasFullPost ? (
                      <Link
                        href={`/blog/${related.slug}`}
                        className="text-sm font-semibold hover:underline transition-colors"
                        style={{ color: "#4F8EF7" }}
                      >
                        Read →
                      </Link>
                    ) : (
                      <span className="text-xs" style={{ color: "#4A5A6E" }}>
                        Coming soon
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

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
            Ready to start ranking?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8B9CB8" }}>
            Get a free audit of your current online presence — including a competitive ranking
            timeline specific to your market. No obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: "#4F8EF7" }}
            >
              Get My FREE Audit →
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
        </div>
      </section>
    </div>
  );
}
