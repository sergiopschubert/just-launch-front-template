'use client';
import { Button } from '@/app/shared/components/Button';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface ProfileProps {
  email: string;
  name: string;
  dark?: boolean;
}

export function Profile({ email, name, dark }: ProfileProps) {
  const router = useRouter();

  async function logout() {
    await signOut({
      redirect: false,
    });

    router.replace('/signin');
  }
  return (
    <div className='flex items-center justify-between gap-3'>
      <div className='flex gap-3'>
        <img
          src='https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Aneka&backgroundColor=bfdbfe&eyes=happy'
          className='h-10 w-10 rounded-full'
          alt={''}
        ></img>
        <div className='flex flex-col'>
          <span
            data-dark={dark}
            className='block text-sm font-semibold text-white  data-[dark=true]:text-primary/900'
          >
            {name}
          </span>
          <span data-dark={dark} className='block text-sm text-gray-50 data-[dark=true]:text-primary/800'>
            {email}
          </span>
        </div>
      </div>
      <Button
        onClick={logout}
        variant='ghost'
        className='hover:bg-primary/800'
      >
        <LogOut data-dark={dark} className='h-5 w-5 text-gray-50 data-[dark=true]:text-primary/800 data-[dark=true]:hover:text-primary/200' />
      </Button>
    </div>
  );
}
