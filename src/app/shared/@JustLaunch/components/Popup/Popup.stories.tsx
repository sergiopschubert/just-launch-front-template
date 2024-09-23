import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PopupRoot } from './PopupRoot';
import { PopupContent } from './PopupContent';
import { AlertCircle } from 'lucide-react';

const meta: Meta<typeof PopupRoot> = {
  title: 'Components/Popup',
  component: PopupRoot,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PopupRoot>;

export const Default: Story = {
  args: {
    trigger: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Open Popup
      </button>
    ),
    children: (
      <PopupContent
        icon={AlertCircle}
        onClose={() => console.log('Popup closed')}
        className="bg-white p-6 rounded-md shadow-md max-w-sm"
      >
        <p>This is the popup content. It can have any custom content inside it.</p>
      </PopupContent>
    ),
  },
};

export const WithStateControl: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <PopupRoot
        trigger={
          <button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
            Open Popup with State Control
          </button>
        }
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <PopupContent
          icon={AlertCircle}
          onClose={() => setIsOpen(false)}
          className="bg-white p-6 rounded-md shadow-md max-w-sm"
        >
          <p>This popup is controlled by state.</p>
        </PopupContent>
      </PopupRoot>
    );
  },
};
