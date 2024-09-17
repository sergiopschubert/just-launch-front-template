// components/BarChartComponent.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { BarChartComponent } from './';

const meta: Meta<typeof BarChartComponent> = {
  title: 'Components/BarChartComponent',
  component: BarChartComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BarChartComponent>;

export const Default: Story = {
  args: {
    xDataKey: 'name',
    yDataKey: 'value',
    data: [
      { name: 'Jan', value: 300 },
      { name: 'Fev', value: 200 },
      { name: 'Mar', value: 450 },
      { name: 'Abr', value: 350 },
    ],
    title: 'Simple Bar Chart',
    description: 'This chart shows data values over time.',
  },
};

export const WithLegend: Story = {
  args: {
    xDataKey: 'name',
    yDataKey: 'value',
    data: [
      { name: 'Jan', value: 300 },
      { name: 'Fev', value: 200 },
      { name: 'Mar', value: 450 },
      { name: 'Abr', value: 350 },
    ],
    title: 'Simple Bar Chart',
    description: 'This chart shows data values over time.',
    showLegend: true,
  },
};

export const NoData: Story = {
  args: {
    xDataKey: 'name',
    yDataKey: 'value',
    data: [],
    title: 'No Data Available',
    description: 'This chart is currently empty as no data is provided.',
  },
};

export const MissingDataKeys: Story = {
  args: {
    xDataKey: '',
    yDataKey: '',
    data: [
      { name: 'Jan', value: 300 },
      { name: 'Fev', value: 200 },
    ],
    title: 'Invalid Data Keys',
    description: 'Data keys are missing or invalid.',
  },
};
