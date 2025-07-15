'use client';

import React from 'react';
import BaseCard from '@/components/common/BaseCard';
import BaseButton from '@/components/common/BaseButton';
import ProfileCard from './ProfileCard';
import { Profile } from '@/types';

interface ProfileListProps {
  profiles: Profile[];
  onDelete: (profileId: string) => void;
  onCreateNew: () => void;
}

const ProfileList: React.FC<ProfileListProps> = ({ profiles, onDelete, onCreateNew }) => {
  if (profiles.length === 0) {
    return (
      <BaseCard className="text-center py-12 border-0 shadow-lg">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-6">
          <i className="pi pi-user text-3xl text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3">No Profiles Yet</h3>
        <p className="opacity-80 mb-6">
          Create your first profile to start showcasing your work and skills.
        </p>
        <BaseButton onClick={onCreateNew}>Create Your First Profile</BaseButton>
      </BaseCard>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProfileList;
