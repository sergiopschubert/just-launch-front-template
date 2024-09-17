import { Meta, StoryObj } from '@storybook/react';
import { RadialBarChartComponent } from '.';

const meta: Meta<typeof RadialBarChartComponent> = {
  title: 'Components/RadialBarChartComponent',
  component: RadialBarChartComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadialBarChartComponent>;

export const Default: Story = {
  args: {
    data: [
      { name: '18-24', value: 31.47 },
      { name: '25-29', value: 26.69 },
      { name: '30-34', value: 15.69 },
      { name: '35-39', value: 8.22 },
    ],
    dataKey: 'value',
    nameKey: 'name',
    title: 'Radial Bar Chart',
    description: 'This chart shows data in a radial bar format.',
  },
};

export const NoData: Story = {
  args: {
    data: [],
    dataKey: 'value',
    nameKey: 'name',
    title: 'No Data Available',
    description: 'This chart is currently empty as no data is provided.',
  },
};

export const MissingDataKeys: Story = {
  args: {
    data: [
      { name: '18-24', value: 31.47 },
      { name: '25-29', value: 26.69 },
    ],
    dataKey: '',
    nameKey: '',
    title: 'Invalid Data Keys',
    description: 'Data keys are missing or invalid.',
  },
};
