'use client';
import { formatDate } from '../../lib/formatDate';
import Link from 'next/link';
import { ArticleWithSlug } from '../../lib/types';

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className='md:grid md:grid-cols-4 md:items-baseline'>
      <div className='group relative flex flex-col items-start md:col-span-3'>
        <h2 className='text-base font-semibold tracking-tight text-gray-800 dark:text-gray-100'>
          <div className='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50' />
          <Link href={`/articles/${article.slug}`}>
            <span className='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl' />
            <span className='relative z-10'>{article.title}</span>
          </Link>
        </h2>
        <time
          className='relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-gray-400 md:hidden dark:text-zinc-500'
          dateTime={article.date}
        >
          <span
            className='absolute inset-y-0 left-0 flex items-center'
            aria-hidden='true'
          >
            <span className='h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500' />
          </span>
          {formatDate(article.date)}
        </time>
        <p className='relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400'>
          {article.description}
        </p>
        <div
          aria-hidden='true'
          className='relative z-10 mt-4 flex items-center text-sm font-medium text-primary/500'
        >
          Ler artigo
          <svg
            viewBox='0 0 16 16'
            fill='none'
            aria-hidden='true'
            className='ml-1 h-4 w-4 stroke-current'
          >
            <path
              d='M6.75 5.75 9.25 8l-2.5 2.25'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
      <time
        className='relative z-10 order-first mb-3 mt-1 flex items-center text-sm text-zinc-400 md:block dark:text-zinc-500'
        dateTime={article.date}
      >
        {formatDate(article.date)}
      </time>
    </article>
  );
}

export function ArticlesList({ articles }: { articles: ArticleWithSlug[] }) {
  return (
    <div className='md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'>
      <div className='flex max-w-3xl flex-col space-y-16'>
        {articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
