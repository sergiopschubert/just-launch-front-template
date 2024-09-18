import {
  Select,
  Stat,
  Heading,
  SubHeading,
  SimpleAreaChart,
} from '@/app/shared/@JustLaunch/components';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { Metadata } from 'next';
import { OrdersTable } from './data-fake/OrdersTable';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <>
      <>
        <Container>
          <Heading title='Home - (Demo Page)' />
          <div className='mt-4 flex items-end justify-between'>
            <SubHeading className='pl-1' title='Overview' />
            <div className='w-52'>
              <Select.Root>
                <Select.Wrapper defaultValue='last_week' placeholder='Period'>
                  <Select.Item value='last_week' text='Last week' />
                  <Select.Item value='last_two' text='Last two weeks' />
                  <Select.Item value='last_month' text='Last month' />
                  <Select.Item value='last_quarter' text='Last quarter'>
                    Last quarter
                  </Select.Item>
                </Select.Wrapper>
              </Select.Root>
            </div>
          </div>
          <div className='mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Stat title='Total revenue' value='$2.6M' change='+4.5%' />
            </div>
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Stat title='Average order value' value='$455' change='-0.5%' />
            </div>

            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Stat title='Tickets sold' value='5,888' change='+4.5%' />
            </div>
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Stat title='Pageviews' value='823,067' change='+21.2%' />
            </div>
          </div>
          <SubHeading className='mb-4 mt-6 pl-1' title='Recent orders' />

          <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
              <div className='h-full rounded-lg bg-white p-4 pt-10 shadow-md'>
                <OrdersTable />
              </div>
            </div>
            <div className='mt-4 w-full lg:mt-0 lg:w-1/2 lg:pl-6'>
              <div className='rounded-lg bg-white p-4 shadow-md'>
                <Stat title='Total Sales' value='300M' change='+4.5%' />
              </div>
              <div className='mt-6 pl-2'>
                <SimpleAreaChart
                  title='Sales by month'
                  description='This is chart by sales'
                  xDataKey='name'
                  yDataKey='sales'
                  showLegend={true}
                  data={[
                    { name: 'Jan', sales: 300 },
                    { name: 'Fev', sales: 200 },
                    { name: 'Mar', sales: 550 },
                    { name: 'Abr', sales: 350 },
                    { name: 'Mar', sales: 750 },
                  ]}
                />
              </div>
            </div>
          </div>
        </Container>
      </>
    </>
  );
}
