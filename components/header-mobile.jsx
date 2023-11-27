import React from 'react';
import Notification from './notification';

const HeaderMobile = () => {
  return (
    <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 md:hidden bg-neutral">
      HeaderMobile
      <div>
        <Notification  />
      </div>
    </div>
  );
};

export default HeaderMobile;
