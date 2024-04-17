// Card.js
import React from 'react';
import UserDetails from './UserDetails';
import ButtonSection from './ButtonSection';
import './Card.css';

const Card = (props) => {
    const character = props.character;
    return (
        <div className="cuadro">
            <UserDetails character={character} />
            <ButtonSection />
        </div>
    )
}

export default Card;
