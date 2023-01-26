import React from 'react';
import Header from '../components/header';
import Gallery from "../components/gallery";
import Footer from '../components/footer';


const Home = () => {
    return (
        <div>
            <Header />
            <div className='galleryMaskGroup'>
                <img className='galleryImg' src={require('../assets/gallery1.png')} alt='gallery' />
                <p className='galleryText'>Chez vous, partout et ailleurs</p>
            </div>
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;