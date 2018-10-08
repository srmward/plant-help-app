import React, { Component } from 'react'
import {
  formStyles,
  inputStyles,
  labelStyles,
  buttonStyles,
} from '../../common/styles'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import Snackbar from '../../common/snackbar'

const SUBSCRIBE_USER_TO_NEWSLETTER = gql`
  mutation subscribe($email: String!) {
    subscribe(email: $email)
  }
`
export default class EmailForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      submitted: false,
    }
  }
  handleChange = e => {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  render() {
    return (
      <Mutation mutation={SUBSCRIBE_USER_TO_NEWSLETTER}>
        {(subscribe, { data, error }) => {
          return (
            <div>
              {error && (
                <Snackbar
                  msg={`There was an error adding your email to the list. Please check your email and try again.`}
                />
              )}
              {data && <Snackbar msg={`Success. You're signed up.`} />}
              <form
                css={formStyles}
                onSubmit={e => {
                  e.preventDefault()
                  subscribe({
                    variables: {
                      email: this.state.email,
                    },
                  })
                }}
              >
                <label css={labelStyles}>email</label>
                <input
                  css={inputStyles}
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <button
                  css={buttonStyles}
                  type="submit"
                  onClick={() => this.setState({ submitted: true })}
                >
                  email me
                </button>
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }
}
