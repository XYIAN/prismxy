'use client';

import React from 'react';
import { useTheme } from '@/hooks';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, themes, isDarkMode, changeTheme, toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <select
        value={currentTheme.id}
        onChange={e => changeTheme(e.target.value)}
        className="glossy-button px-3 py-2 rounded-lg text-sm"
        style={{ color: currentTheme.text }}
      >
        {themes.map(theme => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>

      <button
        onClick={toggleDarkMode}
        className="glossy-button p-2 rounded-full hover:scale-110"
        style={{ color: currentTheme.text }}
      >
        {isDarkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
