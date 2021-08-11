import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import ResetCss from './resetCss';
import MikeDoesCodingCss from './MikeDoesCodingCss';

//#region
const StyledMain = styled.main`
  min-height: calc(100vh - 60px - 80px);
`;
//#endregion

const Layout = ({ children }) => {
  return (
    <>
      <ResetCss />
      <MikeDoesCodingCss />
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
