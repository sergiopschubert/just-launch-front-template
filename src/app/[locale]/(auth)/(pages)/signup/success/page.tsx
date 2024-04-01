import { useInternationalizationSignup } from '@/app/[locale]/(auth)/hooks/intl/useInternationalizationSignup';
import { SuccessMessage } from '@/app/shared/components/SuccessMessage';
import { Metadata } from 'next/types';

export let metadata: Metadata = {};

export default async function SignUpSuccess() {
  const { intlSignUpSuccess } = await useInternationalizationSignup();

  metadata.title = intlSignUpSuccess.metadata.title;

  return (
    <SuccessMessage
      title={intlSignUpSuccess.title}
      description={intlSignUpSuccess.description}
      textButton={intlSignUpSuccess.textButton}
      linkButton='/signin'
      redirectDelay={5000}
    />
  );
}
