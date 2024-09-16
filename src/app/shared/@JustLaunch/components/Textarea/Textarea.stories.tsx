import { Meta, StoryObj } from '@storybook/react';
import { TextareaLabel } from './TextareaLabel';
import { TextareaRoot } from './TextareaRoot';
import { TextareaPlaceHolder } from './TextareaPlaceHolder';
import { FieldError } from 'react-hook-form';

type TextareaProps = React.ComponentProps<typeof TextareaPlaceHolder>;

const meta: Meta<TextareaProps> = {
  title: 'Components/Textarea',
  component: TextareaPlaceHolder,
  tags: ['autodocs'],
  render: ({ error, ...args }) => (
    <div className='h-32 w-96'>
      <TextareaRoot>
        <TextareaLabel>Label</TextareaLabel>
        <TextareaPlaceHolder {...args} error={error} />
      </TextareaRoot>
    </div>
  ),
};

export default meta;

type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: {
    placeholder: 'Type your text here...',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Type your text here...',
    error: { message: 'This field is required' } as FieldError,
  },
};

export const CustomStyles: Story = {
  args: {
    placeholder: 'Custom styles applied...',
    className: 'border-blue-500',
  },
};
