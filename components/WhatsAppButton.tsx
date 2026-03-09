"use client";

import { useState } from "react";

const WA_LINK =
  "https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F";

const WhatsAppIcon = ({ size = 28, color = "white" }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface WhatsAppButtonProps {
  variant?: "floating" | "inline";
}

export default function WhatsAppButton({ variant = "floating" }: WhatsAppButtonProps) {
  const [hovered, setHovered] = useState(false);

  if (variant === "inline") {
    return (
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
        style={{ backgroundColor: "#22C55E" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <WhatsAppIcon size={20} />
        <span>WhatsApp 03474825228</span>
      </a>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {hovered && (
        <div
          className="mb-1 px-3 py-2 rounded-lg text-xs font-medium text-white shadow-lg max-w-[200px] text-center animate-fade-slide"
          style={{ backgroundColor: "#111E33", border: "1px solid rgba(255,255,255,0.10)", color: "#E2E8F0" }}
        >
          💬 Chat on WhatsApp — Usually replies in minutes
        </div>
      )}

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center gap-2 rounded-full text-white transition-all duration-300 cursor-pointer group"
        style={{
          backgroundColor: "#22C55E",
          height: "56px",
          minWidth: "56px",
          padding: hovered ? "0 20px 0 14px" : "0",
          justifyContent: hovered ? "flex-start" : "center",
          boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-pulse-ring"
          style={{ backgroundColor: "#22C55E" }}
        />
        <WhatsAppIcon size={28} />
        {hovered && (
          <span className="font-semibold text-sm whitespace-nowrap animate-fade-slide">
            Chat With Me
          </span>
        )}

        {/* Notification badge */}
        <span
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center"
          style={{ fontSize: "10px" }}
        >
          1
        </span>
      </a>
    </div>
  );
}
