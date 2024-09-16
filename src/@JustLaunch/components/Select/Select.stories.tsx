import { Meta, StoryObj } from '@storybook/react';
import { SelectWrapper } from './SelectWrapper';
import { SelectItem } from './SelectItem';
import { SelectLabel } from './SelectLabel';
import { SelectRoot } from './SelectRoot';

type SelectProps = React.ComponentProps<typeof SelectWrapper>;

const meta: Meta<SelectProps> = {
  title: 'Components/Select',
  component: SelectWrapper,
  tags: ['autodocs'],
  render: ({ placeholder, iconLeft, iconRight, children, ...args }) => (
    <div className='w-60'>
      <SelectRoot>
        <SelectLabel>Label</SelectLabel>
        <SelectWrapper
          placeholder={placeholder}
          iconLeft={iconLeft}
          iconRight={iconRight}
          {...args}
        >
          {children}
        </SelectWrapper>
      </SelectRoot>
    </div>
  ),
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    iconLeft: undefined,
    iconRight: undefined,
    children: (
      <>
        <SelectItem text='Option 1' value={'Option 1'} />
        <SelectItem
          text='Option 2'
          value={'Option 2'}
          icon={<span className='text-gray-500'>⭐</span>}
        />
      </>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Select an option',
    iconLeft: undefined,
    iconRight: undefined,
    children: (
      <>
        <SelectItem
          text='Option 1'
          value={'Option 1'}
          icon={<span className='text-gray-500'>🌟</span>}
        />
        <SelectItem text='Option 2' value={'Option 2'} />
      </>
    ),
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Choose your favorite',
    iconLeft: undefined,
    iconRight: undefined,
    children: (
      <>
        <SelectItem text='Option A' value={'Option A'} />
        <SelectItem text='Option B' value={'Option B'} />
      </>
    ),
  },
};
