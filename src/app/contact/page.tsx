import React from "react";
import { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Prismxy",
  description:
    "Get in touch via Prismxy — a next-gen, animated personal profile platform.",
};

const ContactPage = () => {
  return (
    <main className="relative z-10">
      <ContactSection />
    </main>
  );
};

export default ContactPage;
