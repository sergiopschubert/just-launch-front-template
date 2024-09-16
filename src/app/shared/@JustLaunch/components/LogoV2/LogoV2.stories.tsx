import { Meta, StoryObj } from '@storybook/react';
import { LogoV2 } from './';

type LogoV2Props = React.ComponentProps<typeof LogoV2>;

const meta: Meta<LogoV2Props> = {
  title: 'Components/LogoV2',
  component: LogoV2,
  tags: ['autodocs'],
  render: (args) => (
    <div className='flex w-56 items-start justify-start'>
      <LogoV2 {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<LogoV2Props>;

export const Default: Story = {
  args: {
    className: 'text-primary/700',
  },
};

export const CustomTextColor: Story = {
  args: {
    className: 'text-black',
  },
};
