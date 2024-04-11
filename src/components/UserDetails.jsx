import React, { useEffect, useState } from 'react'
import "./UserDetails.css";
/* import avatarJessica from '../assets/avatar-jessica.jpeg' */

const UserDetails = (props) => {
    const [user, setUser] = useState({})
    setUser(props.user)


    return (
        <div>
            <div className="Imagen">
                <img src={user.avatar} alt={`avatar de ${user.name}`}/>
            </div>
            <div className="titulo">
                <h2>{user.name}</h2>
                <h4>{user.location}</h4>
                <p>{user.description}</p>
            </div>
        </div>

    )
}

export default UserDetails