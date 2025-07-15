import React from "react";
import { Metadata } from "next";
import { HeroSection, BadgeSection } from "@/components";

export const metadata: Metadata = {
  title: "About | Prismxy",
  description:
    "Learn more about the person behind Prismxy — a next-gen, animated personal profile platform.",
};

const AboutPage = () => {
  return (
    <main className="relative z-10">
      <HeroSection />
      <BadgeSection />
    </main>
  );
};

export default AboutPage;
