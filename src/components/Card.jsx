import React from 'react';
import UserDetails from './UserDetails'; 
/* import ButtonSection from './ButtonSection'; */
import { NavLink } from "react-router-dom";
import './Card.css';

const Card = ({ character }) => {
    return (
        <NavLink to={`/CharacterCard/?id=${character.id}`}>
            <div className="container">
                <div>
                   { <UserDetails character={character} /> }
                </div>
            </div>
        </NavLink>
    );
};

export default Card;
