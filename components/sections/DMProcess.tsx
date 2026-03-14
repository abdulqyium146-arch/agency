"use client";

export default function DMProcess() {
  const steps = [
    {
      number: 1,
      title: "Free Audit & Strategy",
      description:
        "We analyze your business, competition, and digital presence. You get a personalized strategy showing exactly what will work for your small business.",
      timeline: "Week 1",
    },
    {
      number: 2,
      title: "Implementation",
      description:
        "We set up your digital marketing campaigns, optimize your website, build your Google Business Profile, and launch your ads—you focus on running your business.",
      timeline: "Weeks 2-3",
    },
    {
      number: 3,
      title: "Optimization & Growth",
      description:
        "We monitor performance, make adjustments based on data, and continuously improve your campaigns. You start seeing leads and conversions.",
      timeline: "Weeks 4-12",
    },
    {
      number: 4,
      title: "Scale & Maintain",
      description:
        "Once we've found what works, we scale it. Regular reporting keeps you informed. Your digital marketing becomes a reliable lead generation machine.",
      timeline: "Ongoing",
    },
  ];

  return (
    <section style={{ backgroundColor: "#0F172A" }} className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            Our 4-Step Digital Marketing Process
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "#8B9CB8" }}
          >
            From strategy to results—here's exactly how we help small businesses grow with digital marketing.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2"
            style={{
              backgroundColor: "rgba(79, 142, 247, 0.2)",
            }}
          />

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col h-full">
                {/* Step card */}
                <div
                  className="p-6 rounded-2xl flex-1 relative z-10"
                  style={{
                    backgroundColor: "#111E33",
                    border: "2px solid rgba(79, 142, 247, 0.2)",
                  }}
                >
                  {/* Step number circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4 font-extrabold text-lg"
                    style={{
                      backgroundColor: "#4F8EF7",
                      color: "#FFF",
                      fontFamily: "var(--font-mono, monospace)",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: "#E2E8F0" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: "#8B9CB8" }}
                  >
                    {step.description}
                  </p>

                  {/* Timeline tag */}
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(79, 142, 247, 0.15)",
                      color: "#4F8EF7",
                    }}
                  >
                    {step.timeline}
                  </div>
                </div>

                {/* Arrow connector (mobile/tablet only) */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="text-2xl" style={{ color: "#4F8EF7" }}>
                      ↓
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "📞",
              title: "Direct Access",
              desc: "You work directly with me—not a junior staff member or account manager.",
            },
            {
              icon: "📊",
              title: "Weekly Updates",
              desc: "Get transparent reporting every week showing leads, conversions, and ROI.",
            },
            {
              icon: "💬",
              title: "Quick Support",
              desc: "Message me on WhatsApp anytime with questions. I respond within hours.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl text-center"
              style={{
                backgroundColor: "rgba(79, 142, 247, 0.08)",
                border: "1px solid rgba(79, 142, 247, 0.2)",
              }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4
                className="font-semibold mb-2"
                style={{ color: "#E2E8F0" }}
              >
                {item.title}
              </h4>
              <p style={{ color: "#8B9CB8" }} className="text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <p
            className="mb-6 text-lg"
            style={{ color: "#E2E8F0" }}
          >
            Ready to start your digital marketing journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/free-audit"
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              style={{
                backgroundColor: "#4F8EF7",
                color: "#FFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3B82F6";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#4F8EF7";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book Your Free Audit
            </a>
            <a
              href="https://wa.me/923474825228?text=Hi!%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20small%20business.%20What%20services%20would%20help%20me%20most%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 border-2"
              style={{
                borderColor: "#4F8EF7",
                color: "#4F8EF7",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(79, 142, 247, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
