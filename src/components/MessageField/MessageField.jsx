import MessageComponent from '../MessageComponent/MessageComponent';
import './MessageField.css';
import { useRef, useEffect } from 'react';

const MessageField = (props) => {
  const fieldRef = useRef(null);

  useEffect(() => {
    if (fieldRef.current) fieldRef.current.scrollTop = fieldRef.current.scrollHeight;
  }, [props.messages]);
  
  return (
    <div ref={fieldRef} className="MessageField">
      {props.messages.map((message, i) => (
        <MessageComponent text={message} key={i} />
      ))}
    </div>
  );
};

export default MessageField;
