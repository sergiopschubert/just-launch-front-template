'use client';
import { Popup } from '@/app/shared/components/Popup';
import { AlertTriangle } from 'lucide-react';
import { ComponentProps, ReactNode } from 'react';

interface PopupToShowItemProps extends ComponentProps<'div'> {
  children: ReactNode;
  closeAutomatically: boolean;
}

export function PopupToShowItem({
  children,
  closeAutomatically,
  ...props
}: PopupToShowItemProps) {
  return (
    <div
      {...props}
      className='flex w-56 items-start justify-start overflow-y-auto'
    >
      <Popup.Root open={true}>
        <Popup.Content
          className='fixed left-1/2 top-1/2 z-50  h-auto w-4/5 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md bg-white p-8 text-gray-900 shadow lg:w-3/5 lg:max-w-full'
          disabled={true}
          icon={AlertTriangle}
          closeAutomatically={closeAutomatically}
        >
          {children}
        </Popup.Content>
      </Popup.Root>
    </div>
  );
}
