"use client";

import React from "react";
import { useTheme } from "@/hooks";

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, themes, isDarkMode, changeTheme, toggleDarkMode } =
    useTheme();

  return (
    <div className="flex items-center gap-2">
      <select
        value={currentTheme.id}
        onChange={(e) => changeTheme(e.target.value)}
        className="bg-transparent border border-white/20 rounded px-2 py-1 text-sm"
        style={{ color: currentTheme.text }}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>

      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
        style={{ color: currentTheme.text }}
      >
        {isDarkMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
