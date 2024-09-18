'use client';
import { ComponentProps } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { chartsColors, truncateLabel } from '..';
import { CustomTooltip } from '../CustomTooltip';
import { CustomLegend } from '../CustomLegend';
import { ValidationError } from '../ValidationError';
import { NoDataAvailable } from '../NoDataAvailable';

interface BarChartComponentProps extends ComponentProps<'div'> {
  data?: any[];
  xDataKey: string;
  yDataKey: string;
  title?: string;
  description?: string;
  showLegend?: boolean;
}

export function BarChartComponent({
  data = [],
  xDataKey,
  yDataKey,
  title,
  description,
  showLegend = false,
  ...divProps
}: BarChartComponentProps) {
  const isDataKeyValid = xDataKey.trim() !== '' && yDataKey.trim() !== '';

  if (!isDataKeyValid) {
    return <ValidationError {...divProps} />;
  }

  if (!data || data.length === 0) {
    return <NoDataAvailable {...divProps} />;
  }

  return (
    <div className='w-full' {...divProps}>
      {title && <h2 className='mb-2 text-xl font-bold'>{title}</h2>}
      {description && <p className='mb-4 text-gray-500'>{description}</p>}
      <div className='h-64 w-full overflow-hidden rounded-lg'>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 3, right: 40, left: 40, bottom: 3 }}
          >
            <CartesianGrid
              vertical={false}
              stroke={chartsColors['primary/50']}
            />
            <XAxis dataKey={xDataKey} tickFormatter={truncateLabel} />
            <Tooltip content={<CustomTooltip />} />
            {showLegend && <Legend content={<CustomLegend />} />}
            <Bar dataKey={yDataKey} fill={chartsColors['primary/600']} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
