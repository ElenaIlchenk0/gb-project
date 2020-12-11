import React, { useRef, useEffect, useState } from 'react'
import MessageComponent from '../MessageComponent/MessageComponent'
import ChatInput from '../ChatInput/ChatInput'
import './MessageField.css'

const MessageField = props => {
  const fieldRef = useRef(null)
  const [msgs, setMsgs] = useState([
    {
      text: 'Привет',
      sender: 'me',
    },
  ])

  useEffect(() => {
    if (fieldRef.current)
      fieldRef.current.scrollTop = fieldRef.current.scrollHeight

    const timerBot = setTimeout(() => {
      if (msgs[msgs.length - 1].sender !== 'bot') {
        setMsgs([...msgs, { text: 'Я робот!', sender: 'bot' }])
      }
    }, 1000)

    return () => {
      clearTimeout(timerBot)
    }
  }, [msgs])

  const sendHandler = (text, sender) => {
    setMsgs([...msgs, { text, sender }])
  }

  return (
    <div className="chatField">
      <div ref={fieldRef} className="MessageField">
        {msgs.map((message, i) => (
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
