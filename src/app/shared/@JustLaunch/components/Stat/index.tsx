'use client';
import { motion } from 'framer-motion';
import { BadgeColor } from '../../domain/enums/BadgeColor';
import { Badge } from '../Badge';

interface StatProps {
  title: string;
  value: string;
  change: string;
  textFooter?: string;
}

export function Stat({ title, value, change, textFooter }: StatProps) {
  return (
    <div className='text-gray-900'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            type: 'tween',
            duration: 0.5,
            delay: 0.1,
          },
        }}
        className='mt-1 text-lg/6 font-medium sm:text-sm/6'
      >
        {title}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            type: 'tween',
            duration: 0.5,
            delay: 0.2,
          },
        }}
        className='mt-3 text-3xl/8 font-semibold sm:text-2xl/8'
      >
        {value}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            type: 'tween',
            duration: 0.5,
            delay: 0.3,
          },
        }}
        className='mt-3 text-sm/6 sm:text-xs/6'
      >
        <Badge
          color={change.startsWith('+') ? BadgeColor.Lime : BadgeColor.Pink}
        >
          {change}
        </Badge>{' '}
        <span className='text-gray-500'>{textFooter}</span>
      </motion.div>
    </div>
  );
}
