'use client';

import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

interface SliderProps {
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onValueChange?: (value: number[]) => void;
  className?: string;
}

export function Slider({
  defaultValue = [50],
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onValueChange,
  className = '',
}: SliderProps) {
  const handleValueChange = (newValue: number[]) => {
    onValueChange?.(newValue);
  };

  return (
    <SliderPrimitive.Root
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      onValueChange={handleValueChange}
      className={`relative flex w-full touch-none select-none items-center ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      } ${className}`}
    >
      <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200'>
        <SliderPrimitive.Range className='absolute h-full bg-primary/600 transition-all' />
      </SliderPrimitive.Track>
      {defaultValue.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className='block h-4 w-4 rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-primary/600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
        />
      ))}
    </SliderPrimitive.Root>
  );
}
