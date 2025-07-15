'use client';

import React from 'react';
import { PROFILE_DATA } from '@/constants';
import { useTheme } from '@/hooks';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <section className="relative z-10 py-8 px-4 sm:py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          {/* Avatar */}
          <div className="relative inline-block mb-6 sm:mb-8">
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto mb-4 sm:mb-6 overflow-hidden border-4 relative animate-glow"
              style={{
                borderColor: currentTheme.primary,
                boxShadow: `0 0 30px ${currentTheme.primary}40`,
              }}
            >
              <Image src="/icon1.png" alt="Profile Avatar" fill className="object-cover" priority />
            </div>
            <div
              className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full animate-pulse"
              style={{ backgroundColor: currentTheme.accent }}
            />
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-gradient leading-tight">
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
            <div
              key={key}
              className="glass-card-hover text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl"
              style={{
                backgroundColor: currentTheme.surface,
              }}
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
            </div>
          ))}
        </div>

        {/* Social Links - Mobile Optimized */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          {PROFILE_DATA.socialLinks.map(link => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glossy-button p-3 sm:p-4 rounded-full hover:scale-110 touch-manipulation"
              style={{
                color: currentTheme.primary,
              }}
            >
              <i className={`${link.icon} text-xl sm:text-2xl`} />
            </a>
          ))}
        </div>

        {/* Favorite Quote */}
        <div className="text-center px-4">
          <blockquote
            className="text-lg sm:text-xl italic max-w-2xl mx-auto glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl"
            style={{ color: currentTheme.textSecondary }}
          >
            &ldquo;{PROFILE_DATA.favoriteQuotes[0]}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
