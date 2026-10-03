import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/sections/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Software engineer building real-time, voice-first AI products using LLMs, speech and WebRTC, with React and Next.js on the frontend and FastAPI and Node.js on the backend.";

export const metadata: Metadata = {
  title: "Muhiq Kapadia | Software Engineer",
  description,
  openGraph: {
    title: "Muhiq Kapadia | Software Engineer",
    description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
