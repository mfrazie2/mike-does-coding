import { Link } from 'gatsby';
import React from 'react';
import logoUrl from '../images/logo.png';
import logoUrl2x from '../images/logo@2x.png';

const Logo = () => {

    return (
        <Link to="/">
            <img srcSet={`${logoUrl}, ${logoUrl2x} 2x`} alt="Mike Does Coding" />
        </Link>
    );
};

export default Logo;