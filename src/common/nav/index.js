import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import navStyles from './styles'
import Cookies from 'js-cookie'
import { AuthConsumer } from '../contexts/AuthContext'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <AuthConsumer>
          {({ isAuth, logout }) => (
            <div css={navStyles}>
              <Link to="/">Plant Help.</Link>
              {!isAuth && <Link to="/join">join</Link>}
              <Link to="/water-table">protected</Link>
              {!isAuth && <Link to="/login">log in</Link>}
              {isAuth && <Link to="/water-table">water table</Link>}
              {isAuth && <Link to="/identify">identify</Link>}
              {isAuth && (
                <p
                  onClick={() => {
                    Cookies.remove('userId')
                    logout()
                  }}
                >
                  log out
                </p>
              )}
            </div>
          )}
        </AuthConsumer>
      </nav>
    )
  }
}
