import React from 'react';
import '../styles/index.scss';
import Tag from './tag.js';
import Host from './host.js';
import Rating from './rating.js';
import Dropdown from './dropdown';

//partie inferieure de la page fiche logement

const FicheInfo = (props) => {
    const listEquipment = [];
    props.data.equipments.forEach(e => listEquipment.push(<li key={e}>{e}</li>));

    return (
        <div>
            <div className='ficheInfo__wrapper'>
                <div className='ficheInfo__LContainer'>
                    <p className='ficheInfo__title'>{props.data.title}</p>
                    <p className='ficheInfo__underTitle'>{props.data.location}</p>
                    <div className='ficheInfo__tags'>
                        {props.data.tags.map((tag, i) => (
                            <Tag key={i} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className='ficheInfo__RContainer'>
                    <Host hostName={props.data.host.name} hostPic={props.data.host.picture} />
                    <Rating key={props.data.rating} rating={props.data.rating} />
                </div>
            </div>
            <div className='ficheInfo__dropdown'>
                <Dropdown smallText='true' title="Description" text={props.data.description} />
                <Dropdown smallText='true' title="Equipements" text={listEquipment}/>
            </div>
        </div>

    );
};

export default FicheInfo;