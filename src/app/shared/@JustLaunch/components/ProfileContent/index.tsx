'use client';
import { Input } from '@/app/shared/@JustLaunch/components/Input';
import { Mail, UserCircle } from 'lucide-react';
import { ISettingsIntl } from '../../domain/interfaces/ISettingsIntl';
import { Avatar } from '@/app/shared/@JustLaunch/components/Avatar';
import { SubHeading } from '../SubHeading';
import { Card } from '../Card';
import { Textarea } from '../Textarea';
import { Checkbox } from '../Checkbox';
import { Button } from '../Button';

interface ISettingsTabsProps {
  profile: {
    email: string;
    name: string;
  };
  intl: ISettingsIntl;
  imgURL?: string;
}

export function ProfileContent({
  profile: { name, email },
  intl,
  imgURL,
}: ISettingsTabsProps) {
  return (
    <div className='mx-auto max-w-4xl'>
      <div className='flex flex-col'>
        <Card className='mt-5'>
          <section className='grid gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div className='space-y-1'>
              <SubHeading title='User' />
              <p className='text-sm font-light text-gray-700'>
                This will be displayed on your public profile.
              </p>
            </div>
            <div className='mt-3 flex flex-col gap-y-2'>
              <Avatar className='h-12 w-12' imageUri={imgURL} />
              <Input.Root>
                <Input.Label>{intl.profile.label.name}</Input.Label>
                <Input.Wrapper disabled={true}>
                  <Input.Icon icon={UserCircle} />
                  <Input.PlaceHolder type='text' disabled placeholder={name} />
                </Input.Wrapper>
              </Input.Root>
              <Input.Root>
                <Input.Label>{intl.profile.label.email}</Input.Label>
                <Input.Wrapper disabled={true}>
                  <Input.Icon icon={Mail} />
                  <Input.PlaceHolder type='text' disabled placeholder={email} />
                </Input.Wrapper>
              </Input.Root>
            </div>
          </section>
        </Card>
        <Card className='mt-5'>
          <section className='grid gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div className='space-y-1'>
              <SubHeading title='Bio' />
              <p className='text-sm font-light text-gray-700'>
                This will be displayed on your public profile. Maximum 240
                characters.
              </p>
            </div>

            <Textarea.Root>
              <Textarea.Label>Label</Textarea.Label>
              <Textarea.PlaceHolder placeholder='' />
            </Textarea.Root>
          </section>
        </Card>
        <Card className='mt-5'>
          <section className='grid gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div className='space-y-1'>
              <SubHeading title='Email' />
              <p className='text-sm font-light text-gray-700'>
                This is how customers can contact you for support.
              </p>
            </div>
            <div className='space-y-4'>
              <Input.Root>
                <Input.Label>{intl.profile.label.email}</Input.Label>
                <Input.Wrapper>
                  <Input.Icon icon={Mail} />
                  <Input.PlaceHolder type='text' disabled placeholder={email} />
                </Input.Wrapper>
              </Input.Root>
              <Checkbox.Root>
                <Checkbox.Input defaultChecked />
                <Checkbox.Icon />
                <Checkbox.Label>Show email on public profile</Checkbox.Label>
              </Checkbox.Root>
            </div>
          </section>
        </Card>
        <div className='mt-4 flex w-full justify-end gap-4'>
          <div className='w-16'>
            <Button variant='outline'>Reset</Button>
          </div>
          <div className='w-28'>
            <Button>Save changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
