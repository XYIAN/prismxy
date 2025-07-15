'use client';

import React from 'react';
import { useTheme } from '@/hooks';
import { useProfile } from '@/hooks/useProfile';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import Image from 'next/image';

const EditableHeroSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const { profileData, isEditMode, updateProfile } = useProfile();

  const handleInputChange = (field: string, value: string) => {
    updateProfile({ [field]: value });
  };

  const handleSocialLinkChange = (index: number, field: string, value: string) => {
    const updatedLinks = [...profileData.socialLinks];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    updateProfile({ socialLinks: updatedLinks });
  };

  const addSocialLink = () => {
    const newLink = {
      platform: 'New Platform',
      url: 'https://example.com',
      icon: 'pi pi-link',
    };
    updateProfile({ socialLinks: [...profileData.socialLinks, newLink] });
  };

  const removeSocialLink = (index: number) => {
    const updatedLinks = profileData.socialLinks.filter((_, i) => i !== index);
    updateProfile({ socialLinks: updatedLinks });
  };

  return (
    <section className="py-8 px-4 sm:py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          {/* Avatar */}
          <div className="relative inline-block mb-6 sm:mb-8">
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full mx-auto mb-4 sm:mb-6 overflow-hidden border-4"
              style={{ borderColor: currentTheme.primary }}
            >
              <Image src="/icon1.png" alt="Profile Avatar" fill className="object-cover" priority />
            </div>
            <div
              className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full"
              style={{ backgroundColor: currentTheme.accent }}
            />
          </div>

          {/* Name */}
          {isEditMode ? (
            <InputText
              value={profileData.name}
              onChange={e => handleInputChange('name', e.target.value)}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-center"
              style={{
                color: currentTheme.primary,
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />
          ) : (
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight"
              style={{ color: currentTheme.primary }}
            >
              {profileData.name}
            </h1>
          )}

          {/* Title */}
          {isEditMode ? (
            <InputText
              value={profileData.title}
              onChange={e => handleInputChange('title', e.target.value)}
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 px-4 text-center"
              style={{
                color: currentTheme.textSecondary,
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />
          ) : (
            <p
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 px-4"
              style={{ color: currentTheme.textSecondary }}
            >
              {profileData.title}
            </p>
          )}

          {/* Bio */}
          {isEditMode ? (
            <InputTextarea
              value={profileData.bio}
              onChange={e => handleInputChange('bio', e.target.value)}
              rows={3}
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 text-center resize-none"
              style={{
                color: currentTheme.textSecondary,
                backgroundColor: 'transparent',
                border: 'none',
              }}
            />
          ) : (
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
              style={{ color: currentTheme.textSecondary }}
            >
              {profileData.bio}
            </p>
          )}
        </div>

        {/* Stats - Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {Object.entries(profileData.stats).map(([key, value]) => (
            <Card
              key={key}
              className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border-0 shadow"
              style={{ backgroundColor: `${currentTheme.surface}CC` }}
            >
              {isEditMode ? (
                <InputText
                  value={value.toString()}
                  onChange={e => {
                    const numValue = parseInt(e.target.value) || 0;
                    updateProfile({ stats: { ...profileData.stats, [key]: numValue } });
                  }}
                  className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-center"
                  style={{
                    color: currentTheme.primary,
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                />
              ) : (
                <div
                  className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2"
                  style={{ color: currentTheme.primary }}
                >
                  {value.toLocaleString()}
                </div>
              )}
              <div
                className="text-xs sm:text-sm uppercase tracking-wider"
                style={{ color: currentTheme.textSecondary }}
              >
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </div>
            </Card>
          ))}
        </div>

        {/* Social Links - Mobile Optimized */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          {profileData.socialLinks.map((link, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {isEditMode ? (
                <div className="flex flex-col gap-2">
                  <InputText
                    value={link.platform}
                    onChange={e => handleSocialLinkChange(index, 'platform', e.target.value)}
                    className="text-sm text-center"
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                    placeholder="Platform"
                  />
                  <InputText
                    value={link.url}
                    onChange={e => handleSocialLinkChange(index, 'url', e.target.value)}
                    className="text-sm text-center"
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                    placeholder="URL"
                  />
                  <Button
                    icon="pi pi-trash"
                    className="p-1 rounded-full"
                    style={{ backgroundColor: 'rgba(255,0,0,0.2)', color: 'red' }}
                    onClick={() => removeSocialLink(index)}
                  />
                </div>
              ) : (
                <Button
                  icon={link.icon}
                  className="p-3 sm:p-4 rounded-full border-0 shadow"
                  style={{
                    backgroundColor: `${currentTheme.primary}20`,
                    color: currentTheme.primary,
                  }}
                  onClick={() => window.open(link.url, '_blank')}
                />
              )}
            </div>
          ))}
          {isEditMode && (
            <Button
              icon="pi pi-plus"
              className="p-3 sm:p-4 rounded-full border-0 shadow"
              style={{ backgroundColor: `${currentTheme.primary}20`, color: currentTheme.primary }}
              onClick={addSocialLink}
            />
          )}
        </div>

        {/* Favorite Quote */}
        <div className="text-center px-4">
          <Card
            className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border-0 max-w-2xl mx-auto shadow"
            style={{ backgroundColor: `${currentTheme.surface}CC` }}
          >
            {isEditMode ? (
              <InputTextarea
                value={profileData.favoriteQuotes[0]}
                onChange={e => updateProfile({ favoriteQuotes: [e.target.value] })}
                rows={2}
                className="text-lg sm:text-xl italic text-center resize-none"
                style={{
                  color: currentTheme.textSecondary,
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
              />
            ) : (
              <blockquote
                className="text-lg sm:text-xl italic"
                style={{ color: currentTheme.textSecondary }}
              >
                &ldquo;{profileData.favoriteQuotes[0]}&rdquo;
              </blockquote>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EditableHeroSection;
