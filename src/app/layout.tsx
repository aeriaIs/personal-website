import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Yudho Aerials",
  description: "The portfolio of Yudho Aerials a web developer"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>{children}</body>
    </html>
  );
}
