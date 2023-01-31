import React from 'react';
import Dropdown from '../components/dropdown';
import Footer from '../components/footer';
import Header from '../components/header';
import aboutData from '../assets/dataset/about.json';

const About = () => {
    return (
        <div className='wrapperAll'>
            <div className='allButFooter'>
                <Header />
                <div className='galleryMaskGroup'>
                    <img className='galleryImg' src={require('../assets/images/aboutImage.png')} alt='gallery' />
                </div>
                <Dropdown aboutTitle={aboutData[0].title} aboutText={aboutData[0].description} />
                <Dropdown aboutTitle={aboutData[1].title} aboutText={aboutData[1].description} />
                <Dropdown aboutTitle={aboutData[2].title} aboutText={aboutData[2].description} />
                <Dropdown aboutTitle={aboutData[3].title} aboutText={aboutData[3].description} />
            </div>
            <Footer />
        </div>
    );
};

export default About;