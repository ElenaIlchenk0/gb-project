import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import Router from './components/Router/Router';
import { Provider } from 'react-redux';
import initStore, { history } from './store/store';
import './index.css';

ReactDOM.render(
  <Provider store={initStore()}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
