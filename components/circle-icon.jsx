import { cn } from '@/lib/utils';
import React from 'react';

const CircleIcon = ({ children, className, variant }) => {
  let iconBgColorClass;

  switch (variant) {
    case 'neutral':
      iconBgColorClass = 'bg-gray-100';
      break;
    case 'success':
      iconBgColorClass = 'bg-success';
      break;
    case 'critical':
      iconBgColorClass = 'bg-critical';
      break;
    default:
      iconBgColorClass = 'bg-gray-100';
  }

  const circleIconClasses = cn(
    'rounded-full',
    'bg-gray-100',
    'text-2xl',
    'text-primary-8',
    'w-max',
    'h-max',
    'p-2',
    iconBgColorClass,
    className
  );

  return <div className={circleIconClasses}>{children}</div>;
};

export default CircleIcon;
