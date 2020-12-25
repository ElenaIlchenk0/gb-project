import update from 'react-addons-update';
import { SEND_MESSAGE, DEL_MESSAGE } from '../actions/msgActions';

const initialStore = {
  msgs: {
    1: { text: 'Привет!', sender: 'bot' },
    2: { text: 'Здравствуйте!', sender: 'bot' },
    3: { text: 'Hi!', sender: 'bot' },
  },
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case DEL_MESSAGE: {
      delete store.msgs[action.id];
    }
    case SEND_MESSAGE: {
      return update(store, {
        msgs: {
          $merge: {
            [action.messageId]: {
              text: action.text,
              sender: action.sender,
            },
          },
        },
      });
    }
    default:
      return store;
  }
}
