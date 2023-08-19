import React from 'react';
import {NavLink } from 'react-router-dom';

import Burger from '../Burger/Burger';

const links = [
    // title, href, isAuth, !isAuth
    ['home', '/', true, true],
    ['music', '/music', true, false],
    ['sign in', '/app/login', false, true],
    ['sign up', '/app/registr', false, true],
    ['profile', '/app/me', true, false],
    ['exit', 'exit', true, false]
];

const Navbar = () => {

    const isAuth= true;

    return (
        <nav className="app-nav h-20 flex">
            <Burger></Burger>
            <ul className=' flex flex-row justify-end gap-5 items-center uppercase h-full'>
                {
                    links.map((link, index)=>{
                        if(isAuth){
                            if(link[2]){
                                return(
                                    <li key={index} className='nav__item px-3 hover:bg-link-1-bgc-hover h-full flex justify-center items-center'>
                                        <NavLink to={link[1]}>{link[0]}</NavLink>
                                    </li>
                                )
                            }
                            
                        } else{
                            if(link[3]){
                                return(
                                    <li key={index} className='nav__item px-3 hover:bg-link-1-bgc-hover h-full flex justify-center items-center'>
                                        <NavLink to={link[1]}>{link[0]}</NavLink>
                                    </li>
                                )
                            }
                        }
                       
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;