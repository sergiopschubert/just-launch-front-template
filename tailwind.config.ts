import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },
      colors: {
        'green/100': '#DCFAE6',
        'green/500': '#17B26A',
        'green/600': '#079455',
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
      },
    },
  },
  plugins: [],
};
export default config;
