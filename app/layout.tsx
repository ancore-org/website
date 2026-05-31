import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

// Mackinac is the design-system display font (commercial). Fraunces is the stand-in.
// Fricolage Grotesque is the body font — replace with next/font/local when available.
const dmSans = DM_Sans({
  variable: "--font-fricolage",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Ancore — Account Abstraction for Stellar",
  description:
    "Open-source account abstraction and financial UX layer for the Stellar network. Smart accounts, session keys, social recovery, and native invoicing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
