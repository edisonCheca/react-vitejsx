import React from 'react'
import "./UserDetails.css";
import avatarJessica from '../assets/avatar-jessica.jpeg'

const UserDetails = () => {
    return (
        <div>
            <div className="Imagen">
                <img src={avatarJessica} />
            </div>
            <div className="titulo">
                <h2>Jessica Randall</h2>
                <h4>London, United kingdom</h4>
                <p>"Front-end developer and avid reader."</p>
            </div>
        </div>

    )
}

export default UserDetails