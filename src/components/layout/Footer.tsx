import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="w-full py-8 px-4 sm:py-12 backdrop-blur-lg bg-white/5 border-t border-white/10">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <img src="/icon1.png" alt="Prismxy" className="object-cover rounded-lg" />
            </div>
            <span className="text-lg font-bold text-gradient">Prismxy</span>
          </div>
          <p className="text-sm opacity-60">
            Create stunning, customizable profile pages that showcase your skills and personality.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="opacity-60 hover:opacity-100 transition-opacity">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="opacity-60 hover:opacity-100 transition-opacity">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="opacity-60 hover:opacity-100 transition-opacity">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="opacity-60 hover:opacity-100 transition-opacity">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase tracking-wider">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/create" className="opacity-60 hover:opacity-100 transition-opacity">
                Create Profile
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="opacity-60 hover:opacity-100 transition-opacity">
                Dashboard
              </Link>
            </li>
            <li>
              <span className="opacity-60">Custom Themes</span>
            </li>
            <li>
              <span className="opacity-60">Analytics</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm uppercase tracking-wider">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="opacity-60 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="opacity-60 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </li>
            <li>
              <span className="opacity-60">Cookie Policy</span>
            </li>
            <li>
              <span className="opacity-60">GDPR</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} Prismxy. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 text-xs opacity-60">
          <span>Made with ❤️ for creators</span>
          <span>•</span>
          <span>Version 0.7.0</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
