'use client';

import React from 'react';
import BaseButton from '@/components/common/BaseButton';

interface WizardNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
  isNextDisabled: boolean;
  isLoading: boolean;
}

const WizardNavigation: React.FC<WizardNavigationProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onFinish,
  isNextDisabled,
  isLoading,
}) => {
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex justify-between mt-8">
      <BaseButton variant="ghost" onClick={onPrevious} disabled={currentStep === 0}>
        <i className="pi pi-chevron-left mr-2" />
        Previous
      </BaseButton>

      <div className="flex gap-2">
        {isLastStep ? (
          <BaseButton onClick={onFinish} loading={isLoading} disabled={isNextDisabled}>
            <i className="pi pi-check mr-2" />
            Create Profile
          </BaseButton>
        ) : (
          <BaseButton onClick={onNext} disabled={isNextDisabled}>
            Next
            <i className="pi pi-chevron-right ml-2" />
          </BaseButton>
        )}
      </div>
    </div>
  );
};

export default WizardNavigation;
