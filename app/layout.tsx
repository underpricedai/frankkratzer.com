import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frank Kratzer - SaaS Founder & Developer",
  description: "Building AI-powered products that automate decisions. Sr. System Admin at Proofpoint, Founder of ACIS Trading and Underpriced AI.",
  keywords: ["Frank Kratzer", "SaaS", "AI", "Developer", "ACIS Trading", "Underpriced AI", "Proofpoint"],
  authors: [{ name: "Frank Kratzer" }],
  openGraph: {
    title: "Frank Kratzer - SaaS Founder & Developer",
    description: "Building AI-powered products that automate decisions.",
    url: "https://frankkratzer.com",
    siteName: "Frank Kratzer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
