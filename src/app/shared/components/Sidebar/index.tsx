'use client';
import { LogoV2 } from '@/app/shared/components/LogoV2';
import { Profile } from '@/app/[locale]/(users)/components/Profile';

import { Menu } from 'lucide-react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Slot } from '@radix-ui/react-slot';
import Link from 'next/link';
interface SidebarProps {
  email: string;
  name: string;
  mainNavigation: React.ReactNode;
  bottomNavigation: React.ReactNode;
}
export function Sidebar({
  email,
  name,
  mainNavigation,
  bottomNavigation,
}: SidebarProps) {
  return (
    <Collapsible.Root className='fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-hidden  bg-primary/700 p-4 shadow-md scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-300 data-[state=open]:bottom-0 lg:bottom-0 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:px-5 lg:py-8'>
      <div className='flex items-center justify-between'>
        <Link href='/home'>
          <LogoV2 />
        </Link>
        <Collapsible.Trigger asChild className='lg:hidden'>
          <Slot className='rounded-md shadow-none hover:bg-primary/800'>
            <Menu className='h-6 w-6 text-white' />
          </Slot>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        asChild
        forceMount
        className='data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex'
      >
        <div className='flex flex-1 flex-col gap-6'>
          {mainNavigation}

          <div className='mt-auto flex flex-col gap-6'>
            {bottomNavigation}

            <div className='h-px bg-zinc-200' />
            <Profile name={name} email={email} />
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
