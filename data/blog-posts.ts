export interface BlogPostMeta {
  slug: string;
  title: string;
  category: string;
  categoryColor: string;
  categoryBg: string;
  readTime: string;
  date: string;
  dateISO: string;
  excerpt: string;
  hasFullPost: boolean;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "how-long-does-local-seo-take",
    title: "How Long Does Local SEO Take? Realistic Timelines for UK Service Businesses",
    category: "Local SEO",
    categoryColor: "#4F8EF7",
    categoryBg: "rgba(79,142,247,0.12)",
    readTime: "9 min",
    date: "12 Sep 2025",
    dateISO: "2025-09-12",
    excerpt:
      "Local SEO takes 30–90 days to show first results and 6–12 months to reach full strength. Here are realistic timelines by industry and city — plus the factors that speed results up or slow them down.",
    hasFullPost: true,
  },
  {
    slug: "how-to-rank-on-google-maps",
    title: "How to Rank #1 on Google Maps — The Complete Guide for UK Tradespeople",
    category: "Local SEO",
    categoryColor: "#4F8EF7",
    categoryBg: "rgba(79,142,247,0.12)",
    readTime: "8 min",
    date: "15 Jan 2025",
    dateISO: "2025-01-15",
    excerpt:
      "Google Maps rankings are crucial for local service businesses. Here's the exact strategy used to rank 150+ UK businesses in the 3-pack — with no black hat tactics.",
    hasFullPost: false,
  },
  {
    slug: "google-business-profile-mistakes",
    title: "Why Your Google Business Profile Is Killing Your Leads (And How to Fix It)",
    category: "Google Business Profile",
    categoryColor: "#FB923C",
    categoryBg: "rgba(251,146,60,0.10)",
    readTime: "5 min",
    date: "28 Feb 2025",
    dateISO: "2025-02-28",
    excerpt:
      "Most business owners set up their Google Business Profile once and forget it. Here are the 7 critical optimisations most businesses are missing — and how to fix each one.",
    hasFullPost: false,
  },
  {
    slug: "local-seo-vs-google-ads",
    title: "Local SEO vs Google Ads: Which Should UK Service Businesses Use?",
    category: "Strategy",
    categoryColor: "#22C55E",
    categoryBg: "rgba(34,197,94,0.12)",
    readTime: "6 min",
    date: "10 Mar 2025",
    dateISO: "2025-03-10",
    excerpt:
      "The age-old question: SEO or PPC? The answer depends on your budget, timeline, and competition level. Here is a direct comparison for UK service businesses.",
    hasFullPost: false,
  },
  {
    slug: "get-5-star-google-reviews",
    title: "The Complete Guide to Getting 5-Star Google Reviews (Without Spamming Customers)",
    category: "Reputation",
    categoryColor: "#FBBF24",
    categoryBg: "rgba(251,191,36,0.10)",
    readTime: "4 min",
    date: "22 Apr 2025",
    dateISO: "2025-04-22",
    excerpt:
      "Online reviews are the #1 trust signal for local service businesses. Here is an ethical, effective system for generating a steady stream of 5-star reviews.",
    hasFullPost: false,
  },
  {
    slug: "how-much-does-local-seo-cost-uk",
    title: "How Much Does Local SEO Cost in the UK? (Honest Breakdown for 2025)",
    category: "Pricing",
    categoryColor: "#A78BFA",
    categoryBg: "rgba(167,139,250,0.12)",
    readTime: "5 min",
    date: "5 May 2025",
    dateISO: "2025-05-05",
    excerpt:
      "Local SEO pricing in the UK ranges from £50/month to £5,000+. Here is an honest breakdown of what you actually need — and what is a waste of money.",
    hasFullPost: false,
  },
  {
    slug: "birmingham-plumber-page-1-case-study",
    title: "Case Study: How a Birmingham Plumber Went from Page 4 to Position #1 in 8 Weeks",
    category: "Case Study",
    categoryColor: "#22D3EE",
    categoryBg: "rgba(34,211,238,0.10)",
    readTime: "7 min",
    date: "18 Jun 2025",
    dateISO: "2025-06-18",
    excerpt:
      "A real-world breakdown of exactly how a plumbing business went from invisible to dominant in Birmingham's competitive local search market within 8 weeks.",
    hasFullPost: false,
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogSlugs = blogPosts.map((p) => p.slug);
