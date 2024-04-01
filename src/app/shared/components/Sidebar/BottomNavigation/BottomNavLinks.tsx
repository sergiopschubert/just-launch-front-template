'use client';
import { Cog, MessagesSquare } from 'lucide-react';
import { Nav } from '@/app/shared/components/Nav';
import { usePathname } from 'next/navigation';

export function BottomNavLinks({
  item1,
  item2,
}: {
  item1: string;
  item2: string;
}) {
  const currentPath = usePathname();

  return (
    <nav className='flex flex-col gap-1'>
      <Nav.Root currentPath={currentPath} href='/settings'>
        <Nav.IconRight icon={Cog} />
        <Nav.Content content={item1} />
      </Nav.Root>
      <Nav.Root href='https://homeworkai.canny.io/sugestoes'>
        <Nav.IconRight icon={MessagesSquare} />
        <Nav.Content content={item2} />
      </Nav.Root>
    </nav>
  );
}
