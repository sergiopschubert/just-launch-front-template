'use client';

import { Button } from '@/app/shared/components/Button';
import { Popup } from '@/app/shared/components/Popup';
import { FilePlus, PlusCircle } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface PopupAddItemProps {
  children: ReactNode;
  text: string;
  disabled?: boolean;
}

export function PopupToAddItem({
  children,
  text,
  disabled,
}: PopupAddItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex w-72 items-start justify-start overflow-y-auto'>
      <Popup.Root
        open={open}
        onOpenChange={setOpen}
        trigger={
          <Button
            variant='primary'
            isSlot={true}
            className='px-5 py-3 text-base'
          >
            <span>
              {text}
              <PlusCircle className='ml-1 h-5 w-5'></PlusCircle>
            </span>
          </Button>
        }
      >
        <Popup.Content
          className='fixed left-1/2 top-1/2 z-50  h-auto w-4/5 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md bg-white p-8 text-gray-900 shadow lg:w-3/5 lg:max-w-full'
          disabled={disabled}
          icon={FilePlus}
          closeAutomatically={!disabled}
        >
          {children}
        </Popup.Content>
      </Popup.Root>
    </div>
  );
}
