import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface SwitchProps {
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Switch({
  isChecked = false,
  onChange,
  disabled = false,
}: SwitchProps) {
  const [checked, setChecked] = useState(isChecked);

  const toggleSwitch = () => {
    if (disabled) return;
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <button
      onClick={toggleSwitch}
      disabled={disabled}
      className={twMerge(
        'relative inline-flex h-6 w-11 items-center rounded-full border-2',
        disabled ? 'cursor-not-allowed bg-gray-200' : 'cursor-pointer',
        checked
          ? 'border-primary/600 bg-primary/600 ring-primary/300 ring-opacity-90 ring-offset-0 transition duration-700 ease-in-out'
          : 'bg-gray-300 transition duration-700 ease-in-out'
      )}
    >
      <span
        className={twMerge(
          'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
          disabled ? 'bg-gray-400' : '',
          checked ? 'translate-x-6' : 'translate-x-1'
        )}
      />
    </button>
  );
}
