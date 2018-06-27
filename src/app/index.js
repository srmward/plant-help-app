import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../home'
import Join from '../join'

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/join" component={Join} />
    </div>
  </Router>
)
