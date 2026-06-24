import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mozaikimages.com"),
  title: {
    default: "Mozaik Images — Photography & Motion",
    template: "%s — Mozaik Images",
  },
  description:
    "Independent photography and short film by Mozaik — weddings, brand campaigns, music, and travel. A solo studio based in Washington, DC.",
  keywords: ["photography", "filmmaker", "wedding photographer", "brand campaign", "Washington DC"],
  openGraph: {
    title: "Mozaik Images — Photography & Motion",
    description:
      "Independent photography and short film by Mozaik — a solo studio based in Washington, DC.",
    url: "https://mozaikimages.com",
    siteName: "Mozaik Images",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozaik Images — Photography & Motion",
    description: "Independent photography and short film. Washington, DC.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
