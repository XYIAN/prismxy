'use client';

import React from 'react';
import Image from 'next/image';
import { ProfileSection } from '@/types';

interface ProfileHeroSectionProps {
  section: ProfileSection;
  primaryColor: string;
}

const ProfileHeroSection: React.FC<ProfileHeroSectionProps> = ({ section, primaryColor }) => (
  <section className="py-20 px-4 text-center">
    <div className="max-w-4xl mx-auto">
      {/* Avatar */}
      <div className="relative inline-block mb-8">
        <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 relative">
          <Image
            src={section.content.avatar as string}
            alt={section.content.title as string}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Name & Title */}
      <h1 className="text-5xl sm:text-6xl font-bold mb-4" style={{ color: primaryColor }}>
        {section.content.title as string}
      </h1>
      <p className="text-xl sm:text-2xl mb-6 opacity-80">{section.content.subtitle as string}</p>

      {/* Bio */}
      <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
        {section.content.bio as string}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>
            {(section.content.stats as { projects: number }).projects}
          </div>
          <div className="text-sm opacity-60">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>
            {(section.content.stats as { experience: number }).experience}
          </div>
          <div className="text-sm opacity-60">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold mb-2" style={{ color: primaryColor }}>
            {(section.content.stats as { clients: number }).clients}
          </div>
          <div className="text-sm opacity-60">Clients Served</div>
        </div>
      </div>
    </div>
  </section>
);

export default ProfileHeroSection;
