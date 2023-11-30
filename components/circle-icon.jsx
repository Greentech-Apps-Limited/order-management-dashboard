import { cn } from '@/lib/utils';
import React from 'react';

const CircleIcon = ({ children, className }) => {
  const circleIconClasses = cn(
    'rounded-full',
    'bg-gray-100',
    'text-2xl',
    'text-primary-8',
    'w-max',
    'p-2',
    className
  );

  return <div className={circleIconClasses}>{children}</div>;
};

export default CircleIcon;
