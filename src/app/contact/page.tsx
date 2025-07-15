import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Prismxy",
  description:
    "Get in touch via Prismxy — a next-gen, animated personal profile platform.",
};

const ContactPage = () => {
  return (
    <main className="container mx-auto py-12">
      {/* TODO: Add ContactSection component */}
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg text-white/80">
        Reach out for collaborations, questions, or just to say hi!
      </p>
    </main>
  );
};

export default ContactPage;
