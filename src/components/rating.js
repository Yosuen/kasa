import React from 'react';
import { ReactComponent as StarEmpty } from '../assets/logos/starEmpty.svg';
import { ReactComponent as StarFull } from '../assets/logos/starFull.svg';
import '../styles/index.scss';

const Rating = (props) => {
    const rows = [];
    for (let i = 0; i < props.rating; i++) {
        rows.push(<StarFull/>);
    }
    for (let i = 0; i < 5 - props.rating; i++) {
        rows.push(<StarEmpty/>);
    }
    return <div className='ficheInfo__rating'>
        {rows}
    </div>;
};

export default Rating;