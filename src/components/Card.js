import React from 'react';
import './Card.css';

const Card = (props) => {
    const {id, name, email} = props;
    
    return (
        <div className='width tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='#' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;