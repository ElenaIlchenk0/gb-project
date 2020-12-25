import update from 'react-addons-update';
import { SEND_MESSAGE, DEL_MESSAGE } from '../actions/msgActions';
import { ADD_CHAT } from '../actions/chatActions';

const initialStore = {
  chatList: {
    1: { name: 'Чат 1', messageList: [1] },
    2: { name: 'Чат 2', messageList: [2] },
    3: { name: 'Чат 3', messageList: [3] },
  },
  contactList: ['Alexandra', 'Den', 'Filipp'],
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case DEL_MESSAGE: {
      return update(store, {
        chatList: {
          [action.activeChat]: {
            messageList: {
              $splice: [
                [
                  store.chatList[action.activeChat].messageList.indexOf(
                    action.id
                  ),
                  1,
                ],
              ],
            },
          },
        },
      });
    }
    case SEND_MESSAGE: {
      return update(store, {
        chatList: {
          $merge: {
            [action.chatId]: {
              name: store.chatList[action.chatId].name,
              messageList: [
                ...store.chatList[action.chatId].messageList,
                action.messageId,
              ],
            },
          },
        },
      });
    }
    case ADD_CHAT: {
      const chatId = Object.keys(store.chatList).length + 1;
      return update(store, {
        chatList: {
          $merge: {
            [chatId]: {
              name: action.title,
              messageList: [],
            },
          },
        },
      });
    }
    default:
      return store;
  }
}
