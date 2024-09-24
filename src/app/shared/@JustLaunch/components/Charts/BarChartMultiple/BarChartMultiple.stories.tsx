import { Meta, StoryObj } from '@storybook/react';
import { BarChartMultiple } from './';

const meta: Meta<typeof BarChartMultiple> = {
  title: 'Components/BarChartMultiple',
  component: BarChartMultiple,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BarChartMultiple>;

export const Default: Story = {
  args: {
    xDataKey: 'name',
    yDataKeys: ['mobile', 'desktop'],
    data: [
      { name: 'Jan', mobile: 300, desktop: 200 },
      { name: 'Fev', mobile: 200, desktop: 100 },
      { name: 'Mar', mobile: 450, desktop: 300 },
      { name: 'Abr', mobile: 350, desktop: 250 },
    ],
    title: 'Multiple Bar Chart',
    description: 'This chart shows multiple data values over time.',
  },
};

export const NoData: Story = {
  args: {
    xDataKey: 'name',
    yDataKeys: ['mobile', 'desktop'],
    data: [],
    title: 'No Data Available',
    description: 'This chart is currently empty as no data is provided.',
  },
};

export const MissingDataKeys: Story = {
  args: {
    xDataKey: '',
    yDataKeys: [],
    data: [
      { name: 'Jan', mobile: 300, desktop: 200 },
      { name: 'Fev', mobile: 200, desktop: 100 },
    ],
    title: 'Invalid Data Keys',
    description: 'Data keys are missing or invalid.',
  },
};
