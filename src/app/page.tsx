import React from 'react';
import PrismBackground from '@/components/visuals/PrismBackground';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import CallToActionSection from '@/components/landing/CallToActionSection';

const LANDING_DATA = {
  hero: {
    title: 'Create Your',
    subtitle: 'Digital Identity',
    description:
      'Build stunning, customizable profile pages that showcase your skills, projects, and personality. Stand out in the digital world with Prismxy.',
    primaryAction: {
      text: 'Create Your Profile',
      href: '/create',
    },
    secondaryAction: {
      text: 'View Dashboard',
      href: '/dashboard',
    },
  },
  features: {
    title: 'Everything You Need to Shine Online',
    features: [
      {
        icon: 'pi pi-palette',
        title: 'Customizable Themes',
        description:
          'Choose from beautiful themes or create your own with our color picker and font selector.',
        gradient: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      },
      {
        icon: 'pi pi-th-large',
        title: 'Flexible Sections',
        description:
          'Add, remove, and reorder sections to match your needs. Hero, skills, portfolio, and more.',
        gradient: 'bg-gradient-to-r from-purple-400 to-pink-500',
      },
      {
        icon: 'pi pi-mobile',
        title: 'Mobile First',
        description:
          'Responsive design that looks perfect on all devices - desktop, tablet, and mobile.',
        gradient: 'bg-gradient-to-r from-green-400 to-teal-500',
      },
      {
        icon: 'pi pi-bolt',
        title: 'Lightning Fast',
        description:
          'Built with Next.js for optimal performance and SEO. Your profile loads in milliseconds.',
        gradient: 'bg-gradient-to-r from-orange-400 to-red-500',
      },
      {
        icon: 'pi pi-share-alt',
        title: 'Easy Sharing',
        description:
          'Get a unique URL for your profile. Share it on social media, resumes, or business cards.',
        gradient: 'bg-gradient-to-r from-indigo-400 to-purple-500',
      },
      {
        icon: 'pi pi-chart-line',
        title: 'Analytics',
        description:
          'Track profile views, visitor analytics, and see which sections are most popular.',
        gradient: 'bg-gradient-to-r from-pink-400 to-rose-500',
      },
    ],
  },
  cta: {
    title: 'Ready to Create Your Digital Identity?',
    description:
      'Join thousands of professionals who trust Prismxy to showcase their work and skills.',
    actionText: 'Get Started Now',
    actionHref: '/create',
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <PrismBackground />

      <HeroSection {...LANDING_DATA.hero} />
      <FeaturesSection {...LANDING_DATA.features} />
      <CallToActionSection {...LANDING_DATA.cta} />
    </main>
  );
}
