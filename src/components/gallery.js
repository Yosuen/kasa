import React from 'react';
import Tile from './tile';

const Gallery = ({logements}) => {
    console.log(logements)
    return (
        <div className='galleryContainer'>
            <div className='tilePlacement'>
                {logements.map((logement) => {
                    return (
                        <Tile logement={logement} />
                    )
                })}
                
            </div>
        </div>
    );
};

export default Gallery;