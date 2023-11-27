import React from 'react';
import Header from './header';
import HeaderMobile from './header-mobile';
import SideBar from './side-bar';

const Layout = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden md:block">
        <SideBar />
      </div>
      <div className="flex flex-col w-full h-screen">
        <div className="z-40">
          <Header />
          <HeaderMobile />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
