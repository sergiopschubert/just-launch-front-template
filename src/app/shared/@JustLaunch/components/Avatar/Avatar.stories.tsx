import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};
export const CustomSize: Story = {
  args: {
    className: 'h-16 w-16',
  },
};

export const CustomImage: Story = {
  args: {
    imageUri: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CustomImage',
  },
};
