import { SignUpForm } from '@/app/[locale]/(auth)/components/Forms/SignUpForm';
import { Metadata } from 'next/types';
import { useSignupInternationalization } from '@/app/[locale]/(auth)/hooks/contents/useSignupInternationalization';

export let metadata: Metadata = {};

export default async function SignUp() {
  const { signupIntl } = await useSignupInternationalization();

  metadata.title = signupIntl.metadata.title;

  return (
    <>
      <h1 className='pt-5 text-xl font-semibold text-gray-900'>
        {signupIntl.title}
      </h1>
      <p className='mx-10 mb-6 mt-2 text-center text-sm font-normal text-gray-600'>
        {signupIntl.headerSubtitle}
        <span className='font-semibold text-primary/700'>
          {signupIntl.subtitleWithColor}
        </span>
        {signupIntl.subtitle}
      </p>
      <SignUpForm intl={signupIntl}></SignUpForm>
    </>
  );
}
