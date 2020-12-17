import update from 'react-addons-update'
import { SEND_MESSAGE } from '../actions/msgActions'
import { ADD_CHAT } from '../actions/chatActions'

const initialStore = {
  chatList: {
    1: { name: 'Чат 1', messageList: [1] },
    2: { name: 'Чат 2', messageList: [2] },
    3: { name: 'Чат 3', messageList: [3] },
  },
}

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
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
      })
    }
    case ADD_CHAT: {
      const chatId = Object.keys(store.chatList).length + 1
      return update(store, {
        chatList: {
          $merge: {
            [chatId]: {
              name: action.title,
              messageList: [],
            },
          },
        },
      })
    }
    default:
      return store
  }
}
