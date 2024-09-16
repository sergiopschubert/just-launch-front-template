import { Heading } from '@/app/shared/@JustLaunch/components/Heading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <>
      <Heading title='Home' />
    </>
  );
}
