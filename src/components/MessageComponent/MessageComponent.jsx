import React from 'react'
import './MessageComponent.css'

const MessageComponent = ({ text, sender }) => {
  return (
    <div
      className={`MessageComponent ${sender === 'me' ? ' selfMessage' : ''}`}
    >
      <div className="sender">{`${sender}:`}</div>
      <div className="text">{text}</div>
    </div>
  )
}

export default MessageComponent
