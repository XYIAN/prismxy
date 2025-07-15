'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'primereact/button';

interface ProfileHeaderProps {
  primaryColor: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ primaryColor }) => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-white/10">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <div className="relative w-8 h-8">
            <Image src="/icon1.png" alt="Prismxy" fill className="object-cover rounded-lg" />
          </div>
          <span className="text-lg font-bold" style={{ color: primaryColor }}>
            Prismxy
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            icon="pi pi-share-alt"
            className="p-button-text"
            style={{ color: primaryColor }}
            tooltip="Share Profile"
          />
          <Button
            icon="pi pi-heart"
            className="p-button-text"
            style={{ color: primaryColor }}
            tooltip="Like Profile"
          />
        </div>
      </div>
    </div>
  </header>
);

export default ProfileHeader;
