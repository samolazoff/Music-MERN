import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';

import './Layout.scss';

const Layout = () => {

    return (
        <div className='app flex flex-col justify-start items-center'>
           <Header></Header>
            <main className="app-main">
                <Outlet></Outlet>
            </main>
            <footer className="app-footer">
                <script>
                    
                </script>
            </footer>            
        </div>
    );
};

export default Layout;