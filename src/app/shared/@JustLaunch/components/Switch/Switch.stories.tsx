import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    isChecked: true,
  },
};

export const isDisabled: Story = {
  args: {
    disabled: true,
  },
};
