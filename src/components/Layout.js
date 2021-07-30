import React from 'react';
import Header from './Header';
import ResetCss from './resetCss';

const Layout = ({children}) => {
    return (
        <>
            <ResetCss />
            <Header />
            <main>
                {children}
            </main>
            <footer>
                <p>Fun Footer</p>
            </footer>
        </>
    );
}

export default Layout;