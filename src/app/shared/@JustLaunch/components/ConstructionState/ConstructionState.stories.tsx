import { Meta, StoryObj } from '@storybook/react';
import { ConstructionState } from './';
import { Button } from '../Button';

const meta: Meta<typeof ConstructionState> = {
  title: 'Components/ConstructionState',
  component: ConstructionState,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ConstructionState>;

export const UnderConstruction: Story = {
  args: {
    title: 'Under Construction',
    description: 'This section is under construction. Please check back later.',
    children: <Button className='p-4'>Notify Me</Button>,
  },
};
