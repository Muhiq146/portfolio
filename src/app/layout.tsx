import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/sections/Nav";
import { profile, SITE_URL } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const description =
  "Software engineer building real-time, voice-first AI products using LLMs, speech and WebRTC, with React and Next.js on the frontend and FastAPI and Node.js on the backend.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} | Software Engineer`,
    template: `%s | ${profile.name}`,
  },
  description,
  authors: [{ name: profile.name, url: SITE_URL }],
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/feed.xml", title: `${profile.name}: writing` }] },
  },
  openGraph: {
    type: "website",
    siteName: profile.name,
    locale: "en_US",
    title: `${profile.name} | Software Engineer`,
    description,
    url: "/",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: `${profile.name}, software engineer` }],
  },
  twitter: { card: "summary_large_image", images: ["/og/home.png"] },
};

export const viewport: Viewport = {
  themeColor: "#f5f0e6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col font-sans">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
