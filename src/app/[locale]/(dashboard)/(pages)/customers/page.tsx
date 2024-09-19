import { Button, Heading } from '@/app/shared/@JustLaunch/components';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { Metadata } from 'next';
import { CustomersTable } from './data-fake/CustomersTable';
import { useInternationalizationDashboard } from '@/app/shared/@JustLaunch/hooks/contents/useInternationalizationDashboard';

export const metadata: Metadata = {};

export default async function Customers() {
  const { intlCustomers } = await useInternationalizationDashboard();
  metadata.title = intlCustomers.metadata.title;

  return (
    <>
      <Container className='mt-8'>
        <Heading title={intlCustomers.heading.title}>
          <Button className='px-3 py-2'>{intlCustomers.heading.button}</Button>
        </Heading>
        <div className='mt-6'>
          <CustomersTable intl={{ ...intlCustomers.table.columns }} />
        </div>
      </Container>
    </>
  );
}
