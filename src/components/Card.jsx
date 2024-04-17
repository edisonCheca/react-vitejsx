import React from 'react'
import UserDetails from './UserDetails'
import ButtonSection from './ButtonSection'
import './Card.css'

function Card(props) {
    const user = props.user;
    /* console.log(user) */
    const socialLinks = user["social-links"]
    return (
        <div className="cuadro">
            <UserDetails user={user} />
            <ButtonSection socialLinks={socialLinks} />
        </div>
    )
}

export default Card