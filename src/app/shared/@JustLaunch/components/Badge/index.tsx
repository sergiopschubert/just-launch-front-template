import { BadgeColor } from '@/app/shared/@JustLaunch/domain/enums/BadgeColor';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  color: BadgeColor;
  children: React.ReactNode;
}

export function Badge({ color, children }: BadgeProps) {
  const colorClasses = {
    primary: 'bg-primary/600 text-primary/50',
    red: 'bg-red-600 text-red-50',
    orange: 'bg-orange-600 text-orange-50',
    amber: 'bg-amber-600 text-amber-50',
    yellow: 'bg-yellow-600 text-yellow-50',
    lime: 'bg-lime-600 text-lime-50',
    green: 'bg-green-600 text-green-50',
    emerald: 'bg-emerald-600 text-emerald-50',
    teal: 'bg-teal-600 text-teal-50',
    cyan: 'bg-cyan-600 text-cyan-50',
    sky: 'bg-sky-600 text-sky-50',
    blue: 'bg-blue-600 text-blue-50',
    indigo: 'bg-indigo-600 text-indigo-50',
    violet: 'bg-violet-600 text-violet-50',
    purple: 'bg-purple-600 text-purple-50',
    fuchsia: 'bg-fuchsia-600 text-fuchsia-50',
    pink: 'bg-pink-600 text-pink-50',
    rose: 'bg-rose-600 text-rose-50',
    zinc: 'bg-zinc-600 text-zinc-50',
  };

  return (
    <span
      className={twMerge(
        'rounded-md bg-opacity-90 px-3 py-2 text-sm font-medium',
        colorClasses[color]
      )}
    >
      {children}
    </span>
  );
}
