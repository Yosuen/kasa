import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FicheInfo from '../components/ficheInfo';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/footer';
import Header from '../components/header';
import NotFound from './NotFound';

const FicheLogement = ({ logements }) => {
    <p>allo?</p>
    const { id } = useParams();
    const [logement, setLogement] = useState();
    console.log(logements);
    useEffect(() => {
        console.log('useEffect');
        setLogement(logements.find((element) => element.id === id));
        console.log(logement);
    }, []);
    if (logement === undefined) {
        <NotFound />
    } else {
        console.log(logement)
        const slides = logement.pictures;
        const data = logement;
        return (
            <div className='wrapperAll'>
                <div className='allButFooter'>
                    <Header />
                    <ImageSlider slides={slides} />
                    <FicheInfo data={data} />
                </div>
                <Footer />
            </div>
        );
    }

};

export default FicheLogement;