import { Meta, StoryObj } from '@storybook/react';
import { Stat } from './';

const meta: Meta<typeof Stat> = {
  title: 'Components/Stat',
  component: Stat,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  args: {
    title: 'New Subscribers',
    value: '1,200',
    change: '+15%',
  },
};

export const NegativeChange: Story = {
  args: {
    title: 'Churn Rate',
    value: '5%',
    change: '-3%',
  },
};

export const LargeValue: Story = {
  args: {
    title: 'Total Revenue',
    value: '$500,000',
    change: '+8%',
  },
};

export const SmallValue: Story = {
  args: {
    title: 'Active Users',
    value: '350',
    change: '+2%',
  },
};
