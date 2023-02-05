import { React, useState } from 'react';
import { ReactComponent as ArrowBack } from '../assets/logos/arrow_back_ios-24px 1.svg';
import { ReactComponent as ArrowForward } from '../assets/logos/arrow_forward_ios-24px 1.svg';
import '../styles/index.scss';

const ImageSlider = (props) => {
    const[currentImg, setCurrentImg] = useState(0);
    let nbImg = props.slides.length;

    const nextSlide = () => {
        if (nbImg > 1) {
            if (currentImg === nbImg - 1) {
                setCurrentImg(0);
            } else {
                setCurrentImg(currentImg + 1);
            }
        }
    };

    const prevSlide = () => {
        if (nbImg > 1) {
            if (currentImg === 0) {
                setCurrentImg(nbImg - 1);
            } else {
                setCurrentImg(currentImg - 1);
            }
        }
    };
    return (
        <div className='imageSliderContainer'>
            <img className='image' src={props.slides[currentImg]} />
            {nbImg > 1 ?
                <div className='wrapper'>
                    <ArrowBack className='wrapper__arrow wrapper__arrow--L' onClick={prevSlide} />
                    <span className='wrapper__bulletPoint'>{currentImg + 1}/{nbImg}</span>
                    <ArrowForward className='wrapper__arrow wrapper__arrow--R' onClick={nextSlide} />
                </div>
                : <div></div>}
        </div>
    );
};

export default ImageSlider;