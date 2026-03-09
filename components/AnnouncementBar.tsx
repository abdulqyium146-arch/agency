"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("announcement-dismissed");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("announcement-dismissed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="relative z-50 px-4 py-2.5 text-sm"
      style={{
        background: "linear-gradient(90deg, #1a1060 0%, #0f1a40 50%, #1a1060 100%)",
        borderLeft: "4px solid #FB923C",
        color: "#E2E8F0",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-3 flex-wrap text-center">
          <span className="font-medium">
            🎉 Limited Offer: Free SEO Audit Worth £299 — Only 5 Spots Left This Month!
          </span>
          <Link
            href="/free-audit"
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-colors whitespace-nowrap"
            style={{ color: "#FB923C", border: "1px solid #FB923C" }}
          >
            Claim Free Audit →
          </Link>
        </div>
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="flex-shrink-0 p-1 rounded transition-colors"
          style={{ color: "#8B9CB8" }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
