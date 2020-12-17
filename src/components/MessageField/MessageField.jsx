import React, { useRef, useEffect } from 'react'
import MessageComponent from '../MessageComponent/MessageComponent'
import ChatInput from '../ChatInput/ChatInput'
import './MessageField.css'

const MessageField = (props) => {
  const fieldRef = useRef(null)

  useEffect(() => {
    if (fieldRef.current) {
      fieldRef.current.scrollTop = fieldRef.current.scrollHeight
    }
  }, [props.msgs])

  const renderMsgs = () => {
    const { msgs, chats, activeChat } = props

    return chats[activeChat].messageList.map((messageId, index) => (
      <MessageComponent
        key={index}
        text={msgs[messageId].text}
        sender={msgs[messageId].sender}
      />
    ))
  }

  return (
    <div className="chatField">
      <div ref={fieldRef} className="MessageField">
        {renderMsgs()}
      </div>
      <ChatInput onClickHandler={props.send} />
    </div>
  )
}

export default MessageField
