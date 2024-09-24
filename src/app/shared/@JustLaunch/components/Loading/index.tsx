'use client';
import { useState, useEffect } from 'react';
import { RotateCwIcon } from 'lucide-react';

export function Loading({ messages }: { messages: string[] }) {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % messages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className='flex flex-col items-center justify-center text-lg'>
      <p className='mb-2 text-center'>{messages[currentMessage]}</p>
      <RotateCwIcon className='h-9 w-9 animate-spin text-primary/600' />
    </div>
  );
}
