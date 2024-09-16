import React from 'react';
import { twMerge } from 'tailwind-merge';

interface RadioButtonProps {
  label: string;
  value: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export function RadioButton({
  label,
  value,
  selectedValue,
  onChange,
  disabled = false,
}: RadioButtonProps) {
  const isSelected = selectedValue === value;

  const handleChange = () => {
    if (disabled) return;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <label
      className={twMerge(
        'mb-2 flex items-center gap-2',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      <input
        type='radio'
        value={value}
        checked={isSelected}
        onChange={handleChange}
        disabled={disabled}
        className='sr-only'
      />
      <div
        className={twMerge(
          'relative h-5 w-5 rounded-full border-2 shadow',
          isSelected ? 'border-primary/600' : 'border-gray-400',
          disabled ? 'border-gray-300 bg-gray-200' : ''
        )}
      >
        {isSelected && (
          <div className='absolute inset-0 flex items-center justify-center'>
            <div
              className={twMerge(
                'flex h-3 w-3 items-center justify-center rounded-full',
                disabled ? 'bg-gray-500' : 'bg-primary/600'
              )}
            >
              <div
                className={twMerge(
                  'h-1 w-1 rounded-full',
                  disabled ? 'bg-gray-300' : 'bg-primary/50'
                )}
              ></div>
            </div>
          </div>
        )}
      </div>
      <span
        className={twMerge(
          'text-xs font-medium',
          disabled ? 'text-gray-400' : 'text-gray-700'
        )}
      >
        {label}
      </span>
    </label>
  );
}
