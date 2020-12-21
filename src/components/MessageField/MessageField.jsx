import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../store/actions/msgActions';
import MessageComponent from '../MessageComponent/MessageComponent';
import ChatInput from '../ChatInput/ChatInput';
import './MessageField.css';

const MessageField = (props) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chatReducer.chatList);
  const msgs = useSelector((state) => state.msgReducer.msgs);
  const fieldRef = useRef(null);

  useEffect(() => {
    if (fieldRef.current) {
      fieldRef.current.scrollTop = fieldRef.current.scrollHeight;
    }
  });

  const sendHandler = useCallback(
    (text, sender) => {
      const { activeChat } = props;
      const messageId = Object.keys(msgs).length + 1;

      dispatch(sendMessage(messageId, text, sender, activeChat));
    },
    [dispatch, msgs, props.activeChat]
  );

  const renderMsgs = () => {
    const { activeChat } = props;

    return chats[activeChat].messageList.map((messageId, index) => (
      <MessageComponent
        key={index}
        text={msgs[messageId].text}
        sender={msgs[messageId].sender}
      />
    ));
  };

  return (
    <div className="chatField">
      <div ref={fieldRef} className="MessageField">
        {renderMsgs()}
      </div>
      <ChatInput onClickHandler={sendHandler} />
    </div>
  );
};

export default MessageField;
