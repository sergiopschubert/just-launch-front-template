import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-semibold text-zinc-900'>Home</h1>
    </>
  );
}
