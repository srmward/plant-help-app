/* ProtectedRoute.js */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './contexts/AuthContext'
import Forbidden from '../status-pages/Forbidden'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        render={props => (isAuth ? <Component {...props} /> : <Forbidden />)}
        {...rest}
      />
    )}
  </AuthConsumer>
)

export default ProtectedRoute
