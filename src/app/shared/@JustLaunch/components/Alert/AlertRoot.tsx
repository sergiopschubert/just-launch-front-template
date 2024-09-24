import { CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-react';
import { ComponentProps, ReactNode, useMemo } from 'react';

interface AlertRootProps extends ComponentProps<'div'> {
  children: ReactNode;
  title: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

const alertStyles = {
  success: {
    bgColor: 'bg-success/100',
    textColor: 'text-success/500',
    iconColor: 'text-success/600',
    Icon: CheckCircle,
  },
  error: {
    bgColor: 'bg-error/100',
    textColor: 'text-error/500',
    iconColor: 'text-error/600',
    Icon: AlertCircle,
  },
  warning: {
    bgColor: 'bg-warning/100',
    textColor: 'text-warning/500',
    iconColor: 'text-warning/600',
    Icon: AlertTriangle,
  },
  info: {
    bgColor: 'bg-info/100',
    textColor: 'text-info/500',
    iconColor: 'text-info/600',
    Icon: Info,
  },
};

export function AlertRoot({ children, title, type }: AlertRootProps) {
  const { bgColor, textColor, iconColor, Icon } = useMemo(
    () => alertStyles[type],
    [type]
  );

  return (
    <div
      className={`mb-4 flex w-full flex-row items-center rounded-lg ${bgColor} p-4 text-sm ${textColor}`}
      role='alert'
    >
      <div className='flex flex-col gap-1'>
        <div className='flex flex-row'>
          <Icon className={`mr-2 h-5 w-5 ${iconColor}`} />
          <span className='font-semibold'>{title}</span>
        </div>

        {children}
      </div>
    </div>
  );
}
