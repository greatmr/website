import type { Metadata } from "next";
import { JetBrains_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const slab = Roboto_Slab({
  variable: "--font-slab",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Portfolio · Mohammadreza Jahantalab",
  description: "Front-End Engineer · book-style portfolio",
  icons: {
    icon: [
      { url: `${BASE}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${BASE}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
    ],
    apple: `${BASE}/apple-touch-icon.png`,
  },
  manifest: `${BASE}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <html
      lang="en"
      className={`${mono.variable} ${slab.variable} antialiased`}
      style={{
        ["--paper-bg" as string]: `url('${base}/paper.png')`,
        ["--jahan-logo" as string]: `url('${base}/jahan-logo.svg')`,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
