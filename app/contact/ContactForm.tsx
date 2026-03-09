"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-900";
  const inputStyle: React.CSSProperties = {
    borderColor: "rgba(255,255,255,0.10)",
    color: "#E2E8F0",
    backgroundColor: "#0D1627",
  };
  const labelClass = "block text-sm font-semibold mb-1.5";
  const labelStyle: React.CSSProperties = { color: "#E2E8F0" };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[400px]"
        style={{
          backgroundColor: "rgba(34,197,94,0.10)",
          border: "1px solid rgba(34,197,94,0.25)",
        }}
      >
        <div className="text-6xl mb-5">✅</div>
        <h3
          className="text-2xl font-extrabold mb-3"
          style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
        >
          Message Sent!
        </h3>
        <p className="text-base" style={{ color: "#8B9CB8" }}>
          I&apos;ll get back to you within 2 hours during business hours.
          <br />
          Feel free to WhatsApp me for a faster reply.
        </p>
        <a
          href="https://wa.me/923474825228?text=Hi!%20I%20found%20your%20website%20and%20I%27m%20interested%20in%20growing%20my%20business%20online.%20Can%20you%20help%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: "#22C55E" }}
        >
          💬 Open WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-8"
      style={{
        backgroundColor: "#111E33",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <h2
        className="text-xl font-extrabold mb-1"
        style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
      >
        Send a Message
      </h2>
      <p className="text-sm mb-6" style={{ color: "#8B9CB8" }}>
        Fill in the form and I&apos;ll get back to you within 2 hours.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Full Name */}
        <div>
          <label className={labelClass} style={labelStyle}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="John Smith"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelClass} style={labelStyle}>
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@yourbusiness.co.uk"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass} style={labelStyle}>
            Phone{" "}
            <span className="text-xs font-normal" style={{ color: "#8B9CB8" }}>
              (optional)
            </span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="e.g. 07700 900000"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Business Name */}
        <div>
          <label className={labelClass} style={labelStyle}>
            Business Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="businessName"
            placeholder="Your Business Name Ltd"
            required
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Message */}
        <div>
          <label className={labelClass} style={labelStyle}>
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell me about your business and what you're hoping to achieve..."
            required
            className={inputClass}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-lg mt-2"
          style={{ backgroundColor: "#4F8EF7" }}
        >
          Send Message →
        </button>
      </form>

      <p className="text-center text-xs mt-5" style={{ color: "#4A5A6E" }}>
        🔒 Your details are safe. We never share or spam.
      </p>
    </div>
  );
}
