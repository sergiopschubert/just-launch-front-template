import { Button, Heading } from '@/app/shared/@JustLaunch/components';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { Metadata } from 'next';
import { CustomersTable } from './data-fake/CustomersTable';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Customers() {
  return (
    <>
      <Container>
        <Heading title='Customers - (Demo Page)'>
          <Button className='px-3 py-2'>Create customer</Button>
        </Heading>
        <div className='mt-6'>
          <CustomersTable />
        </div>
      </Container>
    </>
  );
}
