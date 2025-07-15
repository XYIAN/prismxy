'use client';

import React from 'react';
import { useTheme } from '@/hooks';
import { useProfile } from '@/hooks/useProfile';
import { Card } from 'primereact/card';

const BadgeSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const { profileData } = useProfile();

  return (
    <section className="py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12"
          style={{ color: currentTheme.primary }}
        >
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {profileData.badges.map(badge => (
            <Card
              key={badge.id}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border-0 shadow"
              style={{ backgroundColor: `${currentTheme.surface}CC` }}
            >
              <div className="text-center">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center text-xl sm:text-2xl"
                  style={{ backgroundColor: `${badge.color}20` }}
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgeSection;
