import React from 'react';
import Logo from './logo';
import Nav from './nav';

const Header = () => {
    return (
        <div className='Header'>
            <Logo/>
            <Nav/>
        </div>
    );
};

export default Header;