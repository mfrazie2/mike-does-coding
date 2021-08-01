import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

//#region
const NavLink = styled(props => <GatsbyLink {...props} />)`
  color: #fffffc;
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 16px;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: #ff7f11;
  }
`;
//#endregion

const Nav = () => {
  return (
    <nav>
      <NavLink
        to="/blog/"
        partiallyActive={true}
        activeStyle={{ color: '#ff7f11' }}>
        Blog
      </NavLink>
      <NavLink to="/about" activeStyle={{ color: '#ff7f11' }}>
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
