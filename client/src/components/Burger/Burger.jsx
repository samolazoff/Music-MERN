import React from 'react';
import { useState } from 'react';

import './Burger.scss'

const Burger = () => {
    const [elem, setElem] = useState({
        menuTop: ["menu-global", "menu-top"],
        menuMiddle: ["menu-global", "menu-middle"],
        menuBottom: ["menu-global", "menu-bottom"],
        isActive: false
    });
    function qwer(){
        if(!elem.isActive){
            setElem( {
                menuTop: ["menu-global", "menu-top",'menu-top-click'],
                menuMiddle: ["menu-global", "menu-middle", 'menu-middle-click'],
                menuBottom: ["menu-global", "menu-bottom",'menu-bottom-click'],
                isActive: true
            })
        }
        if(elem.isActive){
            setElem ({
                menuTop: ["menu-global", "menu-top"],
                menuMiddle: ["menu-global", "menu-middle"],
                menuBottom: ["menu-global", "menu-bottom"],
                isActive: false
            })
        }
    }
    return (
        
        <div className="menu hidden" onClick={qwer}>
            <span  className={ elem.menuTop.join(' ')}></span>
            <span  className={ elem.menuMiddle.join(' ')}></span>
            <span  className={ elem.menuBottom.join(' ')}></span>
      </div>
    );
};

export default Burger;