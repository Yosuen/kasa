import React from 'react';

const Tag = (props) => {
    return (
        <div className='tagContainer'>
            <span className='tag'>{props.tag}</span>
        </div>
    );
};

export default Tag;