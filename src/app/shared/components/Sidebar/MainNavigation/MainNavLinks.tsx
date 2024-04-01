'use client';
import { Nav } from '@/app/shared/components/Nav';
import { LayoutTemplate } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function MainNavLinks({ item1 }: { item1: string }) {
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
