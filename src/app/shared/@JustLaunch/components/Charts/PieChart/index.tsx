'use client';
import { ComponentProps } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from '../CustomTooltip';
import { ValidationError } from '../ValidationError';
import { NoDataAvailable } from '../NoDataAvailable';
import { chartsColors } from '..';

interface PieChartComponentProps extends ComponentProps<'div'> {
  data?: any[];
  dataKey: string;
  nameKey: string;
  title?: string;
  description?: string;
}

export function PieChartComponent({
  data = [],
  dataKey,
  nameKey,
  title,
  description,
  ...divProps
}: PieChartComponentProps) {
  const isDataKeyValid = dataKey.trim() !== '' && nameKey.trim() !== '';

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
      <div className='h-64 w-full'>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey={dataKey}
              nameKey={nameKey}
              fill='#8884d8'
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={chartsColors[`primary/${300 + index * 100}`]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
