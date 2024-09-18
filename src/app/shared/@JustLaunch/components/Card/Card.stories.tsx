import { Meta, StoryObj } from '@storybook/react';
import { Card } from './';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a default card.',
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div>
        <h2 className='text-lg font-semibold'>Card Title</h2>
        <p className='mt-2 text-sm text-gray-600'>
          This is some custom content inside the card.
        </p>
      </div>
    ),
  },
};

export const CustomStyling: Story = {
  args: {
    children: 'This card has custom styling.',
    className: 'bg-primary/500 text-white',
  },
};
