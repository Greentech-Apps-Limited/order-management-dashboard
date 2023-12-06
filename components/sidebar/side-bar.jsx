import React from 'react';

import { LogoutIcon } from '@/icons';
import { SIDENAV_ITEMS } from '@/lib/constants';

import BrandInfo from '../brand-info';
import MenuItem from './menu-item';

const SideBar = () => {
  return (
    <div className="flex flex-col h-full px-4 py-6 border-r border-gray-200 bg-neutral w-72">
      <div className="pb-8">
        <BrandInfo />
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-2">
          {SIDENAV_ITEMS.map((item) => {
            if (item.divider) {
              return <div key={item} className="my-4" />;
            }

            return <MenuItem key={item.path} item={item} />;
          })}
        </div>
      </div>
      <div className="pt-2">
        <button
          type="button"
          className="flex flex-row items-center w-full gap-2 px-4 py-2 rounded-full hover:text-primary-8 hover:bg-primary"
        >
          <LogoutIcon className="text-2xl" />
          <p>Log Out</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
