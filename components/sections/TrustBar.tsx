const items = [
  { icon: "🏆", value: "20 Years", label: "Experience" },
  { icon: "👥", value: "150+", label: "Businesses Helped" },
  { icon: "⭐", value: "4.9/5", label: "Google Rating" },
  { icon: "💰", value: "£2.3M+", label: "Revenue Generated" },
  { icon: "🔒", value: "No Lock-in", label: "Contracts" },
];

export default function TrustBar() {
  return (
    <div
      className="py-6 overflow-x-auto"
      style={{
        backgroundColor: "#0D1627",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-w-max lg:min-w-0 lg:justify-between gap-6 lg:gap-4">
          {items.map((item, i) => (
            <div key={item.value} className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div
                    className="font-extrabold text-lg leading-none"
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      color: "#E2E8F0",
                    }}
                  >
                    {item.value}
                  </div>
                  <div className="text-xs font-medium mt-0.5" style={{ color: "#8B9CB8" }}>
                    {item.label}
                  </div>
                </div>
              </div>
              {i < items.length - 1 && (
                <div className="w-px h-10 lg:block" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
