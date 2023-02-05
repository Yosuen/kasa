import React from 'react';
import Tile from './tile';

const Gallery = ({logements}) => {
    return (
        <div className='galleryContainer'>
            <div className='tilePlacement'>
                {logements.map((logement) => {
                    return (
                        <Tile key={logement.id} logement={logement} />
                    )
                })}
                
            </div>
        </div>
    );
};

export default Gallery;