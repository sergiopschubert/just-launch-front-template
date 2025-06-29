import { SignUpForm } from '@/app/shared/@JustLaunch/components/Forms/SignUpForm';
import { useSignupInternationalization } from '@/app/shared/@JustLaunch/hooks/contents/useSignupInternationalization';
import { Metadata } from 'next/types';

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
