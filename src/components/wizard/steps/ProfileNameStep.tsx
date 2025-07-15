'use client';

import React from 'react';
import { Message } from 'primereact/message';
import BaseInput from '@/components/common/BaseInput';

interface ProfileNameStepProps {
  profileName: string;
  profileSlug: string;
  onNameChange: (name: string) => void;
  nameError: string;
  isCheckingName: boolean;
}

const ProfileNameStep: React.FC<ProfileNameStepProps> = ({
  profileName,
  profileSlug,
  onNameChange,
  nameError,
  isCheckingName,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <BaseInput
          label="Profile Name *"
          value={profileName}
          onChange={e => onNameChange(e.target.value)}
          placeholder="Enter your profile name..."
          error={nameError}
          helperText={`This will be your profile URL: prismxy.com/user/${
            profileSlug || 'your-name'
          }`}
          autoFocus
        />
        {isCheckingName && (
          <div className="flex items-center gap-2 mt-2 text-sm opacity-60">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Checking availability...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileNameStep;
