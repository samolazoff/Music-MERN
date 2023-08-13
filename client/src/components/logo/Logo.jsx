import React from 'react';

import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <h1 className='logo text-5xl my-3'>
            <Link to="/">MyMusic</Link>
        </h1>
    );
};

export default Logo;