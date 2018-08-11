import React, {Component} from 'react'
import Cookies from 'js-cookie'

export default class CookieSetter extends Component {
  componentDidMount() {
    Cookies.set('email', this.props.data.login.user.email, {
      expires: 0.25,
    })
    Cookies.set('userId', this.props.data.login.token, {
      expires: 0.25,
    })
  }
  render() {
    return window.location.href = '/'
  }
}
