'use client';

import React from 'react';
import { PROFILE_DATA } from '@/constants';
import { useTheme } from '@/hooks';

const BadgeSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <section className="relative z-10 py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gradient">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {PROFILE_DATA.badges.map(badge => (
            <div
              key={badge.id}
              className="glass-card-hover p-4 sm:p-6 rounded-xl sm:rounded-2xl"
              style={{
                backgroundColor: currentTheme.surface,
              }}
            >
              <div className="text-center">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center text-xl sm:text-2xl animate-glow"
                  style={{
                    backgroundColor: `${badge.color}20`,
                    boxShadow: `0 0 20px ${badge.color}40`,
                  }}
                >
                  <i className={badge.icon} style={{ color: badge.color }} />
                </div>

                <h3
                  className="text-lg sm:text-xl font-semibold mb-2"
                  style={{ color: currentTheme.text }}
                >
                  {badge.name}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: currentTheme.textSecondary }}
                >
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgeSection;
