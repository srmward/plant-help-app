import React, {Component} from 'react'
import Cookies from 'js-cookie'

export default class AuthCookieSetter extends Component {
  componentDidMount() {
    Cookies.set('email', this.props.email, {
      expires: 0.25,
    })
    Cookies.set('userId', this.props.token, {
      expires: 0.25,
    })
  }
  render() {
    return window.location.href = '/'
  }
}
