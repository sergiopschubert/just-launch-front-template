'use client';
import { ComponentProps } from 'react';
import {
  RadialBarChart,
  RadialBar,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { CustomTooltip } from '../CustomTooltip';
import { ValidationError } from '../ValidationError';
import { NoDataAvailable } from '../NoDataAvailable';
import { chartsColors } from '..';

interface RadialBarChartComponentProps extends ComponentProps<'div'> {
  data?: any[];
  dataKey: string;
  nameKey: string;
  title?: string;
  description?: string;
}

export function RadialBarChartComponent({
  data = [],
  dataKey,
  nameKey,
  title,
  description,
  ...divProps
}: RadialBarChartComponentProps) {
  const isDataKeyValid = dataKey.trim() !== '' && nameKey.trim() !== '';

  if (!isDataKeyValid) {
    return <ValidationError {...divProps} />;
  }

  if (!data || data.length === 0) {
    return <NoDataAvailable {...divProps} />;
  }

  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

  // Aplicar cores aos itens com base no índice
  const dataWithColors = data.map((entry, index) => ({
    ...entry,
    fill: chartsColors[`primary/${300 + index * 100}`],
  }));

  return (
    <div className='w-full' {...divProps}>
      {title && <h2 className='mb-2 text-xl font-bold'>{title}</h2>}
      {description && <p className='mb-4 text-gray-500'>{description}</p>}
      <div className='h-64 w-full'>
        <ResponsiveContainer>
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='20%'
            outerRadius='90%'
            data={dataWithColors} // Use os dados com cores aplicadas
          >
            <RadialBar
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              dataKey={dataKey}
              isAnimationActive={false}
            />
            <Legend
              iconSize={10}
              layout='vertical'
              verticalAlign='middle'
              wrapperStyle={style}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
