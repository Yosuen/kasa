import React, { useState, useRef, useEffect } from 'react';
import Arrow from '../assets/logos/arrow_back_ios-24px 1.svg';
import "../styles/components/dropdown.scss";

const Dropdown = (props) => {
    const [wrapState, setWrapState] = useState(false);

    const toggleWrap = () => {
        setWrapState(!wrapState);
    };

    return (
        <div className='dropdown'>
            <div onClick={toggleWrap} className="dropdown__unwrapped">
                <span className='dropdown__title'>{props.aboutTitle}</span>
                <img className= {`dropdown__arrow ${wrapState ? "dropdown__arrow--up" : "dropdown__arrow--down"}`} src={Arrow} alt="flèche wrap"/>
            </div>
            { wrapState ? <div className='dropdown__content'>
                <p>{props.aboutText}</p>
            </div> : <div></div> }
        </div>
    );
};

export default Dropdown;