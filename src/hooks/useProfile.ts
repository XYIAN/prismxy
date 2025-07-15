import { useState, useEffect } from 'react';
import { ProfileData } from '@/types';
import { PROFILE_DATA } from '@/constants';

export const useProfile = () => {
  const [profileData, setProfileData] = useState<ProfileData>(PROFILE_DATA);
  const [isEditMode, setIsEditMode] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Load profile data from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('prismxy-profile');
    if (savedProfile) {
      try {
        setProfileData(JSON.parse(savedProfile));
      } catch (error) {
        console.error('Failed to load profile data:', error);
      }
    }
  }, []);

  // Save profile data to localStorage
  const saveProfile = () => {
    try {
      localStorage.setItem('prismxy-profile', JSON.stringify(profileData));
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error('Failed to save profile data:', error);
    }
  };

  // Reset to default profile
  const resetProfile = () => {
    setProfileData(PROFILE_DATA);
    localStorage.removeItem('prismxy-profile');
    setHasUnsavedChanges(false);
  };

  // Update profile data
  const updateProfile = (updates: Partial<ProfileData>) => {
    setProfileData(prev => ({ ...prev, ...updates }));
    setHasUnsavedChanges(true);
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditMode(prev => !prev);
  };

  return {
    profileData,
    isEditMode,
    hasUnsavedChanges,
    updateProfile,
    saveProfile,
    resetProfile,
    toggleEditMode,
  };
};
