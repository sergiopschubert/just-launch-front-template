import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },
      colors: {
        'success/100': '#DCFAE6',
        'success/500': '#17B26A',
        'success/600': '#079455',
        'primary/50': '#eff6ff',
        'primary/100': '#dbeafe',
        'primary/200': '#bfdbfe',
        'primary/300': '#93c5fd',
        'primary/400': '#60a5fa',
        'primary/500': '#3b82f6',
        'primary/600': '#2563eb',
        'primary/700': '#1d4ed8',
        'primary/800': '#1e40af',
        'primary/900': '#1e3a8a',
        'primary/950': '#172554',
        'error/100': '#FEE4E2',
        'error/500': '#F04438',
        'error/600': '#dc2626',
        'warning/100': '#fef3c7',
        'warning/500': '#f59e0b',
        'warning/600': '#d97706',
        'info/100': '#dbeafe',
        'info/500': '#3b82f6',
        'info/600': '#2563eb',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
