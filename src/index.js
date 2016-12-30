import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import StoreFactory from './store'
import Routes from './routes'

import './stylesheets/index.scss'

const store = StoreFactory({ /* Initial State */})

render (
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('react-container')
);
