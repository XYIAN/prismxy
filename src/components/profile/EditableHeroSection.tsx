'use client';

import React from 'react';
import { useTheme } from '@/hooks';
import { useProfile } from '@/hooks/useProfile';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import Image from 'next/image';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useRef, useState } from 'react';

const EditableHeroSection: React.FC = () => {
  const { currentTheme } = useTheme();
  const { profileData, isEditMode, updateProfile } = useProfile();
  const toast = useRef<Toast>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    const updatedSections = [...profileData.sections];
    updatedSections[heroSectionIndex] = {
      ...heroSection,
      content: { ...heroContent, [field]: value },
    };
    updateProfile({ sections: updatedSections });
  };

  // Find the hero section
  const heroSectionIndex = profileData.sections.findIndex(section => section.type === 'hero');
  const heroSection = profileData.sections[heroSectionIndex];
  const heroContent = heroSection?.content || {};

  function isHeroContent(content: unknown): content is {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    stats: Record<string, number>;
    socialLinks: Array<{ platform: string; url: string; icon: string }>;
    favoriteQuotes: string[];
  } {
    if (!content || typeof content !== 'object') return false;
    const c = content as Record<string, unknown>;
    return (
      typeof c.name === 'string' &&
      typeof c.title === 'string' &&
      typeof c.bio === 'string' &&
      typeof c.avatar === 'string' &&
      typeof c.stats === 'object' &&
      Array.isArray(c.socialLinks) &&
      Array.isArray(c.favoriteQuotes)
    );
  }

  if (!isHeroContent(heroContent)) return null;

  const handleSocialLinkChange = (index: number, field: string, value: string) => {
    if (!Array.isArray(heroContent.socialLinks)) return;
    const updatedLinks = [...heroContent.socialLinks];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    const updatedSections = [...profileData.sections];
    updatedSections[heroSectionIndex] = {
      ...heroSection,
      content: { ...heroContent, socialLinks: updatedLinks },
    };
    updateProfile({ sections: updatedSections });
  };

  const addSocialLink = () => {
    const newLink = {
      platform: 'New Platform',
      url: 'https://example.com',
      icon: 'pi pi-link',
    };
    const updatedLinks = Array.isArray(heroContent.socialLinks)
      ? [...heroContent.socialLinks, newLink]
      : [newLink];
    const updatedSections = [...profileData.sections];
    updatedSections[heroSectionIndex] = {
      ...heroSection,
      content: { ...heroContent, socialLinks: updatedLinks },
    };
    updateProfile({ sections: updatedSections });
  };

  const removeSocialLink = (index: number) => {
    if (!Array.isArray(heroContent.socialLinks)) return;
    const updatedLinks = heroContent.socialLinks.filter((_: unknown, i: number) => i !== index);
    const updatedSections = [...profileData.sections];
    updatedSections[heroSectionIndex] = {
      ...heroSection,
      content: { ...heroContent, socialLinks: updatedLinks },
    };
    updateProfile({ sections: updatedSections });
  };

  // Add save handler
  const handleSave = async () => {
    setIsSaving(true);
    await updateProfile({}, () => {
      setIsSaving(false);
      toast.current?.show({
        severity: 'success',
        summary: 'Profile Updated',
        detail: 'Your changes have been saved!',
        life: 2500,
      });
    });
  };

  return (
    <section className="py-8 px-4 sm:py-12 md:py-20">
      <Toast ref={toast} position="top-center" />
      {isSaving && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="flex flex-col items-center gap-4">
            <ProgressSpinner style={{ width: 60, height: 60 }} strokeWidth="4" />
            <span className="text-white text-lg font-medium">Saving your changes...</span>
          </div>
        </div>
      )}
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
              value={heroContent.name || ''}
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
              {heroContent.name}
            </h1>
          )}

          {/* Title */}
          {isEditMode ? (
            <InputText
              value={heroContent.title || ''}
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
              {heroContent.title}
            </p>
          )}

          {/* Bio */}
          {isEditMode ? (
            <InputTextarea
              value={heroContent.bio || ''}
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
              {heroContent.bio}
            </p>
          )}
        </div>

        {/* Stats - Mobile Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {heroContent.stats &&
            Object.entries(heroContent.stats).map(([key, value]) => (
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
                      const updatedStats = { ...heroContent.stats, [key]: numValue };
                      const updatedSections = [...profileData.sections];
                      updatedSections[heroSectionIndex] = {
                        ...heroSection,
                        content: { ...heroContent, stats: updatedStats },
                      };
                      updateProfile({ sections: updatedSections });
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
          {Array.isArray(heroContent.socialLinks) &&
            heroContent.socialLinks.map(
              (link: { platform: string; url: string; icon: string }, index: number) => (
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
              )
            )}
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
                value={heroContent.favoriteQuotes?.[0] || ''}
                onChange={e => {
                  const updatedQuotes = [e.target.value];
                  const updatedSections = [...profileData.sections];
                  updatedSections[heroSectionIndex] = {
                    ...heroSection,
                    content: { ...heroContent, favoriteQuotes: updatedQuotes },
                  };
                  updateProfile({ sections: updatedSections });
                }}
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
                &ldquo;{heroContent.favoriteQuotes?.[0] || ''}&rdquo;
              </blockquote>
            )}
          </Card>
        </div>
        {isEditMode && (
          <div className="flex justify-end mt-8">
            <Button
              label="Save Changes"
              icon="pi pi-save"
              className="p-button-success"
              style={{ backgroundColor: currentTheme.primary, color: currentTheme.background }}
              onClick={handleSave}
              disabled={isSaving}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default EditableHeroSection;
