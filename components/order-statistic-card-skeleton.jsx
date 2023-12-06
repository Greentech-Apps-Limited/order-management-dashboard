import React from 'react';
import { uuidv4 } from '@/lib/utils';
import SkeletonLoader from './skeleton-loader';

const OrderStatisticCardSkeleton = () => {
  const arr = new Array(4).fill(0);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
      {arr.map(() => (
        <SkeletonLoader key={uuidv4()} className="h-[112px] flex items-start gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <div className="w-32 h-4 bg-gray-300 rounded-lg" />
            <div className="w-16 h-8 my-2 bg-gray-300 rounded-lg" />
            <div className="w-40 h-4 bg-gray-300 rounded-lg" />
          </div>
        </SkeletonLoader>
      ))}
    </div>
  );
};
export default OrderStatisticCardSkeleton;
