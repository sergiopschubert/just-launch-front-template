import { Meta, StoryObj } from '@storybook/react';
import { Profile } from './';

const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    email: 'john.doe@example.com',
    name: 'John Doe',
    dark: true,
  },
};

export const LightMode: Story = {
  args: {
    email: 'jane.doe@example.com',
    name: 'Jane Doe',
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

export const CustomImage: Story = {
  args: {
    email: 'custom.image@example.com',
    name: 'Custom Image',
    imageUri: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CustomImage',
    dark: true,
  },
};
