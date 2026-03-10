import Link from "next/link";

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

const helpfulLinks = [
  { label: "Services", href: "/services", icon: "🚀" },
  { label: "Pricing", href: "/pricing", icon: "💰" },
  { label: "Industries", href: "/industries", icon: "🏢" },
  { label: "Contact", href: "/contact", icon: "💬" },
];

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      style={{ backgroundColor: "#080D1A" }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#4F8EF7", filter: "blur(80px)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "#4F8EF7", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div
          className="text-8xl sm:text-9xl font-bold mb-4 leading-none"
          style={{
            fontFamily: "var(--font-mono, monospace)",
            color: "#4F8EF7",
          }}
        >
          404
        </div>

        {/* Divider */}
        <div
          className="w-20 h-1 mx-auto mb-8 rounded-full"
          style={{ backgroundColor: "#4F8EF7", opacity: 0.5 }}
        />

        {/* Heading */}
        <h1
          className="text-3xl sm:text-5xl font-extrabold mb-5"
          style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
        >
          Page Not Found
        </h1>

        {/* Subtext */}
        <p
          className="text-lg mb-10 leading-relaxed max-w-md mx-auto"
          style={{ color: "#8B9CB8" }}
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back on track.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: "#4F8EF7" }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style={{
              border: "2px solid rgba(255,255,255,0.3)",
              backgroundColor: "transparent",
              color: "#E2E8F0",
            }}
          >
            Get Free Audit
          </Link>
        </div>

        {/* Helpful Links Grid */}
        <p
          className="text-sm uppercase tracking-widest mb-5 font-semibold"
          style={{ color: "#4A5A6E" }}
        >
          Or explore these pages
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {helpfulLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl transition-all hover:-translate-y-1"
              style={{
                backgroundColor: "#111E33",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span className="text-2xl">{link.icon}</span>
              <span
                className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors"
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* WhatsApp fallback */}
        <div className="mt-10">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-white"
            style={{ color: "#4A5A6E" }}
          >
            💬 Need help? WhatsApp us directly →
          </a>
        </div>
      </div>
    </div>
  );
}
