import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ORDER_STATUS_TYPES } from './constants';

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const transformOrderData = (orders) => {
  return Object.keys(orders)
    .map((status) => {
      const type = ORDER_STATUS_TYPES[status];
      if (!type) return null;

      const percentage = orders[`${status}_percentage`] || '';
      const isPositivePercentage = percentage[0] === '+';
      const numericPercentage = parseInt(percentage.replace(/\D/g, ''), 10);
      const displayPercentage =
        !Number.isNaN(numericPercentage) && `${Math.abs(numericPercentage)}%`;

      return {
        title: type.title,
        icon: type.icon,
        value: orders[status],
        percentage: displayPercentage,
        isPositivePercentage,
      };
    })
    .filter(Boolean);
};
