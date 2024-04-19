import React from 'react'
import CharacterDatails from './CharacterUserDetails'
import CharacterButton from './CharacterButtonSection'
import CharacterEpisode from './CharacterEpiside' 
import "./CharacterCard.css"

const card = (props) => {
  const character = props.character;
  const socialLinks=character["social-links"];
  return (
    <div className="cuadro">
      {<CharacterDatails character={character}/>}
      {<CharacterEpisode/>}
      <CharacterButton socialLinks={socialLinks}/>
    </div>
  )
}

export default card 