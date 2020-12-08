import React, { useRef, useEffect } from 'react'
import MessageComponent from '../MessageComponent/MessageComponent'
import './MessageField.css'

const MessageField = (props) => {
  const fieldRef = useRef(null)

  useEffect(() => {
    if (fieldRef.current)
      fieldRef.current.scrollTop = fieldRef.current.scrollHeight
  }, [props.messages])

  return (
    <div ref={fieldRef} className="MessageField">
      {props.messages.map((message, i) => (
        <MessageComponent text={message.text} sender={message.sender} key={i} />
      ))}
    </div>
  )
}

export default MessageField
