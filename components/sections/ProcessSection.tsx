const steps = [
  {
    number: "1",
    icon: "🔍",
    title: "Free Audit",
    description: "I analyse your current online presence & competitors",
  },
  {
    number: "2",
    icon: "📋",
    title: "Strategy",
    description: "I build a custom plan for YOUR business & location",
  },
  {
    number: "3",
    icon: "⚙️",
    title: "Execution",
    description: "I implement everything — you focus on your business",
  },
  {
    number: "4",
    icon: "📈",
    title: "Results",
    description: "You get more calls, more customers, more revenue",
  },
];

export default function ProcessSection() {
  return (
    <section style={{ backgroundColor: "#0D1627" }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              color: "#E2E8F0",
            }}
          >
            How It Works — Start Getting Results in 4 Simple Steps
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px"
            style={{
              left: "12.5%",
              right: "12.5%",
              borderTop: "2px dashed rgba(79,142,247,0.25)",
              top: "40px",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center relative">
                {/* Number circle */}
                <div
                  className="w-20 h-20 rounded-full flex flex-col items-center justify-center mb-4 relative z-10"
                  style={{
                    backgroundColor: "#4F8EF7",
                    boxShadow: "0 4px 16px rgba(79,142,247,0.35)",
                  }}
                >
                  <span className="text-2xl">{step.icon}</span>
                  <span
                    className="text-xs font-bold text-white opacity-80"
                    style={{ fontFamily: "var(--font-mono, monospace)" }}
                  >
                    0{step.number}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-2" style={{ color: "#E2E8F0" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8B9CB8" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
