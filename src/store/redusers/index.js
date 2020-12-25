import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import chatReducer from './chatReducer';
import msgReducer from './msgReducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    chatReducer,
    msgReducer,
  });
