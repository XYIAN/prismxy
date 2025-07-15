'use client';

import React from 'react';
import Link from 'next/link';

interface ProfileFooterProps {
  primaryColor: string;
}

const ProfileFooter: React.FC<ProfileFooterProps> = ({ primaryColor }) => (
  <footer className="py-8 px-4 text-center opacity-60">
    <p className="text-sm">
      Powered by{' '}
      <Link href="/" className="underline hover:opacity-80" style={{ color: primaryColor }}>
        Prismxy
      </Link>
    </p>
  </footer>
);

export default ProfileFooter;
