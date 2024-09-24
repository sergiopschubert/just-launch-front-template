import {
  Select,
  Stat,
  Heading,
  SubHeading,
  SimpleAreaChart,
} from '@/app/shared/@JustLaunch/components';
import { Container } from '@/app/shared/@JustLaunch/components/LandingPage/Container';
import { OrdersTable } from './data-fake/OrdersTable';
import { useInternationalizationDashboard } from '@/app/shared/@JustLaunch/hooks/contents/useInternationalizationDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {};

export default async function Home() {
  const { intlHome } = await useInternationalizationDashboard();
  metadata.title = intlHome.metadata.title;

  return (
    <>
      <Container>
        <Heading title={intlHome.metadata.title} />
        <div className='mt-4 flex items-end justify-between'>
          <SubHeading className='pl-1' title={intlHome.headings.overview} />
          <div className='w-64'>
            <Select.Root>
              <Select.Wrapper
                defaultValue='last_week'
                placeholder={intlHome.selectPeriod.placeholder}
              >
                <Select.Item
                  value='last_week'
                  text={intlHome.selectPeriod.options.lastWeek}
                />
                <Select.Item
                  value='last_two'
                  text={intlHome.selectPeriod.options.lastTwoWeeks}
                />
                <Select.Item
                  value='last_month'
                  text={intlHome.selectPeriod.options.lastMonth}
                />
                <Select.Item
                  value='last_quarter'
                  text={intlHome.selectPeriod.options.lastQuarter}
                />
              </Select.Wrapper>
            </Select.Root>
          </div>
        </div>
        <div className='mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4'>
          <div className='rounded-lg bg-white p-4 shadow-md'>
            <Stat
              title={intlHome.stats.totalRevenue}
              value='$2.6M'
              change='+4.5%'
              textFooter={intlHome.selectPeriod.options.lastWeek}
            />
          </div>
          <div className='rounded-lg bg-white p-4 shadow-md'>
            <Stat
              title={intlHome.stats.avgOrderValue}
              value='$455'
              change='-0.5%'
              textFooter={intlHome.selectPeriod.options.lastWeek}
            />
          </div>

          <div className='rounded-lg bg-white p-4 shadow-md'>
            <Stat
              title={intlHome.stats.ticketsSold}
              value='5,888'
              change='+4.5%'
              textFooter={intlHome.selectPeriod.options.lastWeek}
            />
          </div>
          <div className='rounded-lg bg-white p-4 shadow-md'>
            <Stat
              title={intlHome.stats.pageViews}
              value='823,067'
              change='+21.2%'
              textFooter={intlHome.selectPeriod.options.lastWeek}
            />
          </div>
        </div>
        <SubHeading
          className='mb-4 mt-6 pl-1'
          title={intlHome.headings.recentOrders}
        />

        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2'>
            <div className='h-full rounded-lg bg-white p-4 pt-10 shadow-md'>
              <OrdersTable intl={{ ...intlHome.table.columns }} />
            </div>
          </div>
          <div className='mt-4 w-full lg:mt-0 lg:w-1/2 lg:pl-6'>
            <div className='rounded-lg bg-white p-4 shadow-md'>
              <Stat
                title={intlHome.stats.totalSales}
                value='300M'
                change='+4.5%'
              />
            </div>
            <div className='mt-6 pl-2'>
              <SimpleAreaChart
                title={intlHome.chart.title}
                description={intlHome.chart.description}
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
  );
}
