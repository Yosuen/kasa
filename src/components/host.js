import React from 'react';
import '../styles/index.scss'

const Host = (props) => {
    return (
        <aside className="hostContainer">
			<div className="hostName">{props.hostName}</div>
			<div className="hostPicture">
				<img className='hostImg' src={props.hostPic} alt={props.id} />
			</div>
		</aside>
    );
};

export default Host;