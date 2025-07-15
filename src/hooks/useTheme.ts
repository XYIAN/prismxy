'use client';

import { useState, useEffect } from 'react';
import { Theme } from '@/types';
import { THEMES, DEFAULT_THEME } from '@/constants';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(DEFAULT_THEME);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('prismxy-theme');
    if (savedTheme) {
      const theme = THEMES.find(t => t.id === savedTheme) || DEFAULT_THEME;
      setCurrentTheme(theme);
    }
  }, []);

  const changeTheme = async (themeId: string) => {
    const theme = THEMES.find(t => t.id === themeId) || DEFAULT_THEME;

    // Don't show loading for same theme
    if (theme.id === currentTheme.id) return;

    setIsLoading(true);

    // Add CSS transition to body
    document.body.style.transition = 'all 0.5s ease-in-out';

    // Wait for minimum 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));

    setCurrentTheme(theme);
    localStorage.setItem('prismxy-theme', theme.id);

    // Remove transition after theme change
    setTimeout(() => {
      document.body.style.transition = '';
      setIsLoading(false);
    }, 100);
  };

  return {
    currentTheme,
    themes: THEMES,
    isLoading,
    changeTheme,
  };
};
