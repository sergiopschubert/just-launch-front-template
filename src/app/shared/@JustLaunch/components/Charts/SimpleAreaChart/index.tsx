import { ComponentProps } from 'react';
import {
  AreaChart,
  Area,
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

interface SimpleAreaChartProps extends ComponentProps<'div'> {
  data?: any[];
  xDataKey: string;
  yDataKey: string;
  title?: string;
  description?: string;
  showLegend?: boolean;
}

export function SimpleAreaChart({
  data = [],
  xDataKey,
  yDataKey,
  title,
  description,
  showLegend = false,
  ...divProps
}: SimpleAreaChartProps) {
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
          <AreaChart
            data={data}
            margin={{ top: 3, right: 40, left: 40, bottom: 3 }}
          >
            <CartesianGrid
              vertical={false}
              stroke={chartsColors['primary/50']}
            />
            <XAxis
              dataKey={xDataKey}
              interval={0}
              stroke=''
              tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 300 }}
              tickFormatter={truncateLabel}
            />
            <Tooltip content={<CustomTooltip />} />
            {showLegend && <Legend content={<CustomLegend />} />}
            <Area
              type='monotone'
              dataKey={yDataKey}
              stroke={chartsColors['primary/600']}
              fill={chartsColors['primary/300']}
              strokeLinejoin='round'
              strokeLinecap='round'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
