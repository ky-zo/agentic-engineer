import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

const metadataBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(metadataBaseUrl),
  title: "Agentic Engineer",
  description:
    "We install the AI-native system behind your team's workflows, tools, and habits in 2 weeks, or you don't pay.",
  applicationName: "Agentic Engineer",
  openGraph: {
    title: "Agentic Engineer",
    description:
      "We install the AI-native system I spent 14 months building into your team's workflows, tools, and habits in 2 weeks.",
    siteName: "Agentic Engineer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Engineer",
    description:
      "We install the AI-native system behind your team's workflows, tools, and habits in 2 weeks, or you don't pay.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
