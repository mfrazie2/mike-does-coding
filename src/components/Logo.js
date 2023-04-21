import { Link } from 'gatsby';
import React from 'react';
import logoUrl from '../images/logo.png';
import logoUrl2x from '../images/logo@2x.png';
import styled from 'styled-components';

const StyledLink = styled(props => <Link {...props} />)`
  display: inline-flex;
`;

const Logo = () => {
  return (
    <StyledLink to="/">
      <img srcSet={`${logoUrl}, ${logoUrl2x} 2x`} alt="Mike Does Coding" />
    </StyledLink>
  );
};

export default Logo;
