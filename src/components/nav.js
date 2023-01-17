import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>À Propos </li>
                </NavLink>
            </ul>

        </div>
    );
};

export default nav;