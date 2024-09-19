import {
  Heading,
  EmptyState,
  Button,
} from '@/app/shared/@JustLaunch/components';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { useInternationalizationDashboard } from '@/app/shared/@JustLaunch/hooks/contents/useInternationalizationDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {};

export default async function Support() {
  const { intlSupport } = await useInternationalizationDashboard();
  metadata.title = intlSupport.metadata.title;

  return (
    <>
      <Container>
        <Heading title={intlSupport.metadata.title} />
        <div className='mt-16'>
          <EmptyState
            title={intlSupport.emptyState.title}
            description={intlSupport.emptyState.description}
          >
            <Button className='px-3 py-2'>
              {intlSupport.emptyState.newTicketButton}
            </Button>
          </EmptyState>
        </div>
      </Container>
    </>
  );
}
