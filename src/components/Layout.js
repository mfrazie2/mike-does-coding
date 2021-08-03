import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ResetCss from './resetCss';

const Layout = ({ children }) => {
  return (
    <>
      <ResetCss />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
