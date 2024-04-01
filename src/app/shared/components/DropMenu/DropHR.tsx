import { ComponentProps } from 'react';

type DropMenuHRProps = ComponentProps<'hr'>;

export function DropMenuHR({ ...props }: DropMenuHRProps) {
  return <hr {...props}></hr>;
}
