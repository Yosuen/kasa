import React from 'react';

const NotFoundComposant = () => {
    return (
        <div className='container404'>
            <span className='text404'>404</span>
            <span className='textNotFound'>Oups! La page que vous demandez n'existe pas.</span>
            <a href='./' className='redirectHome'>Retourner sur la page d'accueil</a>
        </div>
    );
};

export default NotFoundComposant;