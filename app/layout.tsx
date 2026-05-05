import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FELD Foundation | Foundation for Effective Leadership & Development",
  description:
    "FELD Foundation is dedicated to youth empowerment and women empowerment in Delta State, Nigeria through economic empowerment programmes, microcredit loans, and community development initiatives.",
  keywords: [
    "FELD Foundation",
    "youth empowerment",
    "women empowerment",
    "Delta State Nigeria",
    "NGO",
    "microcredit",
    "economic empowerment",
  ],
  openGraph: {
    title: "FELD Foundation | Empowering Communities in Delta State",
    description:
      "Foundation for Effective Leadership & Development - Transforming lives through youth and women empowerment programmes.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
