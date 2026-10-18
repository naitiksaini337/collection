import type { Metadata, Viewport } from "next";
import { Merriweather, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cherry Works × Webvantage | Flagship Portfolio (16 Live Sites)",
  description:
    "Explore 16 curated live production websites across Streetwear E-Commerce, Cosmetic Medical, Shopify Plus, Clean Energy, Luxury Architecture, and Commercial Trades engineered by Cherry Works in partnership with Webvantage Agency.",
  keywords: [
    "Cherry Works",
    "Webvantage Agency",
    "Web Development Portfolio",
    "Moggerisland",
    "Next.js Development",
    "Shopify Plus Developers",
    "Medical Web Design",
    "Luxury Architecture",
  ],
  authors: [{ name: "Cherry Works & Webvantage Agency" }],
  openGraph: {
    title: "Cherry Works × Webvantage Agency Flagship Portfolio",
    description: "16 Curated live client websites engineered for conversion across high-ticket industries.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-[#0D0D0F] text-[#F5F5F7] antialiased selection:bg-[#7A0F2E] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
