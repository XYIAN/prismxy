'use client';

import React from 'react';
import { Card } from 'primereact/card';
import { ProfileSection } from '@/types';

interface ProfileSkillsSectionProps {
  section: ProfileSection;
  primaryColor: string;
}

const ProfileSkillsSection: React.FC<ProfileSkillsSectionProps> = ({ section, primaryColor }) => (
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12" style={{ color: primaryColor }}>
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {(section.content.skills as Array<{ name: string; level: number; color: string }>).map(
          (skill, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-sm opacity-60">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                />
              </div>
            </Card>
          )
        )}
      </div>
    </div>
  </section>
);

export default ProfileSkillsSection;
