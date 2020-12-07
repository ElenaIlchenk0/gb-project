import React from 'react';
import './MessageComponent.css';

const MessageComponent = ({ text, sender }) => {
  return <div className="MessageComponent">{`${sender}: ${text}`}</div>;
};

export default MessageComponent;
