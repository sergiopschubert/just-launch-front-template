import { Meta, StoryObj } from '@storybook/react';
import { PieChartComponent } from './';

const meta: Meta<typeof PieChartComponent> = {
  title: 'Components/PieChartComponent',
  component: PieChartComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PieChartComponent>;

export const Default: Story = {
  args: {
    data: [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
    ],
    dataKey: 'value',
    nameKey: 'name',
    title: 'Pie Chart',
    description: 'This chart shows the distribution of values in a pie format.',
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
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
    ],
    dataKey: '',
    nameKey: '',
    title: 'Invalid Data Keys',
    description: 'Data keys are missing or invalid.',
  },
};
