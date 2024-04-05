import React from 'react'
import './Card.css'

import UserDetails from './UserDetails'
import ButtonSection from './ButtonSection'

const Card = () => {
    return (
        <div className="cuadro">
            <UserDetails />
            <ButtonSection />
        </div>
    )
}

export default Card