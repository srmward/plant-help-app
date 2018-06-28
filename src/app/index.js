import React from 'react'
import { withRouter } from 'react-router'
import Home from '../home'
import { Route } from 'react-router-dom'
import Join from '../join'

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/join" component={Join} />
  </div>
)

export default withRouter(App)
