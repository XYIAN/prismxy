'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/hooks';
import ThemeSwitcher from '../common/ThemeSwitcher';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const { currentTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-navbar' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? `${currentTheme.surface}CC` : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image src="/icon1.png" alt="Prismxy Logo" fill className="object-cover rounded-lg" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gradient">Prismxy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link"
              style={{ color: currentTheme.text }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="nav-link"
              style={{ color: currentTheme.text }}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="nav-link"
              style={{ color: currentTheme.text }}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link"
              style={{ color: currentTheme.text }}
            >
              Contact
            </button>
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg touch-manipulation"
              style={{ color: currentTheme.text }}
            >
              <i className={`pi ${isMenuOpen ? 'pi-times' : 'pi-bars'} text-xl`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: `${currentTheme.primary}30` }}
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="mobile-nav-link text-left"
                style={{ color: currentTheme.text }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="mobile-nav-link text-left"
                style={{ color: currentTheme.text }}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="mobile-nav-link text-left"
                style={{ color: currentTheme.text }}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mobile-nav-link text-left"
                style={{ color: currentTheme.text }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
