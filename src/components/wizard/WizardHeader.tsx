'use client';

import React from 'react';

interface WizardHeaderProps {
  title: string;
  description: string;
}

const WizardHeader: React.FC<WizardHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg opacity-80">{description}</p>
    </div>
  );
};

export default WizardHeader;
