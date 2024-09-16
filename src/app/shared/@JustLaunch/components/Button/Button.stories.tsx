import { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';
import { HomeIcon } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => {
      return <div className='h-12 w-60'>{Story()}</div>;
    },
  ],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'ghost', 'outline'],
      },
    },
    loading: {
      control: 'boolean',
    },
    isSlot: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    loading: false,
    isSlot: false,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: <HomeIcon width={40} height={40} />,
    variant: 'ghost',
    isSlot: true,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: '',
  },
};
