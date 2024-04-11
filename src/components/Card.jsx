import React from 'react'
import './Card.css'
import UserDetails from './UserDetails'
import ButtonSection from './ButtonSection'

function Card(props) {
    const user = props.user
    console.log(user)

    return (
        <div className="cuadro">
            {/* <UserDetails user={user}/> */}
            <ButtonSection />
        </div>
    )
}

export default Card