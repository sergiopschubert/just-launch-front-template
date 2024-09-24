import { Meta, StoryObj } from '@storybook/react';
import { SimpleAreaChart } from './';

const meta: Meta<typeof SimpleAreaChart> = {
  title: 'Components/SimpleAreaChart',
  component: SimpleAreaChart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SimpleAreaChart>;

export const Default: Story = {
  args: {
    xDataKey: 'name',
    yDataKey: 'valor',
    data: [
      { name: 'Janeiro', valor: 400 },
      { name: 'Fev', valor: 300 },
      { name: 'Mar', valor: 500 },
      { name: 'Abr', valor: 200 },
    ],
    title: 'Simple Area Chart',
    description: 'This chart shows simple data values over time.',
  },
};

export const WithLegend: Story = {
  args: {
    xDataKey: 'name',
    yDataKey: 'valor',
    data: [
      { name: 'Janeiro', valor: 400 },
      { name: 'Fev', valor: 300 },
      { name: 'Mar', valor: 500 },
      { name: 'Abr', valor: 200 },
    ],
    showLegend: true,
    title: 'Simple Area Chart with Legend',
    description: 'This chart includes a legend to distinguish data values.',
  },
};

export const NoData: Story = {
  args: {
    xDataKey: 'name',
    yDataKey: 'valor',
    data: [],
  },
};

export const MissingDataKeys: Story = {
  args: {
    xDataKey: '',
    yDataKey: '',
    data: [
      { name: 'Jan', valor: 400 },
      { name: 'Fev', valor: 300 },
    ],
  },
};
