'use client';

import React from 'react';
import { PROFILE_DATA } from '@/constants';
import { useTheme } from '@/hooks';

const BadgeSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <section className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILE_DATA.badges.map(badge => (
            <div
              key={badge.id}
              className="glass-card-hover p-6 rounded-2xl"
              style={{
                backgroundColor: currentTheme.surface,
              }}
            >
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl animate-glow"
                  style={{
                    backgroundColor: `${badge.color}20`,
                    boxShadow: `0 0 20px ${badge.color}40`,
                  }}
                >
                  <i className={badge.icon} style={{ color: badge.color }} />
                </div>

                <h3 className="text-xl font-semibold mb-2" style={{ color: currentTheme.text }}>
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
