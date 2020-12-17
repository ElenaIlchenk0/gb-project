import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person'
import './Header.css'
import Profile from '../Profile/Profile'

const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.profile ? 'Profile' : props.chatName}</h1>
      <Link className="profileLink" to="/profile">
        <div className="profileIcon">
          <span>User's profile</span>
          <PersonIcon style={{ color: '#065032' }} fontSize="large" />
        </div>
      </Link>

      <Profile isOpen={props.profile} />
    </div>
  )
}

export default Header
