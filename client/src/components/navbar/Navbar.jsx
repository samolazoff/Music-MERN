import React from 'react';
import {NavLink } from 'react-router-dom';

const links = [
    ['home', '/'],
    ['music', '/music'],
    ['sign in', '/app/login'],
    ['sign up', '/app/registr'],
    ['profile', '/app/me'],
];

const Navbar = () => {
    return (
        <nav className="app-navbar h-20">
            <ul className=' flex flex-row justify-end gap-5 items-center uppercase h-full'>
                {
                    links.map((link, index)=>{
                        return(
                            <li key={index} className='nav__item px-3'>
                                <NavLink to={link[1]}>{link[0]}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;