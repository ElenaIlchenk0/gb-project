import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router/Router'
import { Provider } from 'react-redux'
import initStore from './store/store'
import './index.css'

ReactDOM.render(
  <Provider store={initStore()}>
    <BrowserRouter>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
