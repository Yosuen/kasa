import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FicheInfo from '../components/ficheInfo';
import ImageSlider from '../components/ImageSlider';
import Footer from '../components/footer';
import Header from '../components/header';

const FicheLogement = ({ logements }) => {
    const { id } = useParams();
    const [logement, setLogement] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        setLogement(logements.find((element) => element.id === id));
    }, [logements, id]);
    if (logement === undefined) {
        navigate("/404", { state: { message: "Can't get data" } });
    } else {
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