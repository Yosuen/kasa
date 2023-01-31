import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import NotFoundComposant from '../components/notFound';
import '../styles/index.scss';

const NotFound = () => {
    return (
        <div className='wrapperAll'>
            <div className='allButFooter'>
                <Header />
                <NotFoundComposant />
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;