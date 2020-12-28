export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const DEL_MESSAGE = '@@message/DEL_MESSAGE';
export const GET_MSGS_SUCCESS = '@@message/GET_MSGS_SUCCESS';

export const deleteMsg = (id, activeChat) => ({
  type: DEL_MESSAGE,
  id,
  activeChat,
});

export const sendMessage = (messageId, text, sender, chatId) => {
  return function (dispatch, getState) {
    setTimeout(() => {
      if (
        Object.values(getState().msgReducer.msgs)[
          Object.values(getState().msgReducer.msgs).length - 1
        ].sender === 'me'
      ) {
        return dispatch(
          sendMessage(
            Object.keys(getState().msgReducer.msgs).length + 1,
            'я бот',
            'bot',
            chatId
          )
        );
      }
    }, 1000);

    return dispatch(sendNewMessage(messageId, text, sender, chatId));
  };
};

const sendNewMessage = (messageId, text, sender, chatId) => ({
  type: SEND_MESSAGE,
  messageId,
  text,
  sender,
  chatId,
});

export const getMsgsSuccess = (msgs) => ({
  type: GET_MSGS_SUCCESS,
  msgs,
});

export const loadMsgs = (url) => (dispatch) => {
  fetch(url)
    .then((res) => res.json())
    .then((msgs) => dispatch(getMsgsSuccess(msgs)));
};
