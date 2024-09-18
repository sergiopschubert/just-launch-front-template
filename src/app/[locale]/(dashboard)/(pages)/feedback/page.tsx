import { Button, Heading } from '@/app/shared/@JustLaunch/components';
import { ConstructionState } from '@/app/shared/@JustLaunch/components/ConstructionState';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback',
};

export default function Feedback() {
  return (
    <>
      <Container>
        <Heading title='Feedback - (Demo Page)' />
        <div className='mt-10'>
          <ConstructionState
            title={'Under Construction'}
            description={
              'This section is under construction. Please check back later.'
            }
          >
            <Button className='px-3 py-2'>Notify Me</Button>
          </ConstructionState>
        </div>
      </Container>
    </>
  );
}
