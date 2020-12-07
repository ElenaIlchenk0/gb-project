import React from 'react'
import './MessageComponent.css'

const MessageComponent = ({ text, sender }) => {
  const cls = []
  if (sender === 'me') {
    cls.push('selfMessage')
  }

  return (
    <div className={`MessageComponent ${cls.join(' ')}`}>
      <div className="sender">{`${sender}:`}</div>
      <div className="text">{text}</div>
    </div>
  )
}

export default MessageComponent
