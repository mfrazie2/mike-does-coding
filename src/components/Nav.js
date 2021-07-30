import React from 'react';
import { Link } from 'gatsby';

const Nav = () => {
    return (
        <nav>
            <Link to="/" activeStyle={{ color: "red" }}>Home</Link>
            <Link to="/blog"activeStyle={{ color: "red" }}>Blog</Link>
            <Link to="/about"activeStyle={{ color: "red" }}>About</Link>
        </nav>
    );
};

export default Nav;
