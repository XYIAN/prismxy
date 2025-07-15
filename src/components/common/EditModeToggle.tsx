'use client';

import React from 'react';
import { Button } from 'primereact/button';
import { useTheme } from '@/hooks';
import { useProfile } from '@/hooks/useProfile';

const EditModeToggle: React.FC = () => {
  const { currentTheme } = useTheme();
  const { isEditMode, hasUnsavedChanges, toggleEditMode, saveProfile, resetProfile } = useProfile();

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
      {/* Edit Mode Toggle */}
      <Button
        icon={isEditMode ? 'pi pi-eye' : 'pi pi-pencil'}
        className="p-3 rounded-full shadow-lg"
        style={{
          backgroundColor: isEditMode ? currentTheme.accent : currentTheme.primary,
          color: currentTheme.background,
        }}
        onClick={toggleEditMode}
        tooltip={isEditMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
        tooltipOptions={{ position: 'left' }}
      />

      {/* Save Button - Only show in edit mode */}
      {isEditMode && (
        <Button
          icon="pi pi-save"
          className="p-3 rounded-full shadow-lg"
          style={{
            backgroundColor: hasUnsavedChanges ? currentTheme.primary : currentTheme.surface,
            color: hasUnsavedChanges ? currentTheme.background : currentTheme.text,
          }}
          onClick={saveProfile}
          disabled={!hasUnsavedChanges}
          tooltip="Save Changes"
          tooltipOptions={{ position: 'left' }}
        />
      )}

      {/* Reset Button - Only show in edit mode */}
      {isEditMode && (
        <Button
          icon="pi pi-refresh"
          className="p-3 rounded-full shadow-lg"
          style={{
            backgroundColor: currentTheme.surface,
            color: currentTheme.text,
          }}
          onClick={resetProfile}
          tooltip="Reset to Default"
          tooltipOptions={{ position: 'left' }}
        />
      )}
    </div>
  );
};

export default EditModeToggle;
