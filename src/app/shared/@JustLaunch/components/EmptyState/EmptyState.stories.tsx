import { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './';
import { Button } from '../Button';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No projects',
    description: 'Get started by creating a new project.',
    children: <Button className='p-3'>New Project</Button>,
  },
};
