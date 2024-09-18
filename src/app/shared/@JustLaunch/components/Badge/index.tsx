import { BadgeColor } from '@/app/shared/@JustLaunch/domain/enums/BadgeColor';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  color: BadgeColor;
  children: React.ReactNode;
}

export function Badge({ color, children }: BadgeProps) {
  const colorClasses = {
    primary: 'bg-primary/600 text-primary/600 border-primary/600',
    red: 'bg-red-600 text-red-600 border-red-600',
    orange: 'bg-orange-600 text-orange-600 border-orange-600',
    amber: 'bg-amber-600 text-amber-600 border-amber-600',
    yellow: 'bg-yellow-600 text-yellow-600 border-yellow-600',
    lime: 'bg-lime-600 text-lime-600 border-lime-600',
    green: 'bg-green-600 text-green-600 border-green-600',
    emerald: 'bg-emerald-600 text-emerald-600 border-emerald-600',
    teal: 'bg-teal-600 text-teal-600 border-teal-600',
    cyan: 'bg-cyan-600 text-cyan-600 border-cyan-600',
    sky: 'bg-sky-600 text-sky-600 border-sky-600',
    blue: 'bg-blue-600 text-blue-600 border-blue-600',
    indigo: 'bg-indigo-600 text-indigo-600 border-indigo-600',
    violet: 'bg-violet-600 text-violet-600 border-violet-600',
    purple: 'bg-purple-600 text-purple-600 border-purple-600',
    fuchsia: 'bg-fuchsia-600 text-fuchsia-600 border-fuchsia-600',
    pink: 'bg-pink-600 text-pink-600 border-pink-600',
    rose: 'bg-rose-600 text-rose-600 border-rose-600',
    zinc: 'bg-zinc-600 text-zinc-600 border-zinc-600',
  };

  return (
    <span
      className={twMerge(
        'rounded-md border bg-opacity-10 px-2 py-1 text-sm font-medium',
        colorClasses[color]
      )}
    >
      {children}
    </span>
  );
}
