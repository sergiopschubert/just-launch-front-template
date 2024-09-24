'use client';
import { Nav } from '@/app/shared/@JustLaunch/components';
import { Cog, HelpCircle, MessageSquare } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface BottomNavLinksProps {
  item1: string;
  item2: string;
  item3: string;
}

export function BottomNavLinks({ item1, item2, item3 }: BottomNavLinksProps) {
  const currentPath = usePathname();

  return (
    <nav className='flex flex-col gap-1'>
      <Nav.Root currentPath={currentPath} route='settings' href='/settings'>
        <Nav.IconRight icon={Cog} />
        <Nav.Content content={item1} />
      </Nav.Root>
      <Nav.Root currentPath={currentPath} route='feedback' href='/feedback'>
        <Nav.IconRight icon={MessageSquare} />
        <Nav.Content content={item2} />
      </Nav.Root>
      <Nav.Root currentPath={currentPath} route='support' href='/support'>
        <Nav.IconRight icon={HelpCircle} />
        <Nav.Content content={item3} />
      </Nav.Root>
    </nav>
  );
}
