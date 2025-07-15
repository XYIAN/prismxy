"use client";

import React from "react";
import { PROFILE_DATA } from "@/constants";
import { useTheme } from "@/hooks";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="relative inline-block mb-8">
            <div
              className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 relative"
              style={{ borderColor: currentTheme.primary }}
            >
              <Image
                src="/icon1.png"
                alt="Profile Avatar"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full animate-pulse"
              style={{ backgroundColor: currentTheme.accent }}
            />
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ color: currentTheme.text }}
          >
            {PROFILE_DATA.name}
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 opacity-80"
            style={{ color: currentTheme.textSecondary }}
          >
            {PROFILE_DATA.title}
          </p>

          <p
            className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: currentTheme.textSecondary }}
          >
            {PROFILE_DATA.bio}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(PROFILE_DATA.stats).map(([key, value]) => (
            <div
              key={key}
              className="text-center p-6 rounded-2xl backdrop-blur-lg border"
              style={{
                backgroundColor: currentTheme.surface,
                borderColor: `${currentTheme.primary}20`,
              }}
            >
              <div
                className="text-3xl font-bold mb-2"
                style={{ color: currentTheme.primary }}
              >
                {value.toLocaleString()}
              </div>
              <div
                className="text-sm uppercase tracking-wider"
                style={{ color: currentTheme.textSecondary }}
              >
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {PROFILE_DATA.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full backdrop-blur-lg border transition-all hover:scale-110"
              style={{
                backgroundColor: currentTheme.surface,
                borderColor: `${currentTheme.primary}20`,
                color: currentTheme.primary,
              }}
            >
              <i className={`${link.icon} text-2xl`} />
            </a>
          ))}
        </div>

        {/* Favorite Quote */}
        <div className="text-center">
          <blockquote
            className="text-xl italic max-w-2xl mx-auto"
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
