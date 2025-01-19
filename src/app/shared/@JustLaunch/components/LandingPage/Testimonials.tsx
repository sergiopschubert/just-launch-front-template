'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ITestimonialsIntl } from '../../domain/interfaces/LandingPage/ITestimonials';

interface TestimonialsProps {
  intl: ITestimonialsIntl;
}

export function Testimonials({ intl }: TestimonialsProps) {
  return (
    <div
      id='testimonials'
      className='relative isolate bg-gradient-to-b from-primary/50 to-primary/50 pb-32 pt-24 sm:pt-32'
    >
      <div
        className='absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl'
        aria-hidden='true'
      >
        <div
          className='ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary/400 to-primary/600'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <motion.div
          className='mx-auto max-w-xl text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className='text-lg font-semibold leading-8 tracking-tight text-primary/500'>
            {intl?.headerTitle}
          </h3>
          <h2 className='mt-6 text-4xl font-bold tracking-tight text-gray-800 sm:text-4xl'>
            {intl?.title}
          </h2>
        </motion.div>

        <div className='mx-auto mt-16 grid max-w-7xl gap-8 sm:mt-20'>
          <motion.figure
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className='group relative mx-auto flex max-w-3xl rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5'
          >
            <div className='absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/600'>
              <span className='text-2xl text-white'>&ldquo;</span>
            </div>
            <div className='flex w-full flex-col items-center gap-8 text-center'>
              <blockquote className='relative flex-1 text-lg font-medium leading-8 tracking-tight text-gray-900'>
                <p className='relative'>
                  <span className='text-primary/600'>&ldquo;</span>
                  {intl?.principalTestimonial.body}
                  <span className='text-primary/600'>&rdquo;</span>
                </p>
              </blockquote>
              <div className='flex flex-col items-center gap-4 border-t border-gray-900/10 pt-4'>
                <div className='ring-primary/20 group-hover:ring-primary/60 relative h-16 w-16 overflow-hidden rounded-full ring-2 transition'>
                  <Image
                    className='h-full w-full object-cover'
                    src={intl?.principalTestimonial.author.imageUrl}
                    alt={intl?.principalTestimonial.author.name}
                    fill
                  />
                </div>
                <div className='text-center'>
                  <div className='text-base font-semibold text-gray-900'>
                    {intl?.principalTestimonial.author.name}
                  </div>
                  <div className='text-sm text-gray-600'>
                    {intl?.principalTestimonial.author.handle}
                  </div>
                </div>
              </div>
            </div>
          </motion.figure>

          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {intl?.testimonials
              .flatMap((columnGroup) =>
                columnGroup.flatMap((testimonial) => testimonial)
              )
              .map((testimonial) => (
                <motion.figure
                  key={testimonial.author.handle}
                  className='group relative flex flex-col rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 transition-all hover:shadow-xl'
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className='bg-primary/10 absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100'>
                    <span className='text-lg text-primary/600'>&ldquo;</span>
                  </div>
                  <blockquote className='flex-1 text-gray-900'>
                    <p className='text-base font-medium leading-relaxed'>
                      <span className='text-primary/600'>&ldquo;</span>
                      {testimonial.body}
                      <span className='text-primary/600'>&rdquo;</span>
                    </p>
                  </blockquote>
                  <figcaption className='relative mt-6 flex items-center gap-x-4 border-t border-gray-900/10 pt-4'>
                    <div className='ring-primary/10 group-hover:ring-primary/30 relative h-12 w-12 overflow-hidden rounded-full ring-2 transition'>
                      <Image
                        className='h-full w-full object-cover'
                        src={testimonial.author.imageUrl}
                        alt={testimonial.author.name}
                        fill
                      />
                    </div>
                    <div>
                      <div className='font-semibold text-gray-900'>
                        {testimonial.author.name}
                      </div>
                      <div className='text-sm text-gray-600'>
                        {testimonial.author.handle}
                      </div>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
