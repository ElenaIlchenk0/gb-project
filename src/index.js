import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router/Router'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
