import React from 'react';
import Link from 'next/link';

import { BulletPointIcon } from '@/icons';

const SubMenuContent = ({ item, pathname, subMenuOpen }) => (
  <div
    className={`transition-height duration-300 ease-in-out ${
      subMenuOpen ? 'flex' : 'hidden'
    } flex-col gap-1 my-2`}
  >
    {item.subMenuItems?.map((subItem) => (
      <div key={subItem.path}>
        {subItem.disabled ? (
          <div className="flex items-center gap-2 px-4 py-2 mx-4 rounded-full hover:text-primary-8 hover:bg-primary">
            <BulletPointIcon className="text-[8px]" />
            <span>{subItem.title}</span>
          </div>
        ) : (
          <Link
            href={subItem.path}
            className={`
          flex items-center gap-2 py-2 mx-4 px-4 hover:text-primary-8 hover:bg-primary rounded-full
          ${subItem.path === pathname ? 'text-primary-8 bg-primary font-medium' : ''}
        `}
          >
            <BulletPointIcon className="text-[8px]" />
            <span>{subItem.title}</span>
          </Link>
        )}
      </div>
    ))}
  </div>
);

export default SubMenuContent;
