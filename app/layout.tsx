import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aviation Expeditions - Aerial Adventures",
  description: "Experience the world from above with Aviation Expeditions. Explore breathtaking destinations through scenic flights and aerial tours.",
  keywords: "aviation, aerial tours, scenic flights, expeditions, adventure",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    title: "Aviation Expeditions - Aerial Adventures",
    description: "Experience the world from above with Aviation Expeditions.",
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
    <html lang="en">
      <body className={dmSans.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
