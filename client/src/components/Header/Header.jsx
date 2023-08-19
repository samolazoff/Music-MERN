import React from 'react';

import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';

import './Header.scss';

const Header = () => {
    return (
        <header className="app-header bg-bgc-1 w-full text-txtc-1">
            <div className="container m-auto flex justify-between items-center">
                <Logo> Logo</Logo>
                <Navbar></Navbar>
            </div>
        </header>
    );
};

export default Header;