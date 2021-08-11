import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import styled from 'styled-components';
import ContentWrapper from './ContentWrapper';

// #region
const StyledHeader = styled.header`
  background-color: #173670;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99;
`;

const HeaderInner = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  margin: 0 auto;
  width: 960px;
`;

// #endregion

const Header = () => {
  return (
    <StyledHeader>
      <ContentWrapper>
        <HeaderInner>
          <Logo />
          <Nav />
        </HeaderInner>
      </ContentWrapper>
    </StyledHeader>
  );
};

export default Header;
