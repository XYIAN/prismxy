import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { PrismBackground, EasterEgg } from "../components";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Prismxy",
  description: "A next-gen, animated personal profile platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <PrismBackground />
        <EasterEgg />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
