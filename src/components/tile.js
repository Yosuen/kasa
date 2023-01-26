import React from 'react';
import { NavLink } from 'react-router-dom';

const Tile = ({logement}) => {
    console.log(logement)
    return (
        <NavLink to={'fiche-logement/' + logement.id} className='tileContainer'>
            <div className='tile'>
                <img className='tileCover' src={logement.cover} alt="" />
                <span className='tileText'>{logement.title}</span>
            </div>
        </NavLink>
    );
};

export default Tile;