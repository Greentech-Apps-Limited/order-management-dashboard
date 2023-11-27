import React from 'react';
import Header from './header';
import HeaderMobile from './header-mobile';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="z-40">
        <Header />
        <HeaderMobile />
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
