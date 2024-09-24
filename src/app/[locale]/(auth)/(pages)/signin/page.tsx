import { SignInForm } from '@/app/shared/@JustLaunch/components/Forms/SignInForm';
import { useSigninInternationalization } from '@/app/shared/@JustLaunch/hooks/contents/useSigninInternationalization';
import { Metadata } from 'next/types';

export let metadata: Metadata = {};

export default async function SignIn() {
  const { signinIntl } = await useSigninInternationalization();

  metadata.title = signinIntl.metadata.title;

  return (
    <>
      <h1 className='pt-5 text-xl font-semibold text-gray-900'>
        {signinIntl.title}
      </h1>
      <p className='mb-6 mt-2 text-sm font-normal text-gray-600'>
        {signinIntl.subtitle}
      </p>
      <SignInForm intl={signinIntl} />
    </>
  );
}
