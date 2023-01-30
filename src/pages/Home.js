import React from 'react';
import Header from '../components/header';
import Gallery from "../components/gallery";
import Footer from '../components/footer';
import "../styles/settings.scss";


const Home = () => {
    return (
        <div>
            <div className='allButFooter'>
                <Header />
                <div className='galleryMaskGroup'>
                    <img className='galleryImg' src={require('../assets/gallery1.png')} alt='gallery' />
                    <p className='galleryText'>Chez vous, partout et ailleurs</p>
                </div>
                <Gallery />
            </div>
            <Footer />
        </div>
    );
};

export default Home;