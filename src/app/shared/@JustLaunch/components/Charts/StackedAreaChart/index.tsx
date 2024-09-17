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

interface StackedAreaChartProps extends ComponentProps<'div'> {
  data?: any[];
  xDataKey: string;
  yDataKeys: string[];
  title?: string;
  description?: string;
  showLegend?: boolean;
}

export function StackedAreaChart({
  data = [],
  xDataKey,
  yDataKeys = [],
  title,
  description,
  showLegend = false,
  ...divProps
}: StackedAreaChartProps) {
  const isDataKeyValid = xDataKey.trim() !== '' && yDataKeys.length > 0;

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
            stackOffset='expand'
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
            {yDataKeys.map((key, index) => (
              <Area
                key={key}
                type='monotone'
                dataKey={key}
                stackId='1'
                stroke={chartsColors[`primary/${600 - index * 100}`]}
                fill={chartsColors[`primary/${300 - index * 100}`]}
                strokeLinejoin='round'
                strokeLinecap='round'
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
