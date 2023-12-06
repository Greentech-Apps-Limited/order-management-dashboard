import { cn } from '@/lib/utils';
import React from 'react';

const OrderStatusBadge = ({ label, variant = 'neutral' }) => {
  let textColorClass;
  let bgColorClass;

  switch (variant) {
    case 'critical':
      textColorClass = 'text-critical-5';
      bgColorClass = 'bg-critical';
      break;
    case 'success':
      textColorClass = 'text-success-7';
      bgColorClass = 'bg-success-1';
      break;
    default:
      textColorClass = 'text-primary-8';
      bgColorClass = 'bg-primary';
  }

  const badgeClasses = cn(
    'font-semibold w-max px-2 py-1 rounded-full',
    textColorClass,
    bgColorClass
  );

  return <div className={badgeClasses}>{label}</div>;
};

export default OrderStatusBadge;
