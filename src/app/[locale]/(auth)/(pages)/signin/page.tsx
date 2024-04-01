import { Metadata } from 'next/types';
import { SignInForm } from '@/app/[locale]/(auth)/components/Forms/SignInForm';
import { useInternationalizationSignin } from '@/app/[locale]/(auth)/hooks/intl/useInternationalizationSignin';

export let metadata: Metadata = {};

export default async function SignIn() {
  const { intlSignin } = await useInternationalizationSignin();

  metadata.title = intlSignin.metadata.title;

  return (
    <>
      <h1 className='pt-5 text-xl font-semibold text-gray-900'>
        {intlSignin.title}
      </h1>
      <p className='mb-6 mt-2 text-sm font-normal text-gray-600'>
        {intlSignin.subtitle}
      </p>
      <SignInForm intl={intlSignin} />
    </>
  );
}
