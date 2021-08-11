import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ResetCss from './resetCss';
import MikeDoesCodingCss from './MikeDoesCodingCss';

const Layout = ({ children }) => {
  return (
    <>
      <ResetCss />
      <MikeDoesCodingCss />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
