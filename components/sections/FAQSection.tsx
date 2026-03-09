"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly will I see results?",
    a: "Most clients see measurable improvement in Google rankings within 4–8 weeks. Significant traffic and lead increases typically happen by month 3. I'll be transparent with you throughout.",
  },
  {
    q: "Do I need to sign a long contract?",
    a: "Never. All plans are month-to-month. I earn your loyalty with results, not contracts. Cancel anytime with 30 days notice.",
  },
  {
    q: "What makes you different from an SEO agency?",
    a: "You work directly with me — a senior expert with 20 years experience. No junior staff, no account managers, no outsourcing. Just direct, expert work on your business.",
  },
  {
    q: "Do you work with businesses outside your local area?",
    a: "Yes — I work with service businesses all across the UK remotely. My high-authority domain helps rank businesses in any UK city.",
  },
  {
    q: "What's included in the free audit?",
    a: "A full review of your Google Business Profile, website SEO health, local rankings, competitor analysis, and a personalised action plan. Worth £299, completely free, no obligation.",
  },
  {
    q: "Can I message you on WhatsApp before signing up?",
    a: "Absolutely — and I encourage it! WhatsApp me on 03474825228 and I'll give you honest advice about what your business actually needs.",
  },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="overflow-hidden transition-all"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left transition-colors"
        aria-expanded={open}
      >
        <span
          className="font-semibold text-base pr-4"
          style={{ color: open ? "#4F8EF7" : "#E2E8F0" }}
        >
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          style={{
            color: "#4F8EF7",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        style={{
          maxHeight: open ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div className="pb-5">
          <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
