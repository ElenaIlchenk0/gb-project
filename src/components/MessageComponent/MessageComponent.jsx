import React, { useState } from 'react';
import './MessageComponent.css';

const MessageComponent = ({ text, sender, chatClickHandler }) => {
  const [hide, setHide] = useState(false);

  return (
    <div
      className={`MessageComponent ${sender === 'me' ? ' selfMessage' : ''}`}
      onClick={() => setHide(!hide)}
    >
      <div>
        <div className="sender">{`${sender}:`}</div>
        <div className="text">{text}</div>
      </div>

      {hide && (
        <div className="close" onClick={chatClickHandler}>
          X
        </div>
      )}
    </div>
  );
};

export default MessageComponent;
