import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);
export const chartsColors = fullConfig.theme.colors as unknown as {
  [key: string]: string;
};

export const truncateLabel = (label: string) => {
  return label.length > 3 ? `${label.slice(0, 3)}` : label;
};

export { BarChartComponent } from './BarChart';
export { BarChartHorizontal } from './BarChartHorizontal';
export { BarChartMultiple } from './BarChartMultiple';
export { FunnelChart } from './FunnelChart';
export { PieChartComponent } from './PieChart';
export { SimpleAreaChart } from './SimpleAreaChart';
export { StackedAreaChart } from './StackedAreaChart';
export { RadialBarChartComponent } from './RadialBarChart';
