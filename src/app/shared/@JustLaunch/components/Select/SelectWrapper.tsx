'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { ElementType, ReactNode } from 'react';

export interface SelectRootProps {
  children: ReactNode;
  placeholder: string;
  iconLeft?: ElementType;
  iconRight?: ElementType;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export function SelectWrapper({
  iconLeft: IconLeft,
  children,
  placeholder,
  onValueChange,
  defaultValue,
}: SelectRootProps) {
  return (
    <SelectPrimitive.Root
      onValueChange={onValueChange}
      defaultValue={defaultValue}
    >
      <SelectPrimitive.Trigger
        className=' focus-within:ring-offset-0: flex w-full gap-2 rounded-lg border border-primary/300 px-3
      py-2 text-sm text-gray-900 shadow-sm outline-none transition duration-300 ease-in-out
      focus-within:border-primary/300 focus-within:ring focus-within:ring-primary/300
        focus-within:ring-opacity-25 data-[placeholder]:text-gray-500'
      >
        {IconLeft ? (
          <SelectPrimitive.Icon>
            <IconLeft className='h-5 w-5 pr-1 text-gray-500' />
          </SelectPrimitive.Icon>
        ) : (
          <></>
        )}

        <SelectPrimitive.Value
          placeholder={placeholder}
          className='text-gray-500'
        />
        <SelectPrimitive.Icon className='ml-auto'>
          <ChevronDown className='h-5 w-5 text-gray-500' />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side='bottom'
          position='popper'
          sideOffset={7}
          className='z-50 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-primary/300 bg-white text-sm text-gray-800 focus-within:border-primary/300 focus-within:ring
          focus-within:ring-primary/300 focus-within:ring-opacity-25'
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
