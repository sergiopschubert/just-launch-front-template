import { Meta, StoryObj } from '@storybook/react';
import { ErrorPopup } from '.';

type ErrorPopupStoryProps = React.ComponentProps<typeof ErrorPopup>;

const meta: Meta<ErrorPopupStoryProps> = {
  title: 'Components/ErrorPopup',
  component: ErrorPopup,
  render: (args) => (
    <div className='flex h-screen w-full items-center justify-center bg-primary/600'>
      <ErrorPopup {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<ErrorPopupStoryProps>;

export const Component: Story = {
  args: {
    title: 'Error Found',
    message:
      'An error occurred while processing your request. Please try again later.',
  },
};
