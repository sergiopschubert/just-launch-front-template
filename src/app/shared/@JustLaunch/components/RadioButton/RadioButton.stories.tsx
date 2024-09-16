import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Default Option',
    value: 'default',
  },
};
export const Selected: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('selected');

    const handleRadioChange = (value: string) => {
      setSelectedValue(value);
    };

    return (
      <div>
        <RadioButton
          label='Option 1'
          value='option1'
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
        <RadioButton
          label='Selected Option'
          value='selected'
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
      </div>
    );
  },
};

export const isDisabled: Story = {
  args: {
    label: 'Option',
    value: 'option',
    disabled: true,
  },
};
