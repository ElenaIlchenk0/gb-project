import update from 'react-addons-update';
import {
  SEND_MESSAGE,
  DEL_MESSAGE,
  GET_MSGS_SUCCESS,
} from '../actions/msgActions';

const initialStore = {
  msgs: {},
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case GET_MSGS_SUCCESS: {
      return update(store, {
        msgs: {
          $set: action.msgs,
        },
      });
    }
    case DEL_MESSAGE: {
      delete store.msgs[action.id];
      return store;
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
