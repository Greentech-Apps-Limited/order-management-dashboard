import React from 'react';
import SearchBar from './search-bar';

const Header = () => {
  return (
    <div className="items-center justify-between hidden h-20 px-4 border-b border-gray-200 md:flex bg-neutral">
      <div className="w-72">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
