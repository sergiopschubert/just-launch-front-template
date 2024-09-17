import { Meta, StoryObj } from '@storybook/react';
import { FunnelChart } from '.';

const meta: Meta<typeof FunnelChart> = {
  title: 'Components/FunnelChart',
  component: FunnelChart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FunnelChart>;

export const Default: Story = {
  args: {
    data: [
      { id: 'impressions', value: 20500, label: 'Impressions' },
      { id: 'clicks', value: 15700, label: 'Clicks' },
      { id: 'purchases', value: 3930, label: 'Purchases' },
    ],
    title: 'Funnel Chart',
    description: 'This chart shows data in a funnel format.',
  },
};

export const NoData: Story = {
  args: {
    data: [],
    title: 'No Data Available',
    description: 'This chart is currently empty as no data is provided.',
  },
};
