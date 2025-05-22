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
      <button className='rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'>
        Open Popup
      </button>
    ),
    children: (
      <PopupContent
        icon={AlertCircle}
        onClose={() => console.log('Popup closed')}
        className='fixed left-1/2 top-1/2 z-50  h-auto w-4/5 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md bg-white p-8 text-gray-900 shadow lg:w-3/5 lg:max-w-full'
      >
        <p>
          This is the popup content. It can have any custom content inside it.
        </p>
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
          <button className='rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700'>
            Open Popup with State Control
          </button>
        }
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <PopupContent
          icon={AlertCircle}
          onClose={() => setIsOpen(false)}
          className='fixed left-1/2 top-1/2 z-50  h-auto w-4/5 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md bg-white p-8 text-gray-900 shadow lg:w-3/5 lg:max-w-full'
        >
          <p>This popup is controlled by state.</p>
        </PopupContent>
      </PopupRoot>
    );
  },
};
