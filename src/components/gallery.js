import React from 'react';
import Tile from './tile';
import logements from "../assets/dataset/logements.json";

const Gallery = () => {
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