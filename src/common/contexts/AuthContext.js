import React, { Component } from 'react'
import Cookies from 'js-cookie'

const AuthContext = React.createContext()

class AuthProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: Cookies.get('userId') || false,
      email: Cookies.get('email') || false,
    }
  }

  handleAuth = ({ login, signup }) => {
    Cookies.set('email', login ? login.user.email : signup.user.email, {
      expires: 0.25,
    })
    Cookies.set('userId', login ? login.token : signup.token, {
      expires: 0.25,
    })
    window.location.href = '/'
  }

  logout = () => {
    Cookies.remove('userId')
    Cookies.remove('email')
    window.location.href = '/'
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          email: this.state.email,
          handleAuth: this.handleAuth,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
