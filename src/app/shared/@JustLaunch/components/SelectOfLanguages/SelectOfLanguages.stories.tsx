import { Meta, StoryObj } from '@storybook/react';
import { SelectOfLanguages } from './';

type SelectOfLanguagesProps = React.ComponentProps<typeof SelectOfLanguages>;

const meta: Meta<SelectOfLanguagesProps> = {
  title: 'Components/SelectOfLanguages',
  component: SelectOfLanguages,
  tags: ['autodocs'],
  render: (args) => (
    <div className='flex h-48 justify-end bg-primary/50 px-10 py-1'>
      <SelectOfLanguages {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<SelectOfLanguagesProps>;

export const Default: Story = {
  args: {
    principalLanguage: 'English',
  },
};

export const PortugueseSelected: Story = {
  args: {
    principalLanguage: 'Portuguese',
  },
};
