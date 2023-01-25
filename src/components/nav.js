import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar'>
            <NavLink to="/" className='navbtn' style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none'
            })}>
                Accueil
            </NavLink>
            <NavLink to="/about" className='navbtn' style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none'
            })}>
                A propos
            </NavLink>


        </div>
    );
};

export default Nav;