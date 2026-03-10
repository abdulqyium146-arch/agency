import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileBar from "@/components/StickyMobileBar";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-mono",
  display: "swap",
});

const BASE_URL = "https://smallbusinessmarketingprofessional.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | SBMP — Local Digital Marketing",
    default: "Local Digital Marketing for UK Service Businesses | SBMP",
  },
  description:
    "Expert local SEO & digital marketing for UK service businesses. Rank on page 1 of Google in 30–90 days. Trusted by 150+ UK businesses since 2004. From £199/month. No contracts.",
  keywords: [
    "local SEO UK",
    "local digital marketing",
    "Google Business Profile",
    "UK service business marketing",
    "local SEO agency",
    "plumber SEO",
    "dentist SEO",
    "small business marketing",
  ],
  authors: [{ name: "SBMP — Small Business Marketing Professional" }],
  creator: "SBMP",
  publisher: "SBMP",
  category: "Digital Marketing",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "SBMP — Local Digital Marketing",
    title: "Local Digital Marketing for UK Service Businesses | SBMP",
    description:
      "Expert local SEO & digital marketing for UK service businesses. Rank on page 1 of Google in 30–90 days. From £199/month. No contracts.",
    images: [
      {
        url: "/sbmp-logo.png",
        width: 1200,
        height: 630,
        alt: "SBMP — Local Digital Marketing for UK Service Businesses",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Digital Marketing for UK Service Businesses | SBMP",
    description:
      "Expert local SEO & digital marketing for UK service businesses. Page 1 in 30–90 days. From £199/month.",
    images: ["/sbmp-logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/icon.svg", color: "#4F8EF7" },
    ],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SBMP",
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
  verification: {
    google: "",   // add Google Search Console verification token when ready
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${bricolageGrotesque.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#080D1A" />
        {/* Font optimization for Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* Preload critical fonts to improve FCP/LCP */}
        <link
          rel="preload"
          as="font"
          href="/fonts/display-font.woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileBar />
      </body>
    </html>
  );
}
