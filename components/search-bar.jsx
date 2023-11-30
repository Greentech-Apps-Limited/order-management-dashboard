import { SearchIcon } from '@/icons';
import { useState } from 'react';

const SearchBar = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex justify-end w-full">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon className="text-xl md:text-2xl" />
        </div>
        <input
          type="text"
          placeholder={placeholder || 'Search...'}
          className="w-full py-1 pl-8 pr-4 text-sm transition-all duration-200 rounded-full md:text-base bg-gray md:py-2 md:pl-10 md:pr-4 focus:outline-none focus:ring-1 focus:outline-0 focus:ring-primary-8"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
export default SearchBar;
