import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic Engineering",
  description:
    "Hands-on sprints that help software teams move faster with AI-native workflows, standards, and habits.",
  applicationName: "Agentic Engineering",
  openGraph: {
    title: "Agentic Engineering",
    description:
      "Turn your software team into an AI-native, higher-leverage engineering organization.",
    siteName: "Agentic Engineering",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Agentic Engineering",
    description:
      "Hands-on sprints for software teams that want to move faster with AI-native workflows and standards.",
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
