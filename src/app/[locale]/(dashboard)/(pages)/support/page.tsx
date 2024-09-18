import {
  Heading,
  EmptyState,
  Button,
} from '@/app/shared/@JustLaunch/components';

import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
};

export default function Support() {
  return (
    <>
      <Container>
        <Heading title='Support - (Demo Page)' />
        <div className='mt-16'>
          <EmptyState
            title={'No Ticket'}
            description={'Get Started by creating a new ticket of support'}
          >
            <Button className='px-3 py-2'>New Ticket</Button>
          </EmptyState>
        </div>
      </Container>
    </>
  );
}
