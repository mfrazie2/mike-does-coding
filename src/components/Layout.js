import React from 'react';
import {Link} from 'gatsby';

const Layout = ({children}) => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>Fun Footer</p>
            </footer>
        </div>
    );
}

export default Layout;