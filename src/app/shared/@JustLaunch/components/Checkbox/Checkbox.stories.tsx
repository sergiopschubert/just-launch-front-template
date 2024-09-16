import { Meta, StoryObj } from '@storybook/react';
import { CheckboxRoot } from './CheckboxRoot';
import { CheckboxInput } from './CheckboxInput';
import { CheckboxLabel } from './CheckboxLabel';
import { CheckboxIcon } from './CheckboxIcon';

type CheckboxProps = React.ComponentProps<typeof CheckboxInput>;

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: CheckboxInput,
  tags: ['autodocs'],
  render: (args) => (
    <CheckboxRoot>
      <CheckboxInput {...args} />
      <CheckboxIcon />
      <CheckboxLabel>I agree to the terms and conditions</CheckboxLabel>
    </CheckboxRoot>
  ),
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    defaultChecked: false,
    'aria-invalid': true,
  },
  render: (args) => (
    <CheckboxRoot error='You must accept the terms before continuing'>
      <CheckboxInput {...args} />
      <CheckboxIcon />
      <CheckboxLabel>I agree to the terms and conditions</CheckboxLabel>
    </CheckboxRoot>
  ),
};
