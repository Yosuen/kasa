import React from 'react';
import Tile from './tile';

const Gallery = () => {
    return (
        <div className='galleryContainer'>
            <div className='galleryMaskGroup'>
                <img className='galleryImg' src={require('../assets/gallery1.png')} alt='gallery' />
                <p className='galleryText'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='tilePlacement'>
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
                <Tile />
            </div>
        </div>
    );
};

export default Gallery;