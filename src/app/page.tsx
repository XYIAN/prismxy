import React from "react";
import { Metadata } from "next";
// TODO: Import HeroSection, ProfileStats, PrismAnimation, etc.

export const metadata: Metadata = {
  title: "Prismxy | Futuristic Personal Profile Platform",
  description:
    "A next-gen, animated personal brand and portfolio platform. Glassmorphism, prism-inspired UI, and immersive visuals.",
};

const HomePage = () => {
  return (
    <main className="container mx-auto py-12">
      {/* TODO: Add HeroSection, ProfileStats, PrismAnimation, etc. */}
      <h1 className="text-5xl font-extrabold mb-6">Welcome to Prismxy</h1>
      <p className="text-lg text-white/80 mb-8">
        A visually immersive, customizable profile and portfolio experience.
      </p>
    </main>
  );
};

export default HomePage;
