import React, {Component} from 'react'
import Cookies from 'js-cookie'

const AuthContext = React.createContext()

class AuthProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: Cookies.get('userId') || false,
      email: Cookies.get('email') || false
    }
  }

  logout = () => {
    this.setState({isAuth: false})
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
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer

export {AuthProvider, AuthConsumer}
