'use client';
import { Nav } from '@/app/shared/components/Nav';
import { Cog } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface BottomNavLinksProps {
  item1: string;
}

export function BottomNavLinks({ item1 }: BottomNavLinksProps) {
  const currentPath = usePathname();

  return (
    <nav className='flex flex-col gap-1'>
      <Nav.Root currentPath={currentPath} href='/settings'>
        <Nav.IconRight icon={Cog} />
        <Nav.Content content={item1} />
      </Nav.Root>
    </nav>
  );
}
