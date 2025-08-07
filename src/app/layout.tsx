import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Correctly import both fonts
import "./globals.css";
import { Header } from "@/components/Header";

// Configure Inter for body text, assign it to the '--font-sans' CSS variable
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
});

// Configure Playfair Display for headings, assign it to the '--font-serif' CSS variable
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
    // Combine the font variables in the <html> tag
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}