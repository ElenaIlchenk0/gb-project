export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, text, sender, chatId) => {
  return function (dispatch, getState) {
    if (sender === 'me') {
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
    }
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
