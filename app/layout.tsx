/**
 * app/layout.tsx
 * Root layout — Inter font (300, 400, 500, 700), Navbar + Footer.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Paperkite Labs",
    default: "Paperkite Labs — Intelligent Systems for Modern Businesses",
  },
  description:
    "Paperkite Labs builds AI-powered software, automation systems, and data intelligence platforms for forward-thinking businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
