import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './index';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);

const mockEvents = [
  {
    id: '1',
    title: 'Reunião de Equipe',
    start: today,
    end: new Date(today.getTime() + 60 * 60 * 1000),
    description: 'Reunião semanal de alinhamento',
    color: '#3b82f6',
  },
  {
    id: '2',
    title: 'Almoço com Cliente',
    start: tomorrow,
    end: new Date(tomorrow.getTime() + 1.5 * 60 * 60 * 1000),
    description: 'Almoço de negócios',
    color: '#10b981',
  },
];

export const Default: Story = {
  args: {
    events: mockEvents,
    highlightedDates: [today, tomorrow, nextWeek],
    onDateClick: (date) => {
      console.log('Data clicada:', date);
    },
    onEventClick: (event) => {
      console.log('Evento clicado:', event);
    },
  },
};

export const Empty: Story = {
  args: {},
};

export const OnlyHighlightedDates: Story = {
  args: {
    highlightedDates: [today, tomorrow, nextWeek],
    onDateClick: (date) => {
      console.log('Data clicada:', date);
    },
  },
};
