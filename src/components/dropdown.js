import React, { useState } from 'react';
import Arrow from '../assets/logos/arrow_back_ios-24px 1.svg';
import "../styles/index.scss";

{/* composant dropdown utilisé pour About et pour la fiche logement */}

const Dropdown = (props) => {
    const [wrapState, setWrapState] = useState(false);

    const toggleWrap = () => {
        setWrapState(!wrapState);
    };

    return (
        <div className='dropdown'>
            <div onClick={toggleWrap} className="dropdown__unwrapped">
                <span className= {`dropdown__title ${props.smallText ? "smallText" : null}`}>{props.title}</span>
                <img className= {`dropdown__arrow ${wrapState ? "dropdown__arrow--up" : "dropdown__arrow--down"}`} src={Arrow} alt="flèche wrap"/>
            </div>
            { wrapState ? <div className= {`dropdown__content ${props.smallText ? "smallText" : null}`}>
                <div>{props.text}</div>
            </div> : <div></div> }
        </div>
    );
};

export default Dropdown;