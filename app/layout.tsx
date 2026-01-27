import type { Metadata } from "next";
import { Syne, Fraunces, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fraunces",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Aviation Expeditions - Fairbanks Flightseeing Tours & Arctic Adventures",
  description: "Experience the world from above with Aviation Expeditions. Fly with Sven over Alaska's pristine wilderness, national parks, and remote Arctic regions.",
  keywords: "aviation, arctic tours, scenic flights, Alaska adventures, flightseeing, Gates of the Arctic, Denali",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Aviation Expeditions - Fairbanks Flightseeing Tours",
    description: "Fly over Alaska's pristine wilderness with expert pilot Sven.",
    url: "https://aviation-expeditions.com",
    siteName: "Aviation Expeditions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
