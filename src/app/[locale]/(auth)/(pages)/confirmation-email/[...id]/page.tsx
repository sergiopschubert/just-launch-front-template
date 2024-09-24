import { SuccessMessage } from '@/app/shared/@JustLaunch/components';
import { useInternationalizationDashboard } from '@/app/shared/@JustLaunch/hooks/contents/useInternationalizationDashboard';
import { Metadata } from 'next/types';

export let metadata: Metadata = {};

interface ConfirmationEmailSuccessProps {
  params: { id: string };
}
async function getData(id: string): Promise<void> {
  await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/users/update-confirmation`,
    {
      method: 'PUT',
      headers: {
        tenantId: id,
      },
    }
  );
}

export default async function ConfirmationEmailSuccess({
  params,
}: ConfirmationEmailSuccessProps) {
  await getData(params.id);
  const { intlConfirmationEmail } = await useInternationalizationDashboard();

  metadata.title = intlConfirmationEmail.metadata.title;

  return (
    <SuccessMessage
      title={intlConfirmationEmail.title}
      description={intlConfirmationEmail.description}
      textButton={intlConfirmationEmail.textButton}
      linkButton='/home'
      redirectDelay={8000}
    />
  );
}
