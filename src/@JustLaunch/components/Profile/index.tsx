import { Avatar } from '../Avatar';
import { LogoutButton } from '../LogoutButton';

interface ProfileProps {
  email: string;
  name: string;
  dark?: boolean;
  imageUri?: string;
}

export function Profile({ email, name, dark, imageUri }: ProfileProps) {
  return (
    <div className='flex items-center justify-between gap-3'>
      <div className='flex gap-3'>
        <Avatar imageUri={imageUri} />
        <div className='flex flex-col'>
          <span
            data-dark={dark}
            className='block text-sm font-semibold text-white  data-[dark=true]:text-primary/900'
          >
            {name}
          </span>
          <span
            data-dark={dark}
            className='block text-sm text-gray-50 data-[dark=true]:text-primary/800'
          >
            {email}
          </span>
        </div>
      </div>
      <LogoutButton dark={dark} />
    </div>
  );
}
