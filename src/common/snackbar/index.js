import React, { Component } from 'react'
import { showSnackbarStyles, hideSnackbarStyles, closeStyles } from './styles'

export default class Snackbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSnackbar: true,
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ showSnackbar: false }), 3000)
  }

  componentDidUpdate(prevProps) {
    if (this.props.msg !== prevProps.msg) {
      this.setState({ showSnackbar: true })
    }
  }

  handleCloseClick = e => {
    e.preventDefault()
    this.setState({ showSnackbar: false })
  }
  render() {
    let { msg } = this.props
    let { showSnackbar } = this.state
    return (
      <div css={showSnackbar ? showSnackbarStyles : hideSnackbarStyles}>
        {msg}
        <div css={closeStyles} onClick={this.handleCloseClick}>
          dismiss
        </div>
      </div>
    )
  }
}
