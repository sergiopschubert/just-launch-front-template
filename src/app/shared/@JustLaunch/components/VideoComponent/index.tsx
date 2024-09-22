'use client';
import { useEffect, useRef, useState } from 'react';

interface VideoComponentProps {
  src: string;
}

export const VideoComponent = ({ src }: VideoComponentProps) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={videoContainerRef}
      className='relative h-full w-full overflow-hidden rounded-xl ring-8 ring-gray-500/10'
    >
      {isVideoLoaded && (
        <video
          loop
          muted
          autoPlay
          playsInline
          className='h-full w-full object-cover'
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
