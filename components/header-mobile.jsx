import React from 'react';
import { MenuIcon } from '@/icons';
import Notification from './notification';

const HeaderMobile = () => {
  return (
    <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 md:hidden bg-neutral">
      <div>
        <button type="button" aria-label="Menu">
          <MenuIcon className="text-2xl" />
        </button>
      </div>
      <div>
        <Notification />
      </div>
    </div>
  );
};

export default HeaderMobile;
