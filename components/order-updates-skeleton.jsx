import React from 'react';
import { uuidv4 } from '@/lib/utils';
import SkeletonLoader from './skeleton-loader';

const OrderUpdatesSkeleton = () => {
  const arr = new Array(3).fill(0);
  return (
    <SkeletonLoader className="h-[455px] ">
      <div className="w-32 h-4 mt-2 mb-3 bg-gray-300 rounded-lg" />
      {arr.map(() => (
        <div key={uuidv4()} className="flex flex-col gap-4 my-11 md:flex-row">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <div>
            <div className="w-40 h-4 bg-gray-300 rounded-lg" />
            <div className="h-4 my-3 bg-gray-300 rounded-lg w-36" />
            <div className="flex flex-col justify-start gap-4 sm:flex-row">
              <div className="w-32 h-4 bg-gray-300 rounded-lg" />
              <div className="w-32 h-4 bg-gray-300 rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </SkeletonLoader>
  );
};

export default OrderUpdatesSkeleton;
