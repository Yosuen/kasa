import React from 'react';
import LogoW from './logoW';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerWrapper'>
            <LogoW />
            <span className='footerCopyright'> © 2020 Kasa. All rights reserved </span>
            </div>
        </div>
    );
};

export default Footer;