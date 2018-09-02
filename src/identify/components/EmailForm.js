import React, { Component } from 'react'
import {
  formStyles,
  inputStyles,
  labelStyles,
  buttonStyles,
} from '../../common/styles'

export default class EmailForm extends Component {
  render() {
    return (
      <form
        css={formStyles}
        onSubmit={e => {
          e.preventDefault()
          signup({
            variables: this.state,
          })
        }}
      >
        <label css={labelStyles}>email</label>
        <input
          css={inputStyles}
          name="email"
          onChange={this.handleChange}
          required
        />
        <button css={buttonStyles} type="submit">
          email me
        </button>
      </form>
    )
  }
}
