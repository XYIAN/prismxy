'use client';

import React from 'react';
import Link from 'next/link';
import BaseButton from '@/components/common/BaseButton';

interface CallToActionSectionProps {
  title: string;
  description: string;
  actionText: string;
  actionHref: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title,
  description,
  actionText,
  actionHref,
}) => {
  return (
    <section className="relative z-10 py-16 px-4 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 opacity-80">{description}</p>
        <Link href={actionHref}>
          <BaseButton size="lg" className="text-lg px-8 py-4">
            {actionText}
          </BaseButton>
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
