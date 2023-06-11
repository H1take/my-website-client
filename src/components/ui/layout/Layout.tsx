import React, { FC, PropsWithChildren } from 'react';

import Header from './header/Header';

import '../../../styles/Layout.scss';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <div className="layout">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
