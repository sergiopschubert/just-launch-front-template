import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './index';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    (Story) => (
      <div className='w-[300px]'>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
  },
};

export const Range: Story = {
  args: {
    defaultValue: [20, 80],
  },
};

export const Steps: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
    defaultValue: [30],
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [30],
    disabled: true,
  },
};
