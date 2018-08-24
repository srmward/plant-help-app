import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  navStyles,
  navHideStyles,
  navLogoStyles,
  navShowStyles,
} from './styles'
import { AuthConsumer } from '../contexts/AuthContext'

export default class Nav extends Component {
  render() {
    let { showMenu } = this.props
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
                  <Link
                    to="/join"
                    css={showMenu ? navShowStyles : navHideStyles}
                  >
                    join
                  </Link>
                </li>
              )}
              {!isAuth && (
                <li>
                  <Link
                    to="/login"
                    css={showMenu ? navShowStyles : navHideStyles}
                  >
                    log in
                  </Link>
                </li>
              )}
              {isAuth && (
                <li>
                  <Link
                    to="/water-table"
                    css={showMenu ? navShowStyles : navHideStyles}
                  >
                    water table
                  </Link>
                </li>
              )}
              {isAuth && (
                <li>
                  <p
                    css={showMenu ? navShowStyles : navHideStyles}
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
