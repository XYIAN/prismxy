'use client';

import React from 'react';
import { useTheme } from '@/hooks';

const ThemeLoadingOverlay: React.FC = () => {
  const { isLoading, currentTheme } = useTheme();

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm"
      style={{
        backgroundColor: `${currentTheme.background}CC`,
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <div className="text-center">
        <div
          className="w-16 h-16 border-4 border-current border-t-transparent rounded-full animate-spin mx-auto mb-4"
          style={{ color: currentTheme.primary }}
        />
        <h3 className="text-xl font-semibold mb-2" style={{ color: currentTheme.text }}>
          Switching Theme
        </h3>
        <p className="text-sm opacity-80" style={{ color: currentTheme.textSecondary }}>
          Please wait while we apply your new theme...
        </p>
      </div>
    </div>
  );
};

export default ThemeLoadingOverlay;
