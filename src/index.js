import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import Router from './components/Router/Router';
import { Provider } from 'react-redux';
import initStore, { history } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

const { store, persistor } = initStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <React.StrictMode>
          <Router />
        </React.StrictMode>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
