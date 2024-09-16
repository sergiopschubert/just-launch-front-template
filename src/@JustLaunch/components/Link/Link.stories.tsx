import { Meta, StoryObj } from '@storybook/react';
import { Link } from './';

type LinkStoryProps = React.ComponentProps<typeof Link>;

const meta: Meta<LinkStoryProps> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  render: (args) => (
    <div className='flex items-center justify-center'>
      <Link {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<LinkStoryProps>;

export const Default: Story = {
  args: {
    href: '/#',
    children: 'Click here to learn more',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://www.justlaunch.com.br',
    children: 'Visit our website',
  },
};
