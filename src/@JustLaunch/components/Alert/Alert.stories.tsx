import { Meta, StoryObj } from '@storybook/react';
import { AlertRoot } from './AlertRoot';
import { AlertMessage } from './AlertMessage';
import { AlertFooter } from './AlertFooter';
import { AlertLink } from './AlertLink';

type AlertStoryProps = React.ComponentProps<typeof AlertRoot>;

const meta: Meta<AlertStoryProps> = {
  title: 'Components/Alert',
  component: AlertRoot,
  tags: ['autodocs'],
  render: (args) => (
    <div className='flex items-center justify-center'>
      <AlertRoot {...args}>{args.children}</AlertRoot>
    </div>
  ),
};

export default meta;

type Story = StoryObj<AlertStoryProps>;

export const Default: Story = {
  args: {
    title: 'Default Alert',
    type: 'info',
    children: <AlertMessage>This is a default alert message.</AlertMessage>,
  },
};

export const WithTitleOnly: Story = {
  args: {
    title: 'Info Alert',
    type: 'info',
    children: null, // Apenas o título e ícone
  },
};

export const WithTitleAndMessage: Story = {
  args: {
    title: 'Success Alert',
    type: 'success',
    children: <AlertMessage>Operation was successful!</AlertMessage>,
  },
};

export const WithFooterAndLink: Story = {
  args: {
    title: 'Warning Alert',
    type: 'warning',
    children: (
      <>
        <AlertMessage>Be careful with this operation.</AlertMessage>
        <AlertFooter>
          <AlertLink href='#'>Learn more</AlertLink>
        </AlertFooter>
      </>
    ),
  },
};

export const ErrorWithFooterAndLink: Story = {
  args: {
    title: 'Error Alert',
    type: 'error',
    children: (
      <>
        <AlertMessage>There was an error processing your request.</AlertMessage>
        <AlertFooter>
          <AlertLink href='#'>Retry</AlertLink>
          <AlertLink href='#'>Contact Support</AlertLink>
        </AlertFooter>
      </>
    ),
  },
};
