'use client';

import { useRouter } from 'next/navigation';
import { Container } from '../LandingPage/Container';
import { formatDate } from '../../lib/formatDate';
import Link from 'next/link';

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
      <path
        d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export interface ArticleWithSlug {
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
}

function ArticleCard({ article }: { article: ArticleWithSlug }) {
  return (
    <article className='group relative flex flex-col items-start'>
      <h3 className='text-base font-semibold tracking-tight text-primary/600'>
        <Link href={`/articles/${article.slug}`}>
          <span className='absolute inset-0' />
          <span className='relative z-10'>{article.title}</span>
        </Link>
      </h3>
      <time
        dateTime={article.date}
        className='relative z-10 order-first mb-3 flex items-center text-sm text-gray-500'
      >
        {formatDate(article.date)}
      </time>
      <p className='relative z-10 mt-2 text-sm text-gray-600'>
        {article.description}
      </p>
    </article>
  );
}

export function ArticleLayout({
  article,
  allArticles = [],
  children,
}: {
  article: ArticleWithSlug;
  allArticles?: ArticleWithSlug[];
  children: React.ReactNode;
}) {
  const router = useRouter();

  const recommendedArticles =
    allArticles?.length > 1
      ? allArticles
          .filter((a) => a.slug !== article.slug)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
      : [];

  return (
    <Container>
      <div className='relative mb-16 px-4 sm:mb-24 sm:px-8 lg:px-12'>
        <div className='mx-auto max-w-2xl lg:max-w-5xl'>
          <div className='xl:relative'>
            <div className='mx-auto max-w-2xl'>
              <button
                type='button'
                onClick={() => router.back()}
                aria-label='Voltar para artigos'
                className='group mb-8 flex items-center text-sm font-medium text-primary/600 hover:text-primary/700'
              >
                <ArrowLeftIcon className='mr-3 h-4 w-4 stroke-current' />
                Voltar para os artigos
              </button>

              <article className='relative z-10'>
                <header className='relative z-10 mb-10'>
                  <div className='flex flex-col'>
                    <h1 className='mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                      {article.title}
                    </h1>
                    <time
                      dateTime={article.date}
                      className='order-first flex items-center text-base text-primary/600'
                    >
                      <span className='h-4 w-0.5 rounded-full bg-primary/600' />
                      <span className='ml-3'>{formatDate(article.date)}</span>
                    </time>
                    <p className='mt-4 text-base leading-8 text-gray-600'>
                      {article.description}
                    </p>
                  </div>
                </header>

                <div className='relative'>
                  <div className='prose-primary prose prose-lg mx-auto mt-8'>
                    {children}
                  </div>
                </div>
              </article>

              {recommendedArticles.length > 0 && (
                <div className='mt-24 border-t border-gray-200 pt-16'>
                  <h2 className='mb-12 text-3xl font-bold tracking-tight text-primary/900'>
                    Leia também
                  </h2>
                  <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                    {recommendedArticles.map((article) => (
                      <ArticleCard key={article.slug} article={article} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
