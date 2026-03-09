const testimonials = [
  {
    quote:
      "Within 8 weeks my plumbing business went from page 4 to position 2 in Birmingham. I'm getting 3x more calls every week. Best investment I've made for my business.",
    name: "James T.",
    role: "Plumber, Birmingham",
  },
  {
    quote:
      "I was sceptical at first — I'd been burnt by expensive agencies before. But the results speak for themselves. My dental clinic is now fully booked 3 weeks in advance. Incredible value.",
    name: "Dr. Sarah M.",
    role: "Dentist, Manchester",
  },
  {
    quote:
      "Finally someone who explains everything clearly and actually delivers. My cleaning company now ranks top 3 in Leeds for every service I offer. Phone hasn't stopped ringing.",
    name: "Michelle K.",
    role: "Cleaning Company, Leeds",
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section style={{ backgroundColor: "#080D1A" }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            What UK Business Owners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-8 relative flex flex-col"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#4F8EF7" opacity="0.2">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>

              <StarRow />

              <blockquote className="text-sm leading-relaxed flex-1 mb-6 italic" style={{ color: "#E2E8F0" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div>
                <div className="font-semibold text-sm" style={{ color: "#E2E8F0" }}>
                  — {t.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#8B9CB8" }}>
                  {t.role}
                </div>
                <div
                  className="mt-2 inline-block text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#22C55E" }}
                >
                  ✅ Verified Client
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
