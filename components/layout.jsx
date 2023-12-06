import React from 'react';
import Header from './header';
import HeaderMobile from './header-mobile';
import SideBar from './sidebar/side-bar';
import ResponsiveSidebar from './responsive-sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden lg:block lg:w-72">
        <SideBar />
      </div>
      <ResponsiveSidebar>
        <SideBar />
      </ResponsiveSidebar>
      <div className="flex flex-col w-full lg:w-[calc(100vw-288px)] h-screen">
        <div className="z-30">
          <Header />
          <HeaderMobile />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
