'use client';
import { Auth } from '@/app/api/auth/actions';
import { Button } from '@/app/shared/@JustLaunch/components';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface LogoutButtonProps {
  dark?: boolean;
}

export function LogoutButton({ dark }: LogoutButtonProps) {
  const router = useRouter();

  async function logout() {
    await Auth.signOut();

    router.replace('/signin');
  }
  return (
    <Button onClick={logout} variant='ghost' className='hover:bg-primary/800'>
      <LogOut
        data-dark={dark}
        className='h-5 w-5 text-gray-50 data-[dark=true]:text-primary/800 data-[dark=true]:hover:text-primary/200'
      />
    </Button>
  );
}
