import { Meta, StoryObj } from '@storybook/react';
import { Loading } from './';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    messages: [
      'Loading, please wait...',
      'Fetching data...',
      'Preparing your content...',
    ],
  },
};

export const SingleMessage: Story = {
  args: {
    messages: ['Just a moment...'],
  },
};

export const LongMessages: Story = {
  args: {
    messages: [
      'This is a longer message that will rotate and show up while loading...',
      'Another long message for testing how the component handles longer text...',
    ],
  },
};
