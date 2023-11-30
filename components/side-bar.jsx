import React from 'react';
import BrandInfo from './brand-info';

const SideBar = () => {
  return (
    <div className="flex flex-col h-full px-4 py-6 border-r border-gray-200 bg-neutral w-72">
      <div>
        <BrandInfo />
      </div>
      <div className="flex-1 overflow-y-auto">main menus</div>
      <div>logout</div>
    </div>
  );
};

export default SideBar;
