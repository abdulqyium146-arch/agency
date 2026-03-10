"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(8,13,26,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5" aria-label="SBMP — Home">
              <Image
                src="/sbmp-logo.svg"
                alt="SBMP Logo"
                width={36}
                height={36}
                priority
                className="flex-shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-extrabold tracking-tight text-white"
                  style={{ fontFamily: "var(--font-display, sans-serif)" }}
                >
                  SBMP
                </span>
                <span className="text-xs font-medium" style={{ color: "#8B9CB8" }}>
                  Local Digital Marketing
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-white"
                  style={{ color: "#8B9CB8" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/free-audit"
                className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get FREE Audit
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#E2E8F0" }}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div
            className="absolute inset-y-0 right-0 w-full max-w-sm flex flex-col animate-fade-slide"
            style={{
              backgroundColor: "#0D1627",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <Image src="/sbmp-logo.svg" alt="SBMP Logo" width={30} height={30} />
                <span
                  className="text-xl font-extrabold text-white"
                  style={{ fontFamily: "var(--font-display, sans-serif)" }}
                >
                  SBMP
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg transition-colors"
                style={{ color: "#E2E8F0" }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 px-6 py-6 flex flex-col gap-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 rounded-lg text-base font-medium transition-colors"
                  style={{ color: "#8B9CB8" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#E2E8F0"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#8B9CB8"; e.currentTarget.style.backgroundColor = "transparent"; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div
              className="px-6 py-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Link
                href="/free-audit"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full py-3 rounded-lg text-base font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                Get FREE Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
