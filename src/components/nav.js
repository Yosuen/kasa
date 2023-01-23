import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navbar'>
            <ul>
                <NavLink to="/">
                    <li className='navbtn__1 navbtn'>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li className='navbtn__2 navbtn'>À Propos </li>
                </NavLink>
            </ul>

        </div>
    );
};

export default Nav;