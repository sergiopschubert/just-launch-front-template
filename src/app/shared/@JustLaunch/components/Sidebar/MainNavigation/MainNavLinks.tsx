'use client';
import { Nav } from '@/app/shared/@JustLaunch/components';
import { LayoutTemplate, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface MainNavLinksProps {
  item1: string;
  item2: string;
}

export function MainNavLinks({ item1, item2 }: MainNavLinksProps) {
  const currentPath = usePathname();

  return (
    <nav className='flex flex-col gap-0.5'>
      <Nav.Root currentPath={currentPath} route='home' href='/home'>
        <Nav.IconRight icon={LayoutTemplate} />
        <Nav.Content content={item1} />
      </Nav.Root>
      <Nav.Root currentPath={currentPath} route='customers' href='/customers'>
        <Nav.IconRight icon={Users} />
        <Nav.Content content={item2} />
      </Nav.Root>
    </nav>
  );
}
