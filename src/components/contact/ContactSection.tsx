'use client';

import React, { useState } from 'react';
import { useTheme } from '@/hooks';

const ContactSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative z-10 py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gradient">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3
                className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6"
                style={{ color: currentTheme.text }}
              >
                Let&apos;s Connect
              </h3>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: currentTheme.textSecondary }}
              >
                I&apos;m always open to discussing new opportunities, interesting projects, or just
                having a chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl animate-glow"
                  style={{
                    backgroundColor: `${currentTheme.primary}20`,
                    boxShadow: `0 0 20px ${currentTheme.primary}40`,
                  }}
                >
                  <i className="pi pi-envelope" style={{ color: currentTheme.primary }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: currentTheme.text }}>
                    Email
                  </p>
                  <p className="text-sm" style={{ color: currentTheme.textSecondary }}>
                    hello@prismxy.dev
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl animate-glow"
                  style={{
                    backgroundColor: `${currentTheme.primary}20`,
                    boxShadow: `0 0 20px ${currentTheme.primary}40`,
                  }}
                >
                  <i className="pi pi-map-marker" style={{ color: currentTheme.primary }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: currentTheme.text }}>
                    Location
                  </p>
                  <p className="text-sm" style={{ color: currentTheme.textSecondary }}>
                    San Francisco, CA
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl animate-glow"
                  style={{
                    backgroundColor: `${currentTheme.primary}20`,
                    boxShadow: `0 0 20px ${currentTheme.primary}40`,
                  }}
                >
                  <i className="pi pi-clock" style={{ color: currentTheme.primary }} />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: currentTheme.text }}>
                    Response Time
                  </p>
                  <p className="text-sm" style={{ color: currentTheme.textSecondary }}>
                    Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: currentTheme.text }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glossy-input touch-manipulation"
                  style={{
                    backgroundColor: currentTheme.surface,
                    color: currentTheme.text,
                    borderColor: `${currentTheme.primary}30`,
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: currentTheme.text }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glossy-input touch-manipulation"
                  style={{
                    backgroundColor: currentTheme.surface,
                    color: currentTheme.text,
                    borderColor: `${currentTheme.primary}30`,
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: currentTheme.text }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glossy-input touch-manipulation resize-none"
                  style={{
                    backgroundColor: currentTheme.surface,
                    color: currentTheme.text,
                    borderColor: `${currentTheme.primary}30`,
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg glossy-button touch-manipulation font-semibold"
                style={{
                  backgroundColor: currentTheme.primary,
                  color: currentTheme.background,
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
