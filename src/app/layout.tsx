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

export const metadata: Metadata = {
  title: "Portfolio · Mohammadreza Jahantalab",
  description: "Front-End Engineer · book-style portfolio",
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
      style={{ ["--paper-bg" as string]: `url('${base}/paper.png')` }}
    >
      <body>{children}</body>
    </html>
  );
}
