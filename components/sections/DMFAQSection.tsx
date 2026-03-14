"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does digital marketing for small businesses cost?",
    a: "Digital marketing services start from £199/month for basic local SEO, with comprehensive packages ranging from £500-1500+/month depending on services. We offer flexible month-to-month plans—no long contracts. Many small businesses see ROI within 30-90 days, making the investment worthwhile.",
  },
  {
    q: "How long does it take to see results from digital marketing?",
    a: "Most small businesses see measurable results within 30-90 days. Local SEO and Google Ads can start driving traffic immediately, though organic SEO rankings typically improve over 8-12 weeks. The exact timeline depends on your competition and starting point.",
  },
  {
    q: "Do I need all services or can I start with one?",
    a: "You can absolutely start with one service and add more later. Many small businesses begin with local SEO or Google Ads, then add services like social media or web design as they grow. We'll recommend what works best for your goals.",
  },
  {
    q: "What if my business is new or small with no online presence?",
    a: "Perfect—we work with new businesses all the time. Starting from scratch is actually easier because we can build a strong foundation from day one. We'll handle everything from website setup to Google Business Profile optimization.",
  },
  {
    q: "Will digital marketing work for my type of business?",
    a: "We specialize in service businesses (plumbers, electricians, dentists, cleaners, locksmiths, etc.) and have proven success across 50+ industries and locations. If your customers search Google for your services, digital marketing will work.",
  },
  {
    q: "Can you guarantee #1 Google rankings?",
    a: "No legitimate agency guarantees #1 rankings—anyone who does is being dishonest. But we guarantee we'll improve your visibility and attract more customers. We focus on results (leads and sales), not just rankings.",
  },
  {
    q: "What if I want to cancel? Are there penalties?",
    a: "No. All our plans are month-to-month with no contracts. If you're not happy with results, you can cancel anytime with 30 days notice. No penalties, no hidden fees.",
  },
  {
    q: "How do I know if digital marketing is working?",
    a: "We provide detailed weekly reports showing: leads generated, customer calls/messages, website traffic, conversions, and ROI. You'll see exactly what's working and how many customers you're getting from each channel.",
  },
  {
    q: "Do I need a website to start with digital marketing?",
    a: "Ideally yes, but not always. If you don't have a website, we can build one for you (included in some packages). If you have an outdated website, we'll optimize it for conversions.",
  },
  {
    q: "Can you help if I've had bad experiences with other agencies?",
    a: "Absolutely. Many of our clients came to us after bad experiences with other agencies charging too much, delivering nothing, or using shady tactics. We're transparent, focus on real results, and put your business first.",
  },
];

export default function DMFAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ backgroundColor: "#0F172A" }} className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            FAQ: Digital Marketing for Small Businesses
          </h2>
          <p
            className="text-lg"
            style={{ color: "#8B9CB8" }}
          >
            Common questions about getting started with digital marketing.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-xl overflow-hidden border transition-all duration-200"
              style={{
                backgroundColor: "#111E33",
                borderColor:
                  open === idx
                    ? "rgba(79, 142, 247, 0.4)"
                    : "rgba(79, 142, 247, 0.15)",
              }}
              open={open === idx}
              onToggle={() => setOpen(open === idx ? null : idx)}
            >
              <summary
                className="p-5 md:p-6 cursor-pointer flex items-center justify-between"
                style={{ color: "#E2E8F0" }}
              >
                <span className="font-semibold text-base md:text-lg pr-4">
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    transform: open === idx ? "rotate(180deg)" : "rotate(0)",
                    color: "#4F8EF7",
                  }}
                >
                  ▼
                </span>
              </summary>

              <div
                className="px-5 md:px-6 pb-5 md:pb-6 border-t"
                style={{ borderTopColor: "rgba(79, 142, 247, 0.2)" }}
              >
                <p
                  className="leading-relaxed text-sm md:text-base"
                  style={{ color: "#8B9CB8" }}
                >
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 md:mt-16 p-8 rounded-2xl text-center"
          style={{
            backgroundColor: "rgba(79, 142, 247, 0.08)",
            border: "1px solid rgba(79, 142, 247, 0.2)",
          }}
        >
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: "#E2E8F0" }}
          >
            Still have questions?
          </h3>
          <p
            className="mb-6"
            style={{ color: "#8B9CB8" }}
          >
            Get personalized advice for your business with a free consultation.
          </p>
          <a
            href="https://wa.me/923474825228?text=Hi!%20I%20have%20questions%20about%20digital%20marketing%20for%20my%20small%20business.%20Can%20we%20chat%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 rounded-lg font-semibold transition-all duration-200"
            style={{
              backgroundColor: "#4F8EF7",
              color: "#FFF",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#3B82F6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#4F8EF7";
            }}
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
