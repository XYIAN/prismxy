'use client';

import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import BaseInput from '@/components/common/BaseInput';
import BaseButton from '@/components/common/BaseButton';

interface CreateProfileDialogProps {
  visible: boolean;
  onHide: () => void;
  onCreate: (profileName: string) => Promise<void>;
  isCreating: boolean;
}

const CreateProfileDialog: React.FC<CreateProfileDialogProps> = ({
  visible,
  onHide,
  onCreate,
  isCreating,
}) => {
  const [profileName, setProfileName] = useState('');

  const handleCreate = async () => {
    if (!profileName.trim()) return;
    await onCreate(profileName);
    setProfileName('');
  };

  const handleHide = () => {
    setProfileName('');
    onHide();
  };

  return (
    <Dialog
      visible={visible}
      onHide={handleHide}
      header="Create New Profile"
      className="w-full max-w-md"
      modal
    >
      <div className="space-y-4">
        <BaseInput
          label="Profile Name"
          value={profileName}
          onChange={e => setProfileName(e.target.value)}
          placeholder="Enter profile name..."
          autoFocus
        />

        <div className="flex gap-2 justify-end">
          <BaseButton variant="ghost" onClick={handleHide} disabled={isCreating}>
            Cancel
          </BaseButton>
          <BaseButton onClick={handleCreate} loading={isCreating} disabled={!profileName.trim()}>
            Create Profile
          </BaseButton>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateProfileDialog;
