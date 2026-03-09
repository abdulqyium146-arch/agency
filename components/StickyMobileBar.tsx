export default function StickyMobileBar() {
  const WA_LINK =
    "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex"
      style={{
        backgroundColor: "#0D1627",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 -4px 16px rgba(0,0,0,0.3)",
      }}
    >
      <a
        href="tel:03474825228"
        className="flex-1 flex items-center justify-center gap-2 py-4 font-semibold text-sm transition-colors"
        style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#E2E8F0" }}
      >
        <span>📞</span>
        <span>Call Now</span>
      </a>
      <div className="w-px my-2" style={{ backgroundColor: "rgba(255,255,255,0.10)" }} />
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-4 font-semibold text-sm text-white transition-colors"
        style={{ backgroundColor: "#22C55E" }}
      >
        <span>💬</span>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
