import { twMerge } from 'tailwind-merge';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={twMerge('rounded-lg bg-white p-4 shadow-md', className)}>
      {children}
    </div>
  );
}
