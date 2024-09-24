import { Divider } from './';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    className: { control: 'text' },
  },
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const WithCustomClassName: Story = {
  args: {
    className: 'my-4 border-red-500',
  },
};
