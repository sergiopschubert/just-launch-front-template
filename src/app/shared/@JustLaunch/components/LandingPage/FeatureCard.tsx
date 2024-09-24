import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  bgColor,
}: FeatureCardProps) {
  return (
    <div className='flex items-start space-x-4'>
      <div
        className={`rounded-lg px-4 py-4 ${bgColor} border-4 border-white shadow-lg`}
      >
        {icon}
      </div>
      <div>
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </div>
    </div>
  );
}
