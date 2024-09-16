import { Meta, StoryObj } from '@storybook/react';
import { LogoV1 } from './';

type LogoV1Props = React.ComponentProps<typeof LogoV1>;

const meta: Meta<LogoV1Props> = {
  title: 'Components/LogoV1',
  component: LogoV1,
  tags: ['autodocs'],
  render: (args) => (
    <div className='flex items-start justify-start'>
      <LogoV1 {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<LogoV1Props>;

export const Default: Story = {
  args: {
    width: 60,
    height: 59,
  },
};

export const CustomSize: Story = {
  args: {
    width: 120,
    height: 118,
  },
};
