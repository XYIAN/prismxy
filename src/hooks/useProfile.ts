import { useState } from 'react';
import { Profile } from '@/types';
import { PROFILE_DATA } from '@/constants/profileData';

export const useProfile = () => {
  const [profileData, setProfileData] = useState<Profile>(PROFILE_DATA);
  const [isEditMode, setIsEditMode] = useState(false);

  // Optionally load from localStorage or API

  const updateProfile = async (updates: Partial<Profile>, onSaved?: () => void) => {
    setProfileData(prev => ({ ...prev, ...updates }));
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    if (onSaved) onSaved();
  };

  return {
    profileData,
    isEditMode,
    setIsEditMode,
    updateProfile,
  };
};
