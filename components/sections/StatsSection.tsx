"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "247", suffix: "%", label: "Average Traffic Increase" },
  { value: "150", suffix: "+", label: "UK Businesses Helped" },
  { value: "£2.3M", suffix: "", label: "Client Revenue Generated" },
  { value: "5", suffix: "", label: "Years of Expertise" },
  { value: "4.9", suffix: "★", label: "Average Client Rating" },
  { value: "97", suffix: "%", label: "Client Retention Rate" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isSpecial = stat.value.startsWith("£") || stat.value.includes(".");
  const numericPart = isSpecial ? stat.value : parseInt(stat.value);
  const count = useCountUp(
    typeof numericPart === "number" ? numericPart : 0,
    1500,
    active
  );

  const displayValue = isSpecial
    ? (active ? stat.value : "0")
    : `${count}`;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6"
    >
      <div
        className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight"
        style={{
          fontFamily: "var(--font-mono, monospace)",
          color: "#4F8EF7",
          textShadow: "0 0 30px rgba(79,142,247,0.6)",
        }}
      >
        {displayValue}{stat.suffix}
      </div>
      <div className="text-sm font-medium" style={{ color: "#8B9CB8" }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section style={{ backgroundColor: "#050A14" }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex">
              <StatCard stat={stat} />
              {i < stats.length - 1 && (
                <div
                  className="hidden lg:block w-px self-center h-12"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
