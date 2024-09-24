import { Button, Heading } from '@/app/shared/@JustLaunch/components';
import { ConstructionState } from '@/app/shared/@JustLaunch/components/ConstructionState';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { useInternationalizationDashboard } from '@/app/shared/@JustLaunch/hooks/contents/useInternationalizationDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {};

export default async function Feedback() {
  const { intlFeedback } = await useInternationalizationDashboard();
  metadata.title = intlFeedback.metadata.title;

  return (
    <>
      <Container>
        <Heading title={intlFeedback.metadata.title} />
        <div className='mt-10'>
          <ConstructionState
            title={intlFeedback.constructionState.title}
            description={intlFeedback.constructionState.description}
          >
            <Button className='px-3 py-2'>
              {intlFeedback.constructionState.notifyButton}
            </Button>
          </ConstructionState>
        </div>
      </Container>
    </>
  );
}
