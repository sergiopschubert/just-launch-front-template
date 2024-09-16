import { Meta, StoryObj } from '@storybook/react';
import { InputRoot } from './InputRoot';
import { InputWrapper } from './InputWrapper';
import { InputPlaceHolder } from './InputPlaceHolder';
import { InputLabel } from './InputLabel';
import { FieldError } from 'react-hook-form';

type PropsAndCustomArgs = React.ComponentProps<typeof InputPlaceHolder> & {
  label: string;
  error?: FieldError;
};

const meta: Meta<PropsAndCustomArgs> = {
  title: 'Components/Input',
  component: InputPlaceHolder,
  tags: ['autodocs'],
  render: ({ label, error, ...args }) => (
    <div className='h-12 w-60'>
      <InputRoot>
        <InputLabel>{label}</InputLabel>
        <InputWrapper error={error}>
          <InputPlaceHolder {...args} />
        </InputWrapper>
      </InputRoot>
    </div>
  ),
};

export default meta;

type Story = StoryObj<PropsAndCustomArgs>;

export const Default: Story = {
  args: { label: 'Email', placeholder: 'Enter your email', type: 'email' },
};

export const Error: Story = {
  args: {
    error: { message: 'Email is required' } as FieldError,
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
};
