import { Meta, StoryObj } from '@storybook/react';
import { StackedAreaChart } from './';

const meta: Meta<typeof StackedAreaChart> = {
  title: 'Components/StackedAreaChart',
  component: StackedAreaChart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StackedAreaChart>;

export const Default: Story = {
  args: {
    xDataKey: 'name',
    yDataKeys: ['mobile', 'desktop'],
    data: [
      { name: 'Jan', mobile: 400, desktop: 200 },
      { name: 'Fev', mobile: 300, desktop: 100 },
      { name: 'Mar', mobile: 500, desktop: 300 },
      { name: 'Abr', mobile: 200, desktop: 400 },
    ],
    title: 'Stacked Area Chart',
    description: 'This chart shows mobile and desktop data over time.',
    showLegend: false,
  },
};

export const WithLegend: Story = {
  args: {
    xDataKey: 'name',
    yDataKeys: ['mobile', 'desktop'],
    data: [
      { name: 'Jan', mobile: 400, desktop: 200 },
      { name: 'Fev', mobile: 300, desktop: 100 },
      { name: 'Mar', mobile: 500, desktop: 300 },
      { name: 'Abr', mobile: 200, desktop: 400 },
    ],
    title: 'Stacked Area Chart',
    description: 'This chart shows mobile and desktop data over time.',
    showLegend: true,
  },
};

export const NoData: Story = {
  args: {
    xDataKey: 'name',
    yDataKeys: ['mobile', 'desktop'],
    data: [],
  },
};

export const MissingDataKeys: Story = {
  args: {
    xDataKey: '',
    yDataKeys: [],
    data: [
      { name: 'Jan', mobile: 400, desktop: 200 },
      { name: 'Fev', mobile: 300, desktop: 100 },
    ],
  },
};
