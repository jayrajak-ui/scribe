// src/app/layout.tsx
import { ScrollProgressBar } from "@/components/magicui/ScrollProgressBar";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: "Freed Clone",
  description: "A clone of the Freed website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* Apply the cursor-none class to the one and only body tag */}
      <body className="cursor-none">
        <ScrollProgressBar /> 
        <SmoothCursor />
        <SmoothScroll>
          <Header />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}