'use client';

import React from 'react';
import BaseCard from '@/components/common/BaseCard';

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ title, features }) => {
  return (
    <section className="relative z-10 py-16 px-4 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <BaseCard key={index} className="text-center p-6 border-0 shadow-lg">
              <div
                className={`w-16 h-16 rounded-full ${feature.gradient} flex items-center justify-center mx-auto mb-4`}
              >
                <i className={`${feature.icon} text-2xl text-white`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </BaseCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
