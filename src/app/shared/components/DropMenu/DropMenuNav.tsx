import { ComponentProps, ReactNode } from 'react';

interface DropMenuNavProps extends ComponentProps<'a'> {
  children: ReactNode;
  isSelected?: boolean;
}

export function DropMenuNav({
  children,
  href,
  isSelected,
  ...props
}: DropMenuNavProps) {
  return (
    <a
      data-is-selected={isSelected}
      {...props}
      href={href}
      className='flex items-center rounded-md px-4 py-2 font-medium text-primary/700 data-[is-selected=true]:bg-primary/700 data-[is-selected=true]:text-primary/100 hover:bg-primary/700 hover:text-primary/100 active:scale-95 active:bg-primary/700'
    >
      {children}
    </a>
  );
}
