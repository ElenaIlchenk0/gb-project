import React, { useState, useRef, useCallback, useEffect } from 'react'
import './ChatInput.css'

const ChatInput = (props) => {
  const inputRef = useRef(null)
  const [inputVal, setInputVal] = useState('')

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  const clickHandler = useCallback(() => {
    if (inputVal !== '') props.onClickHandler(inputVal, 'me')
    setInputVal('')
  }, [props, inputVal])

  const inputHandler = useCallback((e) => {
    setInputVal(e.target.value)
  }, [])

  const onKeyPressHandler = useCallback(
    (e) => {
      if (e.charCode === 13) clickHandler()
    },
    [clickHandler]
  )

  return (
    <div className="ChatInput">
      <input
        ref={inputRef}
        className="input"
        type="text"
        onChange={inputHandler}
        onKeyPress={onKeyPressHandler}
        value={inputVal}
      />
      <button className="button" onClick={clickHandler}>
        {props.text}
      </button>
    </div>
  )
}

export default ChatInput
