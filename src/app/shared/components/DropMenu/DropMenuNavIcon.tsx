import { ElementType } from 'react';

interface DropMenuNavIconProps {
  icon: ElementType;
}

export function DropMenuNavIcon({ icon: Icon }: DropMenuNavIconProps) {
  return (
    <span className='mr-3 h-6 w-6 flex-shrink-0'>
      <Icon className='h-6 w-6 text-primary/500 '></Icon>
    </span>
  );
}
