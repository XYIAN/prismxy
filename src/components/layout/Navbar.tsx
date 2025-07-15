import React from "react";
import ThemeSwitcher from "../common/ThemeSwitcher";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 backdrop-blur-lg bg-white/10 border-b border-white/20">
      <div className="font-bold text-xl">Prismxy</div>
      <div className="flex items-center gap-4">
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
