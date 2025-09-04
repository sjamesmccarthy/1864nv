import type { Metadata } from "next";
import { Geist, Geist_Mono, Special_Elite } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  variable: "--font-special-elite",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "1864 Brewery, Distillery & Saloon",
  description:
    "An eccentric concept fusing traditional craft brewery, distillery and artisanal cocktail saloon with old west charm",
  icons: {
    icon: [
      { url: "/1864-logo-v1.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${specialElite.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
