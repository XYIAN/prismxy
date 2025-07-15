'use client';

import React from 'react';
import Link from 'next/link';
import BaseCard from '@/components/common/BaseCard';
import BaseButton from '@/components/common/BaseButton';
import { Profile } from '@/types';

interface ProfileCardProps {
  profile: Profile;
  onDelete: (profileId: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onDelete }) => {
  return (
    <BaseCard className="border-0 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">{profile.name}</h3>
          <p className="text-sm opacity-60">/{profile.slug}</p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              profile.isPublic ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}
          >
            {profile.isPublic ? 'Public' : 'Private'}
          </span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm opacity-80">
          <i className="pi pi-calendar" />
          <span>Created {profile.createdAt.toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-80">
          <i className="pi pi-palette" />
          <span className="capitalize">{profile.theme} Theme</span>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-80">
          <i className="pi pi-th-large" />
          <span>{profile.sections.length} sections</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Link href={`/create/${profile.id}`} className="flex-1">
          <BaseButton variant="outline" size="sm" className="w-full">
            <i className="pi pi-pencil mr-2" />
            Edit
          </BaseButton>
        </Link>
        <Link href={`/user/${profile.slug}`} className="flex-1">
          <BaseButton variant="ghost" size="sm" className="w-full">
            <i className="pi pi-eye mr-2" />
            View
          </BaseButton>
        </Link>
        <BaseButton variant="danger" size="sm" onClick={() => onDelete(profile.id)}>
          <i className="pi pi-trash" />
        </BaseButton>
      </div>
    </BaseCard>
  );
};

export default ProfileCard;
