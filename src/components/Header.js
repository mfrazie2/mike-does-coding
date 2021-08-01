import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import styled from 'styled-components';

// #region
const StyledHeader = styled.header`
  background-color: #173670;
  display: flex;
  width: 100%;
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
      <HeaderInner>
        <Logo />
        <Nav />
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;
