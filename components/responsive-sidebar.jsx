import useUtility from '@/hooks/useUtilityContext';
import React from 'react';

const ResponsiveSidebar = ({ children }) => {
  const { isOpen, setIsOpen, handleKeyDown } = useUtility();
  return (
    <div className="flex items-center lg:hidden">
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-20 transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        onKeyDown={handleKeyDown}
        role="button"
        aria-label="Toggle Sidebar"
        tabIndex="0"
      />

      <aside
        className={`h-full fixed top-0 left-0 z-40 flex flex-col bg-white  w-max overflow-hidden  transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {children}
      </aside>
    </div>
  );
};

export default ResponsiveSidebar;
