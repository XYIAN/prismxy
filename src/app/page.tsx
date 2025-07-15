import React from "react";
import { Metadata } from "next";
import {
  HeroSection,
  BadgeSection,
  PortfolioGallery,
  PrismBackground,
  EasterEgg,
} from "@/components";

export const metadata: Metadata = {
  title: "Prismxy | Futuristic Personal Profile Platform",
  description:
    "A next-gen, animated personal brand and portfolio platform. Glassmorphism, prism-inspired UI, and immersive visuals.",
};

const HomePage = () => {
  return (
    <>
      <PrismBackground />
      <EasterEgg />
      <main className="relative z-10">
        <HeroSection />
        <BadgeSection />
        <PortfolioGallery />
      </main>
    </>
  );
};

export default HomePage;
