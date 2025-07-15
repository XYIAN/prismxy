import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Prismxy",
  description:
    "Explore a stunning, animated portfolio gallery built with Prismxy.",
};

const PortfolioPage = () => {
  return (
    <main className="container mx-auto py-12">
      {/* TODO: Add PortfolioGallery component */}
      <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
      <p className="text-lg text-white/80">
        Showcase your best work with beautiful animations and lightbox effects.
      </p>
    </main>
  );
};

export default PortfolioPage;
