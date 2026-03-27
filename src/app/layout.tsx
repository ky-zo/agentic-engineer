import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAI — AI Shipping for Software Teams",
  description:
    "Turn your software team into an AI-native shipping machine. 2-week sprints that change how your team builds.",
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
