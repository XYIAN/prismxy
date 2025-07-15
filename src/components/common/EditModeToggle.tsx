'use client';

import React from 'react';
import { Button } from 'primereact/button';
import { useTheme } from '@/hooks';
import { useProfile } from '@/hooks/useProfile';

const EditModeToggle: React.FC = () => {
  const { currentTheme } = useTheme();
  const { isEditMode, setIsEditMode } = useProfile();

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
      <Button
        icon={isEditMode ? 'pi pi-eye' : 'pi pi-pencil'}
        label={isEditMode ? 'View Mode' : 'Edit Mode'}
        className="p-button-sm"
        style={{ backgroundColor: currentTheme.primary, color: currentTheme.background }}
        onClick={() => setIsEditMode((prev: boolean) => !prev)}
      />
    </div>
  );
};

export default EditModeToggle;
