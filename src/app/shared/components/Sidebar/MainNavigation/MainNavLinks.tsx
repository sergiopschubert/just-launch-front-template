'use client';
import { Nav } from '@/app/shared/components/Nav';
import { LayoutTemplate } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface MainNavLinksProps {
  item1: string;
}

export function MainNavLinks({ item1 }: MainNavLinksProps) {
  const currentPath = usePathname();

  return (
    <nav className='flex flex-col gap-0.5'>
      <Nav.Root currentPath={currentPath} href='/home'>
        <Nav.IconRight icon={LayoutTemplate} />
        <Nav.Content content={item1} />
      </Nav.Root>
    </nav>
  );
}
