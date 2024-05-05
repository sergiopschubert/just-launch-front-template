import Link from 'next/link';

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className='text-gray/700 inline-block rounded-lg px-2 py-1 text-sm font-medium hover:bg-primary/600 hover:text-primary/50'
    >
      {children}
    </Link>
  );
}
