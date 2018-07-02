import React from 'react'
import { withRouter } from 'react-router'
import Home from '../home'
import { Route } from 'react-router-dom'
import Join from '../join'
import Login from '../login'
import Nav from '../common/Nav'
import WaterTable from '../water-table'
import Identify from '../identify'

const App = () => (
  <div>
    <Nav />
    <Route exact path="/" component={Home} />
    <Route path="/join" component={Join} />
    <Route path="/login" component={Login} />
    <Route path="/water-table" component={WaterTable} />
    <Route path="/identify" component={Identify} />
  </div>
)

export default withRouter(App)
