import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {navStyles, navLinkStyles} from './styles'
import {AuthConsumer} from '../contexts/AuthContext'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <AuthConsumer>
          {({isAuth, logout}) => (
            <div css={navStyles}>
              <Link to="/" css={navLinkStyles}>
                plant help.
              </Link>
              {!isAuth && (
                <Link to="/join" css={navLinkStyles}>
                  join
                </Link>
              )}
              {!isAuth && (
                <Link to="/login" css={navLinkStyles}>
                  log in
                </Link>
              )}
              {isAuth && (
                <Link to="/water-table" css={navLinkStyles}>
                  water table
                </Link>
              )}
              {isAuth && (
                <Link to="/identify" css={navLinkStyles}>
                  identify
                </Link>
              )}
              {isAuth && (
                <p
                  css={navLinkStyles}
                  onClick={() => {
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
