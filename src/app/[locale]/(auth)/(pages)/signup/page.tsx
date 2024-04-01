import { SignUpForm } from '@/app/[locale]/(auth)/components/Forms/SignUpForm';
import { Metadata } from 'next/types';
import { useInternationalizationSignup } from '@/app/[locale]/(auth)/hooks/intl/useInternationalizationSignup';

export let metadata: Metadata = {};

export default async function SignUp() {
  const { intlSignup } = await useInternationalizationSignup();

  metadata.title = intlSignup.metadata.title;

  return (
    <>
      <h1 className='pt-5 text-xl font-semibold text-gray-900'>
        {intlSignup.title}
      </h1>
      <p className='mx-10 mb-6 mt-2 text-center text-sm font-normal text-gray-600'>
        {intlSignup.headerSubtitle}
        <span className='font-semibold text-primary/700'>
          {intlSignup.subtitleWithColor}
        </span>
        {intlSignup.subtitle}
      </p>
      <SignUpForm intl={intlSignup}></SignUpForm>
    </>
  );
}
