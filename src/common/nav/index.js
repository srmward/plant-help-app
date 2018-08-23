import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { navStyles, navLinkStyles, navLogoStyles } from './styles'
import { AuthConsumer } from '../contexts/AuthContext'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <AuthConsumer>
          {({ isAuth, logout }) => (
            <ul css={navStyles}>
              <li>
                <Link to="/" css={navLogoStyles}>
                  plant help.
                </Link>
              </li>
              {!isAuth && (
                <li>
                  <Link to="/join" css={navLinkStyles}>
                    join
                  </Link>
                </li>
              )}
              {!isAuth && (
                <li>
                  <Link to="/login" css={navLinkStyles}>
                    log in
                  </Link>
                </li>
              )}
              {isAuth && (
                <li>
                  <Link to="/water-table" css={navLinkStyles}>
                    water table
                  </Link>
                </li>
              )}
              {isAuth && (
                <li>
                  <p
                    css={navLinkStyles}
                    onClick={() => {
                      logout()
                    }}
                  >
                    log out
                  </p>
                </li>
              )}
            </ul>
          )}
        </AuthConsumer>
      </nav>
    )
  }
}
