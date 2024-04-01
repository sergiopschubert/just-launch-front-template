import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth';
import { Button } from '@/app/shared/components/Button';
import { IProgress } from '@/app/shared/domain/contracts/IProgress';
import { useInternationalizationShared } from '@/app/shared/hooks/useInternationalizationShared';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

async function getData(): Promise<IProgress> {
  const session = await getServerSession(nextAuthOptions);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/contents/findProgress`,
    {
      headers: {
        tenantId: session?.user?.id as string,
      },
    }
  );

  const result = await response.json();
  const progress = result.progress as IProgress;
  return progress;
}

export async function UserSpaceWidget() {
  const data = await getData();
  const usagePercentage = (data.count / data.max_contents) * 100;

  const { intlUserSpaceWidget } = await useInternationalizationShared();

  return (
    <div className='flex flex-col gap-4 rounded-lg bg-primary/50 px-4 py-5'>
      <div className='space-y-2'>
        <span className='text-sm/5 font-semibold text-primary/700'>
          {intlUserSpaceWidget.beforeTitle}
          {data.max_contents}
          {intlUserSpaceWidget.afterTitle}
        </span>
        <p className='text-sm/5 text-violet-500'>
          {intlUserSpaceWidget.beforeSubtitle} <b>{data.count}</b>{' '}
          {intlUserSpaceWidget.middleSubtitle}
          <b>{data.max_contents}</b> {intlUserSpaceWidget.afterTitle}
          {data.count === data.max_contents
            ? intlUserSpaceWidget.warningMessage
            : ''}
        </p>
        <div className='h-3 rounded-full bg-gray/300'>
          <div
            style={{ width: `${usagePercentage}%` }}
            className='h-3 rounded-full bg-primary/600'
          ></div>
        </div>
        {data.count === data.max_contents ? (
          <div className='pt-2'>
            <Link href={'/settings'}>
              <Button>{intlUserSpaceWidget.updateButton}</Button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
