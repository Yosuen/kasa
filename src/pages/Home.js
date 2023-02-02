import React from 'react';
import Header from '../components/header';
import Gallery from "../components/gallery";
import Footer from '../components/footer';
import "../styles/settings.scss";


const Home = ({logements}) => {
    console.log(logements)
    if (logements.length > 0) {
        return (
            <div>
                <div className='allButFooter'>
                    <Header />
                    <div className='galleryMaskGroup'>
                        <img className='galleryImg' src={require('../assets/images/gallery1.png')} alt='gallery' />
                        <p className='galleryText'>Chez vous, partout et ailleurs</p>
                    </div>
                    <Gallery logements={logements} />
                </div>
                <Footer />
            </div>
        );
    }
};

export default Home;