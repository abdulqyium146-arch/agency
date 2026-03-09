import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free SEO Audit Worth £299 | Claim Yours Today",
  description:
    "Claim your free SEO audit worth £299. I'll review your Google Business Profile, website SEO, local rankings and send you a personalised action plan. No obligation.",
};

export default function FreeAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
