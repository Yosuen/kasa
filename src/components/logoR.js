import React from 'react';
import {ReactComponent as LogoRed} from '../assets/logos/LOGORed.svg';

const LogoR = () => {
    return (
        <div className='headerLogo'>
            <LogoRed className='headerLogoSVG' />
        </div>
    );
};

export default LogoR;