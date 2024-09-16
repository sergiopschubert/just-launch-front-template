import { twMerge } from 'tailwind-merge';

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return <hr className={twMerge('border-t border-gray-300', className)} />;
}
