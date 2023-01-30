import React from 'react';
import { useParams } from 'react-router-dom';
import Caroussel from '../components/caroussel';
import Footer from '../components/footer';
import Header from '../components/header';
import logements from "../assets/logements.json"

const FicheLogement = () => {
    const { id } = useParams();
    let logement = logements.find((element) => element.id == id)
    console.log(logement)
    return (
        <div className='wrapperAll'>
            <div className='allButFooter'>
                <Header />
                {/* <Caroussel /> */}
            </div>
            <Footer />
        </div>
    );
};

export default FicheLogement;