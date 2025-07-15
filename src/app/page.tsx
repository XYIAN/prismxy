import React from 'react';
import EditableHeroSection from '@/components/profile/EditableHeroSection';
import BadgeSection from '@/components/profile/BadgeSection';
import PortfolioGallery from '@/components/portfolio/PortfolioGallery';
import ContactSection from '@/components/contact/ContactSection';
import PrismBackground from '@/components/visuals/PrismBackground';
import EasterEgg from '@/components/visuals/EasterEgg';
import EditModeToggle from '@/components/common/EditModeToggle';
import ThemeLoadingOverlay from '@/components/visuals/ThemeLoadingOverlay';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <PrismBackground />
      <EasterEgg />
      <EditModeToggle />
      <ThemeLoadingOverlay />

      {/* Hero Section */}
      <section id="about">
        <EditableHeroSection />
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
