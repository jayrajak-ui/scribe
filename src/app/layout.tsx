import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer"; // We should also import the Footer here

// Configure Inter for body text
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
});

// Configure Playfair Display for headings
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
      <body>
        <Header />
        <main>{children}</main> {/* It's good practice to wrap children in a <main> tag */}
        <Footer />
      </body>
    </html>
  );
}