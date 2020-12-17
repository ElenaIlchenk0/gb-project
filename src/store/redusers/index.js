import { combineReducers } from 'redux'
import chatReducer from './chatReducer'
import msgReducer from './msgReducer'

export default combineReducers({
  chatReducer,
  msgReducer,
})
