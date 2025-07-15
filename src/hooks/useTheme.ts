"use client";

import { useState, useEffect } from "react";
import { Theme } from "@/types";
import { THEMES, DEFAULT_THEME } from "@/constants";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(DEFAULT_THEME);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("prismxy-theme");
    const savedDarkMode = localStorage.getItem("prismxy-dark-mode");

    if (savedTheme) {
      const theme = THEMES.find((t) => t.id === savedTheme) || DEFAULT_THEME;
      setCurrentTheme(theme);
    }

    if (savedDarkMode !== null) {
      setIsDarkMode(savedDarkMode === "true");
    }
  }, []);

  const changeTheme = (themeId: string) => {
    const theme = THEMES.find((t) => t.id === themeId) || DEFAULT_THEME;
    setCurrentTheme(theme);
    localStorage.setItem("prismxy-theme", theme.id);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("prismxy-dark-mode", newDarkMode.toString());
  };

  return {
    currentTheme,
    themes: THEMES,
    isDarkMode,
    changeTheme,
    toggleDarkMode,
  };
};
