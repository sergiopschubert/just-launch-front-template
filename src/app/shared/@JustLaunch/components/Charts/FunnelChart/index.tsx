import { ResponsiveFunnel } from '@nivo/funnel';

import { NoDataAvailable } from '../NoDataAvailable';
import { chartsColors } from '..';

interface FunnelChartProps {
  data: Array<{
    id: string;
    value: number;
    label: string;
  }>;
  title?: string;
  description?: string;
}

export function FunnelChart({
  data,
  title,
  description,
  ...divProps
}: FunnelChartProps) {
  if (!data || data.length === 0) {
    return <NoDataAvailable {...divProps} />;
  }

  const colors = data.map(
    (_, index) => chartsColors[`primary/${300 + index * 100}`]
  );

  const CustomTitleLayer = ({ parts }: { parts: any[] }) => (
    <>
      {parts.map((part, index) => (
        <text
          key={part.data.id}
          x={part.x}
          textAnchor='middle'
          style={{ fontSize: '1rem', fill: '#6b7280' }}
        >
          {part.data.label}
        </text>
      ))}
    </>
  );

  return (
    <div className='funnel-container' {...divProps}>
      {title && <h2 className='mb-2 text-xl font-bold'>{title}</h2>}
      {description && <p className='mb-4 text-gray-500'>{description}</p>}
      <div style={{ height: 400 }}>
        <ResponsiveFunnel
          data={data}
          direction='horizontal'
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          valueFormat='>-.4s'
          colors={colors}
          borderWidth={20}
          labelColor='#fff'
          enableBeforeSeparators={true}
          beforeSeparatorLength={100}
          beforeSeparatorOffset={20}
          currentPartSizeExtension={10}
          currentBorderWidth={40}
          motionConfig='wobbly'
          layers={[
            'separators',
            'parts',
            'labels',
            'annotations',
            CustomTitleLayer,
          ]}
        />
      </div>
    </div>
  );
}
