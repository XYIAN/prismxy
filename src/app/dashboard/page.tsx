'use client';

import React, { useState } from 'react';
import BaseButton from '@/components/common/BaseButton';
import ProfileList from '@/components/dashboard/ProfileList';
import CreateProfileDialog from '@/components/dashboard/CreateProfileDialog';
import { Profile } from '@/types';

// Mock data - replace with actual data fetching
const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Professional Portfolio',
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
    sections: [],
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
    name: 'Creative Showcase',
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
    sections: [],
    settings: {
      allowComments: true,
      showAnalytics: true,
      seoOptimized: true,
    },
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-12-18'),
  },
];

export default function Dashboard() {
  const [profiles, setProfiles] = useState<Profile[]>(mockProfiles);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateProfile = async (profileName: string) => {
    setIsCreating(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newProfile: Profile = {
      id: Date.now().toString(),
      name: profileName,
      slug: profileName.toLowerCase().replace(/\s+/g, '-'),
      isPublic: false,
      theme: 'cyan',
      font: 'inter',
      customColors: {
        background: '#0a0a0a',
        primary: '#00d4ff',
        secondary: '#0099cc',
        accent: '#00ffff',
      },
      sections: [],
      settings: {
        allowComments: false,
        showAnalytics: true,
        seoOptimized: true,
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setProfiles([...profiles, newProfile]);
    setShowCreateDialog(false);
    setIsCreating(false);
  };

  const handleDeleteProfile = (profileId: string) => {
    setProfiles(profiles.filter(p => p.id !== profileId));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Your Profiles</h1>
            <p className="text-lg opacity-80">Manage and create your digital profiles</p>
          </div>
          <BaseButton onClick={() => setShowCreateDialog(true)} className="mt-4 sm:mt-0">
            <i className="pi pi-plus mr-2" />
            Create New Profile
          </BaseButton>
        </div>

        {/* Profiles List */}
        <ProfileList
          profiles={profiles}
          onDelete={handleDeleteProfile}
          onCreateNew={() => setShowCreateDialog(true)}
        />
      </div>

      {/* Create Profile Dialog */}
      <CreateProfileDialog
        visible={showCreateDialog}
        onHide={() => setShowCreateDialog(false)}
        onCreate={handleCreateProfile}
        isCreating={isCreating}
      />
    </div>
  );
}
