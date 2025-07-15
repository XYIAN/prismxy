'use client';

import React from 'react';
import { PROFILE_DATA } from '@/constants';
import { useTheme } from '@/hooks';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <section className="py-8 px-4 sm:py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          {/* Avatar */}
          <div className="relative inline-block mb-6 sm:mb-8">
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto mb-4 sm:mb-6 overflow-hidden border-4"
              style={{ borderColor: currentTheme.primary }}
            >
              <Image src="/icon1.png" alt="Profile Avatar" fill className="object-cover" priority />
            </div>
            <div
              className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full"
              style={{ backgroundColor: currentTheme.accent }}
            />
          </div>

          {/* Name */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight"
            style={{ color: currentTheme.primary }}
          >
            {PROFILE_DATA.name}
          </h1>

          {/* Title */}
          <p
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 px-4"
            style={{ color: currentTheme.textSecondary }}
          >
            {PROFILE_DATA.title}
          </p>

          {/* Bio */}
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
            style={{ color: currentTheme.textSecondary }}
          >
            {PROFILE_DATA.bio}
          </p>
        </div>

        {/* Stats - Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {Object.entries(PROFILE_DATA.stats).map(([key, value]) => (
            <Card
              key={key}
              className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border-0 shadow"
              style={{ backgroundColor: `${currentTheme.surface}CC` }}
            >
              <div
                className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2"
                style={{ color: currentTheme.primary }}
              >
                {value.toLocaleString()}
              </div>
              <div
                className="text-xs sm:text-sm uppercase tracking-wider"
                style={{ color: currentTheme.textSecondary }}
              >
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </div>
            </Card>
          ))}
        </div>

        {/* Social Links - Mobile Optimized */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          {PROFILE_DATA.socialLinks.map(link => (
            <Button
              key={link.platform}
              icon={link.icon}
              className="p-3 sm:p-4 rounded-full border-0 shadow"
              style={{ backgroundColor: `${currentTheme.primary}20`, color: currentTheme.primary }}
              onClick={() => window.open(link.url, '_blank')}
            />
          ))}
        </div>

        {/* Favorite Quote */}
        <div className="text-center px-4">
          <Card
            className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border-0 max-w-2xl mx-auto shadow"
            style={{ backgroundColor: `${currentTheme.surface}CC` }}
          >
            <blockquote
              className="text-lg sm:text-xl italic"
              style={{ color: currentTheme.textSecondary }}
            >
              &ldquo;{PROFILE_DATA.favoriteQuotes[0]}&rdquo;
            </blockquote>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
