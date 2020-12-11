import React, { useRef, useEffect, useState } from 'react'
import MessageComponent from '../MessageComponent/MessageComponent'
import ChatInput from '../ChatInput/ChatInput'
import './MessageField.css'

const MessageField = (props) => {
  const fieldRef = useRef(null)
  const [msg, setMsg] = useState([
    {
      text: 'Привет',
      sender: 'me',
    },
  ])

  useEffect(() => {
    if (fieldRef.current)
      fieldRef.current.scrollTop = fieldRef.current.scrollHeight

    let timerBot = setTimeout(() => {
      if (msg[msg.length - 1].sender !== 'bot') {
        setMsg([...msg, { text: 'Я робот!', sender: 'bot' }])
      }
    }, 1000)

    return () => {
      clearTimeout(timerBot)
    }
  }, [msg])

  const sendHandler = (text, sender) => {
    setMsg([...msg, { text, sender }])
  }

  return (
    <div className="chatField">
      <div ref={fieldRef} className="MessageField">
        {msg.map((message, i) => (
          <MessageComponent
            text={message.text}
            sender={message.sender}
            key={i}
          />
        ))}
      </div>
      <ChatInput onClickHandler={sendHandler} />
    </div>
  )
}

export default MessageField
