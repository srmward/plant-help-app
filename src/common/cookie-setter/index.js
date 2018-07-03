import React, { Component } from 'react'
import Cookies from 'js-cookie'

export default class CookieSetter extends Component {
  componentDidMount() {
    Cookies.set('userId', this.props.data, {
      expires: 0.25,
    })
  }
  render() {
    return null
  }
}
