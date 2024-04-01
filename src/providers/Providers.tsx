'use client';
import { ReactNode } from 'react';
import { UsersProvider } from '@/app/shared/contexts/UsersContext';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <UsersProvider>
      {children}
    </UsersProvider>
  );
}
