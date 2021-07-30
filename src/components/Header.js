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

// #endregion

const Header = () => {

    return (
        <StyledHeader>
            <Logo />
            <Nav />
        </StyledHeader>
    )
};

export default Header;
