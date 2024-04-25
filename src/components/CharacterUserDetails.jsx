import React from "react";
import "./CharacterUserDetails.css";

const CharacterUserDetails = ({ character }) => {
  return (
    <div>
      <div className="Imagen_char">
        <img src={character.image} alt={`avatar de ${character.name}`} />
      </div>
      <div className="titulo_char">
        <h2>{character.status}</h2>
        <p>{character.type}</p>
      </div>
    </div>
  );
};

export default CharacterUserDetails;