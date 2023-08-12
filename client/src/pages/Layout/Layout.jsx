import React from 'react';
import { Outlet } from 'react-router-dom';

// import Navbar from '../../components/navbar/Navbar';
// import Logo from '../../components/logo/Logo';

const Layout = () => {
    return (
        <div className='app flex flex-col justify-start items-center'>
            <header className="app-header">
                <div className="container">
                    header
                    {/* <Logo> Logo</Logo>
                    <Navbar>Navbar</Navbar> */}
                </div>
            </header>
            <main className="app-main">
                <Outlet></Outlet>
            </main>
            <footer className="app-footer">
                footer
            </footer>            
        </div>
    );
};

export default Layout;