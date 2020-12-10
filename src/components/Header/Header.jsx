import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className="Header">
      <h1>{props.activeChat}</h1>
    </div>
  )
}

export default Header
