import Link from 'next/link';
import { ReactNode } from 'react';

interface NavRootProps {
  children: ReactNode;
  href: string;
  currentPath?: string | null;
}

export function NavRoot({ children, href, currentPath }: NavRootProps) {
  return (
    <Link
      href={href}
      data-active={href === currentPath}
      className='group flex items-center gap-3 rounded px-3 py-2 hover:bg-primary/50 active:scale-95 active:bg-primary/50 data-[active=true]:bg-primary/50'
    >
      {children}
    </Link>
  );
}
