import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import SubMenuButton from './submenu-button';
import SubMenuContent from './submenu-content';

const MenuItem = ({ item }) => {
  const { pathname } = useRouter();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {item.submenu ? (
        <div className={` ${subMenuOpen ? 'bg-gray rounded-lg' : ''}`}>
          <SubMenuButton
            item={item}
            pathname={pathname}
            subMenuOpen={subMenuOpen}
            toggleSubMenu={toggleSubMenu}
          />
          <SubMenuContent item={item} pathname={pathname} subMenuOpen={subMenuOpen} />
        </div>
      ) : (
        <>
          {/* FIXME: Remove this disabled section after creating each page route. */}
          {item.disabled ? (
            <div className="flex flex-row items-center gap-2 px-4 py-2 rounded-full hover:text-primary-8 hover:bg-primary">
              {item.icon}
              <p>{item.title}</p>
            </div>
          ) : (
            <Link
              href={item.path}
              className={`flex flex-row gap-2 items-center py-2 px-4 rounded-full hover:text-primary-8 hover:bg-primary  ${
                item.path === pathname ? 'text-primary-8 bg-primary font-medium' : ''
              }`}
            >
              {item.icon}
              <p>{item.title}</p>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default MenuItem;
