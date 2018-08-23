import React from 'react'
import { withRouter } from 'react-router'
import Home from '../home'
import { Route } from 'react-router-dom'
import Join from '../join'
import Login from '../login'
import Nav from '../common/nav'
import WaterTable from '../water-table'
import Identify from '../identify'
import appStyles from './styles'
import { mobileMenuLink } from '../common/nav/styles'
import { AuthProvider } from '../common/contexts/AuthContext'
import ProtectedRoute from '../common/ProtectedRoute'

const App = () => (
  <div css={appStyles}>
    <AuthProvider>
      <div css={mobileMenuLink}>menu</div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/join" component={Join} />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/water-table" component={WaterTable} />
      <ProtectedRoute path="/identify" component={Identify} />
    </AuthProvider>
  </div>
)

export default withRouter(App)
