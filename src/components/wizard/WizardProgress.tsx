'use client';

import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
}

const WizardProgress: React.FC<WizardProgressProps> = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">
      <ProgressBar value={progress} className="mb-4" />
      <div className="flex justify-between text-sm opacity-60">
        <span>
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
    </div>
  );
};

export default WizardProgress;
