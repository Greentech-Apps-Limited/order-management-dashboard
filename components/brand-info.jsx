import Image from 'next/image';
import React from 'react';

const BrandInfo = () => {
  return (
    <div className="flex items-center justify-start gap-2 px-2">
      <div className="w-max">
        <Image src="/images/project-logo.svg" alt="logo" width={32} height={32} />
      </div>
      <div className="font-medium">
        <p className="text-xl text-gray-800">GreenTech</p>
        <p className="text-xs text-gray-500">Order Management System</p>
      </div>
    </div>
  );
};

export default BrandInfo;
