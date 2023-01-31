import React from 'react';
import { useParams } from 'react-router-dom';
import FicheInfo from '../components/ficheInfo';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/footer';
import Header from '../components/header';
import logements from "../assets/dataset/logements.json"

const FicheLogement = () => {
    const { id } = useParams();
    const logement = logements.find((element) => element.id === id);
    console.log(logement)
    const slides = logement.pictures;
    const data = logement;
    return (
        <div className='wrapperAll'>
            <div className='allButFooter'>
                <Header />
                <ImageSlider slides={slides} />
                <FicheInfo data={data}/>
            </div>
            <Footer />
        </div>
    );
};

export default FicheLogement;