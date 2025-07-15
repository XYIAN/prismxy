'use client';

import React from 'react';

interface WizardStep {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface WizardStepsProps {
  steps: WizardStep[];
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

const WizardSteps: React.FC<WizardStepsProps> = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center space-x-2 cursor-pointer ${
              index <= currentStep ? 'opacity-100' : 'opacity-40'
            }`}
            onClick={() => index <= currentStep && onStepClick(index)}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                index < currentStep
                  ? 'bg-green-500 text-white'
                  : index === currentStep
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index < currentStep ? '✓' : index + 1}
            </div>
            <div className="hidden sm:block">
              <div className="font-medium">{step.title}</div>
              <div className="text-xs opacity-60">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WizardSteps;
