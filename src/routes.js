import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/containers/home'

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>
)

export default Routes
