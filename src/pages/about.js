import React from 'react';
import Dropdown from '../components/dropdown';
import Footer from '../components/footer';
import Header from '../components/header';
import aboutData from '../assets/dataset/about.json';

// page à propos

const About = () => {
    return (
        <div className='wrapperAll'>
            <div className='allButFooter'>
                <Header />
                <div className='galleryMaskGroup'>
                    <img className='galleryImg' src={require('../assets/images/aboutImage.png')} alt='gallery' />
                </div>
                <Dropdown title={aboutData[0].title} text={aboutData[0].description} />
                <Dropdown title={aboutData[1].title} text={aboutData[1].description} />
                <Dropdown title={aboutData[2].title} text={aboutData[2].description} />
                <Dropdown title={aboutData[3].title} text={aboutData[3].description} />
            </div>
            <Footer />
        </div>
    );
};

export default About;