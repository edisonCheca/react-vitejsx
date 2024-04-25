import React from 'react';
import "./CharacterButtonSection.css";
import { NavLink } from "react-router-dom";

const CharacterButtonSection = () => {
  return (
    <div>
      <div className='botones_char'>
        <NavLink to="/">
          <button>HOME</button>
        </NavLink>

      </div>
    </div>
  )
}
export default CharacterButtonSection;