import React from 'react';
import '../styles/index.scss';
import Tag from './tag.js';
import Host from './host.js';
import Rating from './rating.js';

const FicheInfo = (props) => {

    return (
        <div className='ficheInfo__wrapper'>
            <div className='ficheInfo__LContainer'>
                <p className='ficheInfo__title'>{props.data.title}</p>
                <p className='ficheInfo__underTitle'>{props.data.location}</p>
                <div className='ficheInfo__tags'>
                    {props.data.tags.map((tag) => (
                        <Tag tag={tag} />
                    ))}
                </div>
            </div>
            <div className='ficheInfo__RContainer'>
                <Host hostName={props.data.host.name} hostPic={props.data.host.picture}/>
                <Rating rating={props.data.rating}/>
            </div>
            
        </div>
    );
};

export default FicheInfo;