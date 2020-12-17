import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

const Profile = (props) => {
  return (
    <div className={`Profile ${props.isOpen ? 'open' : ''}`}>
      PROFILE
      <br />
      <Link to={props.activeChat ? `/chat/${props.activeChat}` : '/'}>
        <button className="close-profile">Close</button>
      </Link>
    </div>
  )
}

export default Profile
