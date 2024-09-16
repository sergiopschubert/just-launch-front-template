import { LogoutButton } from '../LogoutButton';

interface ProfileProps {
  email: string;
  name: string;
  dark?: boolean;
  imageUri?: string;
}

export function Profile({
  email,
  name,
  dark,
  imageUri = 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Aneka&backgroundColor=bfdbfe&eyes=happy',
}: ProfileProps) {
  return (
    <div className='flex items-center justify-between gap-3'>
      <div className='flex gap-3'>
        <img src={imageUri} className='h-10 w-10 rounded-full' alt={''}></img>
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
