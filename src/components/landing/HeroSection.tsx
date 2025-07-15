'use client';

import React from 'react';
import Link from 'next/link';
import BaseButton from '@/components/common/BaseButton';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction: {
    text: string;
    href: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <section className="relative z-10 py-20 px-4 sm:py-32">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          {title}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {subtitle}
          </span>
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryAction.href}>
            <BaseButton size="lg" className="text-lg px-8 py-4">
              {primaryAction.text}
            </BaseButton>
          </Link>
          <Link href={secondaryAction.href}>
            <BaseButton variant="outline" size="lg" className="text-lg px-8 py-4">
              {secondaryAction.text}
            </BaseButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
