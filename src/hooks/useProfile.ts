import { useState, useEffect } from 'react';
import { Profile } from '@/types';
import { PROFILE_DATA } from '@/constants/profileData';

export const useProfile = () => {
  const [profileData, setProfileData] = useState<Profile>(PROFILE_DATA);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Optionally load from localStorage or API
  }, []);

  const updateProfile = (updates: Partial<Profile>) => {
    setProfileData(prev => ({ ...prev, ...updates }));
  };

  return {
    profileData,
    isEditMode,
    setIsEditMode,
    updateProfile,
  };
};
