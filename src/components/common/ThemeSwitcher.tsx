'use client';

import React from 'react';
import { useTheme } from '@/hooks';
import { Dropdown } from 'primereact/dropdown';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, themes, isLoading, changeTheme } = useTheme();

  const handleThemeChange = (themeId: string) => {
    changeTheme(themeId);
  };

  return (
    <div className="flex items-center gap-2">
      <Dropdown
        value={currentTheme.id}
        options={themes}
        optionLabel="name"
        optionValue="id"
        onChange={e => handleThemeChange(e.value)}
        className="min-w-[140px]"
        disabled={isLoading}
        placeholder="Select Theme"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: currentTheme.text,
        }}
      />

      {isLoading && (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span className="text-sm">Switching...</span>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
