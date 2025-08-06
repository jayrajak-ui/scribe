import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Import Playfair_Display
import "./globals.css";
import { Header } from "@/components/Header";

// Configure Inter font for the body text
const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter', // Set up a CSS variable for Inter
});

// Configure Playfair Display font for headings
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair', // Set up a CSS variable for Playfair Display
});

export const metadata: Metadata = {
  title: "Freed Clone", // Let's give it a better title
  description: "A clone of the Freed website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Combine the font variables in the <html> tag
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}