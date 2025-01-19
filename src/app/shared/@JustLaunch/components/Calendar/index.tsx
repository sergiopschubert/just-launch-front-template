'use client';

import React, { useState, useCallback, useEffect } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  isToday,
  isSameDay,
  startOfWeek,
  endOfWeek,
  addDays,
  addWeeks,
  subWeeks,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description?: string;
  color?: string;
}

interface CalendarProps {
  events?: Event[];
  onDateClick?: (date: Date) => void;
  onEventClick?: (event: Event) => void;
  highlightedDates?: Date[];
}

type ViewMode = 'week' | 'month';

export function Calendar({
  events = [],
  onDateClick,
  onEventClick,
  highlightedDates = [],
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<ViewMode>('week');
  const [selectedDay, setSelectedDay] = useState<{
    date: Date;
    events: Event[];
  } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const nextPeriod = useCallback(() => {
    if (viewMode === 'month') {
      setCurrentDate(addMonths(currentDate, 1));
    } else {
      setCurrentDate(addWeeks(currentDate, 1));
    }
  }, [currentDate, viewMode]);

  const prevPeriod = useCallback(() => {
    if (viewMode === 'month') {
      setCurrentDate(subMonths(currentDate, 1));
    } else {
      setCurrentDate(subWeeks(currentDate, 1));
    }
  }, [currentDate, viewMode]);

  const getDays = useCallback(() => {
    if (viewMode === 'month') {
      const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 0 });
      const end = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 0 });
      const days = [];
      let day = start;
      while (day <= end) {
        days.push(day);
        day = addDays(day, 1);
      }
      return days;
    } else {
      const start = startOfWeek(currentDate, { weekStartsOn: 0 });
      return Array.from({ length: 7 }, (_, i) => addDays(start, i));
    }
  }, [currentDate, viewMode]);

  const isHighlightedDate = (date: Date) => {
    return highlightedDates.some((highlightedDate) =>
      isSameDay(new Date(highlightedDate), date)
    );
  };

  const formatMonth = (date: Date) => {
    const month = format(date, 'MMMM', { locale: ptBR });
    const year = format(date, 'yyyy');
    return month.charAt(0).toUpperCase() + month.slice(1) + ' ' + year;
  };

  const handleDayClick = (day: Date, dayEvents: Event[]) => {
    if (dayEvents.length > 0 && isMobile) {
      setSelectedDay({ date: day, events: dayEvents });
    } else if (onDateClick) {
      onDateClick(day);
    }
  };

  const days = getDays();

  return (
    <div className='w-full'>
      <div className='rounded-xl bg-white shadow-sm'>
        <div className='border-b bg-white px-4 py-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <h2 className='text-lg font-semibold text-gray-900 md:text-xl'>
                {formatMonth(currentDate)}
              </h2>
              <div className='flex gap-1'>
                <button
                  onClick={prevPeriod}
                  className='rounded-full p-1.5 text-gray-600 hover:bg-gray-100'
                >
                  <ChevronLeft className='h-4 w-4' />
                </button>
                <button
                  onClick={nextPeriod}
                  className='rounded-full p-1.5 text-gray-600 hover:bg-gray-100'
                >
                  <ChevronRight className='h-4 w-4' />
                </button>
              </div>
            </div>
            <div className='flex rounded-md bg-gray-100 p-0.5'>
              <button
                onClick={() => setViewMode('week')}
                className={`rounded px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 ${
                  viewMode === 'week' ? 'bg-white shadow-sm' : ''
                }`}
              >
                Semana
              </button>
              <button
                onClick={() => setViewMode('month')}
                className={`rounded px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 ${
                  viewMode === 'month' ? 'bg-white shadow-sm' : ''
                }`}
              >
                Mês
              </button>
            </div>
          </div>
        </div>

        <div className='w-full overflow-x-auto'>
          <div className='w-full'>
            <div className='grid grid-cols-7'>
              {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((day) => (
                <div
                  key={day}
                  className='border-b border-r border-gray-200 bg-white py-2 text-center text-sm font-medium text-gray-500 last:border-r-0'
                >
                  {day}
                </div>
              ))}

              {days.map((day) => {
                const dayEvents = events.filter((event) =>
                  isSameDay(new Date(event.start), day)
                );
                const isHighlighted = isHighlightedDate(day);

                return (
                  <div
                    key={day.toString()}
                    onClick={() => handleDayClick(day, dayEvents)}
                    className={`
                      aspect-square cursor-pointer border-b border-r border-gray-200 p-2 last:border-r-0
                      ${!isSameMonth(day, currentDate) ? 'bg-gray-50' : 'bg-white'}
                      ${isToday(day) ? 'bg-blue-50' : ''}
                      ${isHighlighted ? 'bg-primary/50' : ''}
                      hover:bg-gray-50
                    `}
                  >
                    <div className='flex items-center justify-between'>
                      <span
                        className={`
                          flex h-6 w-6 items-center justify-center rounded-full text-sm
                          ${!isSameMonth(day, currentDate) ? 'text-gray-400' : 'text-gray-700'}
                          ${isToday(day) ? 'bg-primary/600 font-semibold text-white' : ''}
                          ${isHighlighted ? 'font-semibold text-primary/600' : ''}
                        `}
                      >
                        {format(day, 'd')}
                      </span>
                      {dayEvents.length > 0 && (
                        <span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary/100 text-xs font-medium text-primary/700 md:hidden'>
                          {dayEvents.length}
                        </span>
                      )}
                    </div>
                    <div className='mt-1 hidden space-y-1 md:block'>
                      {dayEvents.map((event) => (
                        <div
                          key={event.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            onEventClick?.(event);
                          }}
                          className='rounded bg-primary/600 px-2 py-1 text-xs text-white'
                          style={{
                            backgroundColor: event.color,
                          }}
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {selectedDay && isMobile && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
            <div className='w-full max-w-md rounded-lg bg-white p-6'>
              <div className='mb-4 flex items-center justify-between'>
                <h3 className='text-lg font-semibold text-gray-900'>
                  {format(selectedDay.date, "dd 'de' MMMM", { locale: ptBR })}
                </h3>
                <button
                  onClick={() => setSelectedDay(null)}
                  className='rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500'
                >
                  <X className='h-5 w-5' />
                </button>
              </div>
              <div className='space-y-2'>
                {selectedDay.events.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => {
                      onEventClick?.(event);
                      setSelectedDay(null);
                    }}
                    className='cursor-pointer rounded-lg border border-gray-200 p-3 hover:bg-gray-50'
                  >
                    <div className='flex items-center gap-2'>
                      <div
                        className='h-3 w-3 rounded-full'
                        style={{ backgroundColor: event.color || '#3b82f6' }}
                      />
                      <span className='font-medium text-gray-900'>
                        {event.title}
                      </span>
                    </div>
                    {event.description && (
                      <p className='mt-1 text-sm text-gray-500'>
                        {event.description}
                      </p>
                    )}
                    <div className='mt-2 text-xs text-gray-500'>
                      {format(new Date(event.start), 'HH:mm')} -{' '}
                      {format(new Date(event.end), 'HH:mm')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
