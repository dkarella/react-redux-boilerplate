import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'redux'
import StoreFactory from './store'
import Routes from './routes'
import { exampleAction } from './actions/example'

import './stylesheets/index.scss'

const store = StoreFactory({})

store.dispatch( exampleAction() )

render (
    <Routes store={store} />,
  document.getElementById('react-container')
);
