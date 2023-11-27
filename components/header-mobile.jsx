import React from 'react';
import Image from 'next/image';

import { MenuIcon } from '@/icons';
import useUtility from '@/hooks/useUtilityContext';

import Notification from './notification';

const HeaderMobile = () => {
  const { toggleSidebar } = useUtility();
  return (
    <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 md:hidden bg-neutral">
      <div>
        <button type="button" aria-label="Toggle menu" onClick={toggleSidebar}>
          <MenuIcon className="text-2xl" />
        </button>
      </div>
      <div className="w-max">
        <Image src="/images/project-logo.svg" alt="logo" width={32} height={32} />
      </div>
      <div>
        <Notification />
      </div>
    </div>
  );
};

export default HeaderMobile;
