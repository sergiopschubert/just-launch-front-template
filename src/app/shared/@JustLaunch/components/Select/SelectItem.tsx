'use client';

import * as Select from '@radix-ui/react-select';
import { Check } from 'lucide-react';

export type SelectItemProps = Select.SelectItemProps & {
  text: string;
  icon?: React.ReactNode;
};

export function SelectItem({ text, icon, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className='flex items-center justify-between gap-2  px-3 py-2.5 outline-none data-[highlighted]:bg-primary/300 data-[highlighted]:bg-opacity-50'
      {...props}
    >
      <Select.ItemText>
        <div className='flex flex-row'>
          {icon}
          {icon ? <div className='w-2' /> : null}
          {text}
        </div>
      </Select.ItemText>

      <Select.ItemIndicator>
        <Check className='h-4 w-4 text-primary/500' />
      </Select.ItemIndicator>
    </Select.Item>
  );
}
