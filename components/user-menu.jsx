import { ArrowDownIcon } from '@/icons';
import React from 'react';

const UserMenu = () => {
  return (
    <div className="flex items-center justify-start px-4 py-2 rounded-full bg-gray hover:bg-gray-200">
      <p>Maksudul Hasan</p>
      <ArrowDownIcon className="ml-2 text-2xl" />
    </div>
  );
};

export default UserMenu;
