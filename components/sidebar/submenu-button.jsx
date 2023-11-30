import React from 'react';

import { ArrowDownIcon } from '@/icons';
import { cn } from '@/lib/utils';

const SubMenuButton = ({ item, pathname, subMenuOpen, toggleSubMenu }) => (
  <button
    type="button"
    onClick={toggleSubMenu}
    className={cn(
      'py-2 px-4 flex flex-row gap-2 items-center rounded-full w-full justify-between',
      pathname.includes(item.path) && 'text-primary-8 bg-primary font-medium',
      pathname.includes(item.path) && subMenuOpen && 'bg-gray'
    )}
  >
    <div className="flex flex-row items-center gap-2">
      {item.icon}
      <p>{item.title}</p>
    </div>
    <div
      className={`transition-all duration-300 ease-in-out ${subMenuOpen ? 'rotate-180 ' : ''} flex`}
    >
      <ArrowDownIcon className="text-2xl" />
    </div>
  </button>
);

export default SubMenuButton;
