import React from 'react'
import Cookies from 'js-cookie'

const AuthContext = React.createContext()

class AuthProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isAuth: Cookies.get('userId') || false }
  }
  login = () => {
    this.setState({ isAuth: true })
  }
  logout = () => {
    this.setState({ isAuth: false })
  }
  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
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
