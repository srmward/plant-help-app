import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import navStyles from './styles'
import Cookies from 'js-cookie'

//TODO: Use Context API app-wide to determine whether user logged in
export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
    }
  }
  componentDidMount() {
    let loggedIn = Cookies.get('userId')
    this.setState({
      loggedIn,
    })
  }
  render() {
    let { loggedIn } = this.state
    return (
      <nav>
        <div css={navStyles}>
          <Link to="/">Plant Help.</Link>
          {!loggedIn && <Link to="/join">join</Link>}
          {!loggedIn && <Link to="/login">log in</Link>}
          {loggedIn && <Link to="/water-table">water table</Link>}
          {loggedIn && <Link to="/identify">identify</Link>}
          {loggedIn && (
            <p
              onClick={() => {
                Cookies.remove('userId')
                this.setState({ loggedIn: false })
              }}
            >
              log out
            </p>
          )}
        </div>
      </nav>
    )
  }
}
