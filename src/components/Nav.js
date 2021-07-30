import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

//#region 
const NavLink = styled(props => <GatsbyLink {...props} />)`
    font-family: 'Roboto';
    font-size: 18px;
    color: #fffffc;

    &:hover {
        text-decoration: underline;
    }

    &:active {
        color: #FF7F11;
    }
`;
//#endregion


const Nav = () => {
    return (
        <nav>
            <NavLink to="/blog/" partiallyActive={true} activeStyle={{color:'#ff7f11'}}>Blog</NavLink>
            <NavLink to="/about" activeStyle={{color:'#ff7f11'}}>About</NavLink>
        </nav>
    );
};

export default Nav;
