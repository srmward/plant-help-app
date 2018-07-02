import React from 'react'
import { withRouter } from 'react-router'
import Home from '../home'
import { Route } from 'react-router-dom'
import Join from '../join'
import Login from '../login'
import Nav from '../common/nav'
import WaterTable from '../water-table'
import Identify from '../identify'
import appStyles from './styles.js'

const App = () => (
  <div css={appStyles}>
    <Nav />
    <Route exact path="/" component={Home} />
    <Route path="/join" component={Join} />
    <Route path="/login" component={Login} />
    <Route path="/water-table" component={WaterTable} />
    <Route path="/identify" component={Identify} />
  </div>
)

export default withRouter(App)
