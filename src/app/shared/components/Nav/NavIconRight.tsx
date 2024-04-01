import { ElementType } from 'react';

interface NavIconRightProps {
  icon: ElementType;
}

export function NavIconRight({ icon: Icon }: NavIconRightProps) {
  return (
    <Icon className='h-5 w-5 text-base/white group-hover:text-primary/700 group-data-[active=true]:text-primary/700' />
  );
}
