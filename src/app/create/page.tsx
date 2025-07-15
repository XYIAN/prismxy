'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Profile } from '@/types';
import { FONT_OPTIONS, DEFAULT_FONT } from '@/constants/fonts';
import { THEMES, DEFAULT_THEME } from '@/constants/themes';
import { Dropdown } from 'primereact/dropdown';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import BaseCard from '@/components/common/BaseCard';
import WizardHeader from '@/components/wizard/WizardHeader';
import WizardProgress from '@/components/wizard/WizardProgress';
import WizardSteps from '@/components/wizard/WizardSteps';
import WizardNavigation from '@/components/wizard/WizardNavigation';
import ProfileNameStep from '@/components/wizard/steps/ProfileNameStep';

interface WizardStep {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const WIZARD_STEPS: WizardStep[] = [
  {
    id: 'basic',
    title: 'Basic Information',
    description: 'Set your profile name and basic details',
    isCompleted: false,
  },
  {
    id: 'appearance',
    title: 'Appearance',
    description: 'Choose theme, font, and colors',
    isCompleted: false,
  },
  {
    id: 'sections',
    title: 'Sections',
    description: 'Add and configure profile sections',
    isCompleted: false,
  },
  {
    id: 'preview',
    title: 'Preview & Publish',
    description: 'Review and publish your profile',
    isCompleted: false,
  },
];

const WIZARD_DATA = {
  header: {
    title: 'Create Your Profile',
    description: 'Follow the steps below to create your perfect profile',
  },
};

export default function CreateProfile() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(WIZARD_STEPS);
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState('');
  const [isCheckingName, setIsCheckingName] = useState(false);

  const [profileData, setProfileData] = useState<Partial<Profile>>({
    name: '',
    slug: '',
    theme: DEFAULT_THEME.id,
    font: DEFAULT_FONT.id,
    customColors: {
      background: DEFAULT_THEME.background,
      primary: DEFAULT_THEME.primary,
      secondary: DEFAULT_THEME.secondary,
      accent: DEFAULT_THEME.accent,
    },
    sections: [],
    settings: {
      allowComments: false,
      showAnalytics: true,
      seoOptimized: true,
    },
  });

  // Check if profile name is available
  const checkProfileName = async (name: string) => {
    if (!name.trim()) return;

    setIsCheckingName(true);

    // Simulate API call to check name availability
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock check - replace with actual API call
    const isAvailable = !['john-doe', 'creative-portfolio', 'test'].includes(
      name.toLowerCase().replace(/\s+/g, '-')
    );

    setIsCheckingName(false);

    if (!isAvailable) {
      setNameError('This profile name is already taken. Please choose a different one.');
    } else {
      setNameError('');
    }

    return isAvailable;
  };

  const handleNameChange = (name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    setProfileData(prev => ({ ...prev, name, slug }));

    // Debounce name checking
    const timeoutId = setTimeout(() => {
      checkProfileName(name);
    }, 500);

    return () => clearTimeout(timeoutId);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      updateStepCompletion(currentStep, true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateStepCompletion = (stepIndex: number, isCompleted: boolean) => {
    setSteps(prev =>
      prev.map((step, index) => (index === stepIndex ? { ...step, isCompleted } : step))
    );
  };

  const handleCreateProfile = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Navigate to the new profile
    router.push(`/user/${profileData.slug}`);
  };

  const renderAppearanceStep = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Theme</label>
        <Dropdown
          value={profileData.theme}
          options={THEMES}
          optionLabel="name"
          optionValue="id"
          onChange={e => setProfileData(prev => ({ ...prev, theme: e.value }))}
          className="w-full"
          placeholder="Select a theme"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Font</label>
        <Dropdown
          value={profileData.font}
          options={FONT_OPTIONS}
          optionLabel="name"
          optionValue="id"
          onChange={e => setProfileData(prev => ({ ...prev, font: e.value }))}
          className="w-full"
          placeholder="Select a font"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Custom Colors</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs opacity-60 mb-1">Background</label>
            <ColorPicker
              value={profileData.customColors?.background}
              onChange={e =>
                setProfileData(prev => ({
                  ...prev,
                  customColors: { ...prev.customColors!, background: e.value as string },
                }))
              }
            />
          </div>
          <div>
            <label className="block text-xs opacity-60 mb-1">Primary</label>
            <ColorPicker
              value={profileData.customColors?.primary}
              onChange={e =>
                setProfileData(prev => ({
                  ...prev,
                  customColors: { ...prev.customColors!, primary: e.value as string },
                }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSectionsStep = () => (
    <div className="space-y-6">
      <p className="opacity-80">
        Choose which sections to include in your profile. You can always add or remove sections
        later.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['hero', 'about', 'skills', 'portfolio', 'experience', 'contact'].map(section => (
          <BaseCard key={section} className="border-0 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold capitalize">{section}</h4>
                <p className="text-sm opacity-60">
                  {section === 'hero' && 'Introduction and main call-to-action'}
                  {section === 'about' && 'Personal story and background'}
                  {section === 'skills' && 'Technical skills and expertise'}
                  {section === 'portfolio' && 'Showcase of your work'}
                  {section === 'experience' && 'Work history and achievements'}
                  {section === 'contact' && 'Contact information and form'}
                </p>
              </div>
              <Button
                icon="pi pi-plus"
                className="p-button-rounded p-button-text"
                onClick={() => {
                  // Add section logic
                }}
              />
            </div>
          </BaseCard>
        ))}
      </div>
    </div>
  );

  const renderPreviewStep = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Profile Preview</h3>
        <p className="opacity-80 mb-6">Review your profile settings before publishing</p>
      </div>

      <BaseCard className="border-0 shadow-lg">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Profile Name:</span>
            <span>{profileData.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">URL:</span>
            <span className="text-blue-500">prismxy.com/user/{profileData.slug}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Theme:</span>
            <span className="capitalize">{profileData.theme}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Font:</span>
            <span>{FONT_OPTIONS.find(f => f.id === profileData.font)?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Sections:</span>
            <span>{profileData.sections?.length || 0} sections</span>
          </div>
        </div>
      </BaseCard>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ProfileNameStep
            profileName={profileData.name || ''}
            profileSlug={profileData.slug || ''}
            onNameChange={handleNameChange}
            nameError={nameError}
            isCheckingName={isCheckingName}
          />
        );
      case 1:
        return renderAppearanceStep();
      case 2:
        return renderSectionsStep();
      case 3:
        return renderPreviewStep();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <WizardHeader {...WIZARD_DATA.header} />
        <WizardProgress currentStep={currentStep} totalSteps={steps.length} />
        <WizardSteps steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />

        <BaseCard className="border-0 shadow-lg">
          <div className="p-6">{renderCurrentStep()}</div>
        </BaseCard>

        <WizardNavigation
          currentStep={currentStep}
          totalSteps={steps.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onFinish={handleCreateProfile}
          isNextDisabled={!profileData.name || !!nameError}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
