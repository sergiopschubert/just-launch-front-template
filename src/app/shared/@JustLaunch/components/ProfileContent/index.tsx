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
              <SubHeading title={intl.subheadings.item1} />
              <p className='text-sm font-light text-gray-700'>
                {intl.descriptions.item1}
              </p>
            </div>
            <div className='mt-3 flex flex-col gap-y-2'>
              <Avatar className='h-12 w-12' imageUri={imgURL} />
              <Input.Root>
                <Input.Label>{intl.profile.labels.item1}</Input.Label>
                <Input.Wrapper disabled={true}>
                  <Input.Icon icon={UserCircle} />
                  <Input.PlaceHolder type='text' disabled placeholder={name} />
                </Input.Wrapper>
              </Input.Root>
            </div>
          </section>
        </Card>
        <Card className='mt-5'>
          <section className='grid gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div className='space-y-1'>
              <SubHeading title={intl.subheadings.item3} />
              <p className='text-sm font-light text-gray-700'>
                {intl.descriptions.item3}
              </p>
            </div>
            <div className='space-y-4'>
              <Input.Root>
                <Input.Label>{intl.profile.labels.item3}</Input.Label>
                <Input.Wrapper>
                  <Input.Icon icon={Mail} />
                  <Input.PlaceHolder type='text' placeholder={email} />
                </Input.Wrapper>
              </Input.Root>
              <Checkbox.Root>
                <Checkbox.Input defaultChecked />
                <Checkbox.Icon />
                <Checkbox.Label>{intl.checkbox.labels.item1}</Checkbox.Label>
              </Checkbox.Root>
            </div>
          </section>
        </Card>
        <Card className='mt-5'>
          <section className='grid gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div className='space-y-1'>
              <SubHeading title={intl.subheadings.item2} />
              <p className='text-sm font-light text-gray-700'>
                {intl.descriptions.item2}
              </p>
            </div>

            <Textarea.Root>
              <Textarea.Label> {intl.profile.labels.item2}</Textarea.Label>
              <Textarea.PlaceHolder placeholder='' />
            </Textarea.Root>
          </section>
        </Card>

        <div className='mt-4 flex w-full justify-end gap-4'>
          <div className='w-28'>
            <Button variant='outline'>{intl.buttons.item2}</Button>
          </div>
          <div className='w-28'>
            <Button>{intl.buttons.item1}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
