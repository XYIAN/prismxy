"use client";

import React from "react";
import ThemeSwitcher from "../common/ThemeSwitcher";
import Image from "next/image";
import { useTheme } from "@/hooks";

const Navbar: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <nav
      className="flex items-center justify-between p-4 backdrop-blur-lg border-b sticky top-0 z-40"
      style={{
        backgroundColor: `${currentTheme.surface}CC`,
        borderColor: `${currentTheme.primary}20`,
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden relative">
          <Image
            src="/icon1.png"
            alt="Prismxy Logo"
            fill
            className="object-cover"
          />
        </div>
        <span
          className="font-bold text-xl"
          style={{ color: currentTheme.text }}
        >
          Prismxy
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="/about"
          className="transition-colors hover:opacity-80"
          style={{ color: currentTheme.textSecondary }}
        >
          About
        </a>
        <a
          href="/portfolio"
          className="transition-colors hover:opacity-80"
          style={{ color: currentTheme.textSecondary }}
        >
          Portfolio
        </a>
        <a
          href="/contact"
          className="transition-colors hover:opacity-80"
          style={{ color: currentTheme.textSecondary }}
        >
          Contact
        </a>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
