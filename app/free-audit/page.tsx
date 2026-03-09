"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import WhatsAppButton from "@/components/WhatsAppButton";

const ukPhoneRegex = /^0\d{10}$/;

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(ukPhoneRegex, "Please enter a valid UK phone number (starts with 0, 11 digits)"),
  businessName: z.string().min(1, "Business name is required"),
  businessType: z.string().min(1, "Please select your business type"),
  city: z.string().min(1, "Please select your city"),
  mainGoal: z.string().min(1, "Please select your main goal"),
  monthlyBudget: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const businessTypes = [
  "Plumber",
  "Electrician",
  "Dentist",
  "Solicitor",
  "Estate Agent",
  "Cleaning Company",
  "Builder",
  "Landscaper",
  "Driving School",
  "Physiotherapist",
  "Locksmith",
  "Accountant",
  "Other",
];

const cities = [
  "Birmingham",
  "Manchester",
  "Leeds",
  "Sheffield",
  "Bristol",
  "Leicester",
  "Nottingham",
  "Liverpool",
  "Newcastle",
  "Cardiff",
  "Edinburgh",
  "Glasgow",
  "Brighton",
  "Southampton",
  "Coventry",
  "Hull",
  "Derby",
  "Stoke",
  "Preston",
  "Oxford",
];

const goals = [
  "Get more calls & leads",
  "Improve Google rankings",
  "New website needed",
  "Social media help",
  "Not sure — need advice",
];

const budgets = ["Under £200", "£200-£400", "£400-£700", "£700+"];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-400">{message}</p>;
}

export default function FreeAuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmittedName(data.fullName);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none";
  const inputStyle: React.CSSProperties = {
    borderColor: "rgba(255,255,255,0.10)",
    color: "#E2E8F0",
    backgroundColor: "#0D1627",
  };
  const inputFocusStyle = `focus:border-blue-500 focus:ring-2 focus:ring-blue-900`;
  const labelClass = "block text-sm font-semibold mb-1.5";
  const labelStyle: React.CSSProperties = { color: "#E2E8F0" };

  return (
    <div style={{ backgroundColor: "#080D1A" }} className="min-h-screen py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white mb-4"
            style={{ backgroundColor: "#22C55E" }}
          >
            🎁 Free SEO Audit — Worth £299
          </div>
          <h1
            className="text-3xl sm:text-4xl font-extrabold mb-4 gradient-text"
            style={{
              fontFamily: "var(--font-display, sans-serif)",
            }}
          >
            Claim Your Free SEO Audit
          </h1>
          <p className="text-base" style={{ color: "#8B9CB8" }}>
            Fill in the form below and I&apos;ll send you a comprehensive audit of your online presence — completely free, no obligation.
          </p>
        </div>

        {submitted ? (
          /* Success State */
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: "rgba(34,197,94,0.10)",
              border: "1px solid rgba(34,197,94,0.25)",
            }}
          >
            <div className="text-5xl mb-4">🎉</div>
            <h2
              className="text-2xl font-extrabold mb-3"
              style={{ fontFamily: "var(--font-display, sans-serif)", color: "#E2E8F0" }}
            >
              Thank you, {submittedName}!
            </h2>
            <p className="text-base mb-6" style={{ color: "#8B9CB8" }}>
              I&apos;ll review your business and WhatsApp you within 2 hours with your free audit. Keep an eye on your phone!
            </p>
            <WhatsAppButton variant="inline" />
          </div>
        ) : (
          /* Form */
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "#111E33",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label className={labelClass} style={labelStyle}>
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  {...register("fullName")}
                />
                <FieldError message={errors.fullName?.message} />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass} style={labelStyle}>
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@yourbusiness.co.uk"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  {...register("email")}
                />
                <FieldError message={errors.email?.message} />
              </div>

              {/* Phone */}
              <div>
                <label className={labelClass} style={labelStyle}>
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="07700 900000"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  {...register("phone")}
                />
                <FieldError message={errors.phone?.message} />
              </div>

              {/* Business Name */}
              <div>
                <label className={labelClass} style={labelStyle}>
                  Business Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Business Name Ltd"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  {...register("businessName")}
                />
                <FieldError message={errors.businessName?.message} />
              </div>

              {/* Business Type */}
              <div>
                <label className={labelClass} style={labelStyle}>
                  Business Type <span className="text-red-400">*</span>
                </label>
                <select
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  {...register("businessType")}
                  defaultValue=""
                >
                  <option value="" disabled style={{ backgroundColor: "#0D1627", color: "#4A5A6E" }}>
                    Select your business type
                  </option>
                  {businessTypes.map((t) => (
                    <option key={t} value={t} style={{ backgroundColor: "#0D1627" }}>
                      {t}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.businessType?.message} />
              </div>

              {/* City */}
              <div>
                <label className={labelClass} style={labelStyle}>
                  Your City <span className="text-red-400">*</span>
                </label>
                <select
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  {...register("city")}
                  defaultValue=""
                >
                  <option value="" disabled style={{ backgroundColor: "#0D1627", color: "#4A5A6E" }}>
                    Select your city
                  </option>
                  {cities.map((c) => (
                    <option key={c} value={c} style={{ backgroundColor: "#0D1627" }}>
                      {c}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.city?.message} />
              </div>

              {/* Main Goal */}
              <div>
                <label className={labelClass} style={labelStyle}>
                  Main Goal <span className="text-red-400">*</span>
                </label>
                <select
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  {...register("mainGoal")}
                  defaultValue=""
                >
                  <option value="" disabled style={{ backgroundColor: "#0D1627", color: "#4A5A6E" }}>
                    Select your main goal
                  </option>
                  {goals.map((g) => (
                    <option key={g} value={g} style={{ backgroundColor: "#0D1627" }}>
                      {g}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.mainGoal?.message} />
              </div>

              {/* Monthly Budget */}
              <div>
                <label className={labelClass} style={labelStyle}>
                  Monthly Budget{" "}
                  <span className="text-xs font-normal" style={{ color: "#8B9CB8" }}>
                    (optional)
                  </span>
                </label>
                <select
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  {...register("monthlyBudget")}
                  defaultValue=""
                >
                  <option value="" style={{ backgroundColor: "#0D1627" }}>Select budget range (optional)</option>
                  {budgets.map((b) => (
                    <option key={b} value={b} style={{ backgroundColor: "#0D1627" }}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl font-semibold text-white text-base transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                style={{ backgroundColor: "#4F8EF7" }}
              >
                {isSubmitting ? "Sending..." : "Send My FREE Audit Request →"}
              </button>
            </form>

            {/* Trust note */}
            <p className="text-center text-xs mt-5" style={{ color: "#4A5A6E" }}>
              🔒 Your details are safe. We never share or spam. Usually responds within 2 hours during business hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
