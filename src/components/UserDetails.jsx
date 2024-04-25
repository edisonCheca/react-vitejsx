import React from "react";
import "./UserDetails.css";


const UserDetails = ({ character }) => {
    return (
        <div>
            <div className="Imagen">
                <img src={character.image} alt={`avatar de ${character.name}`} />
            </div>
            <div className="titulo">
                <h2>{character.name}</h2>
                <h4>{character.species}</h4>
                <p>{character.gender} {character.status}</p>
            </div>
        </div>
    );
};

export default UserDetails;