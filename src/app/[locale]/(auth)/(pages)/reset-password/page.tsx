import { ResetPasswordForm } from '@/app/[locale]/(auth)/components/Forms/ResetPasswordForm';
import { Metadata } from 'next';
import { useInternationalizationResetPassword } from '@/app/[locale]/(auth)/hooks/intl/useInternationalizationResetPassword';

export let metadata: Metadata = {};

export default async function Password() {
  const { intlResetPassword } = await useInternationalizationResetPassword();

  metadata.title = intlResetPassword.metadata.title;

  return (
    <>
      <h1 className='pt-5 text-xl font-semibold text-gray/900'>
        {intlResetPassword.title}
      </h1>
      <p className='mx-10 mb-6 mt-2 text-center text-sm font-normal text-gray/600'>
        {intlResetPassword.headerSubtitle}
        <span className='font-semibold text-primary/700'>
          {intlResetPassword.subtitleWithColor}
        </span>
        {intlResetPassword.subtitle}
      </p>
      <ResetPasswordForm intl={intlResetPassword}></ResetPasswordForm>
    </>
  );
}
