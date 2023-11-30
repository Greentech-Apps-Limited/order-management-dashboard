import React from 'react';
import SearchBar from './search-bar';
import UserMenu from './user-menu';
import Notification from './notification';

const Header = () => {
  return (
    <div className="items-center justify-between hidden h-20 px-4 border-b border-gray-200 lg:flex bg-neutral">
      <div className="w-72">
        <SearchBar />
      </div>
      <div className="flex items-center justify-between gap-2">
        <Notification />
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
