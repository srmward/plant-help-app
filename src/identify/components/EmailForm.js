import React, { Component } from 'react'
import {
  formStyles,
  inputStyles,
  labelStyles,
  buttonStyles,
  buttonLoadingStyles,
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
  state = {
    email: '',
    isLoading: false,
  }
  handleChange = e => {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  render() {
    let { isLoading } = this.state
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

              {data ? (
                <p>
                  Thank you for your submission. You will hear from us when the
                  feature is available.
                </p>
              ) : (
                <form
                  css={formStyles}
                  onSubmit={e => {
                    e.preventDefault()
                    this.setState({ isLoading: true })
                    error = false
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
                    css={
                      isLoading && !error ? buttonLoadingStyles : buttonStyles
                    }
                    type="submit"
                    onClick={() => {
                      error = false
                      this.setState({ isLoading: true })
                    }}
                  >
                    {isLoading && !error ? 'loading ...' : 'email me'}
                  </button>
                </form>
              )}
            </div>
          )
        }}
      </Mutation>
    )
  }
}
