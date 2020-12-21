import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './redusers';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : () => {};

function initStore() {
  const innitialStore = {};

  return createStore(
    initReducers(history),
    innitialStore,
    compose(applyMiddleware(routerMiddleware(history), thunk), reduxDevTool)
  );
}

export default initStore;
