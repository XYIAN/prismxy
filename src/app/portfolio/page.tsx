import React from "react";
import { Metadata } from "next";
import { PortfolioGallery } from "@/components";

export const metadata: Metadata = {
  title: "Portfolio | Prismxy",
  description:
    "Explore a stunning, animated portfolio gallery built with Prismxy.",
};

const PortfolioPage = () => {
  return (
    <main className="relative z-10">
      <PortfolioGallery />
    </main>
  );
};

export default PortfolioPage;
