'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Profile, ProfileSection } from '@/types';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileHeroSection from '@/components/profile/ProfileHeroSection';
import ProfileSkillsSection from '@/components/profile/ProfileSkillsSection';
import ProfileFooter from '@/components/profile/ProfileFooter';

// Mock data - replace with actual data fetching
const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'John Doe',
    slug: 'john-doe',
    isPublic: true,
    theme: 'cyan',
    font: 'inter',
    customColors: {
      background: '#0a0a0a',
      primary: '#00d4ff',
      secondary: '#0099cc',
      accent: '#00ffff',
    },
    sections: [
      {
        id: 'hero-1',
        type: 'hero',
        order: 0,
        isEnabled: true,
        content: {
          title: 'John Doe',
          subtitle: 'Full-Stack Developer & Creative Technologist',
          bio: 'Passionate about creating immersive digital experiences that blend cutting-edge technology with stunning visual design.',
          avatar: '/icon1.png',
          stats: {
            projects: 47,
            experience: 6,
            clients: 23,
          },
        },
        styling: {},
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'skills-1',
        type: 'skills',
        order: 1,
        isEnabled: true,
        content: {
          skills: [
            { name: 'React', level: 90, color: '#61dafb' },
            { name: 'Next.js', level: 85, color: '#000000' },
            { name: 'TypeScript', level: 88, color: '#3178c6' },
            { name: 'Node.js', level: 82, color: '#339933' },
          ],
        },
        styling: {},
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    settings: {
      allowComments: false,
      showAnalytics: true,
      seoOptimized: true,
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-12-19'),
  },
  {
    id: '2',
    name: 'Creative Portfolio',
    slug: 'creative-portfolio',
    isPublic: true,
    theme: 'purple',
    font: 'poppins',
    customColors: {
      background: '#1a0b2e',
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      accent: '#a855f7',
    },
    sections: [
      {
        id: 'hero-2',
        type: 'hero',
        order: 0,
        isEnabled: true,
        content: {
          title: 'Creative Portfolio',
          subtitle: 'Digital Artist & Designer',
          bio: 'Creating beautiful digital experiences through innovative design and creative technology.',
          avatar: '/icon-lg.png',
          stats: {
            projects: 32,
            experience: 4,
            clients: 18,
          },
        },
        styling: {},
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    settings: {
      allowComments: true,
      showAnalytics: true,
      seoOptimized: true,
    },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-12-18'),
  },
];

interface UserProfilePageProps {
  params: {
    slug: string;
  };
}

export default function UserProfilePage({ params }: UserProfilePageProps) {
  const profile = mockProfiles.find(p => p.slug === params.slug);

  if (!profile || !profile.isPublic) {
    notFound();
  }

  const renderSection = (section: ProfileSection) => {
    switch (section.type) {
      case 'hero':
        return <ProfileHeroSection section={section} primaryColor={profile.customColors.primary} />;
      case 'skills':
        return (
          <ProfileSkillsSection section={section} primaryColor={profile.customColors.primary} />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: profile.customColors.background,
        fontFamily:
          profile.font === 'inter'
            ? 'Inter, sans-serif'
            : profile.font === 'poppins'
            ? 'Poppins, sans-serif'
            : profile.font === 'playfair'
            ? 'Playfair Display, serif'
            : profile.font === 'montserrat'
            ? 'Montserrat, sans-serif'
            : profile.font === 'roboto'
            ? 'Roboto, sans-serif'
            : 'Inter, sans-serif',
      }}
    >
      <ProfileHeader primaryColor={profile.customColors.primary} />
      <main className="pt-16">
        {profile.sections
          .filter(section => section.isEnabled)
          .sort((a, b) => a.order - b.order)
          .map(section => (
            <div key={section.id}>{renderSection(section)}</div>
          ))}
      </main>
      <ProfileFooter primaryColor={profile.customColors.primary} />
    </div>
  );
}
