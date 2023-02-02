import React from 'react';
import { NavLink } from 'react-router-dom';

const Tile = ({logement}) => {
    return (
        <NavLink to={'fiche-logement/' + logement.id} className='tileContainer'>
            <div className='tile'>
                <img className='tileCover' src={logement.cover} alt="logement pic" />
                <span className='tileText'>{logement.title}</span>
            </div>
        </NavLink>
    );
};

export default Tile;