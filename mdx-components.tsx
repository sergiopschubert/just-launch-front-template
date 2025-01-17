import Image, { type ImageProps } from 'next/image';
import { type MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
    h1: ({ children }) => (
      <h1 className='text-4xl font-bold tracking-tight text-primary/900'>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='mt-8 text-2xl font-bold tracking-tight text-primary/800'>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className='mt-6 text-xl font-bold tracking-tight text-primary/700'>
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className='mt-4 text-base leading-7 text-gray-600'>{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className='text-primary/600 underline hover:text-primary/500'
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className='mt-4 list-disc pl-8 text-gray-600'>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className='mt-4 list-decimal pl-8 text-gray-600'>{children}</ol>
    ),
    li: ({ children }) => <li className='mt-2'>{children}</li>,
    strong: ({ children }) => (
      <strong className='font-semibold text-primary/900'>{children}</strong>
    ),
    img: (props) => (
      <img
        className='my-8 rounded-lg border border-gray-200 shadow-sm'
        {...props}
      />
    ),
    pre: ({ children }) => (
      <pre className='mt-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white shadow-lg'>
        {children}
      </pre>
    ),
    code: ({ children, className }) => {
      // Se tiver className, é um bloco de código
      if (className) {
        return <code className={className}>{children}</code>;
      }
      // Se não tiver, é um código inline
      return (
        <code className='rounded bg-gray-100 px-1 py-0.5 font-mono text-primary/600'>
          {children}
        </code>
      );
    },
  };
}
