'use client';

import React from 'react';
import { useTheme } from '@/hooks';

const ContactSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">Let&apos;s Connect</h1>

          <p
            className="text-xl mb-12 leading-relaxed"
            style={{ color: currentTheme.textSecondary }}
          >
            Ready to collaborate on something amazing? I&apos;d love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div
              className="glass-card-hover p-8 rounded-2xl text-center"
              style={{
                backgroundColor: currentTheme.surface,
              }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl animate-glow"
                style={{
                  backgroundColor: currentTheme.primary,
                  boxShadow: `0 0 20px ${currentTheme.primary}40`,
                }}
              >
                <i className="pi pi-envelope" style={{ color: currentTheme.background }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: currentTheme.text }}>
                Email
              </h3>
              <a
                href="mailto:hello@prismxy.com"
                className="text-lg glossy-button px-4 py-2 rounded-lg inline-block"
                style={{ color: currentTheme.primary }}
              >
                hello@prismxy.com
              </a>
            </div>

            <div
              className="glass-card-hover p-8 rounded-2xl text-center"
              style={{
                backgroundColor: currentTheme.surface,
              }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl animate-glow"
                style={{
                  backgroundColor: currentTheme.primary,
                  boxShadow: `0 0 20px ${currentTheme.primary}40`,
                }}
              >
                <i className="pi pi-linkedin" style={{ color: currentTheme.background }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: currentTheme.text }}>
                LinkedIn
              </h3>
              <a
                href="https://linkedin.com/in/alexchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg glossy-button px-4 py-2 rounded-lg inline-block"
                style={{ color: currentTheme.primary }}
              >
                Connect with me
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-8" style={{ color: currentTheme.textSecondary }}>
              Available for freelance projects, collaborations, and interesting opportunities.
            </p>

            <a
              href="mailto:hello@prismxy.com"
              className="inline-block px-8 py-4 rounded-lg text-lg font-semibold glossy-button hover:scale-105"
              style={{
                backgroundColor: currentTheme.primary,
                color: currentTheme.background,
              }}
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
