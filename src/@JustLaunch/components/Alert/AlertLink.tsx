import LinkNext, { LinkProps as LinkNextProps } from 'next/link';
import { ReactNode } from 'react';

interface AlertLinkProps extends LinkNextProps {
  children: ReactNode;
}

export function AlertLink({ children, ...props }: AlertLinkProps) {
  return (
    <LinkNext
      {...props}
      className={'text-xs font-semibold hover:brightness-75'}
    >
      {children}
    </LinkNext>
  );
}
