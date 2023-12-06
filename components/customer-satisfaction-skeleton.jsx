import React from 'react';
import SkeletonLoader from './skeleton-loader';

const CustomerSatisfactionSkeleton = () => {
  return (
    <SkeletonLoader className="h-[200px] flex items-start gap-3">
      <div className="w-32 h-4 bg-gray-300 rounded-lg" />
    </SkeletonLoader>
  );
};

export default CustomerSatisfactionSkeleton;
