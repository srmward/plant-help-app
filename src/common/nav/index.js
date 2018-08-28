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
    let { showMenu, onClick } = this.props
    return (
      <nav>
        <AuthConsumer>
          {({ isAuth, logout }) => (
            <ul css={navStyles}>
              <li>
                <Link to="/" css={navLogoStyles} onClick={() => onClick()}>
                  plant help.
                </Link>
              </li>
              {!isAuth && (
                <li>
                  <Link
                    to="/join"
                    css={showMenu ? navShowStyles : navHideStyles}
                    onClick={() => onClick()}
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
                    onClick={() => onClick()}
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
                    onClick={() => onClick()}
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
