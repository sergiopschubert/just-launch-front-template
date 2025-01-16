import Link from 'next/link';
import { formatDate } from '../../lib/formatDate';
import { ArticleWithSlug } from './ArticleLayout';

export function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className='group relative flex flex-col items-start rounded-2xl p-6 transition-all hover:bg-white hover:shadow-lg'>
      <h2 className='text-base font-semibold tracking-tight text-primary/600'>
        <Link href={`/articles/${article.slug}`}>
          <span className='absolute inset-0 rounded-2xl' />
          <span className='relative z-10'>{article.title}</span>
        </Link>
      </h2>
      <time
        dateTime={article.date}
        className='relative z-10 order-first mb-3 flex items-center text-sm text-gray-500'
      >
        {formatDate(article.date)}
      </time>
      <p className='relative z-10 mt-2 text-sm text-gray-600'>
        {article.description}
      </p>
      <div
        aria-hidden='true'
        className='relative z-10 mt-4 flex items-center text-sm font-medium text-primary/600 group-hover:text-primary/700'
      >
        Ler artigo
        <svg
          viewBox='0 0 16 16'
          fill='none'
          aria-hidden='true'
          className='ml-1 h-4 w-4 stroke-current transition-transform group-hover:translate-x-1'
        >
          <path
            d='M6.75 5.75 9.25 8l-2.5 2.25'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </article>
  );
}
