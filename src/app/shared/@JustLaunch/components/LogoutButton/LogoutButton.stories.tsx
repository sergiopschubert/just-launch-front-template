import { Meta, StoryObj } from '@storybook/react';
import { LogoutButton } from './';

const meta: Meta<typeof LogoutButton> = {
  title: 'Components/LogoutButton',
  component: LogoutButton,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof LogoutButton>;

export const Default: Story = {
  args: {
    dark: true,
  },
};

export const LightMode: Story = {
  args: {
    dark: false,
  },
  decorators: [
    (Story) => (
      <div className='rounded border bg-primary/600 p-4'>
        <Story />
      </div>
    ),
  ],
};
