import Link from "next/link";

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

export default function FinalCTASection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,142,247,0.10) 0%, #080D1A 70%)",
        borderTop: "1px solid rgba(79,142,247,0.20)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="gradient-text text-3xl sm:text-5xl font-extrabold mb-6"
          style={{ fontFamily: "var(--font-display, sans-serif)" }}
        >
          Ready to Get More Customers?
        </h2>
        <p
          className="text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: "#8B9CB8" }}
        >
          Join 150+ UK business owners who are already growing with expert local digital marketing.
          Start with a completely free audit — no obligation, no hard sell.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/free-audit"
            className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl text-base"
            style={{ backgroundColor: "#4F8EF7" }}
          >
            Get My FREE Audit →
          </Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-xl text-base"
            style={{ border: "2px solid rgba(255,255,255,0.3)", backgroundColor: "transparent" }}
          >
            💬 WhatsApp Me Now
          </a>
        </div>
      </div>
    </section>
  );
}
