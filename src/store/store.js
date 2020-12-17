import { createStore } from 'redux'
import initReducers from './redusers'

function initStore() {
  const innitialStore = {}

  return createStore(initReducers, innitialStore)
}

export default initStore
