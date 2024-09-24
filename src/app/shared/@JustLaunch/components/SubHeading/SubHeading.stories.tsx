import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SubHeading } from './';

const meta: Meta<typeof SubHeading> = {
  title: 'Components/SubHeading',
  component: SubHeading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SubHeading>;

export const Default: Story = {
  args: {
    title: 'This is a SubHeading',
    level: 2,
  },
};

export const WithChildren: Story = {
  args: {
    title: 'SubHeading with children',
    level: 3,
    children: (
      <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Action Button
      </button>
    ),
  },
};

export const CustomClassName: Story = {
  args: {
    title: 'SubHeading with custom class',
    level: 4,
    className: 'text-red-500 underline',
  },
};
