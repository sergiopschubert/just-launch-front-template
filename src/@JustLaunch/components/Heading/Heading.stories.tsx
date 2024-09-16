import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Heading } from './';
import { Button } from '../Button';
const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    title: 'Title',
  },
};

export const WithChildren: Story = {
  args: {
    title: 'Order',
    children: (
      <>
        <Button className='p-2'>Refund</Button>
        <Button variant='outline' className='p-2'>
          Invoices
        </Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
};
