'use client';
import { useEffect, useState } from 'react';
import { ICountdownBannerIntl } from '../domain/interfaces/ICountdownBannerIntl';

interface CountdownBannerProps {
  href: string;
  intl: ICountdownBannerIntl;
}

export function CountdownBanner({ intl, href }: CountdownBannerProps) {
  const [timeLeft, setTimeLeft] = useState<string | undefined>(undefined);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    let now = new Date();
    let midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    let difference = midnight.getTime() - now.getTime();

    let hoursLeft = Math.floor(difference / (1000 * 60 * 60));
    let minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

    return `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
  }

  return (
    <a
      href={href}
      className='flex items-center justify-center gap-x-6 bg-primary/600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'
    >
      <p className='text-sm leading-6 text-white'>
        <strong className='font-bold'>{intl?.leftText}</strong>
        <svg
          viewBox='0 0 2 2'
          className='mx-2 inline h-0.5 w-0.5 fill-current'
          aria-hidden='true'
        >
          <circle cx={1} cy={1} r={1} />
        </svg>
        <span className='text-lg font-extrabold'>{timeLeft}</span>

        <svg
          viewBox='0 0 2 2'
          className='mx-2 inline h-0.5 w-0.5 fill-current'
          aria-hidden='true'
        >
          <circle cx={1} cy={1} r={1} />
        </svg>
        <strong className='hidden font-bold md:inline'>
          {intl?.rightText}
        </strong>
      </p>
      <div className='flex flex-1 justify-end'></div>
    </a>
  );
}
