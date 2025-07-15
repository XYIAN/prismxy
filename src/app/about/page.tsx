import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Prismxy",
  description:
    "Learn more about the person behind Prismxy — a next-gen, animated personal profile platform.",
};

const AboutPage = () => {
  return (
    <main className="container mx-auto py-12">
      {/* TODO: Add AboutSection component */}
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-white/80">
        This is the about page for Prismxy. Customize your story here!
      </p>
    </main>
  );
};

export default AboutPage;
