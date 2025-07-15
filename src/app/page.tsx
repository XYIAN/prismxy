import React from 'react';
import HeroSection from '@/components/profile/HeroSection';
import BadgeSection from '@/components/profile/BadgeSection';
import PortfolioGallery from '@/components/portfolio/PortfolioGallery';
import ContactSection from '@/components/contact/ContactSection';
import PrismBackground from '@/components/visuals/PrismBackground';
import EasterEgg from '@/components/visuals/EasterEgg';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <PrismBackground />
      <EasterEgg />

      {/* Hero Section */}
      <section id="about">
        <HeroSection />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <BadgeSection />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <PortfolioGallery />
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
